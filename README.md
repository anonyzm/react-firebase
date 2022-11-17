# Sample React application with Firebase push notifications 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Sample cURL request to send notification message

```
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=AAAA1bh-OHg:APA91bGYGy8YOWY0n4zDTVqwA-px3NrHvedoGE238WE_F9Ar28MIdUfNoXxn9GakwcA-OOs7ks5qJoEkZHpVKSdD-cEdb59FYmvXaZjdiO7gdR8aj2YAZJHTXxmvXYGR8_6mLEFmgYD1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "to": "eE_kTPnW_k9soDm_LqUNQN:APA91bEWps9UMiqAVPsmueNXY6emEaWPVA1jb13PPwygMxGFgQogZPP7tkBDXwFhr02Y0LaDhYqa0MFcY-9pllvivnMV3e7Hbxt1HiMGHAQQzcJb8-79531b1YkM0Exuxf0zYvxbd84R",
    "data":{
        "body":"Hey guys3!",
        "title":"Test Title !!!"
    }
}'
```