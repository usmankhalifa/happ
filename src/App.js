import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'f8d2eeb5-cf11-4464-a383-d4b4f22a27d0',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f8d2eeb5-cf11-4464-a383-d4b4f22a27d0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVVUk9QRS1OT1JUSC1CLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiYW5ndWxhck9ubHlSZXBvcnRFbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwWm9uZVBhdGNoIjp0cnVlfX0%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2ZhY2MwMjEtMzVkYy00YWJjLTliZDYtOGY4NzRlZGE2ZTgyLyIsImlhdCI6MTY0ODU2NzM0MywibmJmIjoxNjQ4NTY3MzQzLCJleHAiOjE2NDg1NzE1NzQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFGY1RMbi80bUFLUEV2ZFNXWjZGeWVXYnQxdFdYRDJUMFhzbk5QajFzVU02bzQvOE52SDEvc2RrQnQzSDg5allJNTByZitiWVdzSmEzYXBWcHVyZExYMEtVTDAraG9TcWFoRWVLNVBGUnUxWT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJCRUxMTyIsImdpdmVuX25hbWUiOiJVc21hbiIsImlwYWRkciI6IjEyOS4yMDUuMTI0LjIyOCIsIm5hbWUiOiJVc21hbiBNdWhhbW1hZCBCRUxMTyIsIm9pZCI6ImJhNjU2OWVjLWMwOWYtNDIzMy05MWEyLThkYTEzZmNlNDlhZiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yNjQ0MDEyODc0LTI2MDIzNTI5MjgtMzQ5OTYwNjM5OC0zMjM5IiwicHVpZCI6IjEwMDMyMDAwRTg3Qzc4OTMiLCJyaCI6IjAuQVNBQUljQ3N6OXcxdkVxYjFvLUhUdHB1Z2drQUFBQUFBQUFBd0FBQUFBQUFBQUFnQUxNLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IldBSkdNUHZ5YUNCcDNlNktZbnMxNmh4Y3hXOE1CUTkwOGlGZkVnSkU4NTQiLCJ0aWQiOiJjZmFjYzAyMS0zNWRjLTRhYmMtOWJkNi04Zjg3NGVkYTZlODIiLCJ1bmlxdWVfbmFtZSI6InUuYmVsbG9Abmlyc2FsLmNvbSIsInVwbiI6InUuYmVsbG9Abmlyc2FsLmNvbSIsInV0aSI6ImJyLXdyZ183aUVxaXFJQWNtWFEzQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.VRKke88nRYJTlsDeRb52Inwu9dbwB-RmwIl5LUyCvfRD2B3a_iQEH5fmvkDt_EE-kdoLL3w7M-pm3dQ6xbTqCHLesYfuAAnxSn7xY0REO9XDzUlrxwenXem5lvJfQSc3TSdIGa8J3R4uoNlr8nDOmItNMygQYuzQ3a6hwc4Der30kFrd5y-jlu8REpyp0dMqF_RvGXKPJYlCp4Hj0-ElBIi2kabeSwcxitzI62Q013jnOkLxBi6NuTq4LqweYMKeDBYutTTxb5XJ9KS8T01Uf9_WbGz_FrthX9gKXciQ5a4uqJJ51oIH_EkWTdJkuNEvfcQ08n77gkOeGDbv_nVvdw',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;