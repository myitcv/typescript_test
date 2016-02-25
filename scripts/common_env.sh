set -e
shopt -s globstar
shopt -s extglob

ensure_at()
{
  if [ $# != 3 ]
  then
    echo "Incorrect number of arguments to ensure_at"
    exit 1
  fi

  # on CI server, create path if it does not exist
  # otherwise fail
  path=$1
  if [ ! -d $path ]
  then
    if [ $(running_on_ci_server) != "yes" ]
    then
      echo "Path $path does not exist"
      exit 1
    fi
    mkdir -p $path
  fi

  pushd $path > /dev/null

  # on CI server, git clone if code not cloned
  # otherwise fail
  url=$2
  if [[ ! "$url" =~ ^git@.*\.git$ ]]
  then
    echo "Not a git url: $url"
    exit 1
  fi

  if [ ! -d .git ]
  then
    if [ $(running_on_ci_server) != "yes" ]
    then
      echo "Path $path does not contain git tree"
      exit 1
    fi

    git clone $url .
  fi

  commit=$3
  echo "$path, commit: $commit"

  git fetch -q

  if [ $(running_on_ci_server) != "yes" ]
  then
    local changes
    changes=$(git diff-index --name-only HEAD --)
    if [ ! -z "$changes" ]
    then
      echo "Local modifications in $path"
      exit 1
    fi
    git checkout -q $commit
  else
    git checkout -qf $commit
  fi

  popd > /dev/null
}

export -f ensure_at

ensure_clean()
{
  local dir
  dir=$(pwd)
  if [ $# = 1 ]
  then
    dir=$1
  fi

  pushd $dir > /dev/null

  local output
  output=$(git status --porcelain)

  if [ -z "$output"  ]
  then
    echo "Git is clean"
  else
    >&2 echo -e "Git is not clean. The following files should have been committed:\n\n$output"
    exit 1
  fi

  popd > /dev/null
}

export -f ensure_clean

only_run_on_ci_server()
{
  if [ $(running_on_ci_server) != "yes" ]
  then
    echo "This script can ONLY be run on the CI server"
    exit 1
  fi
}

export -f only_run_on_ci_server

last_path () {
  echo "$1" | rev | cut -d ':' -f 1 | rev
}

export -f last_path

running_on_ci_server()
{
  set +u
  local res
  if [ "$CI_SERVER" == "yes" ]
  then
    res=yes
  else
    res=no
  fi
  set -u
  echo $res
}

export -f running_on_ci_server
