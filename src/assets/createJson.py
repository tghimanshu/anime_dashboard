# import OS module
import os
import json

# Get the list of all files and directories
path = "music"
dir_list = os.listdir(path)

jsondata = []

for a in dir_list:
    jsondata.append({
        'name': a
    })

with open('musicList.json', 'w') as f:
    f.write(json.dumps(jsondata))
print(jsondata)
