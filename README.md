# ember-cli-libravatar 

An [ember-cli](http://ember-cli.com) addon for a libravatar image component.

This is heavily based on
[ember-cli-gravatar](https://github.com/johnotander/ember-cli-gravatar) by
[John Otander](John Otander). See the original addon in action: <http://ember-cli-gravatar.divshot.io/>.

## Installation

For Ember CLI >= `0.2.3`

```
ember install ember-cli-libravatar
```

For Ember CLI < `0.2.3`

```
ember install:addon ember-cli-libravatar
```

## Usage

```hbs
{{libravatar-image email='victor@debian.org.ro'}}
```

__An example with multiple options:__

```hbs
{{libravatar-image email='victor@debian.org.ro'
  title='Victor Nițu'
  alt='Victor Nițu libravatar'
  defaultImage='identicon'
  class='img-circle'
  secure=false
  size=250}}
```

The default property is optional as well as the size. You can use a encoded url or a default icon name.

### Required

  * `email` *String* - the email for the libravatar.

### Optional

  * `class` *String* - any HTML classes to apply to the image. Default: `libravatar-image`.
  * `alt` *String* - alt description of the avatar. Default: none.
  * `size` *Number* - size of the image. Default: `250`.
  * `defaultImage` *String* - the default image to be used in case the email doesn't have a libravatar.
  * `title` *String* - the title attribute for the image. Default: none.
  * `secure` *Boolean* - whether `http` or `https` is used. Default: `true`.

### Content Security Policy

With the latest versions of the Ember CLI, you will have to whitelist libravatar.org with the following
in your `config/environment.js`:

```javascript
module.exports = function(environment) {
  // ...
  var ENV = {
    // ...
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self' www.libravatar.org",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    // ...
  }
  // ...
};
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com), hacked by [Victor
Nițu](http://nightsh.eu/) to meet freedom requirements.
