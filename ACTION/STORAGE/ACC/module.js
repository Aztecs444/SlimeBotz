const {
    default: makeWASocket,
    makeWALegacySocket,
    BufferJSON,
    Browsers,
    initInMemoryKeyStore,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    DisconnectReason,
    useMultiFileAuthState,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageContent, 
    generateWAMessageFromContent,
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys")
try{
var { Low, JSONFile } = require("lowdb")
} catch {
var { Low, JSONFile } = require("../../../ACTION/STORAGE/APP/MODULE/lowdb")
}
global.Low = Low
global.JSONFile = JSONFile
global.makeWASocket = makeWASocket
global.makeWALegacySocket = makeWALegacySocket
global.BufferJSON = BufferJSON
global.Browsers = Browsers
global.initInMemoryKeyStore = initInMemoryKeyStore
global.extractMessageContent = extractMessageContent
global.makeInMemoryStore = makeInMemoryStore
global.proto = proto
global.DisconnectReason = DisconnectReason
global.useMultiFileAuthState = useMultiFileAuthState
global.AnyMessageContent = AnyMessageContent
global.fetchLatestBaileysVersion = fetchLatestBaileysVersion
global.prepareWAMessageMedia = prepareWAMessageMedia
global.downloadContentFromMessage = downloadContentFromMessage
global.getBinaryNodeChild = getBinaryNodeChild
global.jidDecode = jidDecode
global.areJidsSameUser = areJidsSameUser
global.generateWAMessage = generateWAMessage
global.generateForwardMessageContent = generateForwardMessageContent
global.generateWAMessageContent = generateWAMessageContent
global.generateWAMessageFromContent = generateWAMessageFromContent
global.WAMessageStubType = WAMessageStubType
global.getContentType = getContentType
global.relayMessage = relayMessage
global.WA_DEFAULT_EPHEMERAL = WA_DEFAULT_EPHEMERAL
global.chalk = require("chalk") 
global.fetch = require("node-fetch") 
global.FileType = require("file-type") 
global.Boom = require("@hapi/boom").Boom 
global.PhoneNumber = require("awesome-phonenumber") 
global.fs = require("fs") 
global.toMs = require("ms") 
global.pino = require("pino") 
global.path = require("path") 
global.speed = require("performance-now")
global.sizeFormatter = require("human-readable").sizeFormatter
global.performance = require("perf_hooks").performance
global.translate = require("translate-google-api") 
global.FormData = require("form-data") 
global.axios = require("axios") 
global.qrcode = require("qrcode")
global.cheerio = require("cheerio") 
global.yargs = require("yargs/yargs") 
global.lodash = require("lodash") 
global.mongoose = require("mongoose") 
global.ffmpeg = require("fluent-ffmpeg") 
global.webp = require("node-webpmux") 
global.util = require("util") 
global.cfonts = require("cfonts") 
global.Jimp = require("jimp") 
global.figlet = require("figlet") 
global.moment = require("moment-timezone") 
global.crypto = require("crypto") 
global.ms = require("parse-ms") 
global.stringSimilarity = require("string-similarity") 
global.fse = require("fs-extra") 
global.spinnies = require("spinnies") 
global.glob = require("glob") 
global.rimraf = require("rimraf") 
global.os = require("os") 
global.exec = require("child_process").exec 
global.spawn = require("child_process").spawn 
global.execSync = require("child_process").execSync
global.PassThrough = require("stream").PassThrough





