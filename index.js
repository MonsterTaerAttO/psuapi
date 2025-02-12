const fetch = require("node-fetch");

async function obfuscate(key, script, options){
    const body = {
        "key": key,
        "script": script,
        "options": {
            "DisableSuperOperators": options.DisableSuperOperators ?? false,
            "MaximumSecurityEnabled": options.MaximumSecurityEnabled ?? false,
            "ControlFlowObfuscation": options.ControlFlowObfuscation ?? true,
            "ConstantEncryption": options.ConstantEncryption ?? false,
            "EncryptAllStrings": options.EncryptAllStrings ?? false,
            "DisableAllMacros": options.DisableAllMacros ?? false,
            "EnhancedOutput": options.EnhancedOutput ?? false,
            "EnhancedConstantEncryption": options.EnhancedConstantEncryption ?? false,
            "CompressedOutput": options.CompressedOutput ?? false,
            "PremiumFormat": options.PremiumFormat ?? false,
            "ByteCodeMode": options.ByteCodeMode ?? "Default"
        }
    }

    const a = await fetch('https://api.psu.dev/obfuscate',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const a_json = await a.json();
    return a_json;
}

async function checkkey(key){
    const a = await fetch('https://api.psu.dev/key',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'key': key
        }
    })
    const json = await a.json();
    return json;
}

module.exports = {obfuscate: obfuscate, checkKey: checkkey}
