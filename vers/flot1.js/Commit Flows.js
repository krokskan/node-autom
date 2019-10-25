[
	{
		"id": "6dcccd7e.af7224",
		"type": "saveflow",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"path": "C:\\Users\\ange.kamdem\\.node-red\\vers\\flot1.js",
		"enabled": false,
		"exporttype": "original",
		"x": 540,
		"y": 80,
		"wires": [
			[
				"b0cbbd85.19797"
			]
		]
	},
	{
		"id": "f8f00302.ac824",
		"type": "debug",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": false,
		"tostatus": false,
		"complete": "payload",
		"targetType": "msg",
		"x": 950,
		"y": 120,
		"wires": []
	},
	{
		"id": "8376f55a.79cb68",
		"type": "debug",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": false,
		"tostatus": false,
		"complete": "false",
		"x": 950,
		"y": 40,
		"wires": []
	},
	{
		"id": "70090951.03f6b8",
		"type": "inject",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"topic": "",
		"payload": "",
		"payloadType": "date",
		"repeat": "",
		"crontab": "",
		"once": false,
		"onceDelay": 0.1,
		"x": 180,
		"y": 80,
		"wires": [
			[
				"f225330d.e4714"
			]
		]
	},
	{
		"id": "b0cbbd85.19797",
		"type": "subflow:61873997.a15468",
		"z": "c6788aa7.c4dad8",
		"name": "Commit & push",
		"env": [],
		"x": 760,
		"y": 80,
		"wires": [
			[
				"8376f55a.79cb68"
			],
			[
				"f8f00302.ac824"
			]
		]
	},
	{
		"id": "f225330d.e4714",
		"type": "function",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"func": "msg.flowId = \"all\";\nreturn msg;",
		"outputs": 1,
		"noerr": 0,
		"x": 350,
		"y": 80,
		"wires": [
			[
				"6dcccd7e.af7224"
			]
		]
	},
	{
		"id": "17c10868.297138",
		"type": "inject",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"topic": "",
		"payload": "",
		"payloadType": "date",
		"repeat": "",
		"crontab": "",
		"once": false,
		"onceDelay": 0.1,
		"x": 180,
		"y": 300,
		"wires": [
			[
				"4d20acaa.ebd2b4"
			]
		]
	},
	{
		"id": "4d20acaa.ebd2b4",
		"type": "exec",
		"z": "c6788aa7.c4dad8",
		"command": "git pull origin master",
		"addpay": false,
		"append": "",
		"useSpawn": "false",
		"timer": "",
		"oldrc": false,
		"name": "",
		"x": 440,
		"y": 300,
		"wires": [
			[
				"21601523.d6902a"
			],
			[],
			[]
		]
	},
	{
		"id": "21601523.d6902a",
		"type": "debug",
		"z": "c6788aa7.c4dad8",
		"name": "",
		"active": true,
		"tosidebar": true,
		"console": false,
		"tostatus": false,
		"complete": "false",
		"x": 760,
		"y": 300,
		"wires": []
	}
]