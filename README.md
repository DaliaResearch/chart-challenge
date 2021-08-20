# Latana Chart Challenge

## Overview

At Latana, we look beyond CVs and try to understand early in the process how you might approach problem solving. For
this, we have prepared a short technical exercise which provides an example of the type of issue we often face. For you,
the challenge is an opportunity to demonstrate your capabilities while at the same time getting a first glimpse of what
your day-to-day work could look like at Latana.

Please attempt to complete the challenge to the best of your ability and keep in mind that there are no perfect
submissions. We also understand that time is precious so please also limit the amount of time you spend on this
challenge (we would expect this to be about 2 hours).

If you have any questions or have any issues, please let us know.

Thank you for taking the time to complete this challenge and good luck!

## The Challenge

At Latana we conduct surveys all over the world. In order to help our clients make sense of the data from these surveys,
we are building tools to allow them to both visualise and analyse data.

We would like you to build an *interactive* chart for visualising some survey results. We would like to have the ability
to apply filters to the chart (e.g. only displaying results according to the answer demographics).

We suggest using an existing chart library (e.g. [chart.js](https://www.chartjs.org/)) however this decision is left to
you. You can also use any libraries or frameworks which you feel may assist you in completing the task. Remember to
include any dependencies in the `package.json`

Please see below for further detailed instructions to guide your submission.

## Instructions

1. [Create a new private repository](https://help.github.com/en/articles/creating-a-new-repository)
   called `chart-challenge`
1. [Duplicate the source repository](https://help.github.com/en/articles/duplicating-a-repository)
    - *Please do not fork this repo because you cannot restrict access to a forked public repository*.
    - Remember to replace your `{exampleuser}` in the command below
    ```
    $ git clone --bare https://github.com/DaliaResearch/chart-challenge.git
    $ cd chart-challenge.git
    $ git push --mirror https://github.com/{exampleuser}/chart-challenge.git
    $ cd .. 
    $ rm -rf chart-challenge.git
    $ git clone git@github.com:{exampleuser}/chart-challenge.git
    ```

1. Implement your interactive charting functionality.

1. Include any instructions (or other useful comments) in the `comments.txt` file.

1. Commit your changes to your local branch then push to the remote repository.

1. Add the users **pc256**
   as [collaborator to the repository](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository)

1. Drop us an email letting us know you've finished.

## Other Useful Information

To assist you we have provided an endpoint which you can call to return some raw data. This can be run in the terminal
as follows ...

    $ node src/server/app.js

You can then submit a request to the end-point and receive some survey data back ...

    $ curl -I -X GET localhost:3456/data
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 1100287
    ETag: W/"10c9ff-bjEo04BeecoM4mCncJQgwZ+vlOo"
    Date: Mon, 08 Jul 2019 10:12:58 GMT
    Connection: keep-alive

The submission should be:

- Written in modern Javascript or Typescript.
- Structured in a clear manner.
- Should render sensibly on a mobile device.
- Be visually appealing.

### Happy Coding!
