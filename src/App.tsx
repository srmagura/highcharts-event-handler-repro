import { useEffect, useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function App() {
  // A datetime that represents when the `App` component last rendered
  const [renderDate, setRenderDate] = useState(() => new Date());

  // Rerender the component each second
  //
  // (This is very artificial and just for the minimal repro. In a real
  // application, rerenders would likely be caused by updates to the data, not a
  // timer.)
  useEffect(() => {
    const interval = setInterval(() => {
      setRenderDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const mySeries: Highcharts.SeriesOptionsType = {
    type: "line",
    name: "mySeries",
    data: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
  };

  const handlePointSelect: Highcharts.PointSelectCallbackFunction = () => {
    // This _should_ always print a datetime that's within the last second (in
    // my opinion). It actually prints the datetime when that particular point
    // was first selected.
    console.log(`Point selected: ${renderDate.toISOString()}`);
  };

  const options: Highcharts.Options = {
    series: [mySeries],

    plotOptions: {
      series: {
        allowPointSelect: true,

        point: {
          events: {
            select: handlePointSelect,
          },
        },
      },
    },

    accessibility: { enabled: false },
    credits: { enabled: false },
  };

  return (
    <main>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}

export default App;
