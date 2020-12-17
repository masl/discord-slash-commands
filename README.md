## DISCORD SLASH COMMANDS
Testing the new slash-commands features


## HTTP POST CALL

Request URL
```
https://discord.com/api/v8/applications/<application_id>/guilds/<guild_id>/commands
```

Headers
```json
{
    "Authorization": "Bot <bot_token>"
}
```

Body
```json
{
    "name": "hello",
    "description": "Hello World Command",
    "options": [
        {
            "name": "who",
            "description": "Who do you want to hello",
            "type": 3,
            "required": true,
            "choices": [
                {
                    "name": "World",
                    "value": "world"
                }
            ]
        },
        {
            "name": "test",
            "description": "Testing hello",
            "type": 5,
            "required": false
        }
    ]
}
```
