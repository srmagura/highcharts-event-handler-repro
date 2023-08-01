# highcharts-event-handler-repro

## Repro Steps

1. `npm install`
1. `npm run dev` and open http://localhost:5173/ in your browser.
1. Click one of the data points to select it.
1. Click the same point again after a few seconds.

**Expected behavior:** When a point is selected, Highcharts executes the "latest version" of the `handlePointSelect` event handler.

**Actual behavior:** When a point is selected for the second/third/.etc time, Highcharts executes the "initial version" of the `handlePointSelect` event handler.

There are additional comments in the code about the behavior I expect versus the behavior I am actually seeing.
