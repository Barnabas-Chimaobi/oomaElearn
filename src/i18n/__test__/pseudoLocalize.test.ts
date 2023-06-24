import { pseudoLocalize } from '../pseudoLocalize';

describe('pseudoLocalize', () => {
  it('return a pseudo-translation of a given string', () => {
    expect(pseudoLocalize('Hello')).toEqual('Ħḗḗŀŀǿǿ');
    expect(pseudoLocalize('Hello world')).toEqual('Ħḗḗŀŀǿǿ ẇǿǿřŀḓ');
  });

  it('ignores HTML tags', () => {
    expect(pseudoLocalize('<p>Hello</p>')).toEqual('<p>Ħḗḗŀŀǿǿ</p>');
    expect(
      pseudoLocalize('<p>Hello <strong><mark></mark>world</strong></p>'),
    ).toEqual('<p>Ħḗḗŀŀǿǿ <strong><mark></mark>ẇǿǿřŀḓ</strong></p>');
    expect(pseudoLocalize('<p>Hello <a href="#">world</a></p>')).toEqual(
      '<p>Ħḗḗŀŀǿǿ <a href="#">ẇǿǿřŀḓ</a></p>',
    );
    expect(
      pseudoLocalize(
        "<p>Hello <a href='__URL.INFO_WORKPLACE_VESTING_AND_LOCKUP__'>world</a></p>",
      ),
    ).toEqual(
      "<p>Ħḗḗŀŀǿǿ <a href='__URL.INFO_WORKPLACE_VESTING_AND_LOCKUP__'>ẇǿǿřŀḓ</a></p>",
    );
  });
});
