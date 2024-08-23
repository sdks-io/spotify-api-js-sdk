
# Meta

## Structure

`Meta`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `analyzerVersion` | `string \| undefined` | Optional | The version of the Analyzer used to analyze this track. |
| `platform` | `string \| undefined` | Optional | The platform used to read the track's audio data. |
| `detailedStatus` | `string \| undefined` | Optional | A detailed status code for this track. If analysis data is missing, this code may explain why. |
| `statusCode` | `number \| undefined` | Optional | The return code of the analyzer process. 0 if successful, 1 if any errors occurred. |
| `timestamp` | `bigint \| undefined` | Optional | The Unix timestamp (in seconds) at which this track was analyzed. |
| `analysisTime` | `number \| undefined` | Optional | The amount of time taken to analyze this track. |
| `inputProcess` | `string \| undefined` | Optional | The method used to read the track's audio data. |

## Example (as JSON)

```json
{
  "analyzer_version": "4.0.0",
  "platform": "Linux",
  "detailed_status": "OK",
  "status_code": 0,
  "timestamp": 1495193577,
  "analysis_time": 6.93906,
  "input_process": "libvorbisfile L+R 44100->22050"
}
```

