const tocList = [
  {
    key: 'installation',
    title: 'Installation'
  },
  {
    key: 'usage',
    title: 'Usage'
  },
  {
    key: 'credits',
    title: 'Credits'
  },
  {
    key: 'contributing',
    title: 'Contributing'
  },
  {
    key: 'tests',
    title: 'Tests'
  },
  {
    key: 'license',
    title: 'License'
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license.trim() !== ''){
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license.trim() !== ''){
  return `https://choosealicense.com/licenses/${license.trim().toLowerCase()}`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const lic = 
`${license}

This application is covered by the [${license}](${renderLicenseLink(license)}) license. 
`
return lic
}

function renderTableOfContent(data){
let mdToC = `
## Table of Contents`;

tocList.forEach((toc)=>{
if(data[toc.key]){ mdToC += `
* [${toc.title}](#${toc.key})`;
}})

if(data.username || data.email ){ mdToC += `
* [Questions](#question)`;
}

return mdToC;
}

function renderSectionContent(toc, data){
  if(toc.key === 'license'){
    return renderLicenseSection(data[toc.key])
  }
  return data[toc.key]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
let markdownContent =
`# ${data.title}

${renderLicenseBadge(data.license)}


## Description

${data.description}

${renderTableOfContent(data)}
`; 

tocList.forEach((toc)=>{

if(data[toc.key]){
markdownContent +=
`

## ${toc.title}

${renderSectionContent(toc, data)}
`
}  
});

// Add Questions
let qMarkdown =
`

-----

# Questions

For any questions, please contact me with the information below:

GitHub: [@${data.username}](https://github.com/${data.username})

Email: ${data.email}
`

markdownContent += qMarkdown;

return markdownContent;
}

module.exports = generateMarkdown;
