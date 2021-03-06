import { Config } from 'protractor';

export let config: Config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../features/*.feature"],
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    seleniumServerJar: "C:\jars\selenium-server-standalone-3.4.0.jar",
    
    baseUrl: "http://localhost:8808/",
    
    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails" : "../features/CourseDetails.feature"
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    }
}