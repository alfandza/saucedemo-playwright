# Saucedemo Swag Labs Playwright

This is the test I've made using Playwright written in Javascript. I've made 3 test
1. Login Test
2. Select Item Test
3. Full Flow Script Test

## Prerequisite

1. Latest Node.js
2. Playwright

## Usage

Run full test
```
npx playwright test
```

Run login test only
```
npx playwright test 1_login.spec.js
```
Run select item only
```
npx playwright test 2_select-item.spec.js
```
Run full flow script only
```
npx playwright test 3_full-flow-script.spec.js
```
Generate Report
```
npx playwright show-report
```