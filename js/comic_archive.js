// update this if your comic page is something other than index.html, you don't need to touch this otherwise
const indexPage = 'index.html';
/** 
 * comic_archive.js was originally created by geno7 and reworked by Kate Drwecka
 * 
 *  Writing sections of the archive page involves 2 steps:
 * - first, use the writeArchive function in this .js file. set the parameters (the stuff inside the parenthesis, comma separated) to toggle options.
 * - then, to place that section of the archive on the html page, you'd make a div, and give that div a class name of whatever you've called that section of the archive in the first parameter.
 * if you put anything in that div, the list of comics will get appended after it. i.e. you can put the title of that specific section as a header in that div. 
*/
writeArchive(
    "chrono", //class of the div that you want this section of the archive to appear in. to have it be on your html page, make an empty div with this class.
    1, //earliest page to list
    maxpg, //latest page to list. setting to maxpg will make it automatically update with the latest page
    false, //if set to true, list is displayed "latest first". if set to false, list is displayed chronologically
    true, //if set to true, each comic will have its own thumbnail image next to it. if a comic doesn't have its own thumbnail, it'll be set to the default thumbnail.
    true //if set to true, each comic will have a display number
);

/** 
 * writeArchive can have other applications and formats
 * 
 * display Latest page first
 * writeArchive("lastfirst", 1, maxpg, true, true,true);
 * 
 * writeArchive("chapter1",1,3,false,false,true) //writeArchive is for listing a RANGE of pages, take advantage of this by using headers to divide them into chapters or by month
 * 
 * CHAPTER examples. 
 * You will need to create a corresponding div in archive.html with the id of the first string you pass
 * ex. <div class="chapter2"><h2>Chapter 2</h2></div>
 * I've left commented out examples on archive.html
 * 
 * writeArchive("chapter2", 4, 9, false, false, false);
 * writeArchive("chapter3", 9, 12, false, false, false);
 * writeArchive("chapter4", 13, 15, false, false, false);
 * 
*/

function writeArchive(divClass, min, max, reverseOrder, useThumbs,useNums) {
    let getDiv = document.getElementsByClassName(divClass)[0]; //get div class
    //make the list from the currently available comics
    for (i = min; i <= max; i++) {    
        //default values when you don't have page data set
        let pgTitle = "Page " + i;
        let pgDate = "";
        let pgNum = "";

        //url of thumbnail
        let pgThumb = thumbFolder + "/" + image + i + "." + thumbExt;
        //url of default thumbnail
        let pgThumbDefault = thumbFolder + "/" + thumbDefault + "." + thumbExt;

        if (pgData.length >= i) {
            //set values to the values indicated in the pgData object if available
            if (pgData[i - 1].title) pgTitle = pgData[i - 1].title;

            if (pgData[i - 1].date) pgDate = pgData[i - 1].date;
            
            if (pgData[i - 1].pgNum) pgNum = pgData[i - 1].pgNum;
        }

        let linkToComic = `${indexPage}?pg=${i + navScrollTo}`;

        const archiveListItemHtml = `
            <div class="archiveRow">
                <a href="${linkToComic}">
                    ${useThumbs ? `
                        <div class="archiveCellThumb">
                            <img alt="${pgTitle}" title="${pgTitle}" src="${pgThumb}" onerror="javascript:this.src='${pgThumbDefault}'"/>
                        </div>
                      ` : ``}
                    <div class="archiveCellTitle leftAlignTableText">
                        <span>${pgTitle}</span>
                    </div>
                    ${useNums ? `
                        <div class="archiveCellNum">
                            <span>${pgNum}</span>
                        </div>
                      ` : ``}
                    <div class="archiveCellDate">
                        <span> ${pgDate} </span>
                    </div>
                </a>
            </div>
        `;

        let archiveListItem = document.createElement('div');
        archiveListItem.innerHTML = archiveListItemHtml;

        reverseOrder ? getDiv.prepend(archiveListItem) : getDiv.appendChild(archiveListItem);
    } // end of for loop
}