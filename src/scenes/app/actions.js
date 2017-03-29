export function fetchCurrentConditions() {
  return fetch('http://api.wunderground.com/api/eb9b4a708505f6e6/conditions/forecast/hourly/q/CO/denver.json')
    .then(response => response.json())
    .then(json => ({
      type: 'SET_WEATHER',
      weather: json
    }));
}
