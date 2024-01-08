function renderLicenseBadge(license) {
    if (license === 'No License') {
        return '';
    }
    else if (license === 'Apache license 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'Common Development and Distribution License 1.0') {
        return '[![License](https://img.shields.io/badge/CDDL-1.0-blue)](https://opensource.org/license/cddl-1-0/)';
    }
    else if (license === 'Eclipse Public License version 2.0') {
        return '[![License](https://img.shields.io/badge/Eclipse-2.0-blue)](https://opensource.org/license/epl-2-0/)';
    }
    else if (license === 'GNU General Public License version 2') {
        return '[![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://opensource.org/license/gpl-2-0/)';
    }
    else if (license === 'GNU Lesser General Public License version 3') {
        return '[![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/license/lgpl-3-0/)';
    }
    else if (license === 'Mozilla Public License 2.0') {
        return '[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/license/mpl-2-0/)';
    }
    else if (license === 'The 2-Clause BSD License') {
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/license/bsd-2-clause/)';
    }
    else if (license === 'The 3-Clause BSD License') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/license/bsd-3-clause/)';
    }
    else if (license === 'The MIT License') {
        return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)';
    }
}

function renderLicenseLink(license) {
    if (license === 'No License') {
        return '';
    }
    else if (license === 'Apache license 2.0') {
        return '[Apache license 2.0](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === 'Common Development and Distribution License 1.0') {
        return '[Common Development and Distribution License 1.0](https://opensource.org/license/cddl-1-0/)';
    }
    else if (license === 'Eclipse Public License version 2.0') {
        return '[Eclipse Public License version 2.0](https://opensource.org/license/epl-2-0/)';
    }
    else if (license === 'GNU General Public License version 2') {
        return '[GNU General Public License version 2](https://opensource.org/license/gpl-2-0/)';
    }
    else if (license === 'GNU Lesser General Public License version 3') {
        return '[GNU Lesser General Public License version 3](https://opensource.org/license/lgpl-3-0/)';
    }
    else if (license === 'Mozilla Public License 2.0') {
        return '[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0/)';
    }
    else if (license === 'The 2-Clause BSD License') {
        return '[The 2-Clause BSD License](https://opensource.org/license/bsd-2-clause/)';
    }
    else if (license === 'The 3-Clause BSD License') {
        return '[The 3-Clause BSD License](https://opensource.org/license/bsd-3-clause/)';
    }
    else if (license === 'The MIT License') {
        return '[The MIT License](https://opensource.org/license/mit/)';
    }
}

// Creates License Section if there is a license in use.
function renderLicenseSection(license) {
    if (license !== 'No License') {return `## License 
This project uses ${renderLicenseLink(license)}`
    } else if (license === 'No License') {
        return '';
    }

}

// Generates markdown language for README file
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Installation 

${data.installation} 

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contribute 

${data.contribution}

## Tests

${data.tests}

## Questions 

Please contact me if you have any questions!

You can find me here on [Github](https://github.com/${data.username})

or send me an email: ${data.email}

`;
}

module.exports = generateMarkdown;