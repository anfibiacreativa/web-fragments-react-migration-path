var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e4) => e4.name !== markName) : this._entries.filter((e4) => e4.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e4) => e4.name !== measureName) : this._entries.filter((e4) => e4.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e4) => e4.entryType !== "resource" || e4.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e4) => e4.name === name && (!type || e4.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e4) => e4.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn2) {
        return fn2;
      }
      runInAsyncScope(fn2, thisArg, ...args) {
        return fn2.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x4, y3, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// dist/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var e, template;
var init_error_500 = __esm({
  "dist/server/chunks/_/error-500.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = /* @__PURE__ */ __name((t5) => '<!DOCTYPE html><html lang="en"><head><title>' + (t5 = { ...e, ...t5 }).statusCode + " - " + t5.statusMessage + " | " + t5.appName + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight"></div><div class="max-w-520px text-center"><h1 class="font-medium mb-8 sm:text-10xl text-8xl">` + t5.statusCode + '</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl">' + t5.description + "</p></div></body></html>", "template");
  }
});

// dist/server/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e2
});
var e2;
var init_client_manifest = __esm({
  "dist/server/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e2 = { "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BoXxEpqi.js", name: "error-404", src: "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["_ErSGF7Fg.js", "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js", "_D_RTfECj.js"], css: [] }, "error-404.C76f6kO1.css": { file: "error-404.C76f6kO1.css", resourceType: "style", prefetch: true, preload: true }, "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CjXz2fZQ.js", name: "error-500", src: "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js", "_D_RTfECj.js"], css: [] }, "error-500.DI4MrETp.css": { file: "error-500.DI4MrETp.css", resourceType: "style", prefetch: true, preload: true }, "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "C1B2qiE_.js", name: "entry", src: "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["layouts/default.vue", "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue", "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue"], _globalCSS: true }, "_DOwWkSUa.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DOwWkSUa.js", name: "product-catalog-mock", imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"], css: ["product-catalog-mock.BFUL3bBD.css"] }, "product-catalog-mock.BFUL3bBD.css": { file: "product-catalog-mock.BFUL3bBD.css", resourceType: "style", prefetch: true, preload: true }, "_D_RTfECj.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D_RTfECj.js", name: "v3", imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"] }, "_ErSGF7Fg.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "ErSGF7Fg.js", name: "nuxt-link", imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"] }, "_product-catalog-mock.BFUL3bBD.css": { resourceType: "style", prefetch: true, preload: true, file: "product-catalog-mock.BFUL3bBD.css", src: "_product-catalog-mock.BFUL3bBD.css" }, "layouts/default.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CL5mtMzs.js", name: "default", src: "layouts/default.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"] }, "pages/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BkBDaCjX.js", name: "index", src: "pages/index.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"] }, "pages/store/catalog/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D_sK_xWA.js", name: "index", src: "pages/store/catalog/index.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js", "_DOwWkSUa.js"], css: [] }, "index.ZyFZDvry.css": { file: "index.ZyFZDvry.css", resourceType: "style", prefetch: true, preload: true }, "pages/store/product/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "C9EZNfed.js", name: "_id_", src: "pages/store/product/[id].vue", isDynamicEntry: true, imports: ["_ErSGF7Fg.js", "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js", "_DOwWkSUa.js"], css: [] }, "_id_.OLrNJgxX.css": { file: "_id_.OLrNJgxX.css", resourceType: "style", prefetch: true, preload: true } };
  }
});

// dist/server/chunks/build/entry-styles.BV3TInM3.mjs
var entry_styles_BV3TInM3_exports = {};
__export(entry_styles_BV3TInM3_exports, {
  default: () => r
});
var r;
var init_entry_styles_BV3TInM3 = __esm({
  "dist/server/chunks/build/entry-styles.BV3TInM3.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    r = [":root{--primary-color:#646cff;--primary-color-dark:#535bf2;--text-color:#213547;--background-color:#fff;--card-background:#fff;--border-color:#e5e7eb}body{background-color:var(--background-color);color:var(--text-color);font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;margin:0}h1{font-size:3vw;-webkit-text-fill-color:transparent;line-height:1.1;margin:50px 0 20px;text-align:center}h1,h2{background:linear-gradient(90deg,#f0f,#40e0d0);-webkit-background-clip:text;font-weight:700}h2{font-size:2vw;margin-bottom:30px}h2,h3{-webkit-text-fill-color:transparent}h3{background:linear-gradient(90deg,#f0f,#40e0d0);-webkit-background-clip:text;font-size:1.5vw;font-weight:700;margin-bottom:20px}@media (max-width:1024px){h1{font-size:6vw}h2{font-size:4vw}h3{font-size:3vw}}a{text-decoration:none}.container{margin:0 auto;max-width:1280px}.product-card{background:var(--card-background);border:1px solid var(--border-color);border-radius:8px;cursor:pointer;overflow:hidden;padding:1rem;text-align:center;transition:transform .2s}.product-card:hover{transform:translateY(-4px)}.product-card img{border-radius:4px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.product-card h2{font-size:1.25rem;font-weight:600;margin:0 0 1rem}.product-card p{color:#666;display:-webkit-box;margin:0 0 1.5rem;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.product-card .footer{align-items:center;display:flex;flex-direction:column}.product-card .price{font-size:1.25rem;font-weight:700}.button{background-color:#2c3e50;border:none;border-radius:4px;color:#fff;cursor:pointer;font-weight:600;padding:.5rem 1rem;transition:background-color .2s}.button:hover{background-color:#1c98f1;transition:all .3s linear}.error,.loading{font-size:1.2rem;padding:2rem;text-align:center}.error{color:#dc2626}.back-link{color:var(--primary-color);display:inline-block;margin-bottom:1rem;text-decoration:none}.back-link:hover{color:var(--primary-color-dark)}.product-detail{display:grid;gap:2rem;grid-template-columns:1fr 1fr;padding:2rem 0}.product-image img{background:#fff;border-radius:4px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}"];
  }
});

// dist/server/chunks/build/error-500-styles.BxSPZVup.mjs
var error_500_styles_BxSPZVup_exports = {};
__export(error_500_styles_BxSPZVup_exports, {
  default: () => a
});
var a;
var init_error_500_styles_BxSPZVup = __esm({
  "dist/server/chunks/build/error-500-styles.BxSPZVup.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a = [".spotlight[data-v-9ccdd2a2]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-9ccdd2a2]{position:fixed}.-bottom-1\\/2[data-v-9ccdd2a2]{bottom:-50%}.left-0[data-v-9ccdd2a2]{left:0}.right-0[data-v-9ccdd2a2]{right:0}.grid[data-v-9ccdd2a2]{display:grid}.mb-16[data-v-9ccdd2a2]{margin-bottom:4rem}.mb-8[data-v-9ccdd2a2]{margin-bottom:2rem}.h-1\\/2[data-v-9ccdd2a2]{height:50%}.max-w-520px[data-v-9ccdd2a2]{max-width:520px}.min-h-screen[data-v-9ccdd2a2]{min-height:100vh}.place-content-center[data-v-9ccdd2a2]{place-content:center}.overflow-hidden[data-v-9ccdd2a2]{overflow:hidden}.bg-white[data-v-9ccdd2a2]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-9ccdd2a2]{padding-left:2rem;padding-right:2rem}.text-center[data-v-9ccdd2a2]{text-align:center}.text-8xl[data-v-9ccdd2a2]{font-size:6rem;line-height:1}.text-xl[data-v-9ccdd2a2]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-9ccdd2a2]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-9ccdd2a2]{font-weight:300}.font-medium[data-v-9ccdd2a2]{font-weight:500}.leading-tight[data-v-9ccdd2a2]{line-height:1.25}.font-sans[data-v-9ccdd2a2]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-9ccdd2a2]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-9ccdd2a2]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-9ccdd2a2]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-9ccdd2a2]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-9ccdd2a2]{font-size:2.25rem;line-height:2.5rem}}"];
  }
});

// dist/server/chunks/build/error-404-styles.tFSyKjtQ.mjs
var error_404_styles_tFSyKjtQ_exports = {};
__export(error_404_styles_tFSyKjtQ_exports, {
  default: () => t
});
var t;
var init_error_404_styles_tFSyKjtQ = __esm({
  "dist/server/chunks/build/error-404-styles.tFSyKjtQ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t = ['.spotlight[data-v-f6c813f1]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-f6c813f1]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-f6c813f1]{background-color:#ffffff4d}.gradient-border[data-v-f6c813f1]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-f6c813f1]{background-color:#1414144d}.gradient-border[data-v-f6c813f1]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82,#36e4da 75%,#0047e1)}}.gradient-border[data-v-f6c813f1]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-f6c813f1]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-f6c813f1]{position:fixed}.left-0[data-v-f6c813f1]{left:0}.right-0[data-v-f6c813f1]{right:0}.z-10[data-v-f6c813f1]{z-index:10}.z-20[data-v-f6c813f1]{z-index:20}.grid[data-v-f6c813f1]{display:grid}.mb-16[data-v-f6c813f1]{margin-bottom:4rem}.mb-8[data-v-f6c813f1]{margin-bottom:2rem}.max-w-520px[data-v-f6c813f1]{max-width:520px}.min-h-screen[data-v-f6c813f1]{min-height:100vh}.w-full[data-v-f6c813f1]{width:100%}.flex[data-v-f6c813f1]{display:flex}.cursor-pointer[data-v-f6c813f1]{cursor:pointer}.place-content-center[data-v-f6c813f1]{place-content:center}.items-center[data-v-f6c813f1]{align-items:center}.justify-center[data-v-f6c813f1]{justify-content:center}.overflow-hidden[data-v-f6c813f1]{overflow:hidden}.bg-white[data-v-f6c813f1]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-f6c813f1]{padding-left:1rem;padding-right:1rem}.px-8[data-v-f6c813f1]{padding-left:2rem;padding-right:2rem}.py-2[data-v-f6c813f1]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-f6c813f1]{text-align:center}.text-8xl[data-v-f6c813f1]{font-size:6rem;line-height:1}.text-xl[data-v-f6c813f1]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-f6c813f1]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-f6c813f1]{font-weight:300}.font-medium[data-v-f6c813f1]{font-weight:500}.leading-tight[data-v-f6c813f1]{line-height:1.25}.font-sans[data-v-f6c813f1]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-f6c813f1]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-f6c813f1]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-f6c813f1]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-f6c813f1]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-f6c813f1]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-f6c813f1]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-f6c813f1]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-f6c813f1]{font-size:1.25rem;line-height:1.75rem}}'];
  }
});

// dist/server/chunks/build/_id_-styles.N2VHBG0m.mjs
var id_styles_N2VHBG0m_exports = {};
__export(id_styles_N2VHBG0m_exports, {
  default: () => t2
});
var t2;
var init_id_styles_N2VHBG0m = __esm({
  "dist/server/chunks/build/_id_-styles.N2VHBG0m.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t2 = [".product-info[data-v-009f27c1]{align-items:center;display:flex;flex-direction:column;gap:1rem}.product-info h2[data-v-009f27c1]{font-size:2rem;font-weight:600;margin:0}.product-info .description[data-v-009f27c1]{color:#666;font-size:1.1rem;line-height:1.6}.product-info .price[data-v-009f27c1]{font-size:2rem;font-weight:700}.product-info p[data-v-009f27c1]{margin-block-end:0;margin-block-start:0}"];
  }
});

// dist/server/chunks/build/index-styles.DjEg2eu5.mjs
var index_styles_DjEg2eu5_exports = {};
__export(index_styles_DjEg2eu5_exports, {
  default: () => a2
});
var a2;
var init_index_styles_DjEg2eu5 = __esm({
  "dist/server/chunks/build/index-styles.DjEg2eu5.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a2 = [".grid[data-v-be76bbff]{display:grid;gap:1rem;grid-template-columns:1fr}@media (min-width:512px) and (max-width:1023px){.grid[data-v-be76bbff]{grid-template-columns:repeat(2,1fr)}}@media (min-width:1024px){.grid[data-v-be76bbff]{grid-template-columns:repeat(3,1fr)}}"];
  }
});

// dist/server/chunks/build/StarRating-styles.DsrHBR5b.mjs
var StarRating_styles_DsrHBR5b_exports = {};
__export(StarRating_styles_DsrHBR5b_exports, {
  default: () => d
});
var d;
var init_StarRating_styles_DsrHBR5b = __esm({
  "dist/server/chunks/build/StarRating-styles.DsrHBR5b.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    d = [".stars[data-v-c6de480c]{color:#ddd;font-size:1rem}.star[data-v-c6de480c]{cursor:default}.star.filled[data-v-c6de480c]{color:gold}"];
  }
});

// dist/server/chunks/build/ProductCard-styles.2DlCjpJq.mjs
var ProductCard_styles_2DlCjpJq_exports = {};
__export(ProductCard_styles_2DlCjpJq_exports, {
  default: () => r2
});
var r2;
var init_ProductCard_styles_2DlCjpJq = __esm({
  "dist/server/chunks/build/ProductCard-styles.2DlCjpJq.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    r2 = [".product-card[data-v-01343d4a]{background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a;cursor:pointer;padding:1rem;transition:transform .2s}"];
  }
});

// dist/server/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e3
});
var interopDefault, e3;
var init_styles = __esm({
  "dist/server/chunks/build/styles.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    interopDefault = /* @__PURE__ */ __name((e4) => e4.default || e4 || [], "interopDefault");
    e3 = { "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_entry_styles_BV3TInM3(), entry_styles_BV3TInM3_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/entry.js"), "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_BxSPZVup(), error_500_styles_BxSPZVup_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue"), "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_tFSyKjtQ(), error_404_styles_tFSyKjtQ_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue"), "pages/store/product/[id].vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_styles_N2VHBG0m(), id_styles_N2VHBG0m_exports)).then(interopDefault), "pages/store/product/[id].vue"), "pages/store/catalog/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_DjEg2eu5(), index_styles_DjEg2eu5_exports)).then(interopDefault), "pages/store/catalog/index.vue"), "components/StarRating.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_StarRating_styles_DsrHBR5b(), StarRating_styles_DsrHBR5b_exports)).then(interopDefault), "components/StarRating.vue"), "components/ProductCard.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ProductCard_styles_2DlCjpJq(), ProductCard_styles_2DlCjpJq_exports)).then(interopDefault), "components/ProductCard.vue") };
  }
});

// dist/server/chunks/build/index.vue.mjs
var index_vue_exports = {};
__export(index_vue_exports, {
  default: () => r3
});
import "node:events";
import "node:buffer";
import "node:timers";
var r3, t3;
var init_index_vue = __esm({
  "dist/server/chunks/build/index.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    init_nitro();
    r3 = { __name: "index", setup: /* @__PURE__ */ __name((o4) => (navigateTo("/store/catalog", { replace: true }), () => {
    }), "setup") };
    t3 = r3.setup;
    r3.setup = (e4, r6) => {
      const s2 = useSSRContext();
      return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), t3 ? t3(e4, r6) : void 0;
    };
  }
});

// dist/server/chunks/build/StarRating.vue.mjs
var c, o, p;
var init_StarRating_vue = __esm({
  "dist/server/chunks/build/StarRating.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    c = { __name: "StarRating", __ssrInlineRender: true, props: { rating: { type: Number, required: true, default: 0 } }, setup(e4) {
      const d6 = computed(() => [1, 2, 3, 4, 5]);
      return (s2, c3, o4, p5) => {
        c3(`<div${ssrRenderAttrs(mergeProps({ class: "stars" }, p5))} data-v-c6de480c><!--[-->`), ssrRenderList(d6.value, (s3) => {
          c3(`<span class="${ssrRenderClass([{ filled: s3 <= e4.rating }, "star"])}" data-v-c6de480c> \u2605 </span>`);
        }), c3("<!--]--></div>");
      };
    } };
    o = c.setup;
    c.setup = (e4, s2) => {
      const a5 = useSSRContext();
      return (a5.modules || (a5.modules = /* @__PURE__ */ new Set())).add("components/StarRating.vue"), o ? o(e4, s2) : void 0;
    };
    p = _export_sfc(c, [["__scopeId", "data-v-c6de480c"]]);
  }
});

// dist/server/chunks/build/index.vue2.mjs
var index_vue2_exports = {};
__export(index_vue2_exports, {
  default: () => U
});
import "node:events";
import "node:buffer";
import "node:timers";
function useAsyncData(...e4) {
  var a5;
  const r6 = "string" == typeof e4[e4.length - 1] ? e4.pop() : void 0;
  "string" != typeof e4[0] && e4.unshift(r6);
  let [t5, i3, s2 = {}] = e4;
  if ("string" != typeof t5) throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if ("function" != typeof i3) throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const o4 = useNuxtApp(), n2 = i3;
  s2.server ?? (s2.server = true), s2.default ?? (s2.default = () => le.value), s2.getCachedData ?? (s2.getCachedData = () => o4.isHydrating ? o4.payload.data[t5] : o4.static.data[t5]), s2.lazy ?? (s2.lazy = false), s2.immediate ?? (s2.immediate = true), s2.deep ?? (s2.deep = le.deep), s2.dedupe ?? (s2.dedupe = "cancel");
  const g4 = s2.getCachedData(t5, o4), f5 = null != g4;
  if (!o4._asyncData[t5] || !s2.immediate) {
    (a5 = o4.payload._errors)[t5] ?? (a5[t5] = le.errorValue);
    const e5 = s2.deep ? ref : shallowRef;
    o4._asyncData[t5] = { data: e5(f5 ? g4 : s2.default()), pending: ref(!f5), error: toRef(o4.payload._errors, t5), status: ref("idle"), _default: s2.default };
  }
  const h3 = { ...o4._asyncData[t5] };
  delete h3._default, h3.refresh = h3.execute = (e5 = {}) => {
    if (o4._asyncDataPromises[t5]) {
      if ("defer" === (a6 = e5.dedupe ?? s2.dedupe) || false === a6) return o4._asyncDataPromises[t5];
      o4._asyncDataPromises[t5].cancelled = true;
    }
    var a6;
    if (e5._initial || o4.isHydrating && false !== e5._initial) {
      const a7 = e5._initial ? g4 : s2.getCachedData(t5, o4);
      if (null != a7) return Promise.resolve(a7);
    }
    h3.pending.value = true, h3.status.value = "pending";
    const r7 = new Promise((e6, a7) => {
      try {
        e6(n2(o4));
      } catch (e7) {
        a7(e7);
      }
    }).then(async (e6) => {
      if (r7.cancelled) return o4._asyncDataPromises[t5];
      let a7 = e6;
      s2.transform && (a7 = await s2.transform(e6)), s2.pick && (a7 = function(e7, a8) {
        const r8 = {};
        for (const t6 of a8) r8[t6] = e7[t6];
        return r8;
      }(a7, s2.pick)), o4.payload.data[t5] = a7, h3.data.value = a7, h3.error.value = le.errorValue, h3.status.value = "success";
    }).catch((e6) => {
      if (r7.cancelled) return o4._asyncDataPromises[t5];
      h3.error.value = createError(e6), h3.data.value = unref(s2.default()), h3.status.value = "error";
    }).finally(() => {
      r7.cancelled || (h3.pending.value = false, delete o4._asyncDataPromises[t5]);
    });
    return o4._asyncDataPromises[t5] = r7, o4._asyncDataPromises[t5];
  }, h3.clear = () => function(e5, a6) {
    a6 in e5.payload.data && (e5.payload.data[a6] = void 0);
    a6 in e5.payload._errors && (e5.payload._errors[a6] = le.errorValue);
    e5._asyncData[a6] && (e5._asyncData[a6].data.value = void 0, e5._asyncData[a6].error.value = le.errorValue, e5._asyncData[a6].pending.value = false, e5._asyncData[a6].status.value = "idle");
    a6 in e5._asyncDataPromises && (e5._asyncDataPromises[a6] && (e5._asyncDataPromises[a6].cancelled = true), e5._asyncDataPromises[a6] = void 0);
  }(o4, t5);
  if (false !== s2.server && o4.payload.serverRendered && s2.immediate) {
    const e5 = h3.refresh({ _initial: true });
    getCurrentInstance() ? qe(() => e5) : o4.hook("app:created", async () => {
      await e5;
    });
  }
  const b3 = Promise.resolve(o4._asyncDataPromises[t5]).then(() => h3);
  return Object.assign(b3, h3), b3;
}
var _, x, D, z, P, S, U;
var init_index_vue2 = __esm({
  "dist/server/chunks/build/index.vue2.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_StarRating_vue();
    init_renderer();
    init_server();
    init_nitro();
    _ = defineComponent({ __name: "ProductCard", __ssrInlineRender: true, props: { product: {} }, setup: /* @__PURE__ */ __name((a5) => (a6, n2, d6, c3) => {
      n2(`<div${ssrRenderAttrs(mergeProps({ class: "product-card" }, c3))} data-v-01343d4a><img${ssrRenderAttr("src", a6.product.imageUrl)}${ssrRenderAttr("alt", a6.product.name)} data-v-01343d4a><div class="content" data-v-01343d4a><h2 data-v-01343d4a>${ssrInterpolate(a6.product.name)}</h2><p data-v-01343d4a>${ssrInterpolate(a6.product.description)}</p>`), n2(ssrRenderComponent(p, { rating: a6.product.rating }, null, d6)), n2(`<div class="footer" data-v-01343d4a><span class="price" data-v-01343d4a>$${ssrInterpolate(a6.product.price)}</span><button class="button" data-v-01343d4a>Add to Cart</button></div></div></div>`);
    }, "setup") });
    x = _.setup;
    _.setup = (e4, a5) => {
      const r6 = useSSRContext();
      return (r6.modules || (r6.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue"), x ? x(e4, a5) : void 0;
    };
    D = _export_sfc(_, [["__scopeId", "data-v-01343d4a"]]);
    __name(useAsyncData, "useAsyncData");
    z = [{ id: 1, name: "Angular Developer Tee", description: "Perfect for Angular developers who love type-safety!", price: 29.99, color: "Red", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product1.webp", rating: 4.5 }, { id: 2, name: "TypeScript Enthusiast Shirt", description: "Show your love for interfaces and decorators!", price: 24.99, color: "Blue", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product2.webp", rating: 4.8 }, { id: 3, name: "JavaScript Master Hoodie", description: "For those who still love vanilla JavaScript!", price: 49.99, color: "Black", size: "XL", imageUrl: "/_fragment/nuxt/assets/images/product3.webp", rating: 4.6 }, { id: 4, name: "Nuxt.js Developer Hat", description: "A stylish way to show your Nuxt passion.", price: 19.99, color: "Green", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product4.webp", rating: 4.7 }, { id: 5, name: "Node.js Backpack", description: "Carry your essentials with a nod to your favorite runtime.", price: 39.99, color: "Grey", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product5.webp", rating: 4.3 }, { id: 6, name: "CSS Styling Socks", description: "Perfect for keeping your feet warm while styling!", price: 12.99, color: "Pink", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product6.webp", rating: 4 }, { id: 7, name: "Vue.js Mug", description: "For those who prefer Vue over everything else!", price: 14.99, color: "White", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product7.webp", rating: 4.9 }, { id: 8, name: "Docker Enthusiast T-Shirt", description: "Containerize your style with this Docker tee.", price: 27.99, color: "Orange", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product8.webp", rating: 4.7 }, { id: 9, name: "Python Programmer Hoodie", description: "For the Pythonistas out there!", price: 44.99, color: "Grey", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product9.webp", rating: 4.8 }, { id: 10, name: "SQL Master T-Shirt", description: "For those who live and breathe SQL queries.", price: 19.99, color: "Black", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product10.webp", rating: 4.4 }, { id: 11, name: "Java Developer Mug", description: "For all the Java devs who love their coffee strong.", price: 16.99, color: "Brown", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product11.webp", rating: 4.2 }, { id: 12, name: "Web Dev Keychain", description: "Carry a little piece of the web with you everywhere!", price: 8.99, color: "Silver", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product12.webp", rating: 4.6 }, { id: 13, name: "Cloud Computing Hoodie", description: "For those who live and breathe the cloud.", price: 49.99, color: "Blue", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product13.webp", rating: 4.8 }, { id: 14, name: "Git Version Control Shirt", description: "Version control your wardrobe with this Git shirt!", price: 22.99, color: "Black", size: "S", imageUrl: "/_fragment/nuxt/assets/images/product14.webp", rating: 4.7 }, { id: 15, name: "Linux Command Line Mug", description: "For the true command line masters.", price: 13.99, color: "Black", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product15.webp", rating: 4.5 }, { id: 16, name: "Playwright Testing T-Shirt", description: "For the test-driven developers!", price: 26.99, color: "White", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product1.webp", rating: 4.8 }, { id: 17, name: "GraphQL Developer Hoodie", description: "Perfect for those who query with GraphQL.", price: 42.99, color: "Black", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product2.webp", rating: 4.7 }, { id: 18, name: "Firebase Cloud T-Shirt", description: "Show off your cloud skills with Firebase!", price: 29.99, color: "Orange", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product3.webp", rating: 4.9 }, { id: 19, name: "MongoDB Mug", description: "For the NoSQL enthusiasts.", price: 15.99, color: "Green", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product4.webp", rating: 4.4 }, { id: 20, name: "Swift Developer Beanie", description: "Keep your head warm while writing Swift code.", price: 19.99, color: "Grey", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product5.webp", rating: 4.6 }, { id: 21, name: "Ruby on Rails Keychain", description: "A keychain for Ruby lovers!", price: 7.99, color: "Red", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product6.webp", rating: 4.5 }, { id: 22, name: "PHP Developer Hat", description: "Perfect for all the PHP developers out there.", price: 21.99, color: "Purple", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product7.webp", rating: 4.2 }, { id: 23, name: "Ruby Developer T-Shirt", description: "For Ruby developers who love simplicity and elegance.", price: 24.99, color: "Red", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product8.webp", rating: 4.7 }, { id: 24, name: "Kubernetes Cap", description: "For devs who orchestrate containers in style!", price: 18.99, color: "Blue", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product9.webp", rating: 4.5 }, { id: 25, name: "Elixir Developer Hoodie", description: "For those who love functional programming with Elixir.", price: 48.99, color: "Purple", size: "XL", imageUrl: "/_fragment/nuxt/assets/images/product10.webp", rating: 4.6 }, { id: 26, name: "GraphQL Developer Mug", description: "For those who query with GraphQL!", price: 16.99, color: "White", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product11.webp", rating: 4.8 }, { id: 27, name: "C# Programmer T-Shirt", description: "For fans of C# and .NET!", price: 27.99, color: "Black", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product12.webp", rating: 4.3 }, { id: 28, name: "Perl Programmer Hoodie", description: "For the hardcore Perl programmers.", price: 45.99, color: "Dark Green", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product13.webp", rating: 4.5 }, { id: 29, name: "DevOps Engineer T-Shirt", description: "For the engineers who bridge the gap between dev and ops.", price: 31.99, color: "Orange", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product14.webp", rating: 4.6 }, { id: 30, name: "Artificial Intelligence Hoodie", description: "For those who are building the future with AI.", price: 49.99, color: "Black", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product15.webp", rating: 4.8 }];
    P = defineComponent({ __name: "index", __ssrInlineRender: true, async setup(e4) {
      let a5, t5;
      const { data: s2, pending: n2, error: d6 } = ([a5, t5] = withAsyncContext(() => useAsyncData("products", async () => {
        try {
          return console.log("SSR Products Data:", z), z;
        } catch (e5) {
          throw console.error("Failed to fetch products:", e5), new Error("Failed to fetch products");
        }
      })), a5 = await a5, t5(), a5), c3 = useRouter();
      return (e5, a6, t6, l3) => {
        const p5 = D;
        a6(`<div${ssrRenderAttrs(l3)} data-v-be76bbff><header data-v-be76bbff></header><main class="container" data-v-be76bbff>`), unref(n2) ? a6('<div class="loading" data-v-be76bbff>Loading products...</div>') : unref(d6) ? a6(`<div class="error" data-v-be76bbff>${ssrInterpolate(unref(d6).message)}</div>`) : (a6('<div class="products" data-v-be76bbff><div class="grid" data-v-be76bbff><!--[-->'), ssrRenderList(unref(s2), (e6) => {
          a6(ssrRenderComponent(p5, { key: e6.id, product: e6, onClick: /* @__PURE__ */ __name((a7) => {
            return r6 = e6.id, void c3.push(`/store/product/${r6}`);
            var r6;
          }, "onClick") }, null, t6));
        }), a6("<!--]--></div></div>")), a6("</main></div>");
      };
    } });
    S = P.setup;
    P.setup = (e4, a5) => {
      const r6 = useSSRContext();
      return (r6.modules || (r6.modules = /* @__PURE__ */ new Set())).add("pages/store/catalog/index.vue"), S ? S(e4, a5) : void 0;
    };
    U = _export_sfc(P, [["__scopeId", "data-v-be76bbff"]]);
  }
});

// dist/server/chunks/build/nuxt-link.mjs
function defineNuxtLink(o4) {
  const s2 = o4.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e4) {
    return "string" == typeof e4 && e4.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function resolveTrailingSlashBehavior(e4, t5) {
    if (!e4 || "append" !== o4.trailingSlash && "remove" !== o4.trailingSlash) return e4;
    if ("string" == typeof e4) return applyTrailingSlashBehavior(e4, o4.trailingSlash);
    const a5 = "path" in e4 && void 0 !== e4.path ? e4.path : t5(e4).path;
    return { ...e4, name: void 0, path: applyTrailingSlashBehavior(a5, o4.trailingSlash) };
  }
  __name(resolveTrailingSlashBehavior, "resolveTrailingSlashBehavior");
  function useNuxtLink(t5) {
    const a5 = useRouter(), o5 = useRuntimeConfig(), s3 = computed(() => !!t5.target && "_self" !== t5.target), v3 = computed(() => {
      const e4 = t5.to || t5.href || "";
      return "string" == typeof e4 && hasProtocol(e4, { acceptRelative: true });
    }), d6 = resolveComponent("RouterLink"), c3 = d6 && "string" != typeof d6 ? d6.useLink : void 0, f5 = computed(() => {
      if (t5.external) return true;
      const e4 = t5.to || t5.href || "";
      return "object" != typeof e4 && ("" === e4 || v3.value);
    }), g4 = computed(() => {
      const e4 = t5.to || t5.href || "";
      return f5.value ? e4 : resolveTrailingSlashBehavior(e4, a5.resolve);
    }), y3 = f5.value || null == c3 ? void 0 : c3({ ...t5, to: g4 }), m4 = computed(() => {
      var e4;
      if (!g4.value || v3.value || isHashLinkWithoutHashMode(g4.value)) return g4.value;
      if (f5.value) {
        const e5 = "object" == typeof g4.value && "path" in g4.value ? resolveRouteObject(g4.value) : g4.value;
        return resolveTrailingSlashBehavior("object" == typeof e5 ? a5.resolve(e5).href : e5, a5.resolve);
      }
      return "object" == typeof g4.value ? (null == (e4 = a5.resolve(g4.value)) ? void 0 : e4.href) ?? null : resolveTrailingSlashBehavior(joinURL(o5.app.baseURL, g4.value), a5.resolve);
    });
    return { to: g4, hasTarget: s3, isAbsoluteUrl: v3, isExternal: f5, href: m4, isActive: (null == y3 ? void 0 : y3.isActive) ?? computed(() => g4.value === a5.currentRoute.value.path), isExactActive: (null == y3 ? void 0 : y3.isExactActive) ?? computed(() => g4.value === a5.currentRoute.value.path), route: (null == y3 ? void 0 : y3.route) ?? computed(() => a5.resolve(g4.value)), async navigate(e4) {
      await navigateTo(m4.value, { replace: t5.replace, external: f5.value || s3.value });
    } };
  }
  __name(useNuxtLink, "useNuxtLink");
  return defineComponent({ name: s2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false } }, useLink: useNuxtLink, setup(r6, { slots: l3 }) {
    useRouter();
    const { to: i3, href: u2, navigate: n2, isExternal: s3, hasTarget: v3, isAbsoluteUrl: d6 } = useNuxtLink(r6);
    ref(false);
    async function prefetch(e4 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      var e4;
      if (!s3.value && !v3.value && !isHashLinkWithoutHashMode(i3.value)) {
        const e5 = { ref: void 0, to: i3.value, activeClass: r6.activeClass || o4.activeClass, exactActiveClass: r6.exactActiveClass || o4.exactActiveClass, replace: r6.replace, ariaCurrentValue: r6.ariaCurrentValue, custom: r6.custom };
        return r6.custom || (e5.rel = r6.rel || void 0), h(resolveComponent("RouterLink"), e5, l3.default);
      }
      const t5 = r6.target || null, c3 = ((...e5) => e5.find((e6) => void 0 !== e6))(r6.noRel ? "" : r6.rel, o4.externalRelAttribute, d6.value || v3.value ? "noopener noreferrer" : "") || null;
      return r6.custom ? l3.default ? l3.default({ href: u2.value, navigate: n2, prefetch, get route() {
        if (!u2.value) return;
        const e5 = new URL(u2.value, "http://localhost");
        return { path: e5.pathname, fullPath: e5.pathname, get query() {
          return parseQuery$1(e5.search);
        }, hash: e5.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: u2.value };
      }, rel: c3, target: t5, isExternal: s3.value || v3.value, isActive: false, isExactActive: false }) : null : h("a", { ref: void 0, href: u2.value || null, rel: c3, target: t5 }, null == (e4 = l3.default) ? void 0 : e4.call(l3));
    };
  } });
}
function applyTrailingSlashBehavior(e4, t5) {
  const a5 = "append" === t5 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e4) && !e4.startsWith("http") ? e4 : a5(e4, true);
}
var g;
var init_nuxt_link = __esm({
  "dist/server/chunks/build/nuxt-link.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    __name(defineNuxtLink, "defineNuxtLink");
    g = defineNuxtLink(ce);
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
  }
});

// dist/server/chunks/build/_id_.vue.mjs
var id_vue_exports = {};
__export(id_vue_exports, {
  default: () => f
});
import "node:events";
import "node:buffer";
import "node:timers";
var p2, m, f;
var init_id_vue = __esm({
  "dist/server/chunks/build/_id_.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nuxt_link();
    init_server();
    init_StarRating_vue();
    init_renderer();
    init_nitro();
    p2 = defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(s2) {
      useRoute$1().params.id;
      const e4 = ref(null), u2 = ref(true), p5 = ref(null);
      return (t5, s3, r6, m4) => {
        const f5 = g;
        s3(`<div${ssrRenderAttrs(m4)} data-v-009f27c1><header data-v-009f27c1><div class="container" data-v-009f27c1>`), s3(ssrRenderComponent(f5, { to: "/", class: "back-link" }, { default: withCtx((a5, t6, s4, d6) => {
          if (!t6) return [createTextVNode("\u2190 Back to Products")];
          t6("\u2190 Back to Products");
        }), _: 1 }, r6)), s3('</div></header><main class="container" data-v-009f27c1>'), u2.value ? s3('<div class="loading" data-v-009f27c1> Loading product... </div>') : p5.value ? s3(`<div class="error" data-v-009f27c1>${ssrInterpolate(p5.value)}</div>`) : e4.value ? (s3(`<div class="product-detail" data-v-009f27c1><div class="product-image" data-v-009f27c1><img${ssrRenderAttr("src", e4.value.imageUrl)}${ssrRenderAttr("alt", e4.value.name)} data-v-009f27c1></div><div class="product-info" data-v-009f27c1><h2 data-v-009f27c1>${ssrInterpolate(e4.value.name)}</h2>`), s3(ssrRenderComponent(p, { rating: e4.value.rating }, null, r6)), s3(`<div class="price" data-v-009f27c1>$${ssrInterpolate(e4.value.price)}</div><p data-v-009f27c1><strong data-v-009f27c1>Color:</strong> ${ssrInterpolate(e4.value.color)}</p><p data-v-009f27c1><strong data-v-009f27c1>Size:</strong> ${ssrInterpolate(e4.value.size)}</p><p class="description" data-v-009f27c1>${ssrInterpolate(e4.value.description)}</p><button class="button" data-v-009f27c1>Add to Cart</button></div></div>`)) : s3("<!---->"), s3("</main></div>");
      };
    } });
    m = p2.setup;
    p2.setup = (a5, t5) => {
      const s2 = useSSRContext();
      return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("pages/store/product/[id].vue"), m ? m(a5, t5) : void 0;
    };
    f = _export_sfc(p2, [["__scopeId", "data-v-009f27c1"]]);
  }
});

// dist/server/chunks/build/default.vue.mjs
var default_vue_exports = {};
__export(default_vue_exports, {
  default: () => d2
});
import "node:events";
import "node:buffer";
import "node:timers";
var r4, n, d2;
var init_default_vue = __esm({
  "dist/server/chunks/build/default.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    init_nitro();
    r4 = {};
    n = r4.setup;
    r4.setup = (e4, o4) => {
      const s2 = useSSRContext();
      return (s2.modules || (s2.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), n ? n(e4, o4) : void 0;
    };
    d2 = _export_sfc(r4, [["ssrRender", function(e4, t5, r6, n2) {
      t5(`<div${ssrRenderAttrs(n2)}>`), ssrRenderSlot(e4.$slots, "default", {}, null, t5, r6), t5("</div>");
    }]]);
  }
});

// dist/server/chunks/build/v3.mjs
function useHead2(o4, u2 = {}) {
  const a5 = function(e4) {
    var o5;
    const u3 = e4 || tryUseNuxtApp();
    return (null == (o5 = null == u3 ? void 0 : u3.ssrContext) ? void 0 : o5.head) || (null == u3 ? void 0 : u3.runWithContext(() => {
      if (hasInjectionContext()) return inject(Ut);
    }));
  }(u2.nuxt);
  if (a5) return useHead(o4, { head: a5, ...u2 });
}
var init_v3 = __esm({
  "dist/server/chunks/build/v3.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    __name(useHead2, "useHead");
  }
});

// dist/server/chunks/build/error-404.vue.mjs
var error_404_vue_exports = {};
__export(error_404_vue_exports, {
  default: () => f2
});
import "node:events";
import "node:buffer";
import "node:timers";
var l, p3, f2;
var init_error_404_vue = __esm({
  "dist/server/chunks/build/error-404.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nuxt_link();
    init_server();
    init_v3();
    init_renderer();
    init_nitro();
    l = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(t5) {
      const c3 = t5;
      return useHead2({ title: `${c3.statusCode} - ${c3.statusMessage} | ${c3.appName}`, script: [{ children: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ children: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r6, c4, l3, p5) => {
        const f5 = g;
        c4(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, p5))} data-v-f6c813f1><div class="fixed left-0 right-0 spotlight z-10" data-v-f6c813f1></div><div class="max-w-520px text-center z-20" data-v-f6c813f1><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-f6c813f1>${ssrInterpolate(t5.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-f6c813f1>${ssrInterpolate(t5.description)}</p><div class="flex items-center justify-center w-full" data-v-f6c813f1>`), c4(ssrRenderComponent(f5, { to: "/", class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md" }, { default: withCtx((e4, r7, n2, s2) => {
          if (!r7) return [createTextVNode(toDisplayString(t5.backHome), 1)];
          r7(`${ssrInterpolate(t5.backHome)}`);
        }), _: 1 }, l3)), c4("</div></div></div>");
      };
    } };
    p3 = l.setup;
    l.setup = (e4, t5) => {
      const r6 = useSSRContext();
      return (r6.modules || (r6.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-404.vue"), p3 ? p3(e4, t5) : void 0;
    };
    f2 = _export_sfc(l, [["__scopeId", "data-v-f6c813f1"]]);
  }
});

// dist/server/chunks/build/error-500.vue.mjs
var error_500_vue_exports = {};
__export(error_500_vue_exports, {
  default: () => d3
});
import "node:events";
import "node:buffer";
import "node:timers";
var a3, i, d3;
var init_error_500_vue = __esm({
  "dist/server/chunks/build/error-500.vue.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_v3();
    init_renderer();
    init_nitro();
    a3 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e4) {
      const s2 = e4;
      return useHead2({ title: `${s2.statusCode} - ${s2.statusMessage} | ${s2.appName}`, script: [{ children: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ children: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t5, s3, a5, i3) => {
        s3(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, i3))} data-v-9ccdd2a2><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight" data-v-9ccdd2a2></div><div class="max-w-520px text-center" data-v-9ccdd2a2><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-9ccdd2a2>${ssrInterpolate(e4.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-9ccdd2a2>${ssrInterpolate(e4.description)}</p></div></div>`);
      };
    } };
    i = a3.setup;
    a3.setup = (e4, t5) => {
      const r6 = useSSRContext();
      return (r6.modules || (r6.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/error-500.vue"), i ? i(e4, t5) : void 0;
    };
    d3 = _export_sfc(a3, [["__scopeId", "data-v-9ccdd2a2"]]);
  }
});

// dist/server/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  _: () => _export_sfc,
  a: () => le,
  b: () => useRouter,
  c: () => createError,
  d: () => useRoute$1,
  e: () => useRuntimeConfig,
  f: () => withoutTrailingSlash,
  g: () => ce,
  h: () => hasProtocol,
  j: () => joinURL,
  n: () => navigateTo,
  p: () => parseQuery$1,
  r: () => resolveRouteObject,
  s: () => jt,
  t: () => tryUseNuxtApp,
  u: () => useNuxtApp,
  w: () => withTrailingSlash
});
function encodeQueryValue$1(e4) {
  return (t5 = "string" == typeof e4 ? e4 : JSON.stringify(e4), encodeURI("" + t5).replace(K, "|")).replace(U2, "%2B").replace(V, "+").replace(B, "%23").replace(z2, "%26").replace(q, "`").replace(G, "^").replace(F, "%2F");
  var t5;
}
function encodeQueryKey$1(e4) {
  return encodeQueryValue$1(e4).replace(Q, "%3D");
}
function decode$1(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodeQueryValue(e4) {
  return decode$1(e4.replace(U2, " "));
}
function parseQuery$1(e4 = "") {
  const t5 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const o4 of e4.split("&")) {
    const e5 = o4.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const n2 = decode$1(e5[1].replace(U2, " "));
    if ("__proto__" === n2 || "constructor" === n2) continue;
    const r6 = decodeQueryValue(e5[2] || "");
    void 0 === t5[n2] ? t5[n2] = r6 : Array.isArray(t5[n2]) ? t5[n2].push(r6) : t5[n2] = [t5[n2], r6];
  }
  return t5;
}
function stringifyQuery$1(e4) {
  return Object.keys(e4).filter((t5) => void 0 !== e4[t5]).map((t5) => {
    return o4 = t5, "number" != typeof (n2 = e4[t5]) && "boolean" != typeof n2 || (n2 = String(n2)), n2 ? Array.isArray(n2) ? n2.map((e5) => `${encodeQueryKey$1(o4)}=${encodeQueryValue$1(e5)}`).join("&") : `${encodeQueryKey$1(o4)}=${encodeQueryValue$1(n2)}` : encodeQueryKey$1(o4);
    var o4, n2;
  }).filter(Boolean).join("&");
}
function hasProtocol(e4, t5 = {}) {
  return "boolean" == typeof t5 && (t5 = { acceptRelative: t5 }), t5.strict ? I.test(e4) : D2.test(e4) || !!t5.acceptRelative && J.test(e4);
}
function hasTrailingSlash(e4 = "", t5) {
  return t5 ? X.test(e4) : e4.endsWith("/");
}
function withoutTrailingSlash(e4 = "", t5) {
  if (!t5) return (hasTrailingSlash(e4) ? e4.slice(0, -1) : e4) || "/";
  if (!hasTrailingSlash(e4, true)) return e4 || "/";
  let o4 = e4, n2 = "";
  const r6 = e4.indexOf("#");
  -1 !== r6 && (o4 = e4.slice(0, r6), n2 = e4.slice(r6));
  const [a5, ...s2] = o4.split("?");
  return ((a5.endsWith("/") ? a5.slice(0, -1) : a5) || "/") + (s2.length > 0 ? `?${s2.join("?")}` : "") + n2;
}
function withTrailingSlash(e4 = "", t5) {
  if (!t5) return e4.endsWith("/") ? e4 : e4 + "/";
  if (hasTrailingSlash(e4, true)) return e4 || "/";
  let o4 = e4, n2 = "";
  const r6 = e4.indexOf("#");
  if (-1 !== r6 && (o4 = e4.slice(0, r6), n2 = e4.slice(r6), !o4)) return n2;
  const [a5, ...s2] = o4.split("?");
  return a5 + "/" + (s2.length > 0 ? `?${s2.join("?")}` : "") + n2;
}
function withQuery(e4, t5) {
  const o4 = function(e5 = "") {
    const t6 = e5.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (t6) {
      const [, e6, o6 = ""] = t6;
      return { protocol: e6.toLowerCase(), pathname: o6, href: e6 + o6, auth: "", host: "", search: "", hash: "" };
    }
    if (!hasProtocol(e5, { acceptRelative: true })) return parsePath(e5);
    const [, o5 = "", n3, r6 = ""] = e5.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, a5 = "", s2 = ""] = r6.match(/([^#/?]*)(.*)?/) || [];
    "file:" === o5 && (s2 = s2.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: i3, search: c3, hash: l3 } = parsePath(s2);
    return { protocol: o5.toLowerCase(), auth: n3 ? n3.slice(0, Math.max(0, n3.length - 1)) : "", host: a5, pathname: i3, search: c3, hash: l3, [ee]: !o5 };
  }(e4), n2 = { ...parseQuery$1(o4.search), ...t5 };
  return o4.search = stringifyQuery$1(n2), function(e5) {
    const t6 = e5.pathname || "", o5 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", n3 = e5.hash || "", r6 = e5.auth ? e5.auth + "@" : "", a5 = e5.host || "", s2 = e5.protocol || e5[ee] ? (e5.protocol || "") + "//" : "";
    return s2 + r6 + a5 + t6 + o5 + n3;
  }(o4);
}
function joinURL(e4, ...t5) {
  let o4 = e4 || "";
  for (const e5 of t5.filter((e6) => /* @__PURE__ */ function(e7) {
    return e7 && "/" !== e7;
  }(e6))) if (o4) {
    const t6 = e5.replace(Z, "");
    o4 = withTrailingSlash(o4) + t6;
  } else o4 = e5;
  return o4;
}
function parsePath(e4 = "") {
  const [t5 = "", o4 = "", n2 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t5, search: o4, hash: n2 };
}
function flatHooks(e4, t5 = {}, o4) {
  for (const n2 in e4) {
    const r6 = e4[n2], a5 = o4 ? `${o4}:${n2}` : n2;
    "object" == typeof r6 && null !== r6 ? flatHooks(r6, t5, a5) : "function" == typeof r6 && (t5[a5] = r6);
  }
  return t5;
}
function serialTaskCaller(e4, t5) {
  const o4 = t5.shift(), n2 = oe(o4);
  return e4.reduce((e5, o5) => e5.then(() => n2.run(() => o5(...t5))), Promise.resolve());
}
function parallelTaskCaller(e4, t5) {
  const o4 = t5.shift(), n2 = oe(o4);
  return Promise.all(e4.map((e5) => n2.run(() => e5(...t5))));
}
function callEachWith(e4, t5) {
  for (const o4 of [...e4]) o4(t5);
}
function executeAsync(e4) {
  const t5 = [];
  for (const e5 of ie) {
    const o5 = e5();
    o5 && t5.push(o5);
  }
  const restore = /* @__PURE__ */ __name(() => {
    for (const e5 of t5) e5();
  }, "restore");
  let o4 = e4();
  return o4 && "object" == typeof o4 && "catch" in o4 && (o4 = o4.catch((e5) => {
    throw restore(), e5;
  })), [o4, restore];
}
function getNuxtAppCtx(e4 = ue) {
  return ((e5, t5 = {}) => ae.get(e5, t5))(e4, { asyncContext: false });
}
function createNuxtApp(e4) {
  var t5;
  let s2 = 0;
  const i3 = { _id: e4.id || ue || "nuxt-app", _scope: effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
    return "3.16.0";
  }, get vue() {
    return i3.vueApp.version;
  } }, payload: shallowReactive({ ...(null == (t5 = e4.ssrContext) ? void 0 : t5.payload) || {}, data: shallowReactive({}), state: reactive({}), once: /* @__PURE__ */ new Set(), _errors: shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e5) => i3._scope.active && !getCurrentScope() ? i3._scope.run(() => callWithNuxt(i3, e5)) : callWithNuxt(i3, e5), "runWithContext"), isHydrating: false, deferHydration() {
    if (!i3.isHydrating) return () => {
    };
    s2++;
    let e5 = false;
    return () => {
      if (!e5) return e5 = true, s2--, 0 === s2 ? (i3.isHydrating = false, i3.callHook("app:suspense:resolve")) : void 0;
    };
  }, _asyncDataPromises: {}, _asyncData: shallowReactive({}), _payloadRevivers: {}, ...e4 };
  i3.payload.serverRendered = true, i3.ssrContext && (i3.payload.path = i3.ssrContext.url, i3.ssrContext.nuxt = i3, i3.ssrContext.payload = i3.payload, i3.ssrContext.config = { public: i3.ssrContext.runtimeConfig.public, app: i3.ssrContext.runtimeConfig.app }), i3.hooks = new Hookable(), i3.hook = i3.hooks.hook;
  {
    const contextCaller = /* @__PURE__ */ __name(async function(e5, t6) {
      for (const o4 of e5) await i3.runWithContext(() => o4(...t6));
    }, "contextCaller");
    i3.hooks.callHook = (e5, ...t6) => i3.hooks.callHookWith(contextCaller, e5, ...t6);
  }
  i3.callHook = i3.hooks.callHook, i3.provide = (e5, t6) => {
    const o4 = "$" + e5;
    defineGetter(i3, o4, t6), defineGetter(i3.vueApp.config.globalProperties, o4, t6);
  }, defineGetter(i3.vueApp, "$nuxt", i3), defineGetter(i3.vueApp.config.globalProperties, "$nuxt", i3);
  const c3 = e4.ssrContext.runtimeConfig;
  return i3.provide("config", c3), i3;
}
function registerPluginHooks(e4, t5) {
  t5.hooks && e4.hooks.addHooks(t5.hooks);
}
function defineNuxtPlugin(e4) {
  if ("function" == typeof e4) return e4;
  const t5 = e4._name || e4.name;
  return delete e4.name, Object.assign(e4.setup || (() => {
  }), e4, { [de]: true, _name: t5 });
}
function callWithNuxt(e4, t5, o4) {
  const fn2 = /* @__PURE__ */ __name(() => t5(), "fn"), n2 = getNuxtAppCtx(e4._id);
  return e4.vueApp.runWithContext(() => n2.callAsync(e4, fn2));
}
function tryUseNuxtApp(e4) {
  var t5;
  let o4;
  return hasInjectionContext() && (o4 = null == (t5 = getCurrentInstance()) ? void 0 : t5.appContext.app.$nuxt), o4 || (o4 = getNuxtAppCtx(e4).tryUse()), o4 || null;
}
function useNuxtApp(e4) {
  const t5 = tryUseNuxtApp(e4);
  if (!t5) throw new Error("[nuxt] instance unavailable");
  return t5;
}
function useRuntimeConfig(e4) {
  return useNuxtApp().$config;
}
function defineGetter(e4, t5, o4) {
  Object.defineProperty(e4, t5, { get: /* @__PURE__ */ __name(() => o4, "get") });
}
function createRouter$1(e4 = {}) {
  const t5 = { options: e4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t6) => e4.strictTrailingSlash ? t6 : t6.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const o4 in e4.routes) insert(t5, normalizeTrailingSlash(o4), e4.routes[o4]);
  return { ctx: t5, lookup: /* @__PURE__ */ __name((e5) => function(e6, t6) {
    const o4 = e6.staticRoutesMap[t6];
    if (o4) return o4.data;
    const n2 = t6.split("/"), r6 = {};
    let a5 = false, s2 = null, i3 = e6.rootNode, c3 = null;
    for (let e7 = 0; e7 < n2.length; e7++) {
      const t7 = n2[e7];
      null !== i3.wildcardChildNode && (s2 = i3.wildcardChildNode, c3 = n2.slice(e7).join("/"));
      const o5 = i3.children.get(t7);
      if (void 0 === o5) {
        if (i3 && i3.placeholderChildren.length > 1) {
          const t8 = n2.length - e7;
          i3 = i3.placeholderChildren.find((e8) => e8.maxDepth === t8) || null;
        } else i3 = i3.placeholderChildren[0] || null;
        if (!i3) break;
        i3.paramName && (r6[i3.paramName] = t7), a5 = true;
      } else i3 = o5;
    }
    null !== i3 && null !== i3.data || null === s2 || (i3 = s2, r6[i3.paramName || "_"] = c3, a5 = true);
    if (!i3) return null;
    if (a5) return { ...i3.data, params: a5 ? r6 : void 0 };
    return i3.data;
  }(t5, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, o4) => insert(t5, normalizeTrailingSlash(e5), o4), "insert"), remove: /* @__PURE__ */ __name((e5) => function(e6, t6) {
    let o4 = false;
    const n2 = t6.split("/");
    let r6 = e6.rootNode;
    for (const e7 of n2) if (r6 = r6.children.get(e7), !r6) return o4;
    if (r6.data) {
      const e7 = n2.at(-1) || "";
      r6.data = null, 0 === Object.keys(r6.children).length && r6.parent && (r6.parent.children.delete(e7), r6.parent.wildcardChildNode = null, r6.parent.placeholderChildren = []), o4 = true;
    }
    return o4;
  }(t5, normalizeTrailingSlash(e5)), "remove") };
}
function insert(e4, t5, o4) {
  let n2 = true;
  const r6 = t5.split("/");
  let a5 = e4.rootNode, s2 = 0;
  const i3 = [a5];
  for (const e5 of r6) {
    let t6;
    if (t6 = a5.children.get(e5)) a5 = t6;
    else {
      const o5 = getNodeType(e5);
      t6 = createRadixNode({ type: o5, parent: a5 }), a5.children.set(e5, t6), o5 === he ? (t6.paramName = "*" === e5 ? "_" + s2++ : e5.slice(1), a5.placeholderChildren.push(t6), n2 = false) : o5 === fe && (a5.wildcardChildNode = t6, t6.paramName = e5.slice(3) || "_", n2 = false), i3.push(t6), a5 = t6;
    }
  }
  for (const [e5, t6] of i3.entries()) t6.maxDepth = Math.max(i3.length - e5, t6.maxDepth || 0);
  return a5.data = o4, true === n2 && (e4.staticRoutesMap[t5] = a5), a5;
}
function createRadixNode(e4 = {}) {
  return { type: e4.type || pe, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e4) {
  return e4.startsWith("**") ? fe : ":" === e4[0] || "*" === e4 ? he : pe;
}
function toRouteMatcher(e4) {
  return /* @__PURE__ */ function(e5, t5) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((o4) => _matchRoutes(o4, e5, t5), "matchAll") };
  }(_routerNodeToTable("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e4, t5, o4) {
  true !== o4 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const n2 = [];
  for (const [o5, r7] of _sortRoutesMap(t5.wildcard)) (e4 === o5 || e4.startsWith(o5 + "/")) && n2.push(r7);
  for (const [o5, r7] of _sortRoutesMap(t5.dynamic)) if (e4.startsWith(o5 + "/")) {
    const t6 = "/" + e4.slice(o5.length).split("/").splice(2).join("/");
    n2.push(..._matchRoutes(t6, r7));
  }
  const r6 = t5.static.get(e4);
  return r6 && n2.push(r6), n2.filter(Boolean);
}
function _sortRoutesMap(e4) {
  return [...e4.entries()].sort((e5, t5) => e5[0].length - t5[0].length);
}
function _routerNodeToTable(e4, t5) {
  const o4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t6) {
    if (e5) if (t6.type !== pe || e5.includes("*") || e5.includes(":")) {
      if (t6.type === fe) o4.wildcard.set(e5.replace("/**", ""), t6.data);
      else if (t6.type === he) {
        const n2 = _routerNodeToTable("", t6);
        return t6.data && n2.static.set("/", t6.data), void o4.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), n2);
      }
    } else t6.data && o4.static.set(e5, t6.data);
    for (const [o5, n2] of t6.children.entries()) _addNode(`${e5}/${o5}`.replace("//", "/"), n2);
  }, "_addNode"))(e4, t5), o4;
}
function createError$1(e4) {
  if ("string" == typeof e4) return new H3Error(e4);
  if (function(e5) {
    return true === e5?.constructor?.__h3_error__;
  }(e4)) return e4;
  const t5 = new H3Error(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (function(e5, t6) {
    try {
      return t6 in e5;
    } catch {
      return false;
    }
  }(e4, "stack")) try {
    Object.defineProperty(t5, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t5.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t5.data = e4.data), e4.statusCode ? t5.statusCode = sanitizeStatusCode(e4.statusCode, t5.statusCode) : e4.status && (t5.statusCode = sanitizeStatusCode(e4.status, t5.statusCode)), e4.statusMessage ? t5.statusMessage = e4.statusMessage : e4.statusText && (t5.statusMessage = e4.statusText), t5.statusMessage) {
    const e5 = t5.statusMessage;
    sanitizeStatusMessage(t5.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t5.fatal = e4.fatal), void 0 !== e4.unhandled && (t5.unhandled = e4.unhandled), t5;
}
function sanitizeStatusMessage(e4 = "") {
  return e4.replace(me, "");
}
function sanitizeStatusCode(e4, t5 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t5 : e4) : t5;
}
function isRouteComponent(e4) {
  return "object" == typeof e4 || "displayName" in e4 || "props" in e4 || "__vccOpts" in e4;
}
function applyToParams(e4, t5) {
  const o4 = {};
  for (const n2 in t5) {
    const r6 = t5[n2];
    o4[n2] = Re(r6) ? r6.map(e4) : e4(r6);
  }
  return o4;
}
function commonEncode(e4) {
  return encodeURI("" + e4).replace(je, "|").replace(Se, "[").replace(Ee, "]");
}
function encodeQueryValue(e4) {
  return commonEncode(e4).replace(Pe, "%2B").replace(Me, "+").replace(xe, "%23").replace(ke, "%26").replace(Ae, "`").replace(Oe, "{").replace($e, "}").replace(Ne, "^");
}
function encodeParam(e4) {
  return null == e4 ? "" : function(e5) {
    return commonEncode(e5).replace(xe, "%23").replace(Ce, "%3F");
  }(e4).replace(we, "%2F");
}
function decode(e4) {
  try {
    return decodeURIComponent("" + e4);
  } catch (e5) {
  }
  return "" + e4;
}
function parseURL(e4, t5, o4 = "/") {
  let n2, r6 = {}, a5 = "", s2 = "";
  const i3 = t5.indexOf("#");
  let c3 = t5.indexOf("?");
  return i3 < c3 && i3 >= 0 && (c3 = -1), c3 > -1 && (n2 = t5.slice(0, c3), a5 = t5.slice(c3 + 1, i3 > -1 ? i3 : t5.length), r6 = e4(a5)), i3 > -1 && (n2 = n2 || t5.slice(0, i3), s2 = t5.slice(i3, t5.length)), n2 = function(e5, t6) {
    if (e5.startsWith("/")) return e5;
    if (!e5) return t6;
    const o5 = t6.split("/"), n3 = e5.split("/"), r7 = n3[n3.length - 1];
    ".." !== r7 && "." !== r7 || n3.push("");
    let a6, s3, i4 = o5.length - 1;
    for (a6 = 0; a6 < n3.length; a6++) if (s3 = n3[a6], "." !== s3) {
      if (".." !== s3) break;
      i4 > 1 && i4--;
    }
    return o5.slice(0, i4).join("/") + "/" + n3.slice(a6).join("/");
  }(null != n2 ? n2 : t5, o4), { fullPath: n2 + (a5 && "?") + a5 + s2, path: n2, query: r6, hash: decode(s2) };
}
function isSameRouteRecord(e4, t5) {
  return (e4.aliasOf || e4) === (t5.aliasOf || t5);
}
function isSameRouteLocationParams(e4, t5) {
  if (Object.keys(e4).length !== Object.keys(t5).length) return false;
  for (const o4 in e4) if (!isSameRouteLocationParamsValue(e4[o4], t5[o4])) return false;
  return true;
}
function isSameRouteLocationParamsValue(e4, t5) {
  return Re(e4) ? isEquivalentArray(e4, t5) : Re(t5) ? isEquivalentArray(t5, e4) : e4 === t5;
}
function isEquivalentArray(e4, t5) {
  return Re(t5) ? e4.length === t5.length && e4.every((e5, o4) => e5 === t5[o4]) : 1 === e4.length && e4[0] === t5;
}
function normalizeBase(e4) {
  if (!e4) if (ye) {
    const t5 = document.querySelector("base");
    e4 = (e4 = t5 && t5.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
  } else e4 = "/";
  return "/" !== e4[0] && "#" !== e4[0] && (e4 = "/" + e4), e4.replace(Te, "");
}
function createHref(e4, t5) {
  return e4.replace(Be, "#") + t5;
}
function scrollToPosition(e4) {
  let t5;
  if ("el" in e4) {
    const o4 = e4.el, n2 = "string" == typeof o4 && o4.startsWith("#"), r6 = "string" == typeof o4 ? n2 ? document.getElementById(o4.slice(1)) : document.querySelector(o4) : o4;
    if (!r6) return;
    t5 = function(e5, t6) {
      const o5 = document.documentElement.getBoundingClientRect(), n3 = e5.getBoundingClientRect();
      return { behavior: t6.behavior, left: n3.left - o5.left - (t6.left || 0), top: n3.top - o5.top - (t6.top || 0) };
    }(r6, e4);
  } else t5 = e4;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t5) : window.scrollTo(null != t5.left ? t5.left : window.scrollX, null != t5.top ? t5.top : window.scrollY);
}
function getScrollKey(e4, t5) {
  return (history.state ? history.state.position - t5 : -1) + e4;
}
function createMemoryHistory(e4 = "") {
  let t5 = [], o4 = [""], n2 = 0;
  function setLocation(e5) {
    n2++, n2 !== o4.length && o4.splice(n2), o4.push(e5);
  }
  __name(setLocation, "setLocation");
  const r6 = { location: "", state: {}, base: e4 = normalizeBase(e4), createHref: createHref.bind(null, e4), replace(e5) {
    o4.splice(n2--, 1), setLocation(e5);
  }, push(e5, t6) {
    setLocation(e5);
  }, listen: /* @__PURE__ */ __name((e5) => (t5.push(e5), () => {
    const o5 = t5.indexOf(e5);
    o5 > -1 && t5.splice(o5, 1);
  }), "listen"), destroy() {
    t5 = [], o4 = [""], n2 = 0;
  }, go(e5, r7 = true) {
    const a5 = this.location, s2 = e5 < 0 ? Le.back : Le.forward;
    n2 = Math.max(0, Math.min(n2 + e5, o4.length - 1)), r7 && function(e6, o5, { direction: n3, delta: r8 }) {
      const a6 = { direction: n3, delta: r8, type: We.pop };
      for (const n4 of t5) n4(e6, o5, a6);
    }(this.location, a5, { direction: s2, delta: e5 });
  } };
  return Object.defineProperty(r6, "location", { enumerable: true, get: /* @__PURE__ */ __name(() => o4[n2], "get") }), r6;
}
function isRouteName(e4) {
  return "string" == typeof e4 || "symbol" == typeof e4;
}
function createRouterError(e4, t5) {
  return be(new Error(), { type: e4, [Fe]: true }, t5);
}
function isNavigationFailure(e4, t5) {
  return e4 instanceof Error && Fe in e4 && (null == t5 || !!(e4.type & t5));
}
function compareScoreArray(e4, t5) {
  let o4 = 0;
  for (; o4 < e4.length && o4 < t5.length; ) {
    const n2 = t5[o4] - e4[o4];
    if (n2) return n2;
    o4++;
  }
  return e4.length < t5.length ? 1 === e4.length && 80 === e4[0] ? -1 : 1 : e4.length > t5.length ? 1 === t5.length && 80 === t5[0] ? 1 : -1 : 0;
}
function comparePathParserScore(e4, t5) {
  let o4 = 0;
  const n2 = e4.score, r6 = t5.score;
  for (; o4 < n2.length && o4 < r6.length; ) {
    const e5 = compareScoreArray(n2[o4], r6[o4]);
    if (e5) return e5;
    o4++;
  }
  if (1 === Math.abs(r6.length - n2.length)) {
    if (isLastScoreNegative(n2)) return 1;
    if (isLastScoreNegative(r6)) return -1;
  }
  return r6.length - n2.length;
}
function isLastScoreNegative(e4) {
  const t5 = e4[e4.length - 1];
  return e4.length > 0 && t5[t5.length - 1] < 0;
}
function createRouteRecordMatcher(e4, t5, o4) {
  const n2 = function(e5, t6) {
    const o5 = be({}, Ge, t6), n3 = [];
    let r7 = o5.start ? "^" : "";
    const a5 = [];
    for (const t7 of e5) {
      const e6 = t7.length ? [] : [90];
      o5.strict && !t7.length && (r7 += "/");
      for (let n4 = 0; n4 < t7.length; n4++) {
        const s3 = t7[n4];
        let i3 = 40 + (o5.sensitive ? 0.25 : 0);
        if (0 === s3.type) n4 || (r7 += "/"), r7 += s3.value.replace(qe2, "\\$&"), i3 += 40;
        else if (1 === s3.type) {
          const { value: e7, repeatable: o6, optional: c3, regexp: l3 } = s3;
          a5.push({ name: e7, repeatable: o6, optional: c3 });
          const u2 = l3 || Ue;
          if (u2 !== Ue) {
            i3 += 10;
            try {
              new RegExp(`(${u2})`);
            } catch (t8) {
              throw new Error(`Invalid custom RegExp for param "${e7}" (${u2}): ` + t8.message);
            }
          }
          let d6 = o6 ? `((?:${u2})(?:/(?:${u2}))*)` : `(${u2})`;
          n4 || (d6 = c3 && t7.length < 2 ? `(?:/${d6})` : "/" + d6), c3 && (d6 += "?"), r7 += d6, i3 += 20, c3 && (i3 += -8), o6 && (i3 += -20), ".*" === u2 && (i3 += -50);
        }
        e6.push(i3);
      }
      n3.push(e6);
    }
    if (o5.strict && o5.end) {
      const e6 = n3.length - 1;
      n3[e6][n3[e6].length - 1] += 0.7000000000000001;
    }
    o5.strict || (r7 += "/?"), o5.end ? r7 += "$" : o5.strict && !r7.endsWith("/") && (r7 += "(?:/|$)");
    const s2 = new RegExp(r7, o5.sensitive ? "" : "i");
    return { re: s2, score: n3, keys: a5, parse: /* @__PURE__ */ __name(function(e6) {
      const t7 = e6.match(s2), o6 = {};
      if (!t7) return null;
      for (let e7 = 1; e7 < t7.length; e7++) {
        const n4 = t7[e7] || "", r8 = a5[e7 - 1];
        o6[r8.name] = n4 && r8.repeatable ? n4.split("/") : n4;
      }
      return o6;
    }, "parse"), stringify: /* @__PURE__ */ __name(function(t7) {
      let o6 = "", n4 = false;
      for (const r8 of e5) {
        n4 && o6.endsWith("/") || (o6 += "/"), n4 = false;
        for (const e6 of r8) if (0 === e6.type) o6 += e6.value;
        else if (1 === e6.type) {
          const { value: a6, repeatable: s3, optional: i3 } = e6, c3 = a6 in t7 ? t7[a6] : "";
          if (Re(c3) && !s3) throw new Error(`Provided param "${a6}" is an array but it is not repeatable (* or + modifiers)`);
          const l3 = Re(c3) ? c3.join("/") : c3;
          if (!l3) {
            if (!i3) throw new Error(`Missing required param "${a6}"`);
            r8.length < 2 && (o6.endsWith("/") ? o6 = o6.slice(0, -1) : n4 = true);
          }
          o6 += l3;
        }
      }
      return o6 || "/";
    }, "stringify") };
  }(function(e5) {
    if (!e5) return [[]];
    if ("/" === e5) return [[Ke]];
    if (!e5.startsWith("/")) throw new Error(`Invalid path "${e5}"`);
    function crash(e6) {
      throw new Error(`ERR (${t6})/"${i3}": ${e6}`);
    }
    __name(crash, "crash");
    let t6 = 0, o5 = t6;
    const n3 = [];
    let r7;
    function finalizeSegment() {
      r7 && n3.push(r7), r7 = [];
    }
    __name(finalizeSegment, "finalizeSegment");
    let a5, s2 = 0, i3 = "", c3 = "";
    function consumeBuffer() {
      i3 && (0 === t6 ? r7.push({ type: 0, value: i3 }) : 1 === t6 || 2 === t6 || 3 === t6 ? (r7.length > 1 && ("*" === a5 || "+" === a5) && crash(`A repeatable param (${i3}) must be alone in its segment. eg: '/:ids+.`), r7.push({ type: 1, value: i3, regexp: c3, repeatable: "*" === a5 || "+" === a5, optional: "*" === a5 || "?" === a5 })) : crash("Invalid state to consume buffer"), i3 = "");
    }
    __name(consumeBuffer, "consumeBuffer");
    function addCharToBuffer() {
      i3 += a5;
    }
    __name(addCharToBuffer, "addCharToBuffer");
    for (; s2 < e5.length; ) if (a5 = e5[s2++], "\\" !== a5 || 2 === t6) switch (t6) {
      case 0:
        "/" === a5 ? (i3 && consumeBuffer(), finalizeSegment()) : ":" === a5 ? (consumeBuffer(), t6 = 1) : addCharToBuffer();
        break;
      case 4:
        addCharToBuffer(), t6 = o5;
        break;
      case 1:
        "(" === a5 ? t6 = 2 : Ve.test(a5) ? addCharToBuffer() : (consumeBuffer(), t6 = 0, "*" !== a5 && "?" !== a5 && "+" !== a5 && s2--);
        break;
      case 2:
        ")" === a5 ? "\\" == c3[c3.length - 1] ? c3 = c3.slice(0, -1) + a5 : t6 = 3 : c3 += a5;
        break;
      case 3:
        consumeBuffer(), t6 = 0, "*" !== a5 && "?" !== a5 && "+" !== a5 && s2--, c3 = "";
        break;
      default:
        crash("Unknown state");
    }
    else o5 = t6, t6 = 4;
    return 2 === t6 && crash(`Unfinished custom RegExp for param "${i3}"`), consumeBuffer(), finalizeSegment(), n3;
  }(e4.path), o4), r6 = be(n2, { record: e4, parent: t5, children: [], alias: [] });
  return t5 && !r6.record.aliasOf == !t5.record.aliasOf && t5.children.push(r6), r6;
}
function createRouterMatcher(e4, t5) {
  const o4 = [], n2 = /* @__PURE__ */ new Map();
  function addRoute(e5, o5, n3) {
    const r6 = !n3, a5 = normalizeRouteRecord(e5);
    a5.aliasOf = n3 && n3.record;
    const s2 = mergeOptions(t5, e5), i3 = [a5];
    if ("alias" in e5) {
      const t6 = "string" == typeof e5.alias ? [e5.alias] : e5.alias;
      for (const e6 of t6) i3.push(normalizeRouteRecord(be({}, a5, { components: n3 ? n3.record.components : a5.components, path: e6, aliasOf: n3 ? n3.record : a5 })));
    }
    let c3, l3;
    for (const t6 of i3) {
      const { path: i4 } = t6;
      if (o5 && "/" !== i4[0]) {
        const e6 = o5.record.path, n4 = "/" === e6[e6.length - 1] ? "" : "/";
        t6.path = o5.record.path + (i4 && n4 + i4);
      }
      if (c3 = createRouteRecordMatcher(t6, o5, s2), n3 ? n3.alias.push(c3) : (l3 = l3 || c3, l3 !== c3 && l3.alias.push(c3), r6 && e5.name && !isAliasRecord(c3) && removeRoute(e5.name)), isMatchable(c3) && insertMatcher(c3), a5.children) {
        const e6 = a5.children;
        for (let t7 = 0; t7 < e6.length; t7++) addRoute(e6[t7], c3, n3 && n3.children[t7]);
      }
      n3 = n3 || c3;
    }
    return l3 ? () => {
      removeRoute(l3);
    } : noop;
  }
  __name(addRoute, "addRoute");
  function removeRoute(e5) {
    if (isRouteName(e5)) {
      const t6 = n2.get(e5);
      t6 && (n2.delete(e5), o4.splice(o4.indexOf(t6), 1), t6.children.forEach(removeRoute), t6.alias.forEach(removeRoute));
    } else {
      const t6 = o4.indexOf(e5);
      t6 > -1 && (o4.splice(t6, 1), e5.record.name && n2.delete(e5.record.name), e5.children.forEach(removeRoute), e5.alias.forEach(removeRoute));
    }
  }
  __name(removeRoute, "removeRoute");
  function insertMatcher(e5) {
    const t6 = function(e6, t7) {
      let o5 = 0, n3 = t7.length;
      for (; o5 !== n3; ) {
        const r7 = o5 + n3 >> 1;
        comparePathParserScore(e6, t7[r7]) < 0 ? n3 = r7 : o5 = r7 + 1;
      }
      const r6 = function(e7) {
        let t8 = e7;
        for (; t8 = t8.parent; ) if (isMatchable(t8) && 0 === comparePathParserScore(e7, t8)) return t8;
        return;
      }(e6);
      r6 && (n3 = t7.lastIndexOf(r6, n3 - 1));
      return n3;
    }(e5, o4);
    o4.splice(t6, 0, e5), e5.record.name && !isAliasRecord(e5) && n2.set(e5.record.name, e5);
  }
  __name(insertMatcher, "insertMatcher");
  return t5 = mergeOptions({ strict: false, end: true, sensitive: false }, t5), e4.forEach((e5) => addRoute(e5)), { addRoute, resolve: /* @__PURE__ */ __name(function(e5, t6) {
    let r6, a5, s2, i3 = {};
    if ("name" in e5 && e5.name) {
      if (r6 = n2.get(e5.name), !r6) throw createRouterError(1, { location: e5 });
      s2 = r6.record.name, i3 = be(paramsFromLocation(t6.params, r6.keys.filter((e6) => !e6.optional).concat(r6.parent ? r6.parent.keys.filter((e6) => e6.optional) : []).map((e6) => e6.name)), e5.params && paramsFromLocation(e5.params, r6.keys.map((e6) => e6.name))), a5 = r6.stringify(i3);
    } else if (null != e5.path) a5 = e5.path, r6 = o4.find((e6) => e6.re.test(a5)), r6 && (i3 = r6.parse(a5), s2 = r6.record.name);
    else {
      if (r6 = t6.name ? n2.get(t6.name) : o4.find((e6) => e6.re.test(t6.path)), !r6) throw createRouterError(1, { location: e5, currentLocation: t6 });
      s2 = r6.record.name, i3 = be({}, t6.params, e5.params), a5 = r6.stringify(i3);
    }
    const c3 = [];
    let l3 = r6;
    for (; l3; ) c3.unshift(l3.record), l3 = l3.parent;
    return { name: s2, path: a5, params: i3, matched: c3, meta: mergeMetaFields(c3) };
  }, "resolve"), removeRoute, clearRoutes: /* @__PURE__ */ __name(function() {
    o4.length = 0, n2.clear();
  }, "clearRoutes"), getRoutes: /* @__PURE__ */ __name(function() {
    return o4;
  }, "getRoutes"), getRecordMatcher: /* @__PURE__ */ __name(function(e5) {
    return n2.get(e5);
  }, "getRecordMatcher") };
}
function paramsFromLocation(e4, t5) {
  const o4 = {};
  for (const n2 of t5) n2 in e4 && (o4[n2] = e4[n2]);
  return o4;
}
function normalizeRouteRecord(e4) {
  const t5 = { path: e4.path, redirect: e4.redirect, name: e4.name, meta: e4.meta || {}, aliasOf: e4.aliasOf, beforeEnter: e4.beforeEnter, props: normalizeRecordProps(e4), children: e4.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e4 ? e4.components || null : e4.component && { default: e4.component } };
  return Object.defineProperty(t5, "mods", { value: {} }), t5;
}
function normalizeRecordProps(e4) {
  const t5 = {}, o4 = e4.props || false;
  if ("component" in e4) t5.default = o4;
  else for (const n2 in e4.components) t5[n2] = "object" == typeof o4 ? o4[n2] : o4;
  return t5;
}
function isAliasRecord(e4) {
  for (; e4; ) {
    if (e4.record.aliasOf) return true;
    e4 = e4.parent;
  }
  return false;
}
function mergeMetaFields(e4) {
  return e4.reduce((e5, t5) => be(e5, t5.meta), {});
}
function mergeOptions(e4, t5) {
  const o4 = {};
  for (const n2 in e4) o4[n2] = n2 in t5 ? t5[n2] : e4[n2];
  return o4;
}
function isMatchable({ record: e4 }) {
  return !!(e4.name || e4.components && Object.keys(e4.components).length || e4.redirect);
}
function parseQuery(e4) {
  const t5 = {};
  if ("" === e4 || "?" === e4) return t5;
  const o4 = ("?" === e4[0] ? e4.slice(1) : e4).split("&");
  for (let e5 = 0; e5 < o4.length; ++e5) {
    const n2 = o4[e5].replace(Pe, " "), r6 = n2.indexOf("="), a5 = decode(r6 < 0 ? n2 : n2.slice(0, r6)), s2 = r6 < 0 ? null : decode(n2.slice(r6 + 1));
    if (a5 in t5) {
      let e6 = t5[a5];
      Re(e6) || (e6 = t5[a5] = [e6]), e6.push(s2);
    } else t5[a5] = s2;
  }
  return t5;
}
function stringifyQuery(e4) {
  let t5 = "";
  for (let o4 in e4) {
    const n2 = e4[o4];
    if (o4 = encodeQueryValue(o4).replace(_e, "%3D"), null == n2) {
      void 0 !== n2 && (t5 += (t5.length ? "&" : "") + o4);
      continue;
    }
    (Re(n2) ? n2.map((e5) => e5 && encodeQueryValue(e5)) : [n2 && encodeQueryValue(n2)]).forEach((e5) => {
      void 0 !== e5 && (t5 += (t5.length ? "&" : "") + o4, null != e5 && (t5 += "=" + e5));
    });
  }
  return t5;
}
function normalizeQuery(e4) {
  const t5 = {};
  for (const o4 in e4) {
    const n2 = e4[o4];
    void 0 !== n2 && (t5[o4] = Re(n2) ? n2.map((e5) => null == e5 ? null : "" + e5) : null == n2 ? n2 : "" + n2);
  }
  return t5;
}
function useCallbacks() {
  let e4 = [];
  return { add: /* @__PURE__ */ __name(function(t5) {
    return e4.push(t5), () => {
      const o4 = e4.indexOf(t5);
      o4 > -1 && e4.splice(o4, 1);
    };
  }, "add"), list: /* @__PURE__ */ __name(() => e4.slice(), "list"), reset: /* @__PURE__ */ __name(function() {
    e4 = [];
  }, "reset") };
}
function guardToPromiseFn(e4, t5, o4, n2, r6, a5 = (e5) => e5()) {
  const s2 = n2 && (n2.enterCallbacks[r6] = n2.enterCallbacks[r6] || []);
  return () => new Promise((i3, c3) => {
    const next = /* @__PURE__ */ __name((e5) => {
      var a6;
      false === e5 ? c3(createRouterError(4, { from: o4, to: t5 })) : e5 instanceof Error ? c3(e5) : "string" == typeof (a6 = e5) || a6 && "object" == typeof a6 ? c3(createRouterError(2, { from: t5, to: e5 })) : (s2 && n2.enterCallbacks[r6] === s2 && "function" == typeof e5 && s2.push(e5), i3());
    }, "next"), l3 = a5(() => e4.call(n2 && n2.instances[r6], t5, o4, next));
    let u2 = Promise.resolve(l3);
    e4.length < 3 && (u2 = u2.then(next)), u2.catch((e5) => c3(e5));
  });
}
function extractComponentsGuards(e4, t5, o4, n2, r6 = (e5) => e5()) {
  const a5 = [];
  for (const s2 of e4) for (const e5 in s2.components) {
    let i3 = s2.components[e5];
    if ("beforeRouteEnter" === t5 || s2.instances[e5]) if (isRouteComponent(i3)) {
      const c3 = (i3.__vccOpts || i3)[t5];
      c3 && a5.push(guardToPromiseFn(c3, o4, n2, s2, e5, r6));
    } else {
      let c3 = i3();
      a5.push(() => c3.then((a6) => {
        if (!a6) throw new Error(`Couldn't resolve component "${e5}" at "${s2.path}"`);
        const i4 = (c4 = a6).__esModule || "Module" === c4[Symbol.toStringTag] || c4.default && isRouteComponent(c4.default) ? a6.default : a6;
        var c4;
        s2.mods[e5] = a6, s2.components[e5] = i4;
        const l3 = (i4.__vccOpts || i4)[t5];
        return l3 && guardToPromiseFn(l3, o4, n2, s2, e5, r6)();
      }));
    }
  }
  return a5;
}
function useLink(e4) {
  const t5 = inject(Je), o4 = inject(Ye), n2 = computed(() => {
    const o5 = unref(e4.to);
    return t5.resolve(o5);
  }), r6 = computed(() => {
    const { matched: e5 } = n2.value, { length: t6 } = e5, r7 = e5[t6 - 1], a6 = o4.matched;
    if (!r7 || !a6.length) return -1;
    const s3 = a6.findIndex(isSameRouteRecord.bind(null, r7));
    if (s3 > -1) return s3;
    const i3 = getOriginalPath(e5[t6 - 2]);
    return t6 > 1 && getOriginalPath(r7) === i3 && a6[a6.length - 1].path !== i3 ? a6.findIndex(isSameRouteRecord.bind(null, e5[t6 - 2])) : s3;
  }), a5 = computed(() => r6.value > -1 && function(e5, t6) {
    for (const o5 in t6) {
      const n3 = t6[o5], r7 = e5[o5];
      if ("string" == typeof n3) {
        if (n3 !== r7) return false;
      } else if (!Re(r7) || r7.length !== n3.length || n3.some((e6, t7) => e6 !== r7[t7])) return false;
    }
    return true;
  }(o4.params, n2.value.params)), s2 = computed(() => r6.value > -1 && r6.value === o4.matched.length - 1 && isSameRouteLocationParams(o4.params, n2.value.params));
  return { route: n2, href: computed(() => n2.value.href), isActive: a5, isExactActive: s2, navigate: /* @__PURE__ */ __name(function(o5 = {}) {
    if (function(e5) {
      if (e5.metaKey || e5.altKey || e5.ctrlKey || e5.shiftKey) return;
      if (e5.defaultPrevented) return;
      if (void 0 !== e5.button && 0 !== e5.button) return;
      if (e5.currentTarget && e5.currentTarget.getAttribute) {
        const t6 = e5.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t6)) return;
      }
      e5.preventDefault && e5.preventDefault();
      return true;
    }(o5)) {
      const o6 = t5[unref(e4.replace) ? "replace" : "push"](unref(e4.to)).catch(noop);
      return e4.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => o6), o6;
    }
    return Promise.resolve();
  }, "navigate") };
}
function getOriginalPath(e4) {
  return e4 ? e4.aliasOf ? e4.aliasOf.path : e4.path : "";
}
function normalizeSlot$1(e4, t5) {
  if (!e4) return null;
  const o4 = e4(t5);
  return 1 === o4.length ? o4[0] : o4;
}
function createRouter(e4) {
  const t5 = createRouterMatcher(e4.routes, e4), n2 = e4.parseQuery || parseQuery, r6 = e4.stringifyQuery || stringifyQuery, a5 = e4.history, s2 = useCallbacks(), i3 = useCallbacks(), c3 = useCallbacks(), u2 = shallowRef(He);
  let p5 = He;
  ye && e4.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f5 = applyToParams.bind(null, (e5) => "" + e5), h3 = applyToParams.bind(null, encodeParam), m4 = applyToParams.bind(null, decode);
  function resolve2(e5, o4) {
    if (o4 = be({}, o4 || u2.value), "string" == typeof e5) {
      const r7 = parseURL(n2, e5, o4.path), s4 = t5.resolve({ path: r7.path }, o4), i5 = a5.createHref(r7.fullPath);
      return be(r7, s4, { params: m4(s4.params), hash: decode(r7.hash), redirectedFrom: void 0, href: i5 });
    }
    let s3;
    if (null != e5.path) s3 = be({}, e5, { path: parseURL(n2, e5.path, o4.path).path });
    else {
      const t6 = be({}, e5.params);
      for (const e6 in t6) null == t6[e6] && delete t6[e6];
      s3 = be({}, e5, { params: h3(t6) }), o4.params = h3(o4.params);
    }
    const i4 = t5.resolve(s3, o4), c4 = e5.hash || "";
    i4.params = f5(m4(i4.params));
    const l3 = function(e6, t6) {
      const o5 = t6.query ? e6(t6.query) : "";
      return t6.path + (o5 && "?") + o5 + (t6.hash || "");
    }(r6, be({}, e5, { hash: (d6 = c4, commonEncode(d6).replace(Oe, "{").replace($e, "}").replace(Ne, "^")), path: i4.path }));
    var d6;
    const p6 = a5.createHref(l3);
    return be({ fullPath: l3, hash: c4, query: r6 === stringifyQuery ? normalizeQuery(e5.query) : e5.query || {} }, i4, { redirectedFrom: void 0, href: p6 });
  }
  __name(resolve2, "resolve");
  function locationAsObject(e5) {
    return "string" == typeof e5 ? parseURL(n2, e5, u2.value.path) : be({}, e5);
  }
  __name(locationAsObject, "locationAsObject");
  function checkCanceledNavigation(e5, t6) {
    if (p5 !== e5) return createRouterError(8, { from: t6, to: e5 });
  }
  __name(checkCanceledNavigation, "checkCanceledNavigation");
  function push(e5) {
    return pushWithRedirect(e5);
  }
  __name(push, "push");
  function handleRedirectRecord(e5) {
    const t6 = e5.matched[e5.matched.length - 1];
    if (t6 && t6.redirect) {
      const { redirect: o4 } = t6;
      let n3 = "function" == typeof o4 ? o4(e5) : o4;
      return "string" == typeof n3 && (n3 = n3.includes("?") || n3.includes("#") ? n3 = locationAsObject(n3) : { path: n3 }, n3.params = {}), be({ query: e5.query, hash: e5.hash, params: null != n3.path ? {} : e5.params }, n3);
    }
  }
  __name(handleRedirectRecord, "handleRedirectRecord");
  function pushWithRedirect(e5, t6) {
    const o4 = p5 = resolve2(e5), n3 = u2.value, a6 = e5.state, s3 = e5.force, i4 = true === e5.replace, c4 = handleRedirectRecord(o4);
    if (c4) return pushWithRedirect(be(locationAsObject(c4), { state: "object" == typeof c4 ? be({}, a6, c4.state) : a6, force: s3, replace: i4 }), t6 || o4);
    const l3 = o4;
    let d6;
    return l3.redirectedFrom = t6, !s3 && function(e6, t7, o5) {
      const n4 = t7.matched.length - 1, r7 = o5.matched.length - 1;
      return n4 > -1 && n4 === r7 && isSameRouteRecord(t7.matched[n4], o5.matched[r7]) && isSameRouteLocationParams(t7.params, o5.params) && e6(t7.query) === e6(o5.query) && t7.hash === o5.hash;
    }(r6, n3, o4) && (d6 = createRouterError(16, { to: l3, from: n3 }), handleScroll(n3, n3, true, false)), (d6 ? Promise.resolve(d6) : navigate(l3, n3)).catch((e6) => isNavigationFailure(e6) ? isNavigationFailure(e6, 2) ? e6 : markAsReady(e6) : triggerError(e6, l3, n3)).then((e6) => {
      if (e6) {
        if (isNavigationFailure(e6, 2)) return pushWithRedirect(be({ replace: i4 }, locationAsObject(e6.to), { state: "object" == typeof e6.to ? be({}, a6, e6.to.state) : a6, force: s3 }), t6 || l3);
      } else e6 = finalizeNavigation(l3, n3, true, i4, a6);
      return triggerAfterEach(l3, n3, e6), e6;
    });
  }
  __name(pushWithRedirect, "pushWithRedirect");
  function checkCanceledNavigationAndReject(e5, t6) {
    const o4 = checkCanceledNavigation(e5, t6);
    return o4 ? Promise.reject(o4) : Promise.resolve();
  }
  __name(checkCanceledNavigationAndReject, "checkCanceledNavigationAndReject");
  function runWithContext(e5) {
    const t6 = k3.values().next().value;
    return t6 && "function" == typeof t6.runWithContext ? t6.runWithContext(e5) : e5();
  }
  __name(runWithContext, "runWithContext");
  function navigate(e5, t6) {
    let o4;
    const [n3, r7, a6] = function(e6, t7) {
      const o5 = [], n4 = [], r8 = [], a7 = Math.max(t7.matched.length, e6.matched.length);
      for (let s3 = 0; s3 < a7; s3++) {
        const a8 = t7.matched[s3];
        a8 && (e6.matched.find((e7) => isSameRouteRecord(e7, a8)) ? n4.push(a8) : o5.push(a8));
        const i4 = e6.matched[s3];
        i4 && (t7.matched.find((e7) => isSameRouteRecord(e7, i4)) || r8.push(i4));
      }
      return [o5, n4, r8];
    }(e5, t6);
    o4 = extractComponentsGuards(n3.reverse(), "beforeRouteLeave", e5, t6);
    for (const r8 of n3) r8.leaveGuards.forEach((n4) => {
      o4.push(guardToPromiseFn(n4, e5, t6));
    });
    const c4 = checkCanceledNavigationAndReject.bind(null, e5, t6);
    return o4.push(c4), runGuardQueue(o4).then(() => {
      o4 = [];
      for (const n4 of s2.list()) o4.push(guardToPromiseFn(n4, e5, t6));
      return o4.push(c4), runGuardQueue(o4);
    }).then(() => {
      o4 = extractComponentsGuards(r7, "beforeRouteUpdate", e5, t6);
      for (const n4 of r7) n4.updateGuards.forEach((n5) => {
        o4.push(guardToPromiseFn(n5, e5, t6));
      });
      return o4.push(c4), runGuardQueue(o4);
    }).then(() => {
      o4 = [];
      for (const n4 of a6) if (n4.beforeEnter) if (Re(n4.beforeEnter)) for (const r8 of n4.beforeEnter) o4.push(guardToPromiseFn(r8, e5, t6));
      else o4.push(guardToPromiseFn(n4.beforeEnter, e5, t6));
      return o4.push(c4), runGuardQueue(o4);
    }).then(() => (e5.matched.forEach((e6) => e6.enterCallbacks = {}), o4 = extractComponentsGuards(a6, "beforeRouteEnter", e5, t6, runWithContext), o4.push(c4), runGuardQueue(o4))).then(() => {
      o4 = [];
      for (const n4 of i3.list()) o4.push(guardToPromiseFn(n4, e5, t6));
      return o4.push(c4), runGuardQueue(o4);
    }).catch((e6) => isNavigationFailure(e6, 8) ? e6 : Promise.reject(e6));
  }
  __name(navigate, "navigate");
  function triggerAfterEach(e5, t6, o4) {
    c3.list().forEach((n3) => runWithContext(() => n3(e5, t6, o4)));
  }
  __name(triggerAfterEach, "triggerAfterEach");
  function finalizeNavigation(e5, t6, o4, n3, r7) {
    const s3 = checkCanceledNavigation(e5, t6);
    if (s3) return s3;
    const i4 = t6 === He, c4 = ye ? history.state : {};
    o4 && (n3 || i4 ? a5.replace(e5.fullPath, be({ scroll: i4 && c4 && c4.scroll }, r7)) : a5.push(e5.fullPath, r7)), u2.value = e5, handleScroll(e5, t6, o4, i4), markAsReady();
  }
  __name(finalizeNavigation, "finalizeNavigation");
  let g4;
  function setupListeners() {
    g4 || (g4 = a5.listen((e5, t6, o4) => {
      if (!w3.listening) return;
      const n3 = resolve2(e5), r7 = handleRedirectRecord(n3);
      if (r7) return void pushWithRedirect(be(r7, { replace: true, force: true }), n3).catch(noop);
      p5 = n3;
      const s3 = u2.value;
      var i4, c4;
      ye && (i4 = getScrollKey(s3.fullPath, o4.delta), c4 = { left: window.scrollX, top: window.scrollY }, ze.set(i4, c4)), navigate(n3, s3).catch((e6) => isNavigationFailure(e6, 12) ? e6 : isNavigationFailure(e6, 2) ? (pushWithRedirect(be(locationAsObject(e6.to), { force: true }), n3).then((e7) => {
        isNavigationFailure(e7, 20) && !o4.delta && o4.type === We.pop && a5.go(-1, false);
      }).catch(noop), Promise.reject()) : (o4.delta && a5.go(-o4.delta, false), triggerError(e6, n3, s3))).then((e6) => {
        (e6 = e6 || finalizeNavigation(n3, s3, false)) && (o4.delta && !isNavigationFailure(e6, 8) ? a5.go(-o4.delta, false) : o4.type === We.pop && isNavigationFailure(e6, 20) && a5.go(-1, false)), triggerAfterEach(n3, s3, e6);
      }).catch(noop);
    }));
  }
  __name(setupListeners, "setupListeners");
  let v3, b3 = useCallbacks(), R3 = useCallbacks();
  function triggerError(e5, t6, o4) {
    markAsReady(e5);
    const n3 = R3.list();
    return n3.length ? n3.forEach((n4) => n4(e5, t6, o4)) : console.error(e5), Promise.reject(e5);
  }
  __name(triggerError, "triggerError");
  function markAsReady(e5) {
    return v3 || (v3 = !e5, setupListeners(), b3.list().forEach(([t6, o4]) => e5 ? o4(e5) : t6()), b3.reset()), e5;
  }
  __name(markAsReady, "markAsReady");
  function handleScroll(t6, o4, n3, r7) {
    const { scrollBehavior: a6 } = e4;
    if (!ye || !a6) return Promise.resolve();
    const s3 = !n3 && function(e5) {
      const t7 = ze.get(e5);
      return ze.delete(e5), t7;
    }(getScrollKey(t6.fullPath, 0)) || (r7 || !n3) && history.state && history.state.scroll || null;
    return nextTick2().then(() => a6(t6, o4, s3)).then((e5) => e5 && scrollToPosition(e5)).catch((e5) => triggerError(e5, t6, o4));
  }
  __name(handleScroll, "handleScroll");
  const go = /* @__PURE__ */ __name((e5) => a5.go(e5), "go");
  let x4;
  const k3 = /* @__PURE__ */ new Set(), w3 = { currentRoute: u2, listening: true, addRoute: /* @__PURE__ */ __name(function(e5, o4) {
    let n3, r7;
    return isRouteName(e5) ? (n3 = t5.getRecordMatcher(e5), r7 = o4) : r7 = e5, t5.addRoute(r7, n3);
  }, "addRoute"), removeRoute: /* @__PURE__ */ __name(function(e5) {
    const o4 = t5.getRecordMatcher(e5);
    o4 && t5.removeRoute(o4);
  }, "removeRoute"), clearRoutes: t5.clearRoutes, hasRoute: /* @__PURE__ */ __name(function(e5) {
    return !!t5.getRecordMatcher(e5);
  }, "hasRoute"), getRoutes: /* @__PURE__ */ __name(function() {
    return t5.getRoutes().map((e5) => e5.record);
  }, "getRoutes"), resolve: resolve2, options: e4, push, replace: /* @__PURE__ */ __name(function(e5) {
    return push(be(locationAsObject(e5), { replace: true }));
  }, "replace"), go, back: /* @__PURE__ */ __name(() => go(-1), "back"), forward: /* @__PURE__ */ __name(() => go(1), "forward"), beforeEach: s2.add, beforeResolve: i3.add, afterEach: c3.add, onError: R3.add, isReady: /* @__PURE__ */ __name(function() {
    return v3 && u2.value !== He ? Promise.resolve() : new Promise((e5, t6) => {
      b3.add([e5, t6]);
    });
  }, "isReady"), install(e5) {
    e5.component("RouterLink", Ze), e5.component("RouterView", et), e5.config.globalProperties.$router = this, Object.defineProperty(e5.config.globalProperties, "$route", { enumerable: true, get: /* @__PURE__ */ __name(() => unref(u2), "get") }), ye && !x4 && u2.value === He && (x4 = true, push(a5.location).catch((e6) => {
    }));
    const t6 = {};
    for (const e6 in He) Object.defineProperty(t6, e6, { get: /* @__PURE__ */ __name(() => u2.value[e6], "get"), enumerable: true });
    e5.provide(Je, this), e5.provide(Ye, shallowReactive(t6)), e5.provide(Xe, u2);
    const n3 = e5.unmount;
    k3.add(e5), e5.unmount = function() {
      k3.delete(e5), k3.size < 1 && (p5 = He, g4 && g4(), g4 = null, u2.value = He, x4 = false, v3 = false), n3();
    };
  } };
  function runGuardQueue(e5) {
    return e5.reduce((e6, t6) => e6.then(() => runWithContext(t6)), Promise.resolve());
  }
  __name(runGuardQueue, "runGuardQueue");
  return w3;
}
function useRoute$1(e4) {
  return inject(Ye);
}
function resolveRouteObject(e4) {
  return withQuery(e4.path || "", e4.query || {}) + (e4.hash || "");
}
function generateRouteKey(e4) {
  const t5 = (null == e4 ? void 0 : e4.meta.key) ?? e4.path.replace(ct, "$1").replace(lt2, "$1").replace(ut, (t6) => {
    var o4;
    return (null == (o4 = e4.params[t6.slice(1)]) ? void 0 : o4.toString()) || "";
  });
  return "function" == typeof t5 ? t5(e4) : t5;
}
function _getHashElementScrollMarginTop(e4) {
  try {
    const t5 = (void 0).querySelector(e4);
    if (t5) return (Number.parseFloat(getComputedStyle(t5).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
  } catch {
  }
  return 0;
}
function normalizeSlot(e4, t5) {
  const o4 = e4(t5);
  return 1 === o4.length ? h(o4[0]) : h(lt, void 0, o4);
}
var B, z2, F, Q, U2, G, q, K, V, I, D2, J, Y, X, Z, ee, te, oe, Hookable, ne, re, ae, se, ie, ce, le, ue, de, pe, fe, he, H3Error, me, ge, useError, showError, createError, ve, ye, be, noop, Re, xe, ke, we, _e, Ce, Pe, Se, Ee, Ne, Ae, Oe, je, $e, Me, Te, He, We, Le, Be, ze, Fe, Qe, Ue, Ge, qe2, Ke, Ve, Ie, De, Je, Ye, Xe, Ze, getLinkClass, et, tt, ot, nt, generateRouteKey$1, rt, at2, useRouter, useRoute, st, navigateTo, it, ct, lt2, ut, dt, pt, ft, ht, mt, gt, vt, yt, bt, Rt, xt, kt, wt, _export_sfc, _t, Ct, Pt, St, Et, Nt, At, Ot, jt;
var init_server = __esm({
  "dist/server/chunks/build/server.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_renderer();
    B = /#/g;
    z2 = /&/g;
    F = /\//g;
    Q = /=/g;
    U2 = /\+/g;
    G = /%5e/gi;
    q = /%60/gi;
    K = /%7c/gi;
    V = /%20/gi;
    __name(encodeQueryValue$1, "encodeQueryValue$1");
    __name(encodeQueryKey$1, "encodeQueryKey$1");
    __name(decode$1, "decode$1");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery$1, "parseQuery$1");
    __name(stringifyQuery$1, "stringifyQuery$1");
    I = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    D2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    J = /^([/\\]\s*){2,}[^/\\]/;
    Y = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    X = /\/$|\/\?|\/#/;
    Z = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withQuery, "withQuery");
    __name(joinURL, "joinURL");
    ee = Symbol.for("ufo:protocolRelative");
    __name(parsePath, "parsePath");
    __name(flatHooks, "flatHooks");
    te = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    oe = void 0 !== console.createTask ? console.createTask : () => te;
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t5, o4 = {}) {
        if (!e4 || "function" != typeof t5) return () => {
        };
        const n2 = e4;
        let r6;
        for (; this._deprecatedHooks[e4]; ) r6 = this._deprecatedHooks[e4], e4 = r6.to;
        if (r6 && !o4.allowDeprecated) {
          let e5 = r6.message;
          e5 || (e5 = `${n2} hook has been deprecated` + (r6.to ? `, please use ${r6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t5.name) try {
          Object.defineProperty(t5, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t5), () => {
          t5 && (this.removeHook(e4, t5), t5 = void 0);
        };
      }
      hookOnce(e4, t5) {
        let o4, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof o4 && o4(), o4 = void 0, _function = void 0, t5(...e5)), "_function");
        return o4 = this.hook(e4, _function), o4;
      }
      removeHook(e4, t5) {
        if (this._hooks[e4]) {
          const o4 = this._hooks[e4].indexOf(t5);
          -1 !== o4 && this._hooks[e4].splice(o4, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t5) {
        this._deprecatedHooks[e4] = "string" == typeof t5 ? { to: t5 } : t5;
        const o4 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t6 of o4) this.hook(e4, t6);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t5 in e4) this.deprecateHook(t5, e4[t5]);
      }
      addHooks(e4) {
        const t5 = flatHooks(e4), o4 = Object.keys(t5).map((e5) => this.hook(e5, t5[e5]));
        return () => {
          for (const e5 of o4.splice(0, o4.length)) e5();
        };
      }
      removeHooks(e4) {
        const t5 = flatHooks(e4);
        for (const e5 in t5) this.removeHook(e5, t5[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(serialTaskCaller, e4, ...t5);
      }
      callHookParallel(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(parallelTaskCaller, e4, ...t5);
      }
      callHookWith(e4, t5, ...o4) {
        const n2 = this._before || this._after ? { name: t5, args: o4, context: {} } : void 0;
        this._before && callEachWith(this._before, n2);
        const r6 = e4(t5 in this._hooks ? [...this._hooks[t5]] : [], o4);
        return r6 instanceof Promise ? r6.finally(() => {
          this._after && n2 && callEachWith(this._after, n2);
        }) : (this._after && n2 && callEachWith(this._after, n2), r6);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t5 = this._before.indexOf(e4);
            -1 !== t5 && this._before.splice(t5, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t5 = this._after.indexOf(e4);
            -1 !== t5 && this._after.splice(t5, 1);
          }
        };
      }
    };
    ne = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== nr ? nr : {};
    re = "__unctx__";
    ae = ne[re] || (ne[re] = /* @__PURE__ */ function(e4 = {}) {
      const t5 = {};
      return { get: /* @__PURE__ */ __name((o4, n2 = {}) => (t5[o4] || (t5[o4] = function(e5 = {}) {
        let t6, o5 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t6 && t6 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let n3;
        if (e5.asyncContext) {
          const t7 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t7 ? n3 = new t7() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (n3) {
            const e6 = n3.getStore();
            if (void 0 !== e6) return e6;
          }
          return t6;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, n4) => {
          n4 || checkConflict(e6), t6 = e6, o5 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t6 = void 0, o5 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, r6) => {
          checkConflict(e6), t6 = e6;
          try {
            return n3 ? n3.run(e6, r6) : r6();
          } finally {
            o5 || (t6 = void 0);
          }
        }, "call"), async callAsync(e6, r6) {
          t6 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t6 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t6 === e6 ? onRestore : void 0, "onLeave");
          ie.add(onLeave);
          try {
            const a5 = n3 ? n3.run(e6, r6) : r6();
            return o5 || (t6 = void 0), await a5;
          } finally {
            ie.delete(onLeave);
          }
        } };
      }({ ...e4, ...n2 })), t5[o4]), "get") };
    }());
    se = "__unctx_async_handlers__";
    ie = ne[se] || (ne[se] = /* @__PURE__ */ new Set());
    __name(executeAsync, "executeAsync");
    ce = { componentName: "NuxtLink" };
    le = { value: null, errorValue: null, deep: true };
    ue = "nuxt-app";
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    de = "__nuxt_plugin";
    __name(createNuxtApp, "createNuxtApp");
    __name(registerPluginHooks, "registerPluginHooks");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    __name(callWithNuxt, "callWithNuxt");
    __name(tryUseNuxtApp, "tryUseNuxtApp");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    pe = 0;
    fe = 1;
    he = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t5 = {}) {
        super(e4, t5), t5.cause && !this.cause && (this.cause = t5.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError$1, "createError$1");
    me = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    ge = "__nuxt_error";
    useError = /* @__PURE__ */ __name(() => toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e4) => {
      const t5 = createError(e4);
      try {
        useNuxtApp();
        const e5 = useError();
        0, e5.value || (e5.value = t5);
      } catch {
        throw t5;
      }
      return t5;
    }, "showError");
    createError = /* @__PURE__ */ __name((e4) => {
      const t5 = createError$1(e4);
      return Object.defineProperty(t5, ge, { value: true, configurable: false, writable: false }), t5;
    }, "createError");
    ve = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e4) {
      const t5 = e4.ssrContext.head;
      e4.vueApp.use(t5);
    } });
    ye = "undefined" != typeof document;
    __name(isRouteComponent, "isRouteComponent");
    be = Object.assign;
    __name(applyToParams, "applyToParams");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    Re = Array.isArray;
    xe = /#/g;
    ke = /&/g;
    we = /\//g;
    _e = /=/g;
    Ce = /\?/g;
    Pe = /\+/g;
    Se = /%5B/g;
    Ee = /%5D/g;
    Ne = /%5E/g;
    Ae = /%60/g;
    Oe = /%7B/g;
    je = /%7C/g;
    $e = /%7D/g;
    Me = /%20/g;
    __name(commonEncode, "commonEncode");
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeParam, "encodeParam");
    __name(decode, "decode");
    Te = /\/$/;
    __name(parseURL, "parseURL");
    __name(isSameRouteRecord, "isSameRouteRecord");
    __name(isSameRouteLocationParams, "isSameRouteLocationParams");
    __name(isSameRouteLocationParamsValue, "isSameRouteLocationParamsValue");
    __name(isEquivalentArray, "isEquivalentArray");
    He = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    !function(e4) {
      e4.pop = "pop", e4.push = "push";
    }(We || (We = {})), function(e4) {
      e4.back = "back", e4.forward = "forward", e4.unknown = "";
    }(Le || (Le = {}));
    __name(normalizeBase, "normalizeBase");
    Be = /^[^#]+#/;
    __name(createHref, "createHref");
    __name(scrollToPosition, "scrollToPosition");
    __name(getScrollKey, "getScrollKey");
    ze = /* @__PURE__ */ new Map();
    __name(createMemoryHistory, "createMemoryHistory");
    __name(isRouteName, "isRouteName");
    Fe = Symbol("");
    __name(createRouterError, "createRouterError");
    __name(isNavigationFailure, "isNavigationFailure");
    !function(e4) {
      e4[e4.aborted = 4] = "aborted", e4[e4.cancelled = 8] = "cancelled", e4[e4.duplicated = 16] = "duplicated";
    }(Qe || (Qe = {}));
    Ue = "[^/]+?";
    Ge = { sensitive: false, strict: false, start: true, end: true };
    qe2 = /[.+*?^${}()[\]/\\]/g;
    __name(compareScoreArray, "compareScoreArray");
    __name(comparePathParserScore, "comparePathParserScore");
    __name(isLastScoreNegative, "isLastScoreNegative");
    Ke = { type: 0, value: "" };
    Ve = /[a-zA-Z0-9_]/;
    __name(createRouteRecordMatcher, "createRouteRecordMatcher");
    __name(createRouterMatcher, "createRouterMatcher");
    __name(paramsFromLocation, "paramsFromLocation");
    __name(normalizeRouteRecord, "normalizeRouteRecord");
    __name(normalizeRecordProps, "normalizeRecordProps");
    __name(isAliasRecord, "isAliasRecord");
    __name(mergeMetaFields, "mergeMetaFields");
    __name(mergeOptions, "mergeOptions");
    __name(isMatchable, "isMatchable");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    __name(normalizeQuery, "normalizeQuery");
    Ie = Symbol("");
    De = Symbol("");
    Je = Symbol("");
    Ye = Symbol("");
    Xe = Symbol("");
    __name(useCallbacks, "useCallbacks");
    __name(guardToPromiseFn, "guardToPromiseFn");
    __name(extractComponentsGuards, "extractComponentsGuards");
    __name(useLink, "useLink");
    Ze = defineComponent({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink, setup(e4, { slots: t5 }) {
      const o4 = reactive(useLink(e4)), { options: r6 } = inject(Je), a5 = computed(() => ({ [getLinkClass(e4.activeClass, r6.linkActiveClass, "router-link-active")]: o4.isActive, [getLinkClass(e4.exactActiveClass, r6.linkExactActiveClass, "router-link-exact-active")]: o4.isExactActive }));
      return () => {
        const n2 = t5.default && (1 === (r7 = t5.default(o4)).length ? r7[0] : r7);
        var r7;
        return e4.custom ? n2 : h("a", { "aria-current": o4.isExactActive ? e4.ariaCurrentValue : null, href: o4.href, onClick: o4.navigate, class: a5.value }, n2);
      };
    } });
    __name(getOriginalPath, "getOriginalPath");
    getLinkClass = /* @__PURE__ */ __name((e4, t5, o4) => null != e4 ? e4 : null != t5 ? t5 : o4, "getLinkClass");
    __name(normalizeSlot$1, "normalizeSlot$1");
    et = defineComponent({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e4, { attrs: t5, slots: o4 }) {
      const n2 = inject(Xe), r6 = computed(() => e4.route || n2.value), a5 = inject(De, 0), s2 = computed(() => {
        let e5 = unref(a5);
        const { matched: t6 } = r6.value;
        let o5;
        for (; (o5 = t6[e5]) && !o5.components; ) e5++;
        return e5;
      }), i3 = computed(() => r6.value.matched[s2.value]);
      provide(De, computed(() => s2.value + 1)), provide(Ie, i3), provide(Xe, r6);
      const c3 = ref();
      return watch(() => [c3.value, i3.value, e4.name], ([e5, t6, o5], [n3, r7, a6]) => {
        t6 && (t6.instances[o5] = e5, r7 && r7 !== t6 && e5 && e5 === n3 && (t6.leaveGuards.size || (t6.leaveGuards = r7.leaveGuards), t6.updateGuards.size || (t6.updateGuards = r7.updateGuards))), !e5 || !t6 || r7 && isSameRouteRecord(t6, r7) && n3 || (t6.enterCallbacks[o5] || []).forEach((t7) => t7(e5));
      }, { flush: "post" }), () => {
        const n3 = r6.value, a6 = e4.name, s3 = i3.value, l3 = s3 && s3.components[a6];
        if (!l3) return normalizeSlot$1(o4.default, { Component: l3, route: n3 });
        const u2 = s3.props[a6], d6 = u2 ? true === u2 ? n3.params : "function" == typeof u2 ? u2(n3) : u2 : null, p5 = h(l3, be({}, d6, t5, { onVnodeUnmounted: /* @__PURE__ */ __name((e5) => {
          e5.component.isUnmounted && (s3.instances[a6] = null);
        }, "onVnodeUnmounted"), ref: c3 }));
        return normalizeSlot$1(o4.default, { Component: p5, route: n3 }) || p5;
      };
    } });
    __name(createRouter, "createRouter");
    __name(useRoute$1, "useRoute$1");
    tt = /(:\w+)\([^)]+\)/g;
    ot = /(:\w+)[?+*]/g;
    nt = /:\w+/g;
    generateRouteKey$1 = /* @__PURE__ */ __name((e4, t5) => {
      const o4 = e4.route.matched.find((t6) => {
        var o5;
        return (null == (o5 = t6.components) ? void 0 : o5.default) === e4.Component.type;
      }), n2 = t5 ?? (null == o4 ? void 0 : o4.meta.key) ?? (o4 && (r6 = e4.route, o4.path.replace(tt, "$1").replace(ot, "$1").replace(nt, (e5) => {
        var t6;
        return (null == (t6 = r6.params[e5.slice(1)]) ? void 0 : t6.toString()) || "";
      })));
      var r6;
      return "function" == typeof n2 ? n2(e4.route) : n2;
    }, "generateRouteKey$1");
    rt = Symbol("layout-meta");
    at2 = Symbol("route");
    useRouter = /* @__PURE__ */ __name(() => {
      var e4;
      return null == (e4 = useNuxtApp()) ? void 0 : e4.$router;
    }, "useRouter");
    useRoute = /* @__PURE__ */ __name(() => hasInjectionContext() ? inject(at2, useNuxtApp()._route) : useNuxtApp()._route, "useRoute");
    st = /"/g;
    navigateTo = /* @__PURE__ */ __name((e4, t5) => {
      e4 || (e4 = "/");
      const o4 = "string" == typeof e4 ? e4 : "path" in e4 ? resolveRouteObject(e4) : useRouter().resolve(e4).href, n2 = hasProtocol(o4, { acceptRelative: true }), r6 = (null == t5 ? void 0 : t5.external) || n2;
      if (r6) {
        if (!(null == t5 ? void 0 : t5.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e5 } = new URL(o4, "http://localhost");
        if (e5 && function(e6) {
          return !!e6 && Y.test(e6);
        }(e5)) throw new Error(`Cannot navigate to a URL with '${e5}' protocol.`);
      }
      const a5 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware) return true;
        } catch {
          return false;
        }
        return false;
      })(), s2 = useRouter(), i3 = useNuxtApp();
      if (i3.ssrContext) {
        const c3 = "string" == typeof e4 || r6 ? o4 : s2.resolve(e4).fullPath || "/", l3 = r6 ? o4 : joinURL(useRuntimeConfig().app.baseURL, c3), redirect = /* @__PURE__ */ __name(async function(e5) {
          await i3.callHook("app:redirected");
          const o5 = l3.replace(st, "%22"), r7 = function(e6, t6 = false) {
            const o6 = new URL(e6, "http://localhost");
            if (!t6) return o6.pathname + o6.search + o6.hash;
            if (e6.startsWith("//")) return o6.toString().replace(o6.protocol, "");
            return o6.toString();
          }(l3, n2);
          return i3.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == t5 ? void 0 : t5.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${o5}"></head></html>`, headers: { location: r7 } }, e5;
        }, "redirect");
        return !r6 && a5 ? (s2.afterEach((e5) => e5.fullPath === c3 ? redirect(false) : void 0), e4) : redirect(!a5 && void 0);
      }
      return r6 ? (i3._scope.stop(), (null == t5 ? void 0 : t5.replace) ? (void 0).replace(o4) : (void 0).href = o4, a5 ? !!i3.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == t5 ? void 0 : t5.replace) ? s2.replace(e4) : s2.push(e4);
    }, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    it = [{ name: "index", path: "/", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_vue(), index_vue_exports)), "component") }, { name: "store-catalog", path: "/store/catalog", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_vue2(), index_vue2_exports)), "component") }, { name: "store-product-id", path: "/store/product/:id()", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_vue(), id_vue_exports)), "component") }];
    ct = /(:\w+)\([^)]+\)/g;
    lt2 = /(:\w+)[?+*]/g;
    ut = /:\w+/g;
    __name(generateRouteKey, "generateRouteKey");
    __name(_getHashElementScrollMarginTop, "_getHashElementScrollMarginTop");
    dt = { hashMode: false, scrollBehaviorType: "auto", ...{ scrollBehavior(e4, t5, o4) {
      var n2;
      const r6 = useNuxtApp(), a5 = (null == (n2 = useRouter().options) ? void 0 : n2.scrollBehaviorType) ?? "auto";
      let s2 = o4 || void 0;
      const i3 = "function" == typeof e4.meta.scrollToTop ? e4.meta.scrollToTop(e4, t5) : e4.meta.scrollToTop;
      if (!s2 && t5 && e4 && false !== i3 && function(e5, t6) {
        return e5 !== t6 && t6 !== He && (generateRouteKey(e5) !== generateRouteKey(t6) || !e5.matched.every((e6, o5) => {
          var n3, r7;
          return e6.components && e6.components.default === (null == (r7 = null == (n3 = t6.matched[o5]) ? void 0 : n3.components) ? void 0 : r7.default);
        }));
      }(e4, t5) && (s2 = { left: 0, top: 0 }), e4.path === t5.path) return t5.hash && !e4.hash ? { left: 0, top: 0 } : !!e4.hash && { el: e4.hash, top: _getHashElementScrollMarginTop(e4.hash), behavior: a5 };
      const hasTransition = /* @__PURE__ */ __name((e5) => !!e5.meta.pageTransition, "hasTransition"), c3 = hasTransition(t5) && hasTransition(e4) ? "page:transition:finish" : "page:finish";
      return new Promise((t6) => {
        r6.hooks.hookOnce(c3, async () => {
          await new Promise((e5) => setTimeout(e5, 0)), e4.hash && (s2 = { el: e4.hash, top: _getHashElementScrollMarginTop(e4.hash), behavior: a5 }), t6(s2);
        });
      });
    } } };
    pt = [async (e4) => {
      var t5;
      let o4, n2;
      if (!(null == (t5 = e4.meta) ? void 0 : t5.validate)) return;
      const r6 = useNuxtApp(), a5 = useRouter(), s2 = ([o4, n2] = executeAsync(() => Promise.resolve(e4.meta.validate(e4))), o4 = await o4, n2(), o4);
      if (true === s2) return;
      const i3 = createError({ statusCode: s2 && s2.statusCode || 404, statusMessage: s2 && s2.statusMessage || `Page Not Found: ${e4.fullPath}`, data: { path: e4.fullPath } }), c3 = a5.beforeResolve((t6) => {
        if (c3(), t6 === e4) {
          const e5 = a5.afterEach(async () => {
            e5(), await r6.runWithContext(() => showError(i3));
          });
          return false;
        }
      });
    }, async (e4) => {
    }];
    ft = {};
    ht = defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", async setup(e4) {
      var r6, a5, s2, i3;
      let c3, u2, d6 = useRuntimeConfig().app.baseURL;
      const p5 = (null == (a5 = (r6 = dt).history) ? void 0 : a5.call(r6, d6)) ?? createMemoryHistory(d6), f5 = dt.routes ? ([c3, u2] = executeAsync(() => dt.routes(it)), c3 = await c3, u2(), c3 ?? it) : it;
      let h3;
      const m4 = createRouter({ ...dt, scrollBehavior: /* @__PURE__ */ __name((e5, t5, o4) => {
        if (t5 !== He) {
          if (dt.scrollBehavior) {
            if (m4.options.scrollBehavior = dt.scrollBehavior, "scrollRestoration" in (void 0).history) {
              const e6 = m4.beforeEach(() => {
                e6(), (void 0).history.scrollRestoration = "manual";
              });
            }
            return dt.scrollBehavior(e5, He, h3 || o4);
          }
        } else h3 = o4;
      }, "scrollBehavior"), history: p5, routes: f5 });
      dt.routes && dt.routes, e4.vueApp.use(m4);
      const g4 = shallowRef(m4.currentRoute.value);
      m4.afterEach((e5, t5) => {
        g4.value = t5;
      }), Object.defineProperty(e4.vueApp.config.globalProperties, "previousRoute", { get: /* @__PURE__ */ __name(() => g4.value, "get") });
      const v3 = e4.ssrContext.url, y3 = shallowRef(m4.currentRoute.value), syncCurrentRoute = /* @__PURE__ */ __name(() => {
        y3.value = m4.currentRoute.value;
      }, "syncCurrentRoute");
      e4.hook("page:finish", syncCurrentRoute), m4.afterEach((e5, t5) => {
        var o4, n2, r7, a6;
        (null == (n2 = null == (o4 = e5.matched[0]) ? void 0 : o4.components) ? void 0 : n2.default) === (null == (a6 = null == (r7 = t5.matched[0]) ? void 0 : r7.components) ? void 0 : a6.default) && syncCurrentRoute();
      });
      const R3 = {};
      for (const e5 in y3.value) Object.defineProperty(R3, e5, { get: /* @__PURE__ */ __name(() => y3.value[e5], "get"), enumerable: true });
      e4._route = shallowReactive(R3), e4._middleware || (e4._middleware = { global: [], named: {} }), useError(), (null == (s2 = e4.ssrContext) ? void 0 : s2.islandContext) || m4.afterEach(async (t5, o4, n2) => {
        delete e4._processingMiddleware, n2 && await e4.callHook("page:loading:end"), 4 !== (null == n2 ? void 0 : n2.type) && t5.redirectedFrom && t5.fullPath !== v3 && await e4.runWithContext(() => navigateTo(t5.fullPath || "/"));
      });
      try {
        [c3, u2] = executeAsync(() => m4.push(v3)), await c3, u2(), [c3, u2] = executeAsync(() => m4.isReady()), await c3, u2();
      } catch (t5) {
        [c3, u2] = executeAsync(() => e4.runWithContext(() => showError(t5))), await c3, u2();
      }
      const x4 = m4.currentRoute.value;
      if (syncCurrentRoute(), null == (i3 = e4.ssrContext) ? void 0 : i3.islandContext) return { provide: { router: m4 } };
      const k3 = e4.payload.state._layout;
      return m4.beforeEach(async (o4, r7) => {
        var a6, s3, i4, c4;
        if (await e4.callHook("page:loading:start"), o4.meta = reactive(o4.meta), e4.isHydrating && k3 && !isReadonly(o4.meta.layout) && (o4.meta.layout = k3), e4._processingMiddleware = true, !(null == (a6 = e4.ssrContext) ? void 0 : a6.islandContext)) {
          const n2 = /* @__PURE__ */ new Set([...pt, ...e4._middleware.global]);
          for (const e5 of o4.matched) {
            const t5 = e5.meta.middleware;
            if (t5) for (const e6 of (c4 = t5, Array.isArray(c4) ? c4 : [c4])) n2.add(e6);
          }
          {
            const r8 = await e4.runWithContext(() => async function(e5) {
              const o5 = "string" == typeof e5 ? e5 : e5.path;
              {
                useNuxtApp().ssrContext._preloadManifest = true;
                const e6 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                return Lr({}, ...e6.matchAll(o5).reverse());
              }
            }({ path: o4.path }));
            if (r8.appMiddleware) for (const e5 in r8.appMiddleware) r8.appMiddleware[e5] ? n2.add(e5) : n2.delete(e5);
          }
          for (const t5 of n2) {
            const n3 = "string" == typeof t5 ? e4._middleware.named[t5] || await (null == (i4 = (s3 = ft)[t5]) ? void 0 : i4.call(s3).then((e5) => e5.default || e5)) : t5;
            if (!n3) throw new Error(`Unknown route middleware: '${t5}'.`);
            const a7 = await e4.runWithContext(() => n3(o4, r7));
            if (false === a7 || a7 instanceof Error) {
              const t6 = a7 || createError$1({ statusCode: 404, statusMessage: `Page Not Found: ${v3}` });
              return await e4.runWithContext(() => showError(t6)), false;
            }
            if (true !== a7 && (a7 || false === a7)) return a7;
          }
        }
      }), m4.onError(async () => {
        delete e4._processingMiddleware, await e4.callHook("page:loading:end");
      }), m4.afterEach(async (t5, o4) => {
        0 === t5.matched.length && await e4.runWithContext(() => showError(createError$1({ statusCode: 404, fatal: false, statusMessage: `Page not found: ${t5.fullPath}`, data: { path: t5.fullPath } })));
      }), e4.hooks.hookOnce("app:created", async () => {
        try {
          "name" in x4 && (x4.name = void 0), await m4.replace({ ...x4, force: true }), m4.options.scrollBehavior = dt.scrollBehavior;
        } catch (t5) {
          await e4.runWithContext(() => showError(t5));
        }
      }), { provide: { router: m4 } };
    } });
    mt = [["NuxtError", (e4) => {
      return !!(t5 = e4) && "object" == typeof t5 && ge in t5 && e4.toJSON();
      var t5;
    }], ["EmptyShallowRef", (e4) => isRef(e4) && isShallow(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["EmptyRef", (e4) => isRef(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["ShallowRef", (e4) => isRef(e4) && isShallow(e4) && e4.value], ["ShallowReactive", (e4) => isReactive(e4) && isShallow(e4) && toRaw(e4)], ["Ref", (e4) => isRef(e4) && e4.value], ["Reactive", (e4) => isReactive(e4) && toRaw(e4)]];
    gt = [ve, ht, defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [o4, n2] of mt) e4 = o4, t5 = n2, useNuxtApp().ssrContext._payloadReducers[e4] = t5;
      var e4, t5;
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    vt = { default: defineAsyncComponent(() => Promise.resolve().then(() => (init_default_vue(), default_vue_exports)).then((e4) => e4.default || e4)) };
    yt = defineComponent({ name: "LayoutLoader", inheritAttrs: false, props: { name: String, layoutProps: Object }, setup: /* @__PURE__ */ __name((e4, t5) => () => h(vt[e4.name], e4.layoutProps, t5.slots), "setup") });
    bt = { name: { type: [String, Boolean, Object], default: null }, fallback: { type: [String, Object], default: null } };
    Rt = defineComponent({ name: "NuxtLayout", inheritAttrs: false, props: bt, setup(e4, t5) {
      const o4 = useNuxtApp(), n2 = inject(at2), r6 = n2 === useRoute() ? useRoute$1() : n2, a5 = computed(() => {
        let t6 = unref(e4.name) ?? r6.meta.layout ?? "default";
        return t6 && !(t6 in vt) && e4.fallback && (t6 = unref(e4.fallback)), t6;
      }), s2 = ref();
      t5.expose({ layoutRef: s2 });
      const i3 = o4.deferHydration();
      return () => {
        a5.value && a5.value;
        const o5 = r6.meta.layoutTransition ?? false;
        return (n3 = { default: /* @__PURE__ */ __name(() => h(at, { suspensible: true, onResolve: /* @__PURE__ */ __name(() => {
          nextTick2(i3);
        }, "onResolve") }, { default: /* @__PURE__ */ __name(() => h(xt, { layoutProps: mergeProps(t5.attrs, { ref: s2 }), key: a5.value || void 0, name: a5.value, shouldProvide: !e4.name, hasTransition: !!o5 }, t5.slots), "default") }), "default") }, { default: /* @__PURE__ */ __name(() => {
          var e5;
          return null == (e5 = n3.default) ? void 0 : e5.call(n3);
        }, "default") }).default();
        var n3;
      };
    } });
    xt = defineComponent({ name: "NuxtLayoutProvider", inheritAttrs: false, props: { name: { type: [String, Boolean] }, layoutProps: { type: Object }, hasTransition: { type: Boolean }, shouldProvide: { type: Boolean } }, setup(e4, t5) {
      const o4 = e4.name;
      return e4.shouldProvide && provide(rt, { isCurrent: /* @__PURE__ */ __name((e5) => o4 === (e5.meta.layout ?? "default"), "isCurrent") }), () => {
        var n2, r6;
        return !o4 || "string" == typeof o4 && !(o4 in vt) ? null == (r6 = (n2 = t5.slots).default) ? void 0 : r6.call(n2) : h(yt, { key: o4, layoutProps: e4.layoutProps, name: o4 }, t5.slots);
      };
    } });
    kt = ((e4 = "RouteProvider") => defineComponent({ name: e4, props: { vnode: { type: Object, required: true }, route: { type: Object, required: true }, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean }, setup(e5) {
      const t5 = e5.renderKey, n2 = e5.route, r6 = {};
      for (const o4 in e5.route) Object.defineProperty(r6, o4, { get: /* @__PURE__ */ __name(() => t5 === e5.renderKey ? e5.route[o4] : n2[o4], "get"), enumerable: true });
      return provide(at2, shallowReactive(r6)), () => h(e5.vnode, { ref: e5.vnodeRef });
    } }))();
    wt = defineComponent({ name: "NuxtPage", inheritAttrs: false, props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } }, setup(e4, { attrs: t5, slots: o4, expose: n2 }) {
      const r6 = useNuxtApp(), a5 = ref(), s2 = inject(at2, null);
      let i3, c3;
      n2({ pageRef: a5 }), inject(rt, null);
      const l3 = r6.deferHydration();
      return e4.pageKey && watch(() => e4.pageKey, (e5, t6) => {
        e5 !== t6 && r6.callHook("page:loading:start");
      }), () => h(et, { name: e4.name, route: e4.route, ...t5 }, { default: /* @__PURE__ */ __name((t6) => {
        if (!t6.Component) return void l3();
        const n3 = generateRouteKey$1(t6, e4.pageKey);
        return r6.isHydrating || function(e5, t7, o5) {
          if (!e5) return false;
          return t7.matched.findIndex((e6) => {
            var t8;
            return (null == (t8 = e6.components) ? void 0 : t8.default) === (null == o5 ? void 0 : o5.type);
          }) < t7.matched.length - 1;
        }(s2, t6.route, t6.Component) || i3 !== n3 || r6.callHook("page:loading:end"), i3 = n3, c3 = h(at, { suspensible: true }, { default: /* @__PURE__ */ __name(() => h(kt, { key: n3 || void 0, vnode: o4.default ? normalizeSlot(o4.default, t6) : t6.Component, route: t6.route, renderKey: n3 || void 0, vnodeRef: a5 }), "default") }), c3;
      }, "default") });
    } });
    __name(normalizeSlot, "normalizeSlot");
    _export_sfc = /* @__PURE__ */ __name((e4, t5) => {
      const o4 = e4.__vccOpts || e4;
      for (const [e5, n2] of t5) o4[e5] = n2;
      return o4;
    }, "_export_sfc");
    _t = {};
    Ct = _t.setup;
    _t.setup = (e4, t5) => {
      const o4 = useSSRContext();
      return (o4.modules || (o4.modules = /* @__PURE__ */ new Set())).add("app.vue"), Ct ? Ct(e4, t5) : void 0;
    };
    Pt = _export_sfc(_t, [["ssrRender", function(e4, t5, o4, n2) {
      const r6 = Rt, a5 = wt;
      t5(`<div${ssrRenderAttrs(n2)}>`), t5(ssrRenderComponent(r6, null, { default: withCtx((e5, t6, o5, n3) => {
        if (!t6) return [createVNode(a5)];
        t6(ssrRenderComponent(a5, null, null, o5, n3));
      }), _: 1 }, o4)), t5("</div>");
    }]]);
    St = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e4) {
      const t5 = e4.error;
      t5.stack && t5.stack.split("\n").splice(1).map((e5) => ({ text: e5.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e5.includes("node_modules") && !e5.includes(".cache") || e5.includes("internal") || e5.includes("new Promise") })).map((e5) => `<span class="stack${e5.internal ? " internal" : ""}">${e5.text}</span>`).join("\n");
      const o4 = Number(t5.statusCode || 500), n2 = 404 === o4, r6 = t5.statusMessage ?? (n2 ? "Page Not Found" : "Internal Server Error"), a5 = t5.message || t5.toString(), s2 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_vue(), error_404_vue_exports))), i3 = defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_vue(), error_500_vue_exports))), c3 = n2 ? s2 : i3;
      return (e5, t6, n3, s3) => {
        t6(ssrRenderComponent(unref(c3), mergeProps({ statusCode: unref(o4), statusMessage: unref(r6), description: unref(a5), stack: unref(void 0) }, s3), null, n3));
      };
    } };
    Et = St.setup;
    St.setup = (e4, t5) => {
      const o4 = useSSRContext();
      return (o4.modules || (o4.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), Et ? Et(e4, t5) : void 0;
    };
    Nt = { __name: "nuxt-root", __ssrInlineRender: true, setup(e4) {
      const IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer"), t5 = useNuxtApp();
      t5.deferHydration(), t5.ssrContext.url;
      const o4 = false;
      provide(at2, useRoute()), t5.hooks.callHookWith((e5) => e5.map((e6) => e6()), "vue:setup");
      const n2 = useError(), r6 = n2.value && !t5.ssrContext.error;
      onErrorCaptured((e5, o5, n3) => {
        t5.hooks.callHook("vue:error", e5, o5, n3).catch((e6) => console.error("[nuxt] Error in `vue:error` hook", e6));
        {
          const o6 = t5.runWithContext(() => showError(e5));
          return qe(() => o6), false;
        }
      });
      const a5 = t5.ssrContext.islandContext;
      return (e5, t6, s2, i3) => {
        ssrRenderSuspense(t6, { default: /* @__PURE__ */ __name(() => {
          unref(r6) ? t6("<div></div>") : unref(n2) ? t6(ssrRenderComponent(unref(St), { error: unref(n2) }, null, s2)) : unref(a5) ? t6(ssrRenderComponent(unref(IslandRenderer), { context: unref(a5) }, null, s2)) : unref(o4) ? renderVNode(t6, createVNode(resolveDynamicComponent(unref(o4)), null, null), s2) : t6(ssrRenderComponent(unref(Pt), null, null, s2));
        }, "default") });
      };
    } };
    At = Nt.setup;
    Nt.setup = (e4, t5) => {
      const o4 = useSSRContext();
      return (o4.modules || (o4.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.16.0_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.3.1_encoding_fspmpvfwrugaqb7alz2idaatfu/node_modules/nuxt/dist/app/components/nuxt-root.vue"), At ? At(e4, t5) : void 0;
    }, Ot = /* @__PURE__ */ __name(async function(e4) {
      var t5;
      const o4 = createApp(Nt), n2 = createNuxtApp({ vueApp: o4, ssrContext: e4 });
      try {
        await async function(e5, t6) {
          var o5, n3, r6, a5;
          const s2 = [], i3 = [], c3 = [], l3 = [];
          let u2 = 0;
          async function executePlugin(o6) {
            var n4;
            const r7 = (null == (n4 = o6.dependsOn) ? void 0 : n4.filter((e6) => t6.some((t7) => t7._name === e6) && !s2.includes(e6))) ?? [];
            if (r7.length > 0) i3.push([new Set(r7), o6]);
            else {
              const t7 = async function(e6, t8) {
                if ("function" == typeof t8) {
                  const { provide: o7 } = await e6.runWithContext(() => t8(e6)) || {};
                  if (o7 && "object" == typeof o7) for (const t9 in o7) e6.provide(t9, o7[t9]);
                }
              }(e5, o6).then(async () => {
                o6._name && (s2.push(o6._name), await Promise.all(i3.map(async ([e6, t8]) => {
                  e6.has(o6._name) && (e6.delete(o6._name), 0 === e6.size && (u2++, await executePlugin(t8)));
                })));
              });
              o6.parallel ? c3.push(t7.catch((e6) => l3.push(e6))) : await t7;
            }
          }
          __name(executePlugin, "executePlugin");
          for (const r7 of t6) (null == (o5 = e5.ssrContext) ? void 0 : o5.islandContext) && false === (null == (n3 = r7.env) ? void 0 : n3.islands) || registerPluginHooks(e5, r7);
          for (const o6 of t6) (null == (r6 = e5.ssrContext) ? void 0 : r6.islandContext) && false === (null == (a5 = o6.env) ? void 0 : a5.islands) || await executePlugin(o6);
          if (await Promise.all(c3), u2) for (let e6 = 0; e6 < u2; e6++) await Promise.all(c3);
          if (l3.length) throw l3[0];
        }(n2, gt), await n2.hooks.callHook("app:created", o4);
      } catch (e5) {
        await n2.hooks.callHook("app:error", e5), (t5 = n2.payload).error || (t5.error = createError(e5));
      }
      if (null == e4 ? void 0 : e4._renderResponse) throw new Error("skipping render");
      return o4;
    }, "Ot");
    jt = Object.freeze(Object.defineProperty({ __proto__: null, default: /* @__PURE__ */ __name((e4) => Ot(e4), "default") }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o2
});
var o2;
var init_virtual_spa_template = __esm({
  "dist/server/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    o2 = "";
  }
});

// dist/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  A: () => withCtx,
  B: () => createVNode,
  C: () => useSSRContext,
  D: () => onErrorCaptured,
  E: () => ssrRenderSuspense,
  F: () => lt,
  G: () => qe,
  H: () => renderVNode,
  I: () => resolveDynamicComponent,
  J: () => createApp,
  K: () => ssrInterpolate,
  L: () => createTextVNode,
  M: () => toDisplayString,
  N: () => useHead,
  O: () => Ut,
  P: () => ssrRenderAttr,
  Q: () => withAsyncContext,
  R: () => ssrRenderList,
  S: () => at,
  T: () => resolveComponent,
  U: () => ssrRenderClass,
  V: () => ssrRenderSlot,
  W: () => $n,
  a: () => getCurrentInstance,
  b: () => shallowRef,
  c: () => computed,
  d: () => defineComponent,
  e: () => effectScope,
  f: () => h,
  g: () => getCurrentScope,
  h: () => hasInjectionContext,
  i: () => inject,
  j: () => ref,
  k: () => isReadonly,
  l: () => isRef,
  m: () => isShallow,
  n: () => nextTick2,
  o: () => isReactive,
  p: () => provide,
  q: () => toRaw,
  r: () => reactive,
  s: () => shallowReactive,
  t: () => toRef,
  u: () => unref,
  v: () => defineAsyncComponent,
  w: () => watch,
  x: () => mergeProps,
  y: () => ssrRenderAttrs,
  z: () => ssrRenderComponent
});
function getModuleDependencies(e4, t5) {
  if (t5._dependencies[e4]) return t5._dependencies[e4];
  const n2 = t5._dependencies[e4] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r6 = t5.manifest[e4];
  if (!r6) return n2;
  r6.file && (n2.preload[e4] = r6, (r6.isEntry || r6.sideEffects) && (n2.scripts[e4] = r6));
  for (const e5 of r6.css || []) n2.styles[e5] = n2.preload[e5] = n2.prefetch[e5] = t5.manifest[e5];
  for (const e5 of r6.assets || []) n2.preload[e5] = n2.prefetch[e5] = t5.manifest[e5];
  for (const e5 of r6.imports || []) {
    const r7 = getModuleDependencies(e5, t5);
    Object.assign(n2.styles, r7.styles), Object.assign(n2.preload, r7.preload), Object.assign(n2.prefetch, r7.prefetch);
  }
  const s2 = {};
  for (const e5 in n2.preload) {
    const t6 = n2.preload[e5];
    t6.preload && (s2[e5] = t6);
  }
  return n2.preload = s2, n2;
}
function getRequestDependencies(e4, t5) {
  if (e4._requestDependencies) return e4._requestDependencies;
  const n2 = function(e5, t6) {
    const n3 = Array.from(e5).sort().join(",");
    if (t6._dependencySets[n3]) return t6._dependencySets[n3];
    const r6 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n4 of e5) {
      const e6 = getModuleDependencies(n4, t6);
      Object.assign(r6.scripts, e6.scripts), Object.assign(r6.styles, e6.styles), Object.assign(r6.preload, e6.preload), Object.assign(r6.prefetch, e6.prefetch);
      for (const e7 of t6.manifest[n4]?.dynamicImports || []) {
        const n5 = getModuleDependencies(e7, t6);
        Object.assign(r6.prefetch, n5.scripts), Object.assign(r6.prefetch, n5.styles), Object.assign(r6.prefetch, n5.preload);
      }
    }
    const s2 = {};
    for (const e6 in r6.prefetch) {
      const t7 = r6.prefetch[e6];
      t7.prefetch && (s2[e6] = t7);
    }
    r6.prefetch = s2;
    for (const e6 in r6.preload) delete r6.prefetch[e6];
    for (const e6 in r6.styles) delete r6.preload[e6], delete r6.prefetch[e6];
    return t6._dependencySets[n3] = r6, r6;
  }(new Set(Array.from([...t5._entrypoints, ...e4.modules || e4._registeredComponents || []])), t5);
  return e4._requestDependencies = n2, n2;
}
function renderStyles(e4, t5) {
  const { styles: n2 } = getRequestDependencies(e4, t5);
  return Object.values(n2).map((e5) => renderLinkToString({ rel: "stylesheet", href: t5.buildAssetsURL(e5.file), crossorigin: "" })).join("");
}
function getResources(e4, t5) {
  return [...getPreloadLinks(e4, t5), ...getPrefetchLinks(e4, t5)];
}
function renderResourceHints(e4, t5) {
  return getResources(e4, t5).map(renderLinkToString).join("");
}
function renderResourceHeaders(e4, t5) {
  return { link: getResources(e4, t5).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e4, t5) {
  const { preload: n2 } = getRequestDependencies(e4, t5);
  return Object.values(n2).map((e5) => ({ rel: e5.module ? "modulepreload" : "preload", as: e5.resourceType, type: e5.mimeType ?? null, crossorigin: "style" === e5.resourceType || "font" === e5.resourceType || "script" === e5.resourceType || e5.module ? "" : null, href: t5.buildAssetsURL(e5.file) }));
}
function getPrefetchLinks(e4, t5) {
  const { prefetch: n2 } = getRequestDependencies(e4, t5);
  return Object.values(n2).map((e5) => ({ rel: "prefetch", as: e5.resourceType, type: e5.mimeType ?? null, crossorigin: "style" === e5.resourceType || "font" === e5.resourceType || "script" === e5.resourceType || e5.module ? "" : null, href: t5.buildAssetsURL(e5.file) }));
}
function renderScripts(e4, t5) {
  const { scripts: n2 } = getRequestDependencies(e4, t5);
  return Object.values(n2).map((e5) => {
    return n3 = { type: e5.module ? "module" : null, src: t5.buildAssetsURL(e5.file), defer: e5.module ? null : "", crossorigin: "" }, `<script${Object.entries(n3).map(([e6, t6]) => null === t6 ? "" : t6 ? ` ${e6}="${t6}"` : " " + e6).join("")}><\/script>`;
    var n3;
  }).join("");
}
function createRenderer$1(t5, n2) {
  const r6 = function({ manifest: t6, buildAssetsURL: n3 }) {
    const r7 = { buildAssetsURL: n3 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e4) {
      const t7 = Object.entries(e4);
      r7.manifest = e4, r7._dependencies = {}, r7._dependencySets = {}, r7._entrypoints = t7.filter((e5) => e5[1].isEntry).map(([e5]) => e5);
    }
    __name(updateManifest, "updateManifest");
    return updateManifest(t6), r7;
  }(n2);
  return { rendererContext: r6, async renderToString(e4) {
    e4._registeredComponents = e4._registeredComponents || /* @__PURE__ */ new Set();
    const s2 = await Promise.resolve(t5).then((e5) => "default" in e5 ? e5.default : e5), o4 = await s2(e4), wrap = /* @__PURE__ */ __name((t6) => () => t6(e4, r6), "wrap");
    return { html: await n2.renderToString(o4, e4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e4) {
  return `<link${Object.entries(e4).map(([e5, t5]) => null === t5 ? "" : t5 ? ` ${e5}="${t5}"` : " " + e5).join("")}>`;
}
function renderLinkToHeader(e4) {
  return `<${e4.href}>${Object.entries(e4).map(([e5, t5]) => "href" === e5 || null === t5 ? "" : t5 ? `; ${e5}="${t5}"` : `; ${e5}`).join("")}`;
}
function dedupeKey(e4) {
  const { props: t5, tag: n2 } = e4;
  if (y.has(n2)) return n2;
  if ("link" === n2 && "canonical" === t5.rel) return "canonical";
  if (t5.charset) return "charset";
  if ("meta" === e4.tag) {
    for (const e5 of k) if (void 0 !== t5[e5]) return `${n2}:${t5[e5]}`;
  }
  if (e4.key) return `${n2}:key:${e4.key}`;
  if (t5.id) return `${n2}:id:${t5.id}`;
  if (g2.has(n2)) {
    const t6 = e4.textContent || e4.innerHTML;
    if (t6) return `${n2}:content:${t6}`;
  }
}
function walkResolver(e4, t5, n2) {
  const r6 = typeof e4;
  let s2;
  if (t5 && n2 ? t5 && ("titleTemplate" === n2 || "o" === n2[0] && "n" === n2[1]) ? s2 = t5(n2, e4) : t5 && (s2 = t5(n2, "function" === r6 ? e4() : e4)) : s2 = "function" === r6 ? e4() : e4, Array.isArray(s2)) return s2.map((e5) => walkResolver(e5, t5));
  if (s2?.constructor === Object) {
    const e5 = {};
    for (const n3 of Object.keys(s2)) e5[n3] = walkResolver(s2[n3], t5, n3);
    return e5;
  }
  return s2;
}
function normalizeProps(e4, t5) {
  return e4.props = e4.props || {}, t5 ? (Object.entries(t5).forEach(([n2, r6]) => {
    if (null === r6) return void (e4.props[n2] = null);
    if ("class" === n2 || "style" === n2) return void (e4.props[n2] = function(e5, t6) {
      const n3 = "style" === e5 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
      function processValue(t7) {
        const r7 = t7.trim();
        if (r7) if ("style" === e5) {
          const [e6, ...t8] = r7.split(":").map((e7) => e7.trim());
          e6 && t8.length && n3.set(e6, t8.join(":"));
        } else r7.split(" ").filter(Boolean).forEach((e6) => n3.add(e6));
      }
      __name(processValue, "processValue");
      return "string" == typeof t6 ? "style" === e5 ? t6.split(";").forEach(processValue) : processValue(t6) : Array.isArray(t6) ? t6.forEach((e6) => processValue(e6)) : t6 && "object" == typeof t6 && Object.entries(t6).forEach(([t7, r7]) => {
        r7 && "false" !== r7 && ("style" === e5 ? n3.set(t7.trim(), r7) : processValue(t7));
      }), n3;
    }(n2, r6));
    if (v.has(n2)) {
      if (["textContent", "innerHTML"].includes(n2) && "object" == typeof r6) {
        let s3 = t5.type;
        if (t5.type || (s3 = "application/json"), !s3?.endsWith("json") && "speculationrules" !== s3) return;
        t5.type = s3, e4.props.type = s3, e4[n2] = JSON.stringify(r6);
      } else e4[n2] = r6;
      return;
    }
    const s2 = String(r6), o4 = n2.startsWith("data-");
    "true" === s2 || "" === s2 ? e4.props[n2] = !o4 || "true" : !r6 && o4 && "false" === s2 ? e4.props[n2] = "false" : void 0 !== r6 && (e4.props[n2] = r6);
  }), e4) : e4;
}
function normalizeTag(e4, t5) {
  const n2 = normalizeProps({ tag: e4, props: {} }, "object" == typeof t5 && "function" != typeof t5 ? t5 : { ["script" === e4 || "noscript" === e4 || "style" === e4 ? "innerHTML" : "textContent"]: t5 });
  return n2.key && d4.has(n2.tag) && (n2.props["data-hid"] = n2._h = n2.key), "script" === n2.tag && "object" == typeof n2.innerHTML && (n2.innerHTML = JSON.stringify(n2.innerHTML), n2.props.type = n2.props.type || "application/json"), Array.isArray(n2.props.content) ? n2.props.content.map((e5) => ({ ...n2, props: { ...n2.props, content: e5 } })) : n2;
}
function normalizeEntryToTags(e4, t5) {
  if (!e4) return [];
  const n2 = [];
  return "function" == typeof e4 ? normalizeEntryToTags(e4(), t5) : (e4 = walkResolver(e4, (e5, n3) => {
    let r6 = n3;
    for (let n4 = 0; n4 < t5.length; n4++) {
      const s2 = t5[n4](e5, r6);
      void 0 !== s2 && (r6 = s2);
    }
    return r6;
  }), Object.entries(e4).forEach(([e5, t6]) => {
    if (void 0 !== t6) for (const r6 of Array.isArray(t6) ? t6 : [t6]) n2.push(normalizeTag(e5, r6));
  }), n2.flat());
}
function tagWeight(e4, t5) {
  if ("number" == typeof t5.tagPriority) return t5.tagPriority;
  let n2 = 100;
  const r6 = S2[t5.tagPriority] || 0, s2 = e4.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : C;
  if (t5.tag in w) n2 = w[t5.tag];
  else if ("meta" === t5.tag) {
    const e5 = "content-security-policy" === t5.props["http-equiv"] ? "content-security-policy" : t5.props.charset ? "charset" : "viewport" === t5.props.name ? "viewport" : null;
    e5 && (n2 = C.meta[e5]);
  } else "link" === t5.tag && t5.props.rel ? n2 = s2.link[t5.props.rel] : "script" === t5.tag ? isTruthy(t5.props.async) ? n2 = s2.script.async : !t5.props.src || isTruthy(t5.props.defer) || isTruthy(t5.props.async) || "module" === t5.props.type || t5.props.type?.endsWith("json") ? isTruthy(t5.props.defer) && t5.props.src && !isTruthy(t5.props.async) && (n2 = s2.script.defer) : n2 = s2.script.sync : "style" === t5.tag && (n2 = t5.innerHTML && R.test(t5.innerHTML) ? s2.style.imported : s2.style.sync);
  return (n2 || 100) + r6;
}
function registerPlugin(e4, t5) {
  const n2 = "function" == typeof t5 ? t5(e4) : t5, r6 = n2.key || String(e4.plugins.size + 1);
  e4.plugins.get(r6) || (e4.plugins.set(r6, n2), e4.hooks.addHooks(n2.hooks || {}));
}
function createUnhead(e4 = {}) {
  const n2 = createHooks();
  n2.addHooks(e4.hooks || {});
  const r6 = !e4.document, s2 = /* @__PURE__ */ new Map(), o4 = [], i3 = { _entryCount: 1, plugins: /* @__PURE__ */ new Map(), dirty: false, resolvedOptions: e4, hooks: n2, ssr: r6, entries: s2, headEntries: /* @__PURE__ */ __name(() => [...s2.values()], "headEntries"), use: /* @__PURE__ */ __name((e5) => registerPlugin(i3, e5), "use"), push(e5, t5) {
    const a5 = { ...t5 || {} };
    delete a5.head;
    const l3 = a5._index ?? i3._entryCount++, c3 = { _i: l3, input: e5, options: a5 }, u2 = { _poll(e6 = false) {
      i3.dirty = true, !e6 && o4.push(l3), n2.callHook("entries:updated", i3);
    }, dispose() {
      s2.delete(l3) && u2._poll(true);
    }, patch(e6) {
      (!a5.mode || "server" === a5.mode && r6 || "client" === a5.mode && !r6) && (c3.input = e6, s2.set(l3, c3), u2._poll());
    } };
    return u2.patch(e5), u2;
  }, async resolveTags() {
    const t5 = { tagMap: /* @__PURE__ */ new Map(), tags: [], entries: [...i3.entries.values()] };
    for (await n2.callHook("entries:resolve", t5); o4.length; ) {
      const t6 = o4.shift(), r8 = s2.get(t6);
      if (r8) {
        const t7 = { tags: normalizeEntryToTags(r8.input, e4.propResolvers || []).map((e5) => Object.assign(e5, r8.options)), entry: r8 };
        await n2.callHook("entries:normalize", t7), r8._tags = t7.tags.map((e5, t8) => (e5._w = tagWeight(i3, e5), e5._p = (r8._i << 10) + t8, e5._d = dedupeKey(e5), e5));
      }
    }
    let r7 = false;
    t5.entries.flatMap((e5) => (e5._tags || []).map((e6) => ({ ...e6, props: { ...e6.props } }))).sort(sortTags$1).reduce((e5, t6) => {
      const n3 = String(t6._d || t6._p);
      if (!e5.has(n3)) return e5.set(n3, t6);
      const s3 = e5.get(n3);
      if ("merge" === (t6?.tagDuplicateStrategy || (b.has(t6.tag) ? "merge" : null) || (t6.key && t6.key === s3.key ? "merge" : null))) {
        const r8 = { ...s3.props };
        Object.entries(t6.props).forEach(([e6, t7]) => r8[e6] = "style" === e6 ? new Map([...s3.props.style || /* @__PURE__ */ new Map(), ...t7]) : "class" === e6 ? /* @__PURE__ */ new Set([...s3.props.class || /* @__PURE__ */ new Set(), ...t7]) : t7), e5.set(n3, { ...t6, props: r8 });
      } else t6._p >> 10 == s3._p >> 10 && function(e6) {
        const t7 = e6.split(":")[1];
        return _2.has(t7);
      }(t6._d) ? (e5.set(n3, Object.assign([...Array.isArray(s3) ? s3 : [s3], t6], t6)), r7 = true) : (t6._w === s3._w ? t6._p > s3._p : t6?._w < s3?._w) && e5.set(n3, t6);
      return e5;
    }, t5.tagMap);
    const a5 = t5.tagMap.get("title"), l3 = t5.tagMap.get("titleTemplate");
    if (i3._title = a5?.textContent, l3) {
      const e5 = l3?.textContent;
      if (i3._titleTemplate = "string" == typeof e5 ? e5 : void 0, e5) {
        let n3 = "function" == typeof e5 ? e5(a5?.textContent) : e5;
        "string" != typeof n3 || i3.plugins.has("template-params") || (n3 = n3.replace("%s", a5?.textContent || "")), a5 ? null === n3 ? t5.tagMap.delete("title") : t5.tagMap.set("title", { ...a5, textContent: n3 }) : (l3.tag = "title", l3.textContent = n3);
      }
    }
    t5.tags = Array.from(t5.tagMap.values()), r7 && (t5.tags = t5.tags.flat().sort(sortTags$1)), await n2.callHook("tags:beforeResolve", t5), await n2.callHook("tags:resolve", t5), await n2.callHook("tags:afterResolve", t5);
    const c3 = [];
    for (const e5 of t5.tags) {
      const { innerHTML: t6, tag: n3, props: r8 } = e5;
      if (m2.has(n3) && ((0 !== Object.keys(r8).length || e5.innerHTML || e5.textContent) && ("meta" !== n3 || r8.content || r8["http-equiv"] || r8.charset))) {
        if ("script" === n3 && t6) {
          if (r8.type?.endsWith("json")) {
            const n4 = "string" == typeof t6 ? t6 : JSON.stringify(t6);
            e5.innerHTML = n4.replace(/</g, "\\u003C");
          } else "string" == typeof t6 && (e5.innerHTML = t6.replace(new RegExp(`</${n3}`, "g"), `<\\/${n3}`));
          e5._d = dedupeKey(e5);
        }
        c3.push(e5);
      }
    }
    return c3;
  } };
  return (e4?.plugins || []).forEach((e5) => registerPlugin(i3, e5)), i3.hooks.callHook("init", i3), e4.init?.forEach((e5) => e5 && i3.push(e5)), i3;
}
function encodeAttribute(e4) {
  return String(e4).replace(/"/g, "&quot;");
}
function propsToString(e4) {
  let t5 = "";
  for (const n2 in e4) {
    if (!Object.hasOwn(e4, n2)) continue;
    let r6 = e4[n2];
    "class" !== n2 && "style" !== n2 || (r6 = "class" === n2 ? Array.from(r6).join(" ") : Array.from(r6).map(([e5, t6]) => `${e5}:${t6}`).join(";")), false !== r6 && null !== r6 && (t5 += true === r6 ? ` ${n2}` : ` ${n2}="${encodeAttribute(r6)}"`);
  }
  return t5;
}
function tagToString(e4) {
  const t5 = propsToString(e4.props), n2 = `<${e4.tag}${t5}>`;
  if (!g2.has(e4.tag)) return f3.has(e4.tag) ? n2 : `${n2}</${e4.tag}>`;
  let r6 = String(e4.innerHTML || "");
  return e4.textContent && (r6 = String(e4.textContent).replace(/[&<>"'/]/g, (e5) => {
    switch (e5) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e5;
    }
  })), f3.has(e4.tag) ? n2 : `${n2}${r6}</${e4.tag}>`;
}
async function renderSSRHead(e4, t5) {
  const n2 = { shouldRender: true };
  if (await e4.hooks.callHook("ssr:beforeRender", n2), !n2.shouldRender) return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r6 = { tags: t5?.resolvedTags || await e4.resolveTags() };
  await e4.hooks.callHook("ssr:render", r6);
  const s2 = function(e5) {
    const t6 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } };
    for (const n3 of e5) {
      if ("htmlAttrs" === n3.tag || "bodyAttrs" === n3.tag) {
        Object.assign(t6[n3.tag], n3.props);
        continue;
      }
      const e6 = tagToString(n3), r7 = n3.tagPosition || "head";
      t6.tags[r7] += t6.tags[r7] ? `
${e6}` : e6;
    }
    return { headTags: t6.tags.head, bodyTags: t6.tags.bodyClose, bodyTagsOpen: t6.tags.bodyOpen, htmlAttrs: propsToString(t6.htmlAttrs), bodyAttrs: propsToString(t6.bodyAttrs) };
  }(r6.tags), o4 = { tags: r6.tags, html: s2 };
  return await e4.hooks.callHook("ssr:rendered", o4), o4.html;
}
function makeMap(e4) {
  const t5 = /* @__PURE__ */ Object.create(null);
  for (const n2 of e4.split(",")) t5[n2] = 1;
  return (e5) => e5 in t5;
}
function normalizeStyle(e4) {
  if ($(e4)) {
    const t5 = {};
    for (let n2 = 0; n2 < e4.length; n2++) {
      const r6 = e4[n2], s2 = isString(r6) ? parseStringStyle(r6) : normalizeStyle(r6);
      if (s2) for (const e5 in s2) t5[e5] = s2[e5];
    }
    return t5;
  }
  if (isString(e4) || isObject(e4)) return e4;
}
function parseStringStyle(e4) {
  const t5 = {};
  return e4.replace(F2, "").split(B2).forEach((e5) => {
    if (e5) {
      const n2 = e5.split(L);
      n2.length > 1 && (t5[n2[0].trim()] = n2[1].trim());
    }
  }), t5;
}
function normalizeClass(e4) {
  let t5 = "";
  if (isString(e4)) t5 = e4;
  else if ($(e4)) for (let n2 = 0; n2 < e4.length; n2++) {
    const r6 = normalizeClass(e4[n2]);
    r6 && (t5 += r6 + " ");
  }
  else if (isObject(e4)) for (const n2 in e4) e4[n2] && (t5 += n2 + " ");
  return t5.trim();
}
function includeBooleanAttr(e4) {
  return !!e4 || "" === e4;
}
function isRenderableAttrValue(e4) {
  if (null == e4) return false;
  const t5 = typeof e4;
  return "string" === t5 || "number" === t5 || "boolean" === t5;
}
function escapeHtml(e4) {
  const t5 = "" + e4, n2 = X2.exec(t5);
  if (!n2) return t5;
  let r6, s2, o4 = "", i3 = 0;
  for (s2 = n2.index; s2 < t5.length; s2++) {
    switch (t5.charCodeAt(s2)) {
      case 34:
        r6 = "&quot;";
        break;
      case 38:
        r6 = "&amp;";
        break;
      case 39:
        r6 = "&#39;";
        break;
      case 60:
        r6 = "&lt;";
        break;
      case 62:
        r6 = "&gt;";
        break;
      default:
        continue;
    }
    i3 !== s2 && (o4 += t5.slice(i3, s2)), i3 = s2 + 1, o4 += r6;
  }
  return i3 !== s2 ? o4 + t5.slice(i3, s2) : o4;
}
function effectScope(e4) {
  return new EffectScope(e4);
}
function getCurrentScope() {
  return Y2;
}
function batch(e4, t5 = false) {
  if (e4.flags |= 8, t5) return e4.next = re2, void (re2 = e4);
  e4.next = ne2, ne2 = e4;
}
function startBatch() {
  se2++;
}
function endBatch() {
  if (--se2 > 0) return;
  if (re2) {
    let e5 = re2;
    for (re2 = void 0; e5; ) {
      const t5 = e5.next;
      e5.next = void 0, e5.flags &= -9, e5 = t5;
    }
  }
  let e4;
  for (; ne2; ) {
    let t5 = ne2;
    for (ne2 = void 0; t5; ) {
      const n2 = t5.next;
      if (t5.next = void 0, t5.flags &= -9, 1 & t5.flags) try {
        t5.trigger();
      } catch (t6) {
        e4 || (e4 = t6);
      }
      t5 = n2;
    }
  }
  if (e4) throw e4;
}
function prepareDeps(e4) {
  for (let t5 = e4.deps; t5; t5 = t5.nextDep) t5.version = -1, t5.prevActiveLink = t5.dep.activeLink, t5.dep.activeLink = t5;
}
function cleanupDeps(e4) {
  let t5, n2 = e4.depsTail, r6 = n2;
  for (; r6; ) {
    const e5 = r6.prevDep;
    -1 === r6.version ? (r6 === n2 && (n2 = e5), removeSub(r6), removeDep(r6)) : t5 = r6, r6.dep.activeLink = r6.prevActiveLink, r6.prevActiveLink = void 0, r6 = e5;
  }
  e4.deps = t5, e4.depsTail = n2;
}
function isDirty(e4) {
  for (let t5 = e4.deps; t5; t5 = t5.nextDep) if (t5.dep.version !== t5.version || t5.dep.computed && (refreshComputed(t5.dep.computed) || t5.dep.version !== t5.version)) return true;
  return !!e4._dirty;
}
function refreshComputed(e4) {
  if (4 & e4.flags && !(16 & e4.flags)) return;
  if (e4.flags &= -17, e4.globalVersion === ae2) return;
  e4.globalVersion = ae2;
  const t5 = e4.dep;
  if (e4.flags |= 2, t5.version > 0 && !e4.isSSR && e4.deps && !isDirty(e4)) return void (e4.flags &= -3);
  const n2 = ee2, r6 = oe2;
  ee2 = e4, oe2 = true;
  try {
    prepareDeps(e4);
    const n3 = e4.fn(e4._value);
    (0 === t5.version || hasChanged(n3, e4._value)) && (e4._value = n3, t5.version++);
  } catch (e5) {
    throw t5.version++, e5;
  } finally {
    ee2 = n2, oe2 = r6, cleanupDeps(e4), e4.flags &= -3;
  }
}
function removeSub(e4, t5 = false) {
  const { dep: n2, prevSub: r6, nextSub: s2 } = e4;
  if (r6 && (r6.nextSub = s2, e4.prevSub = void 0), s2 && (s2.prevSub = r6, e4.nextSub = void 0), n2.subs === e4 && (n2.subs = r6, !r6 && n2.computed)) {
    n2.computed.flags &= -5;
    for (let e5 = n2.computed.deps; e5; e5 = e5.nextDep) removeSub(e5, true);
  }
  t5 || --n2.sc || !n2.map || n2.map.delete(n2.key);
}
function removeDep(e4) {
  const { prevDep: t5, nextDep: n2 } = e4;
  t5 && (t5.nextDep = n2, e4.prevDep = void 0), n2 && (n2.prevDep = t5, e4.nextDep = void 0);
}
function pauseTracking() {
  ie2.push(oe2), oe2 = false;
}
function resetTracking() {
  const e4 = ie2.pop();
  oe2 = void 0 === e4 || e4;
}
function cleanupEffect(e4) {
  const { cleanup: t5 } = e4;
  if (e4.cleanup = void 0, t5) {
    const e5 = ee2;
    ee2 = void 0;
    try {
      t5();
    } finally {
      ee2 = e5;
    }
  }
}
function addSub(e4) {
  if (e4.dep.sc++, 4 & e4.sub.flags) {
    const t5 = e4.dep.computed;
    if (t5 && !e4.dep.subs) {
      t5.flags |= 20;
      for (let e5 = t5.deps; e5; e5 = e5.nextDep) addSub(e5);
    }
    const n2 = e4.dep.subs;
    n2 !== e4 && (e4.prevSub = n2, n2 && (n2.nextSub = e4)), e4.dep.subs = e4;
  }
}
function track(e4, t5, n2) {
  if (oe2 && ee2) {
    let t6 = le2.get(e4);
    t6 || le2.set(e4, t6 = /* @__PURE__ */ new Map());
    let r6 = t6.get(n2);
    r6 || (t6.set(n2, r6 = new Dep()), r6.map = t6, r6.key = n2), r6.track();
  }
}
function trigger(e4, t5, n2, r6, s2, o4) {
  const i3 = le2.get(e4);
  if (!i3) return void ae2++;
  const run = /* @__PURE__ */ __name((e5) => {
    e5 && e5.trigger();
  }, "run");
  if (startBatch(), "clear" === t5) i3.forEach(run);
  else {
    const s3 = $(e4), o5 = s3 && isIntegerKey(n2);
    if (s3 && "length" === n2) {
      const e5 = Number(r6);
      i3.forEach((t6, n3) => {
        ("length" === n3 || n3 === pe2 || !isSymbol(n3) && n3 >= e5) && run(t6);
      });
    } else switch ((void 0 !== n2 || i3.has(void 0)) && run(i3.get(n2)), o5 && run(i3.get(pe2)), t5) {
      case "add":
        s3 ? o5 && run(i3.get("length")) : (run(i3.get(ce2)), isMap(e4) && run(i3.get(ue2)));
        break;
      case "delete":
        s3 || (run(i3.get(ce2)), isMap(e4) && run(i3.get(ue2)));
        break;
      case "set":
        isMap(e4) && run(i3.get(ce2));
    }
  }
  endBatch();
}
function reactiveReadArray(e4) {
  const t5 = toRaw(e4);
  return t5 === e4 ? t5 : (track(t5, 0, pe2), isShallow(e4) ? t5 : t5.map(toReactive));
}
function shallowReadArray(e4) {
  return track(e4 = toRaw(e4), 0, pe2), e4;
}
function iterator(e4, t5, n2) {
  const r6 = shallowReadArray(e4), s2 = r6[t5]();
  return r6 === e4 || isShallow(e4) || (s2._next = s2.next, s2.next = () => {
    const e5 = s2._next();
    return e5.value && (e5.value = n2(e5.value)), e5;
  }), s2;
}
function apply(e4, t5, n2, r6, s2, o4) {
  const i3 = shallowReadArray(e4), a5 = i3 !== e4 && !isShallow(e4), l3 = i3[t5];
  if (l3 !== de2[t5]) {
    const t6 = l3.apply(e4, o4);
    return a5 ? toReactive(t6) : t6;
  }
  let c3 = n2;
  i3 !== e4 && (a5 ? c3 = /* @__PURE__ */ __name(function(t6, r7) {
    return n2.call(this, toReactive(t6), r7, e4);
  }, "c") : n2.length > 2 && (c3 = /* @__PURE__ */ __name(function(t6, r7) {
    return n2.call(this, t6, r7, e4);
  }, "c")));
  const u2 = l3.call(i3, c3, r6);
  return a5 && s2 ? s2(u2) : u2;
}
function reduce(e4, t5, n2, r6) {
  const s2 = shallowReadArray(e4);
  let o4 = n2;
  return s2 !== e4 && (isShallow(e4) ? n2.length > 3 && (o4 = /* @__PURE__ */ __name(function(t6, r7, s3) {
    return n2.call(this, t6, r7, s3, e4);
  }, "o")) : o4 = /* @__PURE__ */ __name(function(t6, r7, s3) {
    return n2.call(this, t6, toReactive(r7), s3, e4);
  }, "o")), s2[t5](o4, ...r6);
}
function searchProxy(e4, t5, n2) {
  const r6 = toRaw(e4);
  track(r6, 0, pe2);
  const s2 = r6[t5](...n2);
  return -1 !== s2 && false !== s2 || !isProxy(n2[0]) ? s2 : (n2[0] = toRaw(n2[0]), r6[t5](...n2));
}
function noTracking(e4, t5, n2 = []) {
  pauseTracking(), startBatch();
  const r6 = toRaw(e4)[t5].apply(e4, n2);
  return endBatch(), resetTracking(), r6;
}
function hasOwnProperty(e4) {
  isSymbol(e4) || (e4 = String(e4));
  const t5 = toRaw(this);
  return track(t5, 0, e4), t5.hasOwnProperty(e4);
}
function createReadonlyMethod(e4) {
  return function(...t5) {
    return "delete" !== e4 && ("clear" === e4 ? void 0 : this);
  };
}
function createInstrumentations(e4, t5) {
  const n2 = { get(n3) {
    const r6 = this.__v_raw, s2 = toRaw(r6), o4 = toRaw(n3);
    e4 || (hasChanged(n3, o4) && track(s2, 0, n3), track(s2, 0, o4));
    const { has: i3 } = getProto(s2), a5 = t5 ? toShallow : e4 ? toReadonly : toReactive;
    return i3.call(s2, n3) ? a5(r6.get(n3)) : i3.call(s2, o4) ? a5(r6.get(o4)) : void (r6 !== s2 && r6.get(n3));
  }, get size() {
    const t6 = this.__v_raw;
    return !e4 && track(toRaw(t6), 0, ce2), Reflect.get(t6, "size", t6);
  }, has(t6) {
    const n3 = this.__v_raw, r6 = toRaw(n3), s2 = toRaw(t6);
    return e4 || (hasChanged(t6, s2) && track(r6, 0, t6), track(r6, 0, s2)), t6 === s2 ? n3.has(t6) : n3.has(t6) || n3.has(s2);
  }, forEach(n3, r6) {
    const s2 = this, o4 = s2.__v_raw, i3 = toRaw(o4), a5 = t5 ? toShallow : e4 ? toReadonly : toReactive;
    return !e4 && track(i3, 0, ce2), o4.forEach((e5, t6) => n3.call(r6, a5(e5), a5(t6), s2));
  } };
  T(n2, e4 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e5) {
    t5 || isShallow(e5) || isReadonly(e5) || (e5 = toRaw(e5));
    const n3 = toRaw(this);
    return getProto(n3).has.call(n3, e5) || (n3.add(e5), trigger(n3, "add", e5, e5)), this;
  }, set(e5, n3) {
    t5 || isShallow(n3) || isReadonly(n3) || (n3 = toRaw(n3));
    const r6 = toRaw(this), { has: s2, get: o4 } = getProto(r6);
    let i3 = s2.call(r6, e5);
    i3 || (e5 = toRaw(e5), i3 = s2.call(r6, e5));
    const a5 = o4.call(r6, e5);
    return r6.set(e5, n3), i3 ? hasChanged(n3, a5) && trigger(r6, "set", e5, n3) : trigger(r6, "add", e5, n3), this;
  }, delete(e5) {
    const t6 = toRaw(this), { has: n3, get: r6 } = getProto(t6);
    let s2 = n3.call(t6, e5);
    s2 || (e5 = toRaw(e5), s2 = n3.call(t6, e5)), r6 && r6.call(t6, e5);
    const o4 = t6.delete(e5);
    return s2 && trigger(t6, "delete", e5, void 0), o4;
  }, clear() {
    const e5 = toRaw(this), t6 = 0 !== e5.size, n3 = e5.clear();
    return t6 && trigger(e5, "clear", void 0, void 0), n3;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((r6) => {
    n2[r6] = /* @__PURE__ */ function(e5, t6, n3) {
      return function(...r7) {
        const s2 = this.__v_raw, o4 = toRaw(s2), i3 = isMap(o4), a5 = "entries" === e5 || e5 === Symbol.iterator && i3, l3 = "keys" === e5 && i3, c3 = s2[e5](...r7), u2 = n3 ? toShallow : t6 ? toReadonly : toReactive;
        return !t6 && track(o4, 0, l3 ? ue2 : ce2), { next() {
          const { value: e6, done: t7 } = c3.next();
          return t7 ? { value: e6, done: t7 } : { value: a5 ? [u2(e6[0]), u2(e6[1])] : u2(e6), done: t7 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    }(r6, e4, t5);
  }), n2;
}
function createInstrumentationGetter(e4, t5) {
  const n2 = createInstrumentations(e4, t5);
  return (t6, r6, s2) => "__v_isReactive" === r6 ? !e4 : "__v_isReadonly" === r6 ? e4 : "__v_raw" === r6 ? t6 : Reflect.get(hasOwn(n2, r6) && r6 in t6 ? n2 : t6, r6, s2);
}
function getTargetType(e4) {
  return e4.__v_skip || !Object.isExtensible(e4) ? 0 : function(e5) {
    switch (e5) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(((e5) => toTypeString(e5).slice(8, -1))(e4));
}
function reactive(e4) {
  return isReadonly(e4) ? e4 : createReactiveObject(e4, false, me2, be2, we2);
}
function shallowReactive(e4) {
  return createReactiveObject(e4, false, ve2, _e2, Se2);
}
function readonly(e4) {
  return createReactiveObject(e4, true, ye2, ke2, Ce2);
}
function createReactiveObject(e4, t5, n2, r6, s2) {
  if (!isObject(e4)) return e4;
  if (e4.__v_raw && (!t5 || !e4.__v_isReactive)) return e4;
  const o4 = s2.get(e4);
  if (o4) return o4;
  const i3 = getTargetType(e4);
  if (0 === i3) return e4;
  const a5 = new Proxy(e4, 2 === i3 ? r6 : n2);
  return s2.set(e4, a5), a5;
}
function isReactive(e4) {
  return isReadonly(e4) ? isReactive(e4.__v_raw) : !(!e4 || !e4.__v_isReactive);
}
function isReadonly(e4) {
  return !(!e4 || !e4.__v_isReadonly);
}
function isShallow(e4) {
  return !(!e4 || !e4.__v_isShallow);
}
function isProxy(e4) {
  return !!e4 && !!e4.__v_raw;
}
function toRaw(e4) {
  const t5 = e4 && e4.__v_raw;
  return t5 ? toRaw(t5) : e4;
}
function isRef(e4) {
  return !!e4 && true === e4.__v_isRef;
}
function ref(e4) {
  return createRef(e4, false);
}
function shallowRef(e4) {
  return createRef(e4, true);
}
function createRef(e4, t5) {
  return isRef(e4) ? e4 : new RefImpl(e4, t5);
}
function unref(e4) {
  return isRef(e4) ? e4.value : e4;
}
function proxyRefs(e4) {
  return isReactive(e4) ? e4 : new Proxy(e4, xe2);
}
function toRef(e4, t5, n2) {
  return isRef(e4) ? e4 : isFunction(e4) ? new GetterRefImpl(e4) : isObject(e4) && arguments.length > 1 ? function(e5, t6, n3) {
    const r6 = e5[t6];
    return isRef(r6) ? r6 : new ObjectRefImpl(e5, t6, n3);
  }(e4, t5, n2) : ref(e4);
}
function watch$1(e4, t5, n2 = x2) {
  const { immediate: r6, deep: s2, once: o4, scheduler: i3, augmentJob: a5, call: l3 } = n2, reactiveGetter = /* @__PURE__ */ __name((e5) => s2 ? e5 : isShallow(e5) || false === s2 || 0 === s2 ? traverse(e5, 1) : traverse(e5), "reactiveGetter");
  let c3, u2, p5, f5, d6 = false, g4 = false;
  if (isRef(e4) ? (u2 = /* @__PURE__ */ __name(() => e4.value, "u"), d6 = isShallow(e4)) : isReactive(e4) ? (u2 = /* @__PURE__ */ __name(() => reactiveGetter(e4), "u"), d6 = true) : $(e4) ? (g4 = true, d6 = e4.some((e5) => isReactive(e5) || isShallow(e5)), u2 = /* @__PURE__ */ __name(() => e4.map((e5) => isRef(e5) ? e5.value : isReactive(e5) ? reactiveGetter(e5) : isFunction(e5) ? l3 ? l3(e5, 2) : e5() : void 0), "u")) : u2 = isFunction(e4) ? t5 ? l3 ? () => l3(e4, 2) : e4 : () => {
    if (p5) {
      pauseTracking();
      try {
        p5();
      } finally {
        resetTracking();
      }
    }
    const t6 = Oe2;
    Oe2 = c3;
    try {
      return l3 ? l3(e4, 3, [f5]) : e4(f5);
    } finally {
      Oe2 = t6;
    }
  } : NOOP, t5 && s2) {
    const e5 = u2, t6 = true === s2 ? 1 / 0 : s2;
    u2 = /* @__PURE__ */ __name(() => traverse(e5(), t6), "u");
  }
  const m4 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
    c3.stop(), m4 && m4.active && remove(m4.effects, c3);
  }, "watchHandle");
  if (o4 && t5) {
    const e5 = t5;
    t5 = /* @__PURE__ */ __name((...t6) => {
      e5(...t6), watchHandle();
    }, "t");
  }
  let y3 = g4 ? new Array(e4.length).fill(Ae2) : Ae2;
  const job = /* @__PURE__ */ __name((e5) => {
    if (1 & c3.flags && (c3.dirty || e5)) if (t5) {
      const e6 = c3.run();
      if (s2 || d6 || (g4 ? e6.some((e7, t6) => hasChanged(e7, y3[t6])) : hasChanged(e6, y3))) {
        p5 && p5();
        const n3 = Oe2;
        Oe2 = c3;
        try {
          const n4 = [e6, y3 === Ae2 ? void 0 : g4 && y3[0] === Ae2 ? [] : y3, f5];
          l3 ? l3(t5, 3, n4) : t5(...n4), y3 = e6;
        } finally {
          Oe2 = n3;
        }
      }
    } else c3.run();
  }, "job");
  return a5 && a5(job), c3 = new ReactiveEffect(u2), c3.scheduler = i3 ? () => i3(job, false) : job, f5 = /* @__PURE__ */ __name((e5) => function(e6, t6 = false, n3 = Oe2) {
    if (n3) {
      let t7 = Te2.get(n3);
      t7 || Te2.set(n3, t7 = []), t7.push(e6);
    }
  }(e5, false, c3), "f"), p5 = c3.onStop = () => {
    const e5 = Te2.get(c3);
    if (e5) {
      if (l3) l3(e5, 4);
      else for (const t6 of e5) t6();
      Te2.delete(c3);
    }
  }, t5 ? r6 ? job(true) : y3 = c3.run() : i3 ? i3(job.bind(null, true), true) : c3.run(), watchHandle.pause = c3.pause.bind(c3), watchHandle.resume = c3.resume.bind(c3), watchHandle.stop = watchHandle, watchHandle;
}
function traverse(e4, t5 = 1 / 0, n2) {
  if (t5 <= 0 || !isObject(e4) || e4.__v_skip) return e4;
  if ((n2 = n2 || /* @__PURE__ */ new Set()).has(e4)) return e4;
  if (n2.add(e4), t5--, isRef(e4)) traverse(e4.value, t5, n2);
  else if ($(e4)) for (let r6 = 0; r6 < e4.length; r6++) traverse(e4[r6], t5, n2);
  else if (isSet(e4) || isMap(e4)) e4.forEach((e5) => {
    traverse(e5, t5, n2);
  });
  else if (isPlainObject(e4)) {
    for (const r6 in e4) traverse(e4[r6], t5, n2);
    for (const r6 of Object.getOwnPropertySymbols(e4)) Object.prototype.propertyIsEnumerable.call(e4, r6) && traverse(e4[r6], t5, n2);
  }
  return e4;
}
function callWithErrorHandling(e4, t5, n2, r6) {
  try {
    return r6 ? e4(...r6) : e4();
  } catch (e5) {
    handleError(e5, t5, n2);
  }
}
function callWithAsyncErrorHandling(e4, t5, n2, r6) {
  if (isFunction(e4)) {
    const s2 = callWithErrorHandling(e4, t5, n2, r6);
    return s2 && isPromise(s2) && s2.catch((e5) => {
      handleError(e5, t5, n2);
    }), s2;
  }
  if ($(e4)) {
    const s2 = [];
    for (let o4 = 0; o4 < e4.length; o4++) s2.push(callWithAsyncErrorHandling(e4[o4], t5, n2, r6));
    return s2;
  }
}
function handleError(e4, t5, n2, r6 = true) {
  t5 && t5.vnode;
  const { errorHandler: s2, throwUnhandledErrorInProduction: o4 } = t5 && t5.appContext.config || x2;
  if (t5) {
    let r7 = t5.parent;
    const o5 = t5.proxy, i3 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; r7; ) {
      const t6 = r7.ec;
      if (t6) {
        for (let n3 = 0; n3 < t6.length; n3++) if (false === t6[n3](e4, o5, i3)) return;
      }
      r7 = r7.parent;
    }
    if (s2) return pauseTracking(), callWithErrorHandling(s2, null, 10, [e4, o5, i3]), void resetTracking();
  }
  !function(e5, t6, n3, r7 = true, s3 = false) {
    if (s3) throw e5;
    console.error(e5);
  }(e4, 0, 0, r6, o4);
}
function nextTick2(e4) {
  const t5 = Ne2 || Me2;
  return e4 ? t5.then(this ? e4.bind(this) : e4) : t5;
}
function queueJob(e4) {
  if (!(1 & e4.flags)) {
    const t5 = getId(e4), n2 = $e2[$e2.length - 1];
    !n2 || !(2 & e4.flags) && t5 >= getId(n2) ? $e2.push(e4) : $e2.splice(function(e5) {
      let t6 = Pe2 + 1, n3 = $e2.length;
      for (; t6 < n3; ) {
        const r6 = t6 + n3 >>> 1, s2 = $e2[r6], o4 = getId(s2);
        o4 < e5 || o4 === e5 && 2 & s2.flags ? t6 = r6 + 1 : n3 = r6;
      }
      return t6;
    }(t5), 0, e4), e4.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  Ne2 || (Ne2 = Me2.then(flushJobs));
}
function queuePostFlushCb(e4) {
  $(e4) ? je2.push(...e4) : Ee2 && -1 === e4.id ? Ee2.splice(He2 + 1, 0, e4) : 1 & e4.flags || (je2.push(e4), e4.flags |= 1), queueFlush();
}
function flushPreFlushCbs(e4, t5, n2 = Pe2 + 1) {
  for (; n2 < $e2.length; n2++) {
    const t6 = $e2[n2];
    if (t6 && 2 & t6.flags) {
      if (e4 && t6.id !== e4.uid) continue;
      $e2.splice(n2, 1), n2--, 4 & t6.flags && (t6.flags &= -2), t6(), 4 & t6.flags || (t6.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e4) {
  if (je2.length) {
    const e5 = [...new Set(je2)].sort((e6, t5) => getId(e6) - getId(t5));
    if (je2.length = 0, Ee2) return void Ee2.push(...e5);
    for (Ee2 = e5, He2 = 0; He2 < Ee2.length; He2++) {
      const e6 = Ee2[He2];
      4 & e6.flags && (e6.flags &= -2), 8 & e6.flags || e6(), e6.flags &= -2;
    }
    Ee2 = null, He2 = 0;
  }
}
function flushJobs(e4) {
  try {
    for (Pe2 = 0; Pe2 < $e2.length; Pe2++) {
      const e5 = $e2[Pe2];
      !e5 || 8 & e5.flags || (4 & e5.flags && (e5.flags &= -2), callWithErrorHandling(e5, e5.i, e5.i ? 15 : 14), 4 & e5.flags || (e5.flags &= -2));
    }
  } finally {
    for (; Pe2 < $e2.length; Pe2++) {
      const e5 = $e2[Pe2];
      e5 && (e5.flags &= -2);
    }
    Pe2 = -1, $e2.length = 0, flushPostFlushCbs(), Ne2 = null, ($e2.length || je2.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e4) {
  const t5 = Ie2;
  return Ie2 = e4, Ve2 = e4 && e4.type.__scopeId || null, t5;
}
function withCtx(e4, t5 = Ie2, n2) {
  if (!t5) return e4;
  if (e4._n) return e4;
  const renderFnWithContext = /* @__PURE__ */ __name((...n3) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r6 = setCurrentRenderingInstance$1(t5);
    let s2;
    try {
      s2 = e4(...n3);
    } finally {
      setCurrentRenderingInstance$1(r6), renderFnWithContext._d && setBlockTracking(1);
    }
    return s2;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e4, t5, n2, r6) {
  const s2 = e4.dirs, o4 = t5 && t5.dirs;
  for (let i3 = 0; i3 < s2.length; i3++) {
    const a5 = s2[i3];
    o4 && (a5.oldValue = o4[i3].value);
    let l3 = a5.dir[r6];
    l3 && (pauseTracking(), callWithAsyncErrorHandling(l3, n2, 8, [e4.el, a5, e4, t5]), resetTracking());
  }
}
function setTransitionHooks(e4, t5) {
  6 & e4.shapeFlag && e4.component ? (e4.transition = t5, setTransitionHooks(e4.component.subTree, t5)) : 128 & e4.shapeFlag ? (e4.ssContent.transition = t5.clone(e4.ssContent), e4.ssFallback.transition = t5.clone(e4.ssFallback)) : e4.transition = t5;
}
function defineComponent(e4, t5) {
  return isFunction(e4) ? (() => T({ name: e4.name }, t5, { setup: e4 }))() : e4;
}
function markAsyncBoundary(e4) {
  e4.ids = [e4.ids[0] + e4.ids[2]++ + "-", 0, 0];
}
function setRef(e4, t5, n2, r6, s2 = false) {
  if ($(e4)) return void e4.forEach((e5, o5) => setRef(e5, t5 && ($(t5) ? t5[o5] : t5), n2, r6, s2));
  if (isAsyncWrapper(r6) && !s2) return void (512 & r6.shapeFlag && r6.type.__asyncResolved && r6.component.subTree.component && setRef(e4, t5, n2, r6.component.subTree));
  const o4 = 4 & r6.shapeFlag ? getComponentPublicInstance(r6.component) : r6.el, i3 = s2 ? null : o4, { i: a5, r: l3 } = e4, c3 = t5 && t5.r, u2 = a5.refs === x2 ? a5.refs = {} : a5.refs, p5 = a5.setupState, f5 = toRaw(p5), d6 = p5 === x2 ? () => false : (e5) => hasOwn(f5, e5);
  if (null != c3 && c3 !== l3 && (isString(c3) ? (u2[c3] = null, d6(c3) && (p5[c3] = null)) : isRef(c3) && (c3.value = null)), isFunction(l3)) callWithErrorHandling(l3, a5, 12, [i3, u2]);
  else {
    const t6 = isString(l3), r7 = isRef(l3);
    if (t6 || r7) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e4.f) {
          const n3 = t6 ? d6(l3) ? p5[l3] : u2[l3] : l3.value;
          s2 ? $(n3) && remove(n3, o4) : $(n3) ? n3.includes(o4) || n3.push(o4) : t6 ? (u2[l3] = [o4], d6(l3) && (p5[l3] = u2[l3])) : (l3.value = [o4], e4.k && (u2[e4.k] = l3.value));
        } else t6 ? (u2[l3] = i3, d6(l3) && (p5[l3] = i3)) : r7 && (l3.value = i3, e4.k && (u2[e4.k] = i3));
      }, "doSet");
      i3 ? (doSet.id = -1, queuePostRenderEffect(doSet, n2)) : doSet();
    }
  }
}
function defineAsyncComponent(e4) {
  isFunction(e4) && (e4 = { loader: e4 });
  const { loader: t5, loadingComponent: n2, errorComponent: r6, delay: s2 = 200, hydrate: o4, timeout: i3, suspensible: a5 = true, onError: l3 } = e4;
  let c3, u2 = null, p5 = 0;
  const load = /* @__PURE__ */ __name(() => {
    let e5;
    return u2 || (e5 = u2 = t5().catch((e6) => {
      if (e6 = e6 instanceof Error ? e6 : new Error(String(e6)), l3) return new Promise((t6, n3) => {
        l3(e6, () => t6((p5++, u2 = null, load())), () => n3(e6), p5 + 1);
      });
      throw e6;
    }).then((t6) => e5 !== u2 && u2 ? u2 : (t6 && (t6.__esModule || "Module" === t6[Symbol.toStringTag]) && (t6 = t6.default), c3 = t6, t6)));
  }, "load");
  return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e5, t6, n3) {
    const r7 = o4 ? () => {
      const r8 = o4(n3, (t7) => function(e6, t8) {
        if (isComment$1(e6) && "[" === e6.data) {
          let n4 = 1, r9 = e6.nextSibling;
          for (; r9; ) {
            if (1 === r9.nodeType) {
              if (false === t8(r9)) break;
            } else if (isComment$1(r9)) if ("]" === r9.data) {
              if (0 == --n4) break;
            } else "[" === r9.data && n4++;
            r9 = r9.nextSibling;
          }
        } else t8(e6);
      }(e5, t7));
      r8 && (t6.bum || (t6.bum = [])).push(r8);
    } : n3;
    c3 ? r7() : load().then(() => !t6.isUnmounted && r7());
  }, get __asyncResolved() {
    return c3;
  }, setup() {
    const e5 = yt2;
    if (markAsyncBoundary(e5), c3) return () => createInnerComp(c3, e5);
    const onError = /* @__PURE__ */ __name((t7) => {
      u2 = null, handleError(t7, e5, 13, !r6);
    }, "onError");
    if (a5 && e5.suspense || _t2) return load().then((t7) => () => createInnerComp(t7, e5)).catch((e6) => (onError(e6), () => r6 ? createVNode(r6, { error: e6 }) : null));
    const t6 = ref(false), o5 = ref(), l4 = ref(!!s2);
    return s2 && setTimeout(() => {
      l4.value = false;
    }, s2), null != i3 && setTimeout(() => {
      if (!t6.value && !o5.value) {
        const e6 = new Error(`Async component timed out after ${i3}ms.`);
        onError(e6), o5.value = e6;
      }
    }, i3), load().then(() => {
      t6.value = true, e5.parent && isKeepAlive(e5.parent.vnode) && e5.parent.update();
    }).catch((e6) => {
      onError(e6), o5.value = e6;
    }), () => t6.value && c3 ? createInnerComp(c3, e5) : o5.value && r6 ? createVNode(r6, { error: o5.value }) : n2 && !l4.value ? createVNode(n2) : void 0;
  } });
}
function createInnerComp(e4, t5) {
  const { ref: n2, props: r6, children: s2, ce: o4 } = t5.vnode, i3 = createVNode(e4, r6, s2);
  return i3.ref = n2, i3.ce = o4, delete t5.vnode.ce, i3;
}
function onActivated(e4, t5) {
  registerKeepAliveHook(e4, "a", t5);
}
function onDeactivated(e4, t5) {
  registerKeepAliveHook(e4, "da", t5);
}
function registerKeepAliveHook(e4, t5, n2 = yt2) {
  const r6 = e4.__wdc || (e4.__wdc = () => {
    let t6 = n2;
    for (; t6; ) {
      if (t6.isDeactivated) return;
      t6 = t6.parent;
    }
    return e4();
  });
  if (injectHook(t5, r6, n2), n2) {
    let e5 = n2.parent;
    for (; e5 && e5.parent; ) isKeepAlive(e5.parent.vnode) && injectToKeepAliveRoot(r6, t5, n2, e5), e5 = e5.parent;
  }
}
function injectToKeepAliveRoot(e4, t5, n2, r6) {
  const s2 = injectHook(t5, e4, r6, true);
  We2(() => {
    remove(r6[t5], s2);
  }, n2);
}
function injectHook(e4, t5, n2 = yt2, r6 = false) {
  if (n2) {
    const s2 = n2[e4] || (n2[e4] = []), o4 = t5.__weh || (t5.__weh = (...r7) => {
      pauseTracking();
      const s3 = setCurrentInstance(n2), o5 = callWithAsyncErrorHandling(t5, n2, e4, r7);
      return s3(), resetTracking(), o5;
    });
    return r6 ? s2.unshift(o4) : s2.push(o4), o4;
  }
}
function onErrorCaptured(e4, t5 = yt2) {
  injectHook("ec", e4, t5);
}
function resolveComponent(e4, t5) {
  return resolveAsset(Ke2, e4, true, t5) || e4;
}
function resolveDynamicComponent(e4) {
  return isString(e4) ? resolveAsset(Ke2, e4, false) || e4 : e4 || Ze2;
}
function resolveAsset(e4, t5, n2 = true, r6 = false) {
  const s2 = Ie2 || yt2;
  if (s2) {
    const n3 = s2.type;
    {
      const e5 = getComponentName(n3, false);
      if (e5 && (e5 === t5 || e5 === H(t5) || e5 === I2(H(t5)))) return n3;
    }
    const o4 = resolve(s2[e4] || n3[e4], t5) || resolve(s2.appContext[e4], t5);
    return !o4 && r6 ? n3 : o4;
  }
}
function resolve(e4, t5) {
  return e4 && (e4[t5] || e4[H(t5)] || e4[I2(H(t5))]);
}
function normalizePropsOrEmits(e4) {
  return $(e4) ? e4.reduce((e5, t5) => (e5[t5] = null, e5), {}) : e4;
}
function withAsyncContext(e4) {
  const t5 = getCurrentInstance();
  let n2 = e4();
  return unsetCurrentInstance(), isPromise(n2) && (n2 = n2.catch((e5) => {
    throw setCurrentInstance(t5), e5;
  })), [n2, () => setCurrentInstance(t5)];
}
function applyOptions(e4) {
  const t5 = resolveMergedOptions(e4), n2 = e4.proxy, r6 = e4.ctx;
  Ye2 = false, t5.beforeCreate && callHook(t5.beforeCreate, e4, "bc");
  const { data: s2, computed: o4, methods: i3, watch: a5, provide: l3, inject: c3, created: u2, beforeMount: p5, mounted: f5, beforeUpdate: d6, updated: g4, activated: m4, deactivated: y3, beforeDestroy: v3, beforeUnmount: b3, destroyed: _4, unmounted: k3, render: w3, renderTracked: S4, renderTriggered: C3, errorCaptured: R3, serverPrefetch: x4, expose: A3, inheritAttrs: T3, components: O3, directives: P4, filters: j3 } = t5;
  if (c3 && function(e5, t6) {
    $(e5) && (e5 = normalizeInject(e5));
    for (const n3 in e5) {
      const r7 = e5[n3];
      let s3;
      s3 = isObject(r7) ? "default" in r7 ? inject(r7.from || n3, r7.default, true) : inject(r7.from || n3) : inject(r7), isRef(s3) ? Object.defineProperty(t6, n3, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => s3.value, "get"), set: /* @__PURE__ */ __name((e6) => s3.value = e6, "set") }) : t6[n3] = s3;
    }
  }(c3, r6, null), i3) for (const e5 in i3) {
    const t6 = i3[e5];
    isFunction(t6) && (r6[e5] = t6.bind(n2));
  }
  if (s2) {
    const t6 = s2.call(n2, n2);
    isObject(t6) && (e4.data = reactive(t6));
  }
  if (Ye2 = true, o4) for (const e5 in o4) {
    const t6 = o4[e5], s3 = isFunction(t6) ? t6.bind(n2, n2) : isFunction(t6.get) ? t6.get.bind(n2, n2) : NOOP, i4 = !isFunction(t6) && isFunction(t6.set) ? t6.set.bind(n2) : NOOP, a6 = computed({ get: s3, set: i4 });
    Object.defineProperty(r6, e5, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a6.value, "get"), set: /* @__PURE__ */ __name((e6) => a6.value = e6, "set") });
  }
  if (a5) for (const e5 in a5) createWatcher(a5[e5], r6, n2, e5);
  if (l3) {
    const e5 = isFunction(l3) ? l3.call(n2) : l3;
    Reflect.ownKeys(e5).forEach((t6) => {
      provide(t6, e5[t6]);
    });
  }
  function registerLifecycleHook(e5, t6) {
    $(t6) ? t6.forEach((t7) => e5(t7.bind(n2))) : t6 && e5(t6.bind(n2));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (u2 && callHook(u2, e4, "c"), registerLifecycleHook(Be2, p5), registerLifecycleHook(Le2, f5), registerLifecycleHook(Fe2, d6), registerLifecycleHook(Ue2, g4), registerLifecycleHook(onActivated, m4), registerLifecycleHook(onDeactivated, y3), registerLifecycleHook(onErrorCaptured, R3), registerLifecycleHook(Ge2, S4), registerLifecycleHook(Je2, C3), registerLifecycleHook(ze2, b3), registerLifecycleHook(We2, k3), registerLifecycleHook(qe, x4), $(A3)) if (A3.length) {
    const t6 = e4.exposed || (e4.exposed = {});
    A3.forEach((e5) => {
      Object.defineProperty(t6, e5, { get: /* @__PURE__ */ __name(() => n2[e5], "get"), set: /* @__PURE__ */ __name((t7) => n2[e5] = t7, "set") });
    });
  } else e4.exposed || (e4.exposed = {});
  w3 && e4.render === NOOP && (e4.render = w3), null != T3 && (e4.inheritAttrs = T3), O3 && (e4.components = O3), P4 && (e4.directives = P4), x4 && markAsyncBoundary(e4);
}
function callHook(e4, t5, n2) {
  callWithAsyncErrorHandling($(e4) ? e4.map((e5) => e5.bind(t5.proxy)) : e4.bind(t5.proxy), t5, n2);
}
function createWatcher(e4, t5, n2, r6) {
  let s2 = r6.includes(".") ? createPathGetter(n2, r6) : () => n2[r6];
  if (isString(e4)) {
    const n3 = t5[e4];
    isFunction(n3) && watch(s2, n3);
  } else if (isFunction(e4)) watch(s2, e4.bind(n2));
  else if (isObject(e4)) if ($(e4)) e4.forEach((e5) => createWatcher(e5, t5, n2, r6));
  else {
    const r7 = isFunction(e4.handler) ? e4.handler.bind(n2) : t5[e4.handler];
    isFunction(r7) && watch(s2, r7, e4);
  }
}
function resolveMergedOptions(e4) {
  const t5 = e4.type, { mixins: n2, extends: r6 } = t5, { mixins: s2, optionsCache: o4, config: { optionMergeStrategies: i3 } } = e4.appContext, a5 = o4.get(t5);
  let l3;
  return a5 ? l3 = a5 : s2.length || n2 || r6 ? (l3 = {}, s2.length && s2.forEach((e5) => mergeOptions2(l3, e5, i3, true)), mergeOptions2(l3, t5, i3)) : l3 = t5, isObject(t5) && o4.set(t5, l3), l3;
}
function mergeOptions2(e4, t5, n2, r6 = false) {
  const { mixins: s2, extends: o4 } = t5;
  o4 && mergeOptions2(e4, o4, n2, true), s2 && s2.forEach((t6) => mergeOptions2(e4, t6, n2, true));
  for (const s3 in t5) if (r6 && "expose" === s3) ;
  else {
    const r7 = et2[s3] || n2 && n2[s3];
    e4[s3] = r7 ? r7(e4[s3], t5[s3]) : t5[s3];
  }
  return e4;
}
function mergeDataFn(e4, t5) {
  return t5 ? e4 ? function() {
    return T(isFunction(e4) ? e4.call(this, this) : e4, isFunction(t5) ? t5.call(this, this) : t5);
  } : t5 : e4;
}
function normalizeInject(e4) {
  if ($(e4)) {
    const t5 = {};
    for (let n2 = 0; n2 < e4.length; n2++) t5[e4[n2]] = e4[n2];
    return t5;
  }
  return e4;
}
function mergeAsArray(e4, t5) {
  return e4 ? [...new Set([].concat(e4, t5))] : t5;
}
function mergeObjectOptions(e4, t5) {
  return e4 ? T(/* @__PURE__ */ Object.create(null), e4, t5) : t5;
}
function mergeEmitsOrPropsOptions(e4, t5) {
  return e4 ? $(e4) && $(t5) ? [.../* @__PURE__ */ new Set([...e4, ...t5])] : T(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e4), normalizePropsOrEmits(null != t5 ? t5 : {})) : t5;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e4, t5) {
  return function(t6, n2 = null) {
    isFunction(t6) || (t6 = T({}, t6)), null == n2 || isObject(n2) || (n2 = null);
    const r6 = createAppContext(), s2 = /* @__PURE__ */ new WeakSet(), o4 = [];
    let i3 = false;
    const a5 = r6.app = { _uid: tt2++, _component: t6, _props: n2, _container: null, _context: r6, _instance: null, version: wt2, get config() {
      return r6.config;
    }, set config(e5) {
    }, use: /* @__PURE__ */ __name((e5, ...t7) => (s2.has(e5) || (e5 && isFunction(e5.install) ? (s2.add(e5), e5.install(a5, ...t7)) : isFunction(e5) && (s2.add(e5), e5(a5, ...t7))), a5), "use"), mixin: /* @__PURE__ */ __name((e5) => (r6.mixins.includes(e5) || r6.mixins.push(e5), a5), "mixin"), component: /* @__PURE__ */ __name((e5, t7) => t7 ? (r6.components[e5] = t7, a5) : r6.components[e5], "component"), directive: /* @__PURE__ */ __name((e5, t7) => t7 ? (r6.directives[e5] = t7, a5) : r6.directives[e5], "directive"), mount(s3, o5, l3) {
      if (!i3) {
        const o6 = a5._ceVNode || createVNode(t6, n2);
        return o6.appContext = r6, true === l3 ? l3 = "svg" : false === l3 && (l3 = void 0), e4(o6, s3, l3), i3 = true, a5._container = s3, s3.__vue_app__ = a5, getComponentPublicInstance(o6.component);
      }
    }, onUnmount(e5) {
      o4.push(e5);
    }, unmount() {
      i3 && (callWithAsyncErrorHandling(o4, a5._instance, 16), e4(null, a5._container), delete a5._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e5, t7) => (r6.provides[e5] = t7, a5), "provide"), runWithContext(e5) {
      const t7 = nt2;
      nt2 = a5;
      try {
        return e5();
      } finally {
        nt2 = t7;
      }
    } };
    return a5;
  };
}
function provide(e4, t5) {
  if (yt2) {
    let n2 = yt2.provides;
    const r6 = yt2.parent && yt2.parent.provides;
    r6 === n2 && (n2 = yt2.provides = Object.create(r6)), n2[e4] = t5;
  } else ;
}
function inject(e4, t5, n2 = false) {
  const r6 = yt2 || Ie2;
  if (r6 || nt2) {
    const s2 = nt2 ? nt2._context.provides : r6 ? null == r6.parent ? r6.vnode.appContext && r6.vnode.appContext.provides : r6.parent.provides : void 0;
    if (s2 && e4 in s2) return s2[e4];
    if (arguments.length > 1) return n2 && isFunction(t5) ? t5.call(r6 && r6.proxy) : t5;
  }
}
function hasInjectionContext() {
  return !!(yt2 || Ie2 || nt2);
}
function setFullProps(e4, t5, n2, r6) {
  const [s2, o4] = e4.propsOptions;
  let i3, a5 = false;
  if (t5) for (let l3 in t5) {
    if (j(l3)) continue;
    const c3 = t5[l3];
    let u2;
    s2 && hasOwn(s2, u2 = H(l3)) ? o4 && o4.includes(u2) ? (i3 || (i3 = {}))[u2] = c3 : n2[u2] = c3 : isEmitListener(e4.emitsOptions, l3) || l3 in r6 && c3 === r6[l3] || (r6[l3] = c3, a5 = true);
  }
  if (o4) {
    const t6 = toRaw(n2), r7 = i3 || x2;
    for (let i4 = 0; i4 < o4.length; i4++) {
      const a6 = o4[i4];
      n2[a6] = resolvePropValue(s2, t6, a6, r7[a6], e4, !hasOwn(r7, a6));
    }
  }
  return a5;
}
function resolvePropValue(e4, t5, n2, r6, s2, o4) {
  const i3 = e4[n2];
  if (null != i3) {
    const e5 = hasOwn(i3, "default");
    if (e5 && void 0 === r6) {
      const e6 = i3.default;
      if (i3.type !== Function && !i3.skipFactory && isFunction(e6)) {
        const { propsDefaults: o5 } = s2;
        if (n2 in o5) r6 = o5[n2];
        else {
          const i4 = setCurrentInstance(s2);
          r6 = o5[n2] = e6.call(null, t5), i4();
        }
      } else r6 = e6;
      s2.ce && s2.ce._setProp(n2, r6);
    }
    i3[0] && (o4 && !e5 ? r6 = false : !i3[1] || "" !== r6 && r6 !== N(n2) || (r6 = true));
  }
  return r6;
}
function normalizePropsOptions(e4, t5, n2 = false) {
  const r6 = n2 ? st2 : t5.propsCache, s2 = r6.get(e4);
  if (s2) return s2;
  const o4 = e4.props, i3 = {}, a5 = [];
  let l3 = false;
  if (!isFunction(e4)) {
    const extendProps = /* @__PURE__ */ __name((e5) => {
      l3 = true;
      const [n3, r7] = normalizePropsOptions(e5, t5, true);
      T(i3, n3), r7 && a5.push(...r7);
    }, "extendProps");
    !n2 && t5.mixins.length && t5.mixins.forEach(extendProps), e4.extends && extendProps(e4.extends), e4.mixins && e4.mixins.forEach(extendProps);
  }
  if (!o4 && !l3) return isObject(e4) && r6.set(e4, A), A;
  if ($(o4)) for (let e5 = 0; e5 < o4.length; e5++) {
    const t6 = H(o4[e5]);
    validatePropName(t6) && (i3[t6] = x2);
  }
  else if (o4) for (const e5 in o4) {
    const t6 = H(e5);
    if (validatePropName(t6)) {
      const n3 = o4[e5], r7 = i3[t6] = $(n3) || isFunction(n3) ? { type: n3 } : T({}, n3), s3 = r7.type;
      let l4 = false, c4 = true;
      if ($(s3)) for (let e6 = 0; e6 < s3.length; ++e6) {
        const t7 = s3[e6], n4 = isFunction(t7) && t7.name;
        if ("Boolean" === n4) {
          l4 = true;
          break;
        }
        "String" === n4 && (c4 = false);
      }
      else l4 = isFunction(s3) && "Boolean" === s3.name;
      r7[0] = l4, r7[1] = c4, (l4 || hasOwn(r7, "default")) && a5.push(t6);
    }
  }
  const c3 = [i3, a5];
  return isObject(e4) && r6.set(e4, c3), c3;
}
function validatePropName(e4) {
  return "$" !== e4[0] && !j(e4);
}
function createRenderer(e4) {
  return function(e5) {
    getGlobalThis().__VUE__ = true;
    const { insert: t5, remove: n2, patchProp: r6, createElement: s2, createText: o4, createComment: i3, setText: a5, setElementText: l3, parentNode: c3, nextSibling: u2, setScopeId: p5 = NOOP, insertStaticContent: f5 } = e5, patch = /* @__PURE__ */ __name((e6, t6, n3, r7 = null, s3 = null, o5 = null, i4 = void 0, a6 = null, l4 = !!t6.dynamicChildren) => {
      if (e6 === t6) return;
      e6 && !isSameVNodeType(e6, t6) && (r7 = getNextHostNode(e6), unmount(e6, s3, o5, true), e6 = null), -2 === t6.patchFlag && (l4 = false, t6.dynamicChildren = null);
      const { type: c4, ref: u3, shapeFlag: p6 } = t6;
      switch (c4) {
        case ct2:
          processText(e6, t6, n3, r7);
          break;
        case ut2:
          processCommentNode(e6, t6, n3, r7);
          break;
        case pt2:
          null == e6 && mountStaticNode(t6, n3, r7, i4);
          break;
        case lt:
          processFragment(e6, t6, n3, r7, s3, o5, i4, a6, l4);
          break;
        default:
          1 & p6 ? processElement(e6, t6, n3, r7, s3, o5, i4, a6, l4) : 6 & p6 ? processComponent(e6, t6, n3, r7, s3, o5, i4, a6, l4) : (64 & p6 || 128 & p6) && c4.process(e6, t6, n3, r7, s3, o5, i4, a6, l4, g4);
      }
      null != u3 && s3 && setRef(u3, e6 && e6.ref, o5, t6 || e6, !t6);
    }, "patch"), processText = /* @__PURE__ */ __name((e6, n3, r7, s3) => {
      if (null == e6) t5(n3.el = o4(n3.children), r7, s3);
      else {
        const t6 = n3.el = e6.el;
        n3.children !== e6.children && a5(t6, n3.children);
      }
    }, "processText"), processCommentNode = /* @__PURE__ */ __name((e6, n3, r7, s3) => {
      null == e6 ? t5(n3.el = i3(n3.children || ""), r7, s3) : n3.el = e6.el;
    }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e6, t6, n3, r7) => {
      [e6.el, e6.anchor] = f5(e6.children, t6, n3, r7, e6.el, e6.anchor);
    }, "mountStaticNode"), moveStaticNode = /* @__PURE__ */ __name(({ el: e6, anchor: n3 }, r7, s3) => {
      let o5;
      for (; e6 && e6 !== n3; ) o5 = u2(e6), t5(e6, r7, s3), e6 = o5;
      t5(n3, r7, s3);
    }, "moveStaticNode"), removeStaticNode = /* @__PURE__ */ __name(({ el: e6, anchor: t6 }) => {
      let r7;
      for (; e6 && e6 !== t6; ) r7 = u2(e6), n2(e6), e6 = r7;
      n2(t6);
    }, "removeStaticNode"), processElement = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, l4) => {
      "svg" === t6.type ? i4 = "svg" : "math" === t6.type && (i4 = "mathml"), null == e6 ? mountElement(t6, n3, r7, s3, o5, i4, a6, l4) : patchElement(e6, t6, s3, o5, i4, a6, l4);
    }, "processElement"), mountElement = /* @__PURE__ */ __name((e6, n3, o5, i4, a6, c4, u3, p6) => {
      let f6, d7;
      const { props: g5, shapeFlag: m5, transition: y3, dirs: v3 } = e6;
      if (f6 = e6.el = s2(e6.type, c4, g5 && g5.is, g5), 8 & m5 ? l3(f6, e6.children) : 16 & m5 && mountChildren(e6.children, f6, null, i4, a6, resolveChildrenNamespace(e6, c4), u3, p6), v3 && invokeDirectiveHook(e6, null, i4, "created"), setScopeId(f6, e6, e6.scopeId, u3, i4), g5) {
        for (const e7 in g5) "value" === e7 || j(e7) || r6(f6, e7, null, g5[e7], c4, i4);
        "value" in g5 && r6(f6, "value", null, g5.value, c4), (d7 = g5.onVnodeBeforeMount) && invokeVNodeHook(d7, i4, e6);
      }
      v3 && invokeDirectiveHook(e6, null, i4, "beforeMount");
      const b3 = function(e7, t6) {
        return (!e7 || e7 && !e7.pendingBranch) && t6 && !t6.persisted;
      }(a6, y3);
      b3 && y3.beforeEnter(f6), t5(f6, n3, o5), ((d7 = g5 && g5.onVnodeMounted) || b3 || v3) && queuePostRenderEffect(() => {
        d7 && invokeVNodeHook(d7, i4, e6), b3 && y3.enter(f6), v3 && invokeDirectiveHook(e6, null, i4, "mounted");
      }, a6);
    }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e6, t6, n3, r7, s3) => {
      if (n3 && p5(e6, n3), r7) for (let t7 = 0; t7 < r7.length; t7++) p5(e6, r7[t7]);
      if (s3) {
        let n4 = s3.subTree;
        if (t6 === n4 || isSuspense(n4.type) && (n4.ssContent === t6 || n4.ssFallback === t6)) {
          const t7 = s3.vnode;
          setScopeId(e6, t7, t7.scopeId, t7.slotScopeIds, s3.parent);
        }
      }
    }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, l4 = 0) => {
      for (let c4 = l4; c4 < e6.length; c4++) {
        const l5 = e6[c4] = a6 ? cloneIfMounted(e6[c4]) : normalizeVNode$1(e6[c4]);
        patch(null, l5, t6, n3, r7, s3, o5, i4, a6);
      }
    }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e6, t6, n3, s3, o5, i4, a6) => {
      const c4 = t6.el = e6.el;
      let { patchFlag: u3, dynamicChildren: p6, dirs: f6 } = t6;
      u3 |= 16 & e6.patchFlag;
      const d7 = e6.props || x2, g5 = t6.props || x2;
      let m5;
      if (n3 && toggleRecurse(n3, false), (m5 = g5.onVnodeBeforeUpdate) && invokeVNodeHook(m5, n3, t6, e6), f6 && invokeDirectiveHook(t6, e6, n3, "beforeUpdate"), n3 && toggleRecurse(n3, true), (d7.innerHTML && null == g5.innerHTML || d7.textContent && null == g5.textContent) && l3(c4, ""), p6 ? patchBlockChildren(e6.dynamicChildren, p6, c4, n3, s3, resolveChildrenNamespace(t6, o5), i4) : a6 || patchChildren(e6, t6, c4, null, n3, s3, resolveChildrenNamespace(t6, o5), i4, false), u3 > 0) {
        if (16 & u3) patchProps(c4, d7, g5, n3, o5);
        else if (2 & u3 && d7.class !== g5.class && r6(c4, "class", null, g5.class, o5), 4 & u3 && r6(c4, "style", d7.style, g5.style, o5), 8 & u3) {
          const e7 = t6.dynamicProps;
          for (let t7 = 0; t7 < e7.length; t7++) {
            const s4 = e7[t7], i5 = d7[s4], a7 = g5[s4];
            a7 === i5 && "value" !== s4 || r6(c4, s4, i5, a7, o5, n3);
          }
        }
        1 & u3 && e6.children !== t6.children && l3(c4, t6.children);
      } else a6 || null != p6 || patchProps(c4, d7, g5, n3, o5);
      ((m5 = g5.onVnodeUpdated) || f6) && queuePostRenderEffect(() => {
        m5 && invokeVNodeHook(m5, n3, t6, e6), f6 && invokeDirectiveHook(t6, e6, n3, "updated");
      }, s3);
    }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4) => {
      for (let a6 = 0; a6 < t6.length; a6++) {
        const l4 = e6[a6], u3 = t6[a6], p6 = l4.el && (l4.type === lt || !isSameVNodeType(l4, u3) || 70 & l4.shapeFlag) ? c3(l4.el) : n3;
        patch(l4, u3, p6, null, r7, s3, o5, i4, true);
      }
    }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e6, t6, n3, s3, o5) => {
      if (t6 !== n3) {
        if (t6 !== x2) for (const i4 in t6) j(i4) || i4 in n3 || r6(e6, i4, t6[i4], null, o5, s3);
        for (const i4 in n3) {
          if (j(i4)) continue;
          const a6 = n3[i4], l4 = t6[i4];
          a6 !== l4 && "value" !== i4 && r6(e6, i4, l4, a6, o5, s3);
        }
        "value" in n3 && r6(e6, "value", t6.value, n3.value, o5);
      }
    }, "patchProps"), processFragment = /* @__PURE__ */ __name((e6, n3, r7, s3, i4, a6, l4, c4, u3) => {
      const p6 = n3.el = e6 ? e6.el : o4(""), f6 = n3.anchor = e6 ? e6.anchor : o4("");
      let { patchFlag: d7, dynamicChildren: g5, slotScopeIds: m5 } = n3;
      m5 && (c4 = c4 ? c4.concat(m5) : m5), null == e6 ? (t5(p6, r7, s3), t5(f6, r7, s3), mountChildren(n3.children || [], r7, f6, i4, a6, l4, c4, u3)) : d7 > 0 && 64 & d7 && g5 && e6.dynamicChildren ? (patchBlockChildren(e6.dynamicChildren, g5, r7, i4, a6, l4, c4), (null != n3.key || i4 && n3 === i4.subTree) && traverseStaticChildren(e6, n3, true)) : patchChildren(e6, n3, r7, f6, i4, a6, l4, c4, u3);
    }, "processFragment"), processComponent = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, l4) => {
      t6.slotScopeIds = a6, null == e6 ? 512 & t6.shapeFlag ? s3.ctx.activate(t6, n3, r7, i4, l4) : mountComponent(t6, n3, r7, s3, o5, i4, l4) : updateComponent(e6, t6, l4);
    }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4) => {
      const a6 = e6.component = createComponentInstance$1(e6, r7, s3);
      if (isKeepAlive(e6) && (a6.ctx.renderer = g4), setupComponent$1(a6, false, i4), a6.asyncDep) {
        if (s3 && s3.registerDep(a6, setupRenderEffect, i4), !e6.el) {
          const e7 = a6.subTree = createVNode(ut2);
          processCommentNode(null, e7, t6, n3);
        }
      } else setupRenderEffect(a6, e6, t6, n3, s3, o5, i4);
    }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e6, t6, n3) => {
      const r7 = t6.component = e6.component;
      if (function(e7, t7, n4) {
        const { props: r8, children: s3, component: o5 } = e7, { props: i4, children: a6, patchFlag: l4 } = t7, c4 = o5.emitsOptions;
        if (t7.dirs || t7.transition) return true;
        if (!(n4 && l4 >= 0)) return !(!s3 && !a6 || a6 && a6.$stable) || r8 !== i4 && (r8 ? !i4 || hasPropsChanged(r8, i4, c4) : !!i4);
        if (1024 & l4) return true;
        if (16 & l4) return r8 ? hasPropsChanged(r8, i4, c4) : !!i4;
        if (8 & l4) {
          const e8 = t7.dynamicProps;
          for (let t8 = 0; t8 < e8.length; t8++) {
            const n5 = e8[t8];
            if (i4[n5] !== r8[n5] && !isEmitListener(c4, n5)) return true;
          }
        }
        return false;
      }(e6, t6, n3)) {
        if (r7.asyncDep && !r7.asyncResolved) return void updateComponentPreRender(r7, t6, n3);
        r7.next = t6, r7.update();
      } else t6.el = e6.el, r7.vnode = t6;
    }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4) => {
      const componentUpdateFn = /* @__PURE__ */ __name(() => {
        if (e6.isMounted) {
          let { next: t7, bu: n4, u: r8, parent: a7, vnode: l5 } = e6;
          {
            const n5 = locateNonHydratedAsyncRoot(e6);
            if (n5) return t7 && (t7.el = l5.el, updateComponentPreRender(e6, t7, i4)), void n5.asyncDep.then(() => {
              e6.isUnmounted || componentUpdateFn();
            });
          }
          let u4, p6 = t7;
          toggleRecurse(e6, false), t7 ? (t7.el = l5.el, updateComponentPreRender(e6, t7, i4)) : t7 = l5, n4 && invokeArrayFns(n4), (u4 = t7.props && t7.props.onVnodeBeforeUpdate) && invokeVNodeHook(u4, a7, t7, l5), toggleRecurse(e6, true);
          const f6 = renderComponentRoot$1(e6), d7 = e6.subTree;
          e6.subTree = f6, patch(d7, f6, c3(d7.el), getNextHostNode(d7), e6, s3, o5), t7.el = f6.el, null === p6 && updateHOCHostEl(e6, f6.el), r8 && queuePostRenderEffect(r8, s3), (u4 = t7.props && t7.props.onVnodeUpdated) && queuePostRenderEffect(() => invokeVNodeHook(u4, a7, t7, l5), s3);
        } else {
          let i5;
          const { el: a7, props: l5 } = t6, { bm: c4, m: u4, parent: p6, root: f6, type: d7 } = e6, g5 = isAsyncWrapper(t6);
          toggleRecurse(e6, false), c4 && invokeArrayFns(c4), !g5 && (i5 = l5 && l5.onVnodeBeforeMount) && invokeVNodeHook(i5, p6, t6), toggleRecurse(e6, true);
          {
            f6.ce && f6.ce._injectChildStyle(d7);
            const i6 = e6.subTree = renderComponentRoot$1(e6);
            patch(null, i6, n3, r7, e6, s3, o5), t6.el = i6.el;
          }
          if (u4 && queuePostRenderEffect(u4, s3), !g5 && (i5 = l5 && l5.onVnodeMounted)) {
            const e7 = t6;
            queuePostRenderEffect(() => invokeVNodeHook(i5, p6, e7), s3);
          }
          (256 & t6.shapeFlag || p6 && isAsyncWrapper(p6.vnode) && 256 & p6.vnode.shapeFlag) && e6.a && queuePostRenderEffect(e6.a, s3), e6.isMounted = true, t6 = n3 = r7 = null;
        }
      }, "componentUpdateFn");
      e6.scope.on();
      const a6 = e6.effect = new ReactiveEffect(componentUpdateFn);
      e6.scope.off();
      const l4 = e6.update = a6.run.bind(a6), u3 = e6.job = a6.runIfDirty.bind(a6);
      u3.i = e6, u3.id = e6.uid, a6.scheduler = () => queueJob(u3), toggleRecurse(e6, true), l4();
    }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e6, t6, n3) => {
      t6.component = e6;
      const r7 = e6.vnode.props;
      e6.vnode = t6, e6.next = null, function(e7, t7, n4, r8) {
        const { props: s3, attrs: o5, vnode: { patchFlag: i4 } } = e7, a6 = toRaw(s3), [l4] = e7.propsOptions;
        let c4 = false;
        if (!(r8 || i4 > 0) || 16 & i4) {
          let r9;
          setFullProps(e7, t7, s3, o5) && (c4 = true);
          for (const o6 in a6) t7 && (hasOwn(t7, o6) || (r9 = N(o6)) !== o6 && hasOwn(t7, r9)) || (l4 ? !n4 || void 0 === n4[o6] && void 0 === n4[r9] || (s3[o6] = resolvePropValue(l4, a6, o6, void 0, e7, true)) : delete s3[o6]);
          if (o5 !== a6) for (const e8 in o5) t7 && hasOwn(t7, e8) || (delete o5[e8], c4 = true);
        } else if (8 & i4) {
          const n5 = e7.vnode.dynamicProps;
          for (let r9 = 0; r9 < n5.length; r9++) {
            let i5 = n5[r9];
            if (isEmitListener(e7.emitsOptions, i5)) continue;
            const u3 = t7[i5];
            if (l4) if (hasOwn(o5, i5)) u3 !== o5[i5] && (o5[i5] = u3, c4 = true);
            else {
              const t8 = H(i5);
              s3[t8] = resolvePropValue(l4, a6, t8, u3, e7, false);
            }
            else u3 !== o5[i5] && (o5[i5] = u3, c4 = true);
          }
        }
        c4 && trigger(e7.attrs, "set", "");
      }(e6, t6.props, r7, n3), ((e7, t7, n4) => {
        const { vnode: r8, slots: s3 } = e7;
        let o5 = true, i4 = x2;
        if (32 & r8.shapeFlag) {
          const e8 = t7._;
          e8 ? n4 && 1 === e8 ? o5 = false : assignSlots(s3, t7, n4) : (o5 = !t7.$stable, normalizeObjectSlots(t7, s3)), i4 = t7;
        } else t7 && (normalizeVNodeSlots(e7, t7), i4 = { default: 1 });
        if (o5) for (const e8 in s3) isInternalKey(e8) || null != i4[e8] || delete s3[e8];
      })(e6, t6.children, n3), pauseTracking(), flushPreFlushCbs(e6), resetTracking();
    }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, c4 = false) => {
      const u3 = e6 && e6.children, p6 = e6 ? e6.shapeFlag : 0, f6 = t6.children, { patchFlag: d7, shapeFlag: g5 } = t6;
      if (d7 > 0) {
        if (128 & d7) return void patchKeyedChildren(u3, f6, n3, r7, s3, o5, i4, a6, c4);
        if (256 & d7) return void patchUnkeyedChildren(u3, f6, n3, r7, s3, o5, i4, a6, c4);
      }
      8 & g5 ? (16 & p6 && unmountChildren(u3, s3, o5), f6 !== u3 && l3(n3, f6)) : 16 & p6 ? 16 & g5 ? patchKeyedChildren(u3, f6, n3, r7, s3, o5, i4, a6, c4) : unmountChildren(u3, s3, o5, true) : (8 & p6 && l3(n3, ""), 16 & g5 && mountChildren(f6, n3, r7, s3, o5, i4, a6, c4));
    }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, l4) => {
      t6 = t6 || A;
      const c4 = (e6 = e6 || A).length, u3 = t6.length, p6 = Math.min(c4, u3);
      let f6;
      for (f6 = 0; f6 < p6; f6++) {
        const r8 = t6[f6] = l4 ? cloneIfMounted(t6[f6]) : normalizeVNode$1(t6[f6]);
        patch(e6[f6], r8, n3, null, s3, o5, i4, a6, l4);
      }
      c4 > u3 ? unmountChildren(e6, s3, o5, true, false, p6) : mountChildren(t6, n3, r7, s3, o5, i4, a6, l4, p6);
    }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e6, t6, n3, r7, s3, o5, i4, a6, l4) => {
      let c4 = 0;
      const u3 = t6.length;
      let p6 = e6.length - 1, f6 = u3 - 1;
      for (; c4 <= p6 && c4 <= f6; ) {
        const r8 = e6[c4], u4 = t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]);
        if (!isSameVNodeType(r8, u4)) break;
        patch(r8, u4, n3, null, s3, o5, i4, a6, l4), c4++;
      }
      for (; c4 <= p6 && c4 <= f6; ) {
        const r8 = e6[p6], c5 = t6[f6] = l4 ? cloneIfMounted(t6[f6]) : normalizeVNode$1(t6[f6]);
        if (!isSameVNodeType(r8, c5)) break;
        patch(r8, c5, n3, null, s3, o5, i4, a6, l4), p6--, f6--;
      }
      if (c4 > p6) {
        if (c4 <= f6) {
          const e7 = f6 + 1, p7 = e7 < u3 ? t6[e7].el : r7;
          for (; c4 <= f6; ) patch(null, t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]), n3, p7, s3, o5, i4, a6, l4), c4++;
        }
      } else if (c4 > f6) for (; c4 <= p6; ) unmount(e6[c4], s3, o5, true), c4++;
      else {
        const d7 = c4, g5 = c4, m5 = /* @__PURE__ */ new Map();
        for (c4 = g5; c4 <= f6; c4++) {
          const e7 = t6[c4] = l4 ? cloneIfMounted(t6[c4]) : normalizeVNode$1(t6[c4]);
          null != e7.key && m5.set(e7.key, c4);
        }
        let y3, v3 = 0;
        const b3 = f6 - g5 + 1;
        let _4 = false, k3 = 0;
        const w3 = new Array(b3);
        for (c4 = 0; c4 < b3; c4++) w3[c4] = 0;
        for (c4 = d7; c4 <= p6; c4++) {
          const r8 = e6[c4];
          if (v3 >= b3) {
            unmount(r8, s3, o5, true);
            continue;
          }
          let u4;
          if (null != r8.key) u4 = m5.get(r8.key);
          else for (y3 = g5; y3 <= f6; y3++) if (0 === w3[y3 - g5] && isSameVNodeType(r8, t6[y3])) {
            u4 = y3;
            break;
          }
          void 0 === u4 ? unmount(r8, s3, o5, true) : (w3[u4 - g5] = c4 + 1, u4 >= k3 ? k3 = u4 : _4 = true, patch(r8, t6[u4], n3, null, s3, o5, i4, a6, l4), v3++);
        }
        const S4 = _4 ? function(e7) {
          const t7 = e7.slice(), n4 = [0];
          let r8, s4, o6, i5, a7;
          const l5 = e7.length;
          for (r8 = 0; r8 < l5; r8++) {
            const l6 = e7[r8];
            if (0 !== l6) {
              if (s4 = n4[n4.length - 1], e7[s4] < l6) {
                t7[r8] = s4, n4.push(r8);
                continue;
              }
              for (o6 = 0, i5 = n4.length - 1; o6 < i5; ) a7 = o6 + i5 >> 1, e7[n4[a7]] < l6 ? o6 = a7 + 1 : i5 = a7;
              l6 < e7[n4[o6]] && (o6 > 0 && (t7[r8] = n4[o6 - 1]), n4[o6] = r8);
            }
          }
          o6 = n4.length, i5 = n4[o6 - 1];
          for (; o6-- > 0; ) n4[o6] = i5, i5 = t7[i5];
          return n4;
        }(w3) : A;
        for (y3 = S4.length - 1, c4 = b3 - 1; c4 >= 0; c4--) {
          const e7 = g5 + c4, p7 = t6[e7], f7 = e7 + 1 < u3 ? t6[e7 + 1].el : r7;
          0 === w3[c4] ? patch(null, p7, n3, f7, s3, o5, i4, a6, l4) : _4 && (y3 < 0 || c4 !== S4[y3] ? move(p7, n3, f7, 2) : y3--);
        }
      }
    }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e6, n3, r7, s3, o5 = null) => {
      const { el: i4, type: a6, transition: l4, children: c4, shapeFlag: u3 } = e6;
      if (6 & u3) return void move(e6.component.subTree, n3, r7, s3);
      if (128 & u3) return void e6.suspense.move(n3, r7, s3);
      if (64 & u3) return void a6.move(e6, n3, r7, g4);
      if (a6 === lt) {
        t5(i4, n3, r7);
        for (let e7 = 0; e7 < c4.length; e7++) move(c4[e7], n3, r7, s3);
        return void t5(e6.anchor, n3, r7);
      }
      if (a6 === pt2) return void moveStaticNode(e6, n3, r7);
      if (2 !== s3 && 1 & u3 && l4) if (0 === s3) l4.beforeEnter(i4), t5(i4, n3, r7), queuePostRenderEffect(() => l4.enter(i4), o5);
      else {
        const { leave: e7, delayLeave: s4, afterLeave: o6 } = l4, remove22 = /* @__PURE__ */ __name(() => t5(i4, n3, r7), "remove2"), performLeave = /* @__PURE__ */ __name(() => {
          e7(i4, () => {
            remove22(), o6 && o6();
          });
        }, "performLeave");
        s4 ? s4(i4, remove22, performLeave) : performLeave();
      }
      else t5(i4, n3, r7);
    }, "move"), unmount = /* @__PURE__ */ __name((e6, t6, n3, r7 = false, s3 = false) => {
      const { type: o5, props: i4, ref: a6, children: l4, dynamicChildren: c4, shapeFlag: u3, patchFlag: p6, dirs: f6, cacheIndex: d7 } = e6;
      if (-2 === p6 && (s3 = false), null != a6 && setRef(a6, null, n3, e6, true), null != d7 && (t6.renderCache[d7] = void 0), 256 & u3) return void t6.ctx.deactivate(e6);
      const m5 = 1 & u3 && f6, y3 = !isAsyncWrapper(e6);
      let v3;
      if (y3 && (v3 = i4 && i4.onVnodeBeforeUnmount) && invokeVNodeHook(v3, t6, e6), 6 & u3) unmountComponent(e6.component, n3, r7);
      else {
        if (128 & u3) return void e6.suspense.unmount(n3, r7);
        m5 && invokeDirectiveHook(e6, null, t6, "beforeUnmount"), 64 & u3 ? e6.type.remove(e6, t6, n3, g4, r7) : c4 && !c4.hasOnce && (o5 !== lt || p6 > 0 && 64 & p6) ? unmountChildren(c4, t6, n3, false, true) : (o5 === lt && 384 & p6 || !s3 && 16 & u3) && unmountChildren(l4, t6, n3), r7 && remove2(e6);
      }
      (y3 && (v3 = i4 && i4.onVnodeUnmounted) || m5) && queuePostRenderEffect(() => {
        v3 && invokeVNodeHook(v3, t6, e6), m5 && invokeDirectiveHook(e6, null, t6, "unmounted");
      }, n3);
    }, "unmount"), remove2 = /* @__PURE__ */ __name((e6) => {
      const { type: t6, el: r7, anchor: s3, transition: o5 } = e6;
      if (t6 === lt) return void removeFragment(r7, s3);
      if (t6 === pt2) return void removeStaticNode(e6);
      const performRemove = /* @__PURE__ */ __name(() => {
        n2(r7), o5 && !o5.persisted && o5.afterLeave && o5.afterLeave();
      }, "performRemove");
      if (1 & e6.shapeFlag && o5 && !o5.persisted) {
        const { leave: t7, delayLeave: n3 } = o5, performLeave = /* @__PURE__ */ __name(() => t7(r7, performRemove), "performLeave");
        n3 ? n3(e6.el, performRemove, performLeave) : performLeave();
      } else performRemove();
    }, "remove"), removeFragment = /* @__PURE__ */ __name((e6, t6) => {
      let r7;
      for (; e6 !== t6; ) r7 = u2(e6), n2(e6), e6 = r7;
      n2(t6);
    }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e6, t6, n3) => {
      const { bum: r7, scope: s3, job: o5, subTree: i4, um: a6, m: l4, a: c4 } = e6;
      invalidateMount(l4), invalidateMount(c4), r7 && invokeArrayFns(r7), s3.stop(), o5 && (o5.flags |= 8, unmount(i4, e6, t6, n3)), a6 && queuePostRenderEffect(a6, t6), queuePostRenderEffect(() => {
        e6.isUnmounted = true;
      }, t6), t6 && t6.pendingBranch && !t6.isUnmounted && e6.asyncDep && !e6.asyncResolved && e6.suspenseId === t6.pendingId && (t6.deps--, 0 === t6.deps && t6.resolve());
    }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e6, t6, n3, r7 = false, s3 = false, o5 = 0) => {
      for (let i4 = o5; i4 < e6.length; i4++) unmount(e6[i4], t6, n3, r7, s3);
    }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e6) => {
      if (6 & e6.shapeFlag) return getNextHostNode(e6.component.subTree);
      if (128 & e6.shapeFlag) return e6.suspense.next();
      const t6 = u2(e6.anchor || e6.el), n3 = t6 && t6[De2];
      return n3 ? u2(n3) : t6;
    }, "getNextHostNode");
    let d6 = false;
    const render = /* @__PURE__ */ __name((e6, t6, n3) => {
      null == e6 ? t6._vnode && unmount(t6._vnode, null, null, true) : patch(t6._vnode || null, e6, t6, null, null, null, n3), t6._vnode = e6, d6 || (d6 = true, flushPreFlushCbs(), flushPostFlushCbs(), d6 = false);
    }, "render"), g4 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e5 };
    let m4;
    return { render, hydrate: m4, createApp: createAppAPI(render) };
  }(e4);
}
function resolveChildrenNamespace({ type: e4, props: t5 }, n2) {
  return "svg" === n2 && "foreignObject" === e4 || "mathml" === n2 && "annotation-xml" === e4 && t5 && t5.encoding && t5.encoding.includes("html") ? void 0 : n2;
}
function toggleRecurse({ effect: e4, job: t5 }, n2) {
  n2 ? (e4.flags |= 32, t5.flags |= 4) : (e4.flags &= -33, t5.flags &= -5);
}
function traverseStaticChildren(e4, t5, n2 = false) {
  const r6 = e4.children, s2 = t5.children;
  if ($(r6) && $(s2)) for (let e5 = 0; e5 < r6.length; e5++) {
    const t6 = r6[e5];
    let o4 = s2[e5];
    1 & o4.shapeFlag && !o4.dynamicChildren && ((o4.patchFlag <= 0 || 32 === o4.patchFlag) && (o4 = s2[e5] = cloneIfMounted(s2[e5]), o4.el = t6.el), n2 || -2 === o4.patchFlag || traverseStaticChildren(t6, o4)), o4.type === ct2 && (o4.el = t6.el);
  }
}
function locateNonHydratedAsyncRoot(e4) {
  const t5 = e4.subTree.component;
  if (t5) return t5.asyncDep && !t5.asyncResolved ? t5 : locateNonHydratedAsyncRoot(t5);
}
function invalidateMount(e4) {
  if (e4) for (let t5 = 0; t5 < e4.length; t5++) e4[t5].flags |= 8;
}
function watch(e4, t5, n2) {
  return doWatch(e4, t5, n2);
}
function doWatch(e4, t5, n2 = x2) {
  const { immediate: r6, deep: s2, flush: o4, once: i3 } = n2, a5 = T({}, n2), l3 = t5 && r6 || !t5 && "post" !== o4;
  let c3;
  if (_t2) {
    if ("sync" === o4) {
      const e5 = useSSRContext();
      c3 = e5.__watcherHandles || (e5.__watcherHandles = []);
    } else if (!l3) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const u2 = yt2;
  a5.call = (e5, t6, n3) => callWithAsyncErrorHandling(e5, u2, t6, n3);
  let p5 = false;
  "post" === o4 ? a5.scheduler = (e5) => {
    queuePostRenderEffect(e5, u2 && u2.suspense);
  } : "sync" !== o4 && (p5 = true, a5.scheduler = (e5, t6) => {
    t6 ? e5() : queueJob(e5);
  }), a5.augmentJob = (e5) => {
    t5 && (e5.flags |= 4), p5 && (e5.flags |= 2, u2 && (e5.id = u2.uid, e5.i = u2));
  };
  const f5 = watch$1(e4, t5, a5);
  return _t2 && (c3 ? c3.push(f5) : l3 && f5()), f5;
}
function instanceWatch(e4, t5, n2) {
  const r6 = this.proxy, s2 = isString(e4) ? e4.includes(".") ? createPathGetter(r6, e4) : () => r6[e4] : e4.bind(r6, r6);
  let o4;
  isFunction(t5) ? o4 = t5 : (o4 = t5.handler, n2 = t5);
  const i3 = setCurrentInstance(this), a5 = doWatch(s2, o4.bind(r6), n2);
  return i3(), a5;
}
function createPathGetter(e4, t5) {
  const n2 = t5.split(".");
  return () => {
    let t6 = e4;
    for (let e5 = 0; e5 < n2.length && t6; e5++) t6 = t6[n2[e5]];
    return t6;
  };
}
function emit2(e4, t5, ...n2) {
  if (e4.isUnmounted) return;
  const r6 = e4.vnode.props || x2;
  let s2 = n2;
  const o4 = t5.startsWith("update:"), i3 = o4 && getModelModifiers(r6, t5.slice(7));
  let a5;
  i3 && (i3.trim && (s2 = n2.map((e5) => isString(e5) ? e5.trim() : e5)), i3.number && (s2 = n2.map(looseToNumber)));
  let l3 = r6[a5 = V2(t5)] || r6[a5 = V2(H(t5))];
  !l3 && o4 && (l3 = r6[a5 = V2(N(t5))]), l3 && callWithAsyncErrorHandling(l3, e4, 6, s2);
  const c3 = r6[a5 + "Once"];
  if (c3) {
    if (e4.emitted) {
      if (e4.emitted[a5]) return;
    } else e4.emitted = {};
    e4.emitted[a5] = true, callWithAsyncErrorHandling(c3, e4, 6, s2);
  }
}
function normalizeEmitsOptions(e4, t5, n2 = false) {
  const r6 = t5.emitsCache, s2 = r6.get(e4);
  if (void 0 !== s2) return s2;
  const o4 = e4.emits;
  let i3 = {}, a5 = false;
  if (!isFunction(e4)) {
    const extendEmits = /* @__PURE__ */ __name((e5) => {
      const n3 = normalizeEmitsOptions(e5, t5, true);
      n3 && (a5 = true, T(i3, n3));
    }, "extendEmits");
    !n2 && t5.mixins.length && t5.mixins.forEach(extendEmits), e4.extends && extendEmits(e4.extends), e4.mixins && e4.mixins.forEach(extendEmits);
  }
  return o4 || a5 ? ($(o4) ? o4.forEach((e5) => i3[e5] = null) : T(i3, o4), isObject(e4) && r6.set(e4, i3), i3) : (isObject(e4) && r6.set(e4, null), null);
}
function isEmitListener(e4, t5) {
  return !(!e4 || !isOn(t5)) && (t5 = t5.slice(2).replace(/Once$/, ""), hasOwn(e4, t5[0].toLowerCase() + t5.slice(1)) || hasOwn(e4, N(t5)) || hasOwn(e4, t5));
}
function renderComponentRoot$1(e4) {
  const { type: t5, vnode: n2, proxy: r6, withProxy: s2, propsOptions: [o4], slots: i3, attrs: a5, emit: l3, render: c3, renderCache: u2, props: p5, data: f5, setupState: d6, ctx: g4, inheritAttrs: m4 } = e4, y3 = setCurrentRenderingInstance$1(e4);
  let v3, b3;
  try {
    if (4 & n2.shapeFlag) {
      const e5 = s2 || r6, t6 = e5;
      v3 = normalizeVNode$1(c3.call(t6, e5, u2, p5, d6, f5, g4)), b3 = a5;
    } else {
      const e5 = t5;
      0, v3 = normalizeVNode$1(e5.length > 1 ? e5(p5, { attrs: a5, slots: i3, emit: l3 }) : e5(p5, null)), b3 = t5.props ? a5 : getFunctionalFallthrough(a5);
    }
  } catch (t6) {
    ft2.length = 0, handleError(t6, e4, 1), v3 = createVNode(ut2);
  }
  let _4 = v3;
  if (b3 && false !== m4) {
    const e5 = Object.keys(b3), { shapeFlag: t6 } = _4;
    e5.length && 7 & t6 && (o4 && e5.some(isModelListener) && (b3 = filterModelListeners(b3, o4)), _4 = cloneVNode(_4, b3, false, true));
  }
  return n2.dirs && (_4 = cloneVNode(_4, null, false, true), _4.dirs = _4.dirs ? _4.dirs.concat(n2.dirs) : n2.dirs), n2.transition && setTransitionHooks(_4, n2.transition), v3 = _4, setCurrentRenderingInstance$1(y3), v3;
}
function hasPropsChanged(e4, t5, n2) {
  const r6 = Object.keys(t5);
  if (r6.length !== Object.keys(e4).length) return true;
  for (let s2 = 0; s2 < r6.length; s2++) {
    const o4 = r6[s2];
    if (t5[o4] !== e4[o4] && !isEmitListener(n2, o4)) return true;
  }
  return false;
}
function updateHOCHostEl({ vnode: e4, parent: t5 }, n2) {
  for (; t5; ) {
    const r6 = t5.subTree;
    if (r6.suspense && r6.suspense.activeBranch === e4 && (r6.el = e4.el), r6 !== e4) break;
    (e4 = t5.vnode).el = n2, t5 = t5.parent;
  }
}
function triggerEvent(e4, t5) {
  const n2 = e4.props && e4.props[t5];
  isFunction(n2) && n2();
}
function createSuspenseBoundary(e4, t5, n2, r6, s2, o4, i3, a5, l3, c3, u2 = false) {
  const { p: p5, m: f5, um: d6, n: g4, o: { parentNode: m4, remove: y3 } } = c3;
  let v3;
  const b3 = function(e5) {
    const t6 = e5.props && e5.props.suspensible;
    return null != t6 && false !== t6;
  }(e4);
  b3 && t5 && t5.pendingBranch && (v3 = t5.pendingId, t5.deps++);
  const _4 = e4.props ? ((e5) => {
    const t6 = isString(e5) ? Number(e5) : NaN;
    return isNaN(t6) ? e5 : t6;
  })(e4.props.timeout) : void 0, k3 = o4, w3 = { vnode: e4, parent: t5, parentComponent: n2, namespace: i3, container: r6, hiddenContainer: s2, deps: 0, pendingId: it2++, timeout: "number" == typeof _4 ? _4 : -1, activeBranch: null, pendingBranch: null, isInFallback: !u2, isHydrating: u2, isUnmounted: false, effects: [], resolve(e5 = false, n3 = false) {
    const { vnode: r7, activeBranch: s3, pendingBranch: i4, pendingId: a6, effects: l4, parentComponent: c4, container: u3 } = w3;
    let p6 = false;
    w3.isHydrating ? w3.isHydrating = false : e5 || (p6 = s3 && i4.transition && "out-in" === i4.transition.mode, p6 && (s3.transition.afterLeave = () => {
      a6 === w3.pendingId && (f5(i4, u3, o4 === k3 ? g4(s3) : o4, 0), queuePostFlushCb(l4));
    }), s3 && (m4(s3.el) === u3 && (o4 = g4(s3)), d6(s3, c4, w3, true)), p6 || f5(i4, u3, o4, 0)), setActiveBranch(w3, i4), w3.pendingBranch = null, w3.isInFallback = false;
    let y4 = w3.parent, _5 = false;
    for (; y4; ) {
      if (y4.pendingBranch) {
        y4.effects.push(...l4), _5 = true;
        break;
      }
      y4 = y4.parent;
    }
    _5 || p6 || queuePostFlushCb(l4), w3.effects = [], b3 && t5 && t5.pendingBranch && v3 === t5.pendingId && (t5.deps--, 0 !== t5.deps || n3 || t5.resolve()), triggerEvent(r7, "onResolve");
  }, fallback(e5) {
    if (!w3.pendingBranch) return;
    const { vnode: t6, activeBranch: n3, parentComponent: r7, container: s3, namespace: o5 } = w3;
    triggerEvent(t6, "onFallback");
    const i4 = g4(n3), mountFallback = /* @__PURE__ */ __name(() => {
      w3.isInFallback && (p5(null, e5, s3, i4, r7, null, o5, a5, l3), setActiveBranch(w3, e5));
    }, "mountFallback"), c4 = e5.transition && "out-in" === e5.transition.mode;
    c4 && (n3.transition.afterLeave = mountFallback), w3.isInFallback = true, d6(n3, r7, null, true), c4 || mountFallback();
  }, move(e5, t6, n3) {
    w3.activeBranch && f5(w3.activeBranch, e5, t6, n3), w3.container = e5;
  }, next: /* @__PURE__ */ __name(() => w3.activeBranch && g4(w3.activeBranch), "next"), registerDep(e5, t6, n3) {
    const r7 = !!w3.pendingBranch;
    r7 && w3.deps++;
    const s3 = e5.vnode.el;
    e5.asyncDep.catch((t7) => {
      handleError(t7, e5, 0);
    }).then((o5) => {
      if (e5.isUnmounted || w3.isUnmounted || w3.pendingId !== e5.suspenseId) return;
      e5.asyncResolved = true;
      const { vnode: a6 } = e5;
      handleSetupResult(e5, o5), s3 && (a6.el = s3);
      const l4 = !s3 && e5.subTree.el;
      t6(e5, a6, m4(s3 || e5.subTree.el), s3 ? null : g4(e5.subTree), w3, i3, n3), l4 && y3(l4), updateHOCHostEl(e5, a6.el), r7 && 0 == --w3.deps && w3.resolve();
    });
  }, unmount(e5, t6) {
    w3.isUnmounted = true, w3.activeBranch && d6(w3.activeBranch, n2, e5, t6), w3.pendingBranch && d6(w3.pendingBranch, n2, e5, t6);
  } };
  return w3;
}
function normalizeSuspenseSlot(e4) {
  let t5;
  if (isFunction(e4)) {
    const n2 = ht2 && e4._c;
    n2 && (e4._d = false, function(e5 = false) {
      ft2.push(dt2 = e5 ? null : []);
    }()), e4 = e4(), n2 && (e4._d = true, t5 = dt2, ft2.pop(), dt2 = ft2[ft2.length - 1] || null);
  }
  if ($(e4)) {
    const t6 = function(e5) {
      let t7;
      for (let n2 = 0; n2 < e5.length; n2++) {
        const r6 = e5[n2];
        if (!isVNode(r6)) return;
        if (r6.type !== ut2 || "v-if" === r6.children) {
          if (t7) return;
          t7 = r6;
        }
      }
      return t7;
    }(e4);
    e4 = t6;
  }
  return e4 = normalizeVNode$1(e4), t5 && !e4.dynamicChildren && (e4.dynamicChildren = t5.filter((t6) => t6 !== e4)), e4;
}
function setActiveBranch(e4, t5) {
  e4.activeBranch = t5;
  const { vnode: n2, parentComponent: r6 } = e4;
  let s2 = t5.el;
  for (; !s2 && t5.component; ) s2 = (t5 = t5.component.subTree).el;
  n2.el = s2, r6 && r6.subTree === n2 && (r6.vnode.el = s2, updateHOCHostEl(r6, s2));
}
function setBlockTracking(e4, t5 = false) {
  ht2 += e4, e4 < 0 && dt2 && t5 && (dt2.hasOnce = true);
}
function isVNode(e4) {
  return !!e4 && true === e4.__v_isVNode;
}
function isSameVNodeType(e4, t5) {
  return e4.type === t5.type && e4.key === t5.key;
}
function cloneVNode(e4, t5, n2 = false, r6 = false) {
  const { props: s2, ref: o4, patchFlag: i3, children: a5, transition: l3 } = e4, c3 = t5 ? mergeProps(s2 || {}, t5) : s2, u2 = { __v_isVNode: true, __v_skip: true, type: e4.type, props: c3, key: c3 && normalizeKey(c3), ref: t5 && t5.ref ? n2 && o4 ? $(o4) ? o4.concat(normalizeRef(t5)) : [o4, normalizeRef(t5)] : normalizeRef(t5) : o4, scopeId: e4.scopeId, slotScopeIds: e4.slotScopeIds, children: a5, target: e4.target, targetStart: e4.targetStart, targetAnchor: e4.targetAnchor, staticCount: e4.staticCount, shapeFlag: e4.shapeFlag, patchFlag: t5 && e4.type !== lt ? -1 === i3 ? 16 : 16 | i3 : i3, dynamicProps: e4.dynamicProps, dynamicChildren: e4.dynamicChildren, appContext: e4.appContext, dirs: e4.dirs, transition: l3, component: e4.component, suspense: e4.suspense, ssContent: e4.ssContent && cloneVNode(e4.ssContent), ssFallback: e4.ssFallback && cloneVNode(e4.ssFallback), el: e4.el, anchor: e4.anchor, ctx: e4.ctx, ce: e4.ce };
  return l3 && r6 && setTransitionHooks(u2, l3.clone(u2)), u2;
}
function createTextVNode(e4 = " ", t5 = 0) {
  return createVNode(ct2, null, e4, t5);
}
function normalizeVNode$1(e4) {
  return null == e4 || "boolean" == typeof e4 ? createVNode(ut2) : $(e4) ? createVNode(lt, null, e4.slice()) : isVNode(e4) ? cloneIfMounted(e4) : createVNode(ct2, null, String(e4));
}
function cloneIfMounted(e4) {
  return null === e4.el && -1 !== e4.patchFlag || e4.memo ? e4 : cloneVNode(e4);
}
function normalizeChildren(e4, t5) {
  let n2 = 0;
  const { shapeFlag: r6 } = e4;
  if (null == t5) t5 = null;
  else if ($(t5)) n2 = 16;
  else if ("object" == typeof t5) {
    if (65 & r6) {
      const n3 = t5.default;
      return void (n3 && (n3._c && (n3._d = false), normalizeChildren(e4, n3()), n3._c && (n3._d = true)));
    }
    {
      n2 = 32;
      const r7 = t5._;
      r7 || isInternalObject(t5) ? 3 === r7 && Ie2 && (1 === Ie2.slots._ ? t5._ = 1 : (t5._ = 2, e4.patchFlag |= 1024)) : t5._ctx = Ie2;
    }
  } else isFunction(t5) ? (t5 = { default: t5, _ctx: Ie2 }, n2 = 32) : (t5 = String(t5), 64 & r6 ? (n2 = 16, t5 = [createTextVNode(t5)]) : n2 = 8);
  e4.children = t5, e4.shapeFlag |= n2;
}
function mergeProps(...e4) {
  const t5 = {};
  for (let n2 = 0; n2 < e4.length; n2++) {
    const r6 = e4[n2];
    for (const e5 in r6) if ("class" === e5) t5.class !== r6.class && (t5.class = normalizeClass([t5.class, r6.class]));
    else if ("style" === e5) t5.style = normalizeStyle([t5.style, r6.style]);
    else if (isOn(e5)) {
      const n3 = t5[e5], s2 = r6[e5];
      !s2 || n3 === s2 || $(n3) && n3.includes(s2) || (t5[e5] = n3 ? [].concat(n3, s2) : s2);
    } else "" !== e5 && (t5[e5] = r6[e5]);
  }
  return t5;
}
function invokeVNodeHook(e4, t5, n2, r6 = null) {
  callWithAsyncErrorHandling(e4, t5, 7, [n2, r6]);
}
function createComponentInstance$1(e4, t5, n2) {
  const r6 = e4.type, s2 = (t5 ? t5.appContext : e4.appContext) || gt2, o4 = { uid: mt2++, vnode: e4, type: r6, parent: t5, appContext: s2, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t5 ? t5.provides : Object.create(s2.provides), ids: t5 ? t5.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r6, s2), emitsOptions: normalizeEmitsOptions(r6, s2), emit: null, emitted: null, propsDefaults: x2, inheritAttrs: r6.inheritAttrs, ctx: x2, data: x2, props: x2, attrs: x2, slots: x2, refs: x2, setupState: x2, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o4.ctx = { _: o4 }, o4.root = t5 ? t5.root : o4, o4.emit = emit2.bind(null, o4), e4.ce && e4.ce(o4), o4;
}
function isStatefulComponent(e4) {
  return 4 & e4.vnode.shapeFlag;
}
function setupComponent$1(e4, t5 = false, n2 = false) {
  t5 && bt2(t5);
  const { props: r6, children: s2 } = e4.vnode, o4 = isStatefulComponent(e4);
  !function(e5, t6, n3, r7 = false) {
    const s3 = {}, o5 = createInternalObject();
    e5.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e5, t6, s3, o5);
    for (const t7 in e5.propsOptions[0]) t7 in s3 || (s3[t7] = void 0);
    n3 ? e5.props = r7 ? s3 : shallowReactive(s3) : e5.type.props ? e5.props = s3 : e5.props = o5, e5.attrs = o5;
  }(e4, r6, o4, t5), ((e5, t6, n3) => {
    const r7 = e5.slots = createInternalObject();
    if (32 & e5.vnode.shapeFlag) {
      const e6 = t6._;
      e6 ? (assignSlots(r7, t6, n3), n3 && def(r7, "_", e6, true)) : normalizeObjectSlots(t6, r7);
    } else t6 && normalizeVNodeSlots(e5, t6);
  })(e4, s2, n2);
  const i3 = o4 ? function(e5, t6) {
    const n3 = e5.type;
    e5.accessCache = /* @__PURE__ */ Object.create(null), e5.proxy = new Proxy(e5.ctx, Qe2);
    const { setup: r7 } = n3;
    if (r7) {
      pauseTracking();
      const n4 = e5.setupContext = r7.length > 1 ? function(e6) {
        const expose = /* @__PURE__ */ __name((t7) => {
          e6.exposed = t7 || {};
        }, "expose");
        return { attrs: new Proxy(e6.attrs, kt2), slots: e6.slots, emit: e6.emit, expose };
      }(e5) : null, s3 = setCurrentInstance(e5), o5 = callWithErrorHandling(r7, e5, 0, [e5.props, n4]), i4 = isPromise(o5);
      if (resetTracking(), s3(), !i4 && !e5.sp || isAsyncWrapper(e5) || markAsyncBoundary(e5), i4) {
        if (o5.then(unsetCurrentInstance, unsetCurrentInstance), t6) return o5.then((t7) => {
          handleSetupResult(e5, t7);
        }).catch((t7) => {
          handleError(t7, e5, 0);
        });
        e5.asyncDep = o5;
      } else handleSetupResult(e5, o5);
    } else finishComponentSetup(e5);
  }(e4, t5) : void 0;
  return t5 && bt2(false), i3;
}
function handleSetupResult(e4, t5, n2) {
  isFunction(t5) ? e4.type.__ssrInlineRender ? e4.ssrRender = t5 : e4.render = t5 : isObject(t5) && (e4.setupState = proxyRefs(t5)), finishComponentSetup(e4);
}
function finishComponentSetup(e4, t5, n2) {
  const r6 = e4.type;
  e4.render || (e4.render = r6.render || NOOP);
  {
    const t6 = setCurrentInstance(e4);
    pauseTracking();
    try {
      applyOptions(e4);
    } finally {
      resetTracking(), t6();
    }
  }
}
function getComponentPublicInstance(e4) {
  return e4.exposed ? e4.exposeProxy || (e4.exposeProxy = new Proxy(proxyRefs((t5 = e4.exposed, !hasOwn(t5, "__v_skip") && Object.isExtensible(t5) && def(t5, "__v_skip", true), t5)), { get: /* @__PURE__ */ __name((t6, n2) => n2 in t6 ? t6[n2] : n2 in Xe2 ? Xe2[n2](e4) : void 0, "get"), has: /* @__PURE__ */ __name((e5, t6) => t6 in e5 || t6 in Xe2, "has") })) : e4.proxy;
  var t5;
}
function getComponentName(e4, t5 = true) {
  return isFunction(e4) ? e4.displayName || e4.name : e4.name || t5 && e4.__name;
}
function h(e4, t5, n2) {
  const r6 = arguments.length;
  return 2 === r6 ? isObject(t5) && !$(t5) ? isVNode(t5) ? createVNode(e4, null, [t5]) : createVNode(e4, t5) : createVNode(e4, null, t5) : (r6 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === r6 && isVNode(n2) && (n2 = [n2]), createVNode(e4, t5, n2));
}
function setStyle(e4, t5, n2) {
  if ($(n2)) n2.forEach((n3) => setStyle(e4, t5, n3));
  else if (null == n2 && (n2 = ""), t5.startsWith("--")) e4.setProperty(t5, n2);
  else {
    const r6 = function(e5, t6) {
      const n3 = Mt[t6];
      if (n3) return n3;
      let r7 = H(t6);
      if ("filter" !== r7 && r7 in e5) return Mt[t6] = r7;
      r7 = I2(r7);
      for (let n4 = 0; n4 < Ht.length; n4++) {
        const s2 = Ht[n4] + r7;
        if (s2 in e5) return Mt[t6] = s2;
      }
      return t6;
    }(e4, t5);
    Et2.test(n2) ? e4.setProperty(N(r6), n2.replace(Et2, ""), "important") : e4[r6] = n2;
  }
}
function patchAttr(e4, t5, n2, r6, s2, o4 = q2(t5)) {
  r6 && t5.startsWith("xlink:") ? null == n2 ? e4.removeAttributeNS(Nt2, t5.slice(6, t5.length)) : e4.setAttributeNS(Nt2, t5, n2) : null == n2 || o4 && !includeBooleanAttr(n2) ? e4.removeAttribute(t5) : e4.setAttribute(t5, o4 ? "" : isSymbol(n2) ? String(n2) : n2);
}
function patchDOMProp(e4, t5, n2, r6, s2) {
  if ("innerHTML" === t5 || "textContent" === t5) return void (null != n2 && (e4[t5] = n2));
  const o4 = e4.tagName;
  if ("value" === t5 && "PROGRESS" !== o4 && !o4.includes("-")) {
    const r7 = "OPTION" === o4 ? e4.getAttribute("value") || "" : e4.value, s3 = null == n2 ? "checkbox" === e4.type ? "on" : "" : String(n2);
    return r7 === s3 && "_value" in e4 || (e4.value = s3), null == n2 && e4.removeAttribute(t5), void (e4._value = n2);
  }
  let i3 = false;
  if ("" === n2 || null == n2) {
    const r7 = typeof e4[t5];
    "boolean" === r7 ? n2 = includeBooleanAttr(n2) : null == n2 && "string" === r7 ? (n2 = "", i3 = true) : "number" === r7 && (n2 = 0, i3 = true);
  }
  try {
    e4[t5] = n2;
  } catch (e5) {
  }
  i3 && e4.removeAttribute(s2 || t5);
}
function patchEvent(e4, t5, n2, r6, s2 = null) {
  const o4 = e4[It] || (e4[It] = {}), i3 = o4[t5];
  if (r6 && i3) i3.value = r6;
  else {
    const [n3, a5] = function(e5) {
      let t6;
      if (Vt.test(e5)) {
        let n5;
        for (t6 = {}; n5 = e5.match(Vt); ) e5 = e5.slice(0, e5.length - n5[0].length), t6[n5[0].toLowerCase()] = true;
      }
      const n4 = ":" === e5[2] ? e5.slice(3) : N(e5.slice(2));
      return [n4, t6];
    }(t5);
    if (r6) {
      const i4 = o4[t5] = function(e5, t6) {
        const invoker = /* @__PURE__ */ __name((e6) => {
          if (e6._vts) {
            if (e6._vts <= invoker.attached) return;
          } else e6._vts = Date.now();
          callWithAsyncErrorHandling(function(e7, t7) {
            if ($(t7)) {
              const n4 = e7.stopImmediatePropagation;
              return e7.stopImmediatePropagation = () => {
                n4.call(e7), e7._stopped = true;
              }, t7.map((e8) => (t8) => !t8._stopped && e8 && e8(t8));
            }
            return t7;
          }(e6, invoker.value), t6, 5, [e6]);
        }, "invoker");
        return invoker.value = e5, invoker.attached = getNow(), invoker;
      }(r6, s2);
      !function(e5, t6, n4, r7) {
        e5.addEventListener(t6, n4, r7);
      }(e4, n3, i4, a5);
    } else i3 && (!function(e5, t6, n4, r7) {
      e5.removeEventListener(t6, n4, r7);
    }(e4, n3, i3, a5), o4[t5] = void 0);
  }
}
function useHead(e4, t5 = {}) {
  const n2 = t5.head || function() {
    if (hasInjectionContext()) {
      const e5 = inject(Ut);
      if (!e5) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e5;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }();
  return n2.ssr ? n2.push(e4 || {}, t5) : function(e5, t6, n3 = {}) {
    const r6 = ref(false);
    let s2;
    !function(e6, t7) {
      doWatch(e6, null, t7);
    }(() => {
      const o4 = r6.value ? {} : walkResolver(t6, VueResolver);
      s2 ? s2.patch(o4) : s2 = e5.push(o4, n3);
    });
    getCurrentInstance() && (ze2(() => {
      s2.dispose();
    }), onDeactivated(() => {
      r6.value = true;
    }), onActivated(() => {
      r6.value = false;
    }));
    return s2;
  }(n2, e4, t5);
}
function createHead(e4 = {}) {
  const t5 = function(e5 = {}) {
    const t6 = createUnhead({ ...e5, document: false, propResolvers: [...e5.propResolvers || [], (e6, t7) => {
      if (e6 && e6.startsWith("on") && "function" == typeof t7) return `this.dataset.${e6}fired = true`;
    }], init: [e5.disableDefaults ? void 0 : { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] }, ...e5.init || []] });
    return t6.use({ key: "server", hooks: { "tags:resolve": /* @__PURE__ */ __name(function(e6) {
      const n2 = e6.tagMap.get("title"), r6 = e6.tagMap.get("titleTemplate"), s2 = e6.tagMap.get("templateParams"), o4 = { title: "server" === n2?.mode ? t6._title : void 0, titleTemplate: "server" === r6?.mode ? t6._titleTemplate : void 0, templateParams: "server" === s2?.mode ? t6._templateParams : void 0 };
      Object.values(o4).some(Boolean) && e6.tags.push({ tag: "script", innerHTML: JSON.stringify(o4), props: { id: "unhead:payload", type: "application/json" } });
    }, "tags:resolve") } }), t6;
  }({ ...e4, propResolvers: [VueResolver] });
  return t5.install = function(e5) {
    return { install(t6) {
      t6.config.globalProperties.$unhead = e5, t6.config.globalProperties.$head = e5, t6.provide(Ut, e5);
    } }.install;
  }(t5), t5;
}
function ssrRenderAttrs(e4, t5) {
  let n2 = "";
  for (const r6 in e4) {
    if (zt(r6) || isOn(r6) || "textarea" === t5 && "value" === r6) continue;
    const s2 = e4[r6];
    n2 += "class" === r6 ? ` class="${ssrRenderClass(s2)}"` : "style" === r6 ? ` style="${ssrRenderStyle(s2)}"` : "className" === r6 ? ` class="${String(s2)}"` : ssrRenderDynamicAttr(r6, s2, t5);
  }
  return n2;
}
function ssrRenderDynamicAttr(e4, t5, n2) {
  if (!isRenderableAttrValue(t5)) return "";
  const r6 = n2 && (n2.indexOf("-") > 0 || U3(n2)) ? e4 : Z2[e4] || e4.toLowerCase();
  return J2(r6) ? includeBooleanAttr(t5) ? ` ${r6}` : "" : function(e5) {
    if (K2.hasOwnProperty(e5)) return K2[e5];
    const t6 = G2.test(e5);
    return t6 && console.error(`unsafe attribute name: ${e5}`), K2[e5] = !t6;
  }(r6) ? "" === t5 ? ` ${r6}` : ` ${r6}="${escapeHtml(t5)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r6}`), "");
}
function ssrRenderAttr(e4, t5) {
  return isRenderableAttrValue(t5) ? ` ${e4}="${escapeHtml(t5)}"` : "";
}
function ssrRenderClass(e4) {
  return escapeHtml(normalizeClass(e4));
}
function ssrRenderStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return escapeHtml(e4);
  return escapeHtml(function(e5) {
    if (!e5) return "";
    if (isString(e5)) return e5;
    let t5 = "";
    for (const n2 in e5) {
      const r6 = e5[n2];
      (isString(r6) || "number" == typeof r6) && (t5 += `${n2.startsWith("--") ? n2 : N(n2)}:${r6};`);
    }
    return t5;
  }(normalizeStyle(e4)));
}
function ssrRenderComponent(e4, t5 = null, n2 = null, r6 = null, s2) {
  return renderComponentVNode(createVNode(e4, t5, n2), r6, s2);
}
function ssrRenderSlot(e4, t5, n2, r6, s2, o4, i3) {
  s2("<!--[-->"), function(e5, t6, n3, r7, s3, o5, i4) {
    const a5 = e5[t6];
    if (a5) {
      const e6 = [], t7 = a5(n3, (t8) => {
        e6.push(t8);
      }, o5, "");
      if ($(t7)) {
        const e7 = Wt(t7);
        e7 && renderVNodeChildren(s3, e7, o5, i4);
      } else {
        let t8 = true;
        for (let n4 = 0; n4 < e6.length; n4++) if (!isComment(e6[n4])) {
          t8 = false;
          break;
        }
        if (t8) ;
        else {
          let t9 = 0, n4 = e6.length;
          for (let r8 = t9; r8 < n4; r8++) s3(e6[r8]);
        }
      }
    }
  }(e4, t5, n2, 0, s2, o4, i3), s2("<!--]-->");
}
function isComment(e4) {
  return !("string" != typeof e4 || !qt.test(e4)) && (e4.length <= 8 || !e4.replace(Jt, "").trim());
}
function ssrInterpolate(e4) {
  return escapeHtml(toDisplayString(e4));
}
function ssrRenderList(e4, t5) {
  if ($(e4) || isString(e4)) for (let n2 = 0, r6 = e4.length; n2 < r6; n2++) t5(e4[n2], n2);
  else if ("number" == typeof e4) for (let n2 = 0; n2 < e4; n2++) t5(n2 + 1, n2);
  else if (isObject(e4)) if (e4[Symbol.iterator]) {
    const n2 = Array.from(e4);
    for (let e5 = 0, r6 = n2.length; e5 < r6; e5++) t5(n2[e5], e5);
  } else {
    const n2 = Object.keys(e4);
    for (let r6 = 0, s2 = n2.length; r6 < s2; r6++) {
      const s3 = n2[r6];
      t5(e4[s3], s3, r6);
    }
  }
}
async function ssrRenderSuspense(e4, { default: t5 }) {
  t5 ? t5() : e4("<!---->");
}
function createBuffer() {
  let e4 = false;
  const t5 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t5, "getBuffer"), push(n2) {
    const r6 = isString(n2);
    e4 && r6 ? t5[t5.length - 1] += n2 : (t5.push(n2), e4 = r6, (isPromise(n2) || $(n2) && n2.hasAsync) && (t5.hasAsync = true));
  } };
}
function renderComponentVNode(e4, t5 = null, n2) {
  const r6 = e4.component = Gt(e4, t5, null), s2 = Zt(r6, true), o4 = isPromise(s2);
  let i3 = r6.sp;
  if (o4 || i3) {
    return Promise.resolve(s2).then(() => {
      if (o4 && (i3 = r6.sp), i3) return Promise.all(i3.map((e5) => e5.call(r6.proxy)));
    }).catch(NOOP).then(() => renderComponentSubTree(r6, n2));
  }
  return renderComponentSubTree(r6, n2);
}
function renderComponentSubTree(e4, t5) {
  const n2 = e4.type, { getBuffer: r6, push: s2 } = createBuffer();
  if (isFunction(n2)) {
    let r7 = Xt(e4);
    if (!n2.props) for (const t6 in e4.attrs) t6.startsWith("data-v-") && ((r7.props || (r7.props = {}))[t6] = "");
    renderVNode(s2, e4.subTree = r7, e4, t5);
  } else {
    e4.render && e4.render !== NOOP || e4.ssrRender || n2.ssrRender || !isString(n2.template) || (n2.ssrRender = function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n2.template));
    const r7 = e4.ssrRender || n2.ssrRender;
    if (r7) {
      let n3 = false !== e4.inheritAttrs ? e4.attrs : void 0, o4 = false, i3 = e4;
      for (; ; ) {
        const e5 = i3.vnode.scopeId;
        e5 && (o4 || (n3 = { ...n3 }, o4 = true), n3[e5] = "");
        const t6 = i3.parent;
        if (!t6 || !t6.subTree || t6.subTree !== i3.vnode) break;
        i3 = t6;
      }
      if (t5) {
        o4 || (n3 = { ...n3 });
        const e5 = t5.trim().split(" ");
        for (let t6 = 0; t6 < e5.length; t6++) n3[e5[t6]] = "";
      }
      const a5 = Kt(e4);
      try {
        r7(e4.proxy, s2, e4, n3, e4.props, e4.setupState, e4.data, e4.ctx);
      } finally {
        Kt(a5);
      }
    } else e4.render && e4.render !== NOOP ? renderVNode(s2, e4.subTree = Xt(e4), e4, t5) : (n2.name || n2.__file, s2("<!---->"));
  }
  return r6();
}
function renderVNode(e4, t5, n2, r6) {
  const { type: s2, shapeFlag: o4, children: i3, dirs: a5, props: l3 } = t5;
  switch (a5 && (t5.props = function(e5, t6, n3) {
    const r7 = [];
    for (let t7 = 0; t7 < n3.length; t7++) {
      const s3 = n3[t7], { dir: { getSSRProps: o5 } } = s3;
      if (o5) {
        const t8 = o5(s3, e5);
        t8 && r7.push(t8);
      }
    }
    return mergeProps(t6 || {}, ...r7);
  }(t5, l3, a5)), s2) {
    case ct2:
      e4(escapeHtml(i3));
      break;
    case ut2:
      e4(i3 ? `<!--${c3 = i3, c3.replace(Q2, "")}-->` : "<!---->");
      break;
    case pt2:
      e4(i3);
      break;
    case lt:
      t5.slotScopeIds && (r6 = (r6 ? r6 + " " : "") + t5.slotScopeIds.join(" ")), e4("<!--[-->"), renderVNodeChildren(e4, i3, n2, r6), e4("<!--]-->");
      break;
    default:
      1 & o4 ? function(e5, t6, n3, r7) {
        const s3 = t6.type;
        let { props: o5, children: i4, shapeFlag: a6, scopeId: l4 } = t6, c4 = `<${s3}`;
        o5 && (c4 += ssrRenderAttrs(o5, s3));
        l4 && (c4 += ` ${l4}`);
        let u2 = n3, p5 = t6;
        for (; u2 && p5 === u2.subTree; ) p5 = u2.vnode, p5.scopeId && (c4 += ` ${p5.scopeId}`), u2 = u2.parent;
        r7 && (c4 += ` ${r7}`);
        if (e5(c4 + ">"), !z3(s3)) {
          let t7 = false;
          o5 && (o5.innerHTML ? (t7 = true, e5(o5.innerHTML)) : o5.textContent ? (t7 = true, e5(escapeHtml(o5.textContent))) : "textarea" === s3 && o5.value && (t7 = true, e5(escapeHtml(o5.value)))), t7 || (8 & a6 ? e5(escapeHtml(i4)) : 16 & a6 && renderVNodeChildren(e5, i4, n3, r7)), e5(`</${s3}>`);
        }
      }(e4, t5, n2, r6) : 6 & o4 ? e4(renderComponentVNode(t5, n2, r6)) : 64 & o4 ? function(e5, t6, n3, r7) {
        const s3 = t6.props && t6.props.to, o5 = t6.props && t6.props.disabled;
        if (!s3) return [];
        if (!isString(s3)) return [];
        !function(e6, t7, n4, r8, s4) {
          e6("<!--teleport start-->");
          const o6 = s4.appContext.provides[ot2], i4 = o6.__teleportBuffers || (o6.__teleportBuffers = {}), a6 = i4[n4] || (i4[n4] = []), l4 = a6.length;
          let c4;
          if (r8) t7(e6), c4 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e7, push: n5 } = createBuffer();
            n5("<!--teleport start anchor-->"), t7(n5), n5("<!--teleport anchor-->"), c4 = e7();
          }
          a6.splice(l4, 0, c4), e6("<!--teleport end-->");
        }(e5, (e6) => {
          renderVNodeChildren(e6, t6.children, n3, r7);
        }, s3, o5 || "" === o5, n3);
      }(e4, t5, n2, r6) : 128 & o4 && renderVNode(e4, t5.ssContent, n2, r6);
  }
  var c3;
}
function renderVNodeChildren(e4, t5, n2, r6) {
  for (let s2 = 0; s2 < t5.length; s2++) renderVNode(e4, Qt(t5[s2]), n2, r6);
}
function nestedUnrollBuffer(e4, t5, n2) {
  if (!e4.hasAsync) return t5 + unrollBufferSync$1(e4);
  let r6 = t5;
  for (let t6 = n2; t6 < e4.length; t6 += 1) {
    const n3 = e4[t6];
    if (isString(n3)) {
      r6 += n3;
      continue;
    }
    if (isPromise(n3)) return n3.then((n4) => (e4[t6] = n4, nestedUnrollBuffer(e4, r6, t6)));
    const s2 = nestedUnrollBuffer(n3, r6, 0);
    if (isPromise(s2)) return s2.then((n4) => (e4[t6] = n4, nestedUnrollBuffer(e4, "", t6)));
    r6 = s2;
  }
  return r6;
}
function unrollBuffer$1(e4) {
  return nestedUnrollBuffer(e4, "", 0);
}
function unrollBufferSync$1(e4) {
  let t5 = "";
  for (let n2 = 0; n2 < e4.length; n2++) {
    let r6 = e4[n2];
    isString(r6) ? t5 += r6 : t5 += unrollBufferSync$1(r6);
  }
  return t5;
}
async function renderToString(e4, t5 = {}) {
  if (Yt(e4)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e4, "render") }), t5);
  const n2 = createVNode(e4._component, e4._props);
  n2.appContext = e4._context, e4.provide(ot2, t5);
  const r6 = await renderComponentVNode(n2), s2 = await unrollBuffer$1(r6);
  if (await async function(e5) {
    if (e5.__teleportBuffers) {
      e5.teleports = e5.teleports || {};
      for (const t6 in e5.__teleportBuffers) e5.teleports[t6] = await unrollBuffer$1(await Promise.all([e5.__teleportBuffers[t6]]));
    }
  }(t5), t5.__watcherHandles) for (const e5 of t5.__watcherHandles) e5();
  return s2;
}
function buildAssetsURL(...e4) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e4);
}
function publicAssetsURL(...e4) {
  const t5 = useRuntimeConfig2().app, n2 = t5.cdnURL || t5.baseURL;
  return e4.length ? joinRelativeURL(n2, ...e4) : n2;
}
function lazyCachedFunction(e4) {
  let t5 = null;
  return () => (null === t5 && (t5 = e4().catch((e5) => {
    throw t5 = null, e5;
  })), t5);
}
function is_primitive(e4) {
  return Object(e4) !== e4;
}
function is_plain_object(e4) {
  const t5 = Object.getPrototypeOf(e4);
  return t5 === Object.prototype || null === t5 || Object.getOwnPropertyNames(t5).sort().join("\0") === cn;
}
function get_type(e4) {
  return Object.prototype.toString.call(e4).slice(8, -1);
}
function get_escaped_char(e4) {
  switch (e4) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e4 < " " ? `\\u${e4.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e4) {
  let t5 = "", n2 = 0;
  const r6 = e4.length;
  for (let s2 = 0; s2 < r6; s2 += 1) {
    const r7 = get_escaped_char(e4[s2]);
    r7 && (t5 += e4.slice(n2, s2) + r7, n2 = s2 + 1);
  }
  return `"${0 === n2 ? e4 : t5 + e4.slice(n2)}"`;
}
function enumerable_symbols(e4) {
  return Object.getOwnPropertySymbols(e4).filter((t5) => Object.getOwnPropertyDescriptor(e4, t5).enumerable);
}
function stringify_key(e4) {
  return un.test(e4) ? "." + e4 : "[" + JSON.stringify(e4) + "]";
}
function uneval(e4, t5) {
  const n2 = /* @__PURE__ */ new Map(), r6 = [], s2 = /* @__PURE__ */ new Map();
  !(/* @__PURE__ */ __name(function walk(e5) {
    if ("function" == typeof e5) throw new DevalueError("Cannot stringify a function", r6);
    if (!is_primitive(e5)) {
      if (n2.has(e5)) return void n2.set(e5, n2.get(e5) + 1);
      n2.set(e5, 1);
      switch (get_type(e5)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "ArrayBuffer":
          return;
        case "Array":
          e5.forEach((e6, t6) => {
            r6.push(`[${t6}]`), walk(e6), r6.pop();
          });
          break;
        case "Set":
          Array.from(e5).forEach(walk);
          break;
        case "Map":
          for (const [t6, n3] of e5) r6.push(`.get(${is_primitive(t6) ? stringify_primitive$1(t6) : "..."})`), walk(n3), r6.pop();
          break;
        default:
          if (!is_plain_object(e5)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", r6);
          if (enumerable_symbols(e5).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", r6);
          for (const t6 in e5) r6.push(stringify_key(t6)), walk(e5[t6]), r6.pop();
      }
    }
  }, "walk"))(e4);
  const o4 = /* @__PURE__ */ new Map();
  function stringify3(e5) {
    if (o4.has(e5)) return o4.get(e5);
    if (is_primitive(e5)) return stringify_primitive$1(e5);
    if (s2.has(e5)) return s2.get(e5);
    const t6 = get_type(e5);
    switch (t6) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e5.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e5.source)}, "${e5.flags}")`;
      case "Date":
        return `new Date(${e5.getTime()})`;
      case "Array":
        const n3 = e5.map((t7, n4) => n4 in e5 ? stringify3(t7) : ""), r7 = 0 === e5.length || e5.length - 1 in e5 ? "" : ",";
        return `[${n3.join(",")}${r7}]`;
      case "Set":
      case "Map":
        return `new ${t6}([${Array.from(e5).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array":
        return `new ${t6}([${e5.toString()}])`;
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e5).toString()}]).buffer`;
      default:
        const s3 = `{${Object.keys(e5).map((t7) => `${function(e6) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e6) ? e6 : escape_unsafe_chars(JSON.stringify(e6));
        }(t7)}:${stringify3(e5[t7])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e5) ? Object.keys(e5).length > 0 ? `Object.assign(Object.create(null),${s3})` : "Object.create(null)" : s3;
    }
  }
  __name(stringify3, "stringify");
  Array.from(n2).filter((e5) => e5[1] > 1).sort((e5, t6) => t6[1] - e5[1]).forEach((e5, t6) => {
    o4.set(e5[0], function(e6) {
      let t7 = "";
      do {
        t7 = pn[e6 % 54] + t7, e6 = ~~(e6 / 54) - 1;
      } while (e6 >= 0);
      return dn.test(t7) ? `${t7}0` : t7;
    }(t6));
  });
  const i3 = stringify3(e4);
  if (o4.size) {
    const e5 = [], t6 = [], n3 = [];
    return o4.forEach((r7, o5) => {
      if (e5.push(r7), s2.has(o5)) return void n3.push(s2.get(o5));
      if (is_primitive(o5)) return void n3.push(stringify_primitive$1(o5));
      switch (get_type(o5)) {
        case "Number":
        case "String":
        case "Boolean":
          n3.push(`Object(${stringify3(o5.valueOf())})`);
          break;
        case "RegExp":
          n3.push(o5.toString());
          break;
        case "Date":
          n3.push(`new Date(${o5.getTime()})`);
          break;
        case "Array":
          n3.push(`Array(${o5.length})`), o5.forEach((e6, n4) => {
            t6.push(`${r7}[${n4}]=${stringify3(e6)}`);
          });
          break;
        case "Set":
          n3.push("new Set"), t6.push(`${r7}.${Array.from(o5).map((e6) => `add(${stringify3(e6)})`).join(".")}`);
          break;
        case "Map":
          n3.push("new Map"), t6.push(`${r7}.${Array.from(o5).map(([e6, t7]) => `set(${stringify3(e6)}, ${stringify3(t7)})`).join(".")}`);
          break;
        default:
          n3.push(null === Object.getPrototypeOf(o5) ? "Object.create(null)" : "{}"), Object.keys(o5).forEach((e6) => {
            t6.push(`${r7}${function(e7) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e7) ? `.${e7}` : `[${escape_unsafe_chars(JSON.stringify(e7))}]`;
            }(e6)}=${stringify3(o5[e6])}`);
          });
      }
    }), t6.push(`return ${i3}`), `(function(${e5.join(",")}){${t6.join(";")}}(${n3.join(",")}))`;
  }
  return i3;
}
function escape_unsafe_char(e4) {
  return ln[e4] || e4;
}
function escape_unsafe_chars(e4) {
  return e4.replace(fn, escape_unsafe_char);
}
function stringify_primitive$1(e4) {
  if ("string" == typeof e4) return stringify_string(e4);
  if (void 0 === e4) return "void 0";
  if (0 === e4 && 1 / e4 < 0) return "-0";
  const t5 = String(e4);
  return "number" == typeof e4 ? t5.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e4 ? e4 + "n" : t5;
}
function encode64(e4) {
  const t5 = new DataView(e4);
  let n2 = "";
  for (let r6 = 0; r6 < e4.byteLength; r6++) n2 += String.fromCharCode(t5.getUint8(r6));
  return function(e5) {
    let t6 = "";
    for (let n3 = 0; n3 < e5.length; n3 += 3) {
      const r6 = [void 0, void 0, void 0, void 0];
      r6[0] = e5.charCodeAt(n3) >> 2, r6[1] = (3 & e5.charCodeAt(n3)) << 4, e5.length > n3 + 1 && (r6[1] |= e5.charCodeAt(n3 + 1) >> 4, r6[2] = (15 & e5.charCodeAt(n3 + 1)) << 2), e5.length > n3 + 2 && (r6[2] |= e5.charCodeAt(n3 + 2) >> 6, r6[3] = 63 & e5.charCodeAt(n3 + 2));
      for (let e6 = 0; e6 < r6.length; e6++) void 0 === r6[e6] ? t6 += "=" : t6 += hn[r6[e6]];
    }
    return t6;
  }(n2);
}
function stringify(e4, t5) {
  const n2 = [], r6 = /* @__PURE__ */ new Map(), s2 = [];
  if (t5) for (const e5 of Object.getOwnPropertyNames(t5)) s2.push({ key: e5, fn: t5[e5] });
  const o4 = [];
  let i3 = 0;
  const a5 = (/* @__PURE__ */ __name(function flatten(e5) {
    if ("function" == typeof e5) throw new DevalueError("Cannot stringify a function", o4);
    if (r6.has(e5)) return r6.get(e5);
    if (void 0 === e5) return -1;
    if (Number.isNaN(e5)) return -3;
    if (e5 === 1 / 0) return -4;
    if (e5 === -1 / 0) return -5;
    if (0 === e5 && 1 / e5 < 0) return -6;
    const t6 = i3++;
    r6.set(e5, t6);
    for (const { key: r7, fn: o5 } of s2) {
      const s3 = o5(e5);
      if (s3) return n2[t6] = `["${r7}",${flatten(s3)}]`, t6;
    }
    let a6 = "";
    if (is_primitive(e5)) a6 = stringify_primitive(e5);
    else {
      const t7 = get_type(e5);
      switch (t7) {
        case "Number":
        case "String":
        case "Boolean":
          a6 = `["Object",${stringify_primitive(e5)}]`;
          break;
        case "BigInt":
          a6 = `["BigInt",${e5}]`;
          break;
        case "Date":
          a6 = `["Date","${!isNaN(e5.getDate()) ? e5.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: n3, flags: r7 } = e5;
          a6 = r7 ? `["RegExp",${stringify_string(n3)},"${r7}"]` : `["RegExp",${stringify_string(n3)}]`;
          break;
        case "Array":
          a6 = "[";
          for (let t8 = 0; t8 < e5.length; t8 += 1) t8 > 0 && (a6 += ","), t8 in e5 ? (o4.push(`[${t8}]`), a6 += flatten(e5[t8]), o4.pop()) : a6 += -2;
          a6 += "]";
          break;
        case "Set":
          a6 = '["Set"';
          for (const t8 of e5) a6 += `,${flatten(t8)}`;
          a6 += "]";
          break;
        case "Map":
          a6 = '["Map"';
          for (const [t8, n4] of e5) o4.push(`.get(${is_primitive(t8) ? stringify_primitive(t8) : "..."})`), a6 += `,${flatten(t8)},${flatten(n4)}`, o4.pop();
          a6 += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          a6 = '["' + t7 + '","' + encode64(e5.buffer) + '"]';
          break;
        case "ArrayBuffer":
          a6 = `["ArrayBuffer","${encode64(e5)}"]`;
          break;
        default:
          if (!is_plain_object(e5)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", o4);
          if (enumerable_symbols(e5).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", o4);
          if (null === Object.getPrototypeOf(e5)) {
            a6 = '["null"';
            for (const t8 in e5) o4.push(stringify_key(t8)), a6 += `,${stringify_string(t8)},${flatten(e5[t8])}`, o4.pop();
            a6 += "]";
          } else {
            a6 = "{";
            let t8 = false;
            for (const n4 in e5) t8 && (a6 += ","), t8 = true, o4.push(stringify_key(n4)), a6 += `${stringify_string(n4)}:${flatten(e5[n4])}`, o4.pop();
            a6 += "}";
          }
      }
    }
    return n2[t6] = a6, t6;
  }, "flatten"))(e4);
  return a5 < 0 ? `${a5}` : `[${n2.join(",")}]`;
}
function stringify_primitive(e4) {
  const t5 = typeof e4;
  return "string" === t5 ? stringify_string(e4) : e4 instanceof String ? stringify_string(e4.toString()) : void 0 === e4 ? (-1).toString() : 0 === e4 && 1 / e4 < 0 ? (-6).toString() : "bigint" === t5 ? `["BigInt","${e4}"]` : String(e4);
}
function renderPayloadJsonScript(e4) {
  const t5 = { type: "application/json", innerHTML: e4.data ? stringify(e4.data, e4.ssrContext._payloadReducers) : "", "data-nuxt-data": "nuxt-app", "data-ssr": !e4.ssrContext.noSSR, id: "__NUXT_DATA__" };
  e4.src && (t5["data-src"] = e4.src);
  return [t5, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e4.ssrContext.config)}` }];
}
function splitPayload(e4) {
  const { data: t5, prerenderedAt: n2, ...r6 } = e4.payload;
  return { initial: { ...r6, prerenderedAt: n2 }, payload: { data: t5, prerenderedAt: n2 } };
}
function defineHeadPlugin(e4) {
  return e4;
}
function processTemplateParams(e4, t5, n2, r6 = false) {
  if ("string" != typeof e4 || !e4.includes("%")) return e4;
  let s2 = e4;
  try {
    s2 = decodeURI(e4);
  } catch {
  }
  const o4 = s2.match(/%\w+(?:\.\w+)?/g);
  if (!o4) return e4;
  const i3 = e4.includes(gn);
  return e4 = e4.replace(/%\w+(?:\.\w+)?/g, (e5) => {
    if (e5 === gn || !o4.includes(e5)) return e5;
    const n3 = function(e6, t6, n4 = false) {
      let r7;
      if ("s" === t6 || "pageTitle" === t6) r7 = e6.pageTitle;
      else if (t6.includes(".")) {
        const n5 = t6.indexOf(".");
        r7 = e6[t6.substring(0, n5)]?.[t6.substring(n5 + 1)];
      } else r7 = e6[t6];
      if (void 0 !== r7) return n4 ? (r7 || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r7 || "";
    }(t5, e5.slice(1), r6);
    return void 0 !== n3 ? n3 : e5;
  }).trim(), i3 && (e4.endsWith(gn) && (e4 = e4.slice(0, -10)), e4.startsWith(gn) && (e4 = e4.slice(10)), e4 = e4.replace(mn, n2 || "").trim()), e4;
}
async function walkPromises(e4) {
  if ("function" === typeof e4) return e4;
  if (e4 instanceof Promise) return await e4;
  if (Array.isArray(e4)) return await Promise.all(e4.map((e5) => walkPromises(e5)));
  if (e4?.constructor === Object) {
    const t5 = {};
    for (const n2 of Object.keys(e4)) t5[n2] = await walkPromises(e4[n2]);
    return t5;
  }
  return e4;
}
function normalizeChunks(e4) {
  return e4.filter(Boolean).map((e5) => e5.trim());
}
function joinTags(e4) {
  return e4.join("");
}
function joinAttrs(e4) {
  return 0 === e4.length ? "" : " " + e4.join(" ");
}
var f3, d4, g2, m2, y, v, b, _2, k, sortTags$1, w, S2, C, R, isTruthy, x2, A, NOOP, NO, isOn, isModelListener, T, remove, O, hasOwn, $, isMap, isSet, isFunction, isString, isSymbol, isObject, isPromise, P2, toTypeString, isPlainObject, isIntegerKey, j, cacheStringFunction, E, H, M, N, I2, V2, hasChanged, invokeArrayFns, def, looseToNumber, D3, getGlobalThis, B2, L, F2, U3, z3, W, q2, J2, G2, K2, Z2, X2, Q2, isRef$1, toDisplayString, replacer, stringifySymbol, Y2, ee2, EffectScope, te2, ReactiveEffect, ne2, re2, se2, oe2, ie2, ae2, Link, Dep, le2, ce2, ue2, pe2, fe2, de2, he2, ge2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, me2, ye2, ve2, toShallow, getProto, be2, _e2, ke2, we2, Se2, Ce2, Re2, toReactive, toReadonly, RefImpl, xe2, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, Ae2, Te2, Oe2, $e2, Pe2, je2, Ee2, He2, Me2, Ne2, getId, Ie2, Ve2, De2, isComment$1, isAsyncWrapper, isKeepAlive, createHook, Be2, Le2, Fe2, Ue2, ze2, We2, qe, Je2, Ge2, Ke2, Ze2, getPublicInstance, Xe2, hasSetupBinding, Qe2, Ye2, et2, tt2, nt2, rt2, createInternalObject, isInternalObject, st2, isInternalKey, normalizeSlotValue, normalizeSlot2, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, queuePostRenderEffect, ot2, useSSRContext, getModelModifiers, getFunctionalFallthrough, filterModelListeners, isSuspense, it2, at, lt, ct2, ut2, pt2, ft2, dt2, ht2, normalizeKey, normalizeRef, createVNode, gt2, mt2, yt2, getCurrentInstance, vt2, bt2, setCurrentInstance, unsetCurrentInstance, _t2, kt2, computed, wt2, St2, Ct2, Rt2, xt2, At2, Tt, Ot2, $t, Pt2, jt2, Et2, Ht, Mt, Nt2, It, Vt, Dt, Bt, getNow, isNativeOn, Lt, Ft, createApp, VueResolver, Ut, zt, Wt, qt, Jt, Gt, Kt, Zt, Xt, Qt, Yt, en, tn, nn, rn, getClientManifest, sn, on2, an, ln, DevalueError, cn, un, pn, fn, dn, hn, sortTags, gn, mn, formatKey, yn, vn, bn, _n, kn, wn, Sn, Cn, Rn, xn, An, Tn, On, $n;
var init_renderer = __esm({
  "dist/server/chunks/routes/renderer.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(getModuleDependencies, "getModuleDependencies");
    __name(getRequestDependencies, "getRequestDependencies");
    __name(renderStyles, "renderStyles");
    __name(getResources, "getResources");
    __name(renderResourceHints, "renderResourceHints");
    __name(renderResourceHeaders, "renderResourceHeaders");
    __name(getPreloadLinks, "getPreloadLinks");
    __name(getPrefetchLinks, "getPrefetchLinks");
    __name(renderScripts, "renderScripts");
    __name(createRenderer$1, "createRenderer$1");
    __name(renderLinkToString, "renderLinkToString");
    __name(renderLinkToHeader, "renderLinkToHeader");
    f3 = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    d4 = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    g2 = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    m2 = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    y = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    v = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    b = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    _2 = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);
    k = ["name", "property", "http-equiv"];
    __name(dedupeKey, "dedupeKey");
    __name(walkResolver, "walkResolver");
    __name(normalizeProps, "normalizeProps");
    __name(normalizeTag, "normalizeTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    sortTags$1 = /* @__PURE__ */ __name((e4, t5) => e4._w === t5._w ? e4._p - t5._p : e4._w - t5._w, "sortTags$1");
    w = { base: -10, title: 10 };
    S2 = { critical: -8, high: -1, low: 2 };
    C = { meta: { "content-security-policy": -30, charset: -20, viewport: -15 }, link: { preconnect: 20, stylesheet: 60, preload: 70, modulepreload: 70, prefetch: 90, "dns-prefetch": 90, prerender: 90 }, script: { async: 30, defer: 80, sync: 50 }, style: { imported: 40, sync: 60 } };
    R = /@import/;
    isTruthy = /* @__PURE__ */ __name((e4) => "" === e4 || true === e4, "isTruthy");
    __name(tagWeight, "tagWeight");
    __name(registerPlugin, "registerPlugin");
    __name(createUnhead, "createUnhead");
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    __name(tagToString, "tagToString");
    __name(renderSSRHead, "renderSSRHead");
    __name(makeMap, "makeMap");
    x2 = {};
    A = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && (e4.charCodeAt(2) > 122 || e4.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e4) => e4.startsWith("onUpdate:"), "isModelListener");
    T = Object.assign;
    remove = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = e4.indexOf(t5);
      n2 > -1 && e4.splice(n2, 1);
    }, "remove");
    O = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e4, t5) => O.call(e4, t5), "hasOwn");
    $ = Array.isArray;
    isMap = /* @__PURE__ */ __name((e4) => "[object Map]" === toTypeString(e4), "isMap");
    isSet = /* @__PURE__ */ __name((e4) => "[object Set]" === toTypeString(e4), "isSet");
    isFunction = /* @__PURE__ */ __name((e4) => "function" == typeof e4, "isFunction");
    isString = /* @__PURE__ */ __name((e4) => "string" == typeof e4, "isString");
    isSymbol = /* @__PURE__ */ __name((e4) => "symbol" == typeof e4, "isSymbol");
    isObject = /* @__PURE__ */ __name((e4) => null !== e4 && "object" == typeof e4, "isObject");
    isPromise = /* @__PURE__ */ __name((e4) => (isObject(e4) || isFunction(e4)) && isFunction(e4.then) && isFunction(e4.catch), "isPromise");
    P2 = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e4) => P2.call(e4), "toTypeString");
    isPlainObject = /* @__PURE__ */ __name((e4) => "[object Object]" === toTypeString(e4), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e4) => isString(e4) && "NaN" !== e4 && "-" !== e4[0] && "" + parseInt(e4, 10) === e4, "isIntegerKey");
    j = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    cacheStringFunction = /* @__PURE__ */ __name((e4) => {
      const t5 = /* @__PURE__ */ Object.create(null);
      return (n2) => t5[n2] || (t5[n2] = e4(n2));
    }, "cacheStringFunction");
    E = /-(\w)/g;
    H = cacheStringFunction((e4) => e4.replace(E, (e5, t5) => t5 ? t5.toUpperCase() : ""));
    M = /\B([A-Z])/g;
    N = cacheStringFunction((e4) => e4.replace(M, "-$1").toLowerCase());
    I2 = cacheStringFunction((e4) => e4.charAt(0).toUpperCase() + e4.slice(1));
    V2 = cacheStringFunction((e4) => e4 ? `on${I2(e4)}` : "");
    hasChanged = /* @__PURE__ */ __name((e4, t5) => !Object.is(e4, t5), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e4, ...t5) => {
      for (let n2 = 0; n2 < e4.length; n2++) e4[n2](...t5);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e4, t5, n2, r6 = false) => {
      Object.defineProperty(e4, t5, { configurable: true, enumerable: false, writable: r6, value: n2 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e4) => {
      const t5 = parseFloat(e4);
      return isNaN(t5) ? e4 : t5;
    }, "looseToNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => D3 || (D3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== nr ? nr : {}), "getGlobalThis");
    __name(normalizeStyle, "normalizeStyle");
    B2 = /;(?![^(]*\))/g;
    L = /:([^]+)/;
    F2 = /\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(normalizeClass, "normalizeClass");
    U3 = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    z3 = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    W = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    q2 = makeMap(W);
    J2 = makeMap(W + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    G2 = /[>/="'\u0009\u000a\u000c\u0020]/;
    K2 = {};
    Z2 = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    X2 = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    Q2 = /^-?>|<!--|-->|--!>|<!-$/g;
    isRef$1 = /* @__PURE__ */ __name((e4) => !(!e4 || true !== e4.__v_isRef), "isRef$1");
    toDisplayString = /* @__PURE__ */ __name((e4) => isString(e4) ? e4 : null == e4 ? "" : $(e4) || isObject(e4) && (e4.toString === P2 || !isFunction(e4.toString)) ? isRef$1(e4) ? toDisplayString(e4.value) : JSON.stringify(e4, replacer, 2) : String(e4), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e4, t5) => isRef$1(t5) ? replacer(e4, t5.value) : isMap(t5) ? { [`Map(${t5.size})`]: [...t5.entries()].reduce((e5, [t6, n2], r6) => (e5[stringifySymbol(t6, r6) + " =>"] = n2, e5), {}) } : isSet(t5) ? { [`Set(${t5.size})`]: [...t5.values()].map((e5) => stringifySymbol(e5)) } : isSymbol(t5) ? stringifySymbol(t5) : !isObject(t5) || $(t5) || isPlainObject(t5) ? t5 : String(t5), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e4, t5 = "") => {
      var n2;
      return isSymbol(e4) ? `Symbol(${null != (n2 = e4.description) ? n2 : t5})` : e4;
    }, "stringifySymbol");
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e4 = false) {
        this.detached = e4, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Y2, !e4 && Y2 && (this.index = (Y2.scopes || (Y2.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e4, t5;
          if (this._isPaused = true, this.scopes) for (e4 = 0, t5 = this.scopes.length; e4 < t5; e4++) this.scopes[e4].pause();
          for (e4 = 0, t5 = this.effects.length; e4 < t5; e4++) this.effects[e4].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e4, t5;
          if (this._isPaused = false, this.scopes) for (e4 = 0, t5 = this.scopes.length; e4 < t5; e4++) this.scopes[e4].resume();
          for (e4 = 0, t5 = this.effects.length; e4 < t5; e4++) this.effects[e4].resume();
        }
      }
      run(e4) {
        if (this._active) {
          const t5 = Y2;
          try {
            return Y2 = this, e4();
          } finally {
            Y2 = t5;
          }
        }
      }
      on() {
        Y2 = this;
      }
      off() {
        Y2 = this.parent;
      }
      stop(e4) {
        if (this._active) {
          let t5, n2;
          for (this._active = false, t5 = 0, n2 = this.effects.length; t5 < n2; t5++) this.effects[t5].stop();
          for (this.effects.length = 0, t5 = 0, n2 = this.cleanups.length; t5 < n2; t5++) this.cleanups[t5]();
          if (this.cleanups.length = 0, this.scopes) {
            for (t5 = 0, n2 = this.scopes.length; t5 < n2; t5++) this.scopes[t5].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e4) {
            const e5 = this.parent.scopes.pop();
            e5 && e5 !== this && (this.parent.scopes[this.index] = e5, e5.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(effectScope, "effectScope");
    __name(getCurrentScope, "getCurrentScope");
    te2 = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e4) {
        this.fn = e4, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Y2 && Y2.active && Y2.effects.push(this);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, te2.has(this) && (te2.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e4 = ee2, t5 = oe2;
        ee2 = this, oe2 = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), ee2 = e4, oe2 = t5, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e4 = this.deps; e4; e4 = e4.nextDep) removeSub(e4);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? te2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    se2 = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    oe2 = true;
    ie2 = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    ae2 = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e4, t5) {
        this.sub = e4, this.dep = t5, this.version = t5.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e4) {
        this.computed = e4, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
      }
      track(e4) {
        if (!ee2 || !oe2 || ee2 === this.computed) return;
        let t5 = this.activeLink;
        if (void 0 === t5 || t5.sub !== ee2) t5 = this.activeLink = new Link(ee2, this), ee2.deps ? (t5.prevDep = ee2.depsTail, ee2.depsTail.nextDep = t5, ee2.depsTail = t5) : ee2.deps = ee2.depsTail = t5, addSub(t5);
        else if (-1 === t5.version && (t5.version = this.version, t5.nextDep)) {
          const e5 = t5.nextDep;
          e5.prevDep = t5.prevDep, t5.prevDep && (t5.prevDep.nextDep = e5), t5.prevDep = ee2.depsTail, t5.nextDep = void 0, ee2.depsTail.nextDep = t5, ee2.depsTail = t5, ee2.deps === t5 && (ee2.deps = e5);
        }
        return t5;
      }
      trigger(e4) {
        this.version++, ae2++, this.notify(e4);
      }
      notify(e4) {
        startBatch();
        try {
          0;
          for (let e5 = this.subs; e5; e5 = e5.prevSub) e5.sub.notify() && e5.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    le2 = /* @__PURE__ */ new WeakMap();
    ce2 = Symbol("");
    ue2 = Symbol("");
    pe2 = Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    fe2 = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, toReactive);
    }, concat(...e4) {
      return reactiveReadArray(this).concat(...e4.map((e5) => $(e5) ? reactiveReadArray(e5) : e5));
    }, entries() {
      return iterator(this, "entries", (e4) => (e4[1] = toReactive(e4[1]), e4));
    }, every(e4, t5) {
      return apply(this, "every", e4, t5, void 0, arguments);
    }, filter(e4, t5) {
      return apply(this, "filter", e4, t5, (e5) => e5.map(toReactive), arguments);
    }, find(e4, t5) {
      return apply(this, "find", e4, t5, toReactive, arguments);
    }, findIndex(e4, t5) {
      return apply(this, "findIndex", e4, t5, void 0, arguments);
    }, findLast(e4, t5) {
      return apply(this, "findLast", e4, t5, toReactive, arguments);
    }, findLastIndex(e4, t5) {
      return apply(this, "findLastIndex", e4, t5, void 0, arguments);
    }, forEach(e4, t5) {
      return apply(this, "forEach", e4, t5, void 0, arguments);
    }, includes(...e4) {
      return searchProxy(this, "includes", e4);
    }, indexOf(...e4) {
      return searchProxy(this, "indexOf", e4);
    }, join(e4) {
      return reactiveReadArray(this).join(e4);
    }, lastIndexOf(...e4) {
      return searchProxy(this, "lastIndexOf", e4);
    }, map(e4, t5) {
      return apply(this, "map", e4, t5, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e4) {
      return noTracking(this, "push", e4);
    }, reduce(e4, ...t5) {
      return reduce(this, "reduce", e4, t5);
    }, reduceRight(e4, ...t5) {
      return reduce(this, "reduceRight", e4, t5);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e4, t5) {
      return apply(this, "some", e4, t5, void 0, arguments);
    }, splice(...e4) {
      return noTracking(this, "splice", e4);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e4) {
      return reactiveReadArray(this).toSorted(e4);
    }, toSpliced(...e4) {
      return reactiveReadArray(this).toSpliced(...e4);
    }, unshift(...e4) {
      return noTracking(this, "unshift", e4);
    }, values() {
      return iterator(this, "values", toReactive);
    } };
    __name(iterator, "iterator");
    de2 = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    he2 = makeMap("__proto__,__v_isRef,__isVue");
    ge2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e4) => "arguments" !== e4 && "caller" !== e4).map((e4) => Symbol[e4]).filter(isSymbol));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e4 = false, t5 = false) {
        this._isReadonly = e4, this._isShallow = t5;
      }
      get(e4, t5, n2) {
        if ("__v_skip" === t5) return e4.__v_skip;
        const r6 = this._isReadonly, s2 = this._isShallow;
        if ("__v_isReactive" === t5) return !r6;
        if ("__v_isReadonly" === t5) return r6;
        if ("__v_isShallow" === t5) return s2;
        if ("__v_raw" === t5) return n2 === (r6 ? s2 ? Re2 : Ce2 : s2 ? Se2 : we2).get(e4) || Object.getPrototypeOf(e4) === Object.getPrototypeOf(n2) ? e4 : void 0;
        const o4 = $(e4);
        if (!r6) {
          let e5;
          if (o4 && (e5 = fe2[t5])) return e5;
          if ("hasOwnProperty" === t5) return hasOwnProperty;
        }
        const i3 = Reflect.get(e4, t5, isRef(e4) ? e4 : n2);
        return (isSymbol(t5) ? ge2.has(t5) : he2(t5)) ? i3 : (r6 || track(e4, 0, t5), s2 ? i3 : isRef(i3) ? o4 && isIntegerKey(t5) ? i3 : i3.value : isObject(i3) ? r6 ? readonly(i3) : reactive(i3) : i3);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e4 = false) {
        super(false, e4);
      }
      set(e4, t5, n2, r6) {
        let s2 = e4[t5];
        if (!this._isShallow) {
          const t6 = isReadonly(s2);
          if (isShallow(n2) || isReadonly(n2) || (s2 = toRaw(s2), n2 = toRaw(n2)), !$(e4) && isRef(s2) && !isRef(n2)) return !t6 && (s2.value = n2, true);
        }
        const o4 = $(e4) && isIntegerKey(t5) ? Number(t5) < e4.length : hasOwn(e4, t5), i3 = Reflect.set(e4, t5, n2, isRef(e4) ? e4 : r6);
        return e4 === toRaw(r6) && (o4 ? hasChanged(n2, s2) && trigger(e4, "set", t5, n2) : trigger(e4, "add", t5, n2)), i3;
      }
      deleteProperty(e4, t5) {
        const n2 = hasOwn(e4, t5);
        e4[t5];
        const r6 = Reflect.deleteProperty(e4, t5);
        return r6 && n2 && trigger(e4, "delete", t5, void 0), r6;
      }
      has(e4, t5) {
        const n2 = Reflect.has(e4, t5);
        return isSymbol(t5) && ge2.has(t5) || track(e4, 0, t5), n2;
      }
      ownKeys(e4) {
        return track(e4, 0, $(e4) ? "length" : ce2), Reflect.ownKeys(e4);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e4 = false) {
        super(true, e4);
      }
      set(e4, t5) {
        return true;
      }
      deleteProperty(e4, t5) {
        return true;
      }
    };
    me2 = new MutableReactiveHandler();
    ye2 = new ReadonlyReactiveHandler();
    ve2 = new MutableReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e4) => e4, "toShallow");
    getProto = /* @__PURE__ */ __name((e4) => Reflect.getPrototypeOf(e4), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    be2 = { get: createInstrumentationGetter(false, false) };
    _e2 = { get: createInstrumentationGetter(false, true) };
    ke2 = { get: createInstrumentationGetter(true, false) };
    we2 = /* @__PURE__ */ new WeakMap();
    Se2 = /* @__PURE__ */ new WeakMap();
    Ce2 = /* @__PURE__ */ new WeakMap();
    Re2 = /* @__PURE__ */ new WeakMap();
    __name(getTargetType, "getTargetType");
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    toReactive = /* @__PURE__ */ __name((e4) => isObject(e4) ? reactive(e4) : e4, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e4) => isObject(e4) ? readonly(e4) : e4, "toReadonly");
    __name(isRef, "isRef");
    __name(ref, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e4, t5) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t5 ? e4 : toRaw(e4), this._value = t5 ? e4 : toReactive(e4), this.__v_isShallow = t5;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e4) {
        const t5 = this._rawValue, n2 = this.__v_isShallow || isShallow(e4) || isReadonly(e4);
        e4 = n2 ? e4 : toRaw(e4), hasChanged(e4, t5) && (this._rawValue = e4, this._value = n2 ? e4 : toReactive(e4), this.dep.trigger());
      }
    };
    __name(unref, "unref");
    xe2 = { get: /* @__PURE__ */ __name((e4, t5, n2) => "__v_raw" === t5 ? e4 : unref(Reflect.get(e4, t5, n2)), "get"), set: /* @__PURE__ */ __name((e4, t5, n2, r6) => {
      const s2 = e4[t5];
      return isRef(s2) && !isRef(n2) ? (s2.value = n2, true) : Reflect.set(e4, t5, n2, r6);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e4, t5, n2) {
        this._object = e4, this._key = t5, this._defaultValue = n2, this.__v_isRef = true, this._value = void 0;
      }
      get value() {
        const e4 = this._object[this._key];
        return this._value = void 0 === e4 ? this._defaultValue : e4;
      }
      set value(e4) {
        this._object[this._key] = e4;
      }
      get dep() {
        return function(e4, t5) {
          const n2 = le2.get(e4);
          return n2 && n2.get(t5);
        }(toRaw(this._object), this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e4) {
        this._getter = e4, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(toRef, "toRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e4, t5, n2) {
        this.fn = e4, this.setter = t5, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ae2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t5, this.isSSR = n2;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && ee2 !== this) return batch(this, true), true;
      }
      get value() {
        const e4 = this.dep.track();
        return refreshComputed(this), e4 && (e4.version = this.dep.version), this._value;
      }
      set value(e4) {
        this.setter && this.setter(e4);
      }
    };
    Ae2 = {};
    Te2 = /* @__PURE__ */ new WeakMap();
    __name(watch$1, "watch$1");
    __name(traverse, "traverse");
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    $e2 = [];
    Pe2 = -1;
    je2 = [];
    Ee2 = null;
    He2 = 0;
    Me2 = Promise.resolve();
    Ne2 = null;
    __name(nextTick2, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    getId = /* @__PURE__ */ __name((e4) => null == e4.id ? 2 & e4.flags ? -1 : 1 / 0 : e4.id, "getId");
    __name(flushJobs, "flushJobs");
    Ie2 = null;
    Ve2 = null;
    __name(setCurrentRenderingInstance$1, "setCurrentRenderingInstance$1");
    __name(withCtx, "withCtx");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    De2 = Symbol("_vte");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    __name(setRef, "setRef");
    isComment$1 = /* @__PURE__ */ __name((e4) => 8 === e4.nodeType, "isComment$1");
    getGlobalThis().requestIdleCallback, getGlobalThis().cancelIdleCallback;
    isAsyncWrapper = /* @__PURE__ */ __name((e4) => !!e4.type.__asyncLoader, "isAsyncWrapper");
    __name(defineAsyncComponent, "defineAsyncComponent");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e4) => e4.type.__isKeepAlive, "isKeepAlive");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e4) => (t5, n2 = yt2) => {
      _t2 && "sp" !== e4 || injectHook(e4, (...e5) => t5(...e5), n2);
    }, "createHook");
    Be2 = createHook("bm");
    Le2 = createHook("m");
    Fe2 = createHook("bu");
    Ue2 = createHook("u");
    ze2 = createHook("bum");
    We2 = createHook("um");
    qe = createHook("sp");
    Je2 = createHook("rtg");
    Ge2 = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    Ke2 = "components";
    __name(resolveComponent, "resolveComponent");
    Ze2 = Symbol.for("v-ndc");
    __name(resolveDynamicComponent, "resolveDynamicComponent");
    __name(resolveAsset, "resolveAsset");
    __name(resolve, "resolve");
    getPublicInstance = /* @__PURE__ */ __name((e4) => e4 ? isStatefulComponent(e4) ? getComponentPublicInstance(e4) : getPublicInstance(e4.parent) : null, "getPublicInstance");
    Xe2 = T(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e4) => e4, "$"), $el: /* @__PURE__ */ __name((e4) => e4.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e4) => e4.data, "$data"), $props: /* @__PURE__ */ __name((e4) => e4.props, "$props"), $attrs: /* @__PURE__ */ __name((e4) => e4.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e4) => e4.slots, "$slots"), $refs: /* @__PURE__ */ __name((e4) => e4.refs, "$refs"), $parent: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.parent), "$parent"), $root: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.root), "$root"), $host: /* @__PURE__ */ __name((e4) => e4.ce, "$host"), $emit: /* @__PURE__ */ __name((e4) => e4.emit, "$emit"), $options: /* @__PURE__ */ __name((e4) => resolveMergedOptions(e4), "$options"), $forceUpdate: /* @__PURE__ */ __name((e4) => e4.f || (e4.f = () => {
      queueJob(e4.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e4) => e4.n || (e4.n = nextTick2.bind(e4.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e4) => instanceWatch.bind(e4), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e4, t5) => e4 !== x2 && !e4.__isScriptSetup && hasOwn(e4, t5), "hasSetupBinding");
    Qe2 = { get({ _: e4 }, t5) {
      if ("__v_skip" === t5) return true;
      const { ctx: n2, setupState: r6, data: s2, props: o4, accessCache: i3, type: a5, appContext: l3 } = e4;
      let c3;
      if ("$" !== t5[0]) {
        const a6 = i3[t5];
        if (void 0 !== a6) switch (a6) {
          case 1:
            return r6[t5];
          case 2:
            return s2[t5];
          case 4:
            return n2[t5];
          case 3:
            return o4[t5];
        }
        else {
          if (hasSetupBinding(r6, t5)) return i3[t5] = 1, r6[t5];
          if (s2 !== x2 && hasOwn(s2, t5)) return i3[t5] = 2, s2[t5];
          if ((c3 = e4.propsOptions[0]) && hasOwn(c3, t5)) return i3[t5] = 3, o4[t5];
          if (n2 !== x2 && hasOwn(n2, t5)) return i3[t5] = 4, n2[t5];
          Ye2 && (i3[t5] = 0);
        }
      }
      const u2 = Xe2[t5];
      let p5, f5;
      return u2 ? ("$attrs" === t5 && track(e4.attrs, 0, ""), u2(e4)) : (p5 = a5.__cssModules) && (p5 = p5[t5]) ? p5 : n2 !== x2 && hasOwn(n2, t5) ? (i3[t5] = 4, n2[t5]) : (f5 = l3.config.globalProperties, hasOwn(f5, t5) ? f5[t5] : void 0);
    }, set({ _: e4 }, t5, n2) {
      const { data: r6, setupState: s2, ctx: o4 } = e4;
      return hasSetupBinding(s2, t5) ? (s2[t5] = n2, true) : r6 !== x2 && hasOwn(r6, t5) ? (r6[t5] = n2, true) : !hasOwn(e4.props, t5) && (("$" !== t5[0] || !(t5.slice(1) in e4)) && (o4[t5] = n2, true));
    }, has({ _: { data: e4, setupState: t5, accessCache: n2, ctx: r6, appContext: s2, propsOptions: o4 } }, i3) {
      let a5;
      return !!n2[i3] || e4 !== x2 && hasOwn(e4, i3) || hasSetupBinding(t5, i3) || (a5 = o4[0]) && hasOwn(a5, i3) || hasOwn(r6, i3) || hasOwn(Xe2, i3) || hasOwn(s2.config.globalProperties, i3);
    }, defineProperty(e4, t5, n2) {
      return null != n2.get ? e4._.accessCache[t5] = 0 : hasOwn(n2, "value") && this.set(e4, t5, n2.value, null), Reflect.defineProperty(e4, t5, n2);
    } };
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    __name(withAsyncContext, "withAsyncContext");
    Ye2 = true;
    __name(applyOptions, "applyOptions");
    __name(callHook, "callHook");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions2, "mergeOptions");
    et2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray, created: mergeAsArray, beforeMount: mergeAsArray, mounted: mergeAsArray, beforeUpdate: mergeAsArray, updated: mergeAsArray, beforeDestroy: mergeAsArray, beforeUnmount: mergeAsArray, destroyed: mergeAsArray, unmounted: mergeAsArray, activated: mergeAsArray, deactivated: mergeAsArray, errorCaptured: mergeAsArray, serverPrefetch: mergeAsArray, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e4, t5) {
      if (!e4) return t5;
      if (!t5) return e4;
      const n2 = T(/* @__PURE__ */ Object.create(null), e4);
      for (const r6 in t5) n2[r6] = mergeAsArray(e4[r6], t5[r6]);
      return n2;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e4, t5) {
      return mergeObjectOptions(normalizeInject(e4), normalizeInject(t5));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    tt2 = 0;
    __name(createAppAPI, "createAppAPI");
    nt2 = null;
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    rt2 = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(rt2), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e4) => Object.getPrototypeOf(e4) === rt2, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    st2 = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e4) => "_" === e4[0] || "$stable" === e4, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e4) => $(e4) ? e4.map(normalizeVNode$1) : [normalizeVNode$1(e4)], "normalizeSlotValue");
    normalizeSlot2 = /* @__PURE__ */ __name((e4, t5, n2) => {
      if (t5._n) return t5;
      const r6 = withCtx((...e5) => normalizeSlotValue(t5(...e5)), n2);
      return r6._c = false, r6;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e4, t5, n2) => {
      const r6 = e4._ctx;
      for (const n3 in e4) {
        if (isInternalKey(n3)) continue;
        const s2 = e4[n3];
        if (isFunction(s2)) t5[n3] = normalizeSlot2(0, s2, r6);
        else if (null != s2) {
          const e5 = normalizeSlotValue(s2);
          t5[n3] = () => e5;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = normalizeSlotValue(t5);
      e4.slots.default = () => n2;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e4, t5, n2) => {
      for (const r6 in t5) (n2 || "_" !== r6) && (e4[r6] = t5[r6]);
    }, "assignSlots");
    queuePostRenderEffect = /* @__PURE__ */ __name(function(e4, t5) {
      t5 && t5.pendingBranch ? $(e4) ? t5.effects.push(...e4) : t5.effects.push(e4) : queuePostFlushCb(e4);
    }, "queuePostRenderEffect");
    __name(createRenderer, "createRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    ot2 = Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(ot2), "useSSRContext");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    getModelModifiers = /* @__PURE__ */ __name((e4, t5) => "modelValue" === t5 || "model-value" === t5 ? e4.modelModifiers : e4[`${t5}Modifiers`] || e4[`${H(t5)}Modifiers`] || e4[`${N(t5)}Modifiers`], "getModelModifiers");
    __name(emit2, "emit");
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot$1, "renderComponentRoot$1");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e4) => {
      let t5;
      for (const n2 in e4) ("class" === n2 || "style" === n2 || isOn(n2)) && ((t5 || (t5 = {}))[n2] = e4[n2]);
      return t5;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = {};
      for (const r6 in e4) isModelListener(r6) && r6.slice(9) in t5 || (n2[r6] = e4[r6]);
      return n2;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    isSuspense = /* @__PURE__ */ __name((e4) => e4.__isSuspense, "isSuspense");
    it2 = 0;
    at = { name: "Suspense", __isSuspense: true, process(e4, t5, n2, r6, s2, o4, i3, a5, l3, c3) {
      if (null == e4) !function(e5, t6, n3, r7, s3, o5, i4, a6, l4) {
        const { p: c4, o: { createElement: u2 } } = l4, p5 = u2("div"), f5 = e5.suspense = createSuspenseBoundary(e5, s3, r7, t6, p5, n3, o5, i4, a6, l4);
        c4(null, f5.pendingBranch = e5.ssContent, p5, null, r7, f5, o5, i4), f5.deps > 0 ? (triggerEvent(e5, "onPending"), triggerEvent(e5, "onFallback"), c4(null, e5.ssFallback, t6, n3, r7, null, o5, i4), setActiveBranch(f5, e5.ssFallback)) : f5.resolve(false, true);
      }(t5, n2, r6, s2, o4, i3, a5, l3, c3);
      else {
        if (o4 && o4.deps > 0 && !e4.suspense.isInFallback) return t5.suspense = e4.suspense, t5.suspense.vnode = t5, void (t5.el = e4.el);
        !function(e5, t6, n3, r7, s3, o5, i4, a6, { p: l4, um: c4, o: { createElement: u2 } }) {
          const p5 = t6.suspense = e5.suspense;
          p5.vnode = t6, t6.el = e5.el;
          const f5 = t6.ssContent, d6 = t6.ssFallback, { activeBranch: g4, pendingBranch: m4, isInFallback: y3, isHydrating: v3 } = p5;
          if (m4) p5.pendingBranch = f5, isSameVNodeType(f5, m4) ? (l4(m4, f5, p5.hiddenContainer, null, s3, p5, o5, i4, a6), p5.deps <= 0 ? p5.resolve() : y3 && (v3 || (l4(g4, d6, n3, r7, s3, null, o5, i4, a6), setActiveBranch(p5, d6)))) : (p5.pendingId = it2++, v3 ? (p5.isHydrating = false, p5.activeBranch = m4) : c4(m4, s3, p5), p5.deps = 0, p5.effects.length = 0, p5.hiddenContainer = u2("div"), y3 ? (l4(null, f5, p5.hiddenContainer, null, s3, p5, o5, i4, a6), p5.deps <= 0 ? p5.resolve() : (l4(g4, d6, n3, r7, s3, null, o5, i4, a6), setActiveBranch(p5, d6))) : g4 && isSameVNodeType(f5, g4) ? (l4(g4, f5, n3, r7, s3, p5, o5, i4, a6), p5.resolve(true)) : (l4(null, f5, p5.hiddenContainer, null, s3, p5, o5, i4, a6), p5.deps <= 0 && p5.resolve()));
          else if (g4 && isSameVNodeType(f5, g4)) l4(g4, f5, n3, r7, s3, p5, o5, i4, a6), setActiveBranch(p5, f5);
          else if (triggerEvent(t6, "onPending"), p5.pendingBranch = f5, 512 & f5.shapeFlag ? p5.pendingId = f5.component.suspenseId : p5.pendingId = it2++, l4(null, f5, p5.hiddenContainer, null, s3, p5, o5, i4, a6), p5.deps <= 0) p5.resolve();
          else {
            const { timeout: e6, pendingId: t7 } = p5;
            e6 > 0 ? setTimeout(() => {
              p5.pendingId === t7 && p5.fallback(d6);
            }, e6) : 0 === e6 && p5.fallback(d6);
          }
        }(e4, t5, n2, r6, s2, i3, a5, l3, c3);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e4, t5, n2, r6, s2, o4, i3, a5, l3) {
      const c3 = t5.suspense = createSuspenseBoundary(t5, r6, n2, e4.parentNode, document.createElement("div"), null, s2, o4, i3, a5, true), u2 = l3(e4, c3.pendingBranch = t5.ssContent, n2, c3, o4, i3);
      0 === c3.deps && c3.resolve(false, true);
      return u2;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e4) {
      const { shapeFlag: t5, children: n2 } = e4, r6 = 32 & t5;
      e4.ssContent = normalizeSuspenseSlot(r6 ? n2.default : n2), e4.ssFallback = r6 ? normalizeSuspenseSlot(n2.fallback) : createVNode(ut2);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(setActiveBranch, "setActiveBranch");
    lt = Symbol.for("v-fgt");
    ct2 = Symbol.for("v-txt");
    ut2 = Symbol.for("v-cmt");
    pt2 = Symbol.for("v-stc");
    ft2 = [];
    dt2 = null;
    ht2 = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(isVNode, "isVNode");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e4 }) => null != e4 ? e4 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e4, ref_key: t5, ref_for: n2 }) => ("number" == typeof e4 && (e4 = "" + e4), null != e4 ? isString(e4) || isRef(e4) || isFunction(e4) ? { i: Ie2, r: e4, k: t5, f: !!n2 } : e4 : null), "normalizeRef");
    createVNode = /* @__PURE__ */ __name(function(e4, t5 = null, n2 = null, r6 = 0, s2 = null, o4 = false) {
      e4 && e4 !== Ze2 || (e4 = ut2);
      if (isVNode(e4)) {
        const r7 = cloneVNode(e4, t5, true);
        return n2 && normalizeChildren(r7, n2), ht2 > 0 && !o4 && dt2 && (6 & r7.shapeFlag ? dt2[dt2.indexOf(e4)] = r7 : dt2.push(r7)), r7.patchFlag = -2, r7;
      }
      i3 = e4, isFunction(i3) && "__vccOpts" in i3 && (e4 = e4.__vccOpts);
      var i3;
      if (t5) {
        t5 = function(e6) {
          return e6 ? isProxy(e6) || isInternalObject(e6) ? T({}, e6) : e6 : null;
        }(t5);
        let { class: e5, style: n3 } = t5;
        e5 && !isString(e5) && (t5.class = normalizeClass(e5)), isObject(n3) && (isProxy(n3) && !$(n3) && (n3 = T({}, n3)), t5.style = normalizeStyle(n3));
      }
      const a5 = isString(e4) ? 1 : isSuspense(e4) ? 128 : ((e5) => e5.__isTeleport)(e4) ? 64 : isObject(e4) ? 4 : isFunction(e4) ? 2 : 0;
      return function(e5, t6 = null, n3 = null, r7 = 0, s3 = null, o5 = e5 === lt ? 0 : 1, i4 = false, a6 = false) {
        const l3 = { __v_isVNode: true, __v_skip: true, type: e5, props: t6, key: t6 && normalizeKey(t6), ref: t6 && normalizeRef(t6), scopeId: Ve2, slotScopeIds: null, children: n3, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o5, patchFlag: r7, dynamicProps: s3, dynamicChildren: null, appContext: null, ctx: Ie2 };
        return a6 ? (normalizeChildren(l3, n3), 128 & o5 && e5.normalize(l3)) : n3 && (l3.shapeFlag |= isString(n3) ? 8 : 16), ht2 > 0 && !i4 && dt2 && (l3.patchFlag > 0 || 6 & o5) && 32 !== l3.patchFlag && dt2.push(l3), l3;
      }(e4, t5, n2, r6, s2, a5, o4, true);
    }, "createVNode");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(normalizeVNode$1, "normalizeVNode$1");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    gt2 = createAppContext();
    mt2 = 0;
    __name(createComponentInstance$1, "createComponentInstance$1");
    yt2 = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => yt2 || Ie2, "getCurrentInstance");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t5, n2) => {
        let r6;
        return (r6 = e4[t5]) || (r6 = e4[t5] = []), r6.push(n2), (e5) => {
          r6.length > 1 ? r6.forEach((t6) => t6(e5)) : r6[0](e5);
        };
      }, "registerGlobalSetter");
      vt2 = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => yt2 = e5), bt2 = registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => _t2 = e5);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e4) => {
      const t5 = yt2;
      return vt2(e4), e4.scope.on(), () => {
        e4.scope.off(), vt2(t5);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      yt2 && yt2.scope.off(), vt2(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    _t2 = false;
    __name(setupComponent$1, "setupComponent$1");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    kt2 = { get: /* @__PURE__ */ __name((e4, t5) => (track(e4, 0, ""), e4[t5]), "get") };
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = function(e5, t6, n3 = false) {
        let r6, s2;
        return isFunction(e5) ? r6 = e5 : (r6 = e5.get, s2 = e5.set), new ComputedRefImpl(r6, s2, n3);
      }(e4, 0, _t2);
      return n2;
    }, "computed");
    __name(h, "h");
    wt2 = "3.5.13";
    St2 = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode, normalizeVNode: normalizeVNode$1, ensureValidVNode: /* @__PURE__ */ __name(function ensureValidVNode$1(e4) {
      return e4.some((e5) => !isVNode(e5) || e5.type !== ut2 && !(e5.type === lt && !ensureValidVNode$1(e5.children))) ? e4 : null;
    }, "ensureValidVNode$1") };
    Ct2 = St2;
    Rt2 = "undefined" != typeof document ? document : null;
    xt2 = Rt2 && Rt2.createElement("template");
    At2 = { insert: /* @__PURE__ */ __name((e4, t5, n2) => {
      t5.insertBefore(e4, n2 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e4) => {
      const t5 = e4.parentNode;
      t5 && t5.removeChild(e4);
    }, "remove"), createElement: /* @__PURE__ */ __name((e4, t5, n2, r6) => {
      const s2 = "svg" === t5 ? Rt2.createElementNS("http://www.w3.org/2000/svg", e4) : "mathml" === t5 ? Rt2.createElementNS("http://www.w3.org/1998/Math/MathML", e4) : n2 ? Rt2.createElement(e4, { is: n2 }) : Rt2.createElement(e4);
      return "select" === e4 && r6 && null != r6.multiple && s2.setAttribute("multiple", r6.multiple), s2;
    }, "createElement"), createText: /* @__PURE__ */ __name((e4) => Rt2.createTextNode(e4), "createText"), createComment: /* @__PURE__ */ __name((e4) => Rt2.createComment(e4), "createComment"), setText: /* @__PURE__ */ __name((e4, t5) => {
      e4.nodeValue = t5;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e4, t5) => {
      e4.textContent = t5;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e4) => e4.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e4) => e4.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e4) => Rt2.querySelector(e4), "querySelector"), setScopeId(e4, t5) {
      e4.setAttribute(t5, "");
    }, insertStaticContent(e4, t5, n2, r6, s2, o4) {
      const i3 = n2 ? n2.previousSibling : t5.lastChild;
      if (s2 && (s2 === o4 || s2.nextSibling)) for (; t5.insertBefore(s2.cloneNode(true), n2), s2 !== o4 && (s2 = s2.nextSibling); ) ;
      else {
        xt2.innerHTML = "svg" === r6 ? `<svg>${e4}</svg>` : "mathml" === r6 ? `<math>${e4}</math>` : e4;
        const s3 = xt2.content;
        if ("svg" === r6 || "mathml" === r6) {
          const e5 = s3.firstChild;
          for (; e5.firstChild; ) s3.appendChild(e5.firstChild);
          s3.removeChild(e5);
        }
        t5.insertBefore(s3, n2);
      }
      return [i3 ? i3.nextSibling : t5.firstChild, n2 ? n2.previousSibling : t5.lastChild];
    } };
    Tt = Symbol("_vtc");
    Ot2 = Symbol("_vod");
    $t = Symbol("_vsh");
    Pt2 = Symbol("");
    jt2 = /(^|;)\s*display\s*:/;
    Et2 = /\s*!important$/;
    __name(setStyle, "setStyle");
    Ht = ["Webkit", "Moz", "ms"];
    Mt = {};
    Nt2 = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    It = Symbol("_vei");
    __name(patchEvent, "patchEvent");
    Vt = /(?:Once|Passive|Capture)$/;
    Dt = 0;
    Bt = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => Dt || (Bt.then(() => Dt = 0), Dt = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && e4.charCodeAt(2) > 96 && e4.charCodeAt(2) < 123, "isNativeOn");
    Lt = T({ patchProp: /* @__PURE__ */ __name((e4, t5, n2, r6, s2, o4) => {
      const i3 = "svg" === s2;
      "class" === t5 ? function(e5, t6, n3) {
        const r7 = e5[Tt];
        r7 && (t6 = (t6 ? [t6, ...r7] : [...r7]).join(" ")), null == t6 ? e5.removeAttribute("class") : n3 ? e5.setAttribute("class", t6) : e5.className = t6;
      }(e4, r6, i3) : "style" === t5 ? function(e5, t6, n3) {
        const r7 = e5.style, s3 = isString(n3);
        let o5 = false;
        if (n3 && !s3) {
          if (t6) if (isString(t6)) for (const e6 of t6.split(";")) {
            const t7 = e6.slice(0, e6.indexOf(":")).trim();
            null == n3[t7] && setStyle(r7, t7, "");
          }
          else for (const e6 in t6) null == n3[e6] && setStyle(r7, e6, "");
          for (const e6 in n3) "display" === e6 && (o5 = true), setStyle(r7, e6, n3[e6]);
        } else if (s3) {
          if (t6 !== n3) {
            const e6 = r7[Pt2];
            e6 && (n3 += ";" + e6), r7.cssText = n3, o5 = jt2.test(n3);
          }
        } else t6 && e5.removeAttribute("style");
        Ot2 in e5 && (e5[Ot2] = o5 ? r7.display : "", e5[$t] && (r7.display = "none"));
      }(e4, n2, r6) : isOn(t5) ? isModelListener(t5) || patchEvent(e4, t5, 0, r6, o4) : ("." === t5[0] ? (t5 = t5.slice(1), 1) : "^" === t5[0] ? (t5 = t5.slice(1), 0) : function(e5, t6, n3, r7) {
        if (r7) return "innerHTML" === t6 || "textContent" === t6 || !!(t6 in e5 && isNativeOn(t6) && isFunction(n3));
        if ("spellcheck" === t6 || "draggable" === t6 || "translate" === t6) return false;
        if ("form" === t6) return false;
        if ("list" === t6 && "INPUT" === e5.tagName) return false;
        if ("type" === t6 && "TEXTAREA" === e5.tagName) return false;
        if ("width" === t6 || "height" === t6) {
          const t7 = e5.tagName;
          if ("IMG" === t7 || "VIDEO" === t7 || "CANVAS" === t7 || "SOURCE" === t7) return false;
        }
        if (isNativeOn(t6) && isString(n3)) return false;
        return t6 in e5;
      }(e4, t5, r6, i3)) ? (patchDOMProp(e4, t5, r6), e4.tagName.includes("-") || "value" !== t5 && "checked" !== t5 && "selected" !== t5 || patchAttr(e4, t5, r6, i3, 0, "value" !== t5)) : !e4._isVueCE || !/[A-Z]/.test(t5) && isString(r6) ? ("true-value" === t5 ? e4._trueValue = r6 : "false-value" === t5 && (e4._falseValue = r6), patchAttr(e4, t5, r6, i3)) : patchDOMProp(e4, H(t5), r6, 0, t5);
    }, "patchProp") }, At2);
    createApp = /* @__PURE__ */ __name((...e4) => {
      const t5 = (Ft || (Ft = createRenderer(Lt))).createApp(...e4), { mount: n2 } = t5;
      return t5.mount = (e5) => {
        const r6 = function(e6) {
          if (isString(e6)) {
            return document.querySelector(e6);
          }
          return e6;
        }(e5);
        if (!r6) return;
        const s2 = t5._component;
        isFunction(s2) || s2.render || s2.template || (s2.template = r6.innerHTML), 1 === r6.nodeType && (r6.textContent = "");
        const o4 = n2(r6, false, function(e6) {
          if (e6 instanceof SVGElement) return "svg";
          if ("function" == typeof MathMLElement && e6 instanceof MathMLElement) return "mathml";
        }(r6));
        return r6 instanceof Element && (r6.removeAttribute("v-cloak"), r6.setAttribute("data-v-app", "")), o4;
      }, t5;
    }, "createApp");
    VueResolver = /* @__PURE__ */ __name((e4, t5) => {
      return isRef(t5) ? isFunction(n2 = t5) ? n2() : unref(n2) : t5;
      var n2;
    }, "VueResolver");
    Ut = "usehead";
    __name(useHead, "useHead");
    __name(createHead, "createHead");
    zt = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderAttr, "ssrRenderAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: Wt } = Ct2);
    __name(ssrRenderSlot, "ssrRenderSlot");
    qt = /^<!--[\s\S]*-->$/;
    Jt = /<!--[^]*?-->/gm;
    __name(isComment, "isComment");
    __name(ssrInterpolate, "ssrInterpolate");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t5, n2) => {
        let r6;
        return (r6 = e4[t5]) || (r6 = e4[t5] = []), r6.push(n2), (e5) => {
          r6.length > 1 ? r6.forEach((t6) => t6(e5)) : r6[0](e5);
        };
      }, "registerGlobalSetter");
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => e5), registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => e5);
    }
    __name(ssrRenderList, "ssrRenderList");
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    ({ createComponentInstance: Gt, setCurrentRenderingInstance: Kt, setupComponent: Zt, renderComponentRoot: Xt, normalizeVNode: Qt } = Ct2);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: Yt } = Ct2);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    en = { meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }], link: [], style: [], script: [], noscript: [], title: "Nuxt Product Catalog" };
    tn = { id: "teleports" };
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    nn = `<div${propsToString({ id: "__nuxt" })}>`;
    rn = "</div>";
    getClientManifest = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e4) => e4.default || e4).then((e4) => "function" == typeof e4 ? e4() : e4), "getClientManifest");
    sn = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e4) => e4.default || e4));
    on2 = lazyCachedFunction(async () => {
      const e4 = await getClientManifest();
      if (!e4) throw new Error("client.manifest is not available");
      const t5 = await Promise.resolve().then(() => (init_server(), server_exports)).then(function(e5) {
        return e5.s;
      }).then((e5) => e5.default || e5);
      if (!t5) throw new Error("Server bundle is not available");
      return createRenderer$1(t5, { manifest: e4, renderToString: /* @__PURE__ */ __name(async function(e5, t6) {
        const n2 = await renderToString(e5, t6);
        return nn + n2 + rn;
      }, "renderToString"), buildAssetsURL });
    });
    an = lazyCachedFunction(async () => {
      const e4 = await getClientManifest(), t5 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e5) => e5.template).catch(() => "").then((e5) => nn + e5 + rn), n2 = createRenderer$1(() => () => {
      }, { manifest: e4, renderToString: /* @__PURE__ */ __name(() => t5, "renderToString"), buildAssetsURL }), r6 = await n2.renderToString({});
      return { rendererContext: n2.rendererContext, renderToString: /* @__PURE__ */ __name((e5) => {
        const t6 = useRuntimeConfig2(e5.event);
        return e5.modules ||= /* @__PURE__ */ new Set(), e5.payload.serverRendered = false, e5.config = { public: t6.public, app: t6.app }, Promise.resolve(r6);
      }, "renderToString") };
    });
    __name(lazyCachedFunction, "lazyCachedFunction");
    ln = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e4, t5) {
        super(e4), this.name = "DevalueError", this.path = t5.join("");
      }
    };
    __name(is_primitive, "is_primitive");
    cn = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    un = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    pn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    fn = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    dn = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    __name(encode64, "encode64");
    hn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    __name(splitPayload, "splitPayload");
    __name(defineHeadPlugin, "defineHeadPlugin");
    sortTags = /* @__PURE__ */ __name((e4, t5) => e4._w === t5._w ? e4._p - t5._p : e4._w - t5._w, "sortTags");
    gn = "%separator";
    mn = new RegExp(`${gn}(?:\\s*${gn})*`, "g");
    __name(processTemplateParams, "processTemplateParams");
    formatKey = /* @__PURE__ */ __name((e4) => e4.includes(":key") ? e4 : e4.split(":").join(":key:"), "formatKey");
    yn = { key: "aliasSorting", hooks: { "tags:resolve": /* @__PURE__ */ __name((e4) => {
      let t5 = false;
      for (const n2 of e4.tags) {
        const r6 = n2.tagPriority;
        if (!r6) continue;
        const s2 = String(r6);
        if (s2.startsWith("before:")) {
          const r7 = formatKey(s2.slice(7)), o4 = e4.tagMap.get(r7);
          o4 && ("number" == typeof o4.tagPriority && (n2.tagPriority = o4.tagPriority), n2._p = o4._p - 1, t5 = true);
        } else if (s2.startsWith("after:")) {
          const r7 = formatKey(s2.slice(6)), o4 = e4.tagMap.get(r7);
          o4 && ("number" == typeof o4.tagPriority && (n2.tagPriority = o4.tagPriority), n2._p = o4._p + 1, t5 = true);
        }
      }
      t5 && (e4.tags = e4.tags.sort(sortTags));
    }, "tags:resolve") } };
    vn = defineHeadPlugin({ key: "deprecations", hooks: { "entries:normalize": /* @__PURE__ */ __name(({ tags: e4 }) => {
      for (const t5 of e4) t5.props.children && (t5.innerHTML = t5.props.children, delete t5.props.children), t5.props.hid && (t5.key = t5.props.hid, delete t5.props.hid), t5.props.vmid && (t5.key = t5.props.vmid, delete t5.props.vmid), t5.props.body && (t5.tagPosition = "bodyClose", delete t5.props.body);
    }, "entries:normalize") } });
    __name(walkPromises, "walkPromises");
    bn = defineHeadPlugin({ key: "promises", hooks: { "entries:resolve": /* @__PURE__ */ __name(async (e4) => {
      const t5 = [];
      for (const n2 in e4.entries) e4.entries[n2]._promisesProcessed || t5.push(walkPromises(e4.entries[n2].input).then((t6) => {
        e4.entries[n2].input = t6, e4.entries[n2]._promisesProcessed = true;
      }));
      await Promise.all(t5);
    }, "entries:resolve") } });
    _n = { meta: "content", link: "href", htmlAttrs: "lang" };
    kn = ["innerHTML", "textContent"];
    wn = defineHeadPlugin((e4) => ({ key: "template-params", hooks: { "entries:normalize": /* @__PURE__ */ __name((t5) => {
      const n2 = t5.tags.filter((e5) => "templateParams" === e5.tag && "server" === e5.mode)?.[0]?.props || {};
      Object.keys(n2).length && (e4._ssrPayload = { templateParams: { ...e4._ssrPayload?.templateParams || {}, ...n2 } });
    }, "entries:normalize"), "tags:resolve": /* @__PURE__ */ __name(({ tagMap: t5, tags: n2 }) => {
      const r6 = t5.get("templateParams")?.props || {}, s2 = r6.separator || "|";
      delete r6.separator, r6.pageTitle = processTemplateParams(r6.pageTitle || e4._title || "", r6, s2);
      for (const e5 of n2) {
        if (false === e5.processTemplateParams) continue;
        const t6 = _n[e5.tag];
        if (t6 && "string" == typeof e5.props[t6]) e5.props[t6] = processTemplateParams(e5.props[t6], r6, s2);
        else if (e5.processTemplateParams || "titleTemplate" === e5.tag || "title" === e5.tag) for (const t7 of kn) "string" == typeof e5[t7] && (e5[t7] = processTemplateParams(e5[t7], r6, s2, "script" === e5.tag && e5.props.type.endsWith("json")));
      }
      e4._templateParams = r6, e4._separator = s2;
    }, "tags:resolve"), "tags:afterResolve": /* @__PURE__ */ __name(({ tagMap: t5 }) => {
      const n2 = t5.get("title");
      n2?.textContent && false !== n2.processTemplateParams && (n2.textContent = processTemplateParams(n2.textContent, e4._templateParams, e4._separator));
    }, "tags:afterResolve") } }));
    Sn = { disableDefaults: true, disableCapoSorting: false, plugins: [vn, bn, wn, yn] };
    Cn = {};
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    Rn = !!tn.id;
    xn = Rn ? `<div${propsToString(tn)}>` : "";
    An = Rn ? "</div>" : "";
    Tn = /^[^?]*\/_payload.json(?:\?.*)?$/;
    On = defineRenderHandler(async (e4) => {
      const t5 = useNitroApp(), n2 = e4.path.startsWith("/__nuxt_error") ? getQuery$1(e4) : null;
      if (n2 && n2.statusCode && (n2.statusCode = Number.parseInt(n2.statusCode)), n2 && !("__unenv__" in e4.node.req)) throw createError2({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const r6 = void 0;
      let a5 = n2?.url || e4.path;
      const f5 = Tn.test(a5);
      f5 && (a5 = a5.substring(0, a5.lastIndexOf("/")) || "/", e4._path = a5, e4.node.req.url = a5);
      const d6 = getRouteRules(e4), g4 = createHead(Sn), m4 = { mode: "server" };
      g4.push(en, m4);
      const y3 = { url: a5, event: e4, runtimeConfig: useRuntimeConfig2(e4), noSSR: e4.context.nuxt?.noSSR || false === d6.ssr && true || false, head: g4, error: !!n2, nuxt: void 0, payload: n2 ? { error: n2 } : {}, _payloadReducers: /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set(), islandContext: r6 }, v3 = y3.noSSR ? await an() : await on2();
      for (const e5 of await getClientManifest().then((e6) => Object.values(e6).filter((e7) => e7._globalCSS).map((e7) => e7.src))) y3.modules.add(e5);
      const b3 = await v3.renderToString(y3).catch(async (e5) => {
        if (y3._renderResponse && "skipping render" === e5.message) return {};
        const t6 = !n2 && y3.payload?.error || e5;
        throw await y3.nuxt?.hooks.callHook("app:error", t6), t6;
      });
      if (await y3.nuxt?.hooks.callHook("app:rendered", { ssrContext: y3, renderResult: b3 }), y3._renderResponse) return y3._renderResponse;
      if (y3.payload?.error && !n2) throw y3.payload.error;
      if (f5) {
        const e5 = function(e6) {
          return { body: stringify(splitPayload(e6).payload, e6._payloadReducers), statusCode: getResponseStatus(e6.event), statusMessage: getResponseStatusText(e6.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(y3);
        return e5;
      }
      const _4 = await async function(e5) {
        const t6 = await sn(), n3 = /* @__PURE__ */ new Set();
        for (const r7 of e5) if (r7 in t6 && t6[r7]) for (const e6 of await t6[r7]()) n3.add(e6);
        return Array.from(n3).map((e6) => ({ innerHTML: e6 }));
      }(y3.modules ?? []), k3 = d6.noScripts, { styles: w3, scripts: S4 } = getRequestDependencies(y3, v3.rendererContext);
      y3._preloadManifest && g4.push({ link: [{ rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${y3.runtimeConfig.app.buildId}.json`) }] }, { ...m4, tagPriority: "low" }), _4.length && g4.push({ style: _4 });
      {
        const e5 = [];
        for (const t6 of Object.values(w3)) e5.push({ rel: "stylesheet", href: v3.rendererContext.buildAssetsURL(t6.file), crossorigin: "" });
        e5.length && g4.push({ link: e5 }, m4);
      }
      k3 || (g4.push({ link: getPreloadLinks(y3, v3.rendererContext) }, m4), g4.push({ link: getPrefetchLinks(y3, v3.rendererContext) }, m4), g4.push({ script: renderPayloadJsonScript({ ssrContext: y3, data: y3.payload }) }, { ...m4, tagPosition: "bodyClose", tagPriority: "high" })), d6.noScripts || g4.push({ script: Object.values(S4).map((e5) => ({ type: e5.module ? "module" : null, src: v3.rendererContext.buildAssetsURL(e5.file), defer: !e5.module || null, tagPosition: "head", crossorigin: "" })) }, m4);
      const { headTags: C3, bodyTags: R3, bodyTagsOpen: x4, htmlAttrs: A3, bodyAttrs: T3 } = await renderSSRHead(g4, Cn), O3 = { island: false, htmlAttrs: A3 ? [A3] : [], head: normalizeChunks([C3]), bodyAttrs: T3 ? [T3] : [], bodyPrepend: normalizeChunks([x4, y3.teleports?.body]), body: [b3.html, xn + (Rn ? joinTags([y3.teleports?.[`#${tn.id}`]]) : "") + An], bodyAppend: [R3] };
      await t5.hooks.callHook("render:html", O3, { event: e4 });
      var $3;
      return { body: ($3 = O3, `<!DOCTYPE html><html${joinAttrs($3.htmlAttrs)}><head>${joinTags($3.head)}</head><body${joinAttrs($3.bodyAttrs)}>${joinTags($3.bodyPrepend)}${joinTags($3.body)}${joinTags($3.bodyAppend)}</body></html>`), statusCode: getResponseStatus(e4), statusMessage: getResponseStatusText(e4), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
    });
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    $n = Object.freeze(Object.defineProperty({ __proto__: null, default: On }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/chunks/nitro/nitro.mjs
import { EventEmitter as t4 } from "node:events";
import { Buffer as r5 } from "node:buffer";
import { setImmediate as s, clearImmediate as a4 } from "node:timers";
function createNotImplementedError2(e4) {
  return new Error(`[unenv] ${e4} is not implemented yet!`);
}
function notImplemented2(e4) {
  return Object.assign(() => {
    throw createNotImplementedError2(e4);
  }, { __unenv__: true });
}
function jsonParseTransform$2(e4, t5) {
  if (!("__proto__" === e4 || "constructor" === e4 && t5 && "object" == typeof t5 && "prototype" in t5)) return t5;
  !function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  }(e4);
}
function destr$2(e4, t5 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const r6 = e4.trim();
  if (r6.length <= 9) switch (r6.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!bt3.test(e4)) {
    if (t5.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (yt3.test(e4) || wt3.test(e4)) {
      if (t5.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform$2);
    }
    return JSON.parse(e4);
  } catch (r7) {
    if (t5.strict) throw r7;
    return e4;
  }
}
function encodeQueryValue$12(e4) {
  return (t5 = "string" == typeof e4 ? e4 : JSON.stringify(e4), encodeURI("" + t5).replace(Tt2, "|")).replace(Et3, "%2B").replace(St3, "+").replace(_t3, "%23").replace(vt3, "%26").replace(Ct3, "`").replace(kt3, "^").replace(xt3, "%2F");
  var t5;
}
function encodeQueryKey$12(e4) {
  return encodeQueryValue$12(e4).replace(Rt3, "%3D");
}
function decode$12(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodeQueryValue$1(e4) {
  return decode$12(e4.replace(Et3, " "));
}
function parseQuery$12(e4 = "") {
  const t5 = {};
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const r6 of e4.split("&")) {
    const e5 = r6.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const s2 = decode$12(e5[1].replace(Et3, " "));
    if ("__proto__" === s2 || "constructor" === s2) continue;
    const a5 = decodeQueryValue$1(e5[2] || "");
    void 0 === t5[s2] ? t5[s2] = a5 : Array.isArray(t5[s2]) ? t5[s2].push(a5) : t5[s2] = [t5[s2], a5];
  }
  return t5;
}
function stringifyQuery$12(e4) {
  return Object.keys(e4).filter((t5) => void 0 !== e4[t5]).map((t5) => {
    return r6 = t5, "number" != typeof (s2 = e4[t5]) && "boolean" != typeof s2 || (s2 = String(s2)), s2 ? Array.isArray(s2) ? s2.map((e5) => `${encodeQueryKey$12(r6)}=${encodeQueryValue$12(e5)}`).join("&") : `${encodeQueryKey$12(r6)}=${encodeQueryValue$12(s2)}` : encodeQueryKey$12(r6);
    var r6, s2;
  }).filter(Boolean).join("&");
}
function hasProtocol$1(e4, t5 = {}) {
  return "boolean" == typeof t5 && (t5 = { acceptRelative: t5 }), t5.strict ? At3.test(e4) : jt3.test(e4) || !!t5.acceptRelative && Ht2.test(e4);
}
function withoutTrailingSlash$1(e4 = "", t5) {
  return (function(e5 = "") {
    return e5.endsWith("/");
  }(e4) ? e4.slice(0, -1) : e4) || "/";
}
function withTrailingSlash$1(e4 = "", t5) {
  return e4.endsWith("/") ? e4 : e4 + "/";
}
function withLeadingSlash(e4 = "") {
  return function(e5 = "") {
    return e5.startsWith("/");
  }(e4) ? e4 : "/" + e4;
}
function withQuery$1(e4, t5) {
  const r6 = parseURL$1(e4), s2 = { ...parseQuery$12(r6.search), ...t5 };
  return r6.search = stringifyQuery$12(s2), function(e5) {
    const t6 = e5.pathname || "", r7 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", s3 = e5.hash || "", a5 = e5.auth ? e5.auth + "@" : "", c3 = e5.host || "", u2 = e5.protocol || e5[Pt3] ? (e5.protocol || "") + "//" : "";
    return u2 + a5 + c3 + t6 + r7 + s3;
  }(r6);
}
function joinURL$1(e4, ...t5) {
  let r6 = e4 || "";
  for (const e5 of t5.filter((e6) => /* @__PURE__ */ function(e7) {
    return e7 && "/" !== e7;
  }(e6))) if (r6) {
    const t6 = e5.replace(It2, "");
    r6 = withTrailingSlash$1(r6) + t6;
  } else r6 = e5;
  return r6;
}
function joinRelativeURL(...e4) {
  const t5 = /\/(?!\/)/, r6 = e4.filter(Boolean), s2 = [];
  let a5 = 0;
  for (const e5 of r6) if (e5 && "/" !== e5) {
    for (const [r7, c4] of e5.split(t5).entries()) if (c4 && "." !== c4) if (".." !== c4) 1 === r7 && s2[s2.length - 1]?.endsWith(":/") ? s2[s2.length - 1] += "/" + c4 : (s2.push(c4), a5++);
    else {
      if (1 === s2.length && hasProtocol$1(s2[0])) continue;
      s2.pop(), a5--;
    }
  }
  let c3 = s2.join("/");
  return a5 >= 0 ? r6[0]?.startsWith("/") && !c3.startsWith("/") ? c3 = "/" + c3 : r6[0]?.startsWith("./") && !c3.startsWith("./") && (c3 = "./" + c3) : c3 = "../".repeat(-1 * a5) + c3, r6[r6.length - 1]?.endsWith("/") && !c3.endsWith("/") && (c3 += "/"), c3;
}
function parseURL$1(e4 = "", t5) {
  const r6 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r6) {
    const [, e5, t6 = ""] = r6;
    return { protocol: e5.toLowerCase(), pathname: t6, href: e5 + t6, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol$1(e4, { acceptRelative: true })) return parsePath$1(e4);
  const [, s2 = "", a5, c3 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u2 = "", d6 = ""] = c3.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s2 && (d6 = d6.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h3, search: f5, hash: m4 } = parsePath$1(d6);
  return { protocol: s2.toLowerCase(), auth: a5 ? a5.slice(0, Math.max(0, a5.length - 1)) : "", host: u2, pathname: h3, search: f5, hash: m4, [Pt3]: !s2 };
}
function parsePath$1(e4 = "") {
  const [t5 = "", r6 = "", s2 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t5, search: r6, hash: s2 };
}
function createRouter$12(e4 = {}) {
  const t5 = { options: e4, rootNode: createRadixNode2(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t6) => e4.strictTrailingSlash ? t6 : t6.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const r6 in e4.routes) insert2(t5, normalizeTrailingSlash(r6), e4.routes[r6]);
  return { ctx: t5, lookup: /* @__PURE__ */ __name((e5) => function(e6, t6) {
    const r6 = e6.staticRoutesMap[t6];
    if (r6) return r6.data;
    const s2 = t6.split("/"), a5 = {};
    let c3 = false, u2 = null, d6 = e6.rootNode, h3 = null;
    for (let e7 = 0; e7 < s2.length; e7++) {
      const t7 = s2[e7];
      null !== d6.wildcardChildNode && (u2 = d6.wildcardChildNode, h3 = s2.slice(e7).join("/"));
      const r7 = d6.children.get(t7);
      if (void 0 === r7) {
        if (d6 && d6.placeholderChildren.length > 1) {
          const t8 = s2.length - e7;
          d6 = d6.placeholderChildren.find((e8) => e8.maxDepth === t8) || null;
        } else d6 = d6.placeholderChildren[0] || null;
        if (!d6) break;
        d6.paramName && (a5[d6.paramName] = t7), c3 = true;
      } else d6 = r7;
    }
    null !== d6 && null !== d6.data || null === u2 || (d6 = u2, a5[d6.paramName || "_"] = h3, c3 = true);
    if (!d6) return null;
    if (c3) return { ...d6.data, params: c3 ? a5 : void 0 };
    return d6.data;
  }(t5, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, r6) => insert2(t5, normalizeTrailingSlash(e5), r6), "insert"), remove: /* @__PURE__ */ __name((e5) => function(e6, t6) {
    let r6 = false;
    const s2 = t6.split("/");
    let a5 = e6.rootNode;
    for (const e7 of s2) if (a5 = a5.children.get(e7), !a5) return r6;
    if (a5.data) {
      const e7 = s2.at(-1) || "";
      a5.data = null, 0 === Object.keys(a5.children).length && a5.parent && (a5.parent.children.delete(e7), a5.parent.wildcardChildNode = null, a5.parent.placeholderChildren = []), r6 = true;
    }
    return r6;
  }(t5, normalizeTrailingSlash(e5)), "remove") };
}
function insert2(e4, t5, r6) {
  let s2 = true;
  const a5 = t5.split("/");
  let c3 = e4.rootNode, u2 = 0;
  const d6 = [c3];
  for (const e5 of a5) {
    let t6;
    if (t6 = c3.children.get(e5)) c3 = t6;
    else {
      const r7 = getNodeType2(e5);
      t6 = createRadixNode2({ type: r7, parent: c3 }), c3.children.set(e5, t6), r7 === $t2 ? (t6.paramName = "*" === e5 ? "_" + u2++ : e5.slice(1), c3.placeholderChildren.push(t6), s2 = false) : r7 === Nt3 && (c3.wildcardChildNode = t6, t6.paramName = e5.slice(3) || "_", s2 = false), d6.push(t6), c3 = t6;
    }
  }
  for (const [e5, t6] of d6.entries()) t6.maxDepth = Math.max(d6.length - e5, t6.maxDepth || 0);
  return c3.data = r6, true === s2 && (e4.staticRoutesMap[t5] = c3), c3;
}
function createRadixNode2(e4 = {}) {
  return { type: e4.type || Ot3, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType2(e4) {
  return e4.startsWith("**") ? Nt3 : ":" === e4[0] || "*" === e4 ? $t2 : Ot3;
}
function toRouteMatcher2(e4) {
  return /* @__PURE__ */ function(e5, t5) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((r6) => _matchRoutes2(r6, e5, t5), "matchAll") };
  }(_routerNodeToTable2("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes2(e4, t5, r6) {
  true !== r6 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const s2 = [];
  for (const [r7, a6] of _sortRoutesMap2(t5.wildcard)) (e4 === r7 || e4.startsWith(r7 + "/")) && s2.push(a6);
  for (const [r7, a6] of _sortRoutesMap2(t5.dynamic)) if (e4.startsWith(r7 + "/")) {
    const t6 = "/" + e4.slice(r7.length).split("/").splice(2).join("/");
    s2.push(..._matchRoutes2(t6, a6));
  }
  const a5 = t5.static.get(e4);
  return a5 && s2.push(a5), s2.filter(Boolean);
}
function _sortRoutesMap2(e4) {
  return [...e4.entries()].sort((e5, t5) => e5[0].length - t5[0].length);
}
function _routerNodeToTable2(e4, t5) {
  const r6 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t6) {
    if (e5) if (t6.type !== Ot3 || e5.includes("*") || e5.includes(":")) {
      if (t6.type === Nt3) r6.wildcard.set(e5.replace("/**", ""), t6.data);
      else if (t6.type === $t2) {
        const s2 = _routerNodeToTable2("", t6);
        return t6.data && s2.static.set("/", t6.data), void r6.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), s2);
      }
    } else t6.data && r6.static.set(e5, t6.data);
    for (const [r7, s2] of t6.children.entries()) _addNode(`${e5}/${r7}`.replace("//", "/"), s2);
  }, "_addNode"))(e4, t5), r6;
}
function jsonParseTransform$1(e4, t5) {
  if (!("__proto__" === e4 || "constructor" === e4 && t5 && "object" == typeof t5 && "prototype" in t5)) return t5;
  !function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  }(e4);
}
function destr$1(e4, t5 = {}) {
  if ("string" != typeof e4) return e4;
  const r6 = e4.trim();
  if ('"' === e4[0] && e4.endsWith('"') && !e4.includes("\\")) return r6.slice(1, -1);
  if (r6.length <= 9) {
    const e5 = r6.toLowerCase();
    if ("true" === e5) return true;
    if ("false" === e5) return false;
    if ("undefined" === e5) return;
    if ("null" === e5) return null;
    if ("nan" === e5) return Number.NaN;
    if ("infinity" === e5) return Number.POSITIVE_INFINITY;
    if ("-infinity" === e5) return Number.NEGATIVE_INFINITY;
  }
  if (!qt2.test(e4)) {
    if (t5.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (Mt2.test(e4) || Bt2.test(e4)) {
      if (t5.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform$1);
    }
    return JSON.parse(e4);
  } catch (r7) {
    if (t5.strict) throw r7;
    return e4;
  }
}
function isPlainObject$1(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t5 = Object.getPrototypeOf(e4);
  return (null === t5 || t5 === Object.prototype || null === Object.getPrototypeOf(t5)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu$1(e4, t5, r6 = ".", s2) {
  if (!isPlainObject$1(t5)) return _defu$1(e4, {}, r6, s2);
  const a5 = Object.assign({}, t5);
  for (const t6 in e4) {
    if ("__proto__" === t6 || "constructor" === t6) continue;
    const c3 = e4[t6];
    null != c3 && (s2 && s2(a5, t6, c3, r6) || (Array.isArray(c3) && Array.isArray(a5[t6]) ? a5[t6] = [...c3, ...a5[t6]] : isPlainObject$1(c3) && isPlainObject$1(a5[t6]) ? a5[t6] = _defu$1(c3, a5[t6], (r6 ? `${r6}.` : "") + t6.toString(), s2) : a5[t6] = c3));
  }
  return a5;
}
function o3(e4) {
  throw new Error(`${e4} is not implemented yet!`);
}
function p4(e4) {
  const t5 = {};
  for (const [r6, s2] of Object.entries(e4)) r6 && (t5[r6] = (Array.isArray(s2) ? s2 : [s2]).filter(Boolean));
  return t5;
}
function S$1(e4 = {}) {
  if (e4 instanceof Headers) return e4;
  const t5 = new Headers();
  for (const [r6, s2] of Object.entries(e4)) if (void 0 !== s2) {
    if (Array.isArray(s2)) {
      for (const e5 of s2) t5.append(r6, String(e5));
      continue;
    }
    t5.set(r6, String(s2));
  }
  return t5;
}
async function b2(e4, t5) {
  const r6 = new y2(), s2 = new w2(r6);
  let a5;
  if (r6.url = t5.url?.toString() || "/", !r6.url.startsWith("/")) {
    const e5 = new URL(r6.url);
    a5 = e5.host, r6.url = e5.pathname + e5.search + e5.hash;
  }
  r6.method = t5.method || "GET", r6.headers = function(e5 = {}) {
    const t6 = new Ft2(), r7 = Array.isArray(e5) || function(e6) {
      return "function" == typeof e6?.entries;
    }(e5) ? e5 : Object.entries(e5);
    for (const [e6, s3] of r7) if (s3) {
      if (void 0 === t6[e6]) {
        t6[e6] = s3;
        continue;
      }
      t6[e6] = [...Array.isArray(t6[e6]) ? t6[e6] : [t6[e6]], ...Array.isArray(s3) ? s3 : [s3]];
    }
    return t6;
  }(t5.headers || {}), r6.headers.host || (r6.headers.host = t5.host || a5 || "localhost"), r6.connection.encrypted = r6.connection.encrypted || "https" === t5.protocol, r6.body = t5.body || null, r6.__unenv__ = t5.context, await e4(r6, s2);
  let c3 = s2._data;
  (Dt2.has(s2.statusCode) || "HEAD" === r6.method.toUpperCase()) && (c3 = null, delete s2._headers["content-length"]);
  const u2 = { status: s2.statusCode, statusText: s2.statusMessage, headers: s2._headers, body: c3 };
  return r6.destroy(), s2.destroy(), u2;
}
function hasProp(e4, t5) {
  try {
    return t5 in e4;
  } catch {
    return false;
  }
}
function createError2(e4) {
  if ("string" == typeof e4) return new H3Error2(e4);
  if (isError(e4)) return e4;
  const t5 = new H3Error2(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (hasProp(e4, "stack")) try {
    Object.defineProperty(t5, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t5.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t5.data = e4.data), e4.statusCode ? t5.statusCode = sanitizeStatusCode2(e4.statusCode, t5.statusCode) : e4.status && (t5.statusCode = sanitizeStatusCode2(e4.status, t5.statusCode)), e4.statusMessage ? t5.statusMessage = e4.statusMessage : e4.statusText && (t5.statusMessage = e4.statusText), t5.statusMessage) {
    const e5 = t5.statusMessage;
    sanitizeStatusMessage2(t5.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t5.fatal = e4.fatal), void 0 !== e4.unhandled && (t5.unhandled = e4.unhandled), t5;
}
function isError(e4) {
  return true === e4?.constructor?.__h3_error__;
}
function getQuery$1(e4) {
  return parseQuery$12(parseURL$1(e4.path || "").search);
}
function getRequestHeaders(e4) {
  const t5 = {};
  for (const r6 in e4.node.req.headers) {
    const s2 = e4.node.req.headers[r6];
    t5[r6] = Array.isArray(s2) ? s2.filter(Boolean).join(", ") : s2;
  }
  return t5;
}
function readRawBody(e4, t5 = "utf8") {
  !function(e5, t6) {
    if (!function(e6, t7) {
      if ("string" == typeof t7) {
        if (e6.method === t7) return true;
      } else if (t7.includes(e6.method)) return true;
      return false;
    }(e5, t6)) throw createError2({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e4, Qt2);
  const s2 = e4._requestBody || e4.web?.request?.body || e4.node.req[Kt2] || e4.node.req.rawBody || e4.node.req.body;
  if (s2) {
    const e5 = Promise.resolve(s2).then((e6) => r5.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((t6, s3) => {
      const a6 = [];
      e6.pipeTo(new WritableStream({ write(e7) {
        a6.push(e7);
      }, close() {
        t6(r5.concat(a6));
      }, abort(e7) {
        s3(e7);
      } })).catch(s3);
    }) : "function" == typeof e6.pipe ? new Promise((t6, s3) => {
      const a6 = [];
      e6.on("data", (e7) => {
        a6.push(e7);
      }).on("end", () => {
        t6(r5.concat(a6));
      }).on("error", s3);
    }) : e6.constructor === Object ? r5.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? r5.from(e6.toString()) : r5.from(e6));
    return t5 ? e5.then((e6) => e6.toString(t5)) : e5;
  }
  if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !String(e4.node.req.headers["transfer-encoding"] ?? "").split(",").map((e5) => e5.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
  const a5 = e4.node.req[Kt2] = new Promise((t6, s3) => {
    const a6 = [];
    e4.node.req.on("error", (e5) => {
      s3(e5);
    }).on("data", (e5) => {
      a6.push(e5);
    }).on("end", () => {
      t6(r5.concat(a6));
    });
  });
  return t5 ? a5.then((e5) => e5.toString(t5)) : a5;
}
function handleCacheHeaders(e4, t5) {
  const r6 = ["public", ...t5.cacheControls || []];
  let s2 = false;
  if (void 0 !== t5.maxAge && r6.push("max-age=" + +t5.maxAge, "s-maxage=" + +t5.maxAge), t5.modifiedTime) {
    const r7 = new Date(t5.modifiedTime), a5 = e4.node.req.headers["if-modified-since"];
    e4.node.res.setHeader("last-modified", r7.toUTCString()), a5 && new Date(a5) >= t5.modifiedTime && (s2 = true);
  }
  if (t5.etag) {
    e4.node.res.setHeader("etag", t5.etag);
    e4.node.req.headers["if-none-match"] === t5.etag && (s2 = true);
  }
  return e4.node.res.setHeader("cache-control", r6.join(", ")), !!s2 && (e4.node.res.statusCode = 304, e4.handled || e4.node.res.end(), true);
}
function sanitizeStatusMessage2(e4 = "") {
  return e4.replace(Jt2, "");
}
function sanitizeStatusCode2(e4, t5 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t5 : e4) : t5;
}
function splitCookiesString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString(e5));
  if ("string" != typeof e4) return [];
  const t5 = [];
  let r6, s2, a5, c3, u2, d6 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d6 < e4.length && /\s/.test(e4.charAt(d6)); ) d6 += 1;
    return d6 < e4.length;
  }, "skipWhitespace");
  for (; d6 < e4.length; ) {
    for (r6 = d6, u2 = false; skipWhitespace(); ) if (s2 = e4.charAt(d6), "," === s2) {
      for (a5 = d6, d6 += 1, skipWhitespace(), c3 = d6; d6 < e4.length && (s2 = e4.charAt(d6), "=" !== s2 && ";" !== s2 && "," !== s2); ) d6 += 1;
      d6 < e4.length && "=" === e4.charAt(d6) ? (u2 = true, d6 = c3, t5.push(e4.slice(r6, a5)), r6 = d6) : d6 = a5 + 1;
    } else d6 += 1;
    (!u2 || d6 >= e4.length) && t5.push(e4.slice(r6));
  }
  return t5;
}
function send2(e4, t5, r6) {
  return r6 && function(e5, t6) {
    t6 && 304 !== e5.node.res.statusCode && !e5.node.res.getHeader("content-type") && e5.node.res.setHeader("content-type", t6);
  }(e4, r6), new Promise((r7) => {
    Vt2(() => {
      e4.handled || e4.node.res.end(t5), r7();
    });
  });
}
function setResponseStatus(e4, t5, r6) {
  t5 && (e4.node.res.statusCode = sanitizeStatusCode2(t5, e4.node.res.statusCode)), r6 && (e4.node.res.statusMessage = sanitizeStatusMessage2(r6));
}
function getResponseStatus(e4) {
  return e4.node.res.statusCode;
}
function getResponseStatusText(e4) {
  return e4.node.res.statusMessage;
}
function setResponseHeaders(e4, t5) {
  for (const [r6, s2] of Object.entries(t5)) e4.node.res.setHeader(r6, s2);
}
function setResponseHeader(e4, t5, r6) {
  e4.node.res.setHeader(t5, r6);
}
function sendStream(e4, t5) {
  if (!t5 || "object" != typeof t5) throw new Error("[h3] Invalid stream provided.");
  if (e4.node.res._data = t5, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
  if (hasProp(t5, "pipeTo") && "function" == typeof t5.pipeTo) return t5.pipeTo(new WritableStream({ write(t6) {
    e4.node.res.write(t6);
  } })).then(() => {
    e4.node.res.end();
  });
  if (hasProp(t5, "pipe") && "function" == typeof t5.pipe) return new Promise((r6, s2) => {
    t5.pipe(e4.node.res), t5.on && (t5.on("end", () => {
      e4.node.res.end(), r6();
    }), t5.on("error", (e5) => {
      s2(e5);
    })), e4.node.res.on("close", () => {
      t5.abort && t5.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e4, t5) {
  for (const [r6, s2] of t5.headers) "set-cookie" === r6 ? e4.node.res.appendHeader(r6, splitCookiesString(s2)) : e4.node.res.setHeader(r6, s2);
  if (t5.status && (e4.node.res.statusCode = sanitizeStatusCode2(t5.status, e4.node.res.statusCode)), t5.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage2(t5.statusText)), t5.redirected && e4.node.res.setHeader("location", t5.url), t5.body) return sendStream(e4, t5.body);
  e4.node.res.end();
}
async function proxyRequest(e4, t5, r6 = {}) {
  let s2, a5;
  Gt2.has(e4.method) && (r6.streamRequest ? (s2 = function(e5) {
    if (!Qt2.includes(e5.method)) return;
    const t6 = e5.web?.request?.body || e5._requestBody;
    return t6 || (Kt2 in e5.node.req || "rawBody" in e5.node.req || "body" in e5.node.req || "__unenv__" in e5.node.req ? new ReadableStream({ async start(t7) {
      const r7 = await readRawBody(e5, false);
      r7 && t7.enqueue(r7), t7.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t7) => {
      e5.node.req.on("data", (e6) => {
        t7.enqueue(e6);
      }), e5.node.req.on("end", () => {
        t7.close();
      }), e5.node.req.on("error", (e6) => {
        t7.error(e6);
      });
    }, "start") }));
  }(e4), a5 = "half") : s2 = await readRawBody(e4, false).catch(() => {
  }));
  const c3 = r6.fetchOptions?.method || e4.method, u2 = function(e5, ...t6) {
    const r7 = t6.filter(Boolean);
    if (0 === r7.length) return e5;
    const s3 = new Headers(e5);
    for (const e6 of r7) for (const [t7, r8] of Object.entries(e6)) void 0 !== r8 && s3.set(t7, r8);
    return s3;
  }(getProxyRequestHeaders(e4, { host: t5.startsWith("/") }), r6.fetchOptions?.headers, r6.headers);
  return async function(e5, t6, r7 = {}) {
    let s3;
    try {
      s3 = await _getFetch(r7.fetch)(t6, { headers: r7.headers, ignoreResponseError: true, ...r7.fetchOptions });
    } catch (e6) {
      throw createError2({ status: 502, statusMessage: "Bad Gateway", cause: e6 });
    }
    e5.node.res.statusCode = sanitizeStatusCode2(s3.status, e5.node.res.statusCode), e5.node.res.statusMessage = sanitizeStatusMessage2(s3.statusText);
    const a6 = [];
    for (const [t7, r8] of s3.headers.entries()) "content-encoding" !== t7 && "content-length" !== t7 && ("set-cookie" !== t7 ? e5.node.res.setHeader(t7, r8) : a6.push(...splitCookiesString(r8)));
    a6.length > 0 && e5.node.res.setHeader("set-cookie", a6.map((e6) => (r7.cookieDomainRewrite && (e6 = rewriteCookieProperty(e6, r7.cookieDomainRewrite, "domain")), r7.cookiePathRewrite && (e6 = rewriteCookieProperty(e6, r7.cookiePathRewrite, "path")), e6)));
    r7.onResponse && await r7.onResponse(e5, s3);
    if (void 0 !== s3._data) return s3._data;
    if (e5.handled) return;
    if (false === r7.sendStream) {
      const t7 = new Uint8Array(await s3.arrayBuffer());
      return e5.node.res.end(t7);
    }
    if (s3.body) for await (const t7 of s3.body) e5.node.res.write(t7);
    return e5.node.res.end();
  }(e4, t5, { ...r6, fetchOptions: { method: c3, body: s2, duplex: a5, ...r6.fetchOptions, headers: u2 } });
}
function getProxyRequestHeaders(e4, t5) {
  const r6 = /* @__PURE__ */ Object.create(null), s2 = getRequestHeaders(e4);
  for (const e5 in s2) (!Yt2.has(e5) || "host" === e5 && t5?.host) && (r6[e5] = s2[e5]);
  return r6;
}
function fetchWithEvent(e4, t5, r6, s2) {
  return _getFetch(s2?.fetch)(t5, { ...r6, context: r6?.context || e4.context, headers: { ...getProxyRequestHeaders(e4, { host: "string" == typeof t5 && t5.startsWith("/") }), ...r6?.headers } });
}
function _getFetch(e4) {
  if (e4) return e4;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e4, t5, r6) {
  const s2 = "string" == typeof t5 ? { "*": t5 } : t5;
  return e4.replace(new RegExp(`(;\\s*${r6}=)([^;]+)`, "gi"), (e5, t6, r7) => {
    let a5;
    if (r7 in s2) a5 = s2[r7];
    else {
      if (!("*" in s2)) return e5;
      a5 = s2["*"];
    }
    return a5 ? t6 + a5 : "";
  });
}
function isEvent(e4) {
  return hasProp(e4, "__is_event__");
}
function createEvent(e4, t5) {
  return new H3Event(e4, t5);
}
function defineEventHandler(e4) {
  if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
  const t5 = { onRequest: _normalizeArray(e4.onRequest), onBeforeResponse: _normalizeArray(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r6) => async function(e5, t6, r7) {
    if (r7.onRequest) {
      for (const t7 of r7.onRequest) if (await t7(e5), e5.handled) return;
    }
    const s2 = await t6(e5), a5 = { body: s2 };
    if (r7.onBeforeResponse) for (const t7 of r7.onBeforeResponse) await t7(e5, a5);
    return a5.body;
  }(r6, e4.handler, t5), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
}
function _normalizeArray(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function isEventHandler(e4) {
  return hasProp(e4, "__is_handler__");
}
function toEventHandler(e4, t5, r6) {
  return isEventHandler(e4) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r6 && "/" !== r6 ? `
     Route: ${r6}` : "", `
     Handler: ${e4}`), e4;
}
function createApp2(e4 = {}) {
  const t5 = [], r6 = function(e5, t6) {
    const r7 = t6.debug ? 2 : void 0;
    return er(async (s3) => {
      s3.node.req.originalUrl = s3.node.req.originalUrl || s3.node.req.url || "/";
      const a6 = s3._path || s3.node.req.url || "/";
      let c4;
      t6.onRequest && await t6.onRequest(s3);
      for (const u2 of e5) {
        if (u2.route.length > 1) {
          if (!a6.startsWith(u2.route)) continue;
          c4 = a6.slice(u2.route.length) || "/";
        } else c4 = a6;
        if (u2.match && !u2.match(c4, s3)) continue;
        s3._path = c4, s3.node.req.url = c4;
        const e6 = await u2.handler(s3), d6 = void 0 === e6 ? void 0 : await e6;
        if (void 0 !== d6) {
          const e7 = { body: d6 };
          return t6.onBeforeResponse && (s3._onBeforeResponseCalled = true, await t6.onBeforeResponse(s3, e7)), await handleHandlerResponse(s3, e7.body, r7), void (t6.onAfterResponse && (s3._onAfterResponseCalled = true, await t6.onAfterResponse(s3, e7)));
        }
        if (s3.handled) return void (t6.onAfterResponse && (s3._onAfterResponseCalled = true, await t6.onAfterResponse(s3, void 0)));
      }
      if (!s3.handled) throw createError2({ statusCode: 404, statusMessage: `Cannot find any path matching ${s3.path || "/"}.` });
      t6.onAfterResponse && (s3._onAfterResponseCalled = true, await t6.onAfterResponse(s3, void 0));
    });
  }(t5, e4), s2 = /* @__PURE__ */ function(e5) {
    return async (t6) => {
      let r7;
      for (const s3 of e5) {
        if ("/" === s3.route && !s3.handler.__resolve__) continue;
        if (!t6.startsWith(s3.route)) continue;
        if (r7 = t6.slice(s3.route.length) || "/", s3.match && !s3.match(r7, void 0)) continue;
        let e6 = { route: s3.route, handler: s3.handler };
        if (e6.handler.__resolve__) {
          const t7 = await e6.handler.__resolve__(r7);
          if (!t7) continue;
          e6 = { ...e6, ...t7, route: joinURL$1(e6.route || "/", t7.route || "/") };
        }
        return e6;
      }
    };
  }(t5);
  r6.__resolve__ = s2;
  const a5 = /* @__PURE__ */ function(e5) {
    let t6;
    return () => (t6 || (t6 = e5()), t6);
  }(() => {
    return t6 = s2, { ...e4.websocket, async resolve(e5) {
      const r7 = e5.request?.url || e5.url || "/", { pathname: s3 } = "string" == typeof r7 ? parseURL$1(r7) : r7, a6 = await t6(s3);
      return a6?.handler?.__websocket__ || {};
    } };
    var t6;
  }), c3 = { use: /* @__PURE__ */ __name((e5, t6, r7) => use(c3, e5, t6, r7), "use"), resolve: s2, handler: r6, stack: t5, options: e4, get websocket() {
    return a5();
  } };
  return c3;
}
function use(e4, t5, r6, s2) {
  if (Array.isArray(t5)) for (const a5 of t5) use(e4, a5, r6, s2);
  else if (Array.isArray(r6)) for (const a5 of r6) use(e4, t5, a5, s2);
  else "string" == typeof t5 ? e4.stack.push(normalizeLayer({ ...s2, route: t5, handler: r6 })) : "function" == typeof t5 ? e4.stack.push(normalizeLayer({ ...r6, handler: t5 })) : e4.stack.push(normalizeLayer({ ...t5 }));
  return e4;
}
function normalizeLayer(e4) {
  let t5 = e4.handler;
  return t5.handler && (t5 = t5.handler), e4.lazy ? t5 = lazyEventHandler(t5) : isEventHandler(t5) || (t5 = toEventHandler(t5, 0, e4.route)), { route: withoutTrailingSlash$1(e4.route), match: e4.match, handler: t5 };
}
function handleHandlerResponse(e4, t5, s2) {
  if (null === t5) return function(e5, t6) {
    if (e5.handled) return;
    t6 || 200 === e5.node.res.statusCode || (t6 = e5.node.res.statusCode);
    const r6 = sanitizeStatusCode2(t6, 204);
    204 === r6 && e5.node.res.removeHeader("content-length"), e5.node.res.writeHead(r6), e5.node.res.end();
  }(e4);
  if (t5) {
    if (a5 = t5, "undefined" != typeof Response && a5 instanceof Response) return sendWebResponse(e4, t5);
    if (function(e5) {
      if (!e5 || "object" != typeof e5) return false;
      if ("function" == typeof e5.pipe) {
        if ("function" == typeof e5._read) return true;
        if ("function" == typeof e5.abort) return true;
      }
      return "function" == typeof e5.pipeTo;
    }(t5)) return sendStream(e4, t5);
    if (t5.buffer) return send2(e4, t5);
    if (t5.arrayBuffer && "function" == typeof t5.arrayBuffer) return t5.arrayBuffer().then((s3) => send2(e4, r5.from(s3), t5.type));
    if (t5 instanceof Error) throw createError2(t5);
    if ("function" == typeof t5.end) return true;
  }
  var a5;
  const c3 = typeof t5;
  if ("string" === c3) return send2(e4, t5, Zt2.html);
  if ("object" === c3 || "boolean" === c3 || "number" === c3) return send2(e4, JSON.stringify(t5, void 0, s2), Zt2.json);
  if ("bigint" === c3) return send2(e4, t5.toString(), Zt2.json);
  throw createError2({ statusCode: 500, statusMessage: `[h3] Cannot send ${c3} as response.` });
}
function toNodeListener(e4) {
  return async function(t5, r6) {
    const s2 = createEvent(t5, r6);
    try {
      await e4.handler(s2);
    } catch (t6) {
      const r7 = createError2(t6);
      if (isError(t6) || (r7.unhandled = true), setResponseStatus(s2, r7.statusCode, r7.statusMessage), e4.options.onError && await e4.options.onError(r7, s2), s2.handled) return;
      (r7.unhandled || r7.fatal) && console.error("[h3]", r7.fatal ? "[fatal]" : "[unhandled]", r7), e4.options.onBeforeResponse && !s2._onBeforeResponseCalled && await e4.options.onBeforeResponse(s2, { body: r7 }), await function(e5, t7, r8) {
        if (e5.handled) return;
        const s3 = isError(t7) ? t7 : createError2(t7), a5 = { statusCode: s3.statusCode, statusMessage: s3.statusMessage, stack: [], data: s3.data };
        if (r8 && (a5.stack = (s3.stack || "").split("\n").map((e6) => e6.trim())), e5.handled) return;
        setResponseStatus(e5, Number.parseInt(s3.statusCode), s3.statusMessage), e5.node.res.setHeader("content-type", Zt2.json), e5.node.res.end(JSON.stringify(a5, void 0, 2));
      }(s2, r7, !!e4.options.debug), e4.options.onAfterResponse && !s2._onAfterResponseCalled && await e4.options.onAfterResponse(s2, { body: r7 });
    }
  };
}
function flatHooks2(e4, t5 = {}, r6) {
  for (const s2 in e4) {
    const a5 = e4[s2], c3 = r6 ? `${r6}:${s2}` : s2;
    "object" == typeof a5 && null !== a5 ? flatHooks2(a5, t5, c3) : "function" == typeof a5 && (t5[c3] = a5);
  }
  return t5;
}
function serialTaskCaller2(e4, t5) {
  const r6 = t5.shift(), s2 = sr(r6);
  return e4.reduce((e5, r7) => e5.then(() => s2.run(() => r7(...t5))), Promise.resolve());
}
function parallelTaskCaller2(e4, t5) {
  const r6 = t5.shift(), s2 = sr(r6);
  return Promise.all(e4.map((e5) => s2.run(() => e5(...t5))));
}
function callEachWith2(e4, t5) {
  for (const r6 of [...e4]) r6(t5);
}
function createHooks() {
  return new Hookable2();
}
function isPayloadMethod(e4 = "GET") {
  return or.has(e4.toUpperCase());
}
function resolveFetchOptions(e4, t5, r6, s2) {
  const a5 = function(e5, t6, r7) {
    if (!t6) return new r7(e5);
    const s3 = new r7(t6);
    if (e5) for (const [t7, a6] of Symbol.iterator in e5 || Array.isArray(e5) ? e5 : new r7(e5)) s3.set(t7, a6);
    return s3;
  }(t5?.headers ?? e4?.headers, r6?.headers, s2);
  let c3;
  return (r6?.query || r6?.params || t5?.params || t5?.query) && (c3 = { ...r6?.params, ...r6?.query, ...t5?.params, ...t5?.query }), { ...r6, ...t5, query: c3, params: c3, headers: a5 };
}
async function callHooks(e4, t5) {
  if (t5) if (Array.isArray(t5)) for (const r6 of t5) await r6(e4);
  else await t5(e4);
}
function createFetch(e4 = {}) {
  const { fetch: t5 = globalThis.fetch, Headers: r6 = globalThis.Headers, AbortController: s2 = globalThis.AbortController } = e4;
  async function onError(e5) {
    const t6 = e5.error && "AbortError" === e5.error.name && !e5.options.timeout || false;
    if (false !== e5.options.retry && !t6) {
      let t7;
      t7 = "number" == typeof e5.options.retry ? e5.options.retry : isPayloadMethod(e5.options.method) ? 0 : 1;
      const r8 = e5.response && e5.response.status || 500;
      if (t7 > 0 && (Array.isArray(e5.options.retryStatusCodes) ? e5.options.retryStatusCodes.includes(r8) : cr.has(r8))) {
        const r9 = "function" == typeof e5.options.retryDelay ? e5.options.retryDelay(e5) : e5.options.retryDelay || 0;
        return r9 > 0 && await new Promise((e6) => setTimeout(e6, r9)), $fetchRaw(e5.request, { ...e5.options, retry: t7 - 1 });
      }
    }
    const r7 = function(e6) {
      const t7 = e6.error?.message || e6.error?.toString() || "", r8 = e6.request?.method || e6.options?.method || "GET", s3 = e6.request?.url || String(e6.request) || "/", a5 = `[${r8}] ${JSON.stringify(s3)}`, c3 = e6.response ? `${e6.response.status} ${e6.response.statusText}` : "<no response>", u2 = new FetchError(`${a5}: ${c3}${t7 ? ` ${t7}` : ""}`, e6.error ? { cause: e6.error } : void 0);
      for (const t8 of ["request", "options", "response"]) Object.defineProperty(u2, t8, { get: /* @__PURE__ */ __name(() => e6[t8], "get") });
      for (const [t8, r9] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u2, t8, { get: /* @__PURE__ */ __name(() => e6.response && e6.response[r9], "get") });
      return u2;
    }(e5);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, $fetchRaw), r7;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a5, c3 = {}) {
    const u2 = { request: a5, options: resolveFetchOptions(a5, c3, e4.defaults, r6), response: void 0, error: void 0 };
    let d6;
    if (u2.options.method && (u2.options.method = u2.options.method.toUpperCase()), u2.options.onRequest && await callHooks(u2, u2.options.onRequest), "string" == typeof u2.request && (u2.options.baseURL && (u2.request = function(e5, t6) {
      if (!(r7 = t6) || "/" === r7 || hasProtocol$1(e5)) return e5;
      var r7;
      const s3 = withoutTrailingSlash$1(t6);
      return e5.startsWith(s3) ? e5 : joinURL$1(s3, e5);
    }(u2.request, u2.options.baseURL)), u2.options.query && (u2.request = withQuery$1(u2.request, u2.options.query), delete u2.options.query), "query" in u2.options && delete u2.options.query, "params" in u2.options && delete u2.options.params), u2.options.body && isPayloadMethod(u2.options.method) && (!function(e5) {
      if (void 0 === e5) return false;
      const t6 = typeof e5;
      return "string" === t6 || "number" === t6 || "boolean" === t6 || null === t6 || "object" === t6 && (!!Array.isArray(e5) || !e5.buffer && (e5.constructor && "Object" === e5.constructor.name || "function" == typeof e5.toJSON));
    }(u2.options.body) ? ("pipeTo" in u2.options.body && "function" == typeof u2.options.body.pipeTo || "function" == typeof u2.options.body.pipe) && ("duplex" in u2.options || (u2.options.duplex = "half")) : (u2.options.body = "string" == typeof u2.options.body ? u2.options.body : JSON.stringify(u2.options.body), u2.options.headers = new r6(u2.options.headers || {}), u2.options.headers.has("content-type") || u2.options.headers.set("content-type", "application/json"), u2.options.headers.has("accept") || u2.options.headers.set("accept", "application/json"))), !u2.options.signal && u2.options.timeout) {
      const e5 = new s2();
      d6 = setTimeout(() => {
        const t6 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t6.name = "TimeoutError", t6.code = 23, e5.abort(t6);
      }, u2.options.timeout), u2.options.signal = e5.signal;
    }
    try {
      u2.response = await t5(u2.request, u2.options);
    } catch (e5) {
      return u2.error = e5, u2.options.onRequestError && await callHooks(u2, u2.options.onRequestError), await onError(u2);
    } finally {
      d6 && clearTimeout(d6);
    }
    if ((u2.response.body || u2.response._bodyInit) && !ur.has(u2.response.status) && "HEAD" !== u2.options.method) {
      const e5 = (u2.options.parseResponse ? "json" : u2.options.responseType) || function(e6 = "") {
        if (!e6) return "json";
        const t6 = e6.split(";").shift() || "";
        return ir.test(t6) ? "json" : ar.has(t6) || t6.startsWith("text/") ? "text" : "blob";
      }(u2.response.headers.get("content-type") || "");
      switch (e5) {
        case "json": {
          const e6 = await u2.response.text(), t6 = u2.options.parseResponse || destr$1;
          u2.response._data = t6(e6);
          break;
        }
        case "stream":
          u2.response._data = u2.response.body || u2.response._bodyInit;
          break;
        default:
          u2.response._data = await u2.response[e5]();
      }
    }
    return u2.options.onResponse && await callHooks(u2, u2.options.onResponse), !u2.options.ignoreResponseError && u2.response.status >= 400 && u2.response.status < 600 ? (u2.options.onResponseError && await callHooks(u2, u2.options.onResponseError), await onError(u2)) : u2.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e5, t6) {
    return (await $fetchRaw(e5, t6))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e5) => t5(...e5), $fetch.create = (t6 = {}, r7 = {}) => createFetch({ ...e4, ...r7, defaults: { ...e4.defaults, ...r7.defaults, ...t6 } }), $fetch;
}
function encodeQueryValue2(e4) {
  return (t5 = "string" == typeof e4 ? e4 : JSON.stringify(e4), encodeURI("" + t5).replace(vr, "|")).replace(wr, "%2B").replace(xr, "+").replace(pr, "%23").replace(mr, "%26").replace(_r, "`").replace(br, "^").replace(gr, "%2F");
  var t5;
}
function encodeQueryKey(e4) {
  return encodeQueryValue2(e4).replace(yr, "%3D");
}
function decode2(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodeQueryValue2(e4) {
  return decode2(e4.replace(wr, " "));
}
function parseQuery2(e4 = "") {
  const t5 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const r6 of e4.split("&")) {
    const e5 = r6.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const s2 = decode2(e5[1].replace(wr, " "));
    if ("__proto__" === s2 || "constructor" === s2) continue;
    const a5 = decodeQueryValue2(e5[2] || "");
    void 0 === t5[s2] ? t5[s2] = a5 : Array.isArray(t5[s2]) ? t5[s2].push(a5) : t5[s2] = [t5[s2], a5];
  }
  return t5;
}
function stringifyQuery2(e4) {
  return Object.keys(e4).filter((t5) => void 0 !== e4[t5]).map((t5) => {
    return r6 = t5, "number" != typeof (s2 = e4[t5]) && "boolean" != typeof s2 || (s2 = String(s2)), s2 ? Array.isArray(s2) ? s2.map((e5) => `${encodeQueryKey(r6)}=${encodeQueryValue2(e5)}`).join("&") : `${encodeQueryKey(r6)}=${encodeQueryValue2(s2)}` : encodeQueryKey(r6);
    var r6, s2;
  }).filter(Boolean).join("&");
}
function withTrailingSlash2(e4 = "", t5) {
  return e4.endsWith("/") ? e4 : e4 + "/";
}
function withoutBase(e4, t5) {
  if (!(r6 = t5) || "/" === r6) return e4;
  var r6;
  const s2 = function(e5 = "") {
    return (function(e6 = "") {
      return e6.endsWith("/");
    }(e5) ? e5.slice(0, -1) : e5) || "/";
  }(t5);
  if (!e4.startsWith(s2)) return e4;
  const a5 = e4.slice(s2.length);
  return "/" === a5[0] ? a5 : "/" + a5;
}
function withQuery2(e4, t5) {
  const r6 = parseURL2(e4), s2 = { ...parseQuery2(r6.search), ...t5 };
  return r6.search = stringifyQuery2(s2), function(e5) {
    const t6 = e5.pathname || "", r7 = e5.search ? (e5.search.startsWith("?") ? "" : "?") + e5.search : "", s3 = e5.hash || "", a5 = e5.auth ? e5.auth + "@" : "", c3 = e5.host || "", u2 = e5.protocol || e5[Tr] ? (e5.protocol || "") + "//" : "";
    return u2 + a5 + c3 + t6 + r7 + s3;
  }(r6);
}
function getQuery(e4) {
  return parseQuery2(parseURL2(e4).search);
}
function joinURL2(e4, ...t5) {
  let r6 = e4 || "";
  for (const e5 of t5.filter((e6) => /* @__PURE__ */ function(e7) {
    return e7 && "/" !== e7;
  }(e6))) if (r6) {
    const t6 = e5.replace(Cr, "");
    r6 = withTrailingSlash2(r6) + t6;
  } else r6 = e5;
  return r6;
}
function parseURL2(e4 = "", t5) {
  const r6 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r6) {
    const [, e5, t6 = ""] = r6;
    return { protocol: e5.toLowerCase(), pathname: t6, href: e5 + t6, auth: "", host: "", search: "", hash: "" };
  }
  if (!function(e5, t6 = {}) {
    return "boolean" == typeof t6 && (t6 = { acceptRelative: t6 }), t6.strict ? Rr.test(e5) : Er.test(e5) || !!t6.acceptRelative && kr.test(e5);
  }(e4, { acceptRelative: true })) return t5 ? parseURL2(t5 + e4) : parsePath2(e4);
  const [, s2 = "", a5, c3 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u2 = "", d6 = ""] = c3.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s2 && (d6 = d6.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h3, search: f5, hash: m4 } = parsePath2(d6);
  return { protocol: s2.toLowerCase(), auth: a5 ? a5.slice(0, Math.max(0, a5.length - 1)) : "", host: u2, pathname: h3, search: f5, hash: m4, [Tr]: !s2 };
}
function parsePath2(e4 = "") {
  const [t5 = "", r6 = "", s2 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t5, search: r6, hash: s2 };
}
function prefixStorage(e4, t5) {
  if (!(t5 = function(e5) {
    return e5 = function(e6) {
      if (!e6) return "";
      return e6.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }(e5), e5 ? e5 + ":" : "";
  }(t5))) return e4;
  const r6 = { ...e4 };
  for (const s2 of Sr) r6[s2] = (r7 = "", ...a5) => e4[s2](t5 + r7, ...a5);
  return r6.getKeys = (r7 = "", ...s2) => e4.getKeys(t5 + r7, ...s2).then((e5) => e5.map((e6) => e6.slice(t5.length))), r6;
}
function jsonParseTransform(e4, t5) {
  if (!("__proto__" === e4 || "constructor" === e4 && t5 && "object" == typeof t5 && "prototype" in t5)) return t5;
  !function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  }(e4);
}
function destr(e4, t5 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const r6 = e4.trim();
  if (r6.length <= 9) switch (r6.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!Hr.test(e4)) {
    if (t5.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (Ar.test(e4) || jr.test(e4)) {
      if (t5.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform);
    }
    return JSON.parse(e4);
  } catch (r7) {
    if (t5.strict) throw r7;
    return e4;
  }
}
function asyncCall(e4, ...t5) {
  try {
    return (r6 = e4(...t5)) && "function" == typeof r6.then ? r6 : Promise.resolve(r6);
  } catch (e5) {
    return Promise.reject(e5);
  }
  var r6;
}
function stringify2(e4) {
  if (/* @__PURE__ */ function(e5) {
    const t5 = typeof e5;
    return null === e5 || "object" !== t5 && "function" !== t5;
  }(e4)) return String(e4);
  if (function(e5) {
    const t5 = Object.getPrototypeOf(e5);
    return !t5 || t5.isPrototypeOf(Object);
  }(e4) || Array.isArray(e4)) return JSON.stringify(e4);
  if ("function" == typeof e4.toJSON) return stringify2(e4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e4) {
  return "string" == typeof e4 ? e4 : Ir + function(e5) {
    if (globalThis.Buffer) return r5.from(e5).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e5));
  }(e4);
}
function deserializeRaw(e4) {
  return "string" != typeof e4 ? e4 : e4.startsWith(Ir) ? function(e5) {
    if (globalThis.Buffer) return r5.from(e5, "base64");
    return Uint8Array.from(globalThis.atob(e5), (e6) => e6.codePointAt(0));
  }(e4.slice(7)) : e4;
}
function normalizeKey$1(e4) {
  return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e4) {
  return normalizeKey$1(e4.join(":"));
}
function normalizeBaseKey(e4) {
  return (e4 = normalizeKey$1(e4)) ? e4 + ":" : "";
}
function watch2(e4, t5, r6) {
  return e4.watch ? e4.watch((e5, s2) => t5(e5, r6 + s2)) : () => {
  };
}
async function dispose(e4) {
  "function" == typeof e4.dispose && await asyncCall(e4.dispose);
}
function useStorage(e4 = "") {
  return e4 ? prefixStorage(Nr, e4) : Nr;
}
function hash(e4) {
  return function(e5) {
    return new k2().finalize(e5).toBase64();
  }("string" == typeof e4 ? e4 : function(e5) {
    const t5 = new qr();
    return t5.dispatch(e5), t5.buff;
  }(e4)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e4, t5 = {}) {
  t5 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t5 };
  const r6 = {}, s2 = t5.group || "nitro/functions", a5 = t5.name || e4.name || "_", c3 = t5.integrity || hash([e4, t5]), u2 = t5.validate || ((e5) => void 0 !== e5.value);
  return async (...d6) => {
    if (await t5.shouldBypassCache?.(...d6)) return e4(...d6);
    const h3 = await (t5.getKey || getKey)(...d6), f5 = await t5.shouldInvalidateCache?.(...d6), m4 = await async function(e5, d7, h4, f6) {
      const m5 = [t5.base, s2, a5, e5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g5 = await useStorage().getItem(m5).catch((e6) => {
        console.error("[cache] Cache read error.", e6), useNitroApp().captureError(e6, { event: f6, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g5) {
        g5 = {};
        const e6 = new Error("Malformed data read from cache.");
        console.error("[cache]", e6), useNitroApp().captureError(e6, { event: f6, tags: ["cache"] });
      }
      const _4 = 1e3 * (t5.maxAge ?? 0);
      _4 && (g5.expires = Date.now() + _4);
      const v3 = h4 || g5.integrity !== c3 || _4 && Date.now() - (g5.mtime || 0) > _4 || false === u2(g5), x4 = v3 ? (async () => {
        const s3 = r6[e5];
        s3 || (void 0 !== g5.value && (t5.staleMaxAge || 0) >= 0 && false === t5.swr && (g5.value = void 0, g5.integrity = void 0, g5.mtime = void 0, g5.expires = void 0), r6[e5] = Promise.resolve(d7()));
        try {
          g5.value = await r6[e5];
        } catch (t6) {
          throw s3 || delete r6[e5], t6;
        }
        if (!s3 && (g5.mtime = Date.now(), g5.integrity = c3, delete r6[e5], false !== u2(g5))) {
          let e6;
          t5.maxAge && !t5.swr && (e6 = { ttl: t5.maxAge });
          const r7 = useStorage().setItem(m5, g5, e6).catch((e7) => {
            console.error("[cache] Cache write error.", e7), useNitroApp().captureError(e7, { event: f6, tags: ["cache"] });
          });
          f6?.waitUntil && f6.waitUntil(r7);
        }
      })() : Promise.resolve();
      return void 0 === g5.value ? await x4 : v3 && f6 && f6.waitUntil && f6.waitUntil(x4), t5.swr && false !== u2(g5) ? (x4.catch((e6) => {
        console.error("[cache] SWR handler error.", e6), useNitroApp().captureError(e6, { event: f6, tags: ["cache"] });
      }), g5) : x4.then(() => g5);
    }(h3, () => e4(...d6), f5, d6[0] && isEvent(d6[0]) ? d6[0] : void 0);
    let g4 = m4.value;
    return t5.transform && (g4 = await t5.transform(m4, ...d6) || g4), g4;
  };
}
function getKey(...e4) {
  return e4.length > 0 ? hash(e4) : "";
}
function escapeKey(e4) {
  return String(e4).replace(/\W/g, "");
}
function cloneWithProxy(e4, t5) {
  return new Proxy(e4, { get: /* @__PURE__ */ __name((e5, r6, s2) => r6 in t5 ? t5[r6] : Reflect.get(e5, r6, s2), "get"), set: /* @__PURE__ */ __name((e5, r6, s2, a5) => r6 in t5 ? (t5[r6] = s2, true) : Reflect.set(e5, r6, s2, a5), "set") });
}
function klona(e4) {
  if ("object" != typeof e4) return e4;
  var t5, r6, s2 = Object.prototype.toString.call(e4);
  if ("[object Object]" === s2) {
    if (e4.constructor !== Object && "function" == typeof e4.constructor) for (t5 in r6 = new e4.constructor(), e4) e4.hasOwnProperty(t5) && r6[t5] !== e4[t5] && (r6[t5] = klona(e4[t5]));
    else for (t5 in r6 = {}, e4) "__proto__" === t5 ? Object.defineProperty(r6, t5, { value: klona(e4[t5]), configurable: true, enumerable: true, writable: true }) : r6[t5] = klona(e4[t5]);
    return r6;
  }
  if ("[object Array]" === s2) {
    for (t5 = e4.length, r6 = Array(t5); t5--; ) r6[t5] = klona(e4[t5]);
    return r6;
  }
  return "[object Set]" === s2 ? (r6 = /* @__PURE__ */ new Set(), e4.forEach(function(e5) {
    r6.add(klona(e5));
  }), r6) : "[object Map]" === s2 ? (r6 = /* @__PURE__ */ new Map(), e4.forEach(function(e5, t6) {
    r6.set(klona(t6), klona(e5));
  }), r6) : "[object Date]" === s2 ? /* @__PURE__ */ new Date(+e4) : "[object RegExp]" === s2 ? ((r6 = new RegExp(e4.source, e4.flags)).lastIndex = e4.lastIndex, r6) : "[object DataView]" === s2 ? new e4.constructor(klona(e4.buffer)) : "[object ArrayBuffer]" === s2 ? e4.slice(0) : "Array]" === s2.slice(-6) ? new e4.constructor(e4) : e4;
}
function isPlainObject2(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t5 = Object.getPrototypeOf(e4);
  return (null === t5 || t5 === Object.prototype || null === Object.getPrototypeOf(t5)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu(e4, t5, r6 = ".", s2) {
  if (!isPlainObject2(t5)) return _defu(e4, {}, r6, s2);
  const a5 = Object.assign({}, t5);
  for (const t6 in e4) {
    if ("__proto__" === t6 || "constructor" === t6) continue;
    const c3 = e4[t6];
    null != c3 && (s2 && s2(a5, t6, c3, r6) || (Array.isArray(c3) && Array.isArray(a5[t6]) ? a5[t6] = [...c3, ...a5[t6]] : isPlainObject2(c3) && isPlainObject2(a5[t6]) ? a5[t6] = _defu(c3, a5[t6], (r6 ? `${r6}.` : "") + t6.toString(), s2) : a5[t6] = c3));
  }
  return a5;
}
function createDefu(e4) {
  return (...t5) => t5.reduce((t6, r6) => _defu(t6, r6, "", e4), {});
}
function isUppercase(e4 = "") {
  if (!Ur.test(e4)) return e4 !== e4.toLowerCase();
}
function kebabCase(e4, t5) {
  return e4 ? (Array.isArray(e4) ? e4 : function(e5) {
    const t6 = Wr, r6 = [];
    if (!e5 || "string" != typeof e5) return r6;
    let s2, a5, c3 = "";
    for (const u2 of e5) {
      const e6 = t6.includes(u2);
      if (true === e6) {
        r6.push(c3), c3 = "", s2 = void 0;
        continue;
      }
      const d6 = isUppercase(u2);
      if (false === a5) {
        if (false === s2 && true === d6) {
          r6.push(c3), c3 = u2, s2 = d6;
          continue;
        }
        if (true === s2 && false === d6 && c3.length > 1) {
          const e7 = c3.at(-1);
          r6.push(c3.slice(0, Math.max(0, c3.length - 1))), c3 = e7 + u2, s2 = d6;
          continue;
        }
      }
      c3 += u2, s2 = d6, a5 = e6;
    }
    return r6.push(c3), r6;
  }(e4)).map((e5) => e5.toLowerCase()).join(t5) : "";
}
function getEnv(e4, t5) {
  const r6 = (s2 = e4, kebabCase(s2 || "", "_")).toUpperCase();
  var s2;
  return destr$2(h2.env[t5.prefix + r6] ?? h2.env[t5.altPrefix + r6]);
}
function _isObject(e4) {
  return "object" == typeof e4 && !Array.isArray(e4);
}
function applyEnv(e4, t5, r6 = "") {
  for (const s2 in e4) {
    const a5 = r6 ? `${r6}_${s2}` : s2, c3 = getEnv(a5, t5);
    _isObject(e4[s2]) ? _isObject(c3) ? (e4[s2] = { ...e4[s2], ...c3 }, applyEnv(e4[s2], t5, a5)) : void 0 === c3 ? applyEnv(e4[s2], t5, a5) : e4[s2] = c3 ?? e4[s2] : e4[s2] = c3 ?? e4[s2], t5.envExpansion && "string" == typeof e4[s2] && (e4[s2] = e4[s2].replace(Fr, (e5, t6) => h2.env[t6] || e5));
  }
  return e4;
}
function useRuntimeConfig2(e4) {
  if (!e4) return Qr;
  if (e4.context.nitro.runtimeConfig) return e4.context.nitro.runtimeConfig;
  const t5 = klona(Dr);
  return applyEnv(t5, Kr), e4.context.nitro.runtimeConfig = t5, t5;
}
function _deepFreeze(e4) {
  const t5 = Object.getOwnPropertyNames(e4);
  for (const r6 of t5) {
    const t6 = e4[r6];
    t6 && "object" == typeof t6 && _deepFreeze(t6);
  }
  return Object.freeze(e4);
}
function createRouteRulesHandler(e4) {
  return er((t5) => {
    const r6 = getRouteRules(t5);
    if (r6.headers && Xt2(t5, r6.headers), r6.redirect) {
      let e5 = r6.redirect.to;
      if (e5.endsWith("/**")) {
        let s2 = t5.path;
        const a5 = r6.redirect._redirectStripBase;
        a5 && (s2 = withoutBase(s2, a5)), e5 = joinURL2(e5.slice(0, -3), s2);
      } else if (t5.path.includes("?")) {
        e5 = withQuery2(e5, getQuery(t5.path));
      }
      return function(e6, t6, r7 = 302) {
        return e6.node.res.statusCode = sanitizeStatusCode2(r7, e6.node.res.statusCode), e6.node.res.setHeader("location", t6), send2(e6, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t6.replace(/"/g, "%22")}"></head></html>`, Zt2.html);
      }(t5, e5, r6.redirect.statusCode);
    }
    if (r6.proxy) {
      let s2 = r6.proxy.to;
      if (s2.endsWith("/**")) {
        let e5 = t5.path;
        const a5 = r6.proxy._proxyStripBase;
        a5 && (e5 = withoutBase(e5, a5)), s2 = joinURL2(s2.slice(0, -3), e5);
      } else if (t5.path.includes("?")) {
        s2 = withQuery2(s2, getQuery(t5.path));
      }
      return proxyRequest(t5, s2, { fetch: e4.localFetch, ...r6.proxy });
    }
  });
}
function getRouteRules(e4) {
  return e4.context._nitro = e4.context._nitro || {}, e4.context._nitro.routeRules || (e4.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e4.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e4.context._nitro.routeRules;
}
function getRouteRulesForPath(e4) {
  return defu$1({}, ...Yr.matchAll(e4).reverse());
}
function joinHeaders(e4) {
  return Array.isArray(e4) ? e4.join(", ") : String(e4);
}
function normalizeCookieHeader(e4 = "") {
  return splitCookiesString(joinHeaders(e4));
}
function normalizeCookieHeaders(e4) {
  const t5 = new Headers();
  for (const [r6, s2] of e4) if ("set-cookie" === r6) for (const e5 of normalizeCookieHeader(s2)) t5.append("set-cookie", e5);
  else t5.set(r6, joinHeaders(s2));
  return t5;
}
function hasReqHeader(e4, t5, r6) {
  const s2 = function(e5, t6) {
    return getRequestHeaders(e5)[t6.toLowerCase()];
  }(e4, t5);
  return s2 && "string" == typeof s2 && s2.toLowerCase().includes(r6);
}
function defaultHandler(e4, t5, r6) {
  const s2 = e4.unhandled || e4.fatal, a5 = e4.statusCode || 500, c3 = e4.statusMessage || "Server Error", u2 = function(e5, t6 = {}) {
    const r7 = function(e6, t7 = {}) {
      if (t7.xForwardedHost) {
        const t8 = e6.node.req.headers["x-forwarded-host"];
        if (t8) return t8;
      }
      return e6.node.req.headers.host || "localhost";
    }(e5, t6), s3 = function(e6, t7 = {}) {
      return false !== t7.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    }(e5, t6), a6 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(a6, `${s3}://${r7}`);
  }(t5, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a5) {
    const e5 = "/";
    if (/^\/[^/]/.test(e5) && !u2.pathname.startsWith(e5)) {
      return { status: 302, statusText: "Found", headers: { location: `${e5}${u2.pathname.slice(1)}${u2.search}` }, body: "Redirecting..." };
    }
  }
  if (s2 && !r6?.silent) {
    const r7 = [e4.unhandled && "[unhandled]", e4.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r7} [${t5.method}] ${u2}
`, e4);
  }
  const d6 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t5, a5, c3), 404 !== a5 && function(e5, t6) {
    return e5.node.res.getHeader(t6);
  }(t5, "cache-control") || (d6["cache-control"] = "no-cache");
  return { status: a5, statusText: c3, headers: d6, body: { error: true, url: u2.href, statusCode: a5, statusMessage: c3, message: s2 ? "Server Error" : e4.message, data: s2 ? void 0 : e4.data } };
}
function useNitroApp() {
  return ns;
}
function defineRenderHandler(e4) {
  const t5 = useRuntimeConfig2();
  return er(async (r6) => {
    const s2 = useNitroApp(), a5 = { event: r6, render: e4, response: void 0 };
    if (await s2.hooks.callHook("render:before", a5), !a5.response) {
      if (r6.path === `${t5.app.baseURL}favicon.ico`) return setResponseHeader(r6, "Content-Type", "image/x-icon"), send2(r6, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a5.response = await a5.render(r6), !a5.response) {
        const e5 = getResponseStatus(r6);
        return setResponseStatus(r6, 200 === e5 ? 500 : e5), send2(r6, "No response returned from render handler: " + r6.path);
      }
    }
    return await s2.hooks.callHook("render:response", a5.response, a5), a5.response.headers && setResponseHeaders(r6, a5.response.headers), (a5.response.statusCode || a5.response.statusMessage) && setResponseStatus(r6, a5.response.statusCode, a5.response.statusMessage), a5.response.body;
  });
}
var WriteStream2, ReadStream2, Process2, c2, u, _getEnv, d5, h2, f4, m3, g3, _3, v2, x3, R2, E2, C2, T2, S3, j2, H2, I3, P3, O2, N2, $2, M2, B3, q3, L2, z4, U4, W2, F3, D4, K3, Q3, Z3, J3, V3, X3, G3, Y3, ee3, te3, re3, se3, ne3, oe3, ae3, ie3, ce3, ue3, le3, de3, he3, fe3, pe3, me3, ge3, ye3, we3, be3, _e3, ve3, xe3, Re3, Ee3, ke3, Ce3, Te3, Se3, Ae3, je3, He3, Ie3, Pe3, Oe3, Ne3, $e3, Me3, Be3, qe3, Le3, ze3, Ue3, We3, Fe3, De3, Ke3, Qe3, Ze3, Je3, Ve3, Xe3, Ge3, Ye3, et3, tt3, rt3, st3, nt3, ot3, at3, it3, ct3, ut3, lt3, dt3, ht3, ft3, pt3, mt3, gt3, yt3, wt3, bt3, _t3, vt3, xt3, Rt3, Et3, kt3, Ct3, Tt2, St3, At3, jt3, Ht2, It2, Pt3, Ot3, Nt3, $t2, Mt2, Bt2, qt2, defu$1, Lt2, i2, zt2, Ut2, Wt2, A2, y2, w2, Ft2, Dt2, H3Error2, Kt2, Qt2, Zt2, Jt2, Vt2, Xt2, Gt2, Yt2, H3Event, er, lazyEventHandler, tr, rr, sr, Hookable2, nr, FetchError, or, ar, ir, cr, ur, lr, dr, hr, fr, pr, mr, gr, yr, wr, br, _r, vr, xr, Rr, Er, kr, Cr, Tr, Sr, Ar, jr, Hr, Ir, memory, Pr, normalizeKey2, Or, Nr, $r, Mr, Br, k2, l2, qr, cachedEventHandler, Lr, zr, Ur, Wr, Fr, Dr, Kr, Qr, Zr, Jr, Vr, Xr, Gr, Yr, es, ts, rs, _lazy_PJ8oIU, ss, ns, os, as, is;
var init_nitro = __esm({
  "dist/server/chunks/nitro/nitro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    "global" in globalThis || (globalThis.global = globalThis);
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      clearLine(e4, t5) {
        return t5 && t5(), false;
      }
      clearScreenDown(e4) {
        return e4 && e4(), false;
      }
      cursorTo(e4, t5, r6) {
        return r6 && "function" == typeof r6 && r6(), false;
      }
      moveCursor(e4, t5, r6) {
        return r6 && r6(), false;
      }
      getColorDepth(e4) {
        return 1;
      }
      hasColors(e4, t5) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e4, t5, r6) {
        e4 instanceof Uint8Array && (e4 = new TextDecoder().decode(e4));
        try {
          console.log(e4);
        } catch {
        }
        return r6 && "function" == typeof r6 && r6(), false;
      }
    };
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      setRawMode(e4) {
        return this.isRaw = e4, this;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    Process2 = class _Process extends t4 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e4) {
        super(), this.env = e4.env, this.hrtime = e4.hrtime, this.nextTick = e4.nextTick;
        for (const e5 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(t4.prototype)]) {
          const t5 = this[e5];
          "function" == typeof t5 && (this[e5] = t5.bind(this));
        }
      }
      emitWarning(e4, t5, r6) {
        console.warn(`${r6 ? `[${r6}] ` : ""}${t5 ? `${t5}: ` : ""}${e4}`);
      }
      emit(...e4) {
        return super.emit(...e4);
      }
      listeners(e4) {
        return super.listeners(e4);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream2(2);
      }
      #s = "/";
      chdir(e4) {
        this.#s = e4;
      }
      cwd() {
        return this.#s;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError2("process.kill");
      }
      abort() {
        throw createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw createNotImplementedError2("process.assert");
      }
      binding() {
        throw createNotImplementedError2("process.binding");
      }
      permission = { has: notImplemented2("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented2("process.report.getReport"), writeReport: notImplemented2("process.report.writeReport") };
      finalization = { register: notImplemented2("process.finalization.register"), unregister: notImplemented2("process.finalization.unregister"), registerBeforeExit: notImplemented2("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    c2 = /* @__PURE__ */ Object.create(null);
    u = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e4) => globalThis.__env__ || u?.env || (e4 ? c2 : globalThis), "_getEnv");
    d5 = new Proxy(c2, { get: /* @__PURE__ */ __name((e4, t5) => _getEnv()[t5] ?? c2[t5], "get"), has: /* @__PURE__ */ __name((e4, t5) => t5 in _getEnv() || t5 in c2, "has"), set: /* @__PURE__ */ __name((e4, t5, r6) => (_getEnv(true)[t5] = r6, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t5) => (delete _getEnv(true)[t5], true), "deleteProperty"), ownKeys() {
      const e4 = _getEnv();
      return Object.keys(e4);
    }, getOwnPropertyDescriptor(e4, t5) {
      const r6 = _getEnv();
      if (t5 in r6) return { value: r6[t5], writable: true, enumerable: true, configurable: true };
    } });
    h2 = new Process2({ env: d5, hrtime: Object.assign(function(e4) {
      const t5 = Date.now(), r6 = Math.trunc(t5 / 1e3), s2 = t5 % 1e3 * 1e6;
      if (e4) {
        let t6 = r6 - e4[0], a5 = s2 - e4[0];
        return a5 < 0 && (t6 -= 1, a5 = 1e9 + a5), [t6, a5];
      }
      return [r6, s2];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") }), nextTick: process_default.nextTick });
    for (const t5 of ["exit", "getBuiltinModule", "platform"]) t5 in process_default && (h2[t5] = process_default[t5]);
    process_default.features && Object.defineProperty(h2, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: f4, addListener: m3, allowedNodeEnvironmentFlags: g3, hasUncaughtExceptionCaptureCallback: _3, setUncaughtExceptionCaptureCallback: v2, loadEnvFile: x3, sourceMapsEnabled: R2, arch: E2, argv: C2, argv0: T2, chdir: S3, config: j2, connected: H2, constrainedMemory: I3, availableMemory: P3, cpuUsage: O2, cwd: N2, debugPort: $2, dlopen: M2, disconnect: B3, emit: q3, emitWarning: L2, env: z4, eventNames: U4, execArgv: W2, execPath: F3, exit: D4, finalization: K3, features: Q3, getBuiltinModule: Z3, getActiveResourcesInfo: J3, getMaxListeners: V3, hrtime: X3, kill: G3, listeners: Y3, listenerCount: ee3, memoryUsage: te3, nextTick: re3, on: se3, off: ne3, once: oe3, pid: ae3, platform: ie3, ppid: ce3, prependListener: ue3, prependOnceListener: le3, rawListeners: de3, release: he3, removeAllListeners: fe3, removeListener: pe3, report: me3, resourceUsage: ge3, setMaxListeners: ye3, setSourceMapsEnabled: we3, stderr: be3, stdin: _e3, stdout: ve3, title: xe3, umask: Re3, uptime: Ee3, version: ke3, versions: Ce3, domain: Te3, initgroups: Se3, moduleLoadList: Ae3, reallyExit: je3, openStdin: He3, assert: Ie3, binding: Pe3, send: Oe3, exitCode: Ne3, channel: $e3, getegid: Me3, geteuid: Be3, getgid: qe3, getgroups: Le3, getuid: ze3, setegid: Ue3, seteuid: We3, setgid: Fe3, setgroups: De3, setuid: Ke3, permission: Qe3, mainModule: Ze3, _events: Je3, _eventsCount: Ve3, _exiting: Xe3, _maxListeners: Ge3, _debugEnd: Ye3, _debugProcess: et3, _fatalException: tt3, _getActiveHandles: rt3, _getActiveRequests: st3, _kill: nt3, _preload_modules: ot3, _rawDebug: at3, _startProfilerIdleNotifier: it3, _stopProfilerIdleNotifier: ct3, _tickCallback: ut3, _disconnect: lt3, _handleQueue: dt3, _pendingMessage: ht3, _channel: ft3, _send: pt3, _linkedBinding: mt3 } = h2);
    gt3 = globalThis.process;
    globalThis.process = gt3 ? new Proxy(gt3, { get: /* @__PURE__ */ __name((e4, t5, r6) => Reflect.has(e4, t5) ? Reflect.get(e4, t5, r6) : Reflect.get(h2, t5, r6), "get") }) : h2, globalThis.Buffer || (globalThis.Buffer = r5), globalThis.setImmediate || (globalThis.setImmediate = s), globalThis.clearImmediate || (globalThis.clearImmediate = a4);
    yt3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    wt3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    bt3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform$2, "jsonParseTransform$2");
    __name(destr$2, "destr$2");
    _t3 = /#/g;
    vt3 = /&/g;
    xt3 = /\//g;
    Rt3 = /=/g;
    Et3 = /\+/g;
    kt3 = /%5e/gi;
    Ct3 = /%60/gi;
    Tt2 = /%7c/gi;
    St3 = /%20/gi;
    __name(encodeQueryValue$12, "encodeQueryValue$1");
    __name(encodeQueryKey$12, "encodeQueryKey$1");
    __name(decode$12, "decode$1");
    __name(decodeQueryValue$1, "decodeQueryValue$1");
    __name(parseQuery$12, "parseQuery$1");
    __name(stringifyQuery$12, "stringifyQuery$1");
    At3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    jt3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Ht2 = /^([/\\]\s*){2,}[^/\\]/;
    It2 = /^\.?\//;
    __name(hasProtocol$1, "hasProtocol$1");
    __name(withoutTrailingSlash$1, "withoutTrailingSlash$1");
    __name(withTrailingSlash$1, "withTrailingSlash$1");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withQuery$1, "withQuery$1");
    __name(joinURL$1, "joinURL$1");
    __name(joinRelativeURL, "joinRelativeURL");
    Pt3 = Symbol.for("ufo:protocolRelative");
    __name(parseURL$1, "parseURL$1");
    __name(parsePath$1, "parsePath$1");
    Ot3 = 0;
    Nt3 = 1;
    $t2 = 2;
    __name(createRouter$12, "createRouter$1");
    __name(insert2, "insert");
    __name(createRadixNode2, "createRadixNode");
    __name(getNodeType2, "getNodeType");
    __name(toRouteMatcher2, "toRouteMatcher");
    __name(_matchRoutes2, "_matchRoutes");
    __name(_sortRoutesMap2, "_sortRoutesMap");
    __name(_routerNodeToTable2, "_routerNodeToTable");
    Mt2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    Bt2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    qt2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform$1, "jsonParseTransform$1");
    __name(destr$1, "destr$1");
    __name(isPlainObject$1, "isPlainObject$1");
    __name(_defu$1, "_defu$1");
    defu$1 = /* @__PURE__ */ __name((...e4) => e4.reduce((e5, t5) => _defu$1(e5, t5, "", Lt2), {}), "defu$1");
    __name(o3, "o");
    i2 = class _i extends t4 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e4, t5) {
        return new _i(t5);
      }
      constructor(e4) {
        super();
      }
      _read(e4) {
      }
      read(e4) {
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e4) {
        return this;
      }
      unshift(e4, t5) {
      }
      wrap(e4) {
        return this;
      }
      push(e4, t5) {
        return false;
      }
      _destroy(e4, t5) {
        this.removeAllListeners();
      }
      destroy(e4) {
        return this.destroyed = true, this._destroy(e4), this;
      }
      pipe(e4, t5) {
        return {};
      }
      compose(e4, t5) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o3("Readable.asyncIterator");
      }
      iterator(e4) {
        throw o3("Readable.iterator");
      }
      map(e4, t5) {
        throw o3("Readable.map");
      }
      filter(e4, t5) {
        throw o3("Readable.filter");
      }
      forEach(e4, t5) {
        throw o3("Readable.forEach");
      }
      reduce(e4, t5, r6) {
        throw o3("Readable.reduce");
      }
      find(e4, t5) {
        throw o3("Readable.find");
      }
      findIndex(e4, t5) {
        throw o3("Readable.findIndex");
      }
      some(e4, t5) {
        throw o3("Readable.some");
      }
      toArray(e4) {
        throw o3("Readable.toArray");
      }
      every(e4, t5) {
        throw o3("Readable.every");
      }
      flatMap(e4, t5) {
        throw o3("Readable.flatMap");
      }
      drop(e4, t5) {
        throw o3("Readable.drop");
      }
      take(e4, t5) {
        throw o3("Readable.take");
      }
      asIndexedPairs(e4) {
        throw o3("Readable.asIndexedPairs");
      }
    };
    zt2 = class extends t4 {
      static {
        __name(this, "zt");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e4) {
        super();
      }
      pipe(e4, t5) {
        return {};
      }
      _write(e4, t5, s2) {
        if (this.writableEnded) s2 && s2();
        else {
          if (void 0 === this._data) this._data = e4;
          else {
            const s3 = "string" == typeof this._data ? r5.from(this._data, this._encoding || t5 || "utf8") : this._data, a5 = "string" == typeof e4 ? r5.from(e4, t5 || this._encoding || "utf8") : e4;
            this._data = r5.concat([s3, a5]);
          }
          this._encoding = t5, s2 && s2();
        }
      }
      _writev(e4, t5) {
      }
      _destroy(e4, t5) {
      }
      _final(e4) {
      }
      write(e4, t5, r6) {
        const s2 = "string" == typeof t5 ? this._encoding : "utf8", a5 = "function" == typeof t5 ? t5 : "function" == typeof r6 ? r6 : void 0;
        return this._write(e4, s2, a5), true;
      }
      setDefaultEncoding(e4) {
        return this;
      }
      end(e4, t5, r6) {
        const s2 = "function" == typeof e4 ? e4 : "function" == typeof t5 ? t5 : "function" == typeof r6 ? r6 : void 0;
        if (this.writableEnded) return s2 && s2(), this;
        const a5 = e4 === s2 ? void 0 : e4;
        if (a5) {
          const e5 = t5 === s2 ? void 0 : t5;
          this.write(a5, e5, s2);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e4, t5) {
        throw new Error("Method not implemented.");
      }
    };
    Ut2 = class {
      static {
        __name(this, "Ut");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e4 = new i2(), t5 = new zt2()) {
        Object.assign(this, e4), Object.assign(this, t5), this._destroy = /* @__PURE__ */ function(...e5) {
          return function(...t6) {
            for (const r6 of e5) r6(...t6);
          };
        }(e4._destroy, t5._destroy);
      }
    };
    Wt2 = (Object.assign(Ut2.prototype, i2.prototype), Object.assign(Ut2.prototype, zt2.prototype), Ut2);
    A2 = class extends Wt2 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e4) {
        super();
      }
      write(e4, t5, r6) {
        return false;
      }
      connect(e4, t5, r6) {
        return this;
      }
      end(e4, t5, r6) {
        return this;
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e4, t5) {
        return this;
      }
      setNoDelay(e4) {
        return this;
      }
      setKeepAlive(e4, t5) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e4 = new Error("ERR_SOCKET_CLOSED");
        return e4.code = "ERR_SOCKET_CLOSED", this.destroy(e4), this;
      }
    };
    y2 = class extends i2 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e4) {
        super(), this.socket = this.connection = e4 || new A2();
      }
      get rawHeaders() {
        const e4 = this.headers, t5 = [];
        for (const r6 in e4) if (Array.isArray(e4[r6])) for (const s2 of e4[r6]) t5.push(r6, s2);
        else t5.push(r6, e4[r6]);
        return t5;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e4, t5) {
        return this;
      }
      get headersDistinct() {
        return p4(this.headers);
      }
      get trailersDistinct() {
        return p4(this.trailers);
      }
    };
    __name(p4, "p");
    w2 = class extends zt2 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e4) {
        super(), this.req = e4;
      }
      assignSocket(e4) {
        e4._httpMessage = this, this.socket = e4, this.connection = e4, this.emit("socket", e4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e4) {
      }
      writeContinue(e4) {
      }
      writeHead(e4, t5, r6) {
        e4 && (this.statusCode = e4), "string" == typeof t5 && (this.statusMessage = t5, t5 = void 0);
        const s2 = r6 || t5;
        if (s2 && !Array.isArray(s2)) for (const e5 in s2) this.setHeader(e5, s2[e5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e4, t5) {
        return this;
      }
      appendHeader(e4, t5) {
        e4 = e4.toLowerCase();
        const r6 = this._headers[e4], s2 = [...Array.isArray(r6) ? r6 : [r6], ...Array.isArray(t5) ? t5 : [t5]].filter(Boolean);
        return this._headers[e4] = s2.length > 1 ? s2 : s2[0], this;
      }
      setHeader(e4, t5) {
        return this._headers[e4.toLowerCase()] = t5, this;
      }
      setHeaders(e4) {
        for (const [t5, r6] of Object.entries(e4)) this.setHeader(t5, r6);
        return this;
      }
      getHeader(e4) {
        return this._headers[e4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e4) {
        return e4.toLowerCase() in this._headers;
      }
      removeHeader(e4) {
        delete this._headers[e4.toLowerCase()];
      }
      addTrailers(e4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e4, t5) {
        "function" == typeof t5 && t5();
      }
    };
    Ft2 = (() => {
      const n2 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n2.prototype = /* @__PURE__ */ Object.create(null), n2;
    })();
    __name(S$1, "S$1");
    Dt2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b2, "b");
    __name(hasProp, "hasProp");
    H3Error2 = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t5 = {}) {
        super(e4, t5), t5.cause && !this.cause && (this.cause = t5.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode2(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage2(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError2, "createError");
    __name(isError, "isError");
    __name(getQuery$1, "getQuery$1");
    __name(getRequestHeaders, "getRequestHeaders");
    Kt2 = Symbol.for("h3RawBody");
    Qt2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Zt2 = { html: "text/html", json: "application/json" };
    Jt2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage2, "sanitizeStatusMessage");
    __name(sanitizeStatusCode2, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    Vt2 = void 0 === s ? (e4) => e4() : s;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseStatus, "getResponseStatus");
    __name(getResponseStatusText, "getResponseStatusText");
    __name(setResponseHeaders, "setResponseHeaders");
    Xt2 = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    Gt2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Yt2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e4, t5) {
        this.node = { req: e4, res: t5 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e4) {
          const t5 = new Headers();
          for (const [r6, s2] of Object.entries(e4)) if (Array.isArray(s2)) for (const e5 of s2) t5.append(r6, e5);
          else s2 && t5.set(r6, s2);
          return t5;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    er = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e4) {
      let t5, r6;
      const resolveHandler = /* @__PURE__ */ __name(() => r6 ? Promise.resolve(r6) : (t5 || (t5 = Promise.resolve(e4()).then((e5) => {
        const t6 = e5.default || e5;
        if ("function" != typeof t6) throw new TypeError("Invalid lazy handler result. It should be a function:", t6);
        return r6 = { handler: toEventHandler(e5.default || e5) }, r6;
      })), t5), "resolveHandler"), s2 = er((e5) => r6 ? r6.handler(e5) : resolveHandler().then((t6) => t6.handler(e5)));
      return s2.__resolve__ = resolveHandler, s2;
    }, "lazyEventHandler");
    __name(createApp2, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    tr = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks2, "flatHooks");
    rr = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    sr = void 0 !== console.createTask ? console.createTask : () => rr;
    __name(serialTaskCaller2, "serialTaskCaller");
    __name(parallelTaskCaller2, "parallelTaskCaller");
    __name(callEachWith2, "callEachWith");
    Hookable2 = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t5, r6 = {}) {
        if (!e4 || "function" != typeof t5) return () => {
        };
        const s2 = e4;
        let a5;
        for (; this._deprecatedHooks[e4]; ) a5 = this._deprecatedHooks[e4], e4 = a5.to;
        if (a5 && !r6.allowDeprecated) {
          let e5 = a5.message;
          e5 || (e5 = `${s2} hook has been deprecated` + (a5.to ? `, please use ${a5.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t5.name) try {
          Object.defineProperty(t5, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t5), () => {
          t5 && (this.removeHook(e4, t5), t5 = void 0);
        };
      }
      hookOnce(e4, t5) {
        let r6, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof r6 && r6(), r6 = void 0, _function = void 0, t5(...e5)), "_function");
        return r6 = this.hook(e4, _function), r6;
      }
      removeHook(e4, t5) {
        if (this._hooks[e4]) {
          const r6 = this._hooks[e4].indexOf(t5);
          -1 !== r6 && this._hooks[e4].splice(r6, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t5) {
        this._deprecatedHooks[e4] = "string" == typeof t5 ? { to: t5 } : t5;
        const r6 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t6 of r6) this.hook(e4, t6);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t5 in e4) this.deprecateHook(t5, e4[t5]);
      }
      addHooks(e4) {
        const t5 = flatHooks2(e4), r6 = Object.keys(t5).map((e5) => this.hook(e5, t5[e5]));
        return () => {
          for (const e5 of r6.splice(0, r6.length)) e5();
        };
      }
      removeHooks(e4) {
        const t5 = flatHooks2(e4);
        for (const e5 in t5) this.removeHook(e5, t5[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(serialTaskCaller2, e4, ...t5);
      }
      callHookParallel(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(parallelTaskCaller2, e4, ...t5);
      }
      callHookWith(e4, t5, ...r6) {
        const s2 = this._before || this._after ? { name: t5, args: r6, context: {} } : void 0;
        this._before && callEachWith2(this._before, s2);
        const a5 = e4(t5 in this._hooks ? [...this._hooks[t5]] : [], r6);
        return a5 instanceof Promise ? a5.finally(() => {
          this._after && s2 && callEachWith2(this._after, s2);
        }) : (this._after && s2 && callEachWith2(this._after, s2), a5);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t5 = this._before.indexOf(e4);
            -1 !== t5 && this._before.splice(t5, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t5 = this._after.indexOf(e4);
            -1 !== t5 && this._after.splice(t5, 1);
          }
        };
      }
    };
    __name(createHooks, "createHooks");
    nr = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e4, t5) {
        super(e4, t5), this.name = "FetchError", t5?.cause && !this.cause && (this.cause = t5.cause);
      }
    };
    or = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    ar = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ir = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    cr = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    ur = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    lr = function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== nr) return nr;
      throw new Error("unable to locate global object");
    }();
    dr = lr.fetch ? (...e4) => lr.fetch(...e4) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    hr = lr.Headers;
    fr = lr.AbortController;
    createFetch({ fetch: dr, Headers: hr, AbortController: fr });
    pr = /#/g;
    mr = /&/g;
    gr = /\//g;
    yr = /=/g;
    wr = /\+/g;
    br = /%5e/gi;
    _r = /%60/gi;
    vr = /%7c/gi;
    xr = /%20/gi;
    __name(encodeQueryValue2, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(decode2, "decode");
    __name(decodeQueryValue2, "decodeQueryValue");
    __name(parseQuery2, "parseQuery");
    __name(stringifyQuery2, "stringifyQuery");
    Rr = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Er = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    kr = /^([/\\]\s*){2,}[^/\\]/;
    Cr = /^\.?\//;
    __name(withTrailingSlash2, "withTrailingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery2, "withQuery");
    __name(getQuery, "getQuery");
    __name(joinURL2, "joinURL");
    Tr = Symbol.for("ufo:protocolRelative");
    __name(parseURL2, "parseURL");
    __name(parsePath2, "parsePath");
    Sr = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(prefixStorage, "prefixStorage");
    Ar = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    jr = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    Hr = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    Ir = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e4 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e4, "getInstance"), hasItem: /* @__PURE__ */ __name((t5) => e4.has(t5), "hasItem"), getItem: /* @__PURE__ */ __name((t5) => e4.get(t5) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t5) => e4.get(t5) ?? null, "getItemRaw"), setItem(t5, r6) {
        e4.set(t5, r6);
      }, setItemRaw(t5, r6) {
        e4.set(t5, r6);
      }, removeItem(t5) {
        e4.delete(t5);
      }, getKeys: /* @__PURE__ */ __name(() => [...e4.keys()], "getKeys"), clear() {
        e4.clear();
      }, dispose() {
        e4.clear();
      } };
    }, "memory");
    __name(watch2, "watch");
    __name(dispose, "dispose");
    Pr = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e4) {
      return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    Or = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(Pr)), "getKeys"), hasItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(e4 in Pr)), "hasItem"), getItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(Pr[e4] ? Pr[e4].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(Pr[e4] ? Pr[e4].meta : {})), "getMeta") };
    Nr = function(e4 = {}) {
      const t5 = { mounts: { "": e4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e5) => {
        for (const r7 of t5.mountpoints) if (e5.startsWith(r7)) return { base: r7, relativeKey: e5.slice(r7.length), driver: t5.mounts[r7] };
        return { base: "", relativeKey: e5, driver: t5.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e5, r7) => t5.mountpoints.filter((t6) => t6.startsWith(e5) || r7 && e5.startsWith(t6)).map((r8) => ({ relativeBase: e5.length > r8.length ? e5.slice(r8.length) : void 0, mountpoint: r8, driver: t5.mounts[r8] })), "getMounts"), onChange = /* @__PURE__ */ __name((e5, r7) => {
        if (t5.watching) {
          r7 = normalizeKey$1(r7);
          for (const s2 of t5.watchListeners) s2(e5, r7);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t5.watching) {
          for (const e5 in t5.unwatch) await t5.unwatch[e5]();
          t5.unwatch = {}, t5.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e5, t6, r7) => {
        const s2 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e6) => {
          let t7 = s2.get(e6.base);
          return t7 || (t7 = { driver: e6.driver, base: e6.base, items: [] }, s2.set(e6.base, t7)), t7;
        }, "getBatch");
        for (const r8 of e5) {
          const e6 = "string" == typeof r8, s3 = normalizeKey$1(e6 ? r8 : r8.key), a5 = e6 ? void 0 : r8.value, c3 = e6 || !r8.options ? t6 : { ...t6, ...r8.options }, u2 = getMount(s3);
          getBatch(u2).items.push({ key: s3, value: a5, relativeKey: u2.relativeKey, options: c3 });
        }
        return Promise.all([...s2.values()].map((e6) => r7(e6))).then((e6) => e6.flat());
      }, "runBatch"), r6 = { hasItem(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s2 } = getMount(e5);
        return asyncCall(s2.hasItem, r7, t6);
      }, getItem(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s2 } = getMount(e5);
        return asyncCall(s2.getItem, r7, t6).then((e6) => destr(e6));
      }, getItems: /* @__PURE__ */ __name((e5, t6 = {}) => runBatch(e5, t6, (e6) => e6.driver.getItems ? asyncCall(e6.driver.getItems, e6.items.map((e7) => ({ key: e7.relativeKey, options: e7.options })), t6).then((t7) => t7.map((t8) => ({ key: joinKeys(e6.base, t8.key), value: destr(t8.value) }))) : Promise.all(e6.items.map((t7) => asyncCall(e6.driver.getItem, t7.relativeKey, t7.options).then((e7) => ({ key: t7.key, value: destr(e7) }))))), "getItems"), getItemRaw(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s2 } = getMount(e5);
        return s2.getItemRaw ? asyncCall(s2.getItemRaw, r7, t6) : asyncCall(s2.getItem, r7, t6).then((e6) => deserializeRaw(e6));
      }, async setItem(e5, t6, s2 = {}) {
        if (void 0 === t6) return r6.removeItem(e5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a5, driver: c3 } = getMount(e5);
        c3.setItem && (await asyncCall(c3.setItem, a5, stringify2(t6), s2), c3.watch || onChange("update", e5));
      }, async setItems(e5, t6) {
        await runBatch(e5, t6, async (e6) => {
          if (e6.driver.setItems) return asyncCall(e6.driver.setItems, e6.items.map((e7) => ({ key: e7.relativeKey, value: stringify2(e7.value), options: e7.options })), t6);
          e6.driver.setItem && await Promise.all(e6.items.map((t7) => asyncCall(e6.driver.setItem, t7.relativeKey, stringify2(t7.value), t7.options)));
        });
      }, async setItemRaw(e5, t6, s2 = {}) {
        if (void 0 === t6) return r6.removeItem(e5, s2);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a5, driver: c3 } = getMount(e5);
        if (c3.setItemRaw) await asyncCall(c3.setItemRaw, a5, t6, s2);
        else {
          if (!c3.setItem) return;
          await asyncCall(c3.setItem, a5, serializeRaw(t6), s2);
        }
        c3.watch || onChange("update", e5);
      }, async removeItem(e5, t6 = {}) {
        "boolean" == typeof t6 && (t6 = { removeMeta: t6 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s2 } = getMount(e5);
        s2.removeItem && (await asyncCall(s2.removeItem, r7, t6), (t6.removeMeta || t6.removeMata) && await asyncCall(s2.removeItem, r7 + "$", t6), s2.watch || onChange("remove", e5));
      }, async getMeta(e5, t6 = {}) {
        "boolean" == typeof t6 && (t6 = { nativeOnly: t6 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r7, driver: s2 } = getMount(e5), a5 = /* @__PURE__ */ Object.create(null);
        if (s2.getMeta && Object.assign(a5, await asyncCall(s2.getMeta, r7, t6)), !t6.nativeOnly) {
          const e6 = await asyncCall(s2.getItem, r7 + "$", t6).then((e7) => destr(e7));
          e6 && "object" == typeof e6 && ("string" == typeof e6.atime && (e6.atime = new Date(e6.atime)), "string" == typeof e6.mtime && (e6.mtime = new Date(e6.mtime)), Object.assign(a5, e6));
        }
        return a5;
      }, setMeta(e5, t6, r7 = {}) {
        return this.setItem(e5 + "$", t6, r7);
      }, removeMeta(e5, t6 = {}) {
        return this.removeItem(e5 + "$", t6);
      }, async getKeys(e5, t6 = {}) {
        e5 = normalizeBaseKey(e5);
        const r7 = getMounts(e5, true);
        let s2 = [];
        const a5 = [];
        let c3 = true;
        for (const e6 of r7) {
          e6.driver.flags?.maxDepth || (c3 = false);
          const r8 = await asyncCall(e6.driver.getKeys, e6.relativeBase, t6);
          for (const t7 of r8) {
            const r9 = e6.mountpoint + normalizeKey$1(t7);
            s2.some((e7) => r9.startsWith(e7)) || a5.push(r9);
          }
          s2 = [e6.mountpoint, ...s2.filter((t7) => !t7.startsWith(e6.mountpoint))];
        }
        const u2 = void 0 !== t6.maxDepth && !c3;
        return a5.filter((r8) => (!u2 || function(e6, t7) {
          if (void 0 === t7) return true;
          let r9 = 0, s3 = e6.indexOf(":");
          for (; s3 > -1; ) r9++, s3 = e6.indexOf(":", s3 + 1);
          return r9 <= t7;
        }(r8, t6.maxDepth)) && function(e6, t7) {
          return t7 ? e6.startsWith(t7) && "$" !== e6[e6.length - 1] : "$" !== e6[e6.length - 1];
        }(r8, e5));
      }, async clear(e5, t6 = {}) {
        e5 = normalizeBaseKey(e5), await Promise.all(getMounts(e5, false).map(async (e6) => {
          if (e6.driver.clear) return asyncCall(e6.driver.clear, e6.relativeBase, t6);
          if (e6.driver.removeItem) {
            const r7 = await e6.driver.getKeys(e6.relativeBase || "", t6);
            return Promise.all(r7.map((r8) => e6.driver.removeItem(r8, t6)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t5.mounts).map((e5) => dispose(e5)));
      }, watch: /* @__PURE__ */ __name(async (e5) => (await (async () => {
        if (!t5.watching) {
          t5.watching = true;
          for (const e6 in t5.mounts) t5.unwatch[e6] = await watch2(t5.mounts[e6], onChange, e6);
        }
      })(), t5.watchListeners.push(e5), async () => {
        t5.watchListeners = t5.watchListeners.filter((t6) => t6 !== e5), 0 === t5.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t5.watchListeners = [], await stopWatch();
      }, mount(e5, s2) {
        if ((e5 = normalizeBaseKey(e5)) && t5.mounts[e5]) throw new Error(`already mounted at ${e5}`);
        return e5 && (t5.mountpoints.push(e5), t5.mountpoints.sort((e6, t6) => t6.length - e6.length)), t5.mounts[e5] = s2, t5.watching && Promise.resolve(watch2(s2, onChange, e5)).then((r7) => {
          t5.unwatch[e5] = r7;
        }).catch(console.error), r6;
      }, async unmount(e5, r7 = true) {
        (e5 = normalizeBaseKey(e5)) && t5.mounts[e5] && (t5.watching && e5 in t5.unwatch && (t5.unwatch[e5]?.(), delete t5.unwatch[e5]), r7 && await dispose(t5.mounts[e5]), t5.mountpoints = t5.mountpoints.filter((t6) => t6 !== e5), delete t5.mounts[e5]);
      }, getMount(e5 = "") {
        e5 = normalizeKey$1(e5) + ":";
        const t6 = getMount(e5);
        return { driver: t6.driver, base: t6.base };
      }, getMounts(e5 = "", t6 = {}) {
        e5 = normalizeKey$1(e5);
        return getMounts(e5, t6.parents).map((e6) => ({ driver: e6.driver, base: e6.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e5, t6 = {}) => r6.getKeys(e5, t6), "keys"), get: /* @__PURE__ */ __name((e5, t6 = {}) => r6.getItem(e5, t6), "get"), set: /* @__PURE__ */ __name((e5, t6, s2 = {}) => r6.setItem(e5, t6, s2), "set"), has: /* @__PURE__ */ __name((e5, t6 = {}) => r6.hasItem(e5, t6), "has"), del: /* @__PURE__ */ __name((e5, t6 = {}) => r6.removeItem(e5, t6), "del"), remove: /* @__PURE__ */ __name((e5, t6 = {}) => r6.removeItem(e5, t6), "remove") };
      return r6;
    }({});
    __name(useStorage, "useStorage");
    Nr.mount("/assets", Or);
    $r = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Mr = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Br = [];
    k2 = class {
      static {
        __name(this, "k");
      }
      _data = new l2();
      _hash = new l2([...$r]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e4) {
        e4 && this._append(e4);
        const t5 = 8 * this._nDataBytes, r6 = 8 * this._data.sigBytes;
        return this._data.words[r6 >>> 5] |= 128 << 24 - r6 % 32, this._data.words[14 + (r6 + 64 >>> 9 << 4)] = Math.floor(t5 / 4294967296), this._data.words[15 + (r6 + 64 >>> 9 << 4)] = t5, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e4, t5) {
        const r6 = this._hash.words;
        let s2 = r6[0], a5 = r6[1], c3 = r6[2], u2 = r6[3], d6 = r6[4], h3 = r6[5], f5 = r6[6], m4 = r6[7];
        for (let r7 = 0; r7 < 64; r7++) {
          if (r7 < 16) Br[r7] = 0 | e4[t5 + r7];
          else {
            const e5 = Br[r7 - 15], t6 = (e5 << 25 | e5 >>> 7) ^ (e5 << 14 | e5 >>> 18) ^ e5 >>> 3, s3 = Br[r7 - 2], a6 = (s3 << 15 | s3 >>> 17) ^ (s3 << 13 | s3 >>> 19) ^ s3 >>> 10;
            Br[r7] = t6 + Br[r7 - 7] + a6 + Br[r7 - 16];
          }
          const g4 = s2 & a5 ^ s2 & c3 ^ a5 & c3, _4 = (s2 << 30 | s2 >>> 2) ^ (s2 << 19 | s2 >>> 13) ^ (s2 << 10 | s2 >>> 22), v3 = m4 + ((d6 << 26 | d6 >>> 6) ^ (d6 << 21 | d6 >>> 11) ^ (d6 << 7 | d6 >>> 25)) + (d6 & h3 ^ ~d6 & f5) + Mr[r7] + Br[r7];
          m4 = f5, f5 = h3, h3 = d6, d6 = u2 + v3 | 0, u2 = c3, c3 = a5, a5 = s2, s2 = v3 + (_4 + g4) | 0;
        }
        r6[0] = r6[0] + s2 | 0, r6[1] = r6[1] + a5 | 0, r6[2] = r6[2] + c3 | 0, r6[3] = r6[3] + u2 | 0, r6[4] = r6[4] + d6 | 0, r6[5] = r6[5] + h3 | 0, r6[6] = r6[6] + f5 | 0, r6[7] = r6[7] + m4 | 0;
      }
      _append(e4) {
        "string" == typeof e4 && (e4 = l2.fromUtf8(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }
      _process(e4) {
        let t5, r6 = this._data.sigBytes / 64;
        r6 = e4 ? Math.ceil(r6) : Math.max((0 | r6) - this._minBufferSize, 0);
        const s2 = 16 * r6, a5 = Math.min(4 * s2, this._data.sigBytes);
        if (s2) {
          for (let e5 = 0; e5 < s2; e5 += 16) this._doProcessBlock(this._data.words, e5);
          t5 = this._data.words.splice(0, s2), this._data.sigBytes -= a5;
        }
        return new l2(t5, a5);
      }
    };
    l2 = class _l {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e4, t5) {
        e4 = this.words = e4 || [], this.sigBytes = void 0 === t5 ? 4 * e4.length : t5;
      }
      static fromUtf8(e4) {
        const t5 = unescape(encodeURIComponent(e4)), r6 = t5.length, s2 = [];
        for (let e5 = 0; e5 < r6; e5++) s2[e5 >>> 2] |= (255 & t5.charCodeAt(e5)) << 24 - e5 % 4 * 8;
        return new _l(s2, r6);
      }
      toBase64() {
        const e4 = [];
        for (let t5 = 0; t5 < this.sigBytes; t5 += 3) {
          const r6 = (this.words[t5 >>> 2] >>> 24 - t5 % 4 * 8 & 255) << 16 | (this.words[t5 + 1 >>> 2] >>> 24 - (t5 + 1) % 4 * 8 & 255) << 8 | this.words[t5 + 2 >>> 2] >>> 24 - (t5 + 2) % 4 * 8 & 255;
          for (let s2 = 0; s2 < 4 && 8 * t5 + 6 * s2 < 8 * this.sigBytes; s2++) e4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r6 >>> 6 * (3 - s2) & 63));
        }
        return e4.join("");
      }
      concat(e4) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t5 = 0; t5 < e4.sigBytes; t5++) {
          const r6 = e4.words[t5 >>> 2] >>> 24 - t5 % 4 * 8 & 255;
          this.words[this.sigBytes + t5 >>> 2] |= r6 << 24 - (this.sigBytes + t5) % 4 * 8;
        }
        else for (let t5 = 0; t5 < e4.sigBytes; t5 += 4) this.words[this.sigBytes + t5 >>> 2] = e4.words[t5 >>> 2];
        this.sigBytes += e4.sigBytes;
      }
    };
    qr = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #n = /* @__PURE__ */ new Map();
        write(e4) {
          this.buff += e4;
        }
        dispatch(e4) {
          return this[null === e4 ? "null" : typeof e4](e4);
        }
        object(e4) {
          if (e4 && "function" == typeof e4.toJSON) return this.object(e4.toJSON());
          const t5 = Object.prototype.toString.call(e4);
          let s2 = "";
          const a5 = t5.length;
          s2 = a5 < 10 ? "unknown:[" + t5 + "]" : t5.slice(8, a5 - 1), s2 = s2.toLowerCase();
          let c3 = null;
          if (void 0 !== (c3 = this.#n.get(e4))) return this.dispatch("[CIRCULAR:" + c3 + "]");
          if (this.#n.set(e4, this.#n.size), void 0 !== r5 && r5.isBuffer && r5.isBuffer(e4)) return this.write("buffer:"), this.write(e4.toString("utf8"));
          if ("object" !== s2 && "function" !== s2 && "asyncfunction" !== s2) this[s2] ? this[s2](e4) : this.unknown(e4, s2);
          else {
            const t6 = Object.keys(e4).sort(), r6 = [];
            this.write("object:" + (t6.length + r6.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t7) => {
              this.dispatch(t7), this.write(":"), this.dispatch(e4[t7]), this.write(",");
            }, "dispatchForKey");
            for (const e5 of t6) dispatchForKey(e5);
            for (const e5 of r6) dispatchForKey(e5);
          }
        }
        array(e4, t5) {
          if (t5 = void 0 !== t5 && t5, this.write("array:" + e4.length + ":"), !t5 || e4.length <= 1) {
            for (const t6 of e4) this.dispatch(t6);
            return;
          }
          const r6 = /* @__PURE__ */ new Map(), s2 = e4.map((e5) => {
            const t6 = new Hasher2();
            t6.dispatch(e5);
            for (const [e6, s3] of t6.#n) r6.set(e6, s3);
            return t6.toString();
          });
          return this.#n = r6, s2.sort(), this.array(s2, false);
        }
        date(e4) {
          return this.write("date:" + e4.toJSON());
        }
        symbol(e4) {
          return this.write("symbol:" + e4.toString());
        }
        unknown(e4, t5) {
          if (this.write(t5), e4) return this.write(":"), e4 && "function" == typeof e4.entries ? this.array([...e4.entries()], true) : void 0;
        }
        error(e4) {
          return this.write("error:" + e4.toString());
        }
        boolean(e4) {
          return this.write("bool:" + e4);
        }
        string(e4) {
          this.write("string:" + e4.length + ":"), this.write(e4);
        }
        function(e4) {
          this.write("fn:"), !function(e5) {
            if ("function" != typeof e5) return false;
            return "[native code] }" === Function.prototype.toString.call(e5).slice(-15);
          }(e4) ? this.dispatch(e4.toString()) : this.dispatch("[native]");
        }
        number(e4) {
          return this.write("number:" + e4);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e4) {
          return this.write("regex:" + e4.toString());
        }
        arraybuffer(e4) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e4));
        }
        url(e4) {
          return this.write("url:" + e4.toString());
        }
        map(e4) {
          this.write("map:");
          const t5 = [...e4];
          return this.array(t5, false);
        }
        set(e4) {
          this.write("set:");
          const t5 = [...e4];
          return this.array(t5, false);
        }
        bigint(e4) {
          return this.write("bigint:" + e4.toString());
        }
      }
      for (const e4 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e4] = function(t5) {
        return this.write(e4 + ":"), this.array([...t5], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e4, t5 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r6 = (t5.varies || []).filter(Boolean).map((e5) => e5.toLowerCase()).sort(), s2 = { ...t5, getKey: /* @__PURE__ */ __name(async (e5) => {
        const s3 = await t5.getKey?.(e5);
        if (s3) return escapeKey(s3);
        const a6 = e5.node.req.originalUrl || e5.node.req.url || e5.path;
        let c3;
        try {
          c3 = escapeKey(decodeURI(parseURL2(a6).pathname)).slice(0, 16) || "index";
        } catch {
          c3 = "-";
        }
        return [`${c3}.${hash(a6)}`, ...r6.map((t6) => [t6, e5.node.req.headers[t6]]).map(([e6, t6]) => `${escapeKey(e6)}.${hash(t6)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e5) => !!e5.value && (!(e5.value.code >= 400) && (void 0 !== e5.value.body && ("undefined" !== e5.value.headers.etag && "undefined" !== e5.value.headers["last-modified"]))), "validate"), group: t5.group || "nitro/handlers", integrity: t5.integrity || hash([e4, t5]) }, a5 = function(e5, t6 = {}) {
        return defineCachedFunction(e5, t6);
      }(async (a6) => {
        const c3 = {};
        for (const e5 of r6) {
          const t6 = a6.node.req.headers[e5];
          void 0 !== t6 && (c3[e5] = t6);
        }
        const u2 = cloneWithProxy(a6.node.req, { headers: c3 }), d6 = {};
        let h3;
        const f5 = createEvent(u2, cloneWithProxy(a6.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e5) => d6[e5], "getHeader"), setHeader(e5, t6) {
          return d6[e5] = t6, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d6), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e5) => e5 in d6, "hasHeader"), removeHeader(e5) {
          delete d6[e5];
        }, getHeaders: /* @__PURE__ */ __name(() => d6, "getHeaders"), end(e5, t6, r7) {
          return "string" == typeof e5 && (h3 = e5), "function" == typeof t6 && t6(), "function" == typeof r7 && r7(), this;
        }, write: /* @__PURE__ */ __name((e5, t6, r7) => ("string" == typeof e5 && (h3 = e5), "function" == typeof t6 && t6(void 0), "function" == typeof r7 && r7(), true), "write"), writeHead(e5, t6) {
          if (this.statusCode = e5, t6) {
            if (Array.isArray(t6) || "string" == typeof t6) throw new TypeError("Raw headers  is not supported.");
            for (const e6 in t6) {
              const r7 = t6[e6];
              void 0 !== r7 && this.setHeader(e6, r7);
            }
          }
          return this;
        } }));
        f5.fetch = (e5, t6) => fetchWithEvent(f5, e5, t6, { fetch: useNitroApp().localFetch }), f5.$fetch = (e5, t6) => fetchWithEvent(f5, e5, t6, { fetch: globalThis.$fetch }), f5.waitUntil = a6.waitUntil, f5.context = a6.context, f5.context.cache = { options: s2 };
        const m4 = await e4(f5) || h3, g4 = f5.node.res.getHeaders();
        g4.etag = String(g4.Etag || g4.etag || `W/"${hash(m4)}"`), g4["last-modified"] = String(g4["Last-Modified"] || g4["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _4 = [];
        t5.swr ? (t5.maxAge && _4.push(`s-maxage=${t5.maxAge}`), t5.staleMaxAge ? _4.push(`stale-while-revalidate=${t5.staleMaxAge}`) : _4.push("stale-while-revalidate")) : t5.maxAge && _4.push(`max-age=${t5.maxAge}`), _4.length > 0 && (g4["cache-control"] = _4.join(", "));
        return { code: f5.node.res.statusCode, headers: g4, body: m4 };
      }, s2);
      return defineEventHandler(async (r7) => {
        if (t5.headersOnly) {
          if (handleCacheHeaders(r7, { maxAge: t5.maxAge })) return;
          return e4(r7);
        }
        const s3 = await a5(r7);
        if (r7.node.res.headersSent || r7.node.res.writableEnded) return s3.body;
        if (!handleCacheHeaders(r7, { modifiedTime: new Date(s3.headers["last-modified"]), etag: s3.headers.etag, maxAge: t5.maxAge })) {
          r7.node.res.statusCode = s3.code;
          for (const e5 in s3.headers) {
            const t6 = s3.headers[e5];
            "set-cookie" === e5 ? r7.node.res.appendHeader(e5, splitCookiesString(t6)) : void 0 !== t6 && r7.node.res.setHeader(e5, t6);
          }
          return s3.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Lr = createDefu();
    zr = createDefu((e4, t5, r6) => {
      if (void 0 !== e4[t5] && "function" == typeof r6) return e4[t5] = r6(e4[t5]), true;
    })({ nuxt: {} });
    Ur = /\d/;
    Wr = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    Fr = /\{\{([^{}]*)\}\}/g;
    Dr = { app: { baseURL: "/", buildId: "dc26f837-904c-4d48-9d75-51c799ba10d2", buildAssetsDir: "/_fragment/nuxt/assets/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/": { redirect: { to: "/store/catalog", statusCode: 307 } }, "/_fragment/nuxt/assets/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_fragment/nuxt/assets/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_fragment/nuxt/assets/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    Kr = { prefix: "NITRO_", altPrefix: Dr.nitro.envPrefix ?? h2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Dr.nitro.envExpansion ?? h2.env.NITRO_ENV_EXPANSION ?? false };
    Qr = _deepFreeze(applyEnv(klona(Dr), Kr));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(zr)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e4, t5) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r6 = useRuntimeConfig2();
      if (t5 in r6) return r6[t5];
    }, "get") });
    Zr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== nr ? nr : {};
    Jr = "__unctx__";
    Vr = Zr[Jr] || (Zr[Jr] = /* @__PURE__ */ function(e4 = {}) {
      const t5 = {};
      return { get: /* @__PURE__ */ __name((r6, s2 = {}) => (t5[r6] || (t5[r6] = function(e5 = {}) {
        let t6, r7 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t6 && t6 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let s3;
        if (e5.asyncContext) {
          const t7 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t7 ? s3 = new t7() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s3) {
            const e6 = s3.getStore();
            if (void 0 !== e6) return e6;
          }
          return t6;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, s4) => {
          s4 || checkConflict(e6), t6 = e6, r7 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t6 = void 0, r7 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, a5) => {
          checkConflict(e6), t6 = e6;
          try {
            return s3 ? s3.run(e6, a5) : a5();
          } finally {
            r7 || (t6 = void 0);
          }
        }, "call"), async callAsync(e6, a5) {
          t6 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t6 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t6 === e6 ? onRestore : void 0, "onLeave");
          Gr.add(onLeave);
          try {
            const c3 = s3 ? s3.run(e6, a5) : a5();
            return r7 || (t6 = void 0), await c3;
          } finally {
            Gr.delete(onLeave);
          }
        } };
      }({ ...e4, ...s2 })), t5[r6]), "get") };
    }());
    Xr = "__unctx_async_handlers__";
    Gr = Zr[Xr] || (Zr[Xr] = /* @__PURE__ */ new Set());
    ((e4, t5 = {}) => {
      Vr.get(e4, t5);
    })("nitro-app", { asyncContext: false, AsyncLocalStorage: void 0 });
    Yr = toRouteMatcher2(createRouter$12({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRules, "getRouteRules");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    es = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(hasReqHeader, "hasReqHeader");
    __name(defaultHandler, "defaultHandler");
    ts = [async function(e4, t5, { defaultHandler: r6 }) {
      if (function(e5) {
        return !hasReqHeader(e5, "accept", "text/html") && (hasReqHeader(e5, "accept", "application/json") || hasReqHeader(e5, "user-agent", "curl/") || hasReqHeader(e5, "user-agent", "httpie/") || hasReqHeader(e5, "sec-fetch-mode", "cors") || e5.path.startsWith("/api/") || e5.path.endsWith(".json"));
      }(t5)) return;
      const s2 = await r6(e4, t5, { json: true });
      if (404 === (e4.statusCode || 500) && 302 === s2.status) return setResponseHeaders(t5, s2.headers), setResponseStatus(t5, s2.status, s2.statusText), send2(t5, JSON.stringify(s2.body, null, 2));
      const a5 = s2.body, c3 = new URL(a5.url);
      a5.url = c3.pathname + c3.search + c3.hash, a5.message ||= "Server Error", delete s2.headers["content-type"], delete s2.headers["content-security-policy"], setResponseHeaders(t5, s2.headers);
      const u2 = getRequestHeaders(t5), d6 = t5.path.startsWith("/__nuxt_error") || !!u2["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery$1(joinURL$1(useRuntimeConfig2(t5).app.baseURL, "/__nuxt_error"), a5), { headers: { ...u2, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (t5.handled) return;
      if (!d6) {
        const { template: e5 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        return setResponseHeader(t5, "Content-Type", "text/html;charset=UTF-8"), send2(t5, e5(a5));
      }
      const h3 = await d6.text();
      for (const [e5, r7] of d6.headers.entries()) setResponseHeader(t5, e5, r7);
      return setResponseStatus(t5, d6.status && 200 !== d6.status ? d6.status : s2.status, d6.statusText || s2.statusText), send2(t5, h3);
    }, function(e4, t5) {
      const r6 = defaultHandler(e4, t5);
      return setResponseHeaders(t5, r6.headers), setResponseStatus(t5, r6.status, r6.statusText), send2(t5, JSON.stringify(r6.body, null, 2));
    }];
    rs = [];
    _lazy_PJ8oIU = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e4) {
      return e4.W;
    }), "_lazy_PJ8oIU");
    ss = [{ route: "/__nuxt_error", handler: _lazy_PJ8oIU, lazy: true, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_PJ8oIU, lazy: true, middleware: false, method: void 0 }];
    ns = function() {
      const e4 = useRuntimeConfig2(), t5 = createHooks(), captureError = /* @__PURE__ */ __name((e5, r7 = {}) => {
        const s3 = t5.callHookParallel("error", e5, r7).catch((e6) => {
          console.error("Error while capturing another error", e6);
        });
        if (r7.event && isEvent(r7.event)) {
          const t6 = r7.event.context.nitro?.errors;
          t6 && t6.push({ error: e5, context: r7 }), r7.event.waitUntil && r7.event.waitUntil(s3);
        }
      }, "captureError"), r6 = createApp2({ debug: destr$2(false), onError: /* @__PURE__ */ __name((e5, t6) => (captureError(e5, { event: t6, tags: ["request"] }), async function(e6, t7) {
        for (const r7 of ts) try {
          if (await r7(e6, t7, { defaultHandler }), t7.handled) return;
        } catch (e7) {
          console.error(e7);
        }
      }(e5, t6)), "onError"), onRequest: /* @__PURE__ */ __name(async (e5) => {
        e5.context.nitro = e5.context.nitro || { errors: [] };
        const t6 = e5.node.req?.__unenv__;
        t6?._platform && (e5.context = { ...t6._platform, ...e5.context }), !e5.context.waitUntil && t6?.waitUntil && (e5.context.waitUntil = t6.waitUntil), e5.fetch = (t7, r7) => fetchWithEvent(e5, t7, r7, { fetch: localFetch }), e5.$fetch = (t7, r7) => fetchWithEvent(e5, t7, r7, { fetch: c3 }), e5.waitUntil = (t7) => {
          e5.context.nitro._waitUntilPromises || (e5.context.nitro._waitUntilPromises = []), e5.context.nitro._waitUntilPromises.push(t7), e5.context.waitUntil && e5.context.waitUntil(t7);
        }, e5.captureError = (t7, r7) => {
          captureError(t7, { event: e5, ...r7 });
        }, await ns.hooks.callHook("request", e5).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e5, t6) => {
        await ns.hooks.callHook("beforeResponse", e5, t6).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e5, t6) => {
        await ns.hooks.callHook("afterResponse", e5, t6).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s2 = function(e5 = {}) {
        const t6 = createRouter$12({}), r7 = {};
        let s3;
        const a6 = {}, addRoute = /* @__PURE__ */ __name((e6, s4, c5) => {
          let u2 = r7[e6];
          if (u2 || (r7[e6] = u2 = { path: e6, handlers: {} }, t6.insert(e6, u2)), Array.isArray(c5)) for (const t7 of c5) addRoute(e6, s4, t7);
          else u2.handlers[c5] = toEventHandler(s4, 0, e6);
          return a6;
        }, "addRoute");
        a6.use = a6.add = (e6, t7, r8) => addRoute(e6, t7, r8 || "all");
        for (const e6 of tr) a6[e6] = (t7, r8) => a6.add(t7, r8, e6);
        const matchHandler = /* @__PURE__ */ __name((e6 = "/", r8 = "get") => {
          const a7 = e6.indexOf("?");
          -1 !== a7 && (e6 = e6.slice(0, Math.max(0, a7)));
          const c5 = t6.lookup(e6);
          if (!c5 || !c5.handlers) return { error: createError2({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e6 || "/"}.` }) };
          let u2 = c5.handlers[r8] || c5.handlers.all;
          if (!u2) {
            s3 || (s3 = toRouteMatcher2(t6));
            const a8 = s3.matchAll(e6).reverse();
            for (const e7 of a8) {
              if (e7.handlers[r8]) {
                u2 = e7.handlers[r8], c5.handlers[r8] = c5.handlers[r8] || u2;
                break;
              }
              if (e7.handlers.all) {
                u2 = e7.handlers.all, c5.handlers.all = c5.handlers.all || u2;
                break;
              }
            }
          }
          return u2 ? { matched: c5, handler: u2 } : { error: createError2({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r8} is not allowed on this route.` }) };
        }, "matchHandler"), c4 = e5.preemptive || e5.preemtive;
        return a6.handler = er((e6) => {
          const t7 = matchHandler(e6.path, e6.method.toLowerCase());
          if ("error" in t7) {
            if (c4) throw t7.error;
            return;
          }
          e6.context.matchedRoute = t7.matched;
          const r8 = t7.matched.params || {};
          return e6.context.params = r8, Promise.resolve(t7.handler(e6)).then((e7) => void 0 === e7 && c4 ? null : e7);
        }), a6.handler.__resolve__ = async (e6) => {
          e6 = withLeadingSlash(e6);
          const t7 = matchHandler(e6);
          if ("error" in t7) return;
          let r8 = { route: t7.matched.path, handler: t7.handler };
          if (t7.handler.__resolve__) {
            const s4 = await t7.handler.__resolve__(e6);
            if (!s4) return;
            r8 = { ...r8, ...s4 };
          }
          return r8;
        }, a6;
      }({ preemptive: true }), a5 = toNodeListener(r6), localFetch = /* @__PURE__ */ __name((e5, t6) => e5.toString().startsWith("/") ? async function(e6, t7, r7 = {}) {
        try {
          const s3 = await b2(e6, { url: t7, ...r7 });
          return new Response(s3.body, { status: s3.status, statusText: s3.statusText, headers: S$1(s3.headers) });
        } catch (e7) {
          return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
        }
      }(a5, e5, t6).then((e6) => function(e7) {
        return e7.headers.has("set-cookie") ? new Response(e7.body, { status: e7.status, statusText: e7.statusText, headers: normalizeCookieHeaders(e7.headers) }) : e7;
      }(e6)) : globalThis.fetch(e5, t6), "localFetch"), c3 = createFetch({ fetch: localFetch, Headers: hr, defaults: { baseURL: e4.app.baseURL } });
      globalThis.$fetch = c3, r6.use(createRouteRulesHandler({ localFetch }));
      for (const t6 of ss) {
        let a6 = t6.lazy ? lazyEventHandler(t6.handler) : t6.handler;
        if (t6.middleware || !t6.route) {
          const s3 = (e4.app.baseURL + (t6.route || "/")).replace(/\/+/g, "/");
          r6.use(s3, a6);
        } else {
          const e5 = getRouteRulesForPath(t6.route.replace(/:\w+|\*\*/g, "_"));
          e5.cache && (a6 = cachedEventHandler(a6, { group: "nitro/routes", ...e5.cache })), s2.use(t6.route, a6, t6.method);
        }
      }
      return r6.use(e4.app.baseURL, s2.handler), { hooks: t5, h3App: r6, router: s2, localCall: /* @__PURE__ */ __name((e5) => b2(a5, e5), "localCall"), localFetch, captureError };
    }();
    __name(useNitroApp, "useNitroApp");
    __name(defineRenderHandler, "defineRenderHandler");
    !function(e4) {
      for (const t5 of rs) try {
        t5(e4);
      } catch (t6) {
        throw e4.captureError(t6, { tags: ["plugin"] }), t6;
      }
    }(ns);
    os = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2025-04-17T12:53:00.396Z", size: 4286, path: "../public/favicon.ico" }, "/_fragment/nuxt/assets/BkBDaCjX.js": { type: "text/javascript; charset=utf-8", etag: '"8a-46V84eacrIPdlPGZjpZnVBk+was"', mtime: "2025-04-17T12:53:00.386Z", size: 138, path: "../public/_fragment/nuxt/assets/BkBDaCjX.js" }, "/_fragment/nuxt/assets/BoXxEpqi.js": { type: "text/javascript; charset=utf-8", etag: '"ec9-RoNop4MSqruzntH5nN/vTENZLa8"', mtime: "2025-04-17T12:53:00.386Z", size: 3785, path: "../public/_fragment/nuxt/assets/BoXxEpqi.js" }, "/_fragment/nuxt/assets/C1B2qiE_.js": { type: "text/javascript; charset=utf-8", etag: '"29ac8-kUEwk5HVxi+RUOK3WbG9OC0y4rI"', mtime: "2025-04-17T12:53:00.387Z", size: 170696, path: "../public/_fragment/nuxt/assets/C1B2qiE_.js" }, "/_fragment/nuxt/assets/C9EZNfed.js": { type: "text/javascript; charset=utf-8", etag: '"606-b3PkrhKrS3LpoRBV3XPrK+YJbkA"', mtime: "2025-04-17T12:53:00.386Z", size: 1542, path: "../public/_fragment/nuxt/assets/C9EZNfed.js" }, "/_fragment/nuxt/assets/CL5mtMzs.js": { type: "text/javascript; charset=utf-8", etag: '"b5-2ODQtqpPNCn9hLhvVht3uXE7wq4"', mtime: "2025-04-17T12:53:00.387Z", size: 181, path: "../public/_fragment/nuxt/assets/CL5mtMzs.js" }, "/_fragment/nuxt/assets/CjXz2fZQ.js": { type: "text/javascript; charset=utf-8", etag: '"d52-JtuGHLMHixUWoFUWqxY6Zy30xgs"', mtime: "2025-04-17T12:53:00.387Z", size: 3410, path: "../public/_fragment/nuxt/assets/CjXz2fZQ.js" }, "/_fragment/nuxt/assets/DOwWkSUa.js": { type: "text/javascript; charset=utf-8", etag: '"19db-CS39b/Y+hP3IJC1C+8HNJE0fjOw"', mtime: "2025-04-17T12:53:00.387Z", size: 6619, path: "../public/_fragment/nuxt/assets/DOwWkSUa.js" }, "/_fragment/nuxt/assets/D_RTfECj.js": { type: "text/javascript; charset=utf-8", etag: '"12e-26k/VU5ZpE/SRFrFs9qkXvB9ebQ"', mtime: "2025-04-17T12:53:00.387Z", size: 302, path: "../public/_fragment/nuxt/assets/D_RTfECj.js" }, "/_fragment/nuxt/assets/D_sK_xWA.js": { type: "text/javascript; charset=utf-8", etag: '"129e-m0sw9+I08WpoPK4jUrV+KTO2kHQ"', mtime: "2025-04-17T12:53:00.388Z", size: 4766, path: "../public/_fragment/nuxt/assets/D_sK_xWA.js" }, "/_fragment/nuxt/assets/ErSGF7Fg.js": { type: "text/javascript; charset=utf-8", etag: '"1645-96lDohy/EUzVLZ1+9vqxX+9PjLI"', mtime: "2025-04-17T12:53:00.387Z", size: 5701, path: "../public/_fragment/nuxt/assets/ErSGF7Fg.js" }, "/_fragment/nuxt/assets/_id_.OLrNJgxX.css": { type: "text/css; charset=utf-8", etag: '"18f-xnodR6t7nfhaaw+nXR5qPOA1LnY"', mtime: "2025-04-17T12:53:00.388Z", size: 399, path: "../public/_fragment/nuxt/assets/_id_.OLrNJgxX.css" }, "/_fragment/nuxt/assets/error-404.C76f6kO1.css": { type: "text/css; charset=utf-8", etag: '"de4-Fi0iTqLVIJzd50nuvBtnyDswceM"', mtime: "2025-04-17T12:53:00.388Z", size: 3556, path: "../public/_fragment/nuxt/assets/error-404.C76f6kO1.css" }, "/_fragment/nuxt/assets/error-500.DI4MrETp.css": { type: "text/css; charset=utf-8", etag: '"75c-X2QyWNIN93rd767Ym7fKf+SGQGQ"', mtime: "2025-04-17T12:53:00.388Z", size: 1884, path: "../public/_fragment/nuxt/assets/error-500.DI4MrETp.css" }, "/_fragment/nuxt/assets/index.ZyFZDvry.css": { type: "text/css; charset=utf-8", etag: '"19f-QBRETG29KWwn0fyjpEZoNULEays"', mtime: "2025-04-17T12:53:00.388Z", size: 415, path: "../public/_fragment/nuxt/assets/index.ZyFZDvry.css" }, "/_fragment/nuxt/assets/product-catalog-mock.BFUL3bBD.css": { type: "text/css; charset=utf-8", etag: '"82-CH9Zt7EtZQFHpmahWfA252taYTA"', mtime: "2025-04-17T12:53:00.388Z", size: 130, path: "../public/_fragment/nuxt/assets/product-catalog-mock.BFUL3bBD.css" }, "/_fragment/nuxt/assets/builds/latest.json": { type: "application/json", etag: '"47-7S8MXLmFI58bqtSzQ5zzHJfIuB0"', mtime: "2025-04-17T12:53:00.380Z", size: 71, path: "../public/_fragment/nuxt/assets/builds/latest.json" }, "/_fragment/nuxt/assets/images/product1.webp": { type: "image/webp", etag: '"c54e-C9RuXZrZkCAf/LoVuMl+8nEmJtI"', mtime: "2025-04-17T12:53:00.392Z", size: 50510, path: "../public/_fragment/nuxt/assets/images/product1.webp" }, "/_fragment/nuxt/assets/images/product10.webp": { type: "image/webp", etag: '"fb08-NEkkzcRFjpVFTHfw4TsjTDH6G5E"', mtime: "2025-04-17T12:53:00.395Z", size: 64264, path: "../public/_fragment/nuxt/assets/images/product10.webp" }, "/_fragment/nuxt/assets/images/product11.webp": { type: "image/webp", etag: '"c0e8-5vDqJhriJT9d/VK1Q1KnoLr7Eso"', mtime: "2025-04-17T12:53:00.392Z", size: 49384, path: "../public/_fragment/nuxt/assets/images/product11.webp" }, "/_fragment/nuxt/assets/images/product12.webp": { type: "image/webp", etag: '"c284-6/8s0LzF0MPB9Xjevmn02lwbwIM"', mtime: "2025-04-17T12:53:00.394Z", size: 49796, path: "../public/_fragment/nuxt/assets/images/product12.webp" }, "/_fragment/nuxt/assets/images/product13.webp": { type: "image/webp", etag: '"b0b4-n0N7z5/2eyxcEhd2ga6Wel5JUjo"', mtime: "2025-04-17T12:53:00.392Z", size: 45236, path: "../public/_fragment/nuxt/assets/images/product13.webp" }, "/_fragment/nuxt/assets/images/product14.webp": { type: "image/webp", etag: '"cbba-4Iy6cNrHsQ8T/gwDolg8RVMMpIY"', mtime: "2025-04-17T12:53:00.393Z", size: 52154, path: "../public/_fragment/nuxt/assets/images/product14.webp" }, "/_fragment/nuxt/assets/images/product15.webp": { type: "image/webp", etag: '"9ab4-5nDoROyUvq4MYlHfUnguBk2j0j4"', mtime: "2025-04-17T12:53:00.393Z", size: 39604, path: "../public/_fragment/nuxt/assets/images/product15.webp" }, "/_fragment/nuxt/assets/images/product2.webp": { type: "image/webp", etag: '"edbc-vVYEy6uCQSvnPfxT2z51GwfC/2Q"', mtime: "2025-04-17T12:53:00.394Z", size: 60860, path: "../public/_fragment/nuxt/assets/images/product2.webp" }, "/_fragment/nuxt/assets/images/product3.webp": { type: "image/webp", etag: '"c2fc-IQWOyiMO5E5G+gBF+uZT7yJ06pM"', mtime: "2025-04-17T12:53:00.395Z", size: 49916, path: "../public/_fragment/nuxt/assets/images/product3.webp" }, "/_fragment/nuxt/assets/images/product4.webp": { type: "image/webp", etag: '"eee2-dJbutGS09PvmnHj3jJkYKx1LSPw"', mtime: "2025-04-17T12:53:00.394Z", size: 61154, path: "../public/_fragment/nuxt/assets/images/product4.webp" }, "/_fragment/nuxt/assets/images/product5.webp": { type: "image/webp", etag: '"9bea-kd4bBXl94yX/ZedwXTBju7S8zNc"', mtime: "2025-04-17T12:53:00.395Z", size: 39914, path: "../public/_fragment/nuxt/assets/images/product5.webp" }, "/_fragment/nuxt/assets/images/product6.webp": { type: "image/webp", etag: '"c318-lcXk1zc1uLnLbwdP5CD4LIrqmJM"', mtime: "2025-04-17T12:53:00.394Z", size: 49944, path: "../public/_fragment/nuxt/assets/images/product6.webp" }, "/_fragment/nuxt/assets/images/product7.webp": { type: "image/webp", etag: '"d252-KhTC07oH8T4pUpXT9MMTCnM/Gew"', mtime: "2025-04-17T12:53:00.394Z", size: 53842, path: "../public/_fragment/nuxt/assets/images/product7.webp" }, "/_fragment/nuxt/assets/images/product8.webp": { type: "image/webp", etag: '"fbd2-zWL9ruYZ4x01fmauR/gE7VhhME0"', mtime: "2025-04-17T12:53:00.396Z", size: 64466, path: "../public/_fragment/nuxt/assets/images/product8.webp" }, "/_fragment/nuxt/assets/images/product9.webp": { type: "image/webp", etag: '"e490-qhvZLaNvhmWucJruVCME2XoIn0A"', mtime: "2025-04-17T12:53:00.395Z", size: 58512, path: "../public/_fragment/nuxt/assets/images/product9.webp" }, "/_fragment/nuxt/assets/builds/meta/dc26f837-904c-4d48-9d75-51c799ba10d2.json": { type: "application/json", etag: '"ac-vAKlm3xK6ri5PqkCKxqY/gIWeio"', mtime: "2025-04-17T12:53:00.377Z", size: 172, path: "../public/_fragment/nuxt/assets/builds/meta/dc26f837-904c-4d48-9d75-51c799ba10d2.json" } };
    as = { "/_fragment/nuxt/assets/builds/meta/": { maxAge: 31536e3 }, "/_fragment/nuxt/assets/builds/": { maxAge: 1 }, "/_fragment/nuxt/assets/": { maxAge: 31536e3 } };
    is = function(e4) {
      const t5 = useNitroApp();
      return { async fetch(s2, a5, c3) {
        const u2 = {}, d6 = new URL(s2.url);
        if (e4.fetch) {
          const t6 = await e4.fetch(s2, a5, c3, d6, u2);
          if (t6) return t6;
        }
        return async function(e5, t6, s3, a6 = new URL(e5.url), c4 = useNitroApp(), u3) {
          let d7;
          (function(e6) {
            return es.test(e6.method);
          })(e5) && (d7 = r5.from(await e5.arrayBuffer()));
          return globalThis.__env__ = t6, c4.localFetch(a6.pathname + a6.search, { context: { waitUntil: /* @__PURE__ */ __name((e6) => s3.waitUntil(e6), "waitUntil"), _platform: { cf: e5.cf, cloudflare: { request: e5, env: t6, context: s3, url: a6, ...u3 } } }, host: a6.hostname, protocol: a6.protocol, method: e5.method, headers: e5.headers, body: d7 });
        }(s2, a5, c3, d6, t5, u2);
      }, scheduled(e5, r6, s2) {
        globalThis.__env__ = r6, s2.waitUntil(t5.hooks.callHook("cloudflare:scheduled", { controller: e5, env: r6, context: s2 }));
      }, email(e5, r6, s2) {
        globalThis.__env__ = r6, s2.waitUntil(t5.hooks.callHook("cloudflare:email", { message: e5, event: e5, env: r6, context: s2 }));
      }, queue(e5, r6, s2) {
        globalThis.__env__ = r6, s2.waitUntil(t5.hooks.callHook("cloudflare:queue", { batch: e5, event: e5, env: r6, context: s2 }));
      }, tail(e5, r6, s2) {
        globalThis.__env__ = r6, s2.waitUntil(t5.hooks.callHook("cloudflare:tail", { traces: e5, env: r6, context: s2 }));
      }, trace(e5, r6, s2) {
        globalThis.__env__ = r6, s2.waitUntil(t5.hooks.callHook("cloudflare:trace", { traces: e5, env: r6, context: s2 }));
      } };
    }({ fetch(e4, t5, r6, s2) {
      if (t5.ASSETS && function(e5 = "") {
        if (os[e5]) return true;
        for (const t6 in as) if (e5.startsWith(t6)) return true;
        return false;
      }(s2.pathname)) return t5.ASSETS.fetch(e4);
    } });
  }
});

// .wrangler/tmp/bundle-iRKeOk/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-iRKeOk/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// dist/server/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_nitro();
import "node:events";
import "node:buffer";
import "node:timers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e4) {
      console.error("Failed to drain the unused request body.", e4);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e4) {
  return {
    name: e4?.name,
    message: e4?.message ?? String(e4),
    stack: e4?.stack,
    cause: e4?.cause === void 0 ? void 0 : reduceError(e4.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e4) {
    const error3 = reduceError(e4);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-iRKeOk/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = is;

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-iRKeOk/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
