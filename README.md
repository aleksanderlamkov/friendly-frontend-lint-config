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

Prettier (`.prettierrc`):
```yaml
"friendly-frontend-lint-config/prettier"
```

## Рекомендуемые скрипты

Добавьте в `package.json` в `scripts` команды для удобного запуска линтеров и форматтера:

```json
{
  "scripts": {
    "lint:js": "eslint . --ext .js,.jsx",
    "lint:js:fix": "eslint . --ext .js,.jsx --fix",
    "lint:css": "stylelint \"**/*.{css,scss}\"",
    "lint:css:fix": "stylelint \"**/*.{css,scss}\" --fix",
    "format": "prettier \"**/*.{js,jsx,ts,tsx,css,scss,html,json,md}\" --check",
    "format:fix": "prettier \"**/*.{js,jsx,ts,tsx,css,scss,html,json,md}\" --write",
    "lint": "run-s lint:js lint:css format",
    "lint:fix": "run-s lint:js:fix lint:css:fix format:fix"
  }
}
```
> ⚙️ Скрипты `lint` и `lint:fix` используют [npm-run-all](https://www.npmjs.com/package/npm-run-all). Установите его отдельно как dev-зависимость.

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

## Обратная связь
Если нашли баг или хотите предложить улучшение — открывайте issue или присылайте pull request.

GitHub: https://github.com/aleksanderlamkov/friendly-frontend-lint-config

## Лицензия
MIT

----

**Автор:** [Александр Ламков](https://www.youtube.com/@AleksanderLamkov)