# RPM Packaging

## Initialization

```
$ xdnf install fedora-packager
```

## Authentication

You first need to authenticate to the build system:
```
$ fkinit -u <your_fedora_accounts_username>
```

You can check that the authentication is OK via:
```
$ koji moshimoshi
<A hello message>, <your_fedora_accounts_username>!

You are using the hub at https://koji.fedoraproject.org/kojihub
Authenticated via GSSAPI
```

## Working on an existing spec

Import the src.rpm package:
```
$ fedpkg import libfoo-x.x.x.src.rpm
$ git commit -m "Initial import (fedora#nnnnnn)."
$ git push
```

To push the work on rawhide to another branch:
```
$ fedpkg switch-branch <BRANCH>
$ git merge rawhide
$ git push
```

Now you can request a build on the branch you modified:
```
$ fedpkg switch-branch <BRANCH>
$ fedpkg build
```

## Working on a new spec

First, check on https://src.fedoraproject.org if the package exists or not.

Then build the package locally on the on COPR.

Open a review request here: https://bugzilla.redhat.com/enter_bug.cgi?product=Fedora&format=fedora-review
 * Make sure you put the name of the package in the Review Summary field, along with a very brief summary of what it is
 * Make sure that you put the URL paths for the SPEC file and the SRPM file in the Review Description
 * Put a description of your package (usually, this can be the same thing as what you put in the spec %description) in Review Description

When the package is approved, request a distgit repository for your package.

Request a distgit repository with
```
$ fedpkg request-repo PACKAGE-NAME BUGZILLA-TICKET-NUMBER
```

To clone locally a dist-git repo:
```
$ fedpkg clone <packagename>.
```

# Working with fedpkg to update your spec

## Make your changes to the package

Run the prep stage -> extract source, apply patches etc. within the checkout directory:
```
$ fedpkg prep
```
This is useful for making sure your patches apply cleanly, and inspecting the source tree if you need to do so.

## Do a local build of the current state
```
$ fedpkg local
```
This is the simplest kind of test build, but it’s usually cleaner and a better test to do a Mock or Koji scratch build (see below).

## Do a mock build of the current state
```
$ fedpkg mockbuild
```
This fires off a Mock build, if you have Mock configured correctly. Using Mock to Test Package Builds can help there.

## Generate a .src.rpm from the current state
```
$ fedpkg srpm
```
You can request a Koji scratch build (a test build, which will not go to any repository) of the generated .src.rpm with the koji build --scratch command (see man koji).

## Check changes you have made
```
$ fedpkg diff
```
This is handy for making sure you did not touch something by mistake, or forget to bump the release, or forget to include a changelog.

## Run some checks (rpmlint) on your package
```
$ fedpkg lint
```
If you want to whitelist some rpmlint errors and prevent them from appearing, you can create an rpmlint config file named <source_package_name>.rpmlintrc and it will get applied.

## Stage any small patches or new source files for commit
```
$ git add SOMEFILE
```
Git does not consider all files in the working directory to be a part of the git repository by default (handy for keeping other files around that are relevant, like the source tree). This tells git to start considering these files as part of the repository locally. When you commit and push later, this change is communicated to the server.

## Upload new source files to the lookaside cache
```
$ fedpkg new-sources
```

WARNING: This will replace the current list of source files, not add to it.
```
$ fedpkg upload
```

'Pristine' upstream sources (like release tarballs) and other larger source files are stored in the lookaside cache system, not committed directly to git. This provides more efficient storage and transfer of the files. The sources and .gitignore files in the repository keep it in sync with the lookaside cache. Any time you use fedpkg new-sources or fedpkg upload, you must remember to commit changes to those files.

new-sources 'starts from scratch', replacing all files currently in the lookaside cache. You will typically use this command for many packages with just a single source tarball, each time you update to a new upstream version. upload just adds the given file to those already in the cache. Do remember not to leave stale sources lying around.

## Switch to a different release branch
```
$ fedpkg switch-branch <f40,el9,rawhide>
```
Each Fedora release has its own branch in each package repository so different builds can be sent to each release. See below for more details on working with branches.

## Generate git changelog from package changelog
```
$ fedpkg clog
```
This command extracts your package changelog entry to the file clog, so you can use it as the git changelog if you like. Some maintainers draw a distinction between the two, some do not.

## Commit changes
```
$ fedpkg commit (-F clog) (-p) (-c)
```
This behaves by default like git commit -a: It stages modified files and commits all at once, though it does not add files which git is not yet tracking.

This creates a sort of bundle, a 'commit', of your changes to the repository, with a unique identity and a changelog. Other maintainers — and you yourself, later — can view the history of changes to the repository with the commit as the finest level of detail. It is good practice to use many relatively small commits, each for a single purpose. Do not combine a version bump with a bunch of whitespace fixes and some scriptlet changes all in one commit, create separate commits for each.

The -F clog parameter will use the clog file from the previous step as the changelog. -p will push (see below) at the same time as committing. -c combines the clog and commit -F clog steps into one, if you like that.

## Push changes
```
$ fedpkg push
```
This sends all the new commits in your local working copy to the upstream server. If you are still learning the system, now is a good time to fedpkg co another copy of the repository somewhere else, compare what you get to your working copy, and run a test build on it.

## Do an 'official' build of the latest pushed changes
```
$ fedpkg build
```

Submit 'official' builds from a stream branch
```
$ fedpkg build
```

There is no difference in the command line to submit multiple builds from a stream branch. But you need to create a config file package.cfg in the repository and set option for the builds. For example config file is created in a stream branch 8 of package foo, which has content:
```
[koji]
targets = f40 epel9
```
This example shows when you execute the build command, fedpkg is able to submit builds for releases, f40 and epel9.

In practice, you are able to specify two shortcut names fedora and epel for convenience. fedpkg retrieves current active Fedora and EPEL releases automatically. Hence, if you do not want to select a subset of releases, or just simply going to build packages for active releases without knowing the concrete release name, shortcut names would be helpful. You can specify to build for rawhide, use name master.

## Do a Container Layered Image Build
```
$ fedpkg container-build
```
See Container Layered Image Build for details.

Submit a package update for the latest build
```
$ fedpkg update
```

# Links

To host some data on a website:
https://fedorapeople.org/

Some information related to packaging:
https://docs.fedoraproject.org/en-US/packaging-guidelines/
https://docs.fedoraproject.org/en-US/packaging-guidelines/Naming/
https://docs.fedoraproject.org/en-US/packaging-guidelines/ReviewGuidelines/

Maintaining a package:
https://docs.fedoraproject.org/en-US/package-maintainers/New_Package_Process_for_Existing_Contributors/
https://docs.fedoraproject.org/en-US/package-maintainers/Package_Maintenance_Guide/
https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/

Testing a package:
https://bodhi.fedoraproject.org/
https://fedoraproject.org/wiki/Fedora_Easy_Karma
https://docs.pagure.org/koji/using_the_koji_build_system/
