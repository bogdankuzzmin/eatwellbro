/**
 * The function takes a primary class name, a set of modifiers, and additional class names
 * as input and returns a formatted string of concatenated class names.
 *
 * @param className The primary CSS class name that forms the base of the concatenated string.
 * @param mods An object representing modifiers as key-value pairs.
 * Keys are strings representing class names, and values are either boolean or string.
 * Only the truthy values (boolean true or non-empty strings) are considered when forming the final string.
 * @param additional An array of additional class names to include in the final concatenated string.
 */

type Mods = Record<string, boolean | string>;

export default (className: string, mods: Mods = {}, additional: string[] = []): string => ([
  className,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className)
].join(' '));