import { nameData } from './nameData';

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateEnglishName(gender: string, type: string): string {
  const surnames = nameData.surnames.en;
  const prefixes = nameData.prefixes.en;
  
  let firstName: string;
  if (type === 'legendary') {
    firstName = getRandomElement(prefixes.legendary[gender as keyof typeof prefixes.legendary]);
  } else if (type === 'cute') {
    firstName = getRandomElement(prefixes.cute[gender as keyof typeof prefixes.cute]);
  } else {
    firstName = getRandomElement(prefixes[gender as keyof typeof prefixes]);
  }
  
  const surname = getRandomElement(surnames);
  return `${firstName} ${surname}`;
}

function generateChineseName(gender: string, type: string): string {
  const surnames = nameData.surnames.zh;
  const prefixes = nameData.prefixes.zh;
  const suffixes = nameData.suffixes.zh;
  
  let prefix: string, suffix: string;
  if (type === 'legendary') {
    prefix = getRandomElement(prefixes.legendary[gender as keyof typeof prefixes.legendary]);
    suffix = getRandomElement(suffixes.legendary[gender as keyof typeof suffixes.legendary]);
  } else if (type === 'cute') {
    prefix = getRandomElement(prefixes.cute[gender as keyof typeof prefixes.cute]);
    suffix = getRandomElement(suffixes.cute[gender as keyof typeof suffixes.cute]);
  } else {
    prefix = getRandomElement(prefixes[gender as keyof typeof prefixes]);
    suffix = getRandomElement(suffixes[gender as keyof typeof suffixes]);
  }
  
  const surname = getRandomElement(surnames);
  return surname + prefix + suffix;
}

function generateJapaneseName(gender: string, type: string): string {
  const surnames = nameData.surnames.ja;
  const prefixes = nameData.prefixes.ja;
  const suffixes = nameData.suffixes.ja;
  
  let prefix: string, suffix: string;
  if (type === 'legendary') {
    prefix = getRandomElement(prefixes.legendary[gender as keyof typeof prefixes.legendary]);
    suffix = getRandomElement(suffixes.legendary[gender as keyof typeof suffixes.legendary]);
  } else if (type === 'cute') {
    prefix = getRandomElement(prefixes.cute[gender as keyof typeof prefixes.cute]);
    suffix = getRandomElement(suffixes.cute[gender as keyof typeof suffixes.cute]);
  } else {
    prefix = getRandomElement(prefixes[gender as keyof typeof prefixes]);
    suffix = getRandomElement(suffixes[gender as keyof typeof suffixes]);
  }
  
  const surname = getRandomElement(surnames);
  return `${surname} ${prefix}${suffix}`;
}

export function generateNames(
  language: string,
  gender: string,
  type: string,
  count: number
): string[] {
  const maxAttempts = count * 3; // Maximum attempts to generate unique names
  const uniqueNames = new Set<string>();
  let attempts = 0;

  // If gender is 'any', randomly choose between 'male' and 'female'
  const getGender = () => gender === 'any' ? (Math.random() < 0.5 ? 'male' : 'female') : gender;

  while (uniqueNames.size < count && attempts < maxAttempts) {
    const currentGender = getGender();
    let name: string;

    switch (language) {
      case 'en':
        name = generateEnglishName(currentGender, type);
        break;
      case 'zh':
        name = generateChineseName(currentGender, type);
        break;
      case 'ja':
        name = generateJapaneseName(currentGender, type);
        break;
      default:
        name = generateEnglishName(currentGender, type);
    }

    uniqueNames.add(name);
    attempts++;
  }

  return Array.from(uniqueNames);
}