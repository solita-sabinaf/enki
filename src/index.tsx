import { Apollo } from 'api';
import { ConfigContext, useConfig } from 'config/ConfigContext';
import { fetchConfig } from 'config/fetchConfig';
import ReactDOM from 'react-dom/client';
import App from 'scenes/App';

import * as Sentry from '@sentry/react';
import { EnturAuthProvider, useAuth } from 'app/auth';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { store } from 'app/store';
import { getEnvironment } from 'config/getEnvironment';
import { selectAuthLoaded, updateAuth } from 'features/app/authSlice';
import { selectConfigLoaded, updateConfig } from 'features/app/configSlice';
import { normalizeAllUrls } from 'helpers/url';
import { EnkiIntlProvider } from 'i18n/EnkiIntlProvider';
import { Provider } from 'react-redux';
import './styles/index.scss';

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Sentry.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,

    environment: getEnvironment(),
    release: process.env.REACT_APP_VERSION,
    attachStacktrace: true,
    beforeSend(e) {
      return normalizeAllUrls(e);
    },
  });
}

const AuthenticatedApp = () => {
  const dispatch = useAppDispatch();
  const authStateLoaded = useAppSelector(selectAuthLoaded);
  const configStateLoaded = useAppSelector(selectConfigLoaded);
  const auth = useAuth();
  const config = useConfig();

  dispatch(updateConfig(config));
  dispatch(updateAuth(auth));

  console.log({ auth });

  return (
    (authStateLoaded && configStateLoaded && (
      <Apollo>
        <App />
      </Apollo>
    )) ||
    null
  );
};

const renderIndex = async () => {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container!);

  const config = await fetchConfig();

  const { auth0: auth0Config } = config;
  root.render(
    <Sentry.ErrorBoundary>
      <Provider store={store}>
        <EnkiIntlProvider>
          <ConfigContext.Provider value={config}>
            <EnturAuthProvider
              oidcConfig={{
                authority: `https://${auth0Config!.domain}`,
                client_id: auth0Config!.clientId,
                redirect_uri: window.location.origin,
                extraQueryParams: {
                  audience: auth0Config!.audience,
                },
              }}
            >
              <AuthenticatedApp />
            </EnturAuthProvider>
          </ConfigContext.Provider>
        </EnkiIntlProvider>
      </Provider>
    </Sentry.ErrorBoundary>
  );
};

renderIndex();
