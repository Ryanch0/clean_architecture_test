// eslint.config.js
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const defaultCodeStyle = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  plugins: {
    // @typescript-eslint 플러그인 제거 (이미 tseslint.configs.recommended에 포함됨)
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'unused-imports': unusedImports
  },
  rules: {
    'max-depth': ['error', 2], // 블록 중첩을 2단계로 제한
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // return 문 앞에 항상 공백 줄을 추가
      { blankLine: 'always', prev: '*', next: 'if' }, // if 문 앞에 항상 공백 줄을 추가
      { blankLine: 'always', prev: 'function', next: '*' }, // 함수 선언 후에 공백 줄 추가
      { blankLine: 'always', prev: '*', next: 'function' } // 함수 선언 전에 공백 줄 추가
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Interface 대신 type 을 사용하세요.'
      },
      {
        selector: 'VariableDeclaration[kind="let"]',
        message: 'let 대신 const 를 사용하세요.'
      },
      {
        selector: 'VariableDeclaration[kind="var"]',
        message: 'var 대신 const 를 사용하세요.'
      },
      {
        selector: 'SwitchStatement',
        message: 'switch 대신 if 를 사용하세요.'
      },
      {
        selector: 'ConditionalExpression',
        message: '삼항 연산자 대신 if 를 사용하세요.'
      },
      {
        selector: 'IfStatement[alternate]',
        message: 'else 대신 early return 을 사용하세요.'
      }
    ],
    // TypeScript 관련 규칙
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',

    // React 관련 규칙
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],

    // 사용하지 않는 import 정리
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}

export default tseslint.config(
  // JavaScript 기본 규칙
  js.configs.recommended,

  // TypeScript 권장 규칙 (여기서 이미 @typescript-eslint 플러그인이 제공됨)
  ...tseslint.configs.recommended,

  // 사용자 정의 코드 스타일
  defaultCodeStyle,

  // 특정 파일 무시
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      'vite.config.*',
      'vitest.config.*'
    ]
  }
)
