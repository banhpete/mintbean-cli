[![NPM](https://nodei.co/npm/mintbean-cli.png?compact=true)](https://nodei.co/npm/mintbean-cli/)
# mintbean-cli

Command line interface for easy creation and deployment of submissions for Mintbean hackathon challenges

## Install

`npm install -g mintbean-cli`

## Usage

This tool is run with `mint` command once installed.

Run `mint` for list of commands

### create new react app

`mint n <my-app>`

## Roadmap

Aiming for at least these features (bold indicates WIP)

| cmd                              | description                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`mint \|-h\|--help`**          | display help                                                                                                                   |
| **`mint -V\|--version`**         | display version                                                                                                                |
| **`mint new\|n [project-name]`** | create new project from template that you select after running. If no project name given, name defaults to `mintbean-hackathon-challenge-YYYY-MM-DD` |
| `mint deploy`                    | deploy project to github pages based on project type                                                                           |
| `mint share`                     | display remote repo link and github pages link                                                                                 |
| `mint login`                     | save user preferences, github/mintbean credentials                                                                             |

# Developers

## Testing

Currently, jest tests are limited to synchronous execution. Async execution is not supported because of how the CLI
depends on the current working directory to determine the target directory for the templated project.
