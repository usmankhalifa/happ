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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2ZhY2MwMjEtMzVkYy00YWJjLTliZDYtOGY4NzRlZGE2ZTgyLyIsImlhdCI6MTY0ODYzNjEwMiwibmJmIjoxNjQ4NjM2MTAyLCJleHAiOjE2NDg2NDE3MjksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFCcFliSkxUa0RtNzNJcm9Pdlg0Vnk3VGZnMENFRmJpUnNZTkRsbUFqQk90YWxzc2hGZEdVMk42dlVZRkVTbTdSamp4RVlJQThuNHNKWWNleElWL09PaW9aWmR0YnhXUnBFQVFuTEE1MHJDZz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJCRUxMTyIsImdpdmVuX25hbWUiOiJVc21hbiIsImlwYWRkciI6IjE5Ny4yMTEuNjMuNDIiLCJuYW1lIjoiVXNtYW4gTXVoYW1tYWQgQkVMTE8iLCJvaWQiOiJiYTY1NjllYy1jMDlmLTQyMzMtOTFhMi04ZGExM2ZjZTQ5YWYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjY0NDAxMjg3NC0yNjAyMzUyOTI4LTM0OTk2MDYzOTgtMzIzOSIsInB1aWQiOiIxMDAzMjAwMEU4N0M3ODkzIiwicmgiOiIwLkFTQUFJY0Nzejl3MXZFcWIxby1IVHRwdWdna0FBQUFBQUFBQXdBQUFBQUFBQUFBZ0FMTS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJXQUpHTVB2eWFDQnAzZTZLWW5zMTZoeGN4VzhNQlE5MDhpRmZFZ0pFODU0IiwidGlkIjoiY2ZhY2MwMjEtMzVkYy00YWJjLTliZDYtOGY4NzRlZGE2ZTgyIiwidW5pcXVlX25hbWUiOiJ1LmJlbGxvQG5pcnNhbC5jb20iLCJ1cG4iOiJ1LmJlbGxvQG5pcnNhbC5jb20iLCJ1dGkiOiJPdlItT1ZFWDBFMndmeU5kZjI1R0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.efJ0JZp0wbRkel39Ru2YacEJjPcBhxpSQwJuow9Zj52KDyaZDPs0Gqus-QIJz5uowfCAkszUjfhCbaOFcdQi-O5QCrbnMYMi6blLYXdtSf6r-I2ovMRDK6VpqAK-BQR6ikpCE3DaSJ4Yu3C7bABR9Sf8rQbPp-x94VWYpEjzqf3YRpgy-P0pRywnvIUuMHTgSpNjEb8K65Vn84XfjggkzOV0rj16RgahYCUj2m2RrFfCDbNsfs-iij_gTweC0FQYjnNrTYUSukjKIeOyrABOTCeHCpRouvcv_S60Lg4uZjX27VTMHLGU1dkdrC8S6sjez0vW1236AnZLA8eSOgt3Rw',
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