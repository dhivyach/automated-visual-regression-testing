# automated-visual-testing

Sample automated-visual-testing project with chrome. This is no different to https://github.com/garris/BackstopJS but with chromePath 

Add test cases in tests folder, see sample1.js as an example.

Pre-condition: 
Change 'chromePath' in config.js to chrome executable in your system or working directory

Steps:
1. Go to cloned folder and do 'npm i'  - This will install all required dependencies
2. Run ./generateRefs.sh  - To generate reference images
3. Run ./test.sh  - To test against generated reference images
4. See results in backstop_data/html/index.html


