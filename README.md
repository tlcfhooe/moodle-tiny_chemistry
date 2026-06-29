# tiny_chemistry
Chemistry equation editor for Tiny Editor in Moodle (Version 5.2) using the mhchem extension in MathJax/TeX.
This plugin is based on equation editor (original by Huong Nguyen <huongnv13@gmail.com>) and was modified by Teaching and Learning Center (TLC, tlc@fh-ooe.at), FH Upper Austria for chemistry formulas.

## Version info

### Plugin-Version: 2026042000 (Moodle 5.2)

* Prepare first version of chemistry editor

## Installation
Download the zip file, unzip to a folder. Rename this folder to chemistry and copy to the public/lib/editor/tiny/plugins folder of your Moodle.
Please note this version is only valid for new Tiny MCE Editor in Moodle 5.2

Then visit the Admin notifications page of your Moodle to complete the installation.

After installation you need to complete the following steps:

## Mathjax filter config

### Option A:
Add additionally to standard Mathjax configuration the mhchem-config to the Moodle MathJax filter configuration:

Edit Administration > Site administration > Plugins > Filters > MathJax > MathJax configuration to include:

```
MathJax.Hub.Config({
        TeX: {extensions: ["mhchem.js"]}
        });
```
Please note: do not delete standard Mathjax config in Moodle!

### Option B:
We have noticed that there are sometimes problems with the displaying of the formulas (problems with displaying "Bonds and arrows") and can therefore recommend the following configuration via Administration > Site administration > Plugins > Filters > MathJax > MathJax configuration:

Change MathJax URL (filter_mathjaxloader | httpsurl)

```
https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

Change MathJax Configuration (filter_mathjaxloader | mathjaxconfig) to:

```
{
    "tex": {
        "packages": {"[+]": ["mhchem"]},
        "inlineMath": [["\\(", "\\)"]],
        "displayMath": [["$$", "$$"], ["\\[", "\\]"]]
    },
    "loader": {
        "load": ["[tex]/mhchem"]
    }
}
```

We also recommend disabling the TeX Notation filter (Edit Administration > Site administration > Plugins > Filters > Overview)



## Chemistry editor tabs config
Add specific TeX commands to the different tabs. Maybe you can use the standard settings below each tab.

## Purge caches
You may need to Purge all caches on your browser and your Moodle server: Administration > Site administration > Development > Purge all caches
