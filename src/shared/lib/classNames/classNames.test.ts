import classNames from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods arguments (true, true)', () => {
    expect(classNames('someClass', { fullWidth: true, hovered: true })).toBe('someClass fullWidth hovered');
  });

  test('with mods arguments (true, false)', () => {
    expect(classNames('someClass', { fullWidth: true, hovered: false })).toBe('someClass fullWidth');
  });

  test('with mods arguments (true, undefined)', () => {
    expect(classNames('someClass', { fullWidth: true, hovered: undefined })).toBe('someClass fullWidth');
  });

  test('with additional argument', () => {
    expect(classNames('someClass', {}, ['additionalClass'])).toBe('someClass additionalClass');
  });

  test('with two additional argument', () => {
    const expected = 'someClass additionalClass secondAdditionalClass';
    expect(classNames('someClass', {}, ['additionalClass', 'secondAdditionalClass'])).toBe(expected);
  });
});