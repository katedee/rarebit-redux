# Rarebit Redux
Credit where credit is due: this is mostly [Geno7's Rarebit template](https://github.com/geno7/Rarebit), but with some quality-of-life updates, such as:

- Added a reset css for easier styling moving forward
- Introduced css variables for easier colour changes etc
- remove some deprecated methods (.substr → .substring)
- Fixed some html syntax (regular content, like the archive, ideally isn’t tables)
- Spruced up the archives a bit, and set it to one type of default since folks seemed spooked to edit it.
- Made using pgData the explicit means of adding comics, since everyone is using it anyways. This means no pesky management of the maxPg, _unless_ you want your update to begin on something that isn't the latest page.

## Detailed instructions in the works! 
For the most part, you can follow along with [other rarebit tutorials](https://3mtiae.neocities.org/LittleGuide/), just keep these tips in mind:
- you no longer need to change maxPg _unless_ you want the first page on home to be something other than the latest page.

## P.S. If you're Geno7...
And you'd rather I submit this to merge with your main repo (removing my little remix logo, of course), just let me know! I only didn't because I'm making some preference decisions (with defaulting to one archive, and using pgData for each update)