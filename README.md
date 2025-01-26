# Rarebit Redux
![rarebit-redux-logo-bg](https://github.com/user-attachments/assets/b4ec42b7-b541-49e5-8229-88a8309174ce)

Credit where credit is due: this is basically [Geno7's](https://github.com/geno7) - [Rarebit template](https://github.com/geno7/Rarebit), but with some quality-of-life updates, such as:

- Added a reset css for easier styling moving forward
- Introduced css variables for easier colour changes etc
- remove some deprecated methods (.substr → .substring)
- Fixed some html syntax (regular content, like the archive, ideally isn’t tables)
- Spruced up the archives a bit, and set it to one type of default since folks seemed spooked to edit it.
- Made using pgData the explicit means of adding comics, since everyone is using it anyways. This means no pesky management of the maxPg, _unless_ you want your update to begin on something that isn't the latest page.

## Detailed instructions in the works! 
_[Download the latest release](https://github.com/katedee/rarebit-redux/releases/download/v1.0.0/rarebit-redux-1.0.zip) or [preview the site](https://rarebit-redux.netlify.app/), but it's basically just rarebit_

For the most part, you can follow along with [other rarebit tutorials](https://3mtiae.neocities.org/LittleGuide/), just keep these tips in mind:
- you no longer need to change maxPg _unless_ you want the first page on home to be something other than the latest page.

## P.S. If you're Geno7...
And you'd rather I submit this to merge with your main repo (removing my little remix logo, of course), just let me know! I only didn't because I'm making some preference decisions (with defaulting to one archive, and using pgData for each update)
