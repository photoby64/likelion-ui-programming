export enum Greeting {
  KO = '안녕!',
  EN = 'Hello',
  JP = 'こんにちは',
  CN = '你好。',
  ES = 'Hola',
  FR = 'Bonjour',
  IT = 'Buon giorno',
  RU = 'ДРАВСТВУЙТЕ',
}

const languageCodeMap: { [key in keyof typeof Greeting]: string } = {
  KO: 'ko',
  EN: 'en',
  JP: 'ja',
  CN: 'zh',
  ES: 'es',
  FR: 'fr',
  IT: 'it',
  RU: 'ru',
};

export type languageCodeMap = keyof typeof languageCodeMap;
