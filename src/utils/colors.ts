import * as radixColors from '@radix-ui/colors';

type RemoveDark<T extends string> = T extends `${infer Color}Dark` ? Color : T;
type RemoveP3<T extends string> = RemoveDark<
  T extends `${infer Color}P3` ? Color : T
>;
type RemoveA<T extends string> = RemoveP3<
  T extends `${infer Color}A` ? Color : T
>;

export type ColorNames = RemoveA<keyof typeof radixColors>;

export type Colors<T extends ColorNames = ColorNames> = {
  foreground: string;
  background: string;
  black: string;
  white: string;
} & {
  [key in Exclude<T, 'black' | 'white'>]: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step6: string;
    step7: string;
    step8: string;
    step9: string;
    step10: string;
    step11: string;
    step12: string;
  };
};

export function getColors<T extends ColorNames>(...colors: T[]) {
  const lightColorEntries = [
    ['foreground', '#000000'],
    ['background', '#ffffff'],
    ['black', '#000000'],
    ['white', '#ffffff'],
  ];
  const darkColorEntries = [
    ['foreground', '#ffffff'],
    ['background', '#000000'],
    ['black', '#000000'],
    ['white', '#ffffff'],
  ];

  for (const [key, value] of Object.entries(radixColors).filter(
    ([key]) => key === key.toLowerCase() && colors.includes(key as T),
  )) {
    const darkVariant = radixColors[
      `${key as Exclude<ColorNames, 'black' | 'white'>}Dark`
    ] as Record<string, string>;

    const lightStepEntries = [];
    const darkStepEntries = [];

    for (const [step, hex] of Object.entries(value)) {
      const stepName = `step${step.slice(key.length)}`;
      lightStepEntries.push([stepName, hex]);
      darkStepEntries.push([stepName, darkVariant[step]]);
    }

    lightColorEntries.push([key, Object.fromEntries(lightStepEntries)]);
    darkColorEntries.push([key, Object.fromEntries(darkStepEntries)]);
  }

  return [
    Object.fromEntries(lightColorEntries) as Colors<T>,
    Object.fromEntries(darkColorEntries) as Colors<T>,
  ] as const;
}

export function getVarContract<
  T extends string,
  U extends string,
  V extends Record<T, string | Record<U, string>>,
>(vars: V, prefix: string) {
  return (Object.entries(vars) as [T, string | Record<U, string>][]).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]:
        typeof value !== 'string'
          ? (Object.keys(value) as U[]).reduce(
              (acc, k) => {
                acc[k] = `${prefix}-${key}-${k}`;
                return acc;
              },
              {} as Record<U, string>,
            )
          : `${prefix}-${key}`,
    }),
    {} as V,
  );
}
