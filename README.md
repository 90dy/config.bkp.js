# Config.js

Stop over-engineer your JS config, just install @90dy/config

## Introduction

Development environment is my first focus, developer should never haave to struggle, and better, they must have an optimized ecosystem to improve their productivity, without having to know it.

## Philosophy

### Linter (ESlint)

For the ESLint config, I use custom config when developing (currently on VSCode);

For example, the unused import are not deleted at this time, but only when pushing to the repository.
It prevent developers to have to reimport everything when auto-save delete it.

### Formatter (ESlint, Prettier, Editor config, ...)

Opinionated question, isn't it ? Well, then.

#### Semicolon 🚫

I worked a lot in companies where semicolon where required, eventually this is just adding a character that prevent you to lint and format your files when you just copy a part of code to a function argument or JSX children. Try to convince me that it's more readable, or that optimize transpilatioin, it's not.

#### Tab over spaces ✅

Read [https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/]("Nobody talks about the reason to use tabs") will end the debates

#### Single Quotes ✅

Because less is more, even in JSX

#### Sorted Import ✅

Import must always been sorted and deleted when unused.

### Versioning

Semantic release

### Commits

Commits should follow commilint instruction, scopes should be required, and must be predefined
Searching for tools, and open to debate

### Hooks

Always better to push some good code, but the hooks' pipeline must be fast
