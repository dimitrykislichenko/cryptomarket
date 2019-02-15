## How to run app?

To run application you'll need to install expo

```
yarn install --global expo-cli
```

Then in the project of the folder install dependencies

```
yarn install
```

After all dependencies were installed you can run application

```
yarn start
```

To run application your mobile device, you would need to install expo client avalable in iOS app store and Google play store.

When expo client is installed, open regular camera application available on your device and point it to QR code available in expo server. An expo will be lacuned and you'll be able to test the app.

## How to run Storybook

The app supports storybook, to run it you'll need to edit App.jsx file in the foor folder of the project and swich STORYBOOK const to true. That's suppoed to be working over process.env, but used preset doesn't work, and I don't have time to figure that out.

After STORYBOOK const is set as true, you can restart application, and the storybook will be presented.

## Tests

There is single tests for TradesChart as an example. There soupesd to be other tests that should cover sagas using `redux-saga-test-plan`, but again, don't have time for that.
