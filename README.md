# friendly-frontend-lint-config
Общие конфигурации для линтеров и форматтеров во фронтенд-проектах

## Установка

**Установите пакет и все необходимые зависимости одной командой:**

NPM:
```bash
npm install -D friendly-frontend-lint-config @babel/eslint-parser@7.28.0 @babel/plugin-syntax-jsx@7.27.1 @eslint/js@9.30.1 eslint@9.30.1 eslint-config-prettier@10.1.5 eslint-plugin-jsx-a11y@6.10.2 eslint-plugin-prettier@5.5.1 eslint-plugin-react@7.37.5 eslint-plugin-react-hooks@5.2.0 globals@16.3.0 prettier@3.6.2 stylelint@16.21.0 stylelint-config-standard-scss@15.0.1 stylelint-order@7.0.0 stylelint-scss@6.12.1 stylelint-selector-bem-pattern@4.0.1
```

Yarn:
```bash
yarn add -D friendly-frontend-lint-config @babel/eslint-parser@7.28.0 @babel/plugin-syntax-jsx@7.27.1 @eslint/js@9.30.1 eslint@9.30.1 eslint-config-prettier@10.1.5 eslint-plugin-jsx-a11y@6.10.2 eslint-plugin-prettier@5.5.1 eslint-plugin-react@7.37.5 eslint-plugin-react-hooks@5.2.0 globals@16.3.0 prettier@3.6.2 stylelint@16.21.0 stylelint-config-standard-scss@15.0.1 stylelint-order@7.0.0 stylelint-scss@6.12.1 stylelint-selector-bem-pattern@4.0.1
```

PNPM:
```bash
pnpm add -D friendly-frontend-lint-config @babel/eslint-parser@7.28.0 @babel/plugin-syntax-jsx@7.27.1 @eslint/js@9.30.1 eslint@9.30.1 eslint-config-prettier@10.1.5 eslint-plugin-jsx-a11y@6.10.2 eslint-plugin-prettier@5.5.1 eslint-plugin-react@7.37.5 eslint-plugin-react-hooks@5.2.0 globals@16.3.0 prettier@3.6.2 stylelint@16.21.0 stylelint-config-standard-scss@15.0.1 stylelint-order@7.0.0 stylelint-scss@6.12.1 stylelint-selector-bem-pattern@4.0.1
```

## Использование

ESLint (`eslint.config.js`):
```javascript
import config from 'friendly-frontend-lint-config/eslint'

export default config
```

Stylelint (`stylelint.config.js`):
```javascript
import config from 'friendly-frontend-lint-config/stylelint'

export default config
```

Prettier (`prettier.config.js`):
```yaml
import config from 'friendly-frontend-lint-config/prettier'

export default config
```

## Рекомендуемые скрипты

Добавьте в `package.json` в `scripts` команды для удобного запуска линтеров и форматтера:

```json
{
  "scripts": {
    "lint:js": "eslint . --ext .js,.jsx",
    "lint:js:fix": "eslint . --ext .js,.jsx --fix",
    "lint:css": "stylelint \"**/*.{css,scss,pcss}\"",
    "lint:css:fix": "stylelint \"**/*.{css,scss,pcss}\" --fix",
    "format": "prettier . --check",
    "format:fix": "prettier . --write",
    "lint": "run-s lint:js lint:css format",
    "lint:fix": "run-s lint:js:fix lint:css:fix format:fix"
  }
}
```
> ⚙️ Скрипты `lint` и `lint:fix` используют [npm-run-all](https://www.npmjs.com/package/npm-run-all). Установите его отдельно как dev-зависимость.

## 🧽 Исключение лишних файлов из Prettier

Prettier по умолчанию проверяет все файлы в проекте, включая `node_modules`, `dist`, `.git` и прочее. 

Чтобы избежать этого, обязательно создайте файл `.prettierignore` в корне проекта и добавьте в него следующее:
```
# Node/NPM stuff
node_modules
package-lock.json
yarn.lock
pnpm-lock.yaml

# Git
.git
.gitignore

# VSCode / JetBrains / OS
.vscode
.idea
.DS_Store

# Логи и отладка
npm-debug.log*
*.log

# Выходные файлы
dist
build
coverage
```

## Что входит в конфигурации

**ESLint**:
- `@eslint/js`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`
- поддержка JSX через `@babel/eslint-parser` и `@babel/plugin-syntax-jsx`
- отключение конфликтов с Prettier через `eslint-config-prettier`

> ⚠️ Конфигурация использует формат `eslint.config.js`, который поддерживается начиная с ESLint 9.

**Stylelint**:
- `stylelint-config-standard-scss`, `stylelint-scss`, `stylelint-order`, `stylelint-selector-bem-pattern`

**Prettier**:
- базовая конфигурация без лишнего

> 🔍 Все правила настроены по минимуму — чтобы не мешать разработке, но сохранять чистоту кода.

## 🔧 Поддержка TypeScript

Чтобы ESLint корректно проверял .ts и .tsx файлы, необходимо:

1. Установить дополнительные зависимости:

NPM:
```bash
npm install -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Yarn:
```bash
yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

PNPM:
```bash
pnpm add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2. Обновить конфигурацию ESLint

Если вы используете `eslint.config.js` (ESLint Flat Config), добавьте в него следующие настройки:
```javascript
import tsEslint from 'typescript-eslint'
import baseConfig from 'friendly-frontend-lint-config/eslint'

export default [
  ...baseConfig,
  ...tsEslint.configs.recommended,
]
```
> 📦 typescript-eslint с версии 7 предоставляет Flat Config по умолчанию. Никаких дополнительных костылей не нужно.

3. Обновить маску файлов в скриптах

Если вы добавляете TypeScript в проект, рекомендуется расширить маску в `package.json`:
```json
{
  "lint:js": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:js:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
}
```

## Обратная связь
Если нашли баг или хотите предложить улучшение — открывайте issue или присылайте pull request.

GitHub: https://github.com/aleksanderlamkov/friendly-frontend-lint-config

## Лицензия
MIT

----

**Автор:** [Александр Ламков](https://www.youtube.com/@AleksanderLamkov)