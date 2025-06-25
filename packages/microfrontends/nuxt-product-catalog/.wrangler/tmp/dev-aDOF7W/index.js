var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
        this._entries = markName ? this._entries.filter((e6) => e6.name !== markName) : this._entries.filter((e6) => e6.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e6) => e6.name !== measureName) : this._entries.filter((e6) => e6.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e6) => e6.entryType !== "resource" || e6.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e6) => e6.name === name && (!type || e6.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e6) => e6.entryType === type);
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
      constructor(fd2) {
        this.fd = fd2;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x3, y4, callback) {
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
      constructor(fd2) {
        this.fd = fd2;
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

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/util/legacy-types.mjs
var isRegExp, isDate, isBoolean, isNull, isNullOrUndefined, isNumber, isString, isSymbol, isUndefined, isFunction, isBuffer, isObject, isError, isPrimitive;
var init_legacy_types = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/util/legacy-types.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isRegExp = /* @__PURE__ */ __name((val) => val instanceof RegExp, "isRegExp");
    isDate = /* @__PURE__ */ __name((val) => val instanceof Date, "isDate");
    isBoolean = /* @__PURE__ */ __name((val) => typeof val === "boolean", "isBoolean");
    isNull = /* @__PURE__ */ __name((val) => val === null, "isNull");
    isNullOrUndefined = /* @__PURE__ */ __name((val) => val === null || val === void 0, "isNullOrUndefined");
    isNumber = /* @__PURE__ */ __name((val) => typeof val === "number", "isNumber");
    isString = /* @__PURE__ */ __name((val) => typeof val === "string", "isString");
    isSymbol = /* @__PURE__ */ __name((val) => typeof val === "symbol", "isSymbol");
    isUndefined = /* @__PURE__ */ __name((val) => val === void 0, "isUndefined");
    isFunction = /* @__PURE__ */ __name((val) => typeof val === "function", "isFunction");
    isBuffer = /* @__PURE__ */ __name((val) => {
      return val && typeof val === "object" && typeof val.copy === "function" && typeof val.fill === "function" && typeof val.readUInt8 === "function";
    }, "isBuffer");
    isObject = /* @__PURE__ */ __name((val) => val !== null && typeof val === "object" && Object.getPrototypeOf(val).isPrototypeOf(Object), "isObject");
    isError = /* @__PURE__ */ __name((val) => val instanceof Error, "isError");
    isPrimitive = /* @__PURE__ */ __name((val) => {
      if (typeof val === "object") {
        return val === null;
      }
      return typeof val !== "function";
    }, "isPrimitive");
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/util/log.mjs
var init_log = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/util/log.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/util.mjs
import types from "node:util/types";
import { default as default2 } from "node:util/types";
var TextDecoder2, TextEncoder2, _errnoException, _exceptionWithHostPort, getSystemErrorMap, getSystemErrorName, parseEnv, styleText;
var init_util = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/util.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_legacy_types();
    init_log();
    TextDecoder2 = globalThis.TextDecoder;
    TextEncoder2 = globalThis.TextEncoder;
    _errnoException = /* @__PURE__ */ notImplemented("util._errnoException");
    _exceptionWithHostPort = /* @__PURE__ */ notImplemented("util._exceptionWithHostPort");
    getSystemErrorMap = /* @__PURE__ */ notImplemented("util.getSystemErrorMap");
    getSystemErrorName = /* @__PURE__ */ notImplemented("util.getSystemErrorName");
    parseEnv = /* @__PURE__ */ notImplemented("util.parseEnv");
    styleText = /* @__PURE__ */ notImplemented("util.styleText");
  }
});

// ../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/util.mjs
var workerdUtil, MIMEParams, MIMEType, TextDecoder3, TextEncoder3, _extend, aborted, callbackify, debug3, debuglog, deprecate, format, formatWithOptions, getCallSite, inherits, inspect, isArray, isDeepStrictEqual, log3, parseArgs, promisify, stripVTControlCharacters, toUSVString, transferableAbortController, transferableAbortSignal, types2, util_default;
var init_util2 = __esm({
  "../../../node_modules/.pnpm/@cloudflare+unenv-preset@2.3.3_unenv@2.0.0-rc.17_workerd@1.20250617.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/util.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_util();
    workerdUtil = process.getBuiltinModule("node:util");
    ({
      MIMEParams,
      MIMEType,
      TextDecoder: TextDecoder3,
      TextEncoder: TextEncoder3,
      _extend: (
        // @ts-expect-error missing types?
        _extend
      ),
      aborted,
      callbackify,
      debug: debug3,
      debuglog,
      deprecate,
      format,
      formatWithOptions,
      getCallSite: (
        // @ts-expect-error unknown type
        getCallSite
      ),
      inherits,
      inspect,
      isArray,
      isDeepStrictEqual,
      log: log3,
      parseArgs,
      promisify,
      stripVTControlCharacters,
      toUSVString,
      transferableAbortController,
      transferableAbortSignal
    } = workerdUtil);
    types2 = workerdUtil.types;
    util_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      _errnoException,
      _exceptionWithHostPort,
      // @ts-expect-error unenv has unknown type
      getSystemErrorMap,
      // @ts-expect-error unenv has unknown type
      getSystemErrorName,
      isBoolean,
      isBuffer,
      isDate,
      isError,
      isFunction,
      isNull,
      isNullOrUndefined,
      isNumber,
      isObject,
      isPrimitive,
      isRegExp,
      isString,
      isSymbol,
      isUndefined,
      // @ts-expect-error unenv has unknown type
      parseEnv,
      // @ts-expect-error unenv has unknown type
      styleText,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      _extend,
      aborted,
      callbackify,
      debug: debug3,
      debuglog,
      deprecate,
      format,
      formatWithOptions,
      getCallSite,
      inherits,
      inspect,
      isArray,
      isDeepStrictEqual,
      log: log3,
      MIMEParams,
      MIMEType,
      parseArgs,
      promisify,
      stripVTControlCharacters,
      TextDecoder: TextDecoder3,
      TextEncoder: TextEncoder3,
      toUSVString,
      transferableAbortController,
      transferableAbortSignal,
      // special-cased deep merged symbols
      types: types2
    };
  }
});

// dist/server/chunks/_/shared.esm-bundler.mjs
function makeMap(e6) {
  const t12 = /* @__PURE__ */ Object.create(null);
  for (const a7 of e6.split(",")) t12[a7] = 1;
  return (e7) => e7 in t12;
}
function generateCodeFrame(e6, t12 = 0, a7 = e6.length) {
  if ((t12 = Math.max(0, Math.min(t12, e6.length))) > (a7 = Math.max(0, Math.min(a7, e6.length)))) return "";
  let n5 = e6.split(/(\r?\n)/);
  const r11 = n5.filter((e7, t13) => t13 % 2 == 1);
  n5 = n5.filter((e7, t13) => t13 % 2 == 0);
  let i6 = 0;
  const o6 = [];
  for (let e7 = 0; e7 < n5.length; e7++) if (i6 += n5[e7].length + (r11[e7] && r11[e7].length || 0), i6 >= t12) {
    for (let s6 = e7 - 2; s6 <= e7 + 2 || a7 > i6; s6++) {
      if (s6 < 0 || s6 >= n5.length) continue;
      const l5 = s6 + 1;
      o6.push(`${l5}${" ".repeat(Math.max(3 - String(l5).length, 0))}|  ${n5[s6]}`);
      const c4 = n5[s6].length, p4 = r11[s6] && r11[s6].length || 0;
      if (s6 === e7) {
        const e8 = t12 - (i6 - (c4 + p4)), n6 = Math.max(1, a7 > i6 ? c4 - e8 : a7 - t12);
        o6.push("   |  " + " ".repeat(e8) + "^".repeat(n6));
      } else if (s6 > e7) {
        if (a7 > i6) {
          const e8 = Math.max(Math.min(a7 - i6, c4), 1);
          o6.push("   |  " + "^".repeat(e8));
        }
        i6 += c4 + p4;
      }
    }
    break;
  }
  return o6.join("\n");
}
function normalizeStyle(e6) {
  if (i(e6)) {
    const t12 = {};
    for (let a7 = 0; a7 < e6.length; a7++) {
      const n5 = e6[a7], r11 = isString2(n5) ? parseStringStyle(n5) : normalizeStyle(n5);
      if (r11) for (const e7 in r11) t12[e7] = r11[e7];
    }
    return t12;
  }
  if (isString2(e6) || isObject2(e6)) return e6;
}
function parseStringStyle(e6) {
  const t12 = {};
  return e6.replace(N, "").split(A).forEach((e7) => {
    if (e7) {
      const a7 = e7.split(T);
      a7.length > 1 && (t12[a7[0].trim()] = a7[1].trim());
    }
  }), t12;
}
function stringifyStyle(e6) {
  if (!e6) return "";
  if (isString2(e6)) return e6;
  let t12 = "";
  for (const a7 in e6) {
    const n5 = e6[a7];
    if (isString2(n5) || "number" == typeof n5) {
      t12 += `${a7.startsWith("--") ? a7 : d(a7)}:${n5};`;
    }
  }
  return t12;
}
function normalizeClass(e6) {
  let t12 = "";
  if (isString2(e6)) t12 = e6;
  else if (i(e6)) for (let a7 = 0; a7 < e6.length; a7++) {
    const n5 = normalizeClass(e6[a7]);
    n5 && (t12 += n5 + " ");
  }
  else if (isObject2(e6)) for (const a7 in e6) e6[a7] && (t12 += a7 + " ");
  return t12.trim();
}
function normalizeProps(e6) {
  if (!e6) return null;
  let { class: t12, style: a7 } = e6;
  return t12 && !isString2(t12) && (e6.class = normalizeClass(t12)), a7 && (e6.style = normalizeStyle(a7)), e6;
}
function includeBooleanAttr(e6) {
  return !!e6 || "" === e6;
}
function isSSRSafeAttrName(e6) {
  if (L.hasOwnProperty(e6)) return L[e6];
  const t12 = _.test(e6);
  return t12 && console.error(`unsafe attribute name: ${e6}`), L[e6] = !t12;
}
function isRenderableAttrValue(e6) {
  if (null == e6) return false;
  const t12 = typeof e6;
  return "string" === t12 || "number" === t12 || "boolean" === t12;
}
function escapeHtml(e6) {
  const t12 = "" + e6, a7 = I.exec(t12);
  if (!a7) return t12;
  let n5, r11, i6 = "", o6 = 0;
  for (r11 = a7.index; r11 < t12.length; r11++) {
    switch (t12.charCodeAt(r11)) {
      case 34:
        n5 = "&quot;";
        break;
      case 38:
        n5 = "&amp;";
        break;
      case 39:
        n5 = "&#39;";
        break;
      case 60:
        n5 = "&lt;";
        break;
      case 62:
        n5 = "&gt;";
        break;
      default:
        continue;
    }
    o6 !== r11 && (i6 += t12.slice(o6, r11)), o6 = r11 + 1, i6 += n5;
  }
  return o6 !== r11 ? i6 + t12.slice(o6, r11) : i6;
}
function escapeHtmlComment(e6) {
  return e6.replace(z, "");
}
function looseEqual(e6, t12) {
  if (e6 === t12) return true;
  let a7 = isDate2(e6), n5 = isDate2(t12);
  if (a7 || n5) return !(!a7 || !n5) && e6.getTime() === t12.getTime();
  if (a7 = isSymbol2(e6), n5 = isSymbol2(t12), a7 || n5) return e6 === t12;
  if (a7 = i(e6), n5 = i(t12), a7 || n5) return !(!a7 || !n5) && function(e7, t13) {
    if (e7.length !== t13.length) return false;
    let a8 = true;
    for (let n6 = 0; a8 && n6 < e7.length; n6++) a8 = looseEqual(e7[n6], t13[n6]);
    return a8;
  }(e6, t12);
  if (a7 = isObject2(e6), n5 = isObject2(t12), a7 || n5) {
    if (!a7 || !n5) return false;
    if (Object.keys(e6).length !== Object.keys(t12).length) return false;
    for (const a8 in e6) {
      const n6 = e6.hasOwnProperty(a8), r11 = t12.hasOwnProperty(a8);
      if (n6 && !r11 || !n6 && r11 || !looseEqual(e6[a8], t12[a8])) return false;
    }
  }
  return String(e6) === String(t12);
}
function looseIndexOf(e6, t12) {
  return e6.findIndex((e7) => looseEqual(e7, t12));
}
var t, a, NOOP, NO, isOn, isModelListener, n, remove, r, hasOwn, i, isMap, isSet, isDate2, isRegExp2, isFunction2, isString2, isSymbol2, isObject2, isPromise, o, toTypeString, toRawType, isPlainObject, isIntegerKey, s, l, cacheStringFunction, c, p, m, d, f, u, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, g, getGlobalThis, h, y, b, E, S, A, T, N, k, O, M, x, C, v, R, _, L, P, w, D, F, I, z, U, isRef, toDisplayString, replacer, stringifySymbol, j;
var init_shared_esm_bundler = __esm({
  "dist/server/chunks/_/shared.esm-bundler.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(makeMap, "makeMap");
    t = {};
    a = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && (e6.charCodeAt(2) > 122 || e6.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e6) => e6.startsWith("onUpdate:"), "isModelListener");
    n = Object.assign;
    remove = /* @__PURE__ */ __name((e6, t12) => {
      const a7 = e6.indexOf(t12);
      a7 > -1 && e6.splice(a7, 1);
    }, "remove");
    r = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e6, t12) => r.call(e6, t12), "hasOwn");
    i = Array.isArray;
    isMap = /* @__PURE__ */ __name((e6) => "[object Map]" === toTypeString(e6), "isMap");
    isSet = /* @__PURE__ */ __name((e6) => "[object Set]" === toTypeString(e6), "isSet");
    isDate2 = /* @__PURE__ */ __name((e6) => "[object Date]" === toTypeString(e6), "isDate");
    isRegExp2 = /* @__PURE__ */ __name((e6) => "[object RegExp]" === toTypeString(e6), "isRegExp");
    isFunction2 = /* @__PURE__ */ __name((e6) => "function" == typeof e6, "isFunction");
    isString2 = /* @__PURE__ */ __name((e6) => "string" == typeof e6, "isString");
    isSymbol2 = /* @__PURE__ */ __name((e6) => "symbol" == typeof e6, "isSymbol");
    isObject2 = /* @__PURE__ */ __name((e6) => null !== e6 && "object" == typeof e6, "isObject");
    isPromise = /* @__PURE__ */ __name((e6) => (isObject2(e6) || isFunction2(e6)) && isFunction2(e6.then) && isFunction2(e6.catch), "isPromise");
    o = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e6) => o.call(e6), "toTypeString");
    toRawType = /* @__PURE__ */ __name((e6) => toTypeString(e6).slice(8, -1), "toRawType");
    isPlainObject = /* @__PURE__ */ __name((e6) => "[object Object]" === toTypeString(e6), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e6) => isString2(e6) && "NaN" !== e6 && "-" !== e6[0] && "" + parseInt(e6, 10) === e6, "isIntegerKey");
    s = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    l = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
    cacheStringFunction = /* @__PURE__ */ __name((e6) => {
      const t12 = /* @__PURE__ */ Object.create(null);
      return (a7) => t12[a7] || (t12[a7] = e6(a7));
    }, "cacheStringFunction");
    c = /-(\w)/g;
    p = cacheStringFunction((e6) => e6.replace(c, (e7, t12) => t12 ? t12.toUpperCase() : ""));
    m = /\B([A-Z])/g;
    d = cacheStringFunction((e6) => e6.replace(m, "-$1").toLowerCase());
    f = cacheStringFunction((e6) => e6.charAt(0).toUpperCase() + e6.slice(1));
    u = cacheStringFunction((e6) => e6 ? `on${f(e6)}` : "");
    hasChanged = /* @__PURE__ */ __name((e6, t12) => !Object.is(e6, t12), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e6, ...t12) => {
      for (let a7 = 0; a7 < e6.length; a7++) e6[a7](...t12);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e6, t12, a7, n5 = false) => {
      Object.defineProperty(e6, t12, { configurable: true, enumerable: false, writable: n5, value: a7 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e6) => {
      const t12 = parseFloat(e6);
      return isNaN(t12) ? e6 : t12;
    }, "looseToNumber");
    toNumber = /* @__PURE__ */ __name((e6) => {
      const t12 = isString2(e6) ? Number(e6) : NaN;
      return isNaN(t12) ? e6 : t12;
    }, "toNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => g || (g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ar ? ar : {}), "getGlobalThis");
    h = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    y = { 1: "TEXT", 2: "CLASS", 4: "STYLE", 8: "PROPS", 16: "FULL_PROPS", 32: "NEED_HYDRATION", 64: "STABLE_FRAGMENT", 128: "KEYED_FRAGMENT", 256: "UNKEYED_FRAGMENT", 512: "NEED_PATCH", 1024: "DYNAMIC_SLOTS", 2048: "DEV_ROOT_FRAGMENT", [-1]: "CACHED", [-2]: "BAIL" };
    b = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" };
    E = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
    S = E;
    __name(generateCodeFrame, "generateCodeFrame");
    __name(normalizeStyle, "normalizeStyle");
    A = /;(?![^(]*\))/g;
    T = /:([^]+)/;
    N = /\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(stringifyStyle, "stringifyStyle");
    __name(normalizeClass, "normalizeClass");
    __name(normalizeProps, "normalizeProps");
    k = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
    O = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    M = makeMap("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics");
    x = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    C = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    v = makeMap(C);
    R = makeMap(C + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    _ = /[>/="'\u0009\u000a\u000c\u0020]/;
    L = {};
    __name(isSSRSafeAttrName, "isSSRSafeAttrName");
    P = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    w = makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
    D = makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
    F = makeMap("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    I = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    z = /^-?>|<!--|-->|--!>|<!-$/g;
    __name(escapeHtmlComment, "escapeHtmlComment");
    U = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    __name(looseEqual, "looseEqual");
    __name(looseIndexOf, "looseIndexOf");
    isRef = /* @__PURE__ */ __name((e6) => !(!e6 || true !== e6.__v_isRef), "isRef");
    toDisplayString = /* @__PURE__ */ __name((e6) => isString2(e6) ? e6 : null == e6 ? "" : i(e6) || isObject2(e6) && (e6.toString === o || !isFunction2(e6.toString)) ? isRef(e6) ? toDisplayString(e6.value) : JSON.stringify(e6, replacer, 2) : String(e6), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e6, t12) => isRef(t12) ? replacer(e6, t12.value) : isMap(t12) ? { [`Map(${t12.size})`]: [...t12.entries()].reduce((e7, [t13, a7], n5) => (e7[stringifySymbol(t13, n5) + " =>"] = a7, e7), {}) } : isSet(t12) ? { [`Set(${t12.size})`]: [...t12.values()].map((e7) => stringifySymbol(e7)) } : isSymbol2(t12) ? stringifySymbol(t12) : !isObject2(t12) || i(t12) || isPlainObject(t12) ? t12 : String(t12), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e6, t12 = "") => {
      var a7;
      return isSymbol2(e6) ? `Symbol(${null != (a7 = e6.description) ? a7 : t12})` : e6;
    }, "stringifySymbol");
    j = Object.freeze(Object.defineProperty({ __proto__: null, EMPTY_ARR: a, EMPTY_OBJ: t, NO, NOOP, PatchFlagNames: y, PatchFlags: { TEXT: 1, 1: "TEXT", CLASS: 2, 2: "CLASS", STYLE: 4, 4: "STYLE", PROPS: 8, 8: "PROPS", FULL_PROPS: 16, 16: "FULL_PROPS", NEED_HYDRATION: 32, 32: "NEED_HYDRATION", STABLE_FRAGMENT: 64, 64: "STABLE_FRAGMENT", KEYED_FRAGMENT: 128, 128: "KEYED_FRAGMENT", UNKEYED_FRAGMENT: 256, 256: "UNKEYED_FRAGMENT", NEED_PATCH: 512, 512: "NEED_PATCH", DYNAMIC_SLOTS: 1024, 1024: "DYNAMIC_SLOTS", DEV_ROOT_FRAGMENT: 2048, 2048: "DEV_ROOT_FRAGMENT", CACHED: -1, "-1": "CACHED", BAIL: -2, "-2": "BAIL" }, ShapeFlags: { ELEMENT: 1, 1: "ELEMENT", FUNCTIONAL_COMPONENT: 2, 2: "FUNCTIONAL_COMPONENT", STATEFUL_COMPONENT: 4, 4: "STATEFUL_COMPONENT", TEXT_CHILDREN: 8, 8: "TEXT_CHILDREN", ARRAY_CHILDREN: 16, 16: "ARRAY_CHILDREN", SLOTS_CHILDREN: 32, 32: "SLOTS_CHILDREN", TELEPORT: 64, 64: "TELEPORT", SUSPENSE: 128, 128: "SUSPENSE", COMPONENT_SHOULD_KEEP_ALIVE: 256, 256: "COMPONENT_SHOULD_KEEP_ALIVE", COMPONENT_KEPT_ALIVE: 512, 512: "COMPONENT_KEPT_ALIVE", COMPONENT: 6, 6: "COMPONENT" }, SlotFlags: { STABLE: 1, 1: "STABLE", DYNAMIC: 2, 2: "DYNAMIC", FORWARDED: 3, 3: "FORWARDED" }, camelize: p, capitalize: f, cssVarNameEscapeSymbolsRE: U, def, escapeHtml, escapeHtmlComment, extend: n, genCacheKey: /* @__PURE__ */ __name(function(e6, t12) {
      return e6 + JSON.stringify(t12, (e7, t13) => "function" == typeof t13 ? t13.toString() : t13);
    }, "genCacheKey"), genPropsAccessExp: /* @__PURE__ */ __name(function(e6) {
      return h.test(e6) ? `__props.${e6}` : `__props[${JSON.stringify(e6)}]`;
    }, "genPropsAccessExp"), generateCodeFrame, getEscapedCssVarName: /* @__PURE__ */ __name(function(e6, t12) {
      return e6.replace(U, (e7) => t12 ? '"' === e7 ? '\\\\\\"' : `\\\\${e7}` : `\\${e7}`);
    }, "getEscapedCssVarName"), getGlobalThis, hasChanged, hasOwn, hyphenate: d, includeBooleanAttr, invokeArrayFns, isArray: i, isBooleanAttr: R, isBuiltInDirective: l, isDate: isDate2, isFunction: isFunction2, isGloballyAllowed: E, isGloballyWhitelisted: S, isHTMLTag: k, isIntegerKey, isKnownHtmlAttr: w, isKnownMathMLAttr: F, isKnownSvgAttr: D, isMap, isMathMLTag: M, isModelListener, isObject: isObject2, isOn, isPlainObject, isPromise, isRegExp: isRegExp2, isRenderableAttrValue, isReservedProp: s, isSSRSafeAttrName, isSVGTag: O, isSet, isSpecialBooleanAttr: v, isString: isString2, isSymbol: isSymbol2, isVoidTag: x, looseEqual, looseIndexOf, looseToNumber, makeMap, normalizeClass, normalizeProps, normalizeStyle, objectToString: o, parseStringStyle, propsToAttrMap: P, remove, slotFlagsText: b, stringifyStyle, toDisplayString, toHandlerKey: u, toNumber, toRawType, toTypeString }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
import "node:events";
import "node:buffer";
import "node:timers";
var t2, template;
var init_error_500 = __esm({
  "dist/server/chunks/_/error-500.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_shared_esm_bundler();
    init_nitro();
    init_util2();
    t2 = { appName: "Nuxt", version: "", statusCode: 500, statusMessage: "Server error", description: "This page is temporarily unavailable." };
    template = /* @__PURE__ */ __name((r11) => (r11 = { ...t2, ...r11 }, '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(r11.statusCode) + " - " + escapeHtml(r11.statusMessage) + " | " + escapeHtml(r11.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black"><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight"></div><div class="max-w-520px text-center"><h1 class="font-medium mb-8 sm:text-10xl text-8xl">` + escapeHtml(r11.statusCode) + '</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl">' + escapeHtml(r11.description) + "</p></div></body></html>"), "template");
  }
});

// dist/server/chunks/build/client.manifest.mjs
var client_manifest_exports = {};
__export(client_manifest_exports, {
  default: () => e
});
var e;
var init_client_manifest = __esm({
  "dist/server/chunks/build/client.manifest.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e = { "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DUrJz1Zx.js", name: "error-404", src: "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["_BiANmn3m.js", "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js", "_g7Zpg31N.js"], css: [] }, "error-404.DmTBnK63.css": { file: "error-404.DmTBnK63.css", resourceType: "style", prefetch: true, preload: true }, "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D-urxdlr.js", name: "error-500", src: "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js", "_g7Zpg31N.js"], css: [] }, "error-500.BhIjmUiw.css": { file: "error-500.BhIjmUiw.css", resourceType: "style", prefetch: true, preload: true }, "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DWypVVWZ.js", name: "entry", src: "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["layouts/default.vue", "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue", "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue"], _globalCSS: true }, "_BiANmn3m.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BiANmn3m.js", name: "nuxt-link", imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"] }, "_CorraNfA.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CorraNfA.js", name: "cartService", imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"], css: ["cartService.BFUL3bBD.css"] }, "cartService.BFUL3bBD.css": { file: "cartService.BFUL3bBD.css", resourceType: "style", prefetch: true, preload: true }, "_cartService.BFUL3bBD.css": { resourceType: "style", prefetch: true, preload: true, file: "cartService.BFUL3bBD.css", src: "_cartService.BFUL3bBD.css" }, "_g7Zpg31N.js": { resourceType: "script", module: true, prefetch: true, preload: true, file: "g7Zpg31N.js", name: "v3", imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"] }, "layouts/default.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CRM5rju_.js", name: "default", src: "layouts/default.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"] }, "pages/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "DTLjtXbn.js", name: "index", src: "pages/index.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"] }, "pages/store/catalog/index.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "BSEQr37T.js", name: "index", src: "pages/store/catalog/index.vue", isDynamicEntry: true, imports: ["../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js", "_CorraNfA.js"], css: [] }, "index.BYQ6AtVR.css": { file: "index.BYQ6AtVR.css", resourceType: "style", prefetch: true, preload: true }, "pages/store/product/[id].vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D2gImkYK.js", name: "_id_", src: "pages/store/product/[id].vue", isDynamicEntry: true, imports: ["_BiANmn3m.js", "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js", "_CorraNfA.js"], css: [] }, "_id_.OLrNJgxX.css": { file: "_id_.OLrNJgxX.css", resourceType: "style", prefetch: true, preload: true } };
  }
});

// node-built-in-modules:node:process
var require_node_process = __commonJS({
  "node-built-in-modules:node:process"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    module.exports = process_default;
  }
});

// node-built-in-modules:node:stream/web
import libDefault from "node:stream/web";
var require_web = __commonJS({
  "node-built-in-modules:node:stream/web"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:buffer
import libDefault2 from "buffer";
var require_buffer = __commonJS({
  "node-built-in-modules:buffer"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// dist/server/chunks/build/multipart-parser-CZHYZ1tT.mjs
var multipart_parser_CZHYZ1tT_exports = {};
__export(multipart_parser_CZHYZ1tT_exports, {
  toFormData: () => v2
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
function $(e6) {
  const t12 = e6.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!t12) return;
  const n5 = t12[2] || t12[3] || "";
  let r11 = n5.slice(n5.lastIndexOf("\\") + 1);
  return r11 = r11.replace(/%22/g, '"'), r11 = r11.replace(/&#(\d{4});/g, (e7, t13) => String.fromCharCode(t13)), r11;
}
async function v2(n5, r11) {
  if (!/multipart/i.test(r11)) throw new TypeError("Failed to fetch");
  const a7 = r11.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!a7) throw new TypeError("no or bad content-type header, no multipart boundary");
  const o6 = new h2(a7[1] || a7[2]);
  let i6, s6, d7, l5, A4, D3;
  const c4 = [], f5 = new cu(), T3 = E2((e6) => {
    d7 += p4.decode(e6, { stream: true });
  }, "onPartData"), _3 = E2((e6) => {
    c4.push(e6);
  }, "appendToFile"), u4 = E2(() => {
    const e6 = new eu(c4, D3, { type: A4 });
    f5.append(l5, e6);
  }, "appendFileToFormData"), R3 = E2(() => {
    f5.append(l5, d7);
  }, "appendEntryToFormData"), p4 = new TextDecoder("utf-8");
  p4.decode(), o6.onPartBegin = function() {
    o6.onPartData = T3, o6.onPartEnd = R3, i6 = "", s6 = "", d7 = "", l5 = "", A4 = "", D3 = null, c4.length = 0;
  }, o6.onHeaderField = function(e6) {
    i6 += p4.decode(e6, { stream: true });
  }, o6.onHeaderValue = function(e6) {
    s6 += p4.decode(e6, { stream: true });
  }, o6.onHeaderEnd = function() {
    if (s6 += p4.decode(), i6 = i6.toLowerCase(), "content-disposition" === i6) {
      const e6 = s6.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      e6 && (l5 = e6[2] || e6[3] || ""), D3 = $(s6), D3 && (o6.onPartData = _3, o6.onPartEnd = u4);
    } else "content-type" === i6 && (A4 = s6);
    s6 = "", i6 = "";
  };
  for await (const e6 of n5) o6.write(e6);
  return o6.end(), f5;
}
var n2, E2, r2, a2, o2, i2, s2, d2, l2, A2, h2;
var init_multipart_parser_CZHYZ1tT = __esm({
  "dist/server/chunks/build/multipart-parser-CZHYZ1tT.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_nitro();
    init_util2();
    init_renderer();
    init_shared_esm_bundler();
    n2 = Object.defineProperty;
    E2 = /* @__PURE__ */ __name((e6, t12) => n2(e6, "name", { value: t12, configurable: true }), "E");
    r2 = 0;
    a2 = { START_BOUNDARY: r2++, HEADER_FIELD_START: r2++, HEADER_FIELD: r2++, HEADER_VALUE_START: r2++, HEADER_VALUE: r2++, HEADER_VALUE_ALMOST_DONE: r2++, HEADERS_ALMOST_DONE: r2++, PART_DATA_START: r2++, PART_DATA: r2++, END: r2++ };
    o2 = 1;
    i2 = o2;
    s2 = o2 *= 2;
    d2 = E2((e6) => 32 | e6, "lower");
    l2 = E2(() => {
    }, "noop");
    A2 = class {
      static {
        __name(this, "A");
      }
      constructor(e6) {
        this.index = 0, this.flags = 0, this.onHeaderEnd = l2, this.onHeaderField = l2, this.onHeadersEnd = l2, this.onHeaderValue = l2, this.onPartBegin = l2, this.onPartData = l2, this.onPartEnd = l2, this.boundaryChars = {}, e6 = "\r\n--" + e6;
        const t12 = new Uint8Array(e6.length);
        for (let n5 = 0; n5 < e6.length; n5++) t12[n5] = e6.charCodeAt(n5), this.boundaryChars[t12[n5]] = true;
        this.boundary = t12, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = a2.START_BOUNDARY;
      }
      write(e6) {
        let t12 = 0;
        const n5 = e6.length;
        let r11 = this.index, { lookbehind: o6, boundary: l5, boundaryChars: A4, index: h6, state: D3, flags: c4 } = this;
        const f5 = this.boundary.length, T3 = f5 - 1, _3 = e6.length;
        let u4, R3;
        const p4 = E2((e7) => {
          this[e7 + "Mark"] = t12;
        }, "mark"), m5 = E2((e7) => {
          delete this[e7 + "Mark"];
        }, "clear"), b3 = E2((e7, t13, n6, r12) => {
          (void 0 === t13 || t13 !== n6) && this[e7](r12 && r12.subarray(t13, n6));
        }, "callback"), H2 = E2((n6, r12) => {
          const a7 = n6 + "Mark";
          a7 in this && (r12 ? (b3(n6, this[a7], t12, e6), delete this[a7]) : (b3(n6, this[a7], e6.length, e6), this[a7] = 0));
        }, "dataCallback");
        for (t12 = 0; t12 < n5; t12++) switch (u4 = e6[t12], D3) {
          case a2.START_BOUNDARY:
            if (h6 === l5.length - 2) {
              if (45 === u4) c4 |= s2;
              else if (13 !== u4) return;
              h6++;
              break;
            }
            if (h6 - 1 == l5.length - 2) {
              if (c4 & s2 && 45 === u4) D3 = a2.END, c4 = 0;
              else {
                if (c4 & s2 || 10 !== u4) return;
                h6 = 0, b3("onPartBegin"), D3 = a2.HEADER_FIELD_START;
              }
              break;
            }
            u4 !== l5[h6 + 2] && (h6 = -2), u4 === l5[h6 + 2] && h6++;
            break;
          case a2.HEADER_FIELD_START:
            D3 = a2.HEADER_FIELD, p4("onHeaderField"), h6 = 0;
          case a2.HEADER_FIELD:
            if (13 === u4) {
              m5("onHeaderField"), D3 = a2.HEADERS_ALMOST_DONE;
              break;
            }
            if (h6++, 45 === u4) break;
            if (58 === u4) {
              if (1 === h6) return;
              H2("onHeaderField", true), D3 = a2.HEADER_VALUE_START;
              break;
            }
            if (R3 = d2(u4), R3 < 97 || R3 > 122) return;
            break;
          case a2.HEADER_VALUE_START:
            if (32 === u4) break;
            p4("onHeaderValue"), D3 = a2.HEADER_VALUE;
          case a2.HEADER_VALUE:
            13 === u4 && (H2("onHeaderValue", true), b3("onHeaderEnd"), D3 = a2.HEADER_VALUE_ALMOST_DONE);
            break;
          case a2.HEADER_VALUE_ALMOST_DONE:
            if (10 !== u4) return;
            D3 = a2.HEADER_FIELD_START;
            break;
          case a2.HEADERS_ALMOST_DONE:
            if (10 !== u4) return;
            b3("onHeadersEnd"), D3 = a2.PART_DATA_START;
            break;
          case a2.PART_DATA_START:
            D3 = a2.PART_DATA, p4("onPartData");
          case a2.PART_DATA:
            if (r11 = h6, 0 === h6) {
              for (t12 += T3; t12 < _3 && !(e6[t12] in A4); ) t12 += f5;
              t12 -= T3, u4 = e6[t12];
            }
            if (h6 < l5.length) l5[h6] === u4 ? (0 === h6 && H2("onPartData", true), h6++) : h6 = 0;
            else if (h6 === l5.length) h6++, 13 === u4 ? c4 |= i2 : 45 === u4 ? c4 |= s2 : h6 = 0;
            else if (h6 - 1 === l5.length) if (c4 & i2) {
              if (h6 = 0, 10 === u4) {
                c4 &= ~i2, b3("onPartEnd"), b3("onPartBegin"), D3 = a2.HEADER_FIELD_START;
                break;
              }
            } else c4 & s2 && 45 === u4 ? (b3("onPartEnd"), D3 = a2.END, c4 = 0) : h6 = 0;
            if (h6 > 0) o6[h6 - 1] = u4;
            else if (r11 > 0) {
              const e7 = new Uint8Array(o6.buffer, o6.byteOffset, o6.byteLength);
              b3("onPartData", 0, r11, e7), r11 = 0, p4("onPartData"), t12--;
            }
            break;
          case a2.END:
            break;
          default:
            throw new Error(`Unexpected state entered: ${D3}`);
        }
        H2("onHeaderField"), H2("onHeaderValue"), H2("onPartData"), this.index = h6, this.state = D3, this.flags = c4;
      }
      end() {
        if (this.state === a2.HEADER_FIELD_START && 0 === this.index || this.state === a2.PART_DATA && this.index === this.boundary.length) this.onPartEnd();
        else if (this.state !== a2.END) throw new Error("MultipartParser.end(): stream ended unexpectedly");
      }
    };
    E2(A2, "MultipartParser");
    h2 = A2;
    __name($, "$");
    __name(v2, "v");
    E2($, "_fileName"), E2(v2, "toFormData");
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/broadcast-channel.mjs
var BroadcastChannel;
var init_broadcast_channel = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/broadcast-channel.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    BroadcastChannel = class {
      static {
        __name(this, "BroadcastChannel");
      }
      name = "";
      onmessage = /* @__PURE__ */ __name((message) => {
      }, "onmessage");
      onmessageerror = /* @__PURE__ */ __name((message) => {
      }, "onmessageerror");
      close() {
      }
      postMessage(message) {
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/message-port.mjs
import { EventEmitter as EventEmitter2 } from "node:events";
var MessagePort;
var init_message_port = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/message-port.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    MessagePort = class extends EventEmitter2 {
      static {
        __name(this, "MessagePort");
      }
      close() {
      }
      postMessage(value, transferList) {
      }
      ref() {
      }
      unref() {
      }
      start() {
      }
      addEventListener(type, listener) {
        this.on(type, listener);
      }
      removeEventListener(type, listener) {
        this.off(type, listener);
      }
      dispatchEvent(event) {
        return this.emit(event.type, event);
      }
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/message-channel.mjs
var MessageChannel;
var init_message_channel = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/message-channel.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_message_port();
    MessageChannel = class {
      static {
        __name(this, "MessageChannel");
      }
      port1 = new MessagePort();
      port2 = new MessagePort();
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/worker.mjs
import { EventEmitter as EventEmitter3 } from "node:events";
import { Readable } from "node:stream";
var Worker;
var init_worker = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/internal/worker_threads/worker.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Worker = class extends EventEmitter3 {
      static {
        __name(this, "Worker");
      }
      stdin = null;
      stdout = new Readable();
      stderr = new Readable();
      threadId = 0;
      performance = { eventLoopUtilization: /* @__PURE__ */ __name(() => ({
        idle: 0,
        active: 0,
        utilization: 0
      }), "eventLoopUtilization") };
      postMessage(_value, _transferList) {
      }
      postMessageToThread(_threadId, _value, _transferList, _timeout) {
        return Promise.resolve();
      }
      ref() {
      }
      unref() {
      }
      terminate() {
        return Promise.resolve(0);
      }
      getHeapSnapshot() {
        return Promise.resolve(new Readable());
      }
    };
  }
});

// ../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/worker_threads.mjs
var _environmentData, getEnvironmentData, setEnvironmentData, isMainThread, isMarkedAsUntransferable, markAsUntransferable, markAsUncloneable, moveMessagePortToContext, parentPort, receiveMessageOnPort, SHARE_ENV, resourceLimits, threadId, workerData, postMessageToThread, isInternalThread, worker_threads_default;
var init_worker_threads = __esm({
  "../../../node_modules/.pnpm/unenv@2.0.0-rc.17/node_modules/unenv/dist/runtime/node/worker_threads.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_broadcast_channel();
    init_message_channel();
    init_message_port();
    init_worker();
    init_utils();
    _environmentData = /* @__PURE__ */ new Map();
    getEnvironmentData = /* @__PURE__ */ __name(function getEnvironmentData2(key) {
      return _environmentData.get(key);
    }, "getEnvironmentData");
    setEnvironmentData = /* @__PURE__ */ __name(function setEnvironmentData2(key, value) {
      _environmentData.set(key, value);
    }, "setEnvironmentData");
    isMainThread = true;
    isMarkedAsUntransferable = /* @__PURE__ */ __name(() => false, "isMarkedAsUntransferable");
    markAsUntransferable = /* @__PURE__ */ __name(function markAsUntransferable2(value) {
    }, "markAsUntransferable");
    markAsUncloneable = /* @__PURE__ */ __name(() => {
    }, "markAsUncloneable");
    moveMessagePortToContext = /* @__PURE__ */ __name(() => new MessagePort(), "moveMessagePortToContext");
    parentPort = null;
    receiveMessageOnPort = /* @__PURE__ */ __name(() => void 0, "receiveMessageOnPort");
    SHARE_ENV = /* @__PURE__ */ Symbol.for("nodejs.worker_threads.SHARE_ENV");
    resourceLimits = {};
    threadId = 0;
    workerData = null;
    postMessageToThread = /* @__PURE__ */ notImplemented("worker_threads.postMessageToThread");
    isInternalThread = false;
    worker_threads_default = {
      BroadcastChannel,
      MessageChannel,
      MessagePort,
      Worker,
      SHARE_ENV,
      getEnvironmentData,
      isMainThread,
      isMarkedAsUntransferable,
      markAsUntransferable,
      markAsUncloneable,
      moveMessagePortToContext,
      parentPort,
      receiveMessageOnPort,
      resourceLimits,
      setEnvironmentData,
      postMessageToThread,
      threadId,
      workerData,
      isInternalThread
    };
  }
});

// node-built-in-modules:worker_threads
var require_worker_threads = __commonJS({
  "node-built-in-modules:worker_threads"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_worker_threads();
    module.exports = worker_threads_default;
  }
});

// dist/server/chunks/build/index-CLXCyT47.mjs
var index_CLXCyT47_exports = {};
__export(index_CLXCyT47_exports, {
  default: () => t3
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
var t3, r3;
var init_index_CLXCyT47 = __esm({
  "dist/server/chunks/build/index-CLXCyT47.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_nitro();
    init_util2();
    init_renderer();
    init_shared_esm_bundler();
    t3 = { __name: "index", setup: /* @__PURE__ */ __name((o6) => (navigateTo("/store/catalog", { replace: true }), () => {
    }), "setup") };
    r3 = t3.setup;
    t3.setup = (e6, t12) => {
      const s6 = dl.useSSRContext();
      return (s6.modules || (s6.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), r3 ? r3(e6, t12) : void 0;
    };
  }
});

// dist/server/chunks/build/nuxt-link-D6EX5tGE.mjs
function defineNuxtLink(r11) {
  const l5 = r11.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e6) {
    return "string" == typeof e6 && e6.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function useNuxtLink(e6) {
    var l6, n5, d7;
    const c4 = useRouter(), p4 = useRuntimeConfig(), f5 = dl.computed(() => !!e6.target && "_self" !== e6.target), h6 = dl.computed(() => {
      const a7 = e6.to || e6.href || "";
      return "string" == typeof a7 && hasProtocol(a7, { acceptRelative: true });
    }), g4 = dl.resolveComponent("RouterLink"), m5 = g4 && "string" != typeof g4 ? g4.useLink : void 0, y4 = dl.computed(() => {
      if (e6.external) return true;
      const t12 = e6.to || e6.href || "";
      return "object" != typeof t12 && ("" === t12 || h6.value);
    }), x3 = dl.computed(() => {
      const t12 = e6.to || e6.href || "";
      return y4.value ? t12 : function(e7, t13, a7) {
        const l7 = null != a7 ? a7 : r11.trailingSlash;
        if (!e7 || "append" !== l7 && "remove" !== l7) return e7;
        if ("string" == typeof e7) return applyTrailingSlashBehavior(e7, l7);
        const i6 = "path" in e7 && void 0 !== e7.path ? e7.path : t13(e7).path;
        return { ...e7, name: void 0, path: applyTrailingSlashBehavior(i6, l7) };
      }(t12, c4.resolve, e6.trailingSlash);
    }), S3 = y4.value || null == m5 ? void 0 : m5({ ...e6, to: x3 }), q2 = dl.computed(() => {
      var t12, l7, i6;
      const u4 = null != (t12 = e6.trailingSlash) ? t12 : r11.trailingSlash;
      if (!x3.value || h6.value || isHashLinkWithoutHashMode(x3.value)) return x3.value;
      if (y4.value) {
        const e7 = "object" == typeof x3.value && "path" in x3.value ? resolveRouteObject(x3.value) : x3.value;
        return applyTrailingSlashBehavior("object" == typeof e7 ? c4.resolve(e7).href : e7, u4);
      }
      return "object" == typeof x3.value ? null != (l7 = null == (i6 = c4.resolve(x3.value)) ? void 0 : i6.href) ? l7 : null : applyTrailingSlashBehavior(joinURL(p4.app.baseURL, x3.value), u4);
    });
    return { to: x3, hasTarget: f5, isAbsoluteUrl: h6, isExternal: y4, href: q2, isActive: null != (l6 = null == S3 ? void 0 : S3.isActive) ? l6 : dl.computed(() => x3.value === c4.currentRoute.value.path), isExactActive: null != (n5 = null == S3 ? void 0 : S3.isExactActive) ? n5 : dl.computed(() => x3.value === c4.currentRoute.value.path), route: null != (d7 = null == S3 ? void 0 : S3.route) ? d7 : dl.computed(() => c4.resolve(x3.value)), async navigate(t12) {
      await navigateTo(q2.value, { replace: e6.replace, external: y4.value || f5.value });
    } };
  }
  __name(useNuxtLink, "useNuxtLink");
  return dl.defineComponent({ name: l5, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: useNuxtLink, setup(t12, { slots: a7 }) {
    useRouter();
    const { to: l6, href: o6, navigate: s6, isExternal: v6, hasTarget: d7, isAbsoluteUrl: c4 } = useNuxtLink(t12);
    dl.shallowRef(false);
    async function prefetch(e6 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      var u4;
      if (!v6.value && !d7.value && !isHashLinkWithoutHashMode(l6.value)) {
        const e6 = { ref: void 0, to: l6.value, activeClass: t12.activeClass || r11.activeClass, exactActiveClass: t12.exactActiveClass || r11.exactActiveClass, replace: t12.replace, ariaCurrentValue: t12.ariaCurrentValue, custom: t12.custom };
        return t12.custom || (e6.rel = t12.rel || void 0), dl.h(dl.resolveComponent("RouterLink"), e6, a7.default);
      }
      const n5 = t12.target || null, p4 = ((...e6) => e6.find((e7) => void 0 !== e7))(t12.noRel ? "" : t12.rel, r11.externalRelAttribute, c4.value || d7.value ? "noopener noreferrer" : "") || null;
      return t12.custom ? a7.default ? a7.default({ href: o6.value, navigate: s6, prefetch, get route() {
        if (!o6.value) return;
        const t13 = new URL(o6.value, "http://localhost");
        return { path: t13.pathname, fullPath: t13.pathname, get query() {
          return parseQuery(t13.search);
        }, hash: t13.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: o6.value };
      }, rel: p4, target: n5, isExternal: v6.value || d7.value, isActive: false, isExactActive: false }) : null : dl.h("a", { ref: void 0, href: o6.value || null, rel: p4, target: n5 }, null == (u4 = a7.default) ? void 0 : u4.call(a7));
    };
  } });
}
function applyTrailingSlashBehavior(e6, a7) {
  const i6 = "append" === a7 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e6) && !e6.startsWith("http") ? e6 : i6(e6, true);
}
var c2;
var init_nuxt_link_D6EX5tGE = __esm({
  "dist/server/chunks/build/nuxt-link-D6EX5tGE.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_server();
    __name(defineNuxtLink, "defineNuxtLink");
    c2 = defineNuxtLink(Rd);
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
  }
});

// dist/server/chunks/build/StarRating-CIWva1Z1.mjs
var n3, d3, o3;
var init_StarRating_CIWva1Z1 = __esm({
  "dist/server/chunks/build/StarRating-CIWva1Z1.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    n3 = { __name: "StarRating", __ssrInlineRender: true, props: { rating: { type: Number, required: true, default: 0 } }, setup(e6) {
      const n5 = dl.computed(() => [1, 2, 3, 4, 5]);
      return (d7, o6, c4, p4) => {
        o6(`<div${ssrRenderAttrs(dl.mergeProps({ class: "stars" }, p4))} data-v-c6de480c><!--[-->`), ssrRenderList(n5.value, (s6) => {
          o6(`<span class="${ssrRenderClass([{ filled: s6 <= e6.rating }, "star"])}" data-v-c6de480c> \u2605 </span>`);
        }), o6("<!--]--></div>");
      };
    } };
    d3 = n3.setup;
    n3.setup = (e6, t12) => {
      const r11 = dl.useSSRContext();
      return (r11.modules || (r11.modules = /* @__PURE__ */ new Set())).add("components/StarRating.vue"), d3 ? d3(e6, t12) : void 0;
    };
    o3 = _export_sfc(n3, [["__scopeId", "data-v-c6de480c"]]);
  }
});

// dist/server/chunks/build/_id_-DlOQNe7C.mjs
var id_DlOQNe7C_exports = {};
__export(id_DlOQNe7C_exports, {
  default: () => l3
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
var c3, v3, l3;
var init_id_DlOQNe7C = __esm({
  "dist/server/chunks/build/_id_-DlOQNe7C.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nuxt_link_D6EX5tGE();
    init_server();
    init_StarRating_CIWva1Z1();
    init_renderer();
    init_nitro();
    init_util2();
    init_shared_esm_bundler();
    c3 = dl.defineComponent({ __name: "[id]", __ssrInlineRender: true, setup(t12) {
      useRoute$1().params.id;
      const c4 = dl.ref(null), v6 = dl.ref(true), l5 = dl.ref(null);
      return (t13, o6, u4, m5) => {
        const p4 = c2;
        o6(`<div${ssrRenderAttrs(m5)} data-v-009f27c1><header data-v-009f27c1><div class="container" data-v-009f27c1>`), o6(ssrRenderComponent(p4, { to: "/", class: "back-link" }, { default: dl.withCtx((a7, t14, o7, r11) => {
          if (!t14) return [dl.createTextVNode("\u2190 Back to Products")];
          t14("\u2190 Back to Products");
        }), _: 1 }, u4)), o6('</div></header><main class="container" data-v-009f27c1>'), v6.value ? o6('<div class="loading" data-v-009f27c1> Loading product... </div>') : l5.value ? o6(`<div class="error" data-v-009f27c1>${ssrInterpolate(l5.value)}</div>`) : c4.value ? (o6(`<div class="product-detail" data-v-009f27c1><div class="product-image" data-v-009f27c1><img${ssrRenderAttr("src", c4.value.imageUrl)}${ssrRenderAttr("alt", c4.value.name)} data-v-009f27c1></div><div class="product-info" data-v-009f27c1><h2 data-v-009f27c1>${ssrInterpolate(c4.value.name)}</h2>`), o6(ssrRenderComponent(o3, { rating: c4.value.rating }, null, u4)), o6(`<div class="price" data-v-009f27c1>$${ssrInterpolate(c4.value.price)}</div><p data-v-009f27c1><strong data-v-009f27c1>Color:</strong> ${ssrInterpolate(c4.value.color)}</p><p data-v-009f27c1><strong data-v-009f27c1>Size:</strong> ${ssrInterpolate(c4.value.size)}</p><p class="description" data-v-009f27c1>${ssrInterpolate(c4.value.description)}</p><button class="button" data-v-009f27c1>Add to Cart</button></div></div>`)) : o6("<!---->"), o6("</main></div>");
      };
    } });
    v3 = c3.setup;
    c3.setup = (a7, t12) => {
      const o6 = dl.useSSRContext();
      return (o6.modules || (o6.modules = /* @__PURE__ */ new Set())).add("pages/store/product/[id].vue"), v3 ? v3(a7, t12) : void 0;
    };
    l3 = _export_sfc(c3, [["__scopeId", "data-v-009f27c1"]]);
  }
});

// dist/server/chunks/build/index-CS5_NQK4.mjs
var index_CS5_NQK4_exports = {};
__export(index_CS5_NQK4_exports, {
  default: () => w2
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
function debounce(e6, a7 = 25, r11 = {}) {
  if (r11 = { ...p2, ...r11 }, !Number.isFinite(a7)) throw new TypeError("Expected `wait` to be a finite number");
  let t12, i6, s6, n5, o6 = [];
  const applyFn = /* @__PURE__ */ __name((a8, t13) => (s6 = async function(e7, a9, r12) {
    return await e7.apply(a9, r12);
  }(e6, a8, t13), s6.finally(() => {
    if (s6 = null, r11.trailing && n5 && !i6) {
      const e7 = applyFn(a8, n5);
      return n5 = null, e7;
    }
  }), s6), "applyFn");
  return function(...e7) {
    return s6 ? (r11.trailing && (n5 = e7), s6) : new Promise((s7) => {
      const n6 = !i6 && r11.leading;
      clearTimeout(i6), i6 = setTimeout(() => {
        i6 = null;
        const a8 = r11.leading ? t12 : applyFn(this, e7);
        for (const e8 of o6) e8(a8);
        o6 = [];
      }, a7), n6 ? (t12 = applyFn(this, e7), s7(t12)) : o6.push(s7);
    });
  };
}
function useAsyncData(...e6) {
  var a7;
  const t12 = "string" == typeof e6[e6.length - 1] ? e6.pop() : void 0;
  (function(e7, a8) {
    if ("string" == typeof e7) return false;
    if ("object" == typeof e7 && null !== e7) return false;
    if ("function" == typeof e7 && "function" == typeof a8) return false;
    return true;
  })(e6[0], e6[1]) && e6.unshift(t12);
  let [o6, c4, d7 = {}] = e6;
  const l5 = dl.computed(() => dl.toValue(o6));
  if ("string" != typeof l5.value) throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if ("function" != typeof c4) throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const u4 = useNuxtApp();
  null != d7.server || (d7.server = true), null != d7.default || (d7.default = getDefault), null != d7.getCachedData || (d7.getCachedData = getDefaultCachedData), null != d7.lazy || (d7.lazy = false), null != d7.immediate || (d7.immediate = true), null != d7.deep || (d7.deep = wd.deep), null != d7.dedupe || (d7.dedupe = "cancel"), d7._functionName, u4._asyncData[l5.value];
  const p4 = { cause: "initial", dedupe: d7.dedupe };
  (null == (a7 = u4._asyncData[l5.value]) ? void 0 : a7._init) || (p4.cachedData = d7.getCachedData(l5.value, u4, { cause: "initial" }), u4._asyncData[l5.value] = function(e7, a8, t13, i6, o7) {
    var c5;
    null != (c5 = e7.payload._errors)[a8] || (c5[a8] = wd.errorValue);
    const d8 = i6.getCachedData !== getDefaultCachedData, l6 = t13, u5 = i6.deep ? dl.ref : dl.shallowRef, p5 = null != o7, m6 = e7.hook("app:data:refresh", async (e8) => {
      e8 && !e8.includes(a8) || await g5.execute({ cause: "refresh:hook" });
    }), g5 = { data: u5(p5 ? o7 : i6.default()), pending: dl.shallowRef(!p5), error: dl.toRef(e7.payload._errors, a8), status: dl.shallowRef("idle"), execute: /* @__PURE__ */ __name((t14 = {}) => {
      var o8, c6, d9;
      if (e7._asyncDataPromises[a8]) {
        if ("defer" === (d9 = null != (o8 = t14.dedupe) ? o8 : i6.dedupe) || false === d9) return e7._asyncDataPromises[a8];
        e7._asyncDataPromises[a8].cancelled = true;
      }
      if ("initial" === t14.cause || e7.isHydrating) {
        const r11 = "cachedData" in t14 ? t14.cachedData : i6.getCachedData(a8, e7, { cause: null != (c6 = t14.cause) ? c6 : "refresh:manual" });
        if (null != r11) return e7.payload.data[a8] = g5.data.value = r11, g5.error.value = wd.errorValue, g5.status.value = "success", Promise.resolve(r11);
      }
      g5.pending.value = true, g5.status.value = "pending";
      const u6 = new Promise((a9, r11) => {
        try {
          a9(l6(e7));
        } catch (e8) {
          r11(e8);
        }
      }).then(async (r11) => {
        if (u6.cancelled) return e7._asyncDataPromises[a8];
        let t15 = r11;
        i6.transform && (t15 = await i6.transform(r11)), i6.pick && (t15 = function(e8, a9) {
          const r12 = {};
          for (const t16 of a9) r12[t16] = e8[t16];
          return r12;
        }(t15, i6.pick)), e7.payload.data[a8] = t15, g5.data.value = t15, g5.error.value = wd.errorValue, g5.status.value = "success";
      }).catch((t15) => {
        if (u6.cancelled) return e7._asyncDataPromises[a8];
        g5.error.value = createError(t15), g5.data.value = dl.unref(i6.default()), g5.status.value = "error";
      }).finally(() => {
        u6.cancelled || (g5.pending.value = false, delete e7._asyncDataPromises[a8]);
      });
      return e7._asyncDataPromises[a8] = u6, e7._asyncDataPromises[a8];
    }, "execute"), _execute: debounce((...e8) => g5.execute(...e8), 0, { leading: true }), _default: i6.default, _deps: 0, _init: true, _hash: void 0, _off: /* @__PURE__ */ __name(() => {
      var t14;
      m6(), (null == (t14 = e7._asyncData[a8]) ? void 0 : t14._init) && (e7._asyncData[a8]._init = false), d8 || dl.nextTick(() => {
        var r11;
        (null == (r11 = e7._asyncData[a8]) ? void 0 : r11._init) || (clearNuxtDataByKey(e7, a8), g5.execute = () => Promise.resolve(), g5.data.value = wd.value);
      });
    }, "_off") };
    return g5;
  }(u4, l5.value, c4, d7, p4.cachedData));
  u4._asyncData[l5.value]._deps++;
  if (false !== d7.server && u4.payload.serverRendered && d7.immediate) {
    const e7 = u4._asyncData[l5.value].execute(p4);
    dl.getCurrentInstance() ? dl.onServerPrefetch(() => e7) : u4.hook("app:created", async () => {
      await e7;
    });
  }
  const m5 = { data: writableComputedRef(() => {
    var e7;
    return null == (e7 = u4._asyncData[l5.value]) ? void 0 : e7.data;
  }), pending: writableComputedRef(() => {
    var e7;
    return null == (e7 = u4._asyncData[l5.value]) ? void 0 : e7.pending;
  }), status: writableComputedRef(() => {
    var e7;
    return null == (e7 = u4._asyncData[l5.value]) ? void 0 : e7.status;
  }), error: writableComputedRef(() => {
    var e7;
    return null == (e7 = u4._asyncData[l5.value]) ? void 0 : e7.error;
  }), refresh: /* @__PURE__ */ __name((...e7) => u4._asyncData[l5.value].execute(...e7), "refresh"), execute: /* @__PURE__ */ __name((...e7) => u4._asyncData[l5.value].execute(...e7), "execute"), clear: /* @__PURE__ */ __name(() => clearNuxtDataByKey(u4, l5.value), "clear") }, g4 = Promise.resolve(u4._asyncDataPromises[l5.value]).then(() => m5);
  return Object.assign(g4, m5), g4;
}
function writableComputedRef(e6) {
  return dl.computed({ get() {
    var a7;
    return null == (a7 = e6()) ? void 0 : a7.value;
  }, set(a7) {
    const r11 = e6();
    r11 && (r11.value = a7);
  } });
}
function clearNuxtDataByKey(e6, a7) {
  a7 in e6.payload.data && (e6.payload.data[a7] = void 0), a7 in e6.payload._errors && (e6.payload._errors[a7] = wd.errorValue), e6._asyncData[a7] && (e6._asyncData[a7].data.value = void 0, e6._asyncData[a7].error.value = wd.errorValue, e6._asyncData[a7].pending.value = false, e6._asyncData[a7].status.value = "idle"), a7 in e6._asyncDataPromises && (e6._asyncDataPromises[a7] && (e6._asyncDataPromises[a7].cancelled = true), e6._asyncDataPromises[a7] = void 0);
}
var p2, getDefault, getDefaultCachedData, m2, g2, f2, v4, h3, y2, w2;
var init_index_CS5_NQK4 = __esm({
  "dist/server/chunks/build/index-CS5_NQK4.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_StarRating_CIWva1Z1();
    init_server();
    init_renderer();
    init_nitro();
    init_util2();
    init_shared_esm_bundler();
    p2 = { trailing: true };
    __name(debounce, "debounce");
    __name(useAsyncData, "useAsyncData");
    __name(writableComputedRef, "writableComputedRef");
    __name(clearNuxtDataByKey, "clearNuxtDataByKey");
    getDefault = /* @__PURE__ */ __name(() => wd.value, "getDefault");
    getDefaultCachedData = /* @__PURE__ */ __name((e6, a7, r11) => a7.isHydrating ? a7.payload.data[e6] : "refresh:manual" !== r11.cause && "refresh:hook" !== r11.cause ? a7.static.data[e6] : void 0, "getDefaultCachedData");
    m2 = [{ id: 1, name: "Angular Developer Tee", description: "Perfect for Angular developers who love type-safety!", price: 29.99, color: "Red", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product1.webp", rating: 4.5 }, { id: 2, name: "TypeScript Enthusiast Shirt", description: "Show your love for interfaces and decorators!", price: 24.99, color: "Blue", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product2.webp", rating: 4.8 }, { id: 3, name: "JavaScript Master Hoodie", description: "For those who still love vanilla JavaScript!", price: 49.99, color: "Black", size: "XL", imageUrl: "/_fragment/nuxt/assets/images/product3.webp", rating: 4.6 }, { id: 4, name: "Nuxt.js Developer Hat", description: "A stylish way to show your Nuxt passion.", price: 19.99, color: "Green", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product4.webp", rating: 4.7 }, { id: 5, name: "Node.js Backpack", description: "Carry your essentials with a nod to your favorite runtime.", price: 39.99, color: "Grey", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product5.webp", rating: 4.3 }, { id: 6, name: "CSS Styling Socks", description: "Perfect for keeping your feet warm while styling!", price: 12.99, color: "Pink", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product6.webp", rating: 4 }, { id: 7, name: "Vue.js Mug", description: "For those who prefer Vue over everything else!", price: 14.99, color: "White", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product7.webp", rating: 4.9 }, { id: 8, name: "Docker Enthusiast T-Shirt", description: "Containerize your style with this Docker tee.", price: 27.99, color: "Orange", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product8.webp", rating: 4.7 }, { id: 9, name: "Python Programmer Hoodie", description: "For the Pythonistas out there!", price: 44.99, color: "Grey", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product9.webp", rating: 4.8 }, { id: 10, name: "SQL Master T-Shirt", description: "For those who live and breathe SQL queries.", price: 19.99, color: "Black", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product10.webp", rating: 4.4 }, { id: 11, name: "Java Developer Mug", description: "For all the Java devs who love their coffee strong.", price: 16.99, color: "Brown", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product11.webp", rating: 4.2 }, { id: 12, name: "Web Dev Keychain", description: "Carry a little piece of the web with you everywhere!", price: 8.99, color: "Silver", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product12.webp", rating: 4.6 }, { id: 13, name: "Cloud Computing Hoodie", description: "For those who live and breathe the cloud.", price: 49.99, color: "Blue", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product13.webp", rating: 4.8 }, { id: 14, name: "Git Version Control Shirt", description: "Version control your wardrobe with this Git shirt!", price: 22.99, color: "Black", size: "S", imageUrl: "/_fragment/nuxt/assets/images/product14.webp", rating: 4.7 }, { id: 15, name: "Linux Command Line Mug", description: "For the true command line masters.", price: 13.99, color: "Black", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product15.webp", rating: 4.5 }, { id: 16, name: "Playwright Testing T-Shirt", description: "For the test-driven developers!", price: 26.99, color: "White", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product1.webp", rating: 4.8 }, { id: 17, name: "GraphQL Developer Hoodie", description: "Perfect for those who query with GraphQL.", price: 42.99, color: "Black", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product2.webp", rating: 4.7 }, { id: 18, name: "Firebase Cloud T-Shirt", description: "Show off your cloud skills with Firebase!", price: 29.99, color: "Orange", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product3.webp", rating: 4.9 }, { id: 19, name: "MongoDB Mug", description: "For the NoSQL enthusiasts.", price: 15.99, color: "Green", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product4.webp", rating: 4.4 }, { id: 20, name: "Swift Developer Beanie", description: "Keep your head warm while writing Swift code.", price: 19.99, color: "Grey", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product5.webp", rating: 4.6 }, { id: 21, name: "Ruby on Rails Keychain", description: "A keychain for Ruby lovers!", price: 7.99, color: "Red", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product6.webp", rating: 4.5 }, { id: 22, name: "PHP Developer Hat", description: "Perfect for all the PHP developers out there.", price: 21.99, color: "Purple", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product7.webp", rating: 4.2 }, { id: 23, name: "Ruby Developer T-Shirt", description: "For Ruby developers who love simplicity and elegance.", price: 24.99, color: "Red", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product8.webp", rating: 4.7 }, { id: 24, name: "Kubernetes Cap", description: "For devs who orchestrate containers in style!", price: 18.99, color: "Blue", size: "One size", imageUrl: "/_fragment/nuxt/assets/images/product9.webp", rating: 4.5 }, { id: 25, name: "Elixir Developer Hoodie", description: "For those who love functional programming with Elixir.", price: 48.99, color: "Purple", size: "XL", imageUrl: "/_fragment/nuxt/assets/images/product10.webp", rating: 4.6 }, { id: 26, name: "GraphQL Developer Mug", description: "For those who query with GraphQL!", price: 16.99, color: "White", size: "300ml", imageUrl: "/_fragment/nuxt/assets/images/product11.webp", rating: 4.8 }, { id: 27, name: "C# Programmer T-Shirt", description: "For fans of C# and .NET!", price: 27.99, color: "Black", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product12.webp", rating: 4.3 }, { id: 28, name: "Perl Programmer Hoodie", description: "For the hardcore Perl programmers.", price: 45.99, color: "Dark Green", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product13.webp", rating: 4.5 }, { id: 29, name: "DevOps Engineer T-Shirt", description: "For the engineers who bridge the gap between dev and ops.", price: 31.99, color: "Orange", size: "M", imageUrl: "/_fragment/nuxt/assets/images/product14.webp", rating: 4.6 }, { id: 30, name: "Artificial Intelligence Hoodie", description: "For those who are building the future with AI.", price: 49.99, color: "Black", size: "L", imageUrl: "/_fragment/nuxt/assets/images/product15.webp", rating: 4.8 }];
    g2 = dl.defineComponent({ __name: "ProductCard", __ssrInlineRender: true, props: { product: {} }, setup: /* @__PURE__ */ __name((a7) => (a8, t12, i6, s6) => {
      t12(`<div${ssrRenderAttrs(dl.mergeProps({ class: "product-card" }, s6))} data-v-4f0d6ac2><img${ssrRenderAttr("src", a8.product.imageUrl)}${ssrRenderAttr("alt", a8.product.name)} data-v-4f0d6ac2><div class="content" data-v-4f0d6ac2><h2 data-v-4f0d6ac2>${ssrInterpolate(a8.product.name)}</h2><p data-v-4f0d6ac2>${ssrInterpolate(a8.product.description)}</p>`), t12(ssrRenderComponent(o3, { rating: a8.product.rating }, null, i6)), t12(`<div class="footer" data-v-4f0d6ac2><span class="price" data-v-4f0d6ac2>$${ssrInterpolate(a8.product.price)}</span><button class="button" data-v-4f0d6ac2>Add to Cart</button></div></div></div>`);
    }, "setup") });
    f2 = g2.setup;
    g2.setup = (e6, a7) => {
      const t12 = dl.useSSRContext();
      return (t12.modules || (t12.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue"), f2 ? f2(e6, a7) : void 0;
    };
    v4 = _export_sfc(g2, [["__scopeId", "data-v-4f0d6ac2"]]);
    h3 = dl.defineComponent({ __name: "index", __ssrInlineRender: true, async setup(e6) {
      let a7, i6;
      const { data: s6, pending: n5, error: u4 } = ([a7, i6] = dl.withAsyncContext(() => useAsyncData("products", async () => {
        try {
          return console.log("SSR Products Data:", m2), m2;
        } catch (e7) {
          throw console.error("Failed to fetch products:", e7), new Error("Failed to fetch products");
        }
      })), a7 = await a7, i6(), a7), p4 = useRouter();
      return (e7, a8, t12, i7) => {
        const m5 = v4;
        a8(`<div${ssrRenderAttrs(i7)} data-v-be76bbff><header data-v-be76bbff></header><main class="container" data-v-be76bbff>`), dl.unref(n5) ? a8('<div class="loading" data-v-be76bbff>Loading products...</div>') : dl.unref(u4) ? a8(`<div class="error" data-v-be76bbff>${ssrInterpolate(dl.unref(u4).message)}</div>`) : (a8('<div class="products" data-v-be76bbff><div class="grid" data-v-be76bbff><!--[-->'), ssrRenderList(dl.unref(s6), (e8) => {
          a8(ssrRenderComponent(m5, { key: e8.id, product: e8, onClick: /* @__PURE__ */ __name((a9) => {
            return r11 = e8.id, void p4.push(`/store/product/${r11}`);
            var r11;
          }, "onClick") }, null, t12));
        }), a8("<!--]--></div></div>")), a8("</main></div>");
      };
    } });
    y2 = h3.setup;
    h3.setup = (e6, a7) => {
      const t12 = dl.useSSRContext();
      return (t12.modules || (t12.modules = /* @__PURE__ */ new Set())).add("pages/store/catalog/index.vue"), y2 ? y2(e6, a7) : void 0;
    };
    w2 = _export_sfc(h3, [["__scopeId", "data-v-be76bbff"]]);
  }
});

// dist/server/chunks/build/default-BZyETgmw.mjs
var default_BZyETgmw_exports = {};
__export(default_BZyETgmw_exports, {
  default: () => m3
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
var s3, n4, m3;
var init_default_BZyETgmw = __esm({
  "dist/server/chunks/build/default-BZyETgmw.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    init_nitro();
    init_util2();
    init_shared_esm_bundler();
    s3 = {};
    n4 = s3.setup;
    s3.setup = (e6, t12) => {
      const r11 = dl.useSSRContext();
      return (r11.modules || (r11.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), n4 ? n4(e6, t12) : void 0;
    };
    m3 = _export_sfc(s3, [["ssrRender", function(e6, o6, s6, n5) {
      o6(`<div${ssrRenderAttrs(n5)}>`), ssrRenderSlot(e6.$slots, "default", {}, null, o6, s6), o6("</div>");
    }]]);
  }
});

// dist/server/chunks/build/v3-UH8km81a.mjs
function useHead2(o6, s6 = {}) {
  const u4 = function(n5) {
    var o7;
    const s7 = n5 || tryUseNuxtApp();
    return (null == (o7 = null == s7 ? void 0 : s7.ssrContext) ? void 0 : o7.head) || (null == s7 ? void 0 : s7.runWithContext(() => {
      if (dl.hasInjectionContext()) return dl.inject(_r);
    }));
  }(s6.nuxt);
  if (u4) return useHead(o6, { head: u4, ...s6 });
}
var init_v3_UH8km81a = __esm({
  "dist/server/chunks/build/v3-UH8km81a.mjs"() {
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

// dist/server/chunks/build/error-404-UWzz7lb3.mjs
var error_404_UWzz7lb3_exports = {};
__export(error_404_UWzz7lb3_exports, {
  default: () => d4
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
var i3, u2, d4;
var init_error_404_UWzz7lb3 = __esm({
  "dist/server/chunks/build/error-404-UWzz7lb3.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nuxt_link_D6EX5tGE();
    init_server();
    init_v3_UH8km81a();
    init_renderer();
    init_nitro();
    init_util2();
    init_shared_esm_bundler();
    i3 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Not Found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(t12) {
      const i6 = t12;
      return useHead2({ title: `${i6.statusCode} - ${i6.statusMessage} | ${i6.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (n5, i7, u4, d7) => {
        const l5 = c2;
        i7(`<div${ssrRenderAttrs(dl.mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, d7))} data-v-a5e695ad><div class="fixed left-0 right-0 spotlight z-10" data-v-a5e695ad></div><div class="max-w-520px text-center z-20" data-v-a5e695ad><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-a5e695ad>${ssrInterpolate(t12.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-a5e695ad>${ssrInterpolate(t12.description)}</p><div class="flex items-center justify-center w-full" data-v-a5e695ad>`), i7(ssrRenderComponent(l5, { to: "/", class: "cursor-pointer gradient-border px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-md" }, { default: dl.withCtx((e6, n6, o6, s6) => {
          if (!n6) return [dl.createTextVNode(dl.toDisplayString(t12.backHome), 1)];
          n6(`${ssrInterpolate(t12.backHome)}`);
        }), _: 1 }, u4)), i7("</div></div></div>");
      };
    } };
    u2 = i3.setup;
    i3.setup = (e6, t12) => {
      const n5 = dl.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue"), u2 ? u2(e6, t12) : void 0;
    };
    d4 = _export_sfc(i3, [["__scopeId", "data-v-a5e695ad"]]);
  }
});

// dist/server/chunks/build/error-500-BSwQ_waQ.mjs
var error_500_BSwQ_waQ_exports = {};
__export(error_500_BSwQ_waQ_exports, {
  default: () => a3
});
import "node:events";
import "node:buffer";
import "node:timers";
import "node:zlib";
import "node:stream";
import "node:url";
import "node:net";
import "node:path";
var s4, i4, a3;
var init_error_500_BSwQ_waQ = __esm({
  "dist/server/chunks/build/error-500-BSwQ_waQ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_v3_UH8km81a();
    init_renderer();
    init_nitro();
    init_util2();
    init_shared_esm_bundler();
    s4 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, version: { type: String, default: "" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Server error" }, description: { type: String, default: "This page is temporarily unavailable." } }, setup(e6) {
      const s6 = e6;
      return useHead2({ title: `${s6.statusCode} - ${s6.statusMessage} | ${s6.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r11, s7, i6, a7) => {
        s7(`<div${ssrRenderAttrs(dl.mergeProps({ class: "antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black" }, a7))} data-v-3925d347><div class="-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight" data-v-3925d347></div><div class="max-w-520px text-center" data-v-3925d347><h1 class="font-medium mb-8 sm:text-10xl text-8xl" data-v-3925d347>${ssrInterpolate(e6.statusCode)}</h1><p class="font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl" data-v-3925d347>${ssrInterpolate(e6.description)}</p></div></div>`);
      };
    } };
    i4 = s4.setup;
    s4.setup = (e6, r11) => {
      const n5 = dl.useSSRContext();
      return (n5.modules || (n5.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue"), i4 ? i4(e6, r11) : void 0;
    };
    a3 = _export_sfc(s4, [["__scopeId", "data-v-3925d347"]]);
  }
});

// dist/server/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  Y: () => eu,
  Z: () => cu,
  _: () => _export_sfc,
  a: () => useRouter,
  b: () => useNuxtApp,
  c: () => wd,
  d: () => createError,
  e: () => useRuntimeConfig,
  f: () => Rd,
  n: () => navigateTo,
  r: () => resolveRouteObject,
  s: () => op,
  t: () => tryUseNuxtApp,
  u: () => useRoute$1,
  v: () => dl
});
import { Buffer as te } from "node:buffer";
import re from "node:zlib";
import se, { PassThrough as ie, pipeline as ae } from "node:stream";
import { format as ce } from "node:url";
import { isIP as de } from "node:net";
import { basename as fe } from "node:path";
function registerRuntimeHelpers(e6) {
  Object.getOwnPropertySymbols(e6).forEach((t12) => {
    Uo[t12] = e6[t12];
  });
}
function createRoot(e6, t12 = "") {
  return { type: 0, source: t12, children: e6, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: [], temps: 0, codegenNode: void 0, loc: $o };
}
function createVNodeCall(e6, t12, r11, n5, o6, i6, a7, h6 = false, m5 = false, _3 = false, S3 = $o) {
  return e6 && (h6 ? (e6.helper($r), e6.helper(getVNodeBlockHelper(e6.inSSR, _3))) : e6.helper(getVNodeHelper(e6.inSSR, _3)), a7 && e6.helper(pn)), { type: 13, tag: t12, props: r11, children: n5, patchFlag: o6, dynamicProps: i6, directives: a7, isBlock: h6, disableTracking: m5, isComponent: _3, loc: S3 };
}
function createArrayExpression(e6, t12 = $o) {
  return { type: 17, loc: t12, elements: e6 };
}
function createObjectExpression(e6, t12 = $o) {
  return { type: 15, loc: t12, properties: e6 };
}
function createObjectProperty(e6, t12) {
  return { type: 16, loc: $o, key: isString2(e6) ? createSimpleExpression(e6, true) : e6, value: t12 };
}
function createSimpleExpression(e6, t12 = false, r11 = $o, n5 = 0) {
  return { type: 4, loc: r11, content: e6, isStatic: t12, constType: t12 ? 3 : n5 };
}
function createCompoundExpression(e6, t12 = $o) {
  return { type: 8, loc: t12, children: e6 };
}
function createCallExpression(e6, t12 = [], r11 = $o) {
  return { type: 14, loc: r11, callee: e6, arguments: t12 };
}
function createFunctionExpression(e6, t12 = void 0, r11 = false, n5 = false, o6 = $o) {
  return { type: 18, params: e6, returns: t12, newline: r11, isSlot: n5, loc: o6 };
}
function createConditionalExpression(e6, t12, r11, n5 = true) {
  return { type: 19, test: e6, consequent: t12, alternate: r11, newline: n5, loc: $o };
}
function createCacheExpression(e6, t12, r11 = false, n5 = false) {
  return { type: 20, index: e6, value: t12, needPauseTracking: r11, inVOnce: n5, needArraySpread: false, loc: $o };
}
function createBlockStatement(e6) {
  return { type: 21, body: e6, loc: $o };
}
function getVNodeHelper(e6, t12) {
  return e6 || t12 ? Kr : Jr;
}
function getVNodeBlockHelper(e6, t12) {
  return e6 || t12 ? Xr : Gr;
}
function convertToBlock(e6, { helper: t12, removeHelper: r11, inSSR: n5 }) {
  e6.isBlock || (e6.isBlock = true, r11(getVNodeHelper(n5, e6.isComponent)), t12($r), t12(getVNodeBlockHelper(n5, e6.isComponent)));
}
function isTagStartChar(e6) {
  return e6 >= 97 && e6 <= 122 || e6 >= 65 && e6 <= 90;
}
function isWhitespace(e6) {
  return 32 === e6 || 10 === e6 || 9 === e6 || 12 === e6 || 13 === e6;
}
function isEndOfTagSection(e6) {
  return 47 === e6 || 62 === e6 || isWhitespace(e6);
}
function toCharCodes(e6) {
  const t12 = new Uint8Array(e6.length);
  for (let r11 = 0; r11 < e6.length; r11++) t12[r11] = e6.charCodeAt(r11);
  return t12;
}
function getCompatValue(e6, { compatConfig: t12 }) {
  const r11 = t12 && t12[e6];
  return "MODE" === e6 ? r11 || 3 : r11;
}
function isCompatEnabled(e6, t12) {
  const r11 = getCompatValue("MODE", t12), n5 = getCompatValue(e6, t12);
  return 3 === r11 ? true === n5 : false !== n5;
}
function checkCompatEnabled(e6, t12, r11, ...n5) {
  return isCompatEnabled(e6, t12);
}
function defaultOnError(e6) {
  throw e6;
}
function defaultOnWarn(e6) {
}
function createCompilerError(e6, t12, r11, n5) {
  const o6 = new SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e6}`));
  return o6.code = e6, o6.loc = t12, o6;
}
function isForStatement(e6) {
  return "ForOfStatement" === e6.type || "ForInStatement" === e6.type || "ForStatement" === e6.type;
}
function walkForStatement(e6, t12, r11) {
  const n5 = "ForStatement" === e6.type ? e6.init : e6.left;
  if (n5 && "VariableDeclaration" === n5.type && ("var" === n5.kind ? t12 : !t12)) for (const e7 of n5.declarations) for (const t13 of extractIdentifiers(e7.id)) r11(t13);
}
function extractIdentifiers(e6, t12 = []) {
  switch (e6.type) {
    case "Identifier":
      t12.push(e6);
      break;
    case "MemberExpression":
      let r11 = e6;
      for (; "MemberExpression" === r11.type; ) r11 = r11.object;
      t12.push(r11);
      break;
    case "ObjectPattern":
      for (const r12 of e6.properties) "RestElement" === r12.type ? extractIdentifiers(r12.argument, t12) : extractIdentifiers(r12.value, t12);
      break;
    case "ArrayPattern":
      e6.elements.forEach((e7) => {
        e7 && extractIdentifiers(e7, t12);
      });
      break;
    case "RestElement":
      extractIdentifiers(e6.argument, t12);
      break;
    case "AssignmentPattern":
      extractIdentifiers(e6.left, t12);
  }
  return t12;
}
function isCoreComponent(e6) {
  switch (e6) {
    case "Teleport":
    case "teleport":
      return yr;
    case "Suspense":
    case "suspense":
      return _r2;
    case "KeepAlive":
    case "keep-alive":
      return Sr;
    case "BaseTransition":
    case "base-transition":
      return Vr;
  }
}
function advancePositionWithMutation(e6, t12, r11 = t12.length) {
  let n5 = 0, o6 = -1;
  for (let e7 = 0; e7 < r11; e7++) 10 === t12.charCodeAt(e7) && (n5++, o6 = e7);
  return e6.offset += r11, e6.line += n5, e6.column = -1 === o6 ? e6.column + r11 : r11 - o6, e6;
}
function findDir(e6, t12, r11 = false) {
  for (let n5 = 0; n5 < e6.props.length; n5++) {
    const o6 = e6.props[n5];
    if (7 === o6.type && (r11 || o6.exp) && (isString2(t12) ? o6.name === t12 : t12.test(o6.name))) return o6;
  }
}
function findProp(e6, t12, r11 = false, n5 = false) {
  for (let o6 = 0; o6 < e6.props.length; o6++) {
    const i6 = e6.props[o6];
    if (6 === i6.type) {
      if (r11) continue;
      if (i6.name === t12 && (i6.value || n5)) return i6;
    } else if ("bind" === i6.name && (i6.exp || n5) && isStaticArgOf(i6.arg, t12)) return i6;
  }
}
function isStaticArgOf(e6, t12) {
  return !(!e6 || !isStaticExp(e6) || e6.content !== t12);
}
function hasDynamicKeyVBind(e6) {
  return e6.props.some((e7) => !(7 !== e7.type || "bind" !== e7.name || e7.arg && 4 === e7.arg.type && e7.arg.isStatic));
}
function isText$1(e6) {
  return 5 === e6.type || 2 === e6.type;
}
function isVSlot(e6) {
  return 7 === e6.type && "slot" === e6.name;
}
function isTemplateNode(e6) {
  return 1 === e6.type && 3 === e6.tagType;
}
function isSlotOutlet(e6) {
  return 1 === e6.type && 2 === e6.tagType;
}
function getUnnormalizedProps(e6, t12 = []) {
  if (e6 && !isString2(e6) && 14 === e6.type) {
    const r11 = e6.callee;
    if (!isString2(r11) && hs.has(r11)) return getUnnormalizedProps(e6.arguments[0], t12.concat(e6));
  }
  return [e6, t12];
}
function injectProp(e6, t12, r11) {
  let n5, o6, i6 = 13 === e6.type ? e6.props : e6.arguments[2], a7 = [];
  if (i6 && !isString2(i6) && 14 === i6.type) {
    const e7 = getUnnormalizedProps(i6);
    i6 = e7[0], a7 = e7[1], o6 = a7[a7.length - 1];
  }
  if (null == i6 || isString2(i6)) n5 = createObjectExpression([t12]);
  else if (14 === i6.type) {
    const e7 = i6.arguments[0];
    isString2(e7) || 15 !== e7.type ? i6.callee === Co ? n5 = createCallExpression(r11.helper(co), [createObjectExpression([t12]), i6]) : i6.arguments.unshift(createObjectExpression([t12])) : hasProp(t12, e7) || e7.properties.unshift(t12), !n5 && (n5 = i6);
  } else 15 === i6.type ? (hasProp(t12, i6) || i6.properties.unshift(t12), n5 = i6) : (n5 = createCallExpression(r11.helper(co), [createObjectExpression([t12]), i6]), o6 && o6.callee === To && (o6 = a7[a7.length - 2]));
  13 === e6.type ? o6 ? o6.arguments[0] = n5 : e6.props = n5 : o6 ? o6.arguments[0] = n5 : e6.arguments[2] = n5;
}
function hasProp(e6, t12) {
  let r11 = false;
  if (4 === e6.key.type) {
    const n5 = e6.key.content;
    r11 = t12.properties.some((e7) => 4 === e7.key.type && e7.key.content === n5);
  }
  return r11;
}
function toValidAssetId(e6, t12) {
  return `_${t12}_${e6.replace(/[^\w]/g, (t13, r11) => "-" === t13 ? "_" : e6.charCodeAt(r11).toString())}`;
}
function getMemoedVNodeCall(e6) {
  return 14 === e6.type && e6.callee === qo ? e6.arguments[1].returns : e6;
}
function getSlice(e6, t12) {
  return Ss.slice(e6, t12);
}
function endOpenTag(e6) {
  Vs.inSFCRoot && (Es.innerLoc = getLoc(e6 + 1, e6 + 1)), addNode(Es);
  const { tag: t12, ns: r11 } = Es;
  0 === r11 && bs.isPreTag(t12) && ks++, bs.isVoidTag(t12) ? onCloseTag(Es, e6) : (Ws.unshift(Es), 1 !== r11 && 2 !== r11 || (Vs.inXML = true)), Es = null;
}
function onText(e6, t12, r11) {
  {
    const t13 = Ws[0] && Ws[0].tag;
    "script" !== t13 && "style" !== t13 && e6.includes("&") && (e6 = bs.decodeEntities(e6, false));
  }
  const n5 = Ws[0] || _s, o6 = n5.children[n5.children.length - 1];
  o6 && 2 === o6.type ? (o6.content += e6, setLocEnd(o6.loc, r11)) : n5.children.push({ type: 2, content: e6, loc: getLoc(t12, r11) });
}
function onCloseTag(e6, t12, r11 = false) {
  setLocEnd(e6.loc, r11 ? backTrack(t12, 60) : function(e7, t13) {
    let r12 = e7;
    for (; Ss.charCodeAt(r12) !== t13 && r12 < Ss.length - 1; ) r12++;
    return r12;
  }(t12, 62) + 1), Vs.inSFCRoot && (e6.children.length ? e6.innerLoc.end = n({}, e6.children[e6.children.length - 1].loc.end) : e6.innerLoc.end = n({}, e6.innerLoc.start), e6.innerLoc.source = getSlice(e6.innerLoc.start.offset, e6.innerLoc.end.offset));
  const { tag: n5, ns: o6, children: i6 } = e6;
  if (Bs || ("slot" === n5 ? e6.tagType = 2 : isFragmentTemplate(e6) ? e6.tagType = 3 : function({ tag: e7, props: t13 }) {
    if (bs.isCustomElement(e7)) return false;
    if ("component" === e7 || (r12 = e7.charCodeAt(0), r12 > 64 && r12 < 91) || isCoreComponent(e7) || bs.isBuiltInComponent && bs.isBuiltInComponent(e7) || bs.isNativeTag && !bs.isNativeTag(e7)) return true;
    var r12;
    for (let e8 = 0; e8 < t13.length; e8++) {
      const r13 = t13[e8];
      if (6 === r13.type) {
        if ("is" === r13.name && r13.value) {
          if (r13.value.content.startsWith("vue:")) return true;
          if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", bs, r13.loc)) return true;
        }
      } else if ("bind" === r13.name && isStaticArgOf(r13.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", bs, r13.loc)) return true;
    }
    return false;
  }(e6) && (e6.tagType = 1)), Vs.inRCDATA || (e6.children = condenseWhitespace(i6)), 0 === o6 && bs.isIgnoreNewlineTag(n5)) {
    const e7 = i6[0];
    e7 && 2 === e7.type && (e7.content = e7.content.replace(/^\r?\n/, ""));
  }
  0 === o6 && bs.isPreTag(n5) && ks--, qs === e6 && (Bs = Vs.inVPre = false, qs = null), Vs.inXML && 0 === (Ws[0] ? Ws[0].ns : bs.ns) && (Vs.inXML = false);
  {
    const t13 = e6.props;
    if (!Vs.inSFCRoot && isCompatEnabled("COMPILER_NATIVE_TEMPLATE", bs) && "template" === e6.tag && !isFragmentTemplate(e6)) {
      const t14 = Ws[0] || _s, r13 = t14.children.indexOf(e6);
      t14.children.splice(r13, 1, ...e6.children);
    }
    const r12 = t13.find((e7) => 6 === e7.type && "inline-template" === e7.name);
    r12 && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", bs, r12.loc) && e6.children.length && (r12.value = { type: 2, content: getSlice(e6.children[0].loc.start.offset, e6.children[e6.children.length - 1].loc.end.offset), loc: r12.loc });
  }
}
function backTrack(e6, t12) {
  let r11 = e6;
  for (; Ss.charCodeAt(r11) !== t12 && r11 >= 0; ) r11--;
  return r11;
}
function isFragmentTemplate({ tag: e6, props: t12 }) {
  if ("template" === e6) {
    for (let e7 = 0; e7 < t12.length; e7++) if (7 === t12[e7].type && Gs.has(t12[e7].name)) return true;
  }
  return false;
}
function condenseWhitespace(e6) {
  const t12 = "preserve" !== bs.whitespace;
  let r11 = false;
  for (let n5 = 0; n5 < e6.length; n5++) {
    const o6 = e6[n5];
    if (2 === o6.type) if (ks) o6.content = o6.content.replace(Qs, "\n");
    else if (isAllWhitespace(o6.content)) {
      const i6 = e6[n5 - 1] && e6[n5 - 1].type, a7 = e6[n5 + 1] && e6[n5 + 1].type;
      !i6 || !a7 || t12 && (3 === i6 && (3 === a7 || 1 === a7) || 1 === i6 && (3 === a7 || 1 === a7 && hasNewlineChar(o6.content))) ? (r11 = true, e6[n5] = null) : o6.content = " ";
    } else t12 && (o6.content = condense(o6.content));
  }
  return r11 ? e6.filter(Boolean) : e6;
}
function isAllWhitespace(e6) {
  for (let t12 = 0; t12 < e6.length; t12++) if (!isWhitespace(e6.charCodeAt(t12))) return false;
  return true;
}
function hasNewlineChar(e6) {
  for (let t12 = 0; t12 < e6.length; t12++) {
    const r11 = e6.charCodeAt(t12);
    if (10 === r11 || 13 === r11) return true;
  }
  return false;
}
function condense(e6) {
  let t12 = "", r11 = false;
  for (let n5 = 0; n5 < e6.length; n5++) isWhitespace(e6.charCodeAt(n5)) ? r11 || (t12 += " ", r11 = true) : (t12 += e6[n5], r11 = false);
  return t12;
}
function addNode(e6) {
  (Ws[0] || _s).children.push(e6);
}
function getLoc(e6, t12) {
  return { start: Vs.getPos(e6), end: null == t12 ? t12 : Vs.getPos(t12), source: null == t12 ? t12 : getSlice(e6, t12) };
}
function setLocEnd(e6, t12) {
  e6.end = Vs.getPos(t12), e6.source = getSlice(e6.start.offset, t12);
}
function dirToAttr(e6) {
  const t12 = { type: 6, name: e6.rawName, nameLoc: getLoc(e6.loc.start.offset, e6.loc.start.offset + e6.rawName.length), value: void 0, loc: e6.loc };
  if (e6.exp) {
    const r11 = e6.exp.loc;
    r11.end.offset < e6.loc.end.offset && (r11.start.offset--, r11.start.column--, r11.end.offset++, r11.end.column++), t12.value = { type: 2, content: e6.exp.content, loc: r11 };
  }
  return t12;
}
function createExp(e6, t12 = false, r11, n5 = 0, o6 = 0) {
  return createSimpleExpression(e6, t12, r11, n5);
}
function emitError(e6, t12, r11) {
  bs.onError(createCompilerError(e6, getLoc(t12, t12)));
}
function baseParse(e6, t12) {
  if (Vs.reset(), Es = null, Os = null, As = "", Ps = -1, Is = -1, Ws.length = 0, Ss = e6, bs = n({}, gs), t12) {
    let e7;
    for (e7 in t12) null != t12[e7] && (bs[e7] = t12[e7]);
  }
  Vs.mode = "html" === bs.parseMode ? 1 : "sfc" === bs.parseMode ? 2 : 0, Vs.inXML = 1 === bs.ns || 2 === bs.ns;
  const r11 = t12 && t12.delimiters;
  r11 && (Vs.delimiterOpen = toCharCodes(r11[0]), Vs.delimiterClose = toCharCodes(r11[1]));
  const n5 = _s = createRoot([], e6);
  return Vs.parse(Ss), n5.loc = getLoc(0, e6.length), n5.children = condenseWhitespace(n5.children), _s = null, n5;
}
function cacheStatic(e6, t12) {
  walk(e6, void 0, t12, !!getSingleElementRoot(e6));
}
function getSingleElementRoot(e6) {
  const t12 = e6.children.filter((e7) => 3 !== e7.type);
  return 1 !== t12.length || 1 !== t12[0].type || isSlotOutlet(t12[0]) ? null : t12[0];
}
function walk(e6, t12, r11, n5 = false, o6 = false) {
  const { children: i6 } = e6, a7 = [];
  for (let t13 = 0; t13 < i6.length; t13++) {
    const h7 = i6[t13];
    if (1 === h7.type && 0 === h7.tagType) {
      const e7 = n5 ? 0 : getConstantType(h7, r11);
      if (e7 > 0) {
        if (e7 >= 2) {
          h7.codegenNode.patchFlag = -1, a7.push(h7);
          continue;
        }
      } else {
        const e8 = h7.codegenNode;
        if (13 === e8.type) {
          const t14 = e8.patchFlag;
          if ((void 0 === t14 || 512 === t14 || 1 === t14) && getGeneratedPropsConstantType(h7, r11) >= 2) {
            const t15 = getNodeProps(h7);
            t15 && (e8.props = r11.hoist(t15));
          }
          e8.dynamicProps && (e8.dynamicProps = r11.hoist(e8.dynamicProps));
        }
      }
    } else if (12 === h7.type) {
      if ((n5 ? 0 : getConstantType(h7, r11)) >= 2) {
        a7.push(h7);
        continue;
      }
    }
    if (1 === h7.type) {
      const t14 = 1 === h7.tagType;
      t14 && r11.scopes.vSlot++, walk(h7, e6, r11, false, o6), t14 && r11.scopes.vSlot--;
    } else if (11 === h7.type) walk(h7, e6, r11, 1 === h7.children.length, true);
    else if (9 === h7.type) for (let t14 = 0; t14 < h7.branches.length; t14++) walk(h7.branches[t14], e6, r11, 1 === h7.branches[t14].children.length, o6);
  }
  let h6 = false;
  const m5 = [];
  if (a7.length === i6.length && 1 === e6.type) {
    if (0 === e6.tagType && e6.codegenNode && 13 === e6.codegenNode.type && i(e6.codegenNode.children)) e6.codegenNode.children = getCacheExpression(createArrayExpression(e6.codegenNode.children)), h6 = true;
    else if (1 === e6.tagType && e6.codegenNode && 13 === e6.codegenNode.type && e6.codegenNode.children && !i(e6.codegenNode.children) && 15 === e6.codegenNode.children.type) {
      const t13 = getSlotNode(e6.codegenNode, "default");
      t13 && (m5.push(r11.cached.length), t13.returns = getCacheExpression(createArrayExpression(t13.returns)), h6 = true);
    } else if (3 === e6.tagType && t12 && 1 === t12.type && 1 === t12.tagType && t12.codegenNode && 13 === t12.codegenNode.type && t12.codegenNode.children && !i(t12.codegenNode.children) && 15 === t12.codegenNode.children.type) {
      const n6 = findDir(e6, "slot", true), o7 = n6 && n6.arg && getSlotNode(t12.codegenNode, n6.arg);
      o7 && (m5.push(r11.cached.length), o7.returns = getCacheExpression(createArrayExpression(o7.returns)), h6 = true);
    }
  }
  if (!h6) for (const e7 of a7) m5.push(r11.cached.length), e7.codegenNode = r11.cache(e7.codegenNode);
  function getCacheExpression(e7) {
    const t13 = r11.cache(e7);
    return o6 && r11.hmr && (t13.needArraySpread = true), t13;
  }
  __name(getCacheExpression, "getCacheExpression");
  function getSlotNode(e7, t13) {
    if (e7.children && !i(e7.children) && 15 === e7.children.type) {
      const r12 = e7.children.properties.find((e8) => e8.key === t13 || e8.key.content === t13);
      return r12 && r12.value;
    }
  }
  __name(getSlotNode, "getSlotNode");
  m5.length && 1 === e6.type && 1 === e6.tagType && e6.codegenNode && 13 === e6.codegenNode.type && e6.codegenNode.children && !i(e6.codegenNode.children) && 15 === e6.codegenNode.children.type && e6.codegenNode.children.properties.push(createObjectProperty("__", createSimpleExpression(JSON.stringify(m5), false))), a7.length && r11.transformHoist && r11.transformHoist(i6, r11, e6);
}
function getConstantType(e6, t12) {
  const { constantCache: r11 } = t12;
  switch (e6.type) {
    case 1:
      if (0 !== e6.tagType) return 0;
      const n5 = r11.get(e6);
      if (void 0 !== n5) return n5;
      const o6 = e6.codegenNode;
      if (13 !== o6.type) return 0;
      if (o6.isBlock && "svg" !== e6.tag && "foreignObject" !== e6.tag && "math" !== e6.tag) return 0;
      if (void 0 === o6.patchFlag) {
        let n6 = 3;
        const i7 = getGeneratedPropsConstantType(e6, t12);
        if (0 === i7) return r11.set(e6, 0), 0;
        i7 < n6 && (n6 = i7);
        for (let o7 = 0; o7 < e6.children.length; o7++) {
          const i8 = getConstantType(e6.children[o7], t12);
          if (0 === i8) return r11.set(e6, 0), 0;
          i8 < n6 && (n6 = i8);
        }
        if (n6 > 1) for (let o7 = 0; o7 < e6.props.length; o7++) {
          const i8 = e6.props[o7];
          if (7 === i8.type && "bind" === i8.name && i8.exp) {
            const o8 = getConstantType(i8.exp, t12);
            if (0 === o8) return r11.set(e6, 0), 0;
            o8 < n6 && (n6 = o8);
          }
        }
        if (o6.isBlock) {
          for (let t13 = 0; t13 < e6.props.length; t13++) {
            if (7 === e6.props[t13].type) return r11.set(e6, 0), 0;
          }
          t12.removeHelper($r), t12.removeHelper(getVNodeBlockHelper(t12.inSSR, o6.isComponent)), o6.isBlock = false, t12.helper(getVNodeHelper(t12.inSSR, o6.isComponent));
        }
        return r11.set(e6, n6), n6;
      }
      return r11.set(e6, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return getConstantType(e6.content, t12);
    case 4:
      return e6.constType;
    case 8:
      let i6 = 3;
      for (let r12 = 0; r12 < e6.children.length; r12++) {
        const n6 = e6.children[r12];
        if (isString2(n6) || isSymbol2(n6)) continue;
        const o7 = getConstantType(n6, t12);
        if (0 === o7) return 0;
        o7 < i6 && (i6 = o7);
      }
      return i6;
    case 20:
      return 2;
  }
}
function getConstantTypeOfHelperCall(e6, t12) {
  if (14 === e6.type && !isString2(e6.callee) && Ks.has(e6.callee)) {
    const r11 = e6.arguments[0];
    if (4 === r11.type) return getConstantType(r11, t12);
    if (14 === r11.type) return getConstantTypeOfHelperCall(r11, t12);
  }
  return 0;
}
function getGeneratedPropsConstantType(e6, t12) {
  let r11 = 3;
  const n5 = getNodeProps(e6);
  if (n5 && 15 === n5.type) {
    const { properties: e7 } = n5;
    for (let n6 = 0; n6 < e7.length; n6++) {
      const { key: o6, value: i6 } = e7[n6], a7 = getConstantType(o6, t12);
      if (0 === a7) return a7;
      let h6;
      if (a7 < r11 && (r11 = a7), h6 = 4 === i6.type ? getConstantType(i6, t12) : 14 === i6.type ? getConstantTypeOfHelperCall(i6, t12) : 0, 0 === h6) return h6;
      h6 < r11 && (r11 = h6);
    }
  }
  return r11;
}
function getNodeProps(e6) {
  const t12 = e6.codegenNode;
  if (13 === t12.type) return t12.props;
}
function createTransformContext(e6, { filename: t12 = "", prefixIdentifiers: r11 = false, hoistStatic: n5 = false, hmr: o6 = false, cacheHandlers: i6 = false, nodeTransforms: a7 = [], directiveTransforms: h6 = {}, transformHoist: m5 = null, isBuiltInComponent: _3 = NOOP, isCustomElement: S3 = NOOP, expressionPlugins: E4 = [], scopeId: v6 = null, slotted: T3 = true, ssr: w4 = false, inSSR: N3 = false, ssrCssVars: L3 = "", bindingMetadata: M3 = t, inline: D3 = false, isTS: B2 = false, onError: j3 = defaultOnError, onWarn: $3 = defaultOnWarn, compatConfig: H2 }) {
  const te3 = t12.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), re3 = { filename: t12, selfName: te3 && f(p(te3[1])), prefixIdentifiers: r11, hoistStatic: n5, hmr: o6, cacheHandlers: i6, nodeTransforms: a7, directiveTransforms: h6, transformHoist: m5, isBuiltInComponent: _3, isCustomElement: S3, expressionPlugins: E4, scopeId: v6, slotted: T3, ssr: w4, inSSR: N3, ssrCssVars: L3, bindingMetadata: M3, inline: D3, isTS: B2, onError: j3, onWarn: $3, compatConfig: H2, root: e6, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], cached: [], constantCache: /* @__PURE__ */ new WeakMap(), temps: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, grandParent: null, currentNode: e6, childIndex: 0, inVOnce: false, helper(e7) {
    const t13 = re3.helpers.get(e7) || 0;
    return re3.helpers.set(e7, t13 + 1), e7;
  }, removeHelper(e7) {
    const t13 = re3.helpers.get(e7);
    if (t13) {
      const r12 = t13 - 1;
      r12 ? re3.helpers.set(e7, r12) : re3.helpers.delete(e7);
    }
  }, helperString: /* @__PURE__ */ __name((e7) => `_${Uo[re3.helper(e7)]}`, "helperString"), replaceNode(e7) {
    re3.parent.children[re3.childIndex] = re3.currentNode = e7;
  }, removeNode(e7) {
    const t13 = re3.parent.children, r12 = e7 ? t13.indexOf(e7) : re3.currentNode ? re3.childIndex : -1;
    e7 && e7 !== re3.currentNode ? re3.childIndex > r12 && (re3.childIndex--, re3.onNodeRemoved()) : (re3.currentNode = null, re3.onNodeRemoved()), re3.parent.children.splice(r12, 1);
  }, onNodeRemoved: NOOP, addIdentifiers(e7) {
  }, removeIdentifiers(e7) {
  }, hoist(e7) {
    isString2(e7) && (e7 = createSimpleExpression(e7)), re3.hoists.push(e7);
    const t13 = createSimpleExpression(`_hoisted_${re3.hoists.length}`, false, e7.loc, 2);
    return t13.hoisted = e7, t13;
  }, cache(e7, t13 = false, r12 = false) {
    const n6 = createCacheExpression(re3.cached.length, e7, t13, r12);
    return re3.cached.push(n6), n6;
  } };
  return re3.filters = /* @__PURE__ */ new Set(), re3;
}
function transform(e6, t12) {
  const r11 = createTransformContext(e6, t12);
  traverseNode(e6, r11), t12.hoistStatic && cacheStatic(e6, r11), t12.ssr || function(e7, t13) {
    const { helper: r12 } = t13, { children: n5 } = e7;
    if (1 === n5.length) {
      const r13 = getSingleElementRoot(e7);
      if (r13 && r13.codegenNode) {
        const n6 = r13.codegenNode;
        13 === n6.type && convertToBlock(n6, t13), e7.codegenNode = n6;
      } else e7.codegenNode = n5[0];
    } else if (n5.length > 1) {
      let n6 = 64;
      e7.codegenNode = createVNodeCall(t13, r12(gr), void 0, e7.children, n6, void 0, void 0, true, void 0, false);
    }
  }(e6, r11), e6.helpers = /* @__PURE__ */ new Set([...r11.helpers.keys()]), e6.components = [...r11.components], e6.directives = [...r11.directives], e6.imports = r11.imports, e6.hoists = r11.hoists, e6.temps = r11.temps, e6.cached = r11.cached, e6.transformed = true, e6.filters = [...r11.filters];
}
function traverseNode(e6, t12) {
  t12.currentNode = e6;
  const { nodeTransforms: r11 } = t12, n5 = [];
  for (let o7 = 0; o7 < r11.length; o7++) {
    const i6 = r11[o7](e6, t12);
    if (i6 && (i(i6) ? n5.push(...i6) : n5.push(i6)), !t12.currentNode) return;
    e6 = t12.currentNode;
  }
  switch (e6.type) {
    case 3:
      t12.ssr || t12.helper(Yr);
      break;
    case 5:
      t12.ssr || t12.helper(Zn);
      break;
    case 9:
      for (let r12 = 0; r12 < e6.branches.length; r12++) traverseNode(e6.branches[r12], t12);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      !function(e7, t13) {
        let r12 = 0;
        const nodeRemoved = /* @__PURE__ */ __name(() => {
          r12--;
        }, "nodeRemoved");
        for (; r12 < e7.children.length; r12++) {
          const n6 = e7.children[r12];
          isString2(n6) || (t13.grandParent = t13.parent, t13.parent = e7, t13.childIndex = r12, t13.onNodeRemoved = nodeRemoved, traverseNode(n6, t13));
        }
      }(e6, t12);
  }
  t12.currentNode = e6;
  let o6 = n5.length;
  for (; o6--; ) n5[o6]();
}
function createStructuralDirectiveTransform(e6, t12) {
  const r11 = isString2(e6) ? (t13) => t13 === e6 : (t13) => e6.test(t13);
  return (e7, n5) => {
    if (1 === e7.type) {
      const { props: o6 } = e7;
      if (3 === e7.tagType && o6.some(isVSlot)) return;
      const i6 = [];
      for (let a7 = 0; a7 < o6.length; a7++) {
        const h6 = o6[a7];
        if (7 === h6.type && r11(h6.name)) {
          o6.splice(a7, 1), a7--;
          const r12 = t12(e7, h6, n5);
          r12 && i6.push(r12);
        }
      }
      return i6;
    }
  };
}
function generate(e6, t12 = {}) {
  const r11 = function(e7, { mode: t13 = "function", prefixIdentifiers: r12 = "module" === t13, sourceMap: n6 = false, filename: o7 = "template.vue.html", scopeId: i7 = null, optimizeImports: a8 = false, runtimeGlobalName: h7 = "Vue", runtimeModuleName: m6 = "vue", ssrRuntimeModuleName: _4 = "vue/server-renderer", ssr: S4 = false, isTS: E5 = false, inSSR: v7 = false }) {
    const T4 = { mode: t13, prefixIdentifiers: r12, sourceMap: n6, filename: o7, scopeId: i7, optimizeImports: a8, runtimeGlobalName: h7, runtimeModuleName: m6, ssrRuntimeModuleName: _4, ssr: S4, isTS: E5, inSSR: v7, source: e7.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: false, map: void 0, helper: /* @__PURE__ */ __name((e8) => `_${Uo[e8]}`, "helper"), push(e8, t14 = -2, r13) {
      T4.code += e8;
    }, indent() {
      newline(++T4.indentLevel);
    }, deindent(e8 = false) {
      e8 ? --T4.indentLevel : newline(--T4.indentLevel);
    }, newline() {
      newline(T4.indentLevel);
    } };
    function newline(e8) {
      T4.push("\n" + "  ".repeat(e8), 0);
    }
    __name(newline, "newline");
    return T4;
  }(e6, t12);
  t12.onContextCreated && t12.onContextCreated(r11);
  const { mode: n5, push: o6, prefixIdentifiers: i6, indent: a7, deindent: h6, newline: m5, scopeId: _3, ssr: S3 } = r11, E4 = Array.from(e6.helpers), v6 = E4.length > 0, T3 = !i6 && "module" !== n5;
  !function(e7, t13) {
    const { ssr: r12, prefixIdentifiers: n6, push: o7, newline: i7, runtimeModuleName: a8, runtimeGlobalName: h7, ssrRuntimeModuleName: m6 } = t13, _4 = h7, S4 = Array.from(e7.helpers);
    if (S4.length > 0 && (o7(`const _Vue = ${_4}
`, -1), e7.hoists.length)) {
      o7(`const { ${[Kr, Jr, Yr, en, tn].filter((e8) => S4.includes(e8)).map(aliasHelper).join(", ")} } = _Vue
`, -1);
    }
    (function(e8, t14) {
      if (!e8.length) return;
      t14.pure = true;
      const { push: r13, newline: n7 } = t14;
      n7();
      for (let o8 = 0; o8 < e8.length; o8++) {
        const i8 = e8[o8];
        i8 && (r13(`const _hoisted_${o8 + 1} = `), genNode(i8, t14), n7());
      }
      t14.pure = false;
    })(e7.hoists, t13), i7(), o7("return ");
  }(e6, r11);
  if (o6(`function ${S3 ? "ssrRender" : "render"}(${(S3 ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), a7(), T3 && (o6("with (_ctx) {"), a7(), v6 && (o6(`const { ${E4.map(aliasHelper).join(", ")} } = _Vue
`, -1), m5())), e6.components.length && (genAssets(e6.components, "component", r11), (e6.directives.length || e6.temps > 0) && m5()), e6.directives.length && (genAssets(e6.directives, "directive", r11), e6.temps > 0 && m5()), e6.filters && e6.filters.length && (m5(), genAssets(e6.filters, "filter", r11), m5()), e6.temps > 0) {
    o6("let ");
    for (let t13 = 0; t13 < e6.temps; t13++) o6(`${t13 > 0 ? ", " : ""}_temp${t13}`);
  }
  return (e6.components.length || e6.directives.length || e6.temps) && (o6("\n", 0), m5()), S3 || o6("return "), e6.codegenNode ? genNode(e6.codegenNode, r11) : o6("null"), T3 && (h6(), o6("}")), h6(), o6("}"), { ast: e6, code: r11.code, preamble: "", map: r11.map ? r11.map.toJSON() : void 0 };
}
function genAssets(e6, t12, { helper: r11, push: n5, newline: o6, isTS: i6 }) {
  const a7 = r11("filter" === t12 ? an : "component" === t12 ? rn : on2);
  for (let r12 = 0; r12 < e6.length; r12++) {
    let h6 = e6[r12];
    const m5 = h6.endsWith("__self");
    m5 && (h6 = h6.slice(0, -6)), n5(`const ${toValidAssetId(h6, t12)} = ${a7}(${JSON.stringify(h6)}${m5 ? ", true" : ""})${i6 ? "!" : ""}`), r12 < e6.length - 1 && o6();
  }
}
function genNodeListAsArray(e6, t12) {
  const r11 = e6.length > 3 || false;
  t12.push("["), r11 && t12.indent(), genNodeList(e6, t12, r11), r11 && t12.deindent(), t12.push("]");
}
function genNodeList(e6, t12, r11 = false, n5 = true) {
  const { push: o6, newline: i6 } = t12;
  for (let a7 = 0; a7 < e6.length; a7++) {
    const h6 = e6[a7];
    isString2(h6) ? o6(h6, -3) : i(h6) ? genNodeListAsArray(h6, t12) : genNode(h6, t12), a7 < e6.length - 1 && (r11 ? (n5 && o6(","), i6()) : n5 && o6(", "));
  }
}
function genNode(e6, t12) {
  if (isString2(e6)) t12.push(e6, -3);
  else if (isSymbol2(e6)) t12.push(t12.helper(e6));
  else switch (e6.type) {
    case 1:
    case 9:
    case 11:
    case 12:
      genNode(e6.codegenNode, t12);
      break;
    case 2:
      !function(e7, t13) {
        t13.push(JSON.stringify(e7.content), -3, e7);
      }(e6, t12);
      break;
    case 4:
      genExpression(e6, t12);
      break;
    case 5:
      !function(e7, t13) {
        const { push: r11, helper: n5, pure: o6 } = t13;
        o6 && r11(Js);
        r11(`${n5(Zn)}(`), genNode(e7.content, t13), r11(")");
      }(e6, t12);
      break;
    case 8:
      genCompoundExpression(e6, t12);
      break;
    case 3:
      !function(e7, t13) {
        const { push: r11, helper: n5, pure: o6 } = t13;
        o6 && r11(Js);
        r11(`${n5(Yr)}(${JSON.stringify(e7.content)})`, -3, e7);
      }(e6, t12);
      break;
    case 13:
      !function(e7, t13) {
        const { push: r11, helper: n5, pure: o6 } = t13, { tag: i6, props: a7, children: h6, patchFlag: m5, dynamicProps: _3, directives: S3, isBlock: E4, disableTracking: v6, isComponent: T3 } = e7;
        let w4;
        m5 && (w4 = String(m5));
        S3 && r11(n5(pn) + "(");
        E4 && r11(`(${n5($r)}(${v6 ? "true" : ""}), `);
        o6 && r11(Js);
        const N3 = E4 ? getVNodeBlockHelper(t13.inSSR, T3) : getVNodeHelper(t13.inSSR, T3);
        r11(n5(N3) + "(", -2, e7), genNodeList(function(e8) {
          let t14 = e8.length;
          for (; t14-- && null == e8[t14]; ) ;
          return e8.slice(0, t14 + 1).map((e9) => e9 || "null");
        }([i6, a7, h6, w4, _3]), t13), r11(")"), E4 && r11(")");
        S3 && (r11(", "), genNode(S3, t13), r11(")"));
      }(e6, t12);
      break;
    case 14:
      !function(e7, t13) {
        const { push: r11, helper: n5, pure: o6 } = t13, i6 = isString2(e7.callee) ? e7.callee : n5(e7.callee);
        o6 && r11(Js);
        r11(i6 + "(", -2, e7), genNodeList(e7.arguments, t13), r11(")");
      }(e6, t12);
      break;
    case 15:
      !function(e7, t13) {
        const { push: r11, indent: n5, deindent: o6, newline: i6 } = t13, { properties: a7 } = e7;
        if (!a7.length) return void r11("{}", -2, e7);
        const h6 = a7.length > 1 || false;
        r11(h6 ? "{" : "{ "), h6 && n5();
        for (let e8 = 0; e8 < a7.length; e8++) {
          const { key: n6, value: o7 } = a7[e8];
          genExpressionAsPropertyKey(n6, t13), r11(": "), genNode(o7, t13), e8 < a7.length - 1 && (r11(","), i6());
        }
        h6 && o6(), r11(h6 ? "}" : " }");
      }(e6, t12);
      break;
    case 17:
      !function(e7, t13) {
        genNodeListAsArray(e7.elements, t13);
      }(e6, t12);
      break;
    case 18:
      !function(e7, t13) {
        const { push: r11, indent: n5, deindent: o6 } = t13, { params: i6, returns: a7, body: h6, newline: m5, isSlot: _3 } = e7;
        _3 && r11(`_${Uo[Do]}(`);
        r11("(", -2, e7), i(i6) ? genNodeList(i6, t13) : i6 && genNode(i6, t13);
        r11(") => "), (m5 || h6) && (r11("{"), n5());
        a7 ? (m5 && r11("return "), i(a7) ? genNodeListAsArray(a7, t13) : genNode(a7, t13)) : h6 && genNode(h6, t13);
        (m5 || h6) && (o6(), r11("}"));
        _3 && (e7.isNonScopedSlot && r11(", undefined, true"), r11(")"));
      }(e6, t12);
      break;
    case 19:
      !function(e7, t13) {
        const { test: r11, consequent: n5, alternate: o6, newline: i6 } = e7, { push: a7, indent: h6, deindent: m5, newline: _3 } = t13;
        if (4 === r11.type) {
          const e8 = !isSimpleIdentifier(r11.content);
          e8 && a7("("), genExpression(r11, t13), e8 && a7(")");
        } else a7("("), genNode(r11, t13), a7(")");
        i6 && h6(), t13.indentLevel++, i6 || a7(" "), a7("? "), genNode(n5, t13), t13.indentLevel--, i6 && _3(), i6 || a7(" "), a7(": ");
        const S3 = 19 === o6.type;
        S3 || t13.indentLevel++;
        genNode(o6, t13), S3 || t13.indentLevel--;
        i6 && m5(true);
      }(e6, t12);
      break;
    case 20:
      !function(e7, t13) {
        const { push: r11, helper: n5, indent: o6, deindent: i6, newline: a7 } = t13, { needPauseTracking: h6, needArraySpread: m5 } = e7;
        m5 && r11("[...(");
        r11(`_cache[${e7.index}] || (`), h6 && (o6(), r11(`${n5(Io)}(-1`), e7.inVOnce && r11(", true"), r11("),"), a7(), r11("("));
        r11(`_cache[${e7.index}] = `), genNode(e7.value, t13), h6 && (r11(`).cacheIndex = ${e7.index},`), a7(), r11(`${n5(Io)}(1),`), a7(), r11(`_cache[${e7.index}]`), i6());
        r11(")"), m5 && r11(")]");
      }(e6, t12);
      break;
    case 21:
      genNodeList(e6.body, t12, true, false);
  }
}
function genExpression(e6, t12) {
  const { content: r11, isStatic: n5 } = e6;
  t12.push(n5 ? JSON.stringify(r11) : r11, -3, e6);
}
function genCompoundExpression(e6, t12) {
  for (let r11 = 0; r11 < e6.children.length; r11++) {
    const n5 = e6.children[r11];
    isString2(n5) ? t12.push(n5, -3) : genNode(n5, t12);
  }
}
function genExpressionAsPropertyKey(e6, t12) {
  const { push: r11 } = t12;
  if (8 === e6.type) r11("["), genCompoundExpression(e6, t12), r11("]");
  else if (e6.isStatic) {
    r11(isSimpleIdentifier(e6.content) ? e6.content : JSON.stringify(e6.content), -2, e6);
  } else r11(`[${e6.content}]`, -3, e6);
}
function processExpression(e6, t12, r11 = false, n5 = false, o6 = Object.create(t12.identifiers)) {
  return e6;
}
function processIf(e6, t12, r11, n5) {
  if (!("else" === t12.name || t12.exp && t12.exp.content.trim())) {
    const n6 = t12.exp ? t12.exp.loc : e6.loc;
    r11.onError(createCompilerError(28, t12.loc)), t12.exp = createSimpleExpression("true", false, n6);
  }
  if ("if" === t12.name) {
    const i6 = createIfBranch(e6, t12), a7 = { type: 9, loc: (o6 = e6.loc, getLoc(o6.start.offset, o6.end.offset)), branches: [i6] };
    if (r11.replaceNode(a7), n5) return n5(a7, i6, true);
  } else {
    const o7 = r11.parent.children;
    let i6 = o7.indexOf(e6);
    for (; i6-- >= -1; ) {
      const a7 = o7[i6];
      if (a7 && 3 === a7.type) r11.removeNode(a7);
      else {
        if (!a7 || 2 !== a7.type || a7.content.trim().length) {
          if (a7 && 9 === a7.type) {
            "else-if" === t12.name && void 0 === a7.branches[a7.branches.length - 1].condition && r11.onError(createCompilerError(30, e6.loc)), r11.removeNode();
            const o8 = createIfBranch(e6, t12);
            a7.branches.push(o8);
            const i7 = n5 && n5(a7, o8, false);
            traverseNode(o8, r11), i7 && i7(), r11.currentNode = null;
          } else r11.onError(createCompilerError(30, e6.loc));
          break;
        }
        r11.removeNode(a7);
      }
    }
  }
  var o6;
}
function createIfBranch(e6, t12) {
  const r11 = 3 === e6.tagType;
  return { type: 10, loc: e6.loc, condition: "else" === t12.name ? void 0 : t12.exp, children: r11 && !findDir(e6, "for") ? e6.children : [e6], userKey: findProp(e6, "key"), isTemplateIf: r11 };
}
function createCodegenNodeForBranch(e6, t12, r11) {
  return e6.condition ? createConditionalExpression(e6.condition, createChildrenCodegenNode(e6, t12, r11), createCallExpression(r11.helper(Yr), ['""', "true"])) : createChildrenCodegenNode(e6, t12, r11);
}
function createChildrenCodegenNode(e6, t12, r11) {
  const { helper: n5 } = r11, o6 = createObjectProperty("key", createSimpleExpression(`${t12}`, false, $o, 2)), { children: i6 } = e6, a7 = i6[0];
  if (1 !== i6.length || 1 !== a7.type) {
    if (1 === i6.length && 11 === a7.type) {
      const e7 = a7.codegenNode;
      return injectProp(e7, o6, r11), e7;
    }
    {
      let t13 = 64;
      return createVNodeCall(r11, n5(gr), createObjectExpression([o6]), i6, t13, void 0, void 0, true, false, false, e6.loc);
    }
  }
  {
    const e7 = a7.codegenNode, t13 = getMemoedVNodeCall(e7);
    return 13 === t13.type && convertToBlock(t13, r11), injectProp(t13, o6, r11), e7;
  }
}
function processFor(e6, t12, r11, n5) {
  if (!t12.exp) return void r11.onError(createCompilerError(31, t12.loc));
  const o6 = t12.forParseResult;
  if (!o6) return void r11.onError(createCompilerError(32, t12.loc));
  finalizeForParseResult(o6);
  const { addIdentifiers: i6, removeIdentifiers: a7, scopes: h6 } = r11, { source: m5, value: _3, key: S3, index: E4 } = o6, v6 = { type: 11, loc: t12.loc, source: m5, valueAlias: _3, keyAlias: S3, objectIndexAlias: E4, parseResult: o6, children: isTemplateNode(e6) ? e6.children : [e6] };
  r11.replaceNode(v6), h6.vFor++;
  const T3 = n5 && n5(v6);
  return () => {
    h6.vFor--, T3 && T3();
  };
}
function finalizeForParseResult(e6, t12) {
  e6.finalized || (e6.finalized = true);
}
function createForLoopParams({ value: e6, key: t12, index: r11 }, n5 = []) {
  return function(e7) {
    let t13 = e7.length;
    for (; t13-- && !e7[t13]; ) ;
    return e7.slice(0, t13 + 1).map((e8, t14) => e8 || createSimpleExpression("_".repeat(t14 + 1), false));
  }([e6, t12, r11, ...n5]);
}
function buildSlots(e6, t12, r11 = buildClientSlotFn) {
  t12.helper(Do);
  const { children: n5, loc: o6 } = e6, i6 = [], a7 = [];
  let h6 = t12.scopes.vSlot > 0 || t12.scopes.vFor > 0;
  const m5 = findDir(e6, "slot", true);
  if (m5) {
    const { arg: e7, exp: t13 } = m5;
    e7 && !isStaticExp(e7) && (h6 = true), i6.push(createObjectProperty(e7 || createSimpleExpression("default", true), r11(t13, void 0, n5, o6)));
  }
  let _3 = false, S3 = false;
  const E4 = [], v6 = /* @__PURE__ */ new Set();
  let T3 = 0;
  for (let e7 = 0; e7 < n5.length; e7++) {
    const o7 = n5[e7];
    let w5;
    if (!isTemplateNode(o7) || !(w5 = findDir(o7, "slot", true))) {
      3 !== o7.type && E4.push(o7);
      continue;
    }
    if (m5) {
      t12.onError(createCompilerError(37, w5.loc));
      break;
    }
    _3 = true;
    const { children: N4, loc: L3 } = o7, { arg: M3 = createSimpleExpression("default", true), exp: D3, loc: B2 } = w5;
    let j3;
    isStaticExp(M3) ? j3 = M3 ? M3.content : "default" : h6 = true;
    const $3 = findDir(o7, "for"), H2 = r11(D3, $3, N4, L3);
    let te3, re3;
    if (te3 = findDir(o7, "if")) h6 = true, a7.push(createConditionalExpression(te3.exp, buildDynamicSlot(M3, H2, T3++), ei));
    else if (re3 = findDir(o7, /^else(-if)?$/, true)) {
      let r12, o8 = e7;
      for (; o8-- && (r12 = n5[o8], 3 === r12.type || !isNonWhitespaceContent(r12)); ) ;
      if (r12 && isTemplateNode(r12) && findDir(r12, /^(else-)?if$/)) {
        let e8 = a7[a7.length - 1];
        for (; 19 === e8.alternate.type; ) e8 = e8.alternate;
        e8.alternate = re3.exp ? createConditionalExpression(re3.exp, buildDynamicSlot(M3, H2, T3++), ei) : buildDynamicSlot(M3, H2, T3++);
      } else t12.onError(createCompilerError(30, re3.loc));
    } else if ($3) {
      h6 = true;
      const e8 = $3.forParseResult;
      e8 ? (finalizeForParseResult(e8), a7.push(createCallExpression(t12.helper(yn), [e8.source, createFunctionExpression(createForLoopParams(e8), buildDynamicSlot(M3, H2), true)]))) : t12.onError(createCompilerError(32, $3.loc));
    } else {
      if (j3) {
        if (v6.has(j3)) {
          t12.onError(createCompilerError(38, B2));
          continue;
        }
        v6.add(j3), "default" === j3 && (S3 = true);
      }
      i6.push(createObjectProperty(M3, H2));
    }
  }
  if (!m5) {
    const buildDefaultSlotProperty = /* @__PURE__ */ __name((e7, n6) => {
      const i7 = r11(e7, void 0, n6, o6);
      return t12.compatConfig && (i7.isNonScopedSlot = true), createObjectProperty("default", i7);
    }, "buildDefaultSlotProperty");
    _3 ? E4.length && E4.some((e7) => isNonWhitespaceContent(e7)) && (S3 ? t12.onError(createCompilerError(39, E4[0].loc)) : i6.push(buildDefaultSlotProperty(void 0, E4))) : i6.push(buildDefaultSlotProperty(void 0, n5));
  }
  const w4 = h6 ? 2 : hasForwardedSlots(e6.children) ? 3 : 1;
  let N3 = createObjectExpression(i6.concat(createObjectProperty("_", createSimpleExpression(w4 + "", false))), o6);
  return a7.length && (N3 = createCallExpression(t12.helper(Sn), [N3, createArrayExpression(a7)])), { slots: N3, hasDynamicSlots: h6 };
}
function buildDynamicSlot(e6, t12, r11) {
  const n5 = [createObjectProperty("name", e6), createObjectProperty("fn", t12)];
  return null != r11 && n5.push(createObjectProperty("key", createSimpleExpression(String(r11), true))), createObjectExpression(n5);
}
function hasForwardedSlots(e6) {
  for (let t12 = 0; t12 < e6.length; t12++) {
    const r11 = e6[t12];
    switch (r11.type) {
      case 1:
        if (2 === r11.tagType || hasForwardedSlots(r11.children)) return true;
        break;
      case 9:
        if (hasForwardedSlots(r11.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(r11.children)) return true;
    }
  }
  return false;
}
function isNonWhitespaceContent(e6) {
  return 2 !== e6.type && 12 !== e6.type || (2 === e6.type ? !!e6.content.trim() : isNonWhitespaceContent(e6.content));
}
function resolveComponentType(e6, t12, r11 = false) {
  let { tag: n5 } = e6;
  const o6 = isComponentTag(n5), i6 = findProp(e6, "is", false, true);
  if (i6) if (o6 || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12)) {
    let e7;
    if (6 === i6.type ? e7 = i6.value && createSimpleExpression(i6.value.content, true) : (e7 = i6.exp, e7 || (e7 = createSimpleExpression("is", false, i6.arg.loc))), e7) return createCallExpression(t12.helper(nn), [e7]);
  } else 6 === i6.type && i6.value.content.startsWith("vue:") && (n5 = i6.value.content.slice(4));
  const a7 = isCoreComponent(n5) || t12.isBuiltInComponent(n5);
  return a7 ? (r11 || t12.helper(a7), a7) : (t12.helper(rn), t12.components.add(n5), toValidAssetId(n5, "component"));
}
function buildProps(e6, t12, r11 = e6.props, n5, o6, i6 = false) {
  const { tag: a7, loc: h6, children: m5 } = e6;
  let _3 = [];
  const S3 = [], E4 = [], v6 = m5.length > 0;
  let T3 = false, w4 = 0, N3 = false, L3 = false, M3 = false, D3 = false, B2 = false, j3 = false;
  const $3 = [], pushMergeArg = /* @__PURE__ */ __name((e7) => {
    _3.length && (S3.push(createObjectExpression(dedupeProperties(_3), h6)), _3 = []), e7 && S3.push(e7);
  }, "pushMergeArg"), pushRefVForMarker = /* @__PURE__ */ __name(() => {
    t12.scopes.vFor > 0 && _3.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
  }, "pushRefVForMarker"), analyzePatchFlag = /* @__PURE__ */ __name(({ key: e7, value: r12 }) => {
    if (isStaticExp(e7)) {
      const i7 = e7.content, a8 = isOn(i7);
      if (!a8 || n5 && !o6 || "onclick" === i7.toLowerCase() || "onUpdate:modelValue" === i7 || s(i7) || (D3 = true), a8 && s(i7) && (j3 = true), a8 && 14 === r12.type && (r12 = r12.arguments[0]), 20 === r12.type || (4 === r12.type || 8 === r12.type) && getConstantType(r12, t12) > 0) return;
      "ref" === i7 ? N3 = true : "class" === i7 ? L3 = true : "style" === i7 ? M3 = true : "key" === i7 || $3.includes(i7) || $3.push(i7), !n5 || "class" !== i7 && "style" !== i7 || $3.includes(i7) || $3.push(i7);
    } else B2 = true;
  }, "analyzePatchFlag");
  for (let o7 = 0; o7 < r11.length; o7++) {
    const m6 = r11[o7];
    if (6 === m6.type) {
      const { loc: e7, name: r12, nameLoc: n6, value: o8 } = m6;
      let i7 = true;
      if ("ref" === r12 && (N3 = true, pushRefVForMarker()), "is" === r12 && (isComponentTag(a7) || o8 && o8.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12))) continue;
      _3.push(createObjectProperty(createSimpleExpression(r12, true, n6), createSimpleExpression(o8 ? o8.content : "", i7, o8 ? o8.loc : e7)));
    } else {
      const { name: r12, arg: o8, exp: N4, loc: L4, modifiers: M4 } = m6, D4 = "bind" === r12, j4 = "on" === r12;
      if ("slot" === r12) {
        n5 || t12.onError(createCompilerError(40, L4));
        continue;
      }
      if ("once" === r12 || "memo" === r12) continue;
      if ("is" === r12 || D4 && isStaticArgOf(o8, "is") && (isComponentTag(a7) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t12))) continue;
      if (j4 && i6) continue;
      if ((D4 && isStaticArgOf(o8, "key") || j4 && v6 && isStaticArgOf(o8, "vue:before-update")) && (T3 = true), D4 && isStaticArgOf(o8, "ref") && pushRefVForMarker(), !o8 && (D4 || j4)) {
        if (B2 = true, N4) if (D4) {
          if (pushMergeArg(), isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", t12)) {
            S3.unshift(N4);
            continue;
          }
          pushRefVForMarker(), pushMergeArg(), S3.push(N4);
        } else pushMergeArg({ type: 14, loc: L4, callee: t12.helper(Co), arguments: n5 ? [N4] : [N4, "true"] });
        else t12.onError(createCompilerError(D4 ? 34 : 35, L4));
        continue;
      }
      D4 && M4.some((e7) => "prop" === e7.content) && (w4 |= 32);
      const $4 = t12.directiveTransforms[r12];
      if ($4) {
        const { props: r13, needRuntime: n6 } = $4(m6, e6, t12);
        !i6 && r13.forEach(analyzePatchFlag), j4 && o8 && !isStaticExp(o8) ? pushMergeArg(createObjectExpression(r13, h6)) : _3.push(...r13), n6 && (E4.push(m6), isSymbol2(n6) && oi.set(m6, n6));
      } else l(r12) || (E4.push(m6), v6 && (T3 = true));
    }
  }
  let H2;
  if (S3.length ? (pushMergeArg(), H2 = S3.length > 1 ? createCallExpression(t12.helper(co), S3, h6) : S3[0]) : _3.length && (H2 = createObjectExpression(dedupeProperties(_3), h6)), B2 ? w4 |= 16 : (L3 && !n5 && (w4 |= 2), M3 && !n5 && (w4 |= 4), $3.length && (w4 |= 8), D3 && (w4 |= 32)), T3 || 0 !== w4 && 32 !== w4 || !(N3 || j3 || E4.length > 0) || (w4 |= 512), !t12.inSSR && H2) switch (H2.type) {
    case 15:
      let e7 = -1, r12 = -1, n6 = false;
      for (let t13 = 0; t13 < H2.properties.length; t13++) {
        const o8 = H2.properties[t13].key;
        isStaticExp(o8) ? "class" === o8.content ? e7 = t13 : "style" === o8.content && (r12 = t13) : o8.isHandlerKey || (n6 = true);
      }
      const o7 = H2.properties[e7], i7 = H2.properties[r12];
      n6 ? H2 = createCallExpression(t12.helper(vo), [H2]) : (o7 && !isStaticExp(o7.value) && (o7.value = createCallExpression(t12.helper(bo), [o7.value])), i7 && (M3 || 4 === i7.value.type && "[" === i7.value.content.trim()[0] || 17 === i7.value.type) && (i7.value = createCallExpression(t12.helper(Eo), [i7.value])));
      break;
    case 14:
      break;
    default:
      H2 = createCallExpression(t12.helper(vo), [createCallExpression(t12.helper(To), [H2])]);
  }
  return { props: H2, directives: E4, patchFlag: w4, dynamicPropNames: $3, shouldUseBlock: T3 };
}
function dedupeProperties(e6) {
  const t12 = /* @__PURE__ */ new Map(), r11 = [];
  for (let n5 = 0; n5 < e6.length; n5++) {
    const o6 = e6[n5];
    if (8 === o6.key.type || !o6.key.isStatic) {
      r11.push(o6);
      continue;
    }
    const i6 = o6.key.content, a7 = t12.get(i6);
    a7 ? ("style" === i6 || "class" === i6 || isOn(i6)) && mergeAsArray(a7, o6) : (t12.set(i6, o6), r11.push(o6));
  }
  return r11;
}
function mergeAsArray(e6, t12) {
  17 === e6.value.type ? e6.value.elements.push(t12.value) : e6.value = createArrayExpression([e6.value, t12.value], e6.loc);
}
function buildDirectiveArgs(e6, t12) {
  const r11 = [], n5 = oi.get(e6);
  n5 ? r11.push(t12.helperString(n5)) : (t12.helper(on2), t12.directives.add(e6.name), r11.push(toValidAssetId(e6.name, "directive")));
  const { loc: o6 } = e6;
  if (e6.exp && r11.push(e6.exp), e6.arg && (e6.exp || r11.push("void 0"), r11.push(e6.arg)), Object.keys(e6.modifiers).length) {
    e6.arg || (e6.exp || r11.push("void 0"), r11.push("void 0"));
    const t13 = createSimpleExpression("true", false, o6);
    r11.push(createObjectExpression(e6.modifiers.map((e7) => createObjectProperty(e7, t13)), o6));
  }
  return createArrayExpression(r11, e6.loc);
}
function isComponentTag(e6) {
  return "component" === e6 || "Component" === e6;
}
function processSlotOutlet(e6, t12) {
  let r11, n5 = '"default"';
  const o6 = [];
  for (let t13 = 0; t13 < e6.props.length; t13++) {
    const r12 = e6.props[t13];
    if (6 === r12.type) r12.value && ("name" === r12.name ? n5 = JSON.stringify(r12.value.content) : (r12.name = p(r12.name), o6.push(r12)));
    else if ("bind" === r12.name && isStaticArgOf(r12.arg, "name")) {
      if (r12.exp) n5 = r12.exp;
      else if (r12.arg && 4 === r12.arg.type) {
        const e7 = p(r12.arg.content);
        n5 = r12.exp = createSimpleExpression(e7, false, r12.arg.loc);
      }
    } else "bind" === r12.name && r12.arg && isStaticExp(r12.arg) && (r12.arg.content = p(r12.arg.content)), o6.push(r12);
  }
  if (o6.length > 0) {
    const { props: n6, directives: i6 } = buildProps(e6, t12, o6, false, false);
    r11 = n6, i6.length && t12.onError(createCompilerError(36, i6[0].loc));
  }
  return { slotName: n5, slotProps: r11 };
}
function createTransformProps(e6 = []) {
  return { props: e6 };
}
function rewriteFilter(e6, t12) {
  if (4 === e6.type) parseFilter(e6, t12);
  else for (let r11 = 0; r11 < e6.children.length; r11++) {
    const n5 = e6.children[r11];
    "object" == typeof n5 && (4 === n5.type ? parseFilter(n5, t12) : 8 === n5.type ? rewriteFilter(e6, t12) : 5 === n5.type && rewriteFilter(n5.content, t12));
  }
}
function parseFilter(e6, t12) {
  const r11 = e6.content;
  let n5, o6, i6, a7, h6 = false, m5 = false, _3 = false, S3 = false, E4 = 0, v6 = 0, T3 = 0, w4 = 0, N3 = [];
  for (i6 = 0; i6 < r11.length; i6++) if (o6 = n5, n5 = r11.charCodeAt(i6), h6) 39 === n5 && 92 !== o6 && (h6 = false);
  else if (m5) 34 === n5 && 92 !== o6 && (m5 = false);
  else if (_3) 96 === n5 && 92 !== o6 && (_3 = false);
  else if (S3) 47 === n5 && 92 !== o6 && (S3 = false);
  else if (124 !== n5 || 124 === r11.charCodeAt(i6 + 1) || 124 === r11.charCodeAt(i6 - 1) || E4 || v6 || T3) {
    switch (n5) {
      case 34:
        m5 = true;
        break;
      case 39:
        h6 = true;
        break;
      case 96:
        _3 = true;
        break;
      case 40:
        T3++;
        break;
      case 41:
        T3--;
        break;
      case 91:
        v6++;
        break;
      case 93:
        v6--;
        break;
      case 123:
        E4++;
        break;
      case 125:
        E4--;
    }
    if (47 === n5) {
      let e7, t13 = i6 - 1;
      for (; t13 >= 0 && (e7 = r11.charAt(t13), " " === e7); t13--) ;
      e7 && Li.test(e7) || (S3 = true);
    }
  } else void 0 === a7 ? (w4 = i6 + 1, a7 = r11.slice(0, i6).trim()) : pushFilter();
  function pushFilter() {
    N3.push(r11.slice(w4, i6).trim()), w4 = i6 + 1;
  }
  __name(pushFilter, "pushFilter");
  if (void 0 === a7 ? a7 = r11.slice(0, i6).trim() : 0 !== w4 && pushFilter(), N3.length) {
    for (i6 = 0; i6 < N3.length; i6++) a7 = wrapFilter(a7, N3[i6], t12);
    e6.content = a7, e6.ast = void 0;
  }
}
function wrapFilter(e6, t12, r11) {
  r11.helper(an);
  const n5 = t12.indexOf("(");
  if (n5 < 0) return r11.filters.add(t12), `${toValidAssetId(t12, "filter")}(${e6})`;
  {
    const o6 = t12.slice(0, n5), i6 = t12.slice(n5 + 1);
    return r11.filters.add(o6), `${toValidAssetId(o6, "filter")}(${e6}${")" !== i6 ? "," + i6 : i6}`;
  }
}
function getBaseTransformPreset(e6) {
  return [[transformOnce, Ys, transformMemo, Zs, transformFilter, transformSlotOutlet, transformElement, trackSlotScopes, transformText], { on: transformOn$1, bind: transformBind, model: transformModel$1 }];
}
function baseCompile(e6, t12 = {}) {
  const r11 = t12.onError || defaultOnError, n5 = "module" === t12.mode;
  true === t12.prefixIdentifiers ? r11(createCompilerError(47)) : n5 && r11(createCompilerError(48));
  t12.cacheHandlers && r11(createCompilerError(49)), t12.scopeId && !n5 && r11(createCompilerError(50));
  const o6 = n({}, t12, { prefixIdentifiers: false }), i6 = isString2(e6) ? baseParse(e6, o6) : e6, [a7, h6] = getBaseTransformPreset();
  return transform(i6, n({}, o6, { nodeTransforms: [...a7, ...t12.nodeTransforms || []], directiveTransforms: n({}, h6, t12.directiveTransforms || {}) })), generate(i6, o6);
}
function createDOMCompilerError(e6, t12) {
  return createCompilerError(e6, t12);
}
function callbackify2(e6) {
  const fnc = /* @__PURE__ */ __name(function(...t12) {
    const r11 = t12.pop();
    e6().catch((e7) => r11(e7)).then((e7) => r11(void 0, e7));
  }, "fnc");
  return fnc.__promisify__ = e6, fnc.native = fnc, fnc;
}
function isRouteComponent(e6) {
  return "object" == typeof e6 || "displayName" in e6 || "props" in e6 || "__vccOpts" in e6;
}
function applyToParams(e6, t12) {
  const r11 = {};
  for (const n5 in t12) {
    const o6 = t12[n5];
    r11[n5] = Xl(o6) ? o6.map(e6) : e6(o6);
  }
  return r11;
}
function commonEncode(e6) {
  return encodeURI("" + e6).replace(sc, "|").replace(ec, "[").replace(tc, "]");
}
function encodeQueryValue(e6) {
  return commonEncode(e6).replace(Zl, "%2B").replace(ac, "+").replace(Gl, "%23").replace(Ql, "%26").replace(nc, "`").replace(oc, "{").replace(ic, "}").replace(rc, "^");
}
function encodeQueryKey(e6) {
  return encodeQueryValue(e6).replace(Jl, "%3D");
}
function encodeParam(e6) {
  return null == e6 ? "" : function(e7) {
    return commonEncode(e7).replace(Gl, "%23").replace(Yl, "%3F");
  }(e6).replace(Kl, "%2F");
}
function decode(e6) {
  try {
    return decodeURIComponent("" + e6);
  } catch (e7) {
  }
  return "" + e6;
}
function parseURL(e6, t12, r11 = "/") {
  let n5, o6 = {}, i6 = "", a7 = "";
  const h6 = t12.indexOf("#");
  let m5 = t12.indexOf("?");
  return h6 < m5 && h6 >= 0 && (m5 = -1), m5 > -1 && (n5 = t12.slice(0, m5), i6 = t12.slice(m5 + 1, h6 > -1 ? h6 : t12.length), o6 = e6(i6)), h6 > -1 && (n5 = n5 || t12.slice(0, h6), a7 = t12.slice(h6, t12.length)), n5 = function(e7, t13) {
    if (e7.startsWith("/")) return e7;
    if (!e7) return t13;
    const r12 = t13.split("/"), n6 = e7.split("/"), o7 = n6[n6.length - 1];
    ".." !== o7 && "." !== o7 || n6.push("");
    let i7, a8, h7 = r12.length - 1;
    for (i7 = 0; i7 < n6.length; i7++) if (a8 = n6[i7], "." !== a8) {
      if (".." !== a8) break;
      h7 > 1 && h7--;
    }
    return r12.slice(0, h7).join("/") + "/" + n6.slice(i7).join("/");
  }(null != n5 ? n5 : t12, r11), { fullPath: n5 + (i6 && "?") + i6 + a7, path: n5, query: o6, hash: decode(a7) };
}
function isSameRouteRecord(e6, t12) {
  return (e6.aliasOf || e6) === (t12.aliasOf || t12);
}
function isSameRouteLocationParams(e6, t12) {
  if (Object.keys(e6).length !== Object.keys(t12).length) return false;
  for (const r11 in e6) if (!isSameRouteLocationParamsValue(e6[r11], t12[r11])) return false;
  return true;
}
function isSameRouteLocationParamsValue(e6, t12) {
  return Xl(e6) ? isEquivalentArray(e6, t12) : Xl(t12) ? isEquivalentArray(t12, e6) : e6 === t12;
}
function isEquivalentArray(e6, t12) {
  return Xl(t12) ? e6.length === t12.length && e6.every((e7, r11) => e7 === t12[r11]) : 1 === e6.length && e6[0] === t12;
}
function normalizeBase(e6) {
  if (!e6) if (Hl) {
    const t12 = document.querySelector("base");
    e6 = (e6 = t12 && t12.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
  } else e6 = "/";
  return "/" !== e6[0] && "#" !== e6[0] && (e6 = "/" + e6), e6.replace(lc, "");
}
function createHref(e6, t12) {
  return e6.replace(pc, "#") + t12;
}
function scrollToPosition(e6) {
  let t12;
  if ("el" in e6) {
    const r11 = e6.el, n5 = "string" == typeof r11 && r11.startsWith("#"), o6 = "string" == typeof r11 ? n5 ? document.getElementById(r11.slice(1)) : document.querySelector(r11) : r11;
    if (!o6) return;
    t12 = function(e7, t13) {
      const r12 = document.documentElement.getBoundingClientRect(), n6 = e7.getBoundingClientRect();
      return { behavior: t13.behavior, left: n6.left - r12.left - (t13.left || 0), top: n6.top - r12.top - (t13.top || 0) };
    }(o6, e6);
  } else t12 = e6;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t12) : window.scrollTo(null != t12.left ? t12.left : window.scrollX, null != t12.top ? t12.top : window.scrollY);
}
function getScrollKey(e6, t12) {
  return (history.state ? history.state.position - t12 : -1) + e6;
}
function createMemoryHistory(e6 = "") {
  let t12 = [], r11 = [["", {}]], n5 = 0;
  function setLocation(e7, t13 = {}) {
    n5++, n5 !== r11.length && r11.splice(n5), r11.push([e7, t13]);
  }
  __name(setLocation, "setLocation");
  const o6 = { location: "", state: {}, base: e6 = normalizeBase(e6), createHref: createHref.bind(null, e6), replace(e7, t13) {
    r11.splice(n5--, 1), setLocation(e7, t13);
  }, push(e7, t13) {
    setLocation(e7, t13);
  }, listen: /* @__PURE__ */ __name((e7) => (t12.push(e7), () => {
    const r12 = t12.indexOf(e7);
    r12 > -1 && t12.splice(r12, 1);
  }), "listen"), destroy() {
    t12 = [], r11 = [["", {}]], n5 = 0;
  }, go(e7, o7 = true) {
    const i6 = this.location, a7 = e7 < 0 ? dc.back : dc.forward;
    n5 = Math.max(0, Math.min(n5 + e7, r11.length - 1)), o7 && function(e8, r12, { direction: n6, delta: o8 }) {
      const i7 = { direction: n6, delta: o8, type: uc.pop };
      for (const n7 of t12) n7(e8, r12, i7);
    }(this.location, i6, { direction: a7, delta: e7 });
  } };
  return Object.defineProperty(o6, "location", { enumerable: true, get: /* @__PURE__ */ __name(() => r11[n5][0], "get") }), Object.defineProperty(o6, "state", { enumerable: true, get: /* @__PURE__ */ __name(() => r11[n5][1], "get") }), o6;
}
function isRouteName(e6) {
  return "string" == typeof e6 || "symbol" == typeof e6;
}
function createRouterError(e6, t12) {
  return zl(new Error(), { type: e6, [hc]: true }, t12);
}
function isNavigationFailure(e6, t12) {
  return e6 instanceof Error && hc in e6 && (null == t12 || !!(e6.type & t12));
}
function compareScoreArray(e6, t12) {
  let r11 = 0;
  for (; r11 < e6.length && r11 < t12.length; ) {
    const n5 = t12[r11] - e6[r11];
    if (n5) return n5;
    r11++;
  }
  return e6.length < t12.length ? 1 === e6.length && 80 === e6[0] ? -1 : 1 : e6.length > t12.length ? 1 === t12.length && 80 === t12[0] ? 1 : -1 : 0;
}
function comparePathParserScore(e6, t12) {
  let r11 = 0;
  const n5 = e6.score, o6 = t12.score;
  for (; r11 < n5.length && r11 < o6.length; ) {
    const e7 = compareScoreArray(n5[r11], o6[r11]);
    if (e7) return e7;
    r11++;
  }
  if (1 === Math.abs(o6.length - n5.length)) {
    if (isLastScoreNegative(n5)) return 1;
    if (isLastScoreNegative(o6)) return -1;
  }
  return o6.length - n5.length;
}
function isLastScoreNegative(e6) {
  const t12 = e6[e6.length - 1];
  return e6.length > 0 && t12[t12.length - 1] < 0;
}
function createRouteRecordMatcher(e6, t12, r11) {
  const n5 = function(e7, t13) {
    const r12 = zl({}, bc, t13), n6 = [];
    let o7 = r12.start ? "^" : "";
    const i6 = [];
    for (const t14 of e7) {
      const e8 = t14.length ? [] : [90];
      r12.strict && !t14.length && (o7 += "/");
      for (let n7 = 0; n7 < t14.length; n7++) {
        const a8 = t14[n7];
        let h6 = 40 + (r12.sensitive ? 0.25 : 0);
        if (0 === a8.type) n7 || (o7 += "/"), o7 += a8.value.replace(yc, "\\$&"), h6 += 40;
        else if (1 === a8.type) {
          const { value: e9, repeatable: r13, optional: m5, regexp: _3 } = a8;
          i6.push({ name: e9, repeatable: r13, optional: m5 });
          const S3 = _3 || gc;
          if (S3 !== gc) {
            h6 += 10;
            try {
              new RegExp(`(${S3})`);
            } catch (t15) {
              throw new Error(`Invalid custom RegExp for param "${e9}" (${S3}): ` + t15.message);
            }
          }
          let E4 = r13 ? `((?:${S3})(?:/(?:${S3}))*)` : `(${S3})`;
          n7 || (E4 = m5 && t14.length < 2 ? `(?:/${E4})` : "/" + E4), m5 && (E4 += "?"), o7 += E4, h6 += 20, m5 && (h6 += -8), r13 && (h6 += -20), ".*" === S3 && (h6 += -50);
        }
        e8.push(h6);
      }
      n6.push(e8);
    }
    if (r12.strict && r12.end) {
      const e8 = n6.length - 1;
      n6[e8][n6[e8].length - 1] += 0.7000000000000001;
    }
    r12.strict || (o7 += "/?"), r12.end ? o7 += "$" : r12.strict && !o7.endsWith("/") && (o7 += "(?:/|$)");
    const a7 = new RegExp(o7, r12.sensitive ? "" : "i");
    return { re: a7, score: n6, keys: i6, parse: /* @__PURE__ */ __name(function(e8) {
      const t14 = e8.match(a7), r13 = {};
      if (!t14) return null;
      for (let e9 = 1; e9 < t14.length; e9++) {
        const n7 = t14[e9] || "", o8 = i6[e9 - 1];
        r13[o8.name] = n7 && o8.repeatable ? n7.split("/") : n7;
      }
      return r13;
    }, "parse"), stringify: /* @__PURE__ */ __name(function(t14) {
      let r13 = "", n7 = false;
      for (const o8 of e7) {
        n7 && r13.endsWith("/") || (r13 += "/"), n7 = false;
        for (const e8 of o8) if (0 === e8.type) r13 += e8.value;
        else if (1 === e8.type) {
          const { value: i7, repeatable: a8, optional: h6 } = e8, m5 = i7 in t14 ? t14[i7] : "";
          if (Xl(m5) && !a8) throw new Error(`Provided param "${i7}" is an array but it is not repeatable (* or + modifiers)`);
          const _3 = Xl(m5) ? m5.join("/") : m5;
          if (!_3) {
            if (!h6) throw new Error(`Missing required param "${i7}"`);
            o8.length < 2 && (r13.endsWith("/") ? r13 = r13.slice(0, -1) : n7 = true);
          }
          r13 += _3;
        }
      }
      return r13 || "/";
    }, "stringify") };
  }(function(e7) {
    if (!e7) return [[]];
    if ("/" === e7) return [[_c]];
    if (!e7.startsWith("/")) throw new Error(`Invalid path "${e7}"`);
    function crash(e8) {
      throw new Error(`ERR (${t13})/"${h6}": ${e8}`);
    }
    __name(crash, "crash");
    let t13 = 0, r12 = t13;
    const n6 = [];
    let o7;
    function finalizeSegment() {
      o7 && n6.push(o7), o7 = [];
    }
    __name(finalizeSegment, "finalizeSegment");
    let i6, a7 = 0, h6 = "", m5 = "";
    function consumeBuffer() {
      h6 && (0 === t13 ? o7.push({ type: 0, value: h6 }) : 1 === t13 || 2 === t13 || 3 === t13 ? (o7.length > 1 && ("*" === i6 || "+" === i6) && crash(`A repeatable param (${h6}) must be alone in its segment. eg: '/:ids+.`), o7.push({ type: 1, value: h6, regexp: m5, repeatable: "*" === i6 || "+" === i6, optional: "*" === i6 || "?" === i6 })) : crash("Invalid state to consume buffer"), h6 = "");
    }
    __name(consumeBuffer, "consumeBuffer");
    function addCharToBuffer() {
      h6 += i6;
    }
    __name(addCharToBuffer, "addCharToBuffer");
    for (; a7 < e7.length; ) if (i6 = e7[a7++], "\\" !== i6 || 2 === t13) switch (t13) {
      case 0:
        "/" === i6 ? (h6 && consumeBuffer(), finalizeSegment()) : ":" === i6 ? (consumeBuffer(), t13 = 1) : addCharToBuffer();
        break;
      case 4:
        addCharToBuffer(), t13 = r12;
        break;
      case 1:
        "(" === i6 ? t13 = 2 : Sc.test(i6) ? addCharToBuffer() : (consumeBuffer(), t13 = 0, "*" !== i6 && "?" !== i6 && "+" !== i6 && a7--);
        break;
      case 2:
        ")" === i6 ? "\\" == m5[m5.length - 1] ? m5 = m5.slice(0, -1) + i6 : t13 = 3 : m5 += i6;
        break;
      case 3:
        consumeBuffer(), t13 = 0, "*" !== i6 && "?" !== i6 && "+" !== i6 && a7--, m5 = "";
        break;
      default:
        crash("Unknown state");
    }
    else r12 = t13, t13 = 4;
    return 2 === t13 && crash(`Unfinished custom RegExp for param "${h6}"`), consumeBuffer(), finalizeSegment(), n6;
  }(e6.path), r11), o6 = zl(n5, { record: e6, parent: t12, children: [], alias: [] });
  return t12 && !o6.record.aliasOf == !t12.record.aliasOf && t12.children.push(o6), o6;
}
function createRouterMatcher(e6, t12) {
  const r11 = [], n5 = /* @__PURE__ */ new Map();
  function addRoute(e7, r12, n6) {
    const o6 = !n6, i6 = normalizeRouteRecord(e7);
    i6.aliasOf = n6 && n6.record;
    const a7 = mergeOptions(t12, e7), h6 = [i6];
    if ("alias" in e7) {
      const t13 = "string" == typeof e7.alias ? [e7.alias] : e7.alias;
      for (const e8 of t13) h6.push(normalizeRouteRecord(zl({}, i6, { components: n6 ? n6.record.components : i6.components, path: e8, aliasOf: n6 ? n6.record : i6 })));
    }
    let m5, _3;
    for (const t13 of h6) {
      const { path: h7 } = t13;
      if (r12 && "/" !== h7[0]) {
        const e8 = r12.record.path, n7 = "/" === e8[e8.length - 1] ? "" : "/";
        t13.path = r12.record.path + (h7 && n7 + h7);
      }
      if (m5 = createRouteRecordMatcher(t13, r12, a7), n6 ? n6.alias.push(m5) : (_3 = _3 || m5, _3 !== m5 && _3.alias.push(m5), o6 && e7.name && !isAliasRecord(m5) && removeRoute(e7.name)), isMatchable(m5) && insertMatcher(m5), i6.children) {
        const e8 = i6.children;
        for (let t14 = 0; t14 < e8.length; t14++) addRoute(e8[t14], m5, n6 && n6.children[t14]);
      }
      n6 = n6 || m5;
    }
    return _3 ? () => {
      removeRoute(_3);
    } : noop;
  }
  __name(addRoute, "addRoute");
  function removeRoute(e7) {
    if (isRouteName(e7)) {
      const t13 = n5.get(e7);
      t13 && (n5.delete(e7), r11.splice(r11.indexOf(t13), 1), t13.children.forEach(removeRoute), t13.alias.forEach(removeRoute));
    } else {
      const t13 = r11.indexOf(e7);
      t13 > -1 && (r11.splice(t13, 1), e7.record.name && n5.delete(e7.record.name), e7.children.forEach(removeRoute), e7.alias.forEach(removeRoute));
    }
  }
  __name(removeRoute, "removeRoute");
  function insertMatcher(e7) {
    const t13 = function(e8, t14) {
      let r12 = 0, n6 = t14.length;
      for (; r12 !== n6; ) {
        const o7 = r12 + n6 >> 1;
        comparePathParserScore(e8, t14[o7]) < 0 ? n6 = o7 : r12 = o7 + 1;
      }
      const o6 = function(e9) {
        let t15 = e9;
        for (; t15 = t15.parent; ) if (isMatchable(t15) && 0 === comparePathParserScore(e9, t15)) return t15;
        return;
      }(e8);
      o6 && (n6 = t14.lastIndexOf(o6, n6 - 1));
      return n6;
    }(e7, r11);
    r11.splice(t13, 0, e7), e7.record.name && !isAliasRecord(e7) && n5.set(e7.record.name, e7);
  }
  __name(insertMatcher, "insertMatcher");
  return t12 = mergeOptions({ strict: false, end: true, sensitive: false }, t12), e6.forEach((e7) => addRoute(e7)), { addRoute, resolve: /* @__PURE__ */ __name(function(e7, t13) {
    let o6, i6, a7, h6 = {};
    if ("name" in e7 && e7.name) {
      if (o6 = n5.get(e7.name), !o6) throw createRouterError(1, { location: e7 });
      a7 = o6.record.name, h6 = zl(paramsFromLocation(t13.params, o6.keys.filter((e8) => !e8.optional).concat(o6.parent ? o6.parent.keys.filter((e8) => e8.optional) : []).map((e8) => e8.name)), e7.params && paramsFromLocation(e7.params, o6.keys.map((e8) => e8.name))), i6 = o6.stringify(h6);
    } else if (null != e7.path) i6 = e7.path, o6 = r11.find((e8) => e8.re.test(i6)), o6 && (h6 = o6.parse(i6), a7 = o6.record.name);
    else {
      if (o6 = t13.name ? n5.get(t13.name) : r11.find((e8) => e8.re.test(t13.path)), !o6) throw createRouterError(1, { location: e7, currentLocation: t13 });
      a7 = o6.record.name, h6 = zl({}, t13.params, e7.params), i6 = o6.stringify(h6);
    }
    const m5 = [];
    let _3 = o6;
    for (; _3; ) m5.unshift(_3.record), _3 = _3.parent;
    return { name: a7, path: i6, params: h6, matched: m5, meta: mergeMetaFields(m5) };
  }, "resolve"), removeRoute, clearRoutes: /* @__PURE__ */ __name(function() {
    r11.length = 0, n5.clear();
  }, "clearRoutes"), getRoutes: /* @__PURE__ */ __name(function() {
    return r11;
  }, "getRoutes"), getRecordMatcher: /* @__PURE__ */ __name(function(e7) {
    return n5.get(e7);
  }, "getRecordMatcher") };
}
function paramsFromLocation(e6, t12) {
  const r11 = {};
  for (const n5 of t12) n5 in e6 && (r11[n5] = e6[n5]);
  return r11;
}
function normalizeRouteRecord(e6) {
  const t12 = { path: e6.path, redirect: e6.redirect, name: e6.name, meta: e6.meta || {}, aliasOf: e6.aliasOf, beforeEnter: e6.beforeEnter, props: normalizeRecordProps(e6), children: e6.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e6 ? e6.components || null : e6.component && { default: e6.component } };
  return Object.defineProperty(t12, "mods", { value: {} }), t12;
}
function normalizeRecordProps(e6) {
  const t12 = {}, r11 = e6.props || false;
  if ("component" in e6) t12.default = r11;
  else for (const n5 in e6.components) t12[n5] = "object" == typeof r11 ? r11[n5] : r11;
  return t12;
}
function isAliasRecord(e6) {
  for (; e6; ) {
    if (e6.record.aliasOf) return true;
    e6 = e6.parent;
  }
  return false;
}
function mergeMetaFields(e6) {
  return e6.reduce((e7, t12) => zl(e7, t12.meta), {});
}
function mergeOptions(e6, t12) {
  const r11 = {};
  for (const n5 in e6) r11[n5] = n5 in t12 ? t12[n5] : e6[n5];
  return r11;
}
function isMatchable({ record: e6 }) {
  return !!(e6.name || e6.components && Object.keys(e6.components).length || e6.redirect);
}
function parseQuery2(e6) {
  const t12 = {};
  if ("" === e6 || "?" === e6) return t12;
  const r11 = ("?" === e6[0] ? e6.slice(1) : e6).split("&");
  for (let e7 = 0; e7 < r11.length; ++e7) {
    const n5 = r11[e7].replace(Zl, " "), o6 = n5.indexOf("="), i6 = decode(o6 < 0 ? n5 : n5.slice(0, o6)), a7 = o6 < 0 ? null : decode(n5.slice(o6 + 1));
    if (i6 in t12) {
      let e8 = t12[i6];
      Xl(e8) || (e8 = t12[i6] = [e8]), e8.push(a7);
    } else t12[i6] = a7;
  }
  return t12;
}
function stringifyQuery(e6) {
  let t12 = "";
  for (let r11 in e6) {
    const n5 = e6[r11];
    if (r11 = encodeQueryKey(r11), null == n5) {
      void 0 !== n5 && (t12 += (t12.length ? "&" : "") + r11);
      continue;
    }
    (Xl(n5) ? n5.map((e7) => e7 && encodeQueryValue(e7)) : [n5 && encodeQueryValue(n5)]).forEach((e7) => {
      void 0 !== e7 && (t12 += (t12.length ? "&" : "") + r11, null != e7 && (t12 += "=" + e7));
    });
  }
  return t12;
}
function normalizeQuery(e6) {
  const t12 = {};
  for (const r11 in e6) {
    const n5 = e6[r11];
    void 0 !== n5 && (t12[r11] = Xl(n5) ? n5.map((e7) => null == e7 ? null : "" + e7) : null == n5 ? n5 : "" + n5);
  }
  return t12;
}
function useCallbacks() {
  let e6 = [];
  return { add: /* @__PURE__ */ __name(function(t12) {
    return e6.push(t12), () => {
      const r11 = e6.indexOf(t12);
      r11 > -1 && e6.splice(r11, 1);
    };
  }, "add"), list: /* @__PURE__ */ __name(() => e6.slice(), "list"), reset: /* @__PURE__ */ __name(function() {
    e6 = [];
  }, "reset") };
}
function guardToPromiseFn(e6, t12, r11, n5, o6, i6 = (e7) => e7()) {
  const a7 = n5 && (n5.enterCallbacks[o6] = n5.enterCallbacks[o6] || []);
  return () => new Promise((h6, m5) => {
    const next = /* @__PURE__ */ __name((e7) => {
      var i7;
      false === e7 ? m5(createRouterError(4, { from: r11, to: t12 })) : e7 instanceof Error ? m5(e7) : "string" == typeof (i7 = e7) || i7 && "object" == typeof i7 ? m5(createRouterError(2, { from: t12, to: e7 })) : (a7 && n5.enterCallbacks[o6] === a7 && "function" == typeof e7 && a7.push(e7), h6());
    }, "next"), _3 = i6(() => e6.call(n5 && n5.instances[o6], t12, r11, next));
    let S3 = Promise.resolve(_3);
    e6.length < 3 && (S3 = S3.then(next)), S3.catch((e7) => m5(e7));
  });
}
function extractComponentsGuards(e6, t12, r11, n5, o6 = (e7) => e7()) {
  const i6 = [];
  for (const a7 of e6) for (const e7 in a7.components) {
    let h6 = a7.components[e7];
    if ("beforeRouteEnter" === t12 || a7.instances[e7]) if (isRouteComponent(h6)) {
      const m5 = (h6.__vccOpts || h6)[t12];
      m5 && i6.push(guardToPromiseFn(m5, r11, n5, a7, e7, o6));
    } else {
      let m5 = h6();
      i6.push(() => m5.then((i7) => {
        if (!i7) throw new Error(`Couldn't resolve component "${e7}" at "${a7.path}"`);
        const h7 = (m6 = i7).__esModule || "Module" === m6[Symbol.toStringTag] || m6.default && isRouteComponent(m6.default) ? i7.default : i7;
        var m6;
        a7.mods[e7] = i7, a7.components[e7] = h7;
        const _3 = (h7.__vccOpts || h7)[t12];
        return _3 && guardToPromiseFn(_3, r11, n5, a7, e7, o6)();
      }));
    }
  }
  return i6;
}
function useLink(e6) {
  const t12 = inject(Tc), r11 = inject(Cc), n5 = computed(() => {
    const r12 = unref(e6.to);
    return t12.resolve(r12);
  }), o6 = computed(() => {
    const { matched: e7 } = n5.value, { length: t13 } = e7, o7 = e7[t13 - 1], i7 = r11.matched;
    if (!o7 || !i7.length) return -1;
    const a8 = i7.findIndex(isSameRouteRecord.bind(null, o7));
    if (a8 > -1) return a8;
    const h6 = getOriginalPath(e7[t13 - 2]);
    return t13 > 1 && getOriginalPath(o7) === h6 && i7[i7.length - 1].path !== h6 ? i7.findIndex(isSameRouteRecord.bind(null, e7[t13 - 2])) : a8;
  }), i6 = computed(() => o6.value > -1 && function(e7, t13) {
    for (const r12 in t13) {
      const n6 = t13[r12], o7 = e7[r12];
      if ("string" == typeof n6) {
        if (n6 !== o7) return false;
      } else if (!Xl(o7) || o7.length !== n6.length || n6.some((e8, t14) => e8 !== o7[t14])) return false;
    }
    return true;
  }(r11.params, n5.value.params)), a7 = computed(() => o6.value > -1 && o6.value === r11.matched.length - 1 && isSameRouteLocationParams(r11.params, n5.value.params));
  return { route: n5, href: computed(() => n5.value.href), isActive: i6, isExactActive: a7, navigate: /* @__PURE__ */ __name(function(r12 = {}) {
    if (function(e7) {
      if (e7.metaKey || e7.altKey || e7.ctrlKey || e7.shiftKey) return;
      if (e7.defaultPrevented) return;
      if (void 0 !== e7.button && 0 !== e7.button) return;
      if (e7.currentTarget && e7.currentTarget.getAttribute) {
        const t13 = e7.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t13)) return;
      }
      e7.preventDefault && e7.preventDefault();
      return true;
    }(r12)) {
      const r13 = t12[unref(e6.replace) ? "replace" : "push"](unref(e6.to)).catch(noop);
      return e6.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition(() => r13), r13;
    }
    return Promise.resolve();
  }, "navigate") };
}
function getOriginalPath(e6) {
  return e6 ? e6.aliasOf ? e6.aliasOf.path : e6.path : "";
}
function normalizeSlot$1(e6, t12) {
  if (!e6) return null;
  const r11 = e6(t12);
  return 1 === r11.length ? r11[0] : r11;
}
function createRouter(e6) {
  const t12 = createRouterMatcher(e6.routes, e6), r11 = e6.parseQuery || parseQuery2, n5 = e6.stringifyQuery || stringifyQuery, o6 = e6.history, i6 = useCallbacks(), a7 = useCallbacks(), h6 = useCallbacks(), m5 = shallowRef(cc);
  let _3 = cc;
  Hl && e6.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const S3 = applyToParams.bind(null, (e7) => "" + e7), E4 = applyToParams.bind(null, encodeParam), v6 = applyToParams.bind(null, decode);
  function resolve2(e7, i7) {
    if (i7 = zl({}, i7 || m5.value), "string" == typeof e7) {
      const n6 = parseURL(r11, e7, i7.path), a9 = t12.resolve({ path: n6.path }, i7), h8 = o6.createHref(n6.fullPath);
      return zl(n6, a9, { params: v6(a9.params), hash: decode(n6.hash), redirectedFrom: void 0, href: h8 });
    }
    let a8;
    if (null != e7.path) a8 = zl({}, e7, { path: parseURL(r11, e7.path, i7.path).path });
    else {
      const t13 = zl({}, e7.params);
      for (const e8 in t13) null == t13[e8] && delete t13[e8];
      a8 = zl({}, e7, { params: E4(t13) }), i7.params = E4(i7.params);
    }
    const h7 = t12.resolve(a8, i7), _4 = e7.hash || "";
    h7.params = S3(v6(h7.params));
    const T4 = function(e8, t13) {
      const r12 = t13.query ? e8(t13.query) : "";
      return t13.path + (r12 && "?") + r12 + (t13.hash || "");
    }(n5, zl({}, e7, { hash: (w5 = _4, commonEncode(w5).replace(oc, "{").replace(ic, "}").replace(rc, "^")), path: h7.path }));
    var w5;
    const N4 = o6.createHref(T4);
    return zl({ fullPath: T4, hash: _4, query: n5 === stringifyQuery ? normalizeQuery(e7.query) : e7.query || {} }, h7, { redirectedFrom: void 0, href: N4 });
  }
  __name(resolve2, "resolve");
  function locationAsObject(e7) {
    return "string" == typeof e7 ? parseURL(r11, e7, m5.value.path) : zl({}, e7);
  }
  __name(locationAsObject, "locationAsObject");
  function checkCanceledNavigation(e7, t13) {
    if (_3 !== e7) return createRouterError(8, { from: t13, to: e7 });
  }
  __name(checkCanceledNavigation, "checkCanceledNavigation");
  function push(e7) {
    return pushWithRedirect(e7);
  }
  __name(push, "push");
  function handleRedirectRecord(e7) {
    const t13 = e7.matched[e7.matched.length - 1];
    if (t13 && t13.redirect) {
      const { redirect: r12 } = t13;
      let n6 = "function" == typeof r12 ? r12(e7) : r12;
      return "string" == typeof n6 && (n6 = n6.includes("?") || n6.includes("#") ? n6 = locationAsObject(n6) : { path: n6 }, n6.params = {}), zl({ query: e7.query, hash: e7.hash, params: null != n6.path ? {} : e7.params }, n6);
    }
  }
  __name(handleRedirectRecord, "handleRedirectRecord");
  function pushWithRedirect(e7, t13) {
    const r12 = _3 = resolve2(e7), o7 = m5.value, i7 = e7.state, a8 = e7.force, h7 = true === e7.replace, S4 = handleRedirectRecord(r12);
    if (S4) return pushWithRedirect(zl(locationAsObject(S4), { state: "object" == typeof S4 ? zl({}, i7, S4.state) : i7, force: a8, replace: h7 }), t13 || r12);
    const E5 = r12;
    let v7;
    return E5.redirectedFrom = t13, !a8 && function(e8, t14, r13) {
      const n6 = t14.matched.length - 1, o8 = r13.matched.length - 1;
      return n6 > -1 && n6 === o8 && isSameRouteRecord(t14.matched[n6], r13.matched[o8]) && isSameRouteLocationParams(t14.params, r13.params) && e8(t14.query) === e8(r13.query) && t14.hash === r13.hash;
    }(n5, o7, r12) && (v7 = createRouterError(16, { to: E5, from: o7 }), handleScroll(o7, o7, true, false)), (v7 ? Promise.resolve(v7) : navigate(E5, o7)).catch((e8) => isNavigationFailure(e8) ? isNavigationFailure(e8, 2) ? e8 : markAsReady(e8) : triggerError(e8, E5, o7)).then((e8) => {
      if (e8) {
        if (isNavigationFailure(e8, 2)) return pushWithRedirect(zl({ replace: h7 }, locationAsObject(e8.to), { state: "object" == typeof e8.to ? zl({}, i7, e8.to.state) : i7, force: a8 }), t13 || E5);
      } else e8 = finalizeNavigation(E5, o7, true, h7, i7);
      return triggerAfterEach(E5, o7, e8), e8;
    });
  }
  __name(pushWithRedirect, "pushWithRedirect");
  function checkCanceledNavigationAndReject(e7, t13) {
    const r12 = checkCanceledNavigation(e7, t13);
    return r12 ? Promise.reject(r12) : Promise.resolve();
  }
  __name(checkCanceledNavigationAndReject, "checkCanceledNavigationAndReject");
  function runWithContext(e7) {
    const t13 = D3.values().next().value;
    return t13 && "function" == typeof t13.runWithContext ? t13.runWithContext(e7) : e7();
  }
  __name(runWithContext, "runWithContext");
  function navigate(e7, t13) {
    let r12;
    const [n6, o7, h7] = function(e8, t14) {
      const r13 = [], n7 = [], o8 = [], i7 = Math.max(t14.matched.length, e8.matched.length);
      for (let a8 = 0; a8 < i7; a8++) {
        const i8 = t14.matched[a8];
        i8 && (e8.matched.find((e9) => isSameRouteRecord(e9, i8)) ? n7.push(i8) : r13.push(i8));
        const h8 = e8.matched[a8];
        h8 && (t14.matched.find((e9) => isSameRouteRecord(e9, h8)) || o8.push(h8));
      }
      return [r13, n7, o8];
    }(e7, t13);
    r12 = extractComponentsGuards(n6.reverse(), "beforeRouteLeave", e7, t13);
    for (const o8 of n6) o8.leaveGuards.forEach((n7) => {
      r12.push(guardToPromiseFn(n7, e7, t13));
    });
    const m6 = checkCanceledNavigationAndReject.bind(null, e7, t13);
    return r12.push(m6), runGuardQueue(r12).then(() => {
      r12 = [];
      for (const n7 of i6.list()) r12.push(guardToPromiseFn(n7, e7, t13));
      return r12.push(m6), runGuardQueue(r12);
    }).then(() => {
      r12 = extractComponentsGuards(o7, "beforeRouteUpdate", e7, t13);
      for (const n7 of o7) n7.updateGuards.forEach((n8) => {
        r12.push(guardToPromiseFn(n8, e7, t13));
      });
      return r12.push(m6), runGuardQueue(r12);
    }).then(() => {
      r12 = [];
      for (const n7 of h7) if (n7.beforeEnter) if (Xl(n7.beforeEnter)) for (const o8 of n7.beforeEnter) r12.push(guardToPromiseFn(o8, e7, t13));
      else r12.push(guardToPromiseFn(n7.beforeEnter, e7, t13));
      return r12.push(m6), runGuardQueue(r12);
    }).then(() => (e7.matched.forEach((e8) => e8.enterCallbacks = {}), r12 = extractComponentsGuards(h7, "beforeRouteEnter", e7, t13, runWithContext), r12.push(m6), runGuardQueue(r12))).then(() => {
      r12 = [];
      for (const n7 of a7.list()) r12.push(guardToPromiseFn(n7, e7, t13));
      return r12.push(m6), runGuardQueue(r12);
    }).catch((e8) => isNavigationFailure(e8, 8) ? e8 : Promise.reject(e8));
  }
  __name(navigate, "navigate");
  function triggerAfterEach(e7, t13, r12) {
    h6.list().forEach((n6) => runWithContext(() => n6(e7, t13, r12)));
  }
  __name(triggerAfterEach, "triggerAfterEach");
  function finalizeNavigation(e7, t13, r12, n6, i7) {
    const a8 = checkCanceledNavigation(e7, t13);
    if (a8) return a8;
    const h7 = t13 === cc, _4 = Hl ? history.state : {};
    r12 && (n6 || h7 ? o6.replace(e7.fullPath, zl({ scroll: h7 && _4 && _4.scroll }, i7)) : o6.push(e7.fullPath, i7)), m5.value = e7, handleScroll(e7, t13, r12, h7), markAsReady();
  }
  __name(finalizeNavigation, "finalizeNavigation");
  let T3;
  function setupListeners() {
    T3 || (T3 = o6.listen((e7, t13, r12) => {
      if (!B2.listening) return;
      const n6 = resolve2(e7), i7 = handleRedirectRecord(n6);
      if (i7) return void pushWithRedirect(zl(i7, { replace: true, force: true }), n6).catch(noop);
      _3 = n6;
      const a8 = m5.value;
      var h7, S4;
      Hl && (h7 = getScrollKey(a8.fullPath, r12.delta), S4 = { left: window.scrollX, top: window.scrollY }, fc.set(h7, S4)), navigate(n6, a8).catch((e8) => isNavigationFailure(e8, 12) ? e8 : isNavigationFailure(e8, 2) ? (pushWithRedirect(zl(locationAsObject(e8.to), { force: true }), n6).then((e9) => {
        isNavigationFailure(e9, 20) && !r12.delta && r12.type === uc.pop && o6.go(-1, false);
      }).catch(noop), Promise.reject()) : (r12.delta && o6.go(-r12.delta, false), triggerError(e8, n6, a8))).then((e8) => {
        (e8 = e8 || finalizeNavigation(n6, a8, false)) && (r12.delta && !isNavigationFailure(e8, 8) ? o6.go(-r12.delta, false) : r12.type === uc.pop && isNavigationFailure(e8, 20) && o6.go(-1, false)), triggerAfterEach(n6, a8, e8);
      }).catch(noop);
    }));
  }
  __name(setupListeners, "setupListeners");
  let w4, N3 = useCallbacks(), L3 = useCallbacks();
  function triggerError(e7, t13, r12) {
    markAsReady(e7);
    const n6 = L3.list();
    return n6.length ? n6.forEach((n7) => n7(e7, t13, r12)) : console.error(e7), Promise.reject(e7);
  }
  __name(triggerError, "triggerError");
  function markAsReady(e7) {
    return w4 || (w4 = !e7, setupListeners(), N3.list().forEach(([t13, r12]) => e7 ? r12(e7) : t13()), N3.reset()), e7;
  }
  __name(markAsReady, "markAsReady");
  function handleScroll(t13, r12, n6, o7) {
    const { scrollBehavior: i7 } = e6;
    if (!Hl || !i7) return Promise.resolve();
    const a8 = !n6 && function(e7) {
      const t14 = fc.get(e7);
      return fc.delete(e7), t14;
    }(getScrollKey(t13.fullPath, 0)) || (o7 || !n6) && history.state && history.state.scroll || null;
    return nextTick2().then(() => i7(t13, r12, a8)).then((e7) => e7 && scrollToPosition(e7)).catch((e7) => triggerError(e7, t13, r12));
  }
  __name(handleScroll, "handleScroll");
  const go = /* @__PURE__ */ __name((e7) => o6.go(e7), "go");
  let M3;
  const D3 = /* @__PURE__ */ new Set(), B2 = { currentRoute: m5, listening: true, addRoute: /* @__PURE__ */ __name(function(e7, r12) {
    let n6, o7;
    return isRouteName(e7) ? (n6 = t12.getRecordMatcher(e7), o7 = r12) : o7 = e7, t12.addRoute(o7, n6);
  }, "addRoute"), removeRoute: /* @__PURE__ */ __name(function(e7) {
    const r12 = t12.getRecordMatcher(e7);
    r12 && t12.removeRoute(r12);
  }, "removeRoute"), clearRoutes: t12.clearRoutes, hasRoute: /* @__PURE__ */ __name(function(e7) {
    return !!t12.getRecordMatcher(e7);
  }, "hasRoute"), getRoutes: /* @__PURE__ */ __name(function() {
    return t12.getRoutes().map((e7) => e7.record);
  }, "getRoutes"), resolve: resolve2, options: e6, push, replace: /* @__PURE__ */ __name(function(e7) {
    return push(zl(locationAsObject(e7), { replace: true }));
  }, "replace"), go, back: /* @__PURE__ */ __name(() => go(-1), "back"), forward: /* @__PURE__ */ __name(() => go(1), "forward"), beforeEach: i6.add, beforeResolve: a7.add, afterEach: h6.add, onError: L3.add, isReady: /* @__PURE__ */ __name(function() {
    return w4 && m5.value !== cc ? Promise.resolve() : new Promise((e7, t13) => {
      N3.add([e7, t13]);
    });
  }, "isReady"), install(e7) {
    e7.component("RouterLink", Oc), e7.component("RouterView", Nc), e7.config.globalProperties.$router = this, Object.defineProperty(e7.config.globalProperties, "$route", { enumerable: true, get: /* @__PURE__ */ __name(() => unref(m5), "get") }), Hl && !M3 && m5.value === cc && (M3 = true, push(o6.location).catch((e8) => {
    }));
    const t13 = {};
    for (const e8 in cc) Object.defineProperty(t13, e8, { get: /* @__PURE__ */ __name(() => m5.value[e8], "get"), enumerable: true });
    e7.provide(Tc, this), e7.provide(Cc, shallowReactive(t13)), e7.provide(Rc, m5);
    const r12 = e7.unmount;
    D3.add(e7), e7.unmount = function() {
      D3.delete(e7), D3.size < 1 && (_3 = cc, T3 && T3(), T3 = null, m5.value = cc, M3 = false, w4 = false), r12();
    };
  } };
  function runGuardQueue(e7) {
    return e7.reduce((e8, t13) => e8.then(() => runWithContext(t13)), Promise.resolve());
  }
  __name(runGuardQueue, "runGuardQueue");
  return B2;
}
function useRoute$1(e6) {
  return inject(Cc);
}
function f3(e6) {
  return e6 && e6.__esModule && Object.prototype.hasOwnProperty.call(e6, "default") ? e6.default : e6;
}
function ts(e6) {
  if (!/^data:/i.test(e6)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  const t12 = (e6 = e6.replace(/\r?\n/g, "")).indexOf(",");
  if (-1 === t12 || t12 <= 4) throw new TypeError("malformed data: URI");
  const r11 = e6.substring(5, t12).split(";");
  let n5 = "", o6 = false;
  const i6 = r11[0] || "text/plain";
  let a7 = i6;
  for (let e7 = 1; e7 < r11.length; e7++) "base64" === r11[e7] ? o6 = true : r11[e7] && (a7 += `;${r11[e7]}`, 0 === r11[e7].indexOf("charset=") && (n5 = r11[e7].substring(8)));
  !r11[0] && !n5.length && (a7 += ";charset=US-ASCII", n5 = "US-ASCII");
  const h6 = o6 ? "base64" : "ascii", m5 = unescape(e6.substring(t12 + 1)), _3 = te.from(m5, h6);
  return _3.type = i6, _3.typeFull = a7, _3.charset = n5, _3;
}
function ns() {
  return Xc || (Xc = 1, function(e6) {
    function l5() {
    }
    __name(l5, "l");
    function u4(e7) {
      return "object" == typeof e7 && null !== e7 || "function" == typeof e7;
    }
    __name(u4, "u");
    n$1(l5, "noop"), n$1(u4, "typeIsObject");
    const t12 = l5;
    function h22(e7, t13) {
      try {
        Object.defineProperty(e7, "name", { value: t13, configurable: true });
      } catch {
      }
    }
    __name(h22, "h2");
    n$1(h22, "setFunctionName");
    const r11 = Promise, n5 = Promise.prototype.then, o6 = Promise.reject.bind(r11);
    function A4(e7) {
      return new r11(e7);
    }
    __name(A4, "A");
    function T22(e7) {
      return A4((t13) => t13(e7));
    }
    __name(T22, "T2");
    function b3(e7) {
      return o6(e7);
    }
    __name(b3, "b");
    function q2(e7, t13, r12) {
      return n5.call(e7, t13, r12);
    }
    __name(q2, "q");
    function g4(e7, r12, n6) {
      q2(q2(e7, r12, n6), void 0, t12);
    }
    __name(g4, "g");
    function V2(e7, t13) {
      g4(e7, t13);
    }
    __name(V2, "V");
    function I3(e7, t13) {
      g4(e7, void 0, t13);
    }
    __name(I3, "I");
    function F3(e7, t13, r12) {
      return q2(e7, t13, r12);
    }
    __name(F3, "F");
    function Q2(e7) {
      q2(e7, void 0, t12);
    }
    __name(Q2, "Q");
    n$1(A4, "newPromise"), n$1(T22, "promiseResolvedWith"), n$1(b3, "promiseRejectedWith"), n$1(q2, "PerformPromiseThen"), n$1(g4, "uponPromise"), n$1(V2, "uponFulfillment"), n$1(I3, "uponRejection"), n$1(F3, "transformPromiseWith"), n$1(Q2, "setPromiseIsHandledToTrue");
    let i6 = n$1((e7) => {
      if ("function" == typeof queueMicrotask) i6 = queueMicrotask;
      else {
        const e8 = T22(void 0);
        i6 = n$1((t13) => q2(e8, t13), "_queueMicrotask");
      }
      return i6(e7);
    }, "_queueMicrotask");
    function O3(e7, t13, r12) {
      if ("function" != typeof e7) throw new TypeError("Argument is not a function");
      return Function.prototype.apply.call(e7, t13, r12);
    }
    __name(O3, "O");
    function z3(e7, t13, r12) {
      try {
        return T22(O3(e7, t13, r12));
      } catch (e8) {
        return b3(e8);
      }
    }
    __name(z3, "z");
    n$1(O3, "reflectCall"), n$1(z3, "promiseCall");
    const a7 = 16384, h6 = class {
      static {
        __name(this, "h");
      }
      constructor() {
        this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
      }
      get length() {
        return this._size;
      }
      push(e7) {
        const t13 = this._back;
        let r12 = t13;
        t13._elements.length === a7 - 1 && (r12 = { _elements: [], _next: void 0 }), t13._elements.push(e7), r12 !== t13 && (this._back = r12, t13._next = r12), ++this._size;
      }
      shift() {
        const e7 = this._front;
        let t13 = e7;
        const r12 = this._cursor;
        let n6 = r12 + 1;
        const o7 = e7._elements, i7 = o7[r12];
        return n6 === a7 && (t13 = e7._next, n6 = 0), --this._size, this._cursor = n6, e7 !== t13 && (this._front = t13), o7[r12] = void 0, i7;
      }
      forEach(e7) {
        let t13 = this._cursor, r12 = this._front, n6 = r12._elements;
        for (; !(t13 === n6.length && void 0 === r12._next || t13 === n6.length && (r12 = r12._next, n6 = r12._elements, t13 = 0, 0 === n6.length)); ) e7(n6[t13]), ++t13;
      }
      peek() {
        const e7 = this._front, t13 = this._cursor;
        return e7._elements[t13];
      }
    };
    n$1(h6, "SimpleQueue");
    let m5 = h6;
    const _3 = Symbol("[[AbortSteps]]"), S3 = Symbol("[[ErrorSteps]]"), E4 = Symbol("[[CancelSteps]]"), v6 = Symbol("[[PullSteps]]"), T3 = Symbol("[[ReleaseSteps]]");
    function sn2(e7, t13) {
      e7._ownerReadableStream = t13, t13._reader = e7, "readable" === t13._state ? fr3(e7) : "closed" === t13._state ? ri(e7) : un2(e7, t13._storedError);
    }
    __name(sn2, "sn");
    function lr3(e7, t13) {
      return X2(e7._ownerReadableStream, t13);
    }
    __name(lr3, "lr");
    function ue3(e7) {
      const t13 = e7._ownerReadableStream;
      "readable" === t13._state ? cr3(e7, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : ni(e7, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t13._readableStreamController[T3](), t13._reader = void 0, e7._ownerReadableStream = void 0;
    }
    __name(ue3, "ue");
    function yt3(e7) {
      return new TypeError("Cannot " + e7 + " a stream using a released reader");
    }
    __name(yt3, "yt");
    function fr3(e7) {
      e7._closedPromise = A4((t13, r12) => {
        e7._closedPromise_resolve = t13, e7._closedPromise_reject = r12;
      });
    }
    __name(fr3, "fr");
    function un2(e7, t13) {
      fr3(e7), cr3(e7, t13);
    }
    __name(un2, "un");
    function ri(e7) {
      fr3(e7), ln2(e7);
    }
    __name(ri, "ri");
    function cr3(e7, t13) {
      void 0 !== e7._closedPromise_reject && (Q2(e7._closedPromise), e7._closedPromise_reject(t13), e7._closedPromise_resolve = void 0, e7._closedPromise_reject = void 0);
    }
    __name(cr3, "cr");
    function ni(e7, t13) {
      un2(e7, t13);
    }
    __name(ni, "ni");
    function ln2(e7) {
      void 0 !== e7._closedPromise_resolve && (e7._closedPromise_resolve(void 0), e7._closedPromise_resolve = void 0, e7._closedPromise_reject = void 0);
    }
    __name(ln2, "ln");
    n$1(sn2, "ReadableStreamReaderGenericInitialize"), n$1(lr3, "ReadableStreamReaderGenericCancel"), n$1(ue3, "ReadableStreamReaderGenericRelease"), n$1(yt3, "readerLockException"), n$1(fr3, "defaultReaderClosedPromiseInitialize"), n$1(un2, "defaultReaderClosedPromiseInitializeAsRejected"), n$1(ri, "defaultReaderClosedPromiseInitializeAsResolved"), n$1(cr3, "defaultReaderClosedPromiseReject"), n$1(ni, "defaultReaderClosedPromiseResetToRejected"), n$1(ln2, "defaultReaderClosedPromiseResolve");
    const w4 = Number.isFinite || function(e7) {
      return "number" == typeof e7 && isFinite(e7);
    }, N3 = Math.trunc || function(e7) {
      return e7 < 0 ? Math.ceil(e7) : Math.floor(e7);
    };
    function ii(e7) {
      return "object" == typeof e7 || "function" == typeof e7;
    }
    __name(ii, "ii");
    function ne2(e7, t13) {
      if (void 0 !== e7 && !ii(e7)) throw new TypeError(`${t13} is not an object.`);
    }
    __name(ne2, "ne");
    function G2(e7, t13) {
      if ("function" != typeof e7) throw new TypeError(`${t13} is not a function.`);
    }
    __name(G2, "G");
    function ai(e7) {
      return "object" == typeof e7 && null !== e7 || "function" == typeof e7;
    }
    __name(ai, "ai");
    function cn2(e7, t13) {
      if (!ai(e7)) throw new TypeError(`${t13} is not an object.`);
    }
    __name(cn2, "cn");
    function le2(e7, t13, r12) {
      if (void 0 === e7) throw new TypeError(`Parameter ${t13} is required in '${r12}'.`);
    }
    __name(le2, "le");
    function dr3(e7, t13, r12) {
      if (void 0 === e7) throw new TypeError(`${t13} is required in '${r12}'.`);
    }
    __name(dr3, "dr");
    function hr3(e7) {
      return Number(e7);
    }
    __name(hr3, "hr");
    function dn2(e7) {
      return 0 === e7 ? 0 : e7;
    }
    __name(dn2, "dn");
    function si(e7) {
      return dn2(N3(e7));
    }
    __name(si, "si");
    function mr3(e7, t13) {
      const r12 = Number.MAX_SAFE_INTEGER;
      let n6 = Number(e7);
      if (n6 = dn2(n6), !w4(n6)) throw new TypeError(`${t13} is not a finite number`);
      if (n6 = si(n6), n6 < 0 || n6 > r12) throw new TypeError(`${t13} is outside the accepted range of 0 to ${r12}, inclusive`);
      return w4(n6) && 0 !== n6 ? n6 : 0;
    }
    __name(mr3, "mr");
    function br3(e7, t13) {
      if (!Te3(e7)) throw new TypeError(`${t13} is not a ReadableStream.`);
    }
    __name(br3, "br");
    function ze3(e7) {
      return new M3(e7);
    }
    __name(ze3, "ze");
    function hn2(e7, t13) {
      e7._reader._readRequests.push(t13);
    }
    __name(hn2, "hn");
    function pr3(e7, t13, r12) {
      const n6 = e7._reader._readRequests.shift();
      r12 ? n6._closeSteps() : n6._chunkSteps(t13);
    }
    __name(pr3, "pr");
    function gt3(e7) {
      return e7._reader._readRequests.length;
    }
    __name(gt3, "gt");
    function mn2(e7) {
      const t13 = e7._reader;
      return !(void 0 === t13 || !ge3(t13));
    }
    __name(mn2, "mn");
    n$1(ii, "isDictionary"), n$1(ne2, "assertDictionary"), n$1(G2, "assertFunction"), n$1(ai, "isObject"), n$1(cn2, "assertObject"), n$1(le2, "assertRequiredArgument"), n$1(dr3, "assertRequiredField"), n$1(hr3, "convertUnrestrictedDouble"), n$1(dn2, "censorNegativeZero"), n$1(si, "integerPart"), n$1(mr3, "convertUnsignedLongLongWithEnforceRange"), n$1(br3, "assertReadableStream"), n$1(ze3, "AcquireReadableStreamDefaultReader"), n$1(hn2, "ReadableStreamAddReadRequest"), n$1(pr3, "ReadableStreamFulfillReadRequest"), n$1(gt3, "ReadableStreamGetNumReadRequests"), n$1(mn2, "ReadableStreamHasDefaultReader");
    const L3 = class {
      static {
        __name(this, "L");
      }
      constructor(e7) {
        if (le2(e7, 1, "ReadableStreamDefaultReader"), br3(e7, "First parameter"), Ce3(e7)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        sn2(this, e7), this._readRequests = new m5();
      }
      get closed() {
        return ge3(this) ? this._closedPromise : b3(_t4("closed"));
      }
      cancel(e7 = void 0) {
        return ge3(this) ? void 0 === this._ownerReadableStream ? b3(yt3("cancel")) : lr3(this, e7) : b3(_t4("cancel"));
      }
      read() {
        if (!ge3(this)) return b3(_t4("read"));
        if (void 0 === this._ownerReadableStream) return b3(yt3("read from"));
        let e7, t13;
        const r12 = A4((r13, n6) => {
          e7 = r13, t13 = n6;
        });
        return et3(this, { _chunkSteps: n$1((t14) => e7({ value: t14, done: false }), "_chunkSteps"), _closeSteps: n$1(() => e7({ value: void 0, done: true }), "_closeSteps"), _errorSteps: n$1((e8) => t13(e8), "_errorSteps") }), r12;
      }
      releaseLock() {
        if (!ge3(this)) throw _t4("releaseLock");
        void 0 !== this._ownerReadableStream && ui(this);
      }
    };
    n$1(L3, "ReadableStreamDefaultReader");
    let M3 = L3;
    function ge3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_readRequests")) && e7 instanceof M3;
    }
    __name(ge3, "ge");
    function et3(e7, t13) {
      const r12 = e7._ownerReadableStream;
      r12._disturbed = true, "closed" === r12._state ? t13._closeSteps() : "errored" === r12._state ? t13._errorSteps(r12._storedError) : r12._readableStreamController[v6](t13);
    }
    __name(et3, "et");
    function ui(e7) {
      ue3(e7), bn2(e7, new TypeError("Reader was released"));
    }
    __name(ui, "ui");
    function bn2(e7, t13) {
      const r12 = e7._readRequests;
      e7._readRequests = new m5(), r12.forEach((e8) => {
        e8._errorSteps(t13);
      });
    }
    __name(bn2, "bn");
    function _t4(e7) {
      return new TypeError(`ReadableStreamDefaultReader.prototype.${e7} can only be used on a ReadableStreamDefaultReader`);
    }
    __name(_t4, "_t4");
    Object.defineProperties(M3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h22(M3.prototype.cancel, "cancel"), h22(M3.prototype.read, "read"), h22(M3.prototype.releaseLock, "releaseLock"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(M3.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true }), n$1(ge3, "IsReadableStreamDefaultReader"), n$1(et3, "ReadableStreamDefaultReaderRead"), n$1(ui, "ReadableStreamDefaultReaderRelease"), n$1(bn2, "ReadableStreamDefaultReaderErrorReadRequests"), n$1(_t4, "defaultReaderBrandCheckException");
    const D3 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
    }).prototype), B2 = class {
      static {
        __name(this, "B");
      }
      constructor(e7, t13) {
        this._ongoingPromise = void 0, this._isFinished = false, this._reader = e7, this._preventCancel = t13;
      }
      next() {
        const e7 = n$1(() => this._nextSteps(), "nextSteps");
        return this._ongoingPromise = this._ongoingPromise ? F3(this._ongoingPromise, e7, e7) : e7(), this._ongoingPromise;
      }
      return(e7) {
        const t13 = n$1(() => this._returnSteps(e7), "returnSteps");
        return this._ongoingPromise ? F3(this._ongoingPromise, t13, t13) : t13();
      }
      _nextSteps() {
        if (this._isFinished) return Promise.resolve({ value: void 0, done: true });
        const e7 = this._reader;
        let t13, r12;
        const n6 = A4((e8, n7) => {
          t13 = e8, r12 = n7;
        });
        return et3(e7, { _chunkSteps: n$1((e8) => {
          this._ongoingPromise = void 0, i6(() => t13({ value: e8, done: false }));
        }, "_chunkSteps"), _closeSteps: n$1(() => {
          this._ongoingPromise = void 0, this._isFinished = true, ue3(e7), t13({ value: void 0, done: true });
        }, "_closeSteps"), _errorSteps: n$1((t14) => {
          this._ongoingPromise = void 0, this._isFinished = true, ue3(e7), r12(t14);
        }, "_errorSteps") }), n6;
      }
      _returnSteps(e7) {
        if (this._isFinished) return Promise.resolve({ value: e7, done: true });
        this._isFinished = true;
        const t13 = this._reader;
        if (!this._preventCancel) {
          const r12 = lr3(t13, e7);
          return ue3(t13), F3(r12, () => ({ value: e7, done: true }));
        }
        return ue3(t13), T22({ value: e7, done: true });
      }
    };
    n$1(B2, "ReadableStreamAsyncIteratorImpl");
    let j3 = B2;
    const $3 = { next() {
      return gn2(this) ? this._asyncIteratorImpl.next() : b3(_n22("next"));
    }, return(e7) {
      return gn2(this) ? this._asyncIteratorImpl.return(e7) : b3(_n22("return"));
    } };
    function fi(e7, t13) {
      const r12 = ze3(e7), n6 = new j3(r12, t13), o7 = Object.create($3);
      return o7._asyncIteratorImpl = n6, o7;
    }
    __name(fi, "fi");
    function gn2(e7) {
      if (!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_asyncIteratorImpl")) return false;
      try {
        return e7._asyncIteratorImpl instanceof j3;
      } catch {
        return false;
      }
    }
    __name(gn2, "gn");
    function _n22(e7) {
      return new TypeError(`ReadableStreamAsyncIterator.${e7} can only be used on a ReadableSteamAsyncIterator`);
    }
    __name(_n22, "_n2");
    Object.setPrototypeOf($3, D3), n$1(fi, "AcquireReadableStreamAsyncIterator"), n$1(gn2, "IsReadableStreamAsyncIterator"), n$1(_n22, "streamAsyncIteratorBrandCheckException");
    const H2 = Number.isNaN || function(e7) {
      return e7 != e7;
    };
    var te3, re3, se3;
    function tt3(e7) {
      return e7.slice();
    }
    __name(tt3, "tt");
    function wn2(e7, t13, r12, n6, o7) {
      new Uint8Array(e7).set(new Uint8Array(r12, n6, o7), t13);
    }
    __name(wn2, "wn");
    n$1(tt3, "CreateArrayFromList"), n$1(wn2, "CopyDataBlockBytes");
    let ie3 = n$1((e7) => (ie3 = "function" == typeof e7.transfer ? n$1((e8) => e8.transfer(), "TransferArrayBuffer") : "function" == typeof structuredClone ? n$1((e8) => structuredClone(e8, { transfer: [e8] }), "TransferArrayBuffer") : n$1((e8) => e8, "TransferArrayBuffer"), ie3(e7)), "TransferArrayBuffer"), ae3 = n$1((e7) => (ae3 = "boolean" == typeof e7.detached ? n$1((e8) => e8.detached, "IsDetachedBuffer") : n$1((e8) => 0 === e8.byteLength, "IsDetachedBuffer"), ae3(e7)), "IsDetachedBuffer");
    function Rn2(e7, t13, r12) {
      if (e7.slice) return e7.slice(t13, r12);
      const n6 = r12 - t13, o7 = new ArrayBuffer(n6);
      return wn2(o7, 0, e7, t13, n6), o7;
    }
    __name(Rn2, "Rn");
    function St3(e7, t13) {
      const r12 = e7[t13];
      if (null != r12) {
        if ("function" != typeof r12) throw new TypeError(`${String(t13)} is not a function`);
        return r12;
      }
    }
    __name(St3, "St");
    function ci(e7) {
      const t13 = { [Symbol.iterator]: () => e7.iterator }, r12 = async function* () {
        return yield* t13;
      }();
      return { iterator: r12, nextMethod: r12.next, done: false };
    }
    __name(ci, "ci");
    n$1(Rn2, "ArrayBufferSlice"), n$1(St3, "GetMethod"), n$1(ci, "CreateAsyncFromSyncIterator");
    const ce4 = null !== (se3 = null !== (te3 = Symbol.asyncIterator) && void 0 !== te3 ? te3 : null === (re3 = Symbol.for) || void 0 === re3 ? void 0 : re3.call(Symbol, "Symbol.asyncIterator")) && void 0 !== se3 ? se3 : "@@asyncIterator";
    function Tn2(e7, t13 = "sync", r12) {
      if (void 0 === r12) if ("async" === t13) {
        if (void 0 === (r12 = St3(e7, ce4))) return ci(Tn2(e7, "sync", St3(e7, Symbol.iterator)));
      } else r12 = St3(e7, Symbol.iterator);
      if (void 0 === r12) throw new TypeError("The object is not iterable");
      const n6 = O3(r12, e7, []);
      if (!u4(n6)) throw new TypeError("The iterator method must return an object");
      return { iterator: n6, nextMethod: n6.next, done: false };
    }
    __name(Tn2, "Tn");
    function di(e7) {
      const t13 = O3(e7.nextMethod, e7.iterator, []);
      if (!u4(t13)) throw new TypeError("The iterator.next() method must return an object");
      return t13;
    }
    __name(di, "di");
    function hi(e7) {
      return !!e7.done;
    }
    __name(hi, "hi");
    function mi(e7) {
      return e7.value;
    }
    __name(mi, "mi");
    function bi(e7) {
      return !("number" != typeof e7 || H2(e7) || e7 < 0);
    }
    __name(bi, "bi");
    function Cn2(e7) {
      const t13 = Rn2(e7.buffer, e7.byteOffset, e7.byteOffset + e7.byteLength);
      return new Uint8Array(t13);
    }
    __name(Cn2, "Cn");
    function wr3(e7) {
      const t13 = e7._queue.shift();
      return e7._queueTotalSize -= t13.size, e7._queueTotalSize < 0 && (e7._queueTotalSize = 0), t13.value;
    }
    __name(wr3, "wr");
    function Rr3(e7, t13, r12) {
      if (!bi(r12) || r12 === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
      e7._queue.push({ value: t13, size: r12 }), e7._queueTotalSize += r12;
    }
    __name(Rr3, "Rr");
    function pi(e7) {
      return e7._queue.peek().value;
    }
    __name(pi, "pi");
    function Se3(e7) {
      e7._queue = new m5(), e7._queueTotalSize = 0;
    }
    __name(Se3, "Se");
    function Pn2(e7) {
      return e7 === DataView;
    }
    __name(Pn2, "Pn");
    function yi(e7) {
      return Pn2(e7.constructor);
    }
    __name(yi, "yi");
    function gi(e7) {
      return Pn2(e7) ? 1 : e7.BYTES_PER_ELEMENT;
    }
    __name(gi, "gi");
    n$1(Tn2, "GetIterator"), n$1(di, "IteratorNext"), n$1(hi, "IteratorComplete"), n$1(mi, "IteratorValue"), n$1(bi, "IsNonNegativeNumber"), n$1(Cn2, "CloneAsUint8Array"), n$1(wr3, "DequeueValue"), n$1(Rr3, "EnqueueValueWithSize"), n$1(pi, "PeekQueueValue"), n$1(Se3, "ResetQueue"), n$1(Pn2, "isDataViewConstructor"), n$1(yi, "isDataView"), n$1(gi, "arrayBufferViewElementSize");
    const de4 = class {
      static {
        __name(this, "de");
      }
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get view() {
        if (!Tr3(this)) throw Ar3("view");
        return this._view;
      }
      respond(e7) {
        if (!Tr3(this)) throw Ar3("respond");
        if (le2(e7, 1, "respond"), e7 = mr3(e7, "First parameter"), void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
        if (ae3(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
        Ct3(this._associatedReadableByteStreamController, e7);
      }
      respondWithNewView(e7) {
        if (!Tr3(this)) throw Ar3("respondWithNewView");
        if (le2(e7, 1, "respondWithNewView"), !ArrayBuffer.isView(e7)) throw new TypeError("You can only respond with array buffer views");
        if (void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
        if (ae3(e7.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
        Pt3(this._associatedReadableByteStreamController, e7);
      }
    };
    n$1(de4, "ReadableStreamBYOBRequest");
    let fe4 = de4;
    Object.defineProperties(fe4.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h22(fe4.prototype.respond, "respond"), h22(fe4.prototype.respondWithNewView, "respondWithNewView"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(fe4.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
    const he3 = class {
      static {
        __name(this, "he");
      }
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get byobRequest() {
        if (!Ae3(this)) throw nt3("byobRequest");
        return vr3(this);
      }
      get desiredSize() {
        if (!Ae3(this)) throw nt3("desiredSize");
        return Fn2(this);
      }
      close() {
        if (!Ae3(this)) throw nt3("close");
        if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
        const e7 = this._controlledReadableByteStream._state;
        if ("readable" !== e7) throw new TypeError(`The stream (in ${e7} state) is not in the readable state and cannot be closed`);
        rt3(this);
      }
      enqueue(e7) {
        if (!Ae3(this)) throw nt3("enqueue");
        if (le2(e7, 1, "enqueue"), !ArrayBuffer.isView(e7)) throw new TypeError("chunk must be an array buffer view");
        if (0 === e7.byteLength) throw new TypeError("chunk must have non-zero byteLength");
        if (0 === e7.buffer.byteLength) throw new TypeError("chunk's buffer must have non-zero byteLength");
        if (this._closeRequested) throw new TypeError("stream is closed or draining");
        const t13 = this._controlledReadableByteStream._state;
        if ("readable" !== t13) throw new TypeError(`The stream (in ${t13} state) is not in the readable state and cannot be enqueued to`);
        Tt3(this, e7);
      }
      error(e7 = void 0) {
        if (!Ae3(this)) throw nt3("error");
        Z2(this, e7);
      }
      [E4](e7) {
        En2(this), Se3(this);
        const t13 = this._cancelAlgorithm(e7);
        return Rt3(this), t13;
      }
      [v6](e7) {
        const t13 = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) return void In2(this, e7);
        const r12 = this._autoAllocateChunkSize;
        if (void 0 !== r12) {
          let t14;
          try {
            t14 = new ArrayBuffer(r12);
          } catch (t15) {
            return void e7._errorSteps(t15);
          }
          const n6 = { buffer: t14, bufferByteLength: r12, byteOffset: 0, byteLength: r12, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
          this._pendingPullIntos.push(n6);
        }
        hn2(t13, e7), Be3(this);
      }
      [T3]() {
        if (this._pendingPullIntos.length > 0) {
          const e7 = this._pendingPullIntos.peek();
          e7.readerType = "none", this._pendingPullIntos = new m5(), this._pendingPullIntos.push(e7);
        }
      }
    };
    n$1(he3, "ReadableByteStreamController");
    let ye3 = he3;
    function Ae3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_controlledReadableByteStream")) && e7 instanceof ye3;
    }
    __name(Ae3, "Ae");
    function Tr3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_associatedReadableByteStreamController")) && e7 instanceof fe4;
    }
    __name(Tr3, "Tr");
    function Be3(e7) {
      Ti(e7) && (e7._pulling ? e7._pullAgain = true : (e7._pulling = true, g4(e7._pullAlgorithm(), () => (e7._pulling = false, e7._pullAgain && (e7._pullAgain = false, Be3(e7)), null), (t13) => (Z2(e7, t13), null))));
    }
    __name(Be3, "Be");
    function En2(e7) {
      Pr3(e7), e7._pendingPullIntos = new m5();
    }
    __name(En2, "En");
    function Cr3(e7, t13) {
      let r12 = false;
      "closed" === e7._state && (r12 = true);
      const n6 = vn2(t13);
      "default" === t13.readerType ? pr3(e7, n6, r12) : Bi(e7, n6, r12);
    }
    __name(Cr3, "Cr");
    function vn2(e7) {
      const t13 = e7.bytesFilled, r12 = e7.elementSize;
      return new e7.viewConstructor(e7.buffer, e7.byteOffset, t13 / r12);
    }
    __name(vn2, "vn");
    function wt3(e7, t13, r12, n6) {
      e7._queue.push({ buffer: t13, byteOffset: r12, byteLength: n6 }), e7._queueTotalSize += n6;
    }
    __name(wt3, "wt");
    function An2(e7, t13, r12, n6) {
      let o7;
      try {
        o7 = Rn2(t13, r12, r12 + n6);
      } catch (t14) {
        throw Z2(e7, t14), t14;
      }
      wt3(e7, o7, 0, n6);
    }
    __name(An2, "An");
    function Bn2(e7, t13) {
      t13.bytesFilled > 0 && An2(e7, t13.buffer, t13.byteOffset, t13.bytesFilled), je3(e7);
    }
    __name(Bn2, "Bn");
    function Wn2(e7, t13) {
      const r12 = Math.min(e7._queueTotalSize, t13.byteLength - t13.bytesFilled), n6 = t13.bytesFilled + r12;
      let o7 = r12, i7 = false;
      const a8 = n6 - n6 % t13.elementSize;
      a8 >= t13.minimumFill && (o7 = a8 - t13.bytesFilled, i7 = true);
      const h7 = e7._queue;
      for (; o7 > 0; ) {
        const r13 = h7.peek(), n7 = Math.min(o7, r13.byteLength), i8 = t13.byteOffset + t13.bytesFilled;
        wn2(t13.buffer, i8, r13.buffer, r13.byteOffset, n7), r13.byteLength === n7 ? h7.shift() : (r13.byteOffset += n7, r13.byteLength -= n7), e7._queueTotalSize -= n7, kn2(e7, n7, t13), o7 -= n7;
      }
      return i7;
    }
    __name(Wn2, "Wn");
    function kn2(e7, t13, r12) {
      r12.bytesFilled += t13;
    }
    __name(kn2, "kn");
    function qn2(e7) {
      0 === e7._queueTotalSize && e7._closeRequested ? (Rt3(e7), lt3(e7._controlledReadableByteStream)) : Be3(e7);
    }
    __name(qn2, "qn");
    function Pr3(e7) {
      null !== e7._byobRequest && (e7._byobRequest._associatedReadableByteStreamController = void 0, e7._byobRequest._view = null, e7._byobRequest = null);
    }
    __name(Pr3, "Pr");
    function Er3(e7) {
      for (; e7._pendingPullIntos.length > 0; ) {
        if (0 === e7._queueTotalSize) return;
        const t13 = e7._pendingPullIntos.peek();
        Wn2(e7, t13) && (je3(e7), Cr3(e7._controlledReadableByteStream, t13));
      }
    }
    __name(Er3, "Er");
    function _i(e7) {
      const t13 = e7._controlledReadableByteStream._reader;
      for (; t13._readRequests.length > 0; ) {
        if (0 === e7._queueTotalSize) return;
        In2(e7, t13._readRequests.shift());
      }
    }
    __name(_i, "_i");
    function Si(e7, t13, r12, n6) {
      const o7 = e7._controlledReadableByteStream, i7 = t13.constructor, a8 = gi(i7), { byteOffset: h7, byteLength: m6 } = t13, _4 = r12 * a8;
      let S4;
      try {
        S4 = ie3(t13.buffer);
      } catch (e8) {
        return void n6._errorSteps(e8);
      }
      const E5 = { buffer: S4, bufferByteLength: S4.byteLength, byteOffset: h7, byteLength: m6, bytesFilled: 0, minimumFill: _4, elementSize: a8, viewConstructor: i7, readerType: "byob" };
      if (e7._pendingPullIntos.length > 0) return e7._pendingPullIntos.push(E5), void Ln2(o7, n6);
      if ("closed" === o7._state) {
        const e8 = new i7(E5.buffer, E5.byteOffset, 0);
        return void n6._closeSteps(e8);
      }
      if (e7._queueTotalSize > 0) {
        if (Wn2(e7, E5)) {
          const t14 = vn2(E5);
          return qn2(e7), void n6._chunkSteps(t14);
        }
        if (e7._closeRequested) {
          const t14 = new TypeError("Insufficient bytes to fill elements in the given buffer");
          return Z2(e7, t14), void n6._errorSteps(t14);
        }
      }
      e7._pendingPullIntos.push(E5), Ln2(o7, n6), Be3(e7);
    }
    __name(Si, "Si");
    function wi(e7, t13) {
      "none" === t13.readerType && je3(e7);
      const r12 = e7._controlledReadableByteStream;
      if (Br3(r12)) for (; Dn2(r12) > 0; ) Cr3(r12, je3(e7));
    }
    __name(wi, "wi");
    function Ri(e7, t13, r12) {
      if (kn2(e7, t13, r12), "none" === r12.readerType) return Bn2(e7, r12), void Er3(e7);
      if (r12.bytesFilled < r12.minimumFill) return;
      je3(e7);
      const n6 = r12.bytesFilled % r12.elementSize;
      if (n6 > 0) {
        const t14 = r12.byteOffset + r12.bytesFilled;
        An2(e7, r12.buffer, t14 - n6, n6);
      }
      r12.bytesFilled -= n6, Cr3(e7._controlledReadableByteStream, r12), Er3(e7);
    }
    __name(Ri, "Ri");
    function On2(e7, t13) {
      const r12 = e7._pendingPullIntos.peek();
      Pr3(e7), "closed" === e7._controlledReadableByteStream._state ? wi(e7, r12) : Ri(e7, t13, r12), Be3(e7);
    }
    __name(On2, "On");
    function je3(e7) {
      return e7._pendingPullIntos.shift();
    }
    __name(je3, "je");
    function Ti(e7) {
      const t13 = e7._controlledReadableByteStream;
      return !("readable" !== t13._state || e7._closeRequested || !e7._started || !(mn2(t13) && gt3(t13) > 0 || Br3(t13) && Dn2(t13) > 0 || Fn2(e7) > 0));
    }
    __name(Ti, "Ti");
    function Rt3(e7) {
      e7._pullAlgorithm = void 0, e7._cancelAlgorithm = void 0;
    }
    __name(Rt3, "Rt");
    function rt3(e7) {
      const t13 = e7._controlledReadableByteStream;
      if (!e7._closeRequested && "readable" === t13._state) {
        if (e7._queueTotalSize > 0) return void (e7._closeRequested = true);
        if (e7._pendingPullIntos.length > 0) {
          const t14 = e7._pendingPullIntos.peek();
          if (t14.bytesFilled % t14.elementSize !== 0) {
            const t15 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            throw Z2(e7, t15), t15;
          }
        }
        Rt3(e7), lt3(t13);
      }
    }
    __name(rt3, "rt");
    function Tt3(e7, t13) {
      const r12 = e7._controlledReadableByteStream;
      if (e7._closeRequested || "readable" !== r12._state) return;
      const { buffer: n6, byteOffset: o7, byteLength: i7 } = t13;
      if (ae3(n6)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
      const a8 = ie3(n6);
      if (e7._pendingPullIntos.length > 0) {
        const t14 = e7._pendingPullIntos.peek();
        if (ae3(t14.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
        Pr3(e7), t14.buffer = ie3(t14.buffer), "none" === t14.readerType && Bn2(e7, t14);
      }
      mn2(r12) ? (_i(e7), 0 === gt3(r12) ? wt3(e7, a8, o7, i7) : (e7._pendingPullIntos.length > 0 && je3(e7), pr3(r12, new Uint8Array(a8, o7, i7), false))) : Br3(r12) ? (wt3(e7, a8, o7, i7), Er3(e7)) : wt3(e7, a8, o7, i7), Be3(e7);
    }
    __name(Tt3, "Tt");
    function Z2(e7, t13) {
      const r12 = e7._controlledReadableByteStream;
      "readable" === r12._state && (En2(e7), Se3(e7), Rt3(e7), lo(r12, t13));
    }
    __name(Z2, "Z");
    function In2(e7, t13) {
      const r12 = e7._queue.shift();
      e7._queueTotalSize -= r12.byteLength, qn2(e7);
      const n6 = new Uint8Array(r12.buffer, r12.byteOffset, r12.byteLength);
      t13._chunkSteps(n6);
    }
    __name(In2, "In");
    function vr3(e7) {
      if (null === e7._byobRequest && e7._pendingPullIntos.length > 0) {
        const t13 = e7._pendingPullIntos.peek(), r12 = new Uint8Array(t13.buffer, t13.byteOffset + t13.bytesFilled, t13.byteLength - t13.bytesFilled), n6 = Object.create(fe4.prototype);
        Pi(n6, e7, r12), e7._byobRequest = n6;
      }
      return e7._byobRequest;
    }
    __name(vr3, "vr");
    function Fn2(e7) {
      const t13 = e7._controlledReadableByteStream._state;
      return "errored" === t13 ? null : "closed" === t13 ? 0 : e7._strategyHWM - e7._queueTotalSize;
    }
    __name(Fn2, "Fn");
    function Ct3(e7, t13) {
      const r12 = e7._pendingPullIntos.peek();
      if ("closed" === e7._controlledReadableByteStream._state) {
        if (0 !== t13) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
      } else {
        if (0 === t13) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
        if (r12.bytesFilled + t13 > r12.byteLength) throw new RangeError("bytesWritten out of range");
      }
      r12.buffer = ie3(r12.buffer), On2(e7, t13);
    }
    __name(Ct3, "Ct");
    function Pt3(e7, t13) {
      const r12 = e7._pendingPullIntos.peek();
      if ("closed" === e7._controlledReadableByteStream._state) {
        if (0 !== t13.byteLength) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
      } else if (0 === t13.byteLength) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
      if (r12.byteOffset + r12.bytesFilled !== t13.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
      if (r12.bufferByteLength !== t13.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
      if (r12.bytesFilled + t13.byteLength > r12.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
      const n6 = t13.byteLength;
      r12.buffer = ie3(t13.buffer), On2(e7, n6);
    }
    __name(Pt3, "Pt");
    function zn2(e7, t13, r12, n6, o7, i7, a8) {
      t13._controlledReadableByteStream = e7, t13._pullAgain = false, t13._pulling = false, t13._byobRequest = null, t13._queue = t13._queueTotalSize = void 0, Se3(t13), t13._closeRequested = false, t13._started = false, t13._strategyHWM = i7, t13._pullAlgorithm = n6, t13._cancelAlgorithm = o7, t13._autoAllocateChunkSize = a8, t13._pendingPullIntos = new m5(), e7._readableStreamController = t13, g4(T22(r12()), () => (t13._started = true, Be3(t13), null), (e8) => (Z2(t13, e8), null));
    }
    __name(zn2, "zn");
    function Ci(e7, t13, r12) {
      const n6 = Object.create(ye3.prototype);
      let o7, i7, a8;
      o7 = void 0 !== t13.start ? n$1(() => t13.start(n6), "startAlgorithm") : n$1(() => {
      }, "startAlgorithm"), i7 = void 0 !== t13.pull ? n$1(() => t13.pull(n6), "pullAlgorithm") : n$1(() => T22(void 0), "pullAlgorithm"), a8 = void 0 !== t13.cancel ? n$1((e8) => t13.cancel(e8), "cancelAlgorithm") : n$1(() => T22(void 0), "cancelAlgorithm");
      const h7 = t13.autoAllocateChunkSize;
      if (0 === h7) throw new TypeError("autoAllocateChunkSize must be greater than 0");
      zn2(e7, n6, o7, i7, a8, r12, h7);
    }
    __name(Ci, "Ci");
    function Pi(e7, t13, r12) {
      e7._associatedReadableByteStreamController = t13, e7._view = r12;
    }
    __name(Pi, "Pi");
    function Ar3(e7) {
      return new TypeError(`ReadableStreamBYOBRequest.prototype.${e7} can only be used on a ReadableStreamBYOBRequest`);
    }
    __name(Ar3, "Ar");
    function nt3(e7) {
      return new TypeError(`ReadableByteStreamController.prototype.${e7} can only be used on a ReadableByteStreamController`);
    }
    __name(nt3, "nt");
    function Ei(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.mode;
      return { mode: void 0 === r12 ? void 0 : vi(r12, `${t13} has member 'mode' that`) };
    }
    __name(Ei, "Ei");
    function vi(e7, t13) {
      if ("byob" != (e7 = `${e7}`)) throw new TypeError(`${t13} '${e7}' is not a valid enumeration value for ReadableStreamReaderMode`);
      return e7;
    }
    __name(vi, "vi");
    function Ai(e7, t13) {
      var r12;
      return ne2(e7, t13), { min: mr3(null !== (r12 = null == e7 ? void 0 : e7.min) && void 0 !== r12 ? r12 : 1, `${t13} has member 'min' that`) };
    }
    __name(Ai, "Ai");
    function jn2(e7) {
      return new ve3(e7);
    }
    __name(jn2, "jn");
    function Ln2(e7, t13) {
      e7._reader._readIntoRequests.push(t13);
    }
    __name(Ln2, "Ln");
    function Bi(e7, t13, r12) {
      const n6 = e7._reader._readIntoRequests.shift();
      r12 ? n6._closeSteps(t13) : n6._chunkSteps(t13);
    }
    __name(Bi, "Bi");
    function Dn2(e7) {
      return e7._reader._readIntoRequests.length;
    }
    __name(Dn2, "Dn");
    function Br3(e7) {
      const t13 = e7._reader;
      return !(void 0 === t13 || !We3(t13));
    }
    __name(Br3, "Br");
    Object.defineProperties(ye3.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h22(ye3.prototype.close, "close"), h22(ye3.prototype.enqueue, "enqueue"), h22(ye3.prototype.error, "error"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(ye3.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true }), n$1(Ae3, "IsReadableByteStreamController"), n$1(Tr3, "IsReadableStreamBYOBRequest"), n$1(Be3, "ReadableByteStreamControllerCallPullIfNeeded"), n$1(En2, "ReadableByteStreamControllerClearPendingPullIntos"), n$1(Cr3, "ReadableByteStreamControllerCommitPullIntoDescriptor"), n$1(vn2, "ReadableByteStreamControllerConvertPullIntoDescriptor"), n$1(wt3, "ReadableByteStreamControllerEnqueueChunkToQueue"), n$1(An2, "ReadableByteStreamControllerEnqueueClonedChunkToQueue"), n$1(Bn2, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue"), n$1(Wn2, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue"), n$1(kn2, "ReadableByteStreamControllerFillHeadPullIntoDescriptor"), n$1(qn2, "ReadableByteStreamControllerHandleQueueDrain"), n$1(Pr3, "ReadableByteStreamControllerInvalidateBYOBRequest"), n$1(Er3, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue"), n$1(_i, "ReadableByteStreamControllerProcessReadRequestsUsingQueue"), n$1(Si, "ReadableByteStreamControllerPullInto"), n$1(wi, "ReadableByteStreamControllerRespondInClosedState"), n$1(Ri, "ReadableByteStreamControllerRespondInReadableState"), n$1(On2, "ReadableByteStreamControllerRespondInternal"), n$1(je3, "ReadableByteStreamControllerShiftPendingPullInto"), n$1(Ti, "ReadableByteStreamControllerShouldCallPull"), n$1(Rt3, "ReadableByteStreamControllerClearAlgorithms"), n$1(rt3, "ReadableByteStreamControllerClose"), n$1(Tt3, "ReadableByteStreamControllerEnqueue"), n$1(Z2, "ReadableByteStreamControllerError"), n$1(In2, "ReadableByteStreamControllerFillReadRequestFromQueue"), n$1(vr3, "ReadableByteStreamControllerGetBYOBRequest"), n$1(Fn2, "ReadableByteStreamControllerGetDesiredSize"), n$1(Ct3, "ReadableByteStreamControllerRespond"), n$1(Pt3, "ReadableByteStreamControllerRespondWithNewView"), n$1(zn2, "SetUpReadableByteStreamController"), n$1(Ci, "SetUpReadableByteStreamControllerFromUnderlyingSource"), n$1(Pi, "SetUpReadableStreamBYOBRequest"), n$1(Ar3, "byobRequestBrandCheckException"), n$1(nt3, "byteStreamControllerBrandCheckException"), n$1(Ei, "convertReaderOptions"), n$1(vi, "convertReadableStreamReaderMode"), n$1(Ai, "convertByobReadOptions"), n$1(jn2, "AcquireReadableStreamBYOBReader"), n$1(Ln2, "ReadableStreamAddReadIntoRequest"), n$1(Bi, "ReadableStreamFulfillReadIntoRequest"), n$1(Dn2, "ReadableStreamGetNumReadIntoRequests"), n$1(Br3, "ReadableStreamHasBYOBReader");
    const _e3 = class {
      static {
        __name(this, "_e");
      }
      constructor(e7) {
        if (le2(e7, 1, "ReadableStreamBYOBReader"), br3(e7, "First parameter"), Ce3(e7)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        if (!Ae3(e7._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
        sn2(this, e7), this._readIntoRequests = new m5();
      }
      get closed() {
        return We3(this) ? this._closedPromise : b3(Et3("closed"));
      }
      cancel(e7 = void 0) {
        return We3(this) ? void 0 === this._ownerReadableStream ? b3(yt3("cancel")) : lr3(this, e7) : b3(Et3("cancel"));
      }
      read(e7, t13 = {}) {
        if (!We3(this)) return b3(Et3("read"));
        if (!ArrayBuffer.isView(e7)) return b3(new TypeError("view must be an array buffer view"));
        if (0 === e7.byteLength) return b3(new TypeError("view must have non-zero byteLength"));
        if (0 === e7.buffer.byteLength) return b3(new TypeError("view's buffer must have non-zero byteLength"));
        if (ae3(e7.buffer)) return b3(new TypeError("view's buffer has been detached"));
        let r12;
        try {
          r12 = Ai(t13, "options");
        } catch (e8) {
          return b3(e8);
        }
        const n6 = r12.min;
        if (0 === n6) return b3(new TypeError("options.min must be greater than 0"));
        if (yi(e7)) {
          if (n6 > e7.byteLength) return b3(new RangeError("options.min must be less than or equal to view's byteLength"));
        } else if (n6 > e7.length) return b3(new RangeError("options.min must be less than or equal to view's length"));
        if (void 0 === this._ownerReadableStream) return b3(yt3("read from"));
        let o7, i7;
        const a8 = A4((e8, t14) => {
          o7 = e8, i7 = t14;
        });
        return $n2(this, e7, n6, { _chunkSteps: n$1((e8) => o7({ value: e8, done: false }), "_chunkSteps"), _closeSteps: n$1((e8) => o7({ value: e8, done: true }), "_closeSteps"), _errorSteps: n$1((e8) => i7(e8), "_errorSteps") }), a8;
      }
      releaseLock() {
        if (!We3(this)) throw Et3("releaseLock");
        void 0 !== this._ownerReadableStream && Wi(this);
      }
    };
    n$1(_e3, "ReadableStreamBYOBReader");
    let ve3 = _e3;
    function We3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_readIntoRequests")) && e7 instanceof ve3;
    }
    __name(We3, "We");
    function $n2(e7, t13, r12, n6) {
      const o7 = e7._ownerReadableStream;
      o7._disturbed = true, "errored" === o7._state ? n6._errorSteps(o7._storedError) : Si(o7._readableStreamController, t13, r12, n6);
    }
    __name($n2, "$n");
    function Wi(e7) {
      ue3(e7), Mn2(e7, new TypeError("Reader was released"));
    }
    __name(Wi, "Wi");
    function Mn2(e7, t13) {
      const r12 = e7._readIntoRequests;
      e7._readIntoRequests = new m5(), r12.forEach((e8) => {
        e8._errorSteps(t13);
      });
    }
    __name(Mn2, "Mn");
    function Et3(e7) {
      return new TypeError(`ReadableStreamBYOBReader.prototype.${e7} can only be used on a ReadableStreamBYOBReader`);
    }
    __name(Et3, "Et");
    function ot3(e7, t13) {
      const { highWaterMark: r12 } = e7;
      if (void 0 === r12) return t13;
      if (H2(r12) || r12 < 0) throw new RangeError("Invalid highWaterMark");
      return r12;
    }
    __name(ot3, "ot");
    function vt3(e7) {
      const { size: t13 } = e7;
      return t13 || (() => 1);
    }
    __name(vt3, "vt");
    function At3(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.highWaterMark, n6 = null == e7 ? void 0 : e7.size;
      return { highWaterMark: void 0 === r12 ? void 0 : hr3(r12), size: void 0 === n6 ? void 0 : ki(n6, `${t13} has member 'size' that`) };
    }
    __name(At3, "At");
    function ki(e7, t13) {
      return G2(e7, t13), (t14) => hr3(e7(t14));
    }
    __name(ki, "ki");
    function qi(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.abort, n6 = null == e7 ? void 0 : e7.close, o7 = null == e7 ? void 0 : e7.start, i7 = null == e7 ? void 0 : e7.type, a8 = null == e7 ? void 0 : e7.write;
      return { abort: void 0 === r12 ? void 0 : Oi(r12, e7, `${t13} has member 'abort' that`), close: void 0 === n6 ? void 0 : Ii(n6, e7, `${t13} has member 'close' that`), start: void 0 === o7 ? void 0 : Fi(o7, e7, `${t13} has member 'start' that`), write: void 0 === a8 ? void 0 : zi(a8, e7, `${t13} has member 'write' that`), type: i7 };
    }
    __name(qi, "qi");
    function Oi(e7, t13, r12) {
      return G2(e7, r12), (r13) => z3(e7, t13, [r13]);
    }
    __name(Oi, "Oi");
    function Ii(e7, t13, r12) {
      return G2(e7, r12), () => z3(e7, t13, []);
    }
    __name(Ii, "Ii");
    function Fi(e7, t13, r12) {
      return G2(e7, r12), (r13) => O3(e7, t13, [r13]);
    }
    __name(Fi, "Fi");
    function zi(e7, t13, r12) {
      return G2(e7, r12), (r13, n6) => z3(e7, t13, [r13, n6]);
    }
    __name(zi, "zi");
    function Un2(e7, t13) {
      if (!Le3(e7)) throw new TypeError(`${t13} is not a WritableStream.`);
    }
    __name(Un2, "Un");
    function ji(e7) {
      if ("object" != typeof e7 || null === e7) return false;
      try {
        return "boolean" == typeof e7.aborted;
      } catch {
        return false;
      }
    }
    __name(ji, "ji");
    Object.defineProperties(ve3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h22(ve3.prototype.cancel, "cancel"), h22(ve3.prototype.read, "read"), h22(ve3.prototype.releaseLock, "releaseLock"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(ve3.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true }), n$1(We3, "IsReadableStreamBYOBReader"), n$1($n2, "ReadableStreamBYOBReaderRead"), n$1(Wi, "ReadableStreamBYOBReaderRelease"), n$1(Mn2, "ReadableStreamBYOBReaderErrorReadIntoRequests"), n$1(Et3, "byobReaderBrandCheckException"), n$1(ot3, "ExtractHighWaterMark"), n$1(vt3, "ExtractSizeAlgorithm"), n$1(At3, "convertQueuingStrategy"), n$1(ki, "convertQueuingStrategySize"), n$1(qi, "convertUnderlyingSink"), n$1(Oi, "convertUnderlyingSinkAbortCallback"), n$1(Ii, "convertUnderlyingSinkCloseCallback"), n$1(Fi, "convertUnderlyingSinkStartCallback"), n$1(zi, "convertUnderlyingSinkWriteCallback"), n$1(Un2, "assertWritableStream"), n$1(ji, "isAbortSignal");
    const Re3 = "function" == typeof AbortController;
    function Di() {
      if (Re3) return new AbortController();
    }
    __name(Di, "Di");
    n$1(Di, "createAbortController");
    const we3 = class {
      static {
        __name(this, "we");
      }
      constructor(e7 = {}, t13 = {}) {
        void 0 === e7 ? e7 = null : cn2(e7, "First parameter");
        const r12 = At3(t13, "Second parameter"), n6 = qi(e7, "First parameter");
        if (Nn2(this), void 0 !== n6.type) throw new RangeError("Invalid type is specified");
        const o7 = vt3(r12);
        Xi(this, n6, ot3(r12, 1), o7);
      }
      get locked() {
        if (!Le3(this)) throw Ot3("locked");
        return De3(this);
      }
      abort(e7 = void 0) {
        return Le3(this) ? De3(this) ? b3(new TypeError("Cannot abort a stream that already has a writer")) : Bt3(this, e7) : b3(Ot3("abort"));
      }
      close() {
        return Le3(this) ? De3(this) ? b3(new TypeError("Cannot close a stream that already has a writer")) : oe2(this) ? b3(new TypeError("Cannot close an already-closing stream")) : Hn2(this) : b3(Ot3("close"));
      }
      getWriter() {
        if (!Le3(this)) throw Ot3("getWriter");
        return xn2(this);
      }
    };
    n$1(we3, "WritableStream");
    let Pe3 = we3;
    function xn2(e7) {
      return new Ve3(e7);
    }
    __name(xn2, "xn");
    function $i(e7, t13, r12, n6, o7 = 1, i7 = () => 1) {
      const a8 = Object.create(Pe3.prototype);
      return Nn2(a8), Kn2(a8, Object.create(Xe3.prototype), e7, t13, r12, n6, o7, i7), a8;
    }
    __name($i, "$i");
    function Nn2(e7) {
      e7._state = "writable", e7._storedError = void 0, e7._writer = void 0, e7._writableStreamController = void 0, e7._writeRequests = new m5(), e7._inFlightWriteRequest = void 0, e7._closeRequest = void 0, e7._inFlightCloseRequest = void 0, e7._pendingAbortRequest = void 0, e7._backpressure = false;
    }
    __name(Nn2, "Nn");
    function Le3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_writableStreamController")) && e7 instanceof Pe3;
    }
    __name(Le3, "Le");
    function De3(e7) {
      return void 0 !== e7._writer;
    }
    __name(De3, "De");
    function Bt3(e7, t13) {
      var r12;
      if ("closed" === e7._state || "errored" === e7._state) return T22(void 0);
      e7._writableStreamController._abortReason = t13, null === (r12 = e7._writableStreamController._abortController) || void 0 === r12 || r12.abort(t13);
      const n6 = e7._state;
      if ("closed" === n6 || "errored" === n6) return T22(void 0);
      if (void 0 !== e7._pendingAbortRequest) return e7._pendingAbortRequest._promise;
      let o7 = false;
      "erroring" === n6 && (o7 = true, t13 = void 0);
      const i7 = A4((r13, n7) => {
        e7._pendingAbortRequest = { _promise: void 0, _resolve: r13, _reject: n7, _reason: t13, _wasAlreadyErroring: o7 };
      });
      return e7._pendingAbortRequest._promise = i7, o7 || kr3(e7, t13), i7;
    }
    __name(Bt3, "Bt");
    function Hn2(e7) {
      const t13 = e7._state;
      if ("closed" === t13 || "errored" === t13) return b3(new TypeError(`The stream (in ${t13} state) is not in the writable state and cannot be closed`));
      const r12 = A4((t14, r13) => {
        const n7 = { _resolve: t14, _reject: r13 };
        e7._closeRequest = n7;
      }), n6 = e7._writer;
      return void 0 !== n6 && e7._backpressure && "writable" === t13 && Dr3(n6), ea(e7._writableStreamController), r12;
    }
    __name(Hn2, "Hn");
    function Mi(e7) {
      return A4((t13, r12) => {
        const n6 = { _resolve: t13, _reject: r12 };
        e7._writeRequests.push(n6);
      });
    }
    __name(Mi, "Mi");
    function Wr3(e7, t13) {
      "writable" !== e7._state ? qr3(e7) : kr3(e7, t13);
    }
    __name(Wr3, "Wr");
    function kr3(e7, t13) {
      const r12 = e7._writableStreamController;
      e7._state = "erroring", e7._storedError = t13;
      const n6 = e7._writer;
      void 0 !== n6 && Qn2(n6, t13), !Vi(e7) && r12._started && qr3(e7);
    }
    __name(kr3, "kr");
    function qr3(e7) {
      e7._state = "errored", e7._writableStreamController[S3]();
      const t13 = e7._storedError;
      if (e7._writeRequests.forEach((e8) => {
        e8._reject(t13);
      }), e7._writeRequests = new m5(), void 0 === e7._pendingAbortRequest) return void Wt3(e7);
      const r12 = e7._pendingAbortRequest;
      if (e7._pendingAbortRequest = void 0, r12._wasAlreadyErroring) return r12._reject(t13), void Wt3(e7);
      g4(e7._writableStreamController[_3](r12._reason), () => (r12._resolve(), Wt3(e7), null), (t14) => (r12._reject(t14), Wt3(e7), null));
    }
    __name(qr3, "qr");
    function Ui(e7) {
      e7._inFlightWriteRequest._resolve(void 0), e7._inFlightWriteRequest = void 0;
    }
    __name(Ui, "Ui");
    function xi(e7, t13) {
      e7._inFlightWriteRequest._reject(t13), e7._inFlightWriteRequest = void 0, Wr3(e7, t13);
    }
    __name(xi, "xi");
    function Ni(e7) {
      e7._inFlightCloseRequest._resolve(void 0), e7._inFlightCloseRequest = void 0, "erroring" === e7._state && (e7._storedError = void 0, void 0 !== e7._pendingAbortRequest && (e7._pendingAbortRequest._resolve(), e7._pendingAbortRequest = void 0)), e7._state = "closed";
      const t13 = e7._writer;
      void 0 !== t13 && to(t13);
    }
    __name(Ni, "Ni");
    function Hi(e7, t13) {
      e7._inFlightCloseRequest._reject(t13), e7._inFlightCloseRequest = void 0, void 0 !== e7._pendingAbortRequest && (e7._pendingAbortRequest._reject(t13), e7._pendingAbortRequest = void 0), Wr3(e7, t13);
    }
    __name(Hi, "Hi");
    function oe2(e7) {
      return !(void 0 === e7._closeRequest && void 0 === e7._inFlightCloseRequest);
    }
    __name(oe2, "oe");
    function Vi(e7) {
      return !(void 0 === e7._inFlightWriteRequest && void 0 === e7._inFlightCloseRequest);
    }
    __name(Vi, "Vi");
    function Qi(e7) {
      e7._inFlightCloseRequest = e7._closeRequest, e7._closeRequest = void 0;
    }
    __name(Qi, "Qi");
    function Yi(e7) {
      e7._inFlightWriteRequest = e7._writeRequests.shift();
    }
    __name(Yi, "Yi");
    function Wt3(e7) {
      void 0 !== e7._closeRequest && (e7._closeRequest._reject(e7._storedError), e7._closeRequest = void 0);
      const t13 = e7._writer;
      void 0 !== t13 && jr3(t13, e7._storedError);
    }
    __name(Wt3, "Wt");
    function Or3(e7, t13) {
      const r12 = e7._writer;
      void 0 !== r12 && t13 !== e7._backpressure && (t13 ? sa(r12) : Dr3(r12)), e7._backpressure = t13;
    }
    __name(Or3, "Or");
    Object.defineProperties(Pe3.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h22(Pe3.prototype.abort, "abort"), h22(Pe3.prototype.close, "close"), h22(Pe3.prototype.getWriter, "getWriter"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Pe3.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true }), n$1(xn2, "AcquireWritableStreamDefaultWriter"), n$1($i, "CreateWritableStream"), n$1(Nn2, "InitializeWritableStream"), n$1(Le3, "IsWritableStream"), n$1(De3, "IsWritableStreamLocked"), n$1(Bt3, "WritableStreamAbort"), n$1(Hn2, "WritableStreamClose"), n$1(Mi, "WritableStreamAddWriteRequest"), n$1(Wr3, "WritableStreamDealWithRejection"), n$1(kr3, "WritableStreamStartErroring"), n$1(qr3, "WritableStreamFinishErroring"), n$1(Ui, "WritableStreamFinishInFlightWrite"), n$1(xi, "WritableStreamFinishInFlightWriteWithError"), n$1(Ni, "WritableStreamFinishInFlightClose"), n$1(Hi, "WritableStreamFinishInFlightCloseWithError"), n$1(oe2, "WritableStreamCloseQueuedOrInFlight"), n$1(Vi, "WritableStreamHasOperationMarkedInFlight"), n$1(Qi, "WritableStreamMarkCloseRequestInFlight"), n$1(Yi, "WritableStreamMarkFirstWriteRequestInFlight"), n$1(Wt3, "WritableStreamRejectCloseAndClosedPromiseIfNeeded"), n$1(Or3, "WritableStreamUpdateBackpressure");
    const Fe3 = class {
      static {
        __name(this, "Fe");
      }
      constructor(e7) {
        if (le2(e7, 1, "WritableStreamDefaultWriter"), Un2(e7, "First parameter"), De3(e7)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
        this._ownerWritableStream = e7, e7._writer = this;
        const t13 = e7._state;
        if ("writable" === t13) !oe2(e7) && e7._backpressure ? Ft3(this) : ro(this), It3(this);
        else if ("erroring" === t13) Lr3(this, e7._storedError), It3(this);
        else if ("closed" === t13) ro(this), ia(this);
        else {
          const t14 = e7._storedError;
          Lr3(this, t14), eo(this, t14);
        }
      }
      get closed() {
        return ke3(this) ? this._closedPromise : b3(qe3("closed"));
      }
      get desiredSize() {
        if (!ke3(this)) throw qe3("desiredSize");
        if (void 0 === this._ownerWritableStream) throw at3("desiredSize");
        return Ji(this);
      }
      get ready() {
        return ke3(this) ? this._readyPromise : b3(qe3("ready"));
      }
      abort(e7 = void 0) {
        return ke3(this) ? void 0 === this._ownerWritableStream ? b3(at3("abort")) : Gi(this, e7) : b3(qe3("abort"));
      }
      close() {
        if (!ke3(this)) return b3(qe3("close"));
        const e7 = this._ownerWritableStream;
        return void 0 === e7 ? b3(at3("close")) : oe2(e7) ? b3(new TypeError("Cannot close an already-closing stream")) : Vn2(this);
      }
      releaseLock() {
        if (!ke3(this)) throw qe3("releaseLock");
        void 0 !== this._ownerWritableStream && Yn2(this);
      }
      write(e7 = void 0) {
        return ke3(this) ? void 0 === this._ownerWritableStream ? b3(at3("write to")) : Gn2(this, e7) : b3(qe3("write"));
      }
    };
    n$1(Fe3, "WritableStreamDefaultWriter");
    let Ve3 = Fe3;
    function ke3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_ownerWritableStream")) && e7 instanceof Ve3;
    }
    __name(ke3, "ke");
    function Gi(e7, t13) {
      return Bt3(e7._ownerWritableStream, t13);
    }
    __name(Gi, "Gi");
    function Vn2(e7) {
      return Hn2(e7._ownerWritableStream);
    }
    __name(Vn2, "Vn");
    function Zi(e7) {
      const t13 = e7._ownerWritableStream, r12 = t13._state;
      return oe2(t13) || "closed" === r12 ? T22(void 0) : "errored" === r12 ? b3(t13._storedError) : Vn2(e7);
    }
    __name(Zi, "Zi");
    function Ki(e7, t13) {
      "pending" === e7._closedPromiseState ? jr3(e7, t13) : aa(e7, t13);
    }
    __name(Ki, "Ki");
    function Qn2(e7, t13) {
      "pending" === e7._readyPromiseState ? no(e7, t13) : ua(e7, t13);
    }
    __name(Qn2, "Qn");
    function Ji(e7) {
      const t13 = e7._ownerWritableStream, r12 = t13._state;
      return "errored" === r12 || "erroring" === r12 ? null : "closed" === r12 ? 0 : Jn2(t13._writableStreamController);
    }
    __name(Ji, "Ji");
    function Yn2(e7) {
      const t13 = e7._ownerWritableStream, r12 = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
      Qn2(e7, r12), Ki(e7, r12), t13._writer = void 0, e7._ownerWritableStream = void 0;
    }
    __name(Yn2, "Yn");
    function Gn2(e7, t13) {
      const r12 = e7._ownerWritableStream, n6 = r12._writableStreamController, o7 = ta(n6, t13);
      if (r12 !== e7._ownerWritableStream) return b3(at3("write to"));
      const i7 = r12._state;
      if ("errored" === i7) return b3(r12._storedError);
      if (oe2(r12) || "closed" === i7) return b3(new TypeError("The stream is closing or closed and cannot be written to"));
      if ("erroring" === i7) return b3(r12._storedError);
      const a8 = Mi(r12);
      return ra(n6, t13, o7), a8;
    }
    __name(Gn2, "Gn");
    Object.defineProperties(Ve3.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h22(Ve3.prototype.abort, "abort"), h22(Ve3.prototype.close, "close"), h22(Ve3.prototype.releaseLock, "releaseLock"), h22(Ve3.prototype.write, "write"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Ve3.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true }), n$1(ke3, "IsWritableStreamDefaultWriter"), n$1(Gi, "WritableStreamDefaultWriterAbort"), n$1(Vn2, "WritableStreamDefaultWriterClose"), n$1(Zi, "WritableStreamDefaultWriterCloseWithErrorPropagation"), n$1(Ki, "WritableStreamDefaultWriterEnsureClosedPromiseRejected"), n$1(Qn2, "WritableStreamDefaultWriterEnsureReadyPromiseRejected"), n$1(Ji, "WritableStreamDefaultWriterGetDesiredSize"), n$1(Yn2, "WritableStreamDefaultWriterRelease"), n$1(Gn2, "WritableStreamDefaultWriterWrite");
    const $e3 = {}, He3 = class {
      static {
        __name(this, "He");
      }
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get abortReason() {
        if (!Ir3(this)) throw zr3("abortReason");
        return this._abortReason;
      }
      get signal() {
        if (!Ir3(this)) throw zr3("signal");
        if (void 0 === this._abortController) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
        return this._abortController.signal;
      }
      error(e7 = void 0) {
        if (!Ir3(this)) throw zr3("error");
        "writable" === this._controlledWritableStream._state && Xn2(this, e7);
      }
      [_3](e7) {
        const t13 = this._abortAlgorithm(e7);
        return kt3(this), t13;
      }
      [S3]() {
        Se3(this);
      }
    };
    n$1(He3, "WritableStreamDefaultController");
    let Xe3 = He3;
    function Ir3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_controlledWritableStream")) && e7 instanceof Xe3;
    }
    __name(Ir3, "Ir");
    function Kn2(e7, t13, r12, n6, o7, i7, a8, h7) {
      t13._controlledWritableStream = e7, e7._writableStreamController = t13, t13._queue = void 0, t13._queueTotalSize = void 0, Se3(t13), t13._abortReason = void 0, t13._abortController = Di(), t13._started = false, t13._strategySizeAlgorithm = h7, t13._strategyHWM = a8, t13._writeAlgorithm = n6, t13._closeAlgorithm = o7, t13._abortAlgorithm = i7;
      const m6 = Fr3(t13);
      Or3(e7, m6), g4(T22(r12()), () => (t13._started = true, qt3(t13), null), (r13) => (t13._started = true, Wr3(e7, r13), null));
    }
    __name(Kn2, "Kn");
    function Xi(e7, t13, r12, n6) {
      const o7 = Object.create(Xe3.prototype);
      let i7, a8, h7, m6;
      i7 = void 0 !== t13.start ? n$1(() => t13.start(o7), "startAlgorithm") : n$1(() => {
      }, "startAlgorithm"), a8 = void 0 !== t13.write ? n$1((e8) => t13.write(e8, o7), "writeAlgorithm") : n$1(() => T22(void 0), "writeAlgorithm"), h7 = void 0 !== t13.close ? n$1(() => t13.close(), "closeAlgorithm") : n$1(() => T22(void 0), "closeAlgorithm"), m6 = void 0 !== t13.abort ? n$1((e8) => t13.abort(e8), "abortAlgorithm") : n$1(() => T22(void 0), "abortAlgorithm"), Kn2(e7, o7, i7, a8, h7, m6, r12, n6);
    }
    __name(Xi, "Xi");
    function kt3(e7) {
      e7._writeAlgorithm = void 0, e7._closeAlgorithm = void 0, e7._abortAlgorithm = void 0, e7._strategySizeAlgorithm = void 0;
    }
    __name(kt3, "kt");
    function ea(e7) {
      Rr3(e7, $e3, 0), qt3(e7);
    }
    __name(ea, "ea");
    function ta(e7, t13) {
      try {
        return e7._strategySizeAlgorithm(t13);
      } catch (t14) {
        return it3(e7, t14), 1;
      }
    }
    __name(ta, "ta");
    function Jn2(e7) {
      return e7._strategyHWM - e7._queueTotalSize;
    }
    __name(Jn2, "Jn");
    function ra(e7, t13, r12) {
      try {
        Rr3(e7, t13, r12);
      } catch (t14) {
        return void it3(e7, t14);
      }
      const n6 = e7._controlledWritableStream;
      oe2(n6) || "writable" !== n6._state || Or3(n6, Fr3(e7)), qt3(e7);
    }
    __name(ra, "ra");
    function qt3(e7) {
      const t13 = e7._controlledWritableStream;
      if (!e7._started || void 0 !== t13._inFlightWriteRequest) return;
      if ("erroring" === t13._state) return void qr3(t13);
      if (0 === e7._queue.length) return;
      const r12 = pi(e7);
      r12 === $e3 ? na(e7) : oa(e7, r12);
    }
    __name(qt3, "qt");
    function it3(e7, t13) {
      "writable" === e7._controlledWritableStream._state && Xn2(e7, t13);
    }
    __name(it3, "it");
    function na(e7) {
      const t13 = e7._controlledWritableStream;
      Qi(t13), wr3(e7);
      const r12 = e7._closeAlgorithm();
      kt3(e7), g4(r12, () => (Ni(t13), null), (e8) => (Hi(t13, e8), null));
    }
    __name(na, "na");
    function oa(e7, t13) {
      const r12 = e7._controlledWritableStream;
      Yi(r12), g4(e7._writeAlgorithm(t13), () => {
        Ui(r12);
        const t14 = r12._state;
        if (wr3(e7), !oe2(r12) && "writable" === t14) {
          const t15 = Fr3(e7);
          Or3(r12, t15);
        }
        return qt3(e7), null;
      }, (t14) => ("writable" === r12._state && kt3(e7), xi(r12, t14), null));
    }
    __name(oa, "oa");
    function Fr3(e7) {
      return Jn2(e7) <= 0;
    }
    __name(Fr3, "Fr");
    function Xn2(e7, t13) {
      const r12 = e7._controlledWritableStream;
      kt3(e7), kr3(r12, t13);
    }
    __name(Xn2, "Xn");
    function Ot3(e7) {
      return new TypeError(`WritableStream.prototype.${e7} can only be used on a WritableStream`);
    }
    __name(Ot3, "Ot");
    function zr3(e7) {
      return new TypeError(`WritableStreamDefaultController.prototype.${e7} can only be used on a WritableStreamDefaultController`);
    }
    __name(zr3, "zr");
    function qe3(e7) {
      return new TypeError(`WritableStreamDefaultWriter.prototype.${e7} can only be used on a WritableStreamDefaultWriter`);
    }
    __name(qe3, "qe");
    function at3(e7) {
      return new TypeError("Cannot " + e7 + " a stream using a released writer");
    }
    __name(at3, "at");
    function It3(e7) {
      e7._closedPromise = A4((t13, r12) => {
        e7._closedPromise_resolve = t13, e7._closedPromise_reject = r12, e7._closedPromiseState = "pending";
      });
    }
    __name(It3, "It");
    function eo(e7, t13) {
      It3(e7), jr3(e7, t13);
    }
    __name(eo, "eo");
    function ia(e7) {
      It3(e7), to(e7);
    }
    __name(ia, "ia");
    function jr3(e7, t13) {
      void 0 !== e7._closedPromise_reject && (Q2(e7._closedPromise), e7._closedPromise_reject(t13), e7._closedPromise_resolve = void 0, e7._closedPromise_reject = void 0, e7._closedPromiseState = "rejected");
    }
    __name(jr3, "jr");
    function aa(e7, t13) {
      eo(e7, t13);
    }
    __name(aa, "aa");
    function to(e7) {
      void 0 !== e7._closedPromise_resolve && (e7._closedPromise_resolve(void 0), e7._closedPromise_resolve = void 0, e7._closedPromise_reject = void 0, e7._closedPromiseState = "resolved");
    }
    __name(to, "to");
    function Ft3(e7) {
      e7._readyPromise = A4((t13, r12) => {
        e7._readyPromise_resolve = t13, e7._readyPromise_reject = r12;
      }), e7._readyPromiseState = "pending";
    }
    __name(Ft3, "Ft");
    function Lr3(e7, t13) {
      Ft3(e7), no(e7, t13);
    }
    __name(Lr3, "Lr");
    function ro(e7) {
      Ft3(e7), Dr3(e7);
    }
    __name(ro, "ro");
    function no(e7, t13) {
      void 0 !== e7._readyPromise_reject && (Q2(e7._readyPromise), e7._readyPromise_reject(t13), e7._readyPromise_resolve = void 0, e7._readyPromise_reject = void 0, e7._readyPromiseState = "rejected");
    }
    __name(no, "no");
    function sa(e7) {
      Ft3(e7);
    }
    __name(sa, "sa");
    function ua(e7, t13) {
      Lr3(e7, t13);
    }
    __name(ua, "ua");
    function Dr3(e7) {
      void 0 !== e7._readyPromise_resolve && (e7._readyPromise_resolve(void 0), e7._readyPromise_resolve = void 0, e7._readyPromise_reject = void 0, e7._readyPromiseState = "fulfilled");
    }
    __name(Dr3, "Dr");
    function la() {
      return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof Hc < "u" ? Hc : void 0;
    }
    __name(la, "la");
    Object.defineProperties(Xe3.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Xe3.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true }), n$1(Ir3, "IsWritableStreamDefaultController"), n$1(Kn2, "SetUpWritableStreamDefaultController"), n$1(Xi, "SetUpWritableStreamDefaultControllerFromUnderlyingSink"), n$1(kt3, "WritableStreamDefaultControllerClearAlgorithms"), n$1(ea, "WritableStreamDefaultControllerClose"), n$1(ta, "WritableStreamDefaultControllerGetChunkSize"), n$1(Jn2, "WritableStreamDefaultControllerGetDesiredSize"), n$1(ra, "WritableStreamDefaultControllerWrite"), n$1(qt3, "WritableStreamDefaultControllerAdvanceQueueIfNeeded"), n$1(it3, "WritableStreamDefaultControllerErrorIfNeeded"), n$1(na, "WritableStreamDefaultControllerProcessClose"), n$1(oa, "WritableStreamDefaultControllerProcessWrite"), n$1(Fr3, "WritableStreamDefaultControllerGetBackpressure"), n$1(Xn2, "WritableStreamDefaultControllerError"), n$1(Ot3, "streamBrandCheckException$2"), n$1(zr3, "defaultControllerBrandCheckException$2"), n$1(qe3, "defaultWriterBrandCheckException"), n$1(at3, "defaultWriterLockException"), n$1(It3, "defaultWriterClosedPromiseInitialize"), n$1(eo, "defaultWriterClosedPromiseInitializeAsRejected"), n$1(ia, "defaultWriterClosedPromiseInitializeAsResolved"), n$1(jr3, "defaultWriterClosedPromiseReject"), n$1(aa, "defaultWriterClosedPromiseResetToRejected"), n$1(to, "defaultWriterClosedPromiseResolve"), n$1(Ft3, "defaultWriterReadyPromiseInitialize"), n$1(Lr3, "defaultWriterReadyPromiseInitializeAsRejected"), n$1(ro, "defaultWriterReadyPromiseInitializeAsResolved"), n$1(no, "defaultWriterReadyPromiseReject"), n$1(sa, "defaultWriterReadyPromiseReset"), n$1(ua, "defaultWriterReadyPromiseResetToRejected"), n$1(Dr3, "defaultWriterReadyPromiseResolve"), n$1(la, "getGlobals");
    const Ge3 = la();
    function fa(e7) {
      if ("function" != typeof e7 && "object" != typeof e7 || "DOMException" !== e7.name) return false;
      try {
        return new e7(), true;
      } catch {
        return false;
      }
    }
    __name(fa, "fa");
    function ca() {
      const e7 = null == Ge3 ? void 0 : Ge3.DOMException;
      return fa(e7) ? e7 : void 0;
    }
    __name(ca, "ca");
    function da() {
      const e7 = n$1(function(e8, t13) {
        this.message = e8 || "", this.name = t13 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
      }, "DOMException");
      return h22(e7, "DOMException"), e7.prototype = Object.create(Error.prototype), Object.defineProperty(e7.prototype, "constructor", { value: e7, writable: true, configurable: true }), e7;
    }
    __name(da, "da");
    n$1(fa, "isDOMExceptionConstructor"), n$1(ca, "getFromGlobal"), n$1(da, "createPolyfill");
    const Qe3 = ca() || da();
    function oo(e7, t13, r12, n6, o7, i7) {
      const a8 = ze3(e7), h7 = xn2(t13);
      e7._disturbed = true;
      let m6 = false, _4 = T22(void 0);
      return A4((S4, E5) => {
        let v7;
        if (void 0 !== i7) {
          if (v7 = n$1(() => {
            const r13 = void 0 !== i7.reason ? i7.reason : new Qe3("Aborted", "AbortError"), a9 = [];
            n6 || a9.push(() => "writable" === t13._state ? Bt3(t13, r13) : T22(void 0)), o7 || a9.push(() => "readable" === e7._state ? X2(e7, r13) : T22(void 0)), x3(() => Promise.all(a9.map((e8) => e8())), true, r13);
          }, "abortAlgorithm"), i7.aborted) return void v7();
          i7.addEventListener("abort", v7);
        }
        function ee2() {
          return A4((e8, t14) => {
            function W2(r13) {
              r13 ? e8() : q2(Ne3(), W2, t14);
            }
            __name(W2, "W");
            n$1(W2, "next"), W2(false);
          });
        }
        __name(ee2, "ee");
        function Ne3() {
          return m6 ? T22(true) : q2(h7._readyPromise, () => A4((e8, t14) => {
            et3(a8, { _chunkSteps: n$1((t15) => {
              _4 = q2(Gn2(h7, t15), void 0, l5), e8(false);
            }, "_chunkSteps"), _closeSteps: n$1(() => e8(true), "_closeSteps"), _errorSteps: t14 });
          }));
        }
        __name(Ne3, "Ne");
        if (n$1(ee2, "pipeLoop"), n$1(Ne3, "pipeStep"), me3(e7, a8._closedPromise, (e8) => (n6 ? K2(true, e8) : x3(() => Bt3(t13, e8), true, e8), null)), me3(t13, h7._closedPromise, (t14) => (o7 ? K2(true, t14) : x3(() => X2(e7, t14), true, t14), null)), U3(e7, a8._closedPromise, () => (r12 ? K2() : x3(() => Zi(h7)), null)), oe2(t13) || "closed" === t13._state) {
          const t14 = new TypeError("the destination writable stream closed before all data could be piped to it");
          o7 ? K2(true, t14) : x3(() => X2(e7, t14), true, t14);
        }
        function Ee3() {
          const e8 = _4;
          return q2(_4, () => e8 !== _4 ? Ee3() : void 0);
        }
        __name(Ee3, "Ee");
        function me3(e8, t14, r13) {
          "errored" === e8._state ? r13(e8._storedError) : I3(t14, r13);
        }
        __name(me3, "me");
        function U3(e8, t14, r13) {
          "closed" === e8._state ? r13() : V2(t14, r13);
        }
        __name(U3, "U");
        function x3(e8, r13, n7) {
          function Y2() {
            return g4(e8(), () => be3(r13, n7), (e9) => be3(true, e9)), null;
          }
          __name(Y2, "Y");
          m6 || (m6 = true, "writable" !== t13._state || oe2(t13) ? Y2() : V2(Ee3(), Y2), n$1(Y2, "doTheRest"));
        }
        __name(x3, "x");
        function K2(e8, r13) {
          m6 || (m6 = true, "writable" !== t13._state || oe2(t13) ? be3(e8, r13) : V2(Ee3(), () => be3(e8, r13)));
        }
        __name(K2, "K");
        function be3(e8, t14) {
          return Yn2(h7), ue3(a8), void 0 !== i7 && i7.removeEventListener("abort", v7), e8 ? E5(t14) : S4(void 0), null;
        }
        __name(be3, "be");
        Q2(ee2()), n$1(Ee3, "waitForWritesToFinish"), n$1(me3, "isOrBecomesErrored"), n$1(U3, "isOrBecomesClosed"), n$1(x3, "shutdownWithAction"), n$1(K2, "shutdown"), n$1(be3, "finalize");
      });
    }
    __name(oo, "oo");
    n$1(oo, "ReadableStreamPipeTo");
    const Ye3 = class {
      static {
        __name(this, "Ye");
      }
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!zt3(this)) throw Lt3("desiredSize");
        return Mr3(this);
      }
      close() {
        if (!zt3(this)) throw Lt3("close");
        if (!Ue3(this)) throw new TypeError("The stream is not in a state that permits close");
        Oe3(this);
      }
      enqueue(e7 = void 0) {
        if (!zt3(this)) throw Lt3("enqueue");
        if (!Ue3(this)) throw new TypeError("The stream is not in a state that permits enqueue");
        return Me3(this, e7);
      }
      error(e7 = void 0) {
        if (!zt3(this)) throw Lt3("error");
        J2(this, e7);
      }
      [E4](e7) {
        Se3(this);
        const t13 = this._cancelAlgorithm(e7);
        return jt3(this), t13;
      }
      [v6](e7) {
        const t13 = this._controlledReadableStream;
        if (this._queue.length > 0) {
          const r12 = wr3(this);
          this._closeRequested && 0 === this._queue.length ? (jt3(this), lt3(t13)) : st3(this), e7._chunkSteps(r12);
        } else hn2(t13, e7), st3(this);
      }
      [T3]() {
      }
    };
    n$1(Ye3, "ReadableStreamDefaultController");
    let Ze3 = Ye3;
    function zt3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_controlledReadableStream")) && e7 instanceof Ze3;
    }
    __name(zt3, "zt");
    function st3(e7) {
      io(e7) && (e7._pulling ? e7._pullAgain = true : (e7._pulling = true, g4(e7._pullAlgorithm(), () => (e7._pulling = false, e7._pullAgain && (e7._pullAgain = false, st3(e7)), null), (t13) => (J2(e7, t13), null))));
    }
    __name(st3, "st");
    function io(e7) {
      const t13 = e7._controlledReadableStream;
      return !(!Ue3(e7) || !e7._started || !(Ce3(t13) && gt3(t13) > 0 || Mr3(e7) > 0));
    }
    __name(io, "io");
    function jt3(e7) {
      e7._pullAlgorithm = void 0, e7._cancelAlgorithm = void 0, e7._strategySizeAlgorithm = void 0;
    }
    __name(jt3, "jt");
    function Oe3(e7) {
      if (!Ue3(e7)) return;
      const t13 = e7._controlledReadableStream;
      e7._closeRequested = true, 0 === e7._queue.length && (jt3(e7), lt3(t13));
    }
    __name(Oe3, "Oe");
    function Me3(e7, t13) {
      if (!Ue3(e7)) return;
      const r12 = e7._controlledReadableStream;
      if (Ce3(r12) && gt3(r12) > 0) pr3(r12, t13, false);
      else {
        let r13;
        try {
          r13 = e7._strategySizeAlgorithm(t13);
        } catch (t14) {
          throw J2(e7, t14), t14;
        }
        try {
          Rr3(e7, t13, r13);
        } catch (t14) {
          throw J2(e7, t14), t14;
        }
      }
      st3(e7);
    }
    __name(Me3, "Me");
    function J2(e7, t13) {
      const r12 = e7._controlledReadableStream;
      "readable" === r12._state && (Se3(e7), jt3(e7), lo(r12, t13));
    }
    __name(J2, "J");
    function Mr3(e7) {
      const t13 = e7._controlledReadableStream._state;
      return "errored" === t13 ? null : "closed" === t13 ? 0 : e7._strategyHWM - e7._queueTotalSize;
    }
    __name(Mr3, "Mr");
    function ma(e7) {
      return !io(e7);
    }
    __name(ma, "ma");
    function Ue3(e7) {
      const t13 = e7._controlledReadableStream._state;
      return !e7._closeRequested && "readable" === t13;
    }
    __name(Ue3, "Ue");
    function ao(e7, t13, r12, n6, o7, i7, a8) {
      t13._controlledReadableStream = e7, t13._queue = void 0, t13._queueTotalSize = void 0, Se3(t13), t13._started = false, t13._closeRequested = false, t13._pullAgain = false, t13._pulling = false, t13._strategySizeAlgorithm = a8, t13._strategyHWM = i7, t13._pullAlgorithm = n6, t13._cancelAlgorithm = o7, e7._readableStreamController = t13, g4(T22(r12()), () => (t13._started = true, st3(t13), null), (e8) => (J2(t13, e8), null));
    }
    __name(ao, "ao");
    function ba(e7, t13, r12, n6) {
      const o7 = Object.create(Ze3.prototype);
      let i7, a8, h7;
      i7 = void 0 !== t13.start ? n$1(() => t13.start(o7), "startAlgorithm") : n$1(() => {
      }, "startAlgorithm"), a8 = void 0 !== t13.pull ? n$1(() => t13.pull(o7), "pullAlgorithm") : n$1(() => T22(void 0), "pullAlgorithm"), h7 = void 0 !== t13.cancel ? n$1((e8) => t13.cancel(e8), "cancelAlgorithm") : n$1(() => T22(void 0), "cancelAlgorithm"), ao(e7, o7, i7, a8, h7, r12, n6);
    }
    __name(ba, "ba");
    function Lt3(e7) {
      return new TypeError(`ReadableStreamDefaultController.prototype.${e7} can only be used on a ReadableStreamDefaultController`);
    }
    __name(Lt3, "Lt");
    function pa(e7, t13) {
      return Ae3(e7._readableStreamController) ? ga(e7) : ya(e7);
    }
    __name(pa, "pa");
    function ya(e7, t13) {
      const r12 = ze3(e7);
      let n6, o7, a8, h7, m6, _4 = false, S4 = false, E5 = false, v7 = false;
      const T4 = A4((e8) => {
        m6 = e8;
      });
      function ee2() {
        return _4 ? (S4 = true, T22(void 0)) : (_4 = true, et3(r12, { _chunkSteps: n$1((e8) => {
          i6(() => {
            S4 = false;
            const t14 = e8, r13 = e8;
            E5 || Me3(a8._readableStreamController, t14), v7 || Me3(h7._readableStreamController, r13), _4 = false, S4 && ee2();
          });
        }, "_chunkSteps"), _closeSteps: n$1(() => {
          _4 = false, E5 || Oe3(a8._readableStreamController), v7 || Oe3(h7._readableStreamController), (!E5 || !v7) && m6(void 0);
        }, "_closeSteps"), _errorSteps: n$1(() => {
          _4 = false;
        }, "_errorSteps") }), T22(void 0));
      }
      __name(ee2, "ee");
      function Ne3(t14) {
        if (E5 = true, n6 = t14, v7) {
          const t15 = tt3([n6, o7]), r13 = X2(e7, t15);
          m6(r13);
        }
        return T4;
      }
      __name(Ne3, "Ne");
      function Ee3(t14) {
        if (v7 = true, o7 = t14, E5) {
          const t15 = tt3([n6, o7]), r13 = X2(e7, t15);
          m6(r13);
        }
        return T4;
      }
      __name(Ee3, "Ee");
      function me3() {
      }
      __name(me3, "me");
      return n$1(ee2, "pullAlgorithm"), n$1(Ne3, "cancel1Algorithm"), n$1(Ee3, "cancel2Algorithm"), n$1(me3, "startAlgorithm"), a8 = ut3(me3, ee2, Ne3), h7 = ut3(me3, ee2, Ee3), I3(r12._closedPromise, (e8) => (J2(a8._readableStreamController, e8), J2(h7._readableStreamController, e8), (!E5 || !v7) && m6(void 0), null)), [a8, h7];
    }
    __name(ya, "ya");
    function ga(e7) {
      let t13, r12, n6, o7, a8, h7 = ze3(e7), m6 = false, _4 = false, S4 = false, E5 = false, v7 = false;
      const T4 = A4((e8) => {
        a8 = e8;
      });
      function ee2(e8) {
        I3(e8._closedPromise, (t14) => (e8 !== h7 || (Z2(n6._readableStreamController, t14), Z2(o7._readableStreamController, t14), (!E5 || !v7) && a8(void 0)), null));
      }
      __name(ee2, "ee");
      function Ne3() {
        We3(h7) && (ue3(h7), h7 = ze3(e7), ee2(h7)), et3(h7, { _chunkSteps: n$1((t14) => {
          i6(() => {
            _4 = false, S4 = false;
            const r13 = t14;
            let i7 = t14;
            if (!E5 && !v7) try {
              i7 = Cn2(t14);
            } catch (t15) {
              return Z2(n6._readableStreamController, t15), Z2(o7._readableStreamController, t15), void a8(X2(e7, t15));
            }
            E5 || Tt3(n6._readableStreamController, r13), v7 || Tt3(o7._readableStreamController, i7), m6 = false, _4 ? me3() : S4 && U3();
          });
        }, "_chunkSteps"), _closeSteps: n$1(() => {
          m6 = false, E5 || rt3(n6._readableStreamController), v7 || rt3(o7._readableStreamController), n6._readableStreamController._pendingPullIntos.length > 0 && Ct3(n6._readableStreamController, 0), o7._readableStreamController._pendingPullIntos.length > 0 && Ct3(o7._readableStreamController, 0), (!E5 || !v7) && a8(void 0);
        }, "_closeSteps"), _errorSteps: n$1(() => {
          m6 = false;
        }, "_errorSteps") });
      }
      __name(Ne3, "Ne");
      function Ee3(t14, r13) {
        ge3(h7) && (ue3(h7), h7 = jn2(e7), ee2(h7));
        const T5 = r13 ? o7 : n6, w5 = r13 ? n6 : o7;
        $n2(h7, t14, 1, { _chunkSteps: n$1((t15) => {
          i6(() => {
            _4 = false, S4 = false;
            const n7 = r13 ? v7 : E5;
            if (r13 ? E5 : v7) n7 || Pt3(T5._readableStreamController, t15);
            else {
              let r14;
              try {
                r14 = Cn2(t15);
              } catch (t16) {
                return Z2(T5._readableStreamController, t16), Z2(w5._readableStreamController, t16), void a8(X2(e7, t16));
              }
              n7 || Pt3(T5._readableStreamController, t15), Tt3(w5._readableStreamController, r14);
            }
            m6 = false, _4 ? me3() : S4 && U3();
          });
        }, "_chunkSteps"), _closeSteps: n$1((e8) => {
          m6 = false;
          const t15 = r13 ? v7 : E5, n7 = r13 ? E5 : v7;
          t15 || rt3(T5._readableStreamController), n7 || rt3(w5._readableStreamController), void 0 !== e8 && (t15 || Pt3(T5._readableStreamController, e8), !n7 && w5._readableStreamController._pendingPullIntos.length > 0 && Ct3(w5._readableStreamController, 0)), (!t15 || !n7) && a8(void 0);
        }, "_closeSteps"), _errorSteps: n$1(() => {
          m6 = false;
        }, "_errorSteps") });
      }
      __name(Ee3, "Ee");
      function me3() {
        if (m6) return _4 = true, T22(void 0);
        m6 = true;
        const e8 = vr3(n6._readableStreamController);
        return null === e8 ? Ne3() : Ee3(e8._view, false), T22(void 0);
      }
      __name(me3, "me");
      function U3() {
        if (m6) return S4 = true, T22(void 0);
        m6 = true;
        const e8 = vr3(o7._readableStreamController);
        return null === e8 ? Ne3() : Ee3(e8._view, true), T22(void 0);
      }
      __name(U3, "U");
      function x3(n7) {
        if (E5 = true, t13 = n7, v7) {
          const n8 = tt3([t13, r12]), o8 = X2(e7, n8);
          a8(o8);
        }
        return T4;
      }
      __name(x3, "x");
      function K2(n7) {
        if (v7 = true, r12 = n7, E5) {
          const n8 = tt3([t13, r12]), o8 = X2(e7, n8);
          a8(o8);
        }
        return T4;
      }
      __name(K2, "K");
      function be3() {
      }
      __name(be3, "be");
      return n$1(ee2, "forwardReaderError"), n$1(Ne3, "pullWithDefaultReader"), n$1(Ee3, "pullWithBYOBReader"), n$1(me3, "pull1Algorithm"), n$1(U3, "pull2Algorithm"), n$1(x3, "cancel1Algorithm"), n$1(K2, "cancel2Algorithm"), n$1(be3, "startAlgorithm"), n6 = uo(be3, me3, x3), o7 = uo(be3, U3, K2), ee2(h7), [n6, o7];
    }
    __name(ga, "ga");
    function _a2(e7) {
      return u4(e7) && typeof e7.getReader < "u";
    }
    __name(_a2, "_a2");
    function Sa(e7) {
      return _a2(e7) ? Ra(e7.getReader()) : wa(e7);
    }
    __name(Sa, "Sa");
    function wa(e7) {
      let t13;
      const r12 = Tn2(e7, "async"), n6 = l5;
      function f22() {
        let e8;
        try {
          e8 = di(r12);
        } catch (e9) {
          return b3(e9);
        }
        return F3(T22(e8), (e9) => {
          if (!u4(e9)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
          if (hi(e9)) Oe3(t13._readableStreamController);
          else {
            const r13 = mi(e9);
            Me3(t13._readableStreamController, r13);
          }
        });
      }
      __name(f22, "f2");
      function c4(e8) {
        const t14 = r12.iterator;
        let n7, o7;
        try {
          n7 = St3(t14, "return");
        } catch (e9) {
          return b3(e9);
        }
        if (void 0 === n7) return T22(void 0);
        try {
          o7 = O3(n7, t14, [e8]);
        } catch (e9) {
          return b3(e9);
        }
        return F3(T22(o7), (e9) => {
          if (!u4(e9)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
        });
      }
      __name(c4, "c");
      return n$1(f22, "pullAlgorithm"), n$1(c4, "cancelAlgorithm"), t13 = ut3(n6, f22, c4, 0), t13;
    }
    __name(wa, "wa");
    function Ra(e7) {
      let t13;
      const r12 = l5;
      function s6() {
        let r13;
        try {
          r13 = e7.read();
        } catch (e8) {
          return b3(e8);
        }
        return F3(r13, (e8) => {
          if (!u4(e8)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
          if (e8.done) Oe3(t13._readableStreamController);
          else {
            const r14 = e8.value;
            Me3(t13._readableStreamController, r14);
          }
        });
      }
      __name(s6, "s");
      function f22(t14) {
        try {
          return T22(e7.cancel(t14));
        } catch (e8) {
          return b3(e8);
        }
      }
      __name(f22, "f2");
      return n$1(s6, "pullAlgorithm"), n$1(f22, "cancelAlgorithm"), t13 = ut3(r12, s6, f22, 0), t13;
    }
    __name(Ra, "Ra");
    function Ta(e7, t13) {
      ne2(e7, t13);
      const r12 = e7, n6 = null == r12 ? void 0 : r12.autoAllocateChunkSize, o7 = null == r12 ? void 0 : r12.cancel, i7 = null == r12 ? void 0 : r12.pull, a8 = null == r12 ? void 0 : r12.start, h7 = null == r12 ? void 0 : r12.type;
      return { autoAllocateChunkSize: void 0 === n6 ? void 0 : mr3(n6, `${t13} has member 'autoAllocateChunkSize' that`), cancel: void 0 === o7 ? void 0 : Ca(o7, r12, `${t13} has member 'cancel' that`), pull: void 0 === i7 ? void 0 : Pa(i7, r12, `${t13} has member 'pull' that`), start: void 0 === a8 ? void 0 : Ea(a8, r12, `${t13} has member 'start' that`), type: void 0 === h7 ? void 0 : va(h7, `${t13} has member 'type' that`) };
    }
    __name(Ta, "Ta");
    function Ca(e7, t13, r12) {
      return G2(e7, r12), (r13) => z3(e7, t13, [r13]);
    }
    __name(Ca, "Ca");
    function Pa(e7, t13, r12) {
      return G2(e7, r12), (r13) => z3(e7, t13, [r13]);
    }
    __name(Pa, "Pa");
    function Ea(e7, t13, r12) {
      return G2(e7, r12), (r13) => O3(e7, t13, [r13]);
    }
    __name(Ea, "Ea");
    function va(e7, t13) {
      if ("bytes" != (e7 = `${e7}`)) throw new TypeError(`${t13} '${e7}' is not a valid enumeration value for ReadableStreamType`);
      return e7;
    }
    __name(va, "va");
    function Aa(e7, t13) {
      return ne2(e7, t13), { preventCancel: !!(null == e7 ? void 0 : e7.preventCancel) };
    }
    __name(Aa, "Aa");
    function so(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.preventAbort, n6 = null == e7 ? void 0 : e7.preventCancel, o7 = null == e7 ? void 0 : e7.preventClose, i7 = null == e7 ? void 0 : e7.signal;
      return void 0 !== i7 && Ba(i7, `${t13} has member 'signal' that`), { preventAbort: !!r12, preventCancel: !!n6, preventClose: !!o7, signal: i7 };
    }
    __name(so, "so");
    function Ba(e7, t13) {
      if (!ji(e7)) throw new TypeError(`${t13} is not an AbortSignal.`);
    }
    __name(Ba, "Ba");
    function Wa(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.readable;
      dr3(r12, "readable", "ReadableWritablePair"), br3(r12, `${t13} has member 'readable' that`);
      const n6 = null == e7 ? void 0 : e7.writable;
      return dr3(n6, "writable", "ReadableWritablePair"), Un2(n6, `${t13} has member 'writable' that`), { readable: r12, writable: n6 };
    }
    __name(Wa, "Wa");
    Object.defineProperties(Ze3.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h22(Ze3.prototype.close, "close"), h22(Ze3.prototype.enqueue, "enqueue"), h22(Ze3.prototype.error, "error"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Ze3.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true }), n$1(zt3, "IsReadableStreamDefaultController"), n$1(st3, "ReadableStreamDefaultControllerCallPullIfNeeded"), n$1(io, "ReadableStreamDefaultControllerShouldCallPull"), n$1(jt3, "ReadableStreamDefaultControllerClearAlgorithms"), n$1(Oe3, "ReadableStreamDefaultControllerClose"), n$1(Me3, "ReadableStreamDefaultControllerEnqueue"), n$1(J2, "ReadableStreamDefaultControllerError"), n$1(Mr3, "ReadableStreamDefaultControllerGetDesiredSize"), n$1(ma, "ReadableStreamDefaultControllerHasBackpressure"), n$1(Ue3, "ReadableStreamDefaultControllerCanCloseOrEnqueue"), n$1(ao, "SetUpReadableStreamDefaultController"), n$1(ba, "SetUpReadableStreamDefaultControllerFromUnderlyingSource"), n$1(Lt3, "defaultControllerBrandCheckException$1"), n$1(pa, "ReadableStreamTee"), n$1(ya, "ReadableStreamDefaultTee"), n$1(ga, "ReadableByteStreamTee"), n$1(_a2, "isReadableStreamLike"), n$1(Sa, "ReadableStreamFrom"), n$1(wa, "ReadableStreamFromIterable"), n$1(Ra, "ReadableStreamFromDefaultReader"), n$1(Ta, "convertUnderlyingDefaultOrByteSource"), n$1(Ca, "convertUnderlyingSourceCancelCallback"), n$1(Pa, "convertUnderlyingSourcePullCallback"), n$1(Ea, "convertUnderlyingSourceStartCallback"), n$1(va, "convertReadableStreamType"), n$1(Aa, "convertIteratorOptions"), n$1(so, "convertPipeOptions"), n$1(Ba, "assertAbortSignal"), n$1(Wa, "convertReadableWritablePair");
    const ct3 = class {
      static {
        __name(this, "ct");
      }
      constructor(e7 = {}, t13 = {}) {
        void 0 === e7 ? e7 = null : cn2(e7, "First parameter");
        const r12 = At3(t13, "Second parameter"), n6 = Ta(e7, "First parameter");
        if (Ur3(this), "bytes" === n6.type) {
          if (void 0 !== r12.size) throw new RangeError("The strategy for a byte stream cannot have a size function");
          Ci(this, n6, ot3(r12, 0));
        } else {
          const e8 = vt3(r12);
          ba(this, n6, ot3(r12, 1), e8);
        }
      }
      get locked() {
        if (!Te3(this)) throw Ie3("locked");
        return Ce3(this);
      }
      cancel(e7 = void 0) {
        return Te3(this) ? Ce3(this) ? b3(new TypeError("Cannot cancel a stream that already has a reader")) : X2(this, e7) : b3(Ie3("cancel"));
      }
      getReader(e7 = void 0) {
        if (!Te3(this)) throw Ie3("getReader");
        return void 0 === Ei(e7, "First parameter").mode ? ze3(this) : jn2(this);
      }
      pipeThrough(e7, t13 = {}) {
        if (!Te3(this)) throw Ie3("pipeThrough");
        le2(e7, 1, "pipeThrough");
        const r12 = Wa(e7, "First parameter"), n6 = so(t13, "Second parameter");
        if (Ce3(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
        if (De3(r12.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
        return Q2(oo(this, r12.writable, n6.preventClose, n6.preventAbort, n6.preventCancel, n6.signal)), r12.readable;
      }
      pipeTo(e7, t13 = {}) {
        if (!Te3(this)) return b3(Ie3("pipeTo"));
        if (void 0 === e7) return b3("Parameter 1 is required in 'pipeTo'.");
        if (!Le3(e7)) return b3(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
        let r12;
        try {
          r12 = so(t13, "Second parameter");
        } catch (e8) {
          return b3(e8);
        }
        return Ce3(this) ? b3(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : De3(e7) ? b3(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : oo(this, e7, r12.preventClose, r12.preventAbort, r12.preventCancel, r12.signal);
      }
      tee() {
        if (!Te3(this)) throw Ie3("tee");
        return tt3(pa(this));
      }
      values(e7 = void 0) {
        if (!Te3(this)) throw Ie3("values");
        return fi(this, Aa(e7, "First parameter").preventCancel);
      }
      [ce4](e7) {
        return this.values(e7);
      }
      static from(e7) {
        return Sa(e7);
      }
    };
    n$1(ct3, "ReadableStream");
    let dt3 = ct3;
    function ut3(e7, t13, r12, n6 = 1, o7 = () => 1) {
      const i7 = Object.create(dt3.prototype);
      return Ur3(i7), ao(i7, Object.create(Ze3.prototype), e7, t13, r12, n6, o7), i7;
    }
    __name(ut3, "ut");
    function uo(e7, t13, r12) {
      const n6 = Object.create(dt3.prototype);
      return Ur3(n6), zn2(n6, Object.create(ye3.prototype), e7, t13, r12, 0, void 0), n6;
    }
    __name(uo, "uo");
    function Ur3(e7) {
      e7._state = "readable", e7._reader = void 0, e7._storedError = void 0, e7._disturbed = false;
    }
    __name(Ur3, "Ur");
    function Te3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_readableStreamController")) && e7 instanceof dt3;
    }
    __name(Te3, "Te");
    function Ce3(e7) {
      return void 0 !== e7._reader;
    }
    __name(Ce3, "Ce");
    function X2(e7, t13) {
      if (e7._disturbed = true, "closed" === e7._state) return T22(void 0);
      if ("errored" === e7._state) return b3(e7._storedError);
      lt3(e7);
      const r12 = e7._reader;
      if (void 0 !== r12 && We3(r12)) {
        const e8 = r12._readIntoRequests;
        r12._readIntoRequests = new m5(), e8.forEach((e9) => {
          e9._closeSteps(void 0);
        });
      }
      return F3(e7._readableStreamController[E4](t13), l5);
    }
    __name(X2, "X");
    function lt3(e7) {
      e7._state = "closed";
      const t13 = e7._reader;
      if (void 0 !== t13 && (ln2(t13), ge3(t13))) {
        const e8 = t13._readRequests;
        t13._readRequests = new m5(), e8.forEach((e9) => {
          e9._closeSteps();
        });
      }
    }
    __name(lt3, "lt");
    function lo(e7, t13) {
      e7._state = "errored", e7._storedError = t13;
      const r12 = e7._reader;
      void 0 !== r12 && (cr3(r12, t13), ge3(r12) ? bn2(r12, t13) : Mn2(r12, t13));
    }
    __name(lo, "lo");
    function Ie3(e7) {
      return new TypeError(`ReadableStream.prototype.${e7} can only be used on a ReadableStream`);
    }
    __name(Ie3, "Ie");
    function fo(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.highWaterMark;
      return dr3(r12, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: hr3(r12) };
    }
    __name(fo, "fo");
    Object.defineProperties(dt3, { from: { enumerable: true } }), Object.defineProperties(dt3.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h22(dt3.from, "from"), h22(dt3.prototype.cancel, "cancel"), h22(dt3.prototype.getReader, "getReader"), h22(dt3.prototype.pipeThrough, "pipeThrough"), h22(dt3.prototype.pipeTo, "pipeTo"), h22(dt3.prototype.tee, "tee"), h22(dt3.prototype.values, "values"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(dt3.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(dt3.prototype, ce4, { value: dt3.prototype.values, writable: true, configurable: true }), n$1(ut3, "CreateReadableStream"), n$1(uo, "CreateReadableByteStream"), n$1(Ur3, "InitializeReadableStream"), n$1(Te3, "IsReadableStream"), n$1(Ce3, "IsReadableStreamLocked"), n$1(X2, "ReadableStreamCancel"), n$1(lt3, "ReadableStreamClose"), n$1(lo, "ReadableStreamError"), n$1(Ie3, "streamBrandCheckException$1"), n$1(fo, "convertQueuingStrategyInit");
    const pt3 = n$1((e7) => e7.byteLength, "byteLengthSizeFunction");
    h22(pt3, "size");
    const ft3 = class {
      static {
        __name(this, "ft");
      }
      constructor(e7) {
        le2(e7, 1, "ByteLengthQueuingStrategy"), e7 = fo(e7, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = e7.highWaterMark;
      }
      get highWaterMark() {
        if (!mo(this)) throw ho("highWaterMark");
        return this._byteLengthQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!mo(this)) throw ho("size");
        return pt3;
      }
    };
    n$1(ft3, "ByteLengthQueuingStrategy");
    let ht3 = ft3;
    function ho(e7) {
      return new TypeError(`ByteLengthQueuingStrategy.prototype.${e7} can only be used on a ByteLengthQueuingStrategy`);
    }
    __name(ho, "ho");
    function mo(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_byteLengthQueuingStrategyHighWaterMark")) && e7 instanceof ht3;
    }
    __name(mo, "mo");
    Object.defineProperties(ht3.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(ht3.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true }), n$1(ho, "byteLengthBrandCheckException"), n$1(mo, "IsByteLengthQueuingStrategy");
    const mt3 = n$1(() => 1, "countSizeFunction");
    h22(mt3, "size");
    const _t3 = class {
      static {
        __name(this, "_t");
      }
      constructor(e7) {
        le2(e7, 1, "CountQueuingStrategy"), e7 = fo(e7, "First parameter"), this._countQueuingStrategyHighWaterMark = e7.highWaterMark;
      }
      get highWaterMark() {
        if (!yo(this)) throw po("highWaterMark");
        return this._countQueuingStrategyHighWaterMark;
      }
      get size() {
        if (!yo(this)) throw po("size");
        return mt3;
      }
    };
    n$1(_t3, "CountQueuingStrategy");
    let Mt3 = _t3;
    function po(e7) {
      return new TypeError(`CountQueuingStrategy.prototype.${e7} can only be used on a CountQueuingStrategy`);
    }
    __name(po, "po");
    function yo(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_countQueuingStrategyHighWaterMark")) && e7 instanceof Mt3;
    }
    __name(yo, "yo");
    function ka(e7, t13) {
      ne2(e7, t13);
      const r12 = null == e7 ? void 0 : e7.cancel, n6 = null == e7 ? void 0 : e7.flush, o7 = null == e7 ? void 0 : e7.readableType, i7 = null == e7 ? void 0 : e7.start, a8 = null == e7 ? void 0 : e7.transform, h7 = null == e7 ? void 0 : e7.writableType;
      return { cancel: void 0 === r12 ? void 0 : Fa(r12, e7, `${t13} has member 'cancel' that`), flush: void 0 === n6 ? void 0 : qa(n6, e7, `${t13} has member 'flush' that`), readableType: o7, start: void 0 === i7 ? void 0 : Oa(i7, e7, `${t13} has member 'start' that`), transform: void 0 === a8 ? void 0 : Ia(a8, e7, `${t13} has member 'transform' that`), writableType: h7 };
    }
    __name(ka, "ka");
    function qa(e7, t13, r12) {
      return G2(e7, r12), (r13) => z3(e7, t13, [r13]);
    }
    __name(qa, "qa");
    function Oa(e7, t13, r12) {
      return G2(e7, r12), (r13) => O3(e7, t13, [r13]);
    }
    __name(Oa, "Oa");
    function Ia(e7, t13, r12) {
      return G2(e7, r12), (r13, n6) => z3(e7, t13, [r13, n6]);
    }
    __name(Ia, "Ia");
    function Fa(e7, t13, r12) {
      return G2(e7, r12), (r13) => z3(e7, t13, [r13]);
    }
    __name(Fa, "Fa");
    Object.defineProperties(Mt3.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Mt3.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true }), n$1(po, "countBrandCheckException"), n$1(yo, "IsCountQueuingStrategy"), n$1(ka, "convertTransformer"), n$1(qa, "convertTransformerFlushCallback"), n$1(Oa, "convertTransformerStartCallback"), n$1(Ia, "convertTransformerTransformCallback"), n$1(Fa, "convertTransformerCancelCallback");
    const Dt3 = class {
      static {
        __name(this, "Dt");
      }
      constructor(e7 = {}, t13 = {}, r12 = {}) {
        void 0 === e7 && (e7 = null);
        const n6 = At3(t13, "Second parameter"), o7 = At3(r12, "Third parameter"), i7 = ka(e7, "First parameter");
        if (void 0 !== i7.readableType) throw new RangeError("Invalid readableType specified");
        if (void 0 !== i7.writableType) throw new RangeError("Invalid writableType specified");
        const a8 = ot3(o7, 0), h7 = vt3(o7), m6 = ot3(n6, 1), _4 = vt3(n6);
        let S4;
        za(this, A4((e8) => {
          S4 = e8;
        }), m6, _4, a8, h7), La(this, i7), void 0 !== i7.start ? S4(i7.start(this._transformStreamController)) : S4(void 0);
      }
      get readable() {
        if (!go(this)) throw Ro("readable");
        return this._readable;
      }
      get writable() {
        if (!go(this)) throw Ro("writable");
        return this._writable;
      }
    };
    n$1(Dt3, "TransformStream");
    let Vt3 = Dt3;
    function za(e7, t13, r12, n6, o7, i7) {
      function d7() {
        return t13;
      }
      __name(d7, "d");
      function p4(t14) {
        return Ma(e7, t14);
      }
      __name(p4, "p");
      function R3(t14) {
        return Ua(e7, t14);
      }
      __name(R3, "R");
      function y4() {
        return xa(e7);
      }
      __name(y4, "y");
      function C3() {
        return Na(e7);
      }
      __name(C3, "C");
      function P3(t14) {
        return Ha(e7, t14);
      }
      __name(P3, "P");
      n$1(d7, "startAlgorithm"), n$1(p4, "writeAlgorithm"), n$1(R3, "abortAlgorithm"), n$1(y4, "closeAlgorithm"), e7._writable = $i(d7, p4, y4, R3, r12, n6), n$1(C3, "pullAlgorithm"), n$1(P3, "cancelAlgorithm"), e7._readable = ut3(d7, C3, P3, o7, i7), e7._backpressure = void 0, e7._backpressureChangePromise = void 0, e7._backpressureChangePromise_resolve = void 0, Ut3(e7, true), e7._transformStreamController = void 0;
    }
    __name(za, "za");
    function go(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_transformStreamController")) && e7 instanceof Vt3;
    }
    __name(go, "go");
    function _o(e7, t13) {
      J2(e7._readable._readableStreamController, t13), xr3(e7, t13);
    }
    __name(_o, "_o");
    function xr3(e7, t13) {
      Nt3(e7._transformStreamController), it3(e7._writable._writableStreamController, t13), Nr3(e7);
    }
    __name(xr3, "xr");
    function Nr3(e7) {
      e7._backpressure && Ut3(e7, false);
    }
    __name(Nr3, "Nr");
    function Ut3(e7, t13) {
      void 0 !== e7._backpressureChangePromise && e7._backpressureChangePromise_resolve(), e7._backpressureChangePromise = A4((t14) => {
        e7._backpressureChangePromise_resolve = t14;
      }), e7._backpressure = t13;
    }
    __name(Ut3, "Ut");
    Object.defineProperties(Vt3.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Vt3.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true }), n$1(za, "InitializeTransformStream"), n$1(go, "IsTransformStream"), n$1(_o, "TransformStreamError"), n$1(xr3, "TransformStreamErrorWritableAndUnblockWrite"), n$1(Nr3, "TransformStreamUnblockWrite"), n$1(Ut3, "TransformStreamSetBackpressure");
    const $t3 = class {
      static {
        __name(this, "$t");
      }
      constructor() {
        throw new TypeError("Illegal constructor");
      }
      get desiredSize() {
        if (!xt3(this)) throw Ht3("desiredSize");
        return Mr3(this._controlledTransformStream._readable._readableStreamController);
      }
      enqueue(e7 = void 0) {
        if (!xt3(this)) throw Ht3("enqueue");
        So(this, e7);
      }
      error(e7 = void 0) {
        if (!xt3(this)) throw Ht3("error");
        Da(this, e7);
      }
      terminate() {
        if (!xt3(this)) throw Ht3("terminate");
        $a(this);
      }
    };
    n$1($t3, "TransformStreamDefaultController");
    let Xt3 = $t3;
    function xt3(e7) {
      return !(!u4(e7) || !Object.prototype.hasOwnProperty.call(e7, "_controlledTransformStream")) && e7 instanceof Xt3;
    }
    __name(xt3, "xt");
    function ja(e7, t13, r12, n6, o7) {
      t13._controlledTransformStream = e7, e7._transformStreamController = t13, t13._transformAlgorithm = r12, t13._flushAlgorithm = n6, t13._cancelAlgorithm = o7, t13._finishPromise = void 0, t13._finishPromise_resolve = void 0, t13._finishPromise_reject = void 0;
    }
    __name(ja, "ja");
    function La(e7, t13) {
      const r12 = Object.create(Xt3.prototype);
      let n6, o7, i7;
      n6 = void 0 !== t13.transform ? n$1((e8) => t13.transform(e8, r12), "transformAlgorithm") : n$1((e8) => {
        try {
          return So(r12, e8), T22(void 0);
        } catch (e9) {
          return b3(e9);
        }
      }, "transformAlgorithm"), o7 = void 0 !== t13.flush ? n$1(() => t13.flush(r12), "flushAlgorithm") : n$1(() => T22(void 0), "flushAlgorithm"), i7 = void 0 !== t13.cancel ? n$1((e8) => t13.cancel(e8), "cancelAlgorithm") : n$1(() => T22(void 0), "cancelAlgorithm"), ja(e7, r12, n6, o7, i7);
    }
    __name(La, "La");
    function Nt3(e7) {
      e7._transformAlgorithm = void 0, e7._flushAlgorithm = void 0, e7._cancelAlgorithm = void 0;
    }
    __name(Nt3, "Nt");
    function So(e7, t13) {
      const r12 = e7._controlledTransformStream, n6 = r12._readable._readableStreamController;
      if (!Ue3(n6)) throw new TypeError("Readable side is not in a state that permits enqueue");
      try {
        Me3(n6, t13);
      } catch (e8) {
        throw xr3(r12, e8), r12._readable._storedError;
      }
      ma(n6) !== r12._backpressure && Ut3(r12, true);
    }
    __name(So, "So");
    function Da(e7, t13) {
      _o(e7._controlledTransformStream, t13);
    }
    __name(Da, "Da");
    function wo(e7, t13) {
      return F3(e7._transformAlgorithm(t13), void 0, (t14) => {
        throw _o(e7._controlledTransformStream, t14), t14;
      });
    }
    __name(wo, "wo");
    function $a(e7) {
      const t13 = e7._controlledTransformStream;
      Oe3(t13._readable._readableStreamController), xr3(t13, new TypeError("TransformStream terminated"));
    }
    __name($a, "$a");
    function Ma(e7, t13) {
      const r12 = e7._transformStreamController;
      return e7._backpressure ? F3(e7._backpressureChangePromise, () => {
        const n6 = e7._writable;
        if ("erroring" === n6._state) throw n6._storedError;
        return wo(r12, t13);
      }) : wo(r12, t13);
    }
    __name(Ma, "Ma");
    function Ua(e7, t13) {
      const r12 = e7._transformStreamController;
      if (void 0 !== r12._finishPromise) return r12._finishPromise;
      const n6 = e7._readable;
      r12._finishPromise = A4((e8, t14) => {
        r12._finishPromise_resolve = e8, r12._finishPromise_reject = t14;
      });
      const o7 = r12._cancelAlgorithm(t13);
      return Nt3(r12), g4(o7, () => ("errored" === n6._state ? xe3(r12, n6._storedError) : (J2(n6._readableStreamController, t13), Hr3(r12)), null), (e8) => (J2(n6._readableStreamController, e8), xe3(r12, e8), null)), r12._finishPromise;
    }
    __name(Ua, "Ua");
    function xa(e7) {
      const t13 = e7._transformStreamController;
      if (void 0 !== t13._finishPromise) return t13._finishPromise;
      const r12 = e7._readable;
      t13._finishPromise = A4((e8, r13) => {
        t13._finishPromise_resolve = e8, t13._finishPromise_reject = r13;
      });
      const n6 = t13._flushAlgorithm();
      return Nt3(t13), g4(n6, () => ("errored" === r12._state ? xe3(t13, r12._storedError) : (Oe3(r12._readableStreamController), Hr3(t13)), null), (e8) => (J2(r12._readableStreamController, e8), xe3(t13, e8), null)), t13._finishPromise;
    }
    __name(xa, "xa");
    function Na(e7) {
      return Ut3(e7, false), e7._backpressureChangePromise;
    }
    __name(Na, "Na");
    function Ha(e7, t13) {
      const r12 = e7._transformStreamController;
      if (void 0 !== r12._finishPromise) return r12._finishPromise;
      const n6 = e7._writable;
      r12._finishPromise = A4((e8, t14) => {
        r12._finishPromise_resolve = e8, r12._finishPromise_reject = t14;
      });
      const o7 = r12._cancelAlgorithm(t13);
      return Nt3(r12), g4(o7, () => ("errored" === n6._state ? xe3(r12, n6._storedError) : (it3(n6._writableStreamController, t13), Nr3(e7), Hr3(r12)), null), (t14) => (it3(n6._writableStreamController, t14), Nr3(e7), xe3(r12, t14), null)), r12._finishPromise;
    }
    __name(Ha, "Ha");
    function Ht3(e7) {
      return new TypeError(`TransformStreamDefaultController.prototype.${e7} can only be used on a TransformStreamDefaultController`);
    }
    __name(Ht3, "Ht");
    function Hr3(e7) {
      void 0 !== e7._finishPromise_resolve && (e7._finishPromise_resolve(), e7._finishPromise_resolve = void 0, e7._finishPromise_reject = void 0);
    }
    __name(Hr3, "Hr");
    function xe3(e7, t13) {
      void 0 !== e7._finishPromise_reject && (Q2(e7._finishPromise), e7._finishPromise_reject(t13), e7._finishPromise_resolve = void 0, e7._finishPromise_reject = void 0);
    }
    __name(xe3, "xe");
    function Ro(e7) {
      return new TypeError(`TransformStream.prototype.${e7} can only be used on a TransformStream`);
    }
    __name(Ro, "Ro");
    Object.defineProperties(Xt3.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h22(Xt3.prototype.enqueue, "enqueue"), h22(Xt3.prototype.error, "error"), h22(Xt3.prototype.terminate, "terminate"), "symbol" == typeof Symbol.toStringTag && Object.defineProperty(Xt3.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true }), n$1(xt3, "IsTransformStreamDefaultController"), n$1(ja, "SetUpTransformStreamDefaultController"), n$1(La, "SetUpTransformStreamDefaultControllerFromTransformer"), n$1(Nt3, "TransformStreamDefaultControllerClearAlgorithms"), n$1(So, "TransformStreamDefaultControllerEnqueue"), n$1(Da, "TransformStreamDefaultControllerError"), n$1(wo, "TransformStreamDefaultControllerPerformTransform"), n$1($a, "TransformStreamDefaultControllerTerminate"), n$1(Ma, "TransformStreamDefaultSinkWriteAlgorithm"), n$1(Ua, "TransformStreamDefaultSinkAbortAlgorithm"), n$1(xa, "TransformStreamDefaultSinkCloseAlgorithm"), n$1(Na, "TransformStreamDefaultSourcePullAlgorithm"), n$1(Ha, "TransformStreamDefaultSourceCancelAlgorithm"), n$1(Ht3, "defaultControllerBrandCheckException"), n$1(Hr3, "defaultControllerFinishPromiseResolve"), n$1(xe3, "defaultControllerFinishPromiseReject"), n$1(Ro, "streamBrandCheckException"), e6.ByteLengthQueuingStrategy = ht3, e6.CountQueuingStrategy = Mt3, e6.ReadableByteStreamController = ye3, e6.ReadableStream = dt3, e6.ReadableStreamBYOBReader = ve3, e6.ReadableStreamBYOBRequest = fe4, e6.ReadableStreamDefaultController = Ze3, e6.ReadableStreamDefaultReader = M3, e6.TransformStream = Vt3, e6.TransformStreamDefaultController = Xt3, e6.WritableStream = Pe3, e6.WritableStreamDefaultController = Xe3, e6.WritableStreamDefaultWriter = Ve3;
  }(Kc.exports)), Kc.exports;
}
function os() {
  if (Gc) return Qc;
  Gc = 1;
  if (!globalThis.ReadableStream) try {
    const e6 = require_node_process(), { emitWarning: t12 } = e6;
    try {
      e6.emitWarning = () => {
      }, Object.assign(globalThis, require_web()), e6.emitWarning = t12;
    } catch (r11) {
      throw e6.emitWarning = t12, r11;
    }
  } catch {
    Object.assign(globalThis, ns());
  }
  try {
    const { Blob: e6 } = require_buffer();
    e6 && !e6.prototype.stream && (e6.prototype.stream = n$1(function(e7) {
      let t12 = 0;
      const r11 = this;
      return new ReadableStream({ type: "bytes", async pull(e8) {
        const n5 = await r11.slice(t12, Math.min(r11.size, t12 + 65536)).arrayBuffer();
        t12 += n5.byteLength, e8.enqueue(new Uint8Array(n5)), t12 === r11.size && e8.close();
      } });
    }, "name"));
  } catch {
  }
  return Qc;
}
async function* Qr(e6, t12 = true) {
  for (const r11 of e6) if ("stream" in r11) yield* r11.stream();
  else if (ArrayBuffer.isView(r11)) if (t12) {
    let e7 = r11.byteOffset;
    const t13 = r11.byteOffset + r11.byteLength;
    for (; e7 !== t13; ) {
      const n5 = Math.min(t13 - e7, 65536), o6 = r11.buffer.slice(e7, e7 + n5);
      e7 += o6.byteLength, yield new Uint8Array(o6);
    }
  } else yield r11;
  else {
    let e7 = 0, t13 = r11;
    for (; e7 !== t13.size; ) {
      const r12 = await t13.slice(e7, Math.min(t13.size, e7 + 65536)).arrayBuffer();
      e7 += r12.byteLength, yield new Uint8Array(r12);
    }
  }
}
function ls(e6, t12 = Yc) {
  var r11 = `${ou()}${ou()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), n5 = [], o6 = `--${r11}\r
Content-Disposition: form-data; name="`;
  return e6.forEach((e7, t13) => "string" == typeof e7 ? n5.push(o6 + au(t13) + `"\r
\r
${e7.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), "\r\n")}\r
`) : n5.push(o6 + au(t13) + `"; filename="${au(e7.name, 1)}"\r
Content-Type: ${e7.type || "application/octet-stream"}\r
\r
`, e7, "\r\n")), n5.push(`--${r11}--`), new t12(n5, { type: "multipart/form-data; boundary=" + r11 });
}
async function Zr(e6) {
  if (e6[Eu].disturbed) throw new TypeError(`body used already for: ${e6.url}`);
  if (e6[Eu].disturbed = true, e6[Eu].error) throw e6[Eu].error;
  const { body: t12 } = e6;
  if (null === t12) return te.alloc(0);
  if (!(t12 instanceof se)) return te.alloc(0);
  const r11 = [];
  let n5 = 0;
  try {
    for await (const o6 of t12) {
      if (e6.size > 0 && n5 + o6.length > e6.size) {
        const r12 = new fu(`content size at ${e6.url} over limit: ${e6.size}`, "max-size");
        throw t12.destroy(r12), r12;
      }
      n5 += o6.length, r11.push(o6);
    }
  } catch (t13) {
    throw t13 instanceof du ? t13 : new fu(`Invalid response body while trying to fetch ${e6.url}: ${t13.message}`, "system", t13);
  }
  if (true !== t12.readableEnded && true !== t12._readableState.ended) throw new fu(`Premature close of server response while trying to fetch ${e6.url}`);
  try {
    return r11.every((e7) => "string" == typeof e7) ? te.from(r11.join("")) : te.concat(r11, n5);
  } catch (t13) {
    throw new fu(`Could not create Buffer from response body for ${e6.url}: ${t13.message}`, "system", t13);
  }
}
function ys(e6 = []) {
  return new Iu(e6.reduce((e7, t12, r11, n5) => (r11 % 2 == 0 && e7.push(n5.slice(r11, r11 + 2)), e7), []).filter(([e7, t12]) => {
    try {
      return Au(e7), xu(e7, String(t12)), true;
    } catch {
      return false;
    }
  }));
}
function Fo(e6, t12 = false) {
  return null == e6 || (e6 = new URL(e6), /^(about|blob|data):$/.test(e6.protocol)) ? "no-referrer" : (e6.username = "", e6.password = "", e6.hash = "", t12 && (e6.pathname = "", e6.search = ""), e6);
}
function ws2(e6) {
  if (!ju.has(e6)) throw new TypeError(`Invalid referrerPolicy: ${e6}`);
  return e6;
}
function Rs(e6) {
  if (/^(http|ws)s:$/.test(e6.protocol)) return true;
  const t12 = e6.host.replace(/(^\[)|(]$)/g, ""), r11 = de(t12);
  return !!(4 === r11 && /^127\./.test(t12) || 6 === r11 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t12)) || "localhost" !== e6.host && !e6.host.endsWith(".localhost") && "file:" === e6.protocol;
}
function Ke(e6) {
  return !(!/^about:(blank|srcdoc)$/.test(e6) && "data:" !== e6.protocol && !/^(blob|filesystem):$/.test(e6.protocol)) || Rs(e6);
}
function Ts(e6, { referrerURLCallback: t12, referrerOriginCallback: r11 } = {}) {
  if ("no-referrer" === e6.referrer || "" === e6.referrerPolicy) return null;
  const n5 = e6.referrerPolicy;
  if ("about:client" === e6.referrer) return "no-referrer";
  const o6 = e6.referrer;
  let i6 = Fo(o6), a7 = Fo(o6, true);
  i6.toString().length > 4096 && (i6 = a7), t12 && (i6 = t12(i6)), r11 && (a7 = r11(a7));
  const h6 = new URL(e6.url);
  switch (n5) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return a7;
    case "unsafe-url":
      return i6;
    case "strict-origin":
      return Ke(i6) && !Ke(h6) ? "no-referrer" : a7.toString();
    case "strict-origin-when-cross-origin":
      return i6.origin === h6.origin ? i6 : Ke(i6) && !Ke(h6) ? "no-referrer" : a7;
    case "same-origin":
      return i6.origin === h6.origin ? i6 : "no-referrer";
    case "origin-when-cross-origin":
      return i6.origin === h6.origin ? i6 : a7;
    case "no-referrer-when-downgrade":
      return Ke(i6) && !Ke(h6) ? "no-referrer" : i6;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${n5}`);
  }
}
function Cs(e6) {
  const t12 = (e6.get("referrer-policy") || "").split(/[,\s]+/);
  let r11 = "";
  for (const e7 of t12) e7 && ju.has(e7) && (r11 = e7);
  return r11;
}
function vs() {
  if (Qu) return Gu;
  if (Qu = 1, !globalThis.DOMException) try {
    const { MessageChannel: e6 } = require_worker_threads(), t12 = new e6().port1, r11 = new ArrayBuffer();
    t12.postMessage(r11, [r11, r11]);
  } catch (e6) {
    "DOMException" === e6.constructor.name && (globalThis.DOMException = e6.constructor);
  }
  return Gu = globalThis.DOMException;
}
async function Mo(e6, t12) {
  return new Promise((r11, n5) => {
    const o6 = new $u(e6, t12), { parsedURL: i6, options: a7 } = Hu(o6);
    if (!rd.has(i6.protocol)) throw new TypeError(`node-fetch cannot load ${e6}. URL scheme "${i6.protocol.replace(/:$/, "")}" is not supported.`);
    if ("data:" === i6.protocol) {
      const e7 = ts(o6.url), t13 = new Bu(e7, { headers: { "Content-Type": e7.typeFull } });
      return void r11(t13);
    }
    const h6 = ("https:" === i6.protocol ? pl : Fr).request, { signal: m5 } = o6;
    let _3 = null;
    const S3 = n$1(() => {
      const e7 = new Xu("The operation was aborted.");
      n5(e7), o6.body && o6.body instanceof se.Readable && o6.body.destroy(e7), _3 && _3.body && _3.body.emit("error", e7);
    }, "abort");
    if (m5 && m5.aborted) return void S3();
    const E4 = n$1(() => {
      S3(), T3();
    }, "abortAndFinalize"), v6 = h6(i6.toString(), a7);
    m5 && m5.addEventListener("abort", E4);
    const T3 = n$1(() => {
      v6.abort(), m5 && m5.removeEventListener("abort", E4);
    }, "finalize");
    v6.on("error", (e7) => {
      n5(new fu(`request to ${o6.url} failed, reason: ${e7.message}`, "system", e7)), T3();
    }), Fs(v6, (e7) => {
      _3 && _3.body && _3.body.destroy(e7);
    }), m4.version < "v14" && v6.on("socket", (e7) => {
      let t13;
      e7.prependListener("end", () => {
        t13 = e7._eventsCount;
      }), e7.prependListener("close", (r12) => {
        if (_3 && t13 < e7._eventsCount && !r12) {
          const e8 = new Error("Premature close");
          e8.code = "ERR_STREAM_PREMATURE_CLOSE", _3.body.emit("error", e8);
        }
      });
    }), v6.on("response", (e7) => {
      v6.setTimeout(0);
      const i7 = ys(e7.rawHeaders);
      if (Lu(e7.statusCode)) {
        const a9 = i7.get("Location");
        let h8 = null;
        try {
          h8 = null === a9 ? null : new URL(a9, o6.url);
        } catch {
          if ("manual" !== o6.redirect) return n5(new fu(`uri requested responds with an invalid redirect URL: ${a9}`, "invalid-redirect")), void T3();
        }
        switch (o6.redirect) {
          case "error":
            return n5(new fu(`uri requested responds with a redirect, redirect mode is set to error: ${o6.url}`, "no-redirect")), void T3();
          case "manual":
            break;
          case "follow": {
            if (null === h8) break;
            if (o6.counter >= o6.follow) return n5(new fu(`maximum redirect reached at: ${o6.url}`, "max-redirect")), void T3();
            const a10 = { headers: new Iu(o6.headers), follow: o6.follow, counter: o6.counter + 1, agent: o6.agent, compress: o6.compress, method: o6.method, body: Cu(o6), signal: o6.signal, size: o6.size, referrer: o6.referrer, referrerPolicy: o6.referrerPolicy };
            if (!yu(o6.url, h8) || !_u(o6.url, h8)) for (const e8 of ["authorization", "www-authenticate", "cookie", "cookie2"]) a10.headers.delete(e8);
            if (303 !== e7.statusCode && o6.body && t12.body instanceof se.Readable) return n5(new fu("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), void T3();
            (303 === e7.statusCode || (301 === e7.statusCode || 302 === e7.statusCode) && "POST" === o6.method) && (a10.method = "GET", a10.body = void 0, a10.headers.delete("content-length"));
            const m6 = Cs(i7);
            return m6 && (a10.referrerPolicy = m6), r11(Mo(new $u(h8, a10))), void T3();
          }
          default:
            return n5(new TypeError(`Redirect option '${o6.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      m5 && e7.once("end", () => {
        m5.removeEventListener("abort", E4);
      });
      let a8 = ae(e7, new ie(), (e8) => {
        e8 && n5(e8);
      });
      m4.version < "v12.10" && e7.on("aborted", E4);
      const h7 = { url: o6.url, status: e7.statusCode, statusText: e7.statusMessage, headers: i7, size: o6.size, counter: o6.counter, highWaterMark: o6.highWaterMark }, S4 = i7.get("Content-Encoding");
      if (!o6.compress || "HEAD" === o6.method || null === S4 || 204 === e7.statusCode || 304 === e7.statusCode) return _3 = new Bu(a8, h7), void r11(_3);
      const w4 = { flush: re.Z_SYNC_FLUSH, finishFlush: re.Z_SYNC_FLUSH };
      if ("gzip" === S4 || "x-gzip" === S4) return a8 = ae(a8, re.createGunzip(w4), (e8) => {
        e8 && n5(e8);
      }), _3 = new Bu(a8, h7), void r11(_3);
      if ("deflate" === S4 || "x-deflate" === S4) {
        const t13 = ae(e7, new ie(), (e8) => {
          e8 && n5(e8);
        });
        return t13.once("data", (e8) => {
          a8 = 8 == (15 & e8[0]) ? ae(a8, re.createInflate(), (e9) => {
            e9 && n5(e9);
          }) : ae(a8, re.createInflateRaw(), (e9) => {
            e9 && n5(e9);
          }), _3 = new Bu(a8, h7), r11(_3);
        }), void t13.once("end", () => {
          _3 || (_3 = new Bu(a8, h7), r11(_3));
        });
      }
      if ("br" === S4) return a8 = ae(a8, re.createBrotliDecompress(), (e8) => {
        e8 && n5(e8);
      }), _3 = new Bu(a8, h7), void r11(_3);
      _3 = new Bu(a8, h7), r11(_3);
    }), Nu(v6, o6).catch(n5);
  });
}
function Fs(e6, t12) {
  const r11 = te.from("0\r\n\r\n");
  let n5, o6 = false, i6 = false;
  e6.on("response", (e7) => {
    const { headers: t13 } = e7;
    o6 = "chunked" === t13["transfer-encoding"] && !t13["content-length"];
  }), e6.on("socket", (a7) => {
    const h6 = n$1(() => {
      if (o6 && !i6) {
        const e7 = new Error("Premature close");
        e7.code = "ERR_STREAM_PREMATURE_CLOSE", t12(e7);
      }
    }, "onSocketClose"), m5 = n$1((e7) => {
      i6 = 0 === te.compare(e7.slice(-5), r11), !i6 && n5 && (i6 = 0 === te.compare(n5.slice(-3), r11.slice(0, 3)) && 0 === te.compare(e7.slice(-2), r11.slice(3))), n5 = e7;
    }, "onData");
    a7.prependListener("close", h6), a7.on("data", m5), e6.on("close", () => {
      a7.removeListener("close", h6), a7.removeListener("data", m5);
    });
  });
}
function k2(e6) {
  const t12 = nd.get(e6);
  return console.assert(null != t12, "'this' is expected an Event object, but got", e6), t12;
}
function xo(e6) {
  null == e6.passiveListener ? e6.event.cancelable && (e6.canceled = true, "function" == typeof e6.event.preventDefault && e6.event.preventDefault()) : typeof console < "u" && "function" == typeof console.error && console.error("Unable to preventDefault inside passive event listener invocation.", e6.passiveListener);
}
function Je(e6, t12) {
  nd.set(this, { eventTarget: e6, event: t12, eventPhase: 2, currentTarget: e6, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: t12.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const r11 = Object.keys(t12);
  for (let e7 = 0; e7 < r11.length; ++e7) {
    const t13 = r11[e7];
    t13 in this || Object.defineProperty(this, t13, No(t13));
  }
}
function No(e6) {
  return { get() {
    return k2(this).event[e6];
  }, set(t12) {
    k2(this).event[e6] = t12;
  }, configurable: true, enumerable: true };
}
function zs(e6) {
  return { value() {
    const t12 = k2(this).event;
    return t12[e6].apply(t12, arguments);
  }, configurable: true, enumerable: true };
}
function js(e6, t12) {
  const r11 = Object.keys(t12);
  if (0 === r11.length) return e6;
  function l5(t13, r12) {
    e6.call(this, t13, r12);
  }
  __name(l5, "l");
  n$1(l5, "CustomEvent"), l5.prototype = Object.create(e6.prototype, { constructor: { value: l5, configurable: true, writable: true } });
  for (let n5 = 0; n5 < r11.length; ++n5) {
    const o6 = r11[n5];
    if (!(o6 in e6.prototype)) {
      const e7 = "function" == typeof Object.getOwnPropertyDescriptor(t12, o6).value;
      Object.defineProperty(l5.prototype, o6, e7 ? zs(o6) : No(o6));
    }
  }
  return l5;
}
function Ho(e6) {
  if (null == e6 || e6 === Object.prototype) return Je;
  let t12 = od.get(e6);
  return null == t12 && (t12 = js(Ho(Object.getPrototypeOf(e6)), e6), od.set(e6, t12)), t12;
}
function Ls(e6, t12) {
  return new (Ho(Object.getPrototypeOf(t12)))(e6, t12);
}
function Ds(e6) {
  return k2(e6).immediateStopped;
}
function $s(e6, t12) {
  k2(e6).eventPhase = t12;
}
function Ms(e6, t12) {
  k2(e6).currentTarget = t12;
}
function Vo(e6, t12) {
  k2(e6).passiveListener = t12;
}
function rr(e6) {
  return null !== e6 && "object" == typeof e6;
}
function bt(e6) {
  const t12 = sd.get(e6);
  if (null == t12) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return t12;
}
function Us(e6) {
  return { get() {
    let t12 = bt(this).get(e6);
    for (; null != t12; ) {
      if (3 === t12.listenerType) return t12.listener;
      t12 = t12.next;
    }
    return null;
  }, set(t12) {
    "function" != typeof t12 && !rr(t12) && (t12 = null);
    const r11 = bt(this);
    let n5 = null, o6 = r11.get(e6);
    for (; null != o6; ) 3 === o6.listenerType ? null !== n5 ? n5.next = o6.next : null !== o6.next ? r11.set(e6, o6.next) : r11.delete(e6) : n5 = o6, o6 = o6.next;
    if (null !== t12) {
      const o7 = { listener: t12, listenerType: 3, passive: false, once: false, next: null };
      null === n5 ? r11.set(e6, o7) : n5.next = o7;
    }
  }, configurable: true, enumerable: true };
}
function Zo(e6, t12) {
  Object.defineProperty(e6, `on${t12}`, Us(t12));
}
function Ko(e6) {
  function o22() {
    pe.call(this);
  }
  __name(o22, "o2");
  n$1(o22, "CustomEventTarget"), o22.prototype = Object.create(pe.prototype, { constructor: { value: o22, configurable: true, writable: true } });
  for (let t12 = 0; t12 < e6.length; ++t12) Zo(o22.prototype, e6[t12]);
  return o22;
}
function pe() {
  if (!(this instanceof pe)) {
    if (1 === arguments.length && Array.isArray(arguments[0])) return Ko(arguments[0]);
    if (arguments.length > 0) {
      const e6 = new Array(arguments.length);
      for (let t12 = 0; t12 < arguments.length; ++t12) e6[t12] = arguments[t12];
      return Ko(e6);
    }
    throw new TypeError("Cannot call a class as a function");
  }
  sd.set(this, /* @__PURE__ */ new Map());
}
function xs() {
  const e6 = Object.create(ad.prototype);
  return pe.call(e6), ld.set(e6, false), e6;
}
function Ns(e6) {
  false === ld.get(e6) && (ld.set(e6, true), e6.dispatchEvent({ type: "abort" }));
}
function Xo(e6) {
  const t12 = ud.get(e6);
  if (null == t12) throw new TypeError("Expected 'this' to be an 'AbortController' object, but got " + (null === e6 ? "null" : typeof e6));
  return t12;
}
function ti() {
  var e6, t12, r11, n5;
  !(null == (t12 = null == (e6 = globalThis.process) ? void 0 : e6.versions) ? void 0 : t12.node) && !(null == (n5 = null == (r11 = globalThis.process) ? void 0 : r11.env) ? void 0 : n5.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
function isPayloadMethod(e6 = "GET") {
  return yd.has(e6.toUpperCase());
}
function resolveFetchOptions(e6, t12, r11, n5) {
  const o6 = function(e7, t13, r12) {
    if (!t13) return new r12(e7);
    const n6 = new r12(t13);
    if (e7) for (const [t14, o7] of Symbol.iterator in e7 || Array.isArray(e7) ? e7 : new r12(e7)) n6.set(t14, o7);
    return n6;
  }((null == t12 ? void 0 : t12.headers) ?? (null == e6 ? void 0 : e6.headers), null == r11 ? void 0 : r11.headers, n5);
  let i6;
  return ((null == r11 ? void 0 : r11.query) || (null == r11 ? void 0 : r11.params) || (null == t12 ? void 0 : t12.params) || (null == t12 ? void 0 : t12.query)) && (i6 = { ...null == r11 ? void 0 : r11.params, ...null == r11 ? void 0 : r11.query, ...null == t12 ? void 0 : t12.params, ...null == t12 ? void 0 : t12.query }), { ...r11, ...t12, query: i6, params: i6, headers: o6 };
}
async function callHooks(e6, t12) {
  if (t12) if (Array.isArray(t12)) for (const r11 of t12) await r11(e6);
  else await t12(e6);
}
function getNuxtAppCtx(e6 = Od) {
  return getContext(e6, { asyncContext: false });
}
function registerPluginHooks(e6, t12) {
  t12.hooks && e6.hooks.addHooks(t12.hooks);
}
function defineNuxtPlugin(e6) {
  if ("function" == typeof e6) return e6;
  const t12 = e6._name || e6.name;
  return delete e6.name, Object.assign(e6.setup || (() => {
  }), e6, { [Nd]: true, _name: t12 });
}
function callWithNuxt(e6, t12, r11) {
  const fn2 = /* @__PURE__ */ __name(() => t12(), "fn"), n5 = getNuxtAppCtx(e6._id);
  return e6.vueApp.runWithContext(() => n5.callAsync(e6, fn2));
}
function tryUseNuxtApp(e6) {
  var t12;
  let r11;
  return dl.hasInjectionContext() && (r11 = null == (t12 = dl.getCurrentInstance()) ? void 0 : t12.appContext.app.$nuxt), r11 || (r11 = getNuxtAppCtx(e6).tryUse()), r11 || null;
}
function useNuxtApp(e6) {
  const t12 = tryUseNuxtApp(e6);
  if (!t12) throw new Error("[nuxt] instance unavailable");
  return t12;
}
function useRuntimeConfig(e6) {
  return useNuxtApp().$config;
}
function defineGetter(e6, t12, r11) {
  Object.defineProperty(e6, t12, { get: /* @__PURE__ */ __name(() => r11, "get") });
}
function defineNuxtRouteMiddleware(e6) {
  return e6;
}
function resolveRouteObject(e6) {
  return withQuery(e6.path || "", e6.query || {}) + (e6.hash || "");
}
function toArray(e6) {
  return Array.isArray(e6) ? e6 : [e6];
}
function generateRouteKey(e6) {
  const t12 = (null == e6 ? void 0 : e6.meta.key) ?? e6.path.replace(Md, "$1").replace(Dd, "$1").replace(Bd, (t13) => {
    var r11;
    return (null == (r11 = e6.params[t13.slice(1)]) ? void 0 : r11.toString()) || "";
  });
  return "function" == typeof t12 ? t12(e6) : t12;
}
function _getHashElementScrollMarginTop(e6) {
  try {
    const t12 = (void 0).querySelector(e6);
    if (t12) return (Number.parseFloat(getComputedStyle(t12).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
  } catch {
  }
  return 0;
}
function _calculatePosition(e6, t12, r11) {
  return r11 || (e6.hash ? { el: e6.hash, top: _getHashElementScrollMarginTop(e6.hash), behavior: t12 } : { left: 0, top: 0, behavior: t12 });
}
function definePayloadReducer(e6, t12) {
  useNuxtApp().ssrContext._payloadReducers[e6] = t12;
}
function normalizeSlot(e6, t12) {
  const r11 = e6(t12);
  return 1 === r11.length ? dl.h(r11[0]) : dl.h(dl.Fragment, void 0, r11);
}
var ar2, ur, gr, yr, _r2, Sr, Vr, $r, Xr, Gr, Kr, Jr, Yr, en, tn, rn, nn, on2, an, pn, yn, _n, Sn, Zn, co, bo, Eo, vo, To, Co, Oo, Ao, Po, Io, ko, Lo, Do, Bo, jo, qo, Wo, Uo, $o, zo, Go, Qo, Jo, Yo, isStaticProperty, es, isStaticExp, rs, isSimpleIdentifier, ss2, is, as, getExpSource, isMemberExpressionBrowser, cs, us, ds2, isFnExpressionBrowser, ps, fs, hs, ms, gs, bs, _s, Ss, Es, Os, As, Ps, Is, ks, Bs, qs, Ws, Vs, Hs, Xs, Gs, Qs, Ks, Js, aliasHelper, Ys, transformBind, transformBindShorthand, injectPrefix, Zs, ei, trackSlotScopes, buildClientSlotFn, oi, transformElement, transformSlotOutlet, transformOn$1, transformText, li, transformOnce, transformModel$1, Li, transformFilter, ha, transformMemo, noopDirectiveTransform, _a, Va, Xa, Ga, Qa, Ka, Ja, Ya, Za, el, tl, rl, transformStyle, parseInlineCSS, nl, ol, sl, il, al, transformClick, ignoreSideEffectTags, ll, cl, ul, dl, pl, fl, hl, ml, gl, bl, yl, _l, Sl, El, vl, Tl, Cl, Rl, wl, Ol, Nl, Al, xl, Pl, Il, kl, Ll, Ml, Dl, Bl, Fl, jl, ql, Wl, Ul, Vl, $l, Hl, zl, noop, Xl, Gl, Ql, Kl, Jl, Yl, Zl, ec, tc, rc, nc, oc, sc, ic, ac, lc, cc, uc, dc, pc, fc, hc, mc, gc, bc, yc, _c, Sc, Ec, vc, Tc, Cc, Rc, wc, Oc, getLinkClass, Nc, Ac, xc, Pc, Ic, kc, Lc, Mc, Dc, Bc, Fc, jc, qc, Wc, Uc, Vc, __typeError, __accessCheck, __privateGet, __privateAdd, __privateSet, $c, Hc, zc, n$1, Xc, Gc, Qc, Kc, Jc, Yc, Zc, eu, tu, ru, nu, ou, su, iu, au, lu, cu, uu, du, pu, fu, hu, mu, gu, bu, yu, _u, Su, Eu, vu, Tu, Cu, Ru, wu, Ou, Nu, Au, xu, Pu, Iu, ku, Lu, Mu, Du, Bu, Fu, ju, qu, Wu, Uu, Vu, $u, Hu, zu, Xu, Gu, Qu, Ku, Ju, Yu, Zu, ed, td, rd, nd, od, sd, id, ad, ld, cd, ud, dd, pd, fd, hd, md, gd, bd, FetchError, yd, _d, Sd, Ed, vd, Td, Cd, Rd, wd, Od, Nd, Ad, xd, useRouter, useRoute, Pd, navigateTo, Id, useError, showError, isNuxtError, createError, kd, Ld, Md, Dd, Bd, Fd, jd, qd, Wd, Ud, Vd, $d, Hd, zd, Xd, Gd, Qd, _export_sfc, Kd, Jd, Yd, Zd, ep, tp, rp, np, op;
var init_server = __esm({
  "dist/server/chunks/build/server.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_renderer();
    init_shared_esm_bundler();
    ar2 = { exports: {} };
    ur = {};
    gr = Symbol("");
    yr = Symbol("");
    _r2 = Symbol("");
    Sr = Symbol("");
    Vr = Symbol("");
    $r = Symbol("");
    Xr = Symbol("");
    Gr = Symbol("");
    Kr = Symbol("");
    Jr = Symbol("");
    Yr = Symbol("");
    en = Symbol("");
    tn = Symbol("");
    rn = Symbol("");
    nn = Symbol("");
    on2 = Symbol("");
    an = Symbol("");
    pn = Symbol("");
    yn = Symbol("");
    _n = Symbol("");
    Sn = Symbol("");
    Zn = Symbol("");
    co = Symbol("");
    bo = Symbol("");
    Eo = Symbol("");
    vo = Symbol("");
    To = Symbol("");
    Co = Symbol("");
    Oo = Symbol("");
    Ao = Symbol("");
    Po = Symbol("");
    Io = Symbol("");
    ko = Symbol("");
    Lo = Symbol("");
    Do = Symbol("");
    Bo = Symbol("");
    jo = Symbol("");
    qo = Symbol("");
    Wo = Symbol("");
    Uo = { [gr]: "Fragment", [yr]: "Teleport", [_r2]: "Suspense", [Sr]: "KeepAlive", [Vr]: "BaseTransition", [$r]: "openBlock", [Xr]: "createBlock", [Gr]: "createElementBlock", [Kr]: "createVNode", [Jr]: "createElementVNode", [Yr]: "createCommentVNode", [en]: "createTextVNode", [tn]: "createStaticVNode", [rn]: "resolveComponent", [nn]: "resolveDynamicComponent", [on2]: "resolveDirective", [an]: "resolveFilter", [pn]: "withDirectives", [yn]: "renderList", [_n]: "renderSlot", [Sn]: "createSlots", [Zn]: "toDisplayString", [co]: "mergeProps", [bo]: "normalizeClass", [Eo]: "normalizeStyle", [vo]: "normalizeProps", [To]: "guardReactiveProps", [Co]: "toHandlers", [Oo]: "camelize", [Ao]: "capitalize", [Po]: "toHandlerKey", [Io]: "setBlockTracking", [ko]: "pushScopeId", [Lo]: "popScopeId", [Do]: "withCtx", [Bo]: "unref", [jo]: "isRef", [qo]: "withMemo", [Wo]: "isMemoSame" };
    __name(registerRuntimeHelpers, "registerRuntimeHelpers");
    $o = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
    __name(createRoot, "createRoot");
    __name(createVNodeCall, "createVNodeCall");
    __name(createArrayExpression, "createArrayExpression");
    __name(createObjectExpression, "createObjectExpression");
    __name(createObjectProperty, "createObjectProperty");
    __name(createSimpleExpression, "createSimpleExpression");
    __name(createCompoundExpression, "createCompoundExpression");
    __name(createCallExpression, "createCallExpression");
    __name(createFunctionExpression, "createFunctionExpression");
    __name(createConditionalExpression, "createConditionalExpression");
    __name(createCacheExpression, "createCacheExpression");
    __name(createBlockStatement, "createBlockStatement");
    __name(getVNodeHelper, "getVNodeHelper");
    __name(getVNodeBlockHelper, "getVNodeBlockHelper");
    __name(convertToBlock, "convertToBlock");
    zo = new Uint8Array([123, 123]);
    Go = new Uint8Array([125, 125]);
    __name(isTagStartChar, "isTagStartChar");
    __name(isWhitespace, "isWhitespace");
    __name(isEndOfTagSection, "isEndOfTagSection");
    __name(toCharCodes, "toCharCodes");
    Qo = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
    Jo = { COMPILER_IS_ON_ELEMENT: { message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".', link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html" }, COMPILER_V_BIND_SYNC: { message: /* @__PURE__ */ __name((e6) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e6}.sync\` should be changed to \`v-model:${e6}\`.`, "message"), link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html" }, COMPILER_V_BIND_OBJECT_ORDER: { message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.', link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html" }, COMPILER_V_ON_NATIVE: { message: ".native modifier for v-on has been removed as is no longer necessary.", link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html" }, COMPILER_V_IF_V_FOR_PRECEDENCE: { message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.", link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html" }, COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." }, COMPILER_INLINE_TEMPLATE: { message: '"inline-template" has been removed in Vue 3.', link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html" }, COMPILER_FILTERS: { message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.', link: "https://v3-migration.vuejs.org/breaking-changes/filters.html" } };
    __name(getCompatValue, "getCompatValue");
    __name(isCompatEnabled, "isCompatEnabled");
    __name(checkCompatEnabled, "checkCompatEnabled");
    __name(defaultOnError, "defaultOnError");
    __name(defaultOnWarn, "defaultOnWarn");
    __name(createCompilerError, "createCompilerError");
    Yo = { 0: "Illegal comment.", 1: "CDATA section is allowed only in XML context.", 2: "Duplicate attribute.", 3: "End tag cannot have attributes.", 4: "Illegal '/' in tags.", 5: "Unexpected EOF in tag.", 6: "Unexpected EOF in CDATA section.", 7: "Unexpected EOF in comment.", 8: "Unexpected EOF in script.", 9: "Unexpected EOF in tag.", 10: "Incorrectly closed comment.", 11: "Incorrectly opened comment.", 12: "Illegal tag name. Use '&lt;' to print '<'.", 13: "Attribute value was expected.", 14: "End tag name was expected.", 15: "Whitespace was expected.", 16: "Unexpected '<!--' in comment.", 17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`, 18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).", 19: "Attribute name cannot start with '='.", 21: "'<?' is allowed only in XML context.", 20: "Unexpected null character.", 22: "Illegal '/' in tags.", 23: "Invalid end tag.", 24: "Element is missing end tag.", 25: "Interpolation end sign was not found.", 27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.", 26: "Legal directive name was expected.", 28: "v-if/v-else-if is missing expression.", 29: "v-if/else branches must use unique keys.", 30: "v-else/v-else-if has no adjacent v-if or v-else-if.", 31: "v-for is missing expression.", 32: "v-for has invalid expression.", 33: "<template v-for> key should be placed on the <template> tag.", 34: "v-bind is missing expression.", 52: "v-bind with same-name shorthand only allows static argument.", 35: "v-on is missing expression.", 36: "Unexpected custom directive on <slot> outlet.", 37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.", 38: "Duplicate slot names found. ", 39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.", 40: "v-slot can only be used on components or <template> tags.", 41: "v-model is missing expression.", 42: "v-model value must be a valid JavaScript member expression.", 43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.", 44: "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.", 45: "Error parsing JavaScript expression: ", 46: "<KeepAlive> expects exactly one child component.", 51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.", 47: '"prefixIdentifiers" option is not supported in this build of compiler.', 48: "ES module mode is not supported in this build of compiler.", 49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.', 50: '"scopeId" option is only supported in module mode.', 53: "" };
    __name(isForStatement, "isForStatement");
    __name(walkForStatement, "walkForStatement");
    __name(extractIdentifiers, "extractIdentifiers");
    isStaticProperty = /* @__PURE__ */ __name((e6) => e6 && ("ObjectProperty" === e6.type || "ObjectMethod" === e6.type) && !e6.computed, "isStaticProperty");
    es = ["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"];
    isStaticExp = /* @__PURE__ */ __name((e6) => 4 === e6.type && e6.isStatic, "isStaticExp");
    __name(isCoreComponent, "isCoreComponent");
    rs = /^\d|[^\$\w\xA0-\uFFFF]/;
    isSimpleIdentifier = /* @__PURE__ */ __name((e6) => !rs.test(e6), "isSimpleIdentifier");
    ss2 = /[A-Za-z_$\xA0-\uFFFF]/;
    is = /[\.\?\w$\xA0-\uFFFF]/;
    as = /\s+[.[]\s*|\s*[.[]\s+/g;
    getExpSource = /* @__PURE__ */ __name((e6) => 4 === e6.type ? e6.content : e6.loc.source, "getExpSource");
    isMemberExpressionBrowser = /* @__PURE__ */ __name((e6) => {
      const t12 = getExpSource(e6).trim().replace(as, (e7) => e7.trim());
      let r11 = 0, n5 = [], o6 = 0, i6 = 0, a7 = null;
      for (let e7 = 0; e7 < t12.length; e7++) {
        const h6 = t12.charAt(e7);
        switch (r11) {
          case 0:
            if ("[" === h6) n5.push(r11), r11 = 1, o6++;
            else if ("(" === h6) n5.push(r11), r11 = 2, i6++;
            else if (!(0 === e7 ? ss2 : is).test(h6)) return false;
            break;
          case 1:
            "'" === h6 || '"' === h6 || "`" === h6 ? (n5.push(r11), r11 = 3, a7 = h6) : "[" === h6 ? o6++ : "]" === h6 && (--o6 || (r11 = n5.pop()));
            break;
          case 2:
            if ("'" === h6 || '"' === h6 || "`" === h6) n5.push(r11), r11 = 3, a7 = h6;
            else if ("(" === h6) i6++;
            else if (")" === h6) {
              if (e7 === t12.length - 1) return false;
              --i6 || (r11 = n5.pop());
            }
            break;
          case 3:
            h6 === a7 && (r11 = n5.pop(), a7 = null);
        }
      }
      return !o6 && !i6;
    }, "isMemberExpressionBrowser");
    cs = NOOP;
    us = isMemberExpressionBrowser;
    ds2 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    isFnExpressionBrowser = /* @__PURE__ */ __name((e6) => ds2.test(getExpSource(e6)), "isFnExpressionBrowser");
    ps = NOOP;
    fs = isFnExpressionBrowser;
    __name(advancePositionWithMutation, "advancePositionWithMutation");
    __name(findDir, "findDir");
    __name(findProp, "findProp");
    __name(isStaticArgOf, "isStaticArgOf");
    __name(hasDynamicKeyVBind, "hasDynamicKeyVBind");
    __name(isText$1, "isText$1");
    __name(isVSlot, "isVSlot");
    __name(isTemplateNode, "isTemplateNode");
    __name(isSlotOutlet, "isSlotOutlet");
    hs = /* @__PURE__ */ new Set([vo, To]);
    __name(getUnnormalizedProps, "getUnnormalizedProps");
    __name(injectProp, "injectProp");
    __name(hasProp, "hasProp");
    __name(toValidAssetId, "toValidAssetId");
    __name(getMemoedVNodeCall, "getMemoedVNodeCall");
    ms = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
    gs = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: /* @__PURE__ */ __name(() => 0, "getNamespace"), isVoidTag: NO, isPreTag: NO, isIgnoreNewlineTag: NO, isCustomElement: NO, onError: defaultOnError, onWarn: defaultOnWarn, comments: false, prefixIdentifiers: false };
    bs = gs;
    _s = null;
    Ss = "";
    Es = null;
    Os = null;
    As = "";
    Ps = -1;
    Is = -1;
    ks = 0;
    Bs = false;
    qs = null;
    Ws = [];
    Vs = new class {
      constructor(e6, t12) {
        this.stack = e6, this.cbs = t12, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = false, this.inXML = false, this.inVPre = false, this.newlines = [], this.mode = 0, this.delimiterOpen = zo, this.delimiterClose = Go, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
      }
      get inSFCRoot() {
        return 2 === this.mode && 0 === this.stack.length;
      }
      reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = false, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = zo, this.delimiterClose = Go;
      }
      getPos(e6) {
        let t12 = 1, r11 = e6 + 1;
        for (let n5 = this.newlines.length - 1; n5 >= 0; n5--) {
          const o6 = this.newlines[n5];
          if (e6 > o6) {
            t12 = n5 + 2, r11 = e6 - o6;
            break;
          }
        }
        return { column: r11, line: t12, offset: e6 };
      }
      peek() {
        return this.buffer.charCodeAt(this.index + 1);
      }
      stateText(e6) {
        60 === e6 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e6 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e6));
      }
      stateInterpolationOpen(e6) {
        if (e6 === this.delimiterOpen[this.delimiterIndex]) if (this.delimiterIndex === this.delimiterOpen.length - 1) {
          const e7 = this.index + 1 - this.delimiterOpen.length;
          e7 > this.sectionStart && this.cbs.ontext(this.sectionStart, e7), this.state = 3, this.sectionStart = e7;
        } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e6)) : (this.state = 1, this.stateText(e6));
      }
      stateInterpolation(e6) {
        e6 === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e6));
      }
      stateInterpolationClose(e6) {
        e6 === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e6));
      }
      stateSpecialStartSequence(e6) {
        const t12 = this.sequenceIndex === this.currentSequence.length;
        if (t12 ? isEndOfTagSection(e6) : (32 | e6) === this.currentSequence[this.sequenceIndex]) {
          if (!t12) return void this.sequenceIndex++;
        } else this.inRCDATA = false;
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e6);
      }
      stateInRCDATA(e6) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (62 === e6 || isWhitespace(e6)) {
            const t12 = this.index - this.currentSequence.length;
            if (this.sectionStart < t12) {
              const e7 = this.index;
              this.index = t12, this.cbs.ontext(this.sectionStart, t12), this.index = e7;
            }
            return this.sectionStart = t12 + 2, this.stateInClosingTagName(e6), void (this.inRCDATA = false);
          }
          this.sequenceIndex = 0;
        }
        (32 | e6) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === Qo.TitleEnd || this.currentSequence === Qo.TextareaEnd && !this.inSFCRoot ? this.inVPre || e6 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e6)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(60 === e6);
      }
      stateCDATASequence(e6) {
        e6 === Qo.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Qo.Cdata.length && (this.state = 28, this.currentSequence = Qo.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e6));
      }
      fastForwardTo(e6) {
        for (; ++this.index < this.buffer.length; ) {
          const t12 = this.buffer.charCodeAt(this.index);
          if (10 === t12 && this.newlines.push(this.index), t12 === e6) return true;
        }
        return this.index = this.buffer.length - 1, false;
      }
      stateInCommentLike(e6) {
        e6 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Qo.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e6 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }
      startSpecial(e6, t12) {
        this.enterRCDATA(e6, t12), this.state = 31;
      }
      enterRCDATA(e6, t12) {
        this.inRCDATA = true, this.currentSequence = e6, this.sequenceIndex = t12;
      }
      stateBeforeTagName(e6) {
        33 === e6 ? (this.state = 22, this.sectionStart = this.index + 1) : 63 === e6 ? (this.state = 24, this.sectionStart = this.index + 1) : isTagStartChar(e6) ? (this.sectionStart = this.index, 0 === this.mode ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : this.state = 116 === e6 ? 30 : 115 === e6 ? 29 : 6) : 47 === e6 ? this.state = 8 : (this.state = 1, this.stateText(e6));
      }
      stateInTagName(e6) {
        isEndOfTagSection(e6) && this.handleTagName(e6);
      }
      stateInSFCRootTagName(e6) {
        if (isEndOfTagSection(e6)) {
          const t12 = this.buffer.slice(this.sectionStart, this.index);
          "template" !== t12 && this.enterRCDATA(toCharCodes("</" + t12), 0), this.handleTagName(e6);
        }
      }
      handleTagName(e6) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e6);
      }
      stateBeforeClosingTagName(e6) {
        isWhitespace(e6) || (62 === e6 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = isTagStartChar(e6) ? 9 : 27, this.sectionStart = this.index));
      }
      stateInClosingTagName(e6) {
        (62 === e6 || isWhitespace(e6)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e6));
      }
      stateAfterClosingTagName(e6) {
        62 === e6 && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeAttrName(e6) {
        62 === e6 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : 47 === e6 ? this.state = 7 : 60 === e6 && 47 === this.peek() ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : isWhitespace(e6) || this.handleAttrStart(e6);
      }
      handleAttrStart(e6) {
        118 === e6 && 45 === this.peek() ? (this.state = 13, this.sectionStart = this.index) : 46 === e6 || 58 === e6 || 64 === e6 || 35 === e6 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
      }
      stateInSelfClosingTag(e6) {
        62 === e6 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = false) : isWhitespace(e6) || (this.state = 11, this.stateBeforeAttrName(e6));
      }
      stateInAttrName(e6) {
        (61 === e6 || isEndOfTagSection(e6)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e6));
      }
      stateInDirName(e6) {
        61 === e6 || isEndOfTagSection(e6) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e6)) : 58 === e6 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : 46 === e6 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDirArg(e6) {
        61 === e6 || isEndOfTagSection(e6) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e6)) : 91 === e6 ? this.state = 15 : 46 === e6 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDynamicDirArg(e6) {
        93 === e6 ? this.state = 14 : (61 === e6 || isEndOfTagSection(e6)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e6));
      }
      stateInDirModifier(e6) {
        61 === e6 || isEndOfTagSection(e6) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e6)) : 46 === e6 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
      }
      handleAttrNameEnd(e6) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e6);
      }
      stateAfterAttrName(e6) {
        61 === e6 ? this.state = 18 : 47 === e6 || 62 === e6 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e6)) : isWhitespace(e6) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e6));
      }
      stateBeforeAttrValue(e6) {
        34 === e6 ? (this.state = 19, this.sectionStart = this.index + 1) : 39 === e6 ? (this.state = 20, this.sectionStart = this.index + 1) : isWhitespace(e6) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e6));
      }
      handleInAttrValue(e6, t12) {
        (e6 === t12 || this.fastForwardTo(t12)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(34 === t12 ? 3 : 2, this.index + 1), this.state = 11);
      }
      stateInAttrValueDoubleQuotes(e6) {
        this.handleInAttrValue(e6, 34);
      }
      stateInAttrValueSingleQuotes(e6) {
        this.handleInAttrValue(e6, 39);
      }
      stateInAttrValueNoQuotes(e6) {
        isWhitespace(e6) || 62 === e6 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e6)) : 39 !== e6 && 60 !== e6 && 61 !== e6 && 96 !== e6 || this.cbs.onerr(18, this.index);
      }
      stateBeforeDeclaration(e6) {
        91 === e6 ? (this.state = 26, this.sequenceIndex = 0) : this.state = 45 === e6 ? 25 : 23;
      }
      stateInDeclaration(e6) {
        (62 === e6 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateInProcessingInstruction(e6) {
        (62 === e6 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeComment(e6) {
        45 === e6 ? (this.state = 28, this.currentSequence = Qo.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
      }
      stateInSpecialComment(e6) {
        (62 === e6 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeSpecialS(e6) {
        e6 === Qo.ScriptEnd[3] ? this.startSpecial(Qo.ScriptEnd, 4) : e6 === Qo.StyleEnd[3] ? this.startSpecial(Qo.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e6));
      }
      stateBeforeSpecialT(e6) {
        e6 === Qo.TitleEnd[3] ? this.startSpecial(Qo.TitleEnd, 4) : e6 === Qo.TextareaEnd[3] ? this.startSpecial(Qo.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e6));
      }
      startEntity() {
      }
      stateInEntity() {
      }
      parse(e6) {
        for (this.buffer = e6; this.index < this.buffer.length; ) {
          const e7 = this.buffer.charCodeAt(this.index);
          switch (10 === e7 && 33 !== this.state && this.newlines.push(this.index), this.state) {
            case 1:
              this.stateText(e7);
              break;
            case 2:
              this.stateInterpolationOpen(e7);
              break;
            case 3:
              this.stateInterpolation(e7);
              break;
            case 4:
              this.stateInterpolationClose(e7);
              break;
            case 31:
              this.stateSpecialStartSequence(e7);
              break;
            case 32:
              this.stateInRCDATA(e7);
              break;
            case 26:
              this.stateCDATASequence(e7);
              break;
            case 19:
              this.stateInAttrValueDoubleQuotes(e7);
              break;
            case 12:
              this.stateInAttrName(e7);
              break;
            case 13:
              this.stateInDirName(e7);
              break;
            case 14:
              this.stateInDirArg(e7);
              break;
            case 15:
              this.stateInDynamicDirArg(e7);
              break;
            case 16:
              this.stateInDirModifier(e7);
              break;
            case 28:
              this.stateInCommentLike(e7);
              break;
            case 27:
              this.stateInSpecialComment(e7);
              break;
            case 11:
              this.stateBeforeAttrName(e7);
              break;
            case 6:
              this.stateInTagName(e7);
              break;
            case 34:
              this.stateInSFCRootTagName(e7);
              break;
            case 9:
              this.stateInClosingTagName(e7);
              break;
            case 5:
              this.stateBeforeTagName(e7);
              break;
            case 17:
              this.stateAfterAttrName(e7);
              break;
            case 20:
              this.stateInAttrValueSingleQuotes(e7);
              break;
            case 18:
              this.stateBeforeAttrValue(e7);
              break;
            case 8:
              this.stateBeforeClosingTagName(e7);
              break;
            case 10:
              this.stateAfterClosingTagName(e7);
              break;
            case 29:
              this.stateBeforeSpecialS(e7);
              break;
            case 30:
              this.stateBeforeSpecialT(e7);
              break;
            case 21:
              this.stateInAttrValueNoQuotes(e7);
              break;
            case 7:
              this.stateInSelfClosingTag(e7);
              break;
            case 23:
              this.stateInDeclaration(e7);
              break;
            case 22:
              this.stateBeforeDeclaration(e7);
              break;
            case 25:
              this.stateBeforeComment(e7);
              break;
            case 24:
              this.stateInProcessingInstruction(e7);
              break;
            case 33:
              this.stateInEntity();
          }
          this.index++;
        }
        this.cleanup(), this.finish();
      }
      cleanup() {
        this.sectionStart !== this.index && (1 === this.state || 32 === this.state && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : 19 !== this.state && 20 !== this.state && 21 !== this.state || (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }
      finish() {
        this.handleTrailingData(), this.cbs.onend();
      }
      handleTrailingData() {
        const e6 = this.buffer.length;
        this.sectionStart >= e6 || (28 === this.state ? this.currentSequence === Qo.CdataEnd ? this.cbs.oncdata(this.sectionStart, e6) : this.cbs.oncomment(this.sectionStart, e6) : 6 === this.state || 11 === this.state || 18 === this.state || 17 === this.state || 12 === this.state || 13 === this.state || 14 === this.state || 15 === this.state || 16 === this.state || 20 === this.state || 19 === this.state || 21 === this.state || 9 === this.state || this.cbs.ontext(this.sectionStart, e6));
      }
      emitCodePoint(e6, t12) {
      }
    }(Ws, { onerr: emitError, ontext(e6, t12) {
      onText(getSlice(e6, t12), e6, t12);
    }, ontextentity(e6, t12, r11) {
      onText(e6, t12, r11);
    }, oninterpolation(e6, t12) {
      if (Bs) return onText(getSlice(e6, t12), e6, t12);
      let r11 = e6 + Vs.delimiterOpen.length, n5 = t12 - Vs.delimiterClose.length;
      for (; isWhitespace(Ss.charCodeAt(r11)); ) r11++;
      for (; isWhitespace(Ss.charCodeAt(n5 - 1)); ) n5--;
      let o6 = getSlice(r11, n5);
      o6.includes("&") && (o6 = bs.decodeEntities(o6, false)), addNode({ type: 5, content: createExp(o6, false, getLoc(r11, n5)), loc: getLoc(e6, t12) });
    }, onopentagname(e6, t12) {
      const r11 = getSlice(e6, t12);
      Es = { type: 1, tag: r11, ns: bs.getNamespace(r11, Ws[0], bs.ns), tagType: 0, props: [], children: [], loc: getLoc(e6 - 1, t12), codegenNode: void 0 };
    }, onopentagend(e6) {
      endOpenTag(e6);
    }, onclosetag(e6, t12) {
      const r11 = getSlice(e6, t12);
      if (!bs.isVoidTag(r11)) {
        let n5 = false;
        for (let e7 = 0; e7 < Ws.length; e7++) {
          if (Ws[e7].tag.toLowerCase() === r11.toLowerCase()) {
            n5 = true, e7 > 0 && emitError(24, Ws[0].loc.start.offset);
            for (let r12 = 0; r12 <= e7; r12++) {
              onCloseTag(Ws.shift(), t12, r12 < e7);
            }
            break;
          }
        }
        n5 || emitError(23, backTrack(e6, 60));
      }
    }, onselfclosingtag(e6) {
      const t12 = Es.tag;
      Es.isSelfClosing = true, endOpenTag(e6), Ws[0] && Ws[0].tag === t12 && onCloseTag(Ws.shift(), e6);
    }, onattribname(e6, t12) {
      Os = { type: 6, name: getSlice(e6, t12), nameLoc: getLoc(e6, t12), value: void 0, loc: getLoc(e6) };
    }, ondirname(e6, t12) {
      const r11 = getSlice(e6, t12), n5 = "." === r11 || ":" === r11 ? "bind" : "@" === r11 ? "on" : "#" === r11 ? "slot" : r11.slice(2);
      if (Bs || "" !== n5 || emitError(26, e6), Bs || "" === n5) Os = { type: 6, name: r11, nameLoc: getLoc(e6, t12), value: void 0, loc: getLoc(e6) };
      else if (Os = { type: 7, name: n5, rawName: r11, exp: void 0, arg: void 0, modifiers: "." === r11 ? [createSimpleExpression("prop")] : [], loc: getLoc(e6) }, "pre" === n5) {
        Bs = Vs.inVPre = true, qs = Es;
        const e7 = Es.props;
        for (let t13 = 0; t13 < e7.length; t13++) 7 === e7[t13].type && (e7[t13] = dirToAttr(e7[t13]));
      }
    }, ondirarg(e6, t12) {
      if (e6 === t12) return;
      const r11 = getSlice(e6, t12);
      if (Bs) Os.name += r11, setLocEnd(Os.nameLoc, t12);
      else {
        const n5 = "[" !== r11[0];
        Os.arg = createExp(n5 ? r11 : r11.slice(1, -1), n5, getLoc(e6, t12), n5 ? 3 : 0);
      }
    }, ondirmodifier(e6, t12) {
      const r11 = getSlice(e6, t12);
      if (Bs) Os.name += "." + r11, setLocEnd(Os.nameLoc, t12);
      else if ("slot" === Os.name) {
        const e7 = Os.arg;
        e7 && (e7.content += "." + r11, setLocEnd(e7.loc, t12));
      } else {
        const n5 = createSimpleExpression(r11, true, getLoc(e6, t12));
        Os.modifiers.push(n5);
      }
    }, onattribdata(e6, t12) {
      As += getSlice(e6, t12), Ps < 0 && (Ps = e6), Is = t12;
    }, onattribentity(e6, t12, r11) {
      As += e6, Ps < 0 && (Ps = t12), Is = r11;
    }, onattribnameend(e6) {
      const t12 = Os.loc.start.offset, r11 = getSlice(t12, e6);
      7 === Os.type && (Os.rawName = r11), Es.props.some((e7) => (7 === e7.type ? e7.rawName : e7.name) === r11) && emitError(2, t12);
    }, onattribend(e6, t12) {
      if (Es && Os) {
        if (setLocEnd(Os.loc, t12), 0 !== e6) if (As.includes("&") && (As = bs.decodeEntities(As, true)), 6 === Os.type) "class" === Os.name && (As = condense(As).trim()), 1 !== e6 || As || emitError(13, t12), Os.value = { type: 2, content: As, loc: 1 === e6 ? getLoc(Ps, Is) : getLoc(Ps - 1, Is + 1) }, Vs.inSFCRoot && "template" === Es.tag && "lang" === Os.name && As && "html" !== As && Vs.enterRCDATA(toCharCodes("</template"), 0);
        else {
          let e7 = 0;
          Os.exp = createExp(As, false, getLoc(Ps, Is), 0, e7), "for" === Os.name && (Os.forParseResult = function(e8) {
            const t14 = e8.loc, r11 = e8.content, n5 = r11.match(ms);
            if (!n5) return;
            const [, o6, i6] = n5, createAliasExpression = /* @__PURE__ */ __name((e9, r12, n6 = false) => {
              const o7 = t14.start.offset + r12;
              return createExp(e9, false, getLoc(o7, o7 + e9.length), 0, n6 ? 1 : 0);
            }, "createAliasExpression"), a7 = { source: createAliasExpression(i6.trim(), r11.indexOf(i6, o6.length)), value: void 0, key: void 0, index: void 0, finalized: false };
            let h6 = o6.trim().replace(Xs, "").trim();
            const m5 = o6.indexOf(h6), _3 = h6.match(Hs);
            if (_3) {
              h6 = h6.replace(Hs, "").trim();
              const e9 = _3[1].trim();
              let t15;
              if (e9 && (t15 = r11.indexOf(e9, m5 + h6.length), a7.key = createAliasExpression(e9, t15, true)), _3[2]) {
                const n6 = _3[2].trim();
                n6 && (a7.index = createAliasExpression(n6, r11.indexOf(n6, a7.key ? t15 + e9.length : m5 + h6.length), true));
              }
            }
            h6 && (a7.value = createAliasExpression(h6, m5, true));
            return a7;
          }(Os.exp));
          let t13 = -1;
          "bind" === Os.name && (t13 = Os.modifiers.findIndex((e8) => "sync" === e8.content)) > -1 && checkCompatEnabled("COMPILER_V_BIND_SYNC", bs, Os.loc, Os.arg.loc.source) && (Os.name = "model", Os.modifiers.splice(t13, 1));
        }
        7 === Os.type && "pre" === Os.name || Es.props.push(Os);
      }
      As = "", Ps = Is = -1;
    }, oncomment(e6, t12) {
      bs.comments && addNode({ type: 3, content: getSlice(e6, t12), loc: getLoc(e6 - 4, t12 + 3) });
    }, onend() {
      const e6 = Ss.length;
      for (let t12 = 0; t12 < Ws.length; t12++) onCloseTag(Ws[t12], e6 - 1), emitError(24, Ws[t12].loc.start.offset);
    }, oncdata(e6, t12) {
      0 !== Ws[0].ns ? onText(getSlice(e6, t12), e6, t12) : emitError(1, e6 - 9);
    }, onprocessinginstruction(e6) {
      0 === (Ws[0] ? Ws[0].ns : bs.ns) && emitError(21, e6 - 1);
    } });
    Hs = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    Xs = /^\(|\)$/g;
    __name(getSlice, "getSlice");
    __name(endOpenTag, "endOpenTag");
    __name(onText, "onText");
    __name(onCloseTag, "onCloseTag");
    __name(backTrack, "backTrack");
    Gs = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
    __name(isFragmentTemplate, "isFragmentTemplate");
    Qs = /\r\n/g;
    __name(condenseWhitespace, "condenseWhitespace");
    __name(isAllWhitespace, "isAllWhitespace");
    __name(hasNewlineChar, "hasNewlineChar");
    __name(condense, "condense");
    __name(addNode, "addNode");
    __name(getLoc, "getLoc");
    __name(setLocEnd, "setLocEnd");
    __name(dirToAttr, "dirToAttr");
    __name(createExp, "createExp");
    __name(emitError, "emitError");
    __name(baseParse, "baseParse");
    __name(cacheStatic, "cacheStatic");
    __name(getSingleElementRoot, "getSingleElementRoot");
    __name(walk, "walk");
    __name(getConstantType, "getConstantType");
    Ks = /* @__PURE__ */ new Set([bo, Eo, vo, To]);
    __name(getConstantTypeOfHelperCall, "getConstantTypeOfHelperCall");
    __name(getGeneratedPropsConstantType, "getGeneratedPropsConstantType");
    __name(getNodeProps, "getNodeProps");
    __name(createTransformContext, "createTransformContext");
    __name(transform, "transform");
    __name(traverseNode, "traverseNode");
    __name(createStructuralDirectiveTransform, "createStructuralDirectiveTransform");
    Js = "/*@__PURE__*/";
    aliasHelper = /* @__PURE__ */ __name((e6) => `${Uo[e6]}: _${Uo[e6]}`, "aliasHelper");
    __name(generate, "generate");
    __name(genAssets, "genAssets");
    __name(genNodeListAsArray, "genNodeListAsArray");
    __name(genNodeList, "genNodeList");
    __name(genNode, "genNode");
    __name(genExpression, "genExpression");
    __name(genCompoundExpression, "genCompoundExpression");
    __name(genExpressionAsPropertyKey, "genExpressionAsPropertyKey");
    new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
    __name(processExpression, "processExpression");
    Ys = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (e6, t12, r11) => processIf(e6, t12, r11, (e7, t13, n5) => {
      const o6 = r11.parent.children;
      let i6 = o6.indexOf(e7), a7 = 0;
      for (; i6-- >= 0; ) {
        const e8 = o6[i6];
        e8 && 9 === e8.type && (a7 += e8.branches.length);
      }
      return () => {
        if (n5) e7.codegenNode = createCodegenNodeForBranch(t13, a7, r11);
        else {
          const n6 = function(e8) {
            for (; ; ) if (19 === e8.type) {
              if (19 !== e8.alternate.type) return e8;
              e8 = e8.alternate;
            } else 20 === e8.type && (e8 = e8.value);
          }(e7.codegenNode);
          n6.alternate = createCodegenNodeForBranch(t13, a7 + e7.branches.length - 1, r11);
        }
      };
    }));
    __name(processIf, "processIf");
    __name(createIfBranch, "createIfBranch");
    __name(createCodegenNodeForBranch, "createCodegenNodeForBranch");
    __name(createChildrenCodegenNode, "createChildrenCodegenNode");
    transformBind = /* @__PURE__ */ __name((e6, t12, r11) => {
      const { modifiers: n5, loc: o6 } = e6, i6 = e6.arg;
      let { exp: a7 } = e6;
      if (a7 && 4 === a7.type && !a7.content.trim() && (a7 = void 0), !a7) {
        if (4 !== i6.type || !i6.isStatic) return r11.onError(createCompilerError(52, i6.loc)), { props: [createObjectProperty(i6, createSimpleExpression("", true, o6))] };
        transformBindShorthand(e6), a7 = e6.exp;
      }
      return 4 !== i6.type ? (i6.children.unshift("("), i6.children.push(') || ""')) : i6.isStatic || (i6.content = `${i6.content} || ""`), n5.some((e7) => "camel" === e7.content) && (4 === i6.type ? i6.isStatic ? i6.content = p(i6.content) : i6.content = `${r11.helperString(Oo)}(${i6.content})` : (i6.children.unshift(`${r11.helperString(Oo)}(`), i6.children.push(")"))), r11.inSSR || (n5.some((e7) => "prop" === e7.content) && injectPrefix(i6, "."), n5.some((e7) => "attr" === e7.content) && injectPrefix(i6, "^")), { props: [createObjectProperty(i6, a7)] };
    }, "transformBind");
    transformBindShorthand = /* @__PURE__ */ __name((e6, t12) => {
      const r11 = e6.arg, n5 = p(r11.content);
      e6.exp = createSimpleExpression(n5, false, r11.loc);
    }, "transformBindShorthand");
    injectPrefix = /* @__PURE__ */ __name((e6, t12) => {
      4 === e6.type ? e6.isStatic ? e6.content = t12 + e6.content : e6.content = `\`${t12}\${${e6.content}}\`` : (e6.children.unshift(`'${t12}' + (`), e6.children.push(")"));
    }, "injectPrefix");
    Zs = createStructuralDirectiveTransform("for", (e6, t12, r11) => {
      const { helper: n5, removeHelper: o6 } = r11;
      return processFor(e6, t12, r11, (t13) => {
        const i6 = createCallExpression(n5(yn), [t13.source]), a7 = isTemplateNode(e6), h6 = findDir(e6, "memo"), m5 = findProp(e6, "key", false, true);
        m5 && 7 === m5.type && !m5.exp && transformBindShorthand(m5);
        let _3 = m5 && (6 === m5.type ? m5.value ? createSimpleExpression(m5.value.content, true) : void 0 : m5.exp);
        const S3 = m5 && _3 ? createObjectProperty("key", _3) : null, E4 = 4 === t13.source.type && t13.source.constType > 0, v6 = E4 ? 64 : m5 ? 128 : 256;
        return t13.codegenNode = createVNodeCall(r11, n5(gr), void 0, i6, v6, void 0, void 0, true, !E4, false, e6.loc), () => {
          let m6;
          const { children: v7 } = t13, T3 = 1 !== v7.length || 1 !== v7[0].type, w4 = isSlotOutlet(e6) ? e6 : a7 && 1 === e6.children.length && isSlotOutlet(e6.children[0]) ? e6.children[0] : null;
          if (w4 ? (m6 = w4.codegenNode, a7 && S3 && injectProp(m6, S3, r11)) : T3 ? m6 = createVNodeCall(r11, n5(gr), S3 ? createObjectExpression([S3]) : void 0, e6.children, 64, void 0, void 0, true, void 0, false) : (m6 = v7[0].codegenNode, a7 && S3 && injectProp(m6, S3, r11), m6.isBlock !== !E4 && (m6.isBlock ? (o6($r), o6(getVNodeBlockHelper(r11.inSSR, m6.isComponent))) : o6(getVNodeHelper(r11.inSSR, m6.isComponent))), m6.isBlock = !E4, m6.isBlock ? (n5($r), n5(getVNodeBlockHelper(r11.inSSR, m6.isComponent))) : n5(getVNodeHelper(r11.inSSR, m6.isComponent))), h6) {
            const e7 = createFunctionExpression(createForLoopParams(t13.parseResult, [createSimpleExpression("_cached")]));
            e7.body = createBlockStatement([createCompoundExpression(["const _memo = (", h6.exp, ")"]), createCompoundExpression(["if (_cached", ..._3 ? [" && _cached.key === ", _3] : [], ` && ${r11.helperString(Wo)}(_cached, _memo)) return _cached`]), createCompoundExpression(["const _item = ", m6]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]), i6.arguments.push(e7, createSimpleExpression("_cache"), createSimpleExpression(String(r11.cached.length))), r11.cached.push(null);
          } else i6.arguments.push(createFunctionExpression(createForLoopParams(t13.parseResult), m6, true));
        };
      });
    });
    __name(processFor, "processFor");
    __name(finalizeForParseResult, "finalizeForParseResult");
    __name(createForLoopParams, "createForLoopParams");
    ei = createSimpleExpression("undefined", false);
    trackSlotScopes = /* @__PURE__ */ __name((e6, t12) => {
      if (1 === e6.type && (1 === e6.tagType || 3 === e6.tagType)) {
        const r11 = findDir(e6, "slot");
        if (r11) return r11.exp, t12.scopes.vSlot++, () => {
          t12.scopes.vSlot--;
        };
      }
    }, "trackSlotScopes");
    buildClientSlotFn = /* @__PURE__ */ __name((e6, t12, r11, n5) => createFunctionExpression(e6, r11, false, true, r11.length ? r11[0].loc : n5), "buildClientSlotFn");
    __name(buildSlots, "buildSlots");
    __name(buildDynamicSlot, "buildDynamicSlot");
    __name(hasForwardedSlots, "hasForwardedSlots");
    __name(isNonWhitespaceContent, "isNonWhitespaceContent");
    oi = /* @__PURE__ */ new WeakMap();
    transformElement = /* @__PURE__ */ __name((e6, t12) => function() {
      if (1 !== (e6 = t12.currentNode).type || 0 !== e6.tagType && 1 !== e6.tagType) return;
      const { tag: r11, props: n5 } = e6, o6 = 1 === e6.tagType;
      let i6 = o6 ? resolveComponentType(e6, t12) : `"${r11}"`;
      const a7 = isObject2(i6) && i6.callee === nn;
      let h6, m5, _3, S3, E4, v6 = 0, T3 = a7 || i6 === yr || i6 === _r2 || !o6 && ("svg" === r11 || "foreignObject" === r11 || "math" === r11);
      if (n5.length > 0) {
        const r12 = buildProps(e6, t12, void 0, o6, a7);
        h6 = r12.props, v6 = r12.patchFlag, S3 = r12.dynamicPropNames;
        const n6 = r12.directives;
        E4 = n6 && n6.length ? createArrayExpression(n6.map((e7) => buildDirectiveArgs(e7, t12))) : void 0, r12.shouldUseBlock && (T3 = true);
      }
      if (e6.children.length > 0) {
        i6 === Sr && (T3 = true, v6 |= 1024);
        if (o6 && i6 !== yr && i6 !== Sr) {
          const { slots: r12, hasDynamicSlots: n6 } = buildSlots(e6, t12);
          m5 = r12, n6 && (v6 |= 1024);
        } else if (1 === e6.children.length && i6 !== yr) {
          const r12 = e6.children[0], n6 = r12.type, o7 = 5 === n6 || 8 === n6;
          o7 && 0 === getConstantType(r12, t12) && (v6 |= 1), m5 = o7 || 2 === n6 ? r12 : e6.children;
        } else m5 = e6.children;
      }
      S3 && S3.length && (_3 = function(e7) {
        let t13 = "[";
        for (let r12 = 0, n6 = e7.length; r12 < n6; r12++) t13 += JSON.stringify(e7[r12]), r12 < n6 - 1 && (t13 += ", ");
        return t13 + "]";
      }(S3)), e6.codegenNode = createVNodeCall(t12, i6, h6, m5, 0 === v6 ? void 0 : v6, _3, E4, !!T3, false, o6, e6.loc);
    }, "transformElement");
    __name(resolveComponentType, "resolveComponentType");
    __name(buildProps, "buildProps");
    __name(dedupeProperties, "dedupeProperties");
    __name(mergeAsArray, "mergeAsArray");
    __name(buildDirectiveArgs, "buildDirectiveArgs");
    __name(isComponentTag, "isComponentTag");
    transformSlotOutlet = /* @__PURE__ */ __name((e6, t12) => {
      if (isSlotOutlet(e6)) {
        const { children: r11, loc: n5 } = e6, { slotName: o6, slotProps: i6 } = processSlotOutlet(e6, t12), a7 = [t12.prefixIdentifiers ? "_ctx.$slots" : "$slots", o6, "{}", "undefined", "true"];
        let h6 = 2;
        i6 && (a7[2] = i6, h6 = 3), r11.length && (a7[3] = createFunctionExpression([], r11, false, false, n5), h6 = 4), t12.scopeId && !t12.slotted && (h6 = 5), a7.splice(h6), e6.codegenNode = createCallExpression(t12.helper(_n), a7, n5);
      }
    }, "transformSlotOutlet");
    __name(processSlotOutlet, "processSlotOutlet");
    transformOn$1 = /* @__PURE__ */ __name((e6, t12, r11, n5) => {
      const { loc: o6, modifiers: i6, arg: a7 } = e6;
      let h6;
      if (e6.exp || i6.length || r11.onError(createCompilerError(35, o6)), 4 === a7.type) if (a7.isStatic) {
        let e7 = a7.content;
        e7.startsWith("vue:") && (e7 = `vnode-${e7.slice(4)}`);
        h6 = createSimpleExpression(0 !== t12.tagType || e7.startsWith("vnode") || !/[A-Z]/.test(e7) ? u(p(e7)) : `on:${e7}`, true, a7.loc);
      } else h6 = createCompoundExpression([`${r11.helperString(Po)}(`, a7, ")"]);
      else h6 = a7, h6.children.unshift(`${r11.helperString(Po)}(`), h6.children.push(")");
      let m5 = e6.exp;
      m5 && !m5.content.trim() && (m5 = void 0);
      let _3 = r11.cacheHandlers && !m5 && !r11.inVOnce;
      if (m5) {
        const e7 = us(m5), t13 = !(e7 || fs(m5)), r12 = m5.content.includes(";");
        (t13 || _3 && e7) && (m5 = createCompoundExpression([`${t13 ? "$event" : "(...args)"} => ${r12 ? "{" : "("}`, m5, r12 ? "}" : ")"]));
      }
      let S3 = { props: [createObjectProperty(h6, m5 || createSimpleExpression("() => {}", false, o6))] };
      return n5 && (S3 = n5(S3)), _3 && (S3.props[0].value = r11.cache(S3.props[0].value)), S3.props.forEach((e7) => e7.key.isHandlerKey = true), S3;
    }, "transformOn$1");
    transformText = /* @__PURE__ */ __name((e6, t12) => {
      if (0 === e6.type || 1 === e6.type || 11 === e6.type || 10 === e6.type) return () => {
        const r11 = e6.children;
        let n5, o6 = false;
        for (let e7 = 0; e7 < r11.length; e7++) {
          const t13 = r11[e7];
          if (isText$1(t13)) {
            o6 = true;
            for (let o7 = e7 + 1; o7 < r11.length; o7++) {
              const i6 = r11[o7];
              if (!isText$1(i6)) {
                n5 = void 0;
                break;
              }
              n5 || (n5 = r11[e7] = createCompoundExpression([t13], t13.loc)), n5.children.push(" + ", i6), r11.splice(o7, 1), o7--;
            }
          }
        }
        if (o6 && (1 !== r11.length || 0 !== e6.type && (1 !== e6.type || 0 !== e6.tagType || e6.props.find((e7) => 7 === e7.type && !t12.directiveTransforms[e7.name]) || "template" === e6.tag))) for (let e7 = 0; e7 < r11.length; e7++) {
          const n6 = r11[e7];
          if (isText$1(n6) || 8 === n6.type) {
            const o7 = [];
            2 === n6.type && " " === n6.content || o7.push(n6), t12.ssr || 0 !== getConstantType(n6, t12) || o7.push("1"), r11[e7] = { type: 12, content: n6, loc: n6.loc, codegenNode: createCallExpression(t12.helper(en), o7) };
          }
        }
      };
    }, "transformText");
    li = /* @__PURE__ */ new WeakSet();
    transformOnce = /* @__PURE__ */ __name((e6, t12) => {
      if (1 === e6.type && findDir(e6, "once", true)) {
        if (li.has(e6) || t12.inVOnce || t12.inSSR) return;
        return li.add(e6), t12.inVOnce = true, t12.helper(Io), () => {
          t12.inVOnce = false;
          const e7 = t12.currentNode;
          e7.codegenNode && (e7.codegenNode = t12.cache(e7.codegenNode, true, true));
        };
      }
    }, "transformOnce");
    transformModel$1 = /* @__PURE__ */ __name((e6, t12, r11) => {
      const { exp: n5, arg: o6 } = e6;
      if (!n5) return r11.onError(createCompilerError(41, e6.loc)), createTransformProps();
      const i6 = n5.loc.source.trim(), a7 = 4 === n5.type ? n5.content : i6, h6 = r11.bindingMetadata[i6];
      if ("props" === h6 || "props-aliased" === h6) return r11.onError(createCompilerError(44, n5.loc)), createTransformProps();
      if (!a7.trim() || !us(n5)) return r11.onError(createCompilerError(42, n5.loc)), createTransformProps();
      const m5 = o6 || createSimpleExpression("modelValue", true), _3 = o6 ? isStaticExp(o6) ? `onUpdate:${p(o6.content)}` : createCompoundExpression(['"onUpdate:" + ', o6]) : "onUpdate:modelValue";
      let S3;
      S3 = createCompoundExpression([`${r11.isTS ? "($event: any)" : "$event"} => ((`, n5, ") = $event)"]);
      const E4 = [createObjectProperty(m5, e6.exp), createObjectProperty(_3, S3)];
      if (e6.modifiers.length && 1 === t12.tagType) {
        const t13 = e6.modifiers.map((e7) => e7.content).map((e7) => (isSimpleIdentifier(e7) ? e7 : JSON.stringify(e7)) + ": true").join(", "), r12 = o6 ? isStaticExp(o6) ? `${o6.content}Modifiers` : createCompoundExpression([o6, ' + "Modifiers"']) : "modelModifiers";
        E4.push(createObjectProperty(r12, createSimpleExpression(`{ ${t13} }`, false, e6.loc, 2)));
      }
      return createTransformProps(E4);
    }, "transformModel$1");
    __name(createTransformProps, "createTransformProps");
    Li = /[\w).+\-_$\]]/;
    transformFilter = /* @__PURE__ */ __name((e6, t12) => {
      isCompatEnabled("COMPILER_FILTERS", t12) && (5 === e6.type ? rewriteFilter(e6.content, t12) : 1 === e6.type && e6.props.forEach((e7) => {
        7 === e7.type && "for" !== e7.name && e7.exp && rewriteFilter(e7.exp, t12);
      }));
    }, "transformFilter");
    __name(rewriteFilter, "rewriteFilter");
    __name(parseFilter, "parseFilter");
    __name(wrapFilter, "wrapFilter");
    ha = /* @__PURE__ */ new WeakSet();
    transformMemo = /* @__PURE__ */ __name((e6, t12) => {
      if (1 === e6.type) {
        const r11 = findDir(e6, "memo");
        if (!r11 || ha.has(e6)) return;
        return ha.add(e6), () => {
          const n5 = e6.codegenNode || t12.currentNode.codegenNode;
          n5 && 13 === n5.type && (1 !== e6.tagType && convertToBlock(n5, t12), e6.codegenNode = createCallExpression(t12.helper(qo), [r11.exp, createFunctionExpression(void 0, n5), "_cache", String(t12.cached.length)]), t12.cached.push(null));
        };
      }
    }, "transformMemo");
    __name(getBaseTransformPreset, "getBaseTransformPreset");
    __name(baseCompile, "baseCompile");
    noopDirectiveTransform = /* @__PURE__ */ __name(() => ({ props: [] }), "noopDirectiveTransform");
    _a = Symbol("");
    Va = Symbol("");
    Xa = Symbol("");
    Ga = Symbol("");
    Qa = Symbol("");
    Ka = Symbol("");
    Ja = Symbol("");
    Ya = Symbol("");
    Za = Symbol("");
    el = Symbol("");
    registerRuntimeHelpers({ [_a]: "vModelRadio", [Va]: "vModelCheckbox", [Xa]: "vModelText", [Ga]: "vModelSelect", [Qa]: "vModelDynamic", [Ka]: "withModifiers", [Ja]: "withKeys", [Ya]: "vShow", [Za]: "Transition", [el]: "TransitionGroup" });
    rl = { parseMode: "html", isVoidTag: x, isNativeTag: /* @__PURE__ */ __name((e6) => k(e6) || O(e6) || M(e6), "isNativeTag"), isPreTag: /* @__PURE__ */ __name((e6) => "pre" === e6, "isPreTag"), isIgnoreNewlineTag: /* @__PURE__ */ __name((e6) => "pre" === e6 || "textarea" === e6, "isIgnoreNewlineTag"), decodeEntities: /* @__PURE__ */ __name(function(e6, t12 = false) {
      return tl || (tl = document.createElement("div")), t12 ? (tl.innerHTML = `<div foo="${e6.replace(/"/g, "&quot;")}">`, tl.children[0].getAttribute("foo")) : (tl.innerHTML = e6, tl.textContent);
    }, "decodeEntities"), isBuiltInComponent: /* @__PURE__ */ __name((e6) => "Transition" === e6 || "transition" === e6 ? Za : "TransitionGroup" === e6 || "transition-group" === e6 ? el : void 0, "isBuiltInComponent"), getNamespace(e6, t12, r11) {
      let n5 = t12 ? t12.ns : r11;
      if (t12 && 2 === n5) if ("annotation-xml" === t12.tag) {
        if ("svg" === e6) return 1;
        t12.props.some((e7) => 6 === e7.type && "encoding" === e7.name && null != e7.value && ("text/html" === e7.value.content || "application/xhtml+xml" === e7.value.content)) && (n5 = 0);
      } else /^m(?:[ions]|text)$/.test(t12.tag) && "mglyph" !== e6 && "malignmark" !== e6 && (n5 = 0);
      else t12 && 1 === n5 && ("foreignObject" !== t12.tag && "desc" !== t12.tag && "title" !== t12.tag || (n5 = 0));
      if (0 === n5) {
        if ("svg" === e6) return 1;
        if ("math" === e6) return 2;
      }
      return n5;
    } };
    transformStyle = /* @__PURE__ */ __name((e6) => {
      1 === e6.type && e6.props.forEach((t12, r11) => {
        6 === t12.type && "style" === t12.name && t12.value && (e6.props[r11] = { type: 7, name: "bind", arg: createSimpleExpression("style", true, t12.loc), exp: parseInlineCSS(t12.value.content, t12.loc), modifiers: [], loc: t12.loc });
      });
    }, "transformStyle");
    parseInlineCSS = /* @__PURE__ */ __name((e6, t12) => {
      const r11 = parseStringStyle(e6);
      return createSimpleExpression(JSON.stringify(r11), false, t12, 3);
    }, "parseInlineCSS");
    __name(createDOMCompilerError, "createDOMCompilerError");
    nl = { 53: "v-html is missing expression.", 54: "v-html will override element children.", 55: "v-text is missing expression.", 56: "v-text will override element children.", 57: "v-model can only be used on <input>, <textarea> and <select> elements.", 58: "v-model argument is not supported on plain elements.", 59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.", 60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.", 61: "v-show is missing expression.", 62: "<Transition> expects exactly one child element or component.", 63: "Tags with side effect (<script> and <style>) are ignored in client component templates." };
    ol = makeMap("passive,once,capture");
    sl = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
    il = makeMap("left,right");
    al = makeMap("onkeyup,onkeydown,onkeypress");
    transformClick = /* @__PURE__ */ __name((e6, t12) => isStaticExp(e6) && "onclick" === e6.content.toLowerCase() ? createSimpleExpression(t12, true) : 4 !== e6.type ? createCompoundExpression(["(", e6, `) === "onClick" ? "${t12}" : (`, e6, ")"]) : e6, "transformClick");
    ignoreSideEffectTags = /* @__PURE__ */ __name((e6, t12) => {
      1 !== e6.type || 0 !== e6.tagType || "script" !== e6.tag && "style" !== e6.tag || t12.removeNode();
    }, "ignoreSideEffectTags");
    ll = [transformStyle];
    cl = { cloak: noopDirectiveTransform, html: /* @__PURE__ */ __name((e6, t12, r11) => {
      const { exp: n5, loc: o6 } = e6;
      return n5 || r11.onError(createDOMCompilerError(53, o6)), t12.children.length && (r11.onError(createDOMCompilerError(54, o6)), t12.children.length = 0), { props: [createObjectProperty(createSimpleExpression("innerHTML", true, o6), n5 || createSimpleExpression("", true))] };
    }, "html"), text: /* @__PURE__ */ __name((e6, t12, r11) => {
      const { exp: n5, loc: o6 } = e6;
      return n5 || r11.onError(createDOMCompilerError(55, o6)), t12.children.length && (r11.onError(createDOMCompilerError(56, o6)), t12.children.length = 0), { props: [createObjectProperty(createSimpleExpression("textContent", true), n5 ? getConstantType(n5, r11) > 0 ? n5 : createCallExpression(r11.helperString(Zn), [n5], o6) : createSimpleExpression("", true))] };
    }, "text"), model: /* @__PURE__ */ __name((e6, t12, r11) => {
      const n5 = transformModel$1(e6, t12, r11);
      if (!n5.props.length || 1 === t12.tagType) return n5;
      e6.arg && r11.onError(createDOMCompilerError(58, e6.arg.loc));
      const { tag: o6 } = t12, i6 = r11.isCustomElement(o6);
      if ("input" === o6 || "textarea" === o6 || "select" === o6 || i6) {
        let a7 = Xa, h6 = false;
        if ("input" === o6 || i6) {
          const n6 = findProp(t12, "type");
          if (n6) {
            if (7 === n6.type) a7 = Qa;
            else if (n6.value) switch (n6.value.content) {
              case "radio":
                a7 = _a;
                break;
              case "checkbox":
                a7 = Va;
                break;
              case "file":
                h6 = true, r11.onError(createDOMCompilerError(59, e6.loc));
            }
          } else hasDynamicKeyVBind(t12) && (a7 = Qa);
        } else "select" === o6 && (a7 = Ga);
        h6 || (n5.needRuntime = r11.helper(a7));
      } else r11.onError(createDOMCompilerError(57, e6.loc));
      return n5.props = n5.props.filter((e7) => !(4 === e7.key.type && "modelValue" === e7.key.content)), n5;
    }, "model"), on: /* @__PURE__ */ __name((e6, t12, r11) => transformOn$1(e6, t12, r11, (t13) => {
      const { modifiers: n5 } = e6;
      if (!n5.length) return t13;
      let { key: o6, value: i6 } = t13.props[0];
      const { keyModifiers: a7, nonKeyModifiers: h6, eventOptionModifiers: m5 } = ((e7, t14, r12) => {
        const n6 = [], o7 = [], i7 = [];
        for (let a8 = 0; a8 < t14.length; a8++) {
          const h7 = t14[a8].content;
          "native" === h7 && checkCompatEnabled("COMPILER_V_ON_NATIVE", r12) || ol(h7) ? i7.push(h7) : il(h7) ? isStaticExp(e7) ? al(e7.content.toLowerCase()) ? n6.push(h7) : o7.push(h7) : (n6.push(h7), o7.push(h7)) : sl(h7) ? o7.push(h7) : n6.push(h7);
        }
        return { keyModifiers: n6, nonKeyModifiers: o7, eventOptionModifiers: i7 };
      })(o6, n5, r11, e6.loc);
      if (h6.includes("right") && (o6 = transformClick(o6, "onContextmenu")), h6.includes("middle") && (o6 = transformClick(o6, "onMouseup")), h6.length && (i6 = createCallExpression(r11.helper(Ka), [i6, JSON.stringify(h6)])), !a7.length || isStaticExp(o6) && !al(o6.content.toLowerCase()) || (i6 = createCallExpression(r11.helper(Ja), [i6, JSON.stringify(a7)])), m5.length) {
        const e7 = m5.map(f).join("");
        o6 = isStaticExp(o6) ? createSimpleExpression(`${o6.content}${e7}`, true) : createCompoundExpression(["(", o6, `) + "${e7}"`]);
      }
      return { props: [createObjectProperty(o6, i6)] };
    }), "on"), show: /* @__PURE__ */ __name((e6, t12, r11) => {
      const { exp: n5, loc: o6 } = e6;
      return n5 || r11.onError(createDOMCompilerError(61, o6)), { props: [], needRuntime: r11.helper(Ya) };
    }, "show") };
    ul = Object.freeze(Object.defineProperty({ __proto__: null, BASE_TRANSITION: Vr, BindingTypes: { DATA: "data", PROPS: "props", PROPS_ALIASED: "props-aliased", SETUP_LET: "setup-let", SETUP_CONST: "setup-const", SETUP_REACTIVE_CONST: "setup-reactive-const", SETUP_MAYBE_REF: "setup-maybe-ref", SETUP_REF: "setup-ref", OPTIONS: "options", LITERAL_CONST: "literal-const" }, CAMELIZE: Oo, CAPITALIZE: Ao, CREATE_BLOCK: Xr, CREATE_COMMENT: Yr, CREATE_ELEMENT_BLOCK: Gr, CREATE_ELEMENT_VNODE: Jr, CREATE_SLOTS: Sn, CREATE_STATIC: tn, CREATE_TEXT: en, CREATE_VNODE: Kr, CompilerDeprecationTypes: { COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT", COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC", COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER", COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE", COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE", COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE", COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE", COMPILER_FILTERS: "COMPILER_FILTERS" }, ConstantTypes: { NOT_CONSTANT: 0, 0: "NOT_CONSTANT", CAN_SKIP_PATCH: 1, 1: "CAN_SKIP_PATCH", CAN_CACHE: 2, 2: "CAN_CACHE", CAN_STRINGIFY: 3, 3: "CAN_STRINGIFY" }, DOMDirectiveTransforms: cl, DOMErrorCodes: { X_V_HTML_NO_EXPRESSION: 53, 53: "X_V_HTML_NO_EXPRESSION", X_V_HTML_WITH_CHILDREN: 54, 54: "X_V_HTML_WITH_CHILDREN", X_V_TEXT_NO_EXPRESSION: 55, 55: "X_V_TEXT_NO_EXPRESSION", X_V_TEXT_WITH_CHILDREN: 56, 56: "X_V_TEXT_WITH_CHILDREN", X_V_MODEL_ON_INVALID_ELEMENT: 57, 57: "X_V_MODEL_ON_INVALID_ELEMENT", X_V_MODEL_ARG_ON_ELEMENT: 58, 58: "X_V_MODEL_ARG_ON_ELEMENT", X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59, 59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT", X_V_MODEL_UNNECESSARY_VALUE: 60, 60: "X_V_MODEL_UNNECESSARY_VALUE", X_V_SHOW_NO_EXPRESSION: 61, 61: "X_V_SHOW_NO_EXPRESSION", X_TRANSITION_INVALID_CHILDREN: 62, 62: "X_TRANSITION_INVALID_CHILDREN", X_IGNORED_SIDE_EFFECT_TAG: 63, 63: "X_IGNORED_SIDE_EFFECT_TAG", __EXTEND_POINT__: 64, 64: "__EXTEND_POINT__" }, DOMErrorMessages: nl, DOMNodeTransforms: ll, ElementTypes: { ELEMENT: 0, 0: "ELEMENT", COMPONENT: 1, 1: "COMPONENT", SLOT: 2, 2: "SLOT", TEMPLATE: 3, 3: "TEMPLATE" }, ErrorCodes: { ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0, 0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT", CDATA_IN_HTML_CONTENT: 1, 1: "CDATA_IN_HTML_CONTENT", DUPLICATE_ATTRIBUTE: 2, 2: "DUPLICATE_ATTRIBUTE", END_TAG_WITH_ATTRIBUTES: 3, 3: "END_TAG_WITH_ATTRIBUTES", END_TAG_WITH_TRAILING_SOLIDUS: 4, 4: "END_TAG_WITH_TRAILING_SOLIDUS", EOF_BEFORE_TAG_NAME: 5, 5: "EOF_BEFORE_TAG_NAME", EOF_IN_CDATA: 6, 6: "EOF_IN_CDATA", EOF_IN_COMMENT: 7, 7: "EOF_IN_COMMENT", EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8, 8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT", EOF_IN_TAG: 9, 9: "EOF_IN_TAG", INCORRECTLY_CLOSED_COMMENT: 10, 10: "INCORRECTLY_CLOSED_COMMENT", INCORRECTLY_OPENED_COMMENT: 11, 11: "INCORRECTLY_OPENED_COMMENT", INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12, 12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME", MISSING_ATTRIBUTE_VALUE: 13, 13: "MISSING_ATTRIBUTE_VALUE", MISSING_END_TAG_NAME: 14, 14: "MISSING_END_TAG_NAME", MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15, 15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES", NESTED_COMMENT: 16, 16: "NESTED_COMMENT", UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17, 17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME", UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18, 18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE", UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19, 19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME", UNEXPECTED_NULL_CHARACTER: 20, 20: "UNEXPECTED_NULL_CHARACTER", UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21, 21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME", UNEXPECTED_SOLIDUS_IN_TAG: 22, 22: "UNEXPECTED_SOLIDUS_IN_TAG", X_INVALID_END_TAG: 23, 23: "X_INVALID_END_TAG", X_MISSING_END_TAG: 24, 24: "X_MISSING_END_TAG", X_MISSING_INTERPOLATION_END: 25, 25: "X_MISSING_INTERPOLATION_END", X_MISSING_DIRECTIVE_NAME: 26, 26: "X_MISSING_DIRECTIVE_NAME", X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27, 27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END", X_V_IF_NO_EXPRESSION: 28, 28: "X_V_IF_NO_EXPRESSION", X_V_IF_SAME_KEY: 29, 29: "X_V_IF_SAME_KEY", X_V_ELSE_NO_ADJACENT_IF: 30, 30: "X_V_ELSE_NO_ADJACENT_IF", X_V_FOR_NO_EXPRESSION: 31, 31: "X_V_FOR_NO_EXPRESSION", X_V_FOR_MALFORMED_EXPRESSION: 32, 32: "X_V_FOR_MALFORMED_EXPRESSION", X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33, 33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT", X_V_BIND_NO_EXPRESSION: 34, 34: "X_V_BIND_NO_EXPRESSION", X_V_ON_NO_EXPRESSION: 35, 35: "X_V_ON_NO_EXPRESSION", X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36, 36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET", X_V_SLOT_MIXED_SLOT_USAGE: 37, 37: "X_V_SLOT_MIXED_SLOT_USAGE", X_V_SLOT_DUPLICATE_SLOT_NAMES: 38, 38: "X_V_SLOT_DUPLICATE_SLOT_NAMES", X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39, 39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN", X_V_SLOT_MISPLACED: 40, 40: "X_V_SLOT_MISPLACED", X_V_MODEL_NO_EXPRESSION: 41, 41: "X_V_MODEL_NO_EXPRESSION", X_V_MODEL_MALFORMED_EXPRESSION: 42, 42: "X_V_MODEL_MALFORMED_EXPRESSION", X_V_MODEL_ON_SCOPE_VARIABLE: 43, 43: "X_V_MODEL_ON_SCOPE_VARIABLE", X_V_MODEL_ON_PROPS: 44, 44: "X_V_MODEL_ON_PROPS", X_INVALID_EXPRESSION: 45, 45: "X_INVALID_EXPRESSION", X_KEEP_ALIVE_INVALID_CHILDREN: 46, 46: "X_KEEP_ALIVE_INVALID_CHILDREN", X_PREFIX_ID_NOT_SUPPORTED: 47, 47: "X_PREFIX_ID_NOT_SUPPORTED", X_MODULE_MODE_NOT_SUPPORTED: 48, 48: "X_MODULE_MODE_NOT_SUPPORTED", X_CACHE_HANDLER_NOT_SUPPORTED: 49, 49: "X_CACHE_HANDLER_NOT_SUPPORTED", X_SCOPE_ID_NOT_SUPPORTED: 50, 50: "X_SCOPE_ID_NOT_SUPPORTED", X_VNODE_HOOKS: 51, 51: "X_VNODE_HOOKS", X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52, 52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT", __EXTEND_POINT__: 53, 53: "__EXTEND_POINT__" }, FRAGMENT: gr, GUARD_REACTIVE_PROPS: To, IS_MEMO_SAME: Wo, IS_REF: jo, KEEP_ALIVE: Sr, MERGE_PROPS: co, NORMALIZE_CLASS: bo, NORMALIZE_PROPS: vo, NORMALIZE_STYLE: Eo, Namespaces: { HTML: 0, 0: "HTML", SVG: 1, 1: "SVG", MATH_ML: 2, 2: "MATH_ML" }, NodeTypes: { ROOT: 0, 0: "ROOT", ELEMENT: 1, 1: "ELEMENT", TEXT: 2, 2: "TEXT", COMMENT: 3, 3: "COMMENT", SIMPLE_EXPRESSION: 4, 4: "SIMPLE_EXPRESSION", INTERPOLATION: 5, 5: "INTERPOLATION", ATTRIBUTE: 6, 6: "ATTRIBUTE", DIRECTIVE: 7, 7: "DIRECTIVE", COMPOUND_EXPRESSION: 8, 8: "COMPOUND_EXPRESSION", IF: 9, 9: "IF", IF_BRANCH: 10, 10: "IF_BRANCH", FOR: 11, 11: "FOR", TEXT_CALL: 12, 12: "TEXT_CALL", VNODE_CALL: 13, 13: "VNODE_CALL", JS_CALL_EXPRESSION: 14, 14: "JS_CALL_EXPRESSION", JS_OBJECT_EXPRESSION: 15, 15: "JS_OBJECT_EXPRESSION", JS_PROPERTY: 16, 16: "JS_PROPERTY", JS_ARRAY_EXPRESSION: 17, 17: "JS_ARRAY_EXPRESSION", JS_FUNCTION_EXPRESSION: 18, 18: "JS_FUNCTION_EXPRESSION", JS_CONDITIONAL_EXPRESSION: 19, 19: "JS_CONDITIONAL_EXPRESSION", JS_CACHE_EXPRESSION: 20, 20: "JS_CACHE_EXPRESSION", JS_BLOCK_STATEMENT: 21, 21: "JS_BLOCK_STATEMENT", JS_TEMPLATE_LITERAL: 22, 22: "JS_TEMPLATE_LITERAL", JS_IF_STATEMENT: 23, 23: "JS_IF_STATEMENT", JS_ASSIGNMENT_EXPRESSION: 24, 24: "JS_ASSIGNMENT_EXPRESSION", JS_SEQUENCE_EXPRESSION: 25, 25: "JS_SEQUENCE_EXPRESSION", JS_RETURN_STATEMENT: 26, 26: "JS_RETURN_STATEMENT" }, OPEN_BLOCK: $r, POP_SCOPE_ID: Lo, PUSH_SCOPE_ID: ko, RENDER_LIST: yn, RENDER_SLOT: _n, RESOLVE_COMPONENT: rn, RESOLVE_DIRECTIVE: on2, RESOLVE_DYNAMIC_COMPONENT: nn, RESOLVE_FILTER: an, SET_BLOCK_TRACKING: Io, SUSPENSE: _r2, TELEPORT: yr, TO_DISPLAY_STRING: Zn, TO_HANDLERS: Co, TO_HANDLER_KEY: Po, TRANSITION: Za, TRANSITION_GROUP: el, TS_NODE_TYPES: es, UNREF: Bo, V_MODEL_CHECKBOX: Va, V_MODEL_DYNAMIC: Qa, V_MODEL_RADIO: _a, V_MODEL_SELECT: Ga, V_MODEL_TEXT: Xa, V_ON_WITH_KEYS: Ja, V_ON_WITH_MODIFIERS: Ka, V_SHOW: Ya, WITH_CTX: Do, WITH_DIRECTIVES: pn, WITH_MEMO: qo, advancePositionWithClone: /* @__PURE__ */ __name(function(e6, t12, r11 = t12.length) {
      return advancePositionWithMutation({ offset: e6.offset, line: e6.line, column: e6.column }, t12, r11);
    }, "advancePositionWithClone"), advancePositionWithMutation, assert: /* @__PURE__ */ __name(function(e6, t12) {
      if (!e6) throw new Error(t12 || "unexpected compiler condition");
    }, "assert"), baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, compile: /* @__PURE__ */ __name(function(e6, t12 = {}) {
      return baseCompile(e6, n({}, rl, t12, { nodeTransforms: [ignoreSideEffectTags, ...ll, ...t12.nodeTransforms || []], directiveTransforms: n({}, cl, t12.directiveTransforms || {}), transformHoist: null }));
    }, "compile"), convertToBlock, createArrayExpression, createAssignmentExpression: /* @__PURE__ */ __name(function(e6, t12) {
      return { type: 24, left: e6, right: t12, loc: $o };
    }, "createAssignmentExpression"), createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createDOMCompilerError, createForLoopParams, createFunctionExpression, createIfStatement: /* @__PURE__ */ __name(function(e6, t12, r11) {
      return { type: 23, test: e6, consequent: t12, alternate: r11, loc: $o };
    }, "createIfStatement"), createInterpolation: /* @__PURE__ */ __name(function(e6, t12) {
      return { type: 5, loc: t12, content: isString2(e6) ? createSimpleExpression(e6, false, t12) : e6 };
    }, "createInterpolation"), createObjectExpression, createObjectProperty, createReturnStatement: /* @__PURE__ */ __name(function(e6) {
      return { type: 26, returns: e6, loc: $o };
    }, "createReturnStatement"), createRoot, createSequenceExpression: /* @__PURE__ */ __name(function(e6) {
      return { type: 25, expressions: e6, loc: $o };
    }, "createSequenceExpression"), createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral: /* @__PURE__ */ __name(function(e6) {
      return { type: 22, elements: e6, loc: $o };
    }, "createTemplateLiteral"), createTransformContext, createVNodeCall, errorMessages: Yo, extractIdentifiers, findDir, findProp, forAliasRE: ms, generate, generateCodeFrame, getBaseTransformPreset, getConstantType, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef: /* @__PURE__ */ __name(function hasScopeRef(e6, t12) {
      if (!e6 || 0 === Object.keys(t12).length) return false;
      switch (e6.type) {
        case 1:
          for (let r11 = 0; r11 < e6.props.length; r11++) {
            const n5 = e6.props[r11];
            if (7 === n5.type && (hasScopeRef(n5.arg, t12) || hasScopeRef(n5.exp, t12))) return true;
          }
          return e6.children.some((e7) => hasScopeRef(e7, t12));
        case 11:
          return !!hasScopeRef(e6.source, t12) || e6.children.some((e7) => hasScopeRef(e7, t12));
        case 9:
          return e6.branches.some((e7) => hasScopeRef(e7, t12));
        case 10:
          return !!hasScopeRef(e6.condition, t12) || e6.children.some((e7) => hasScopeRef(e7, t12));
        case 4:
          return !e6.isStatic && isSimpleIdentifier(e6.content) && !!t12[e6.content];
        case 8:
          return e6.children.some((e7) => isObject2(e7) && hasScopeRef(e7, t12));
        case 5:
        case 12:
          return hasScopeRef(e6.content, t12);
        default:
          return false;
      }
    }, "hasScopeRef"), helperNameMap: Uo, injectProp, isCoreComponent, isFnExpression: fs, isFnExpressionBrowser, isFnExpressionNode: ps, isFunctionType: /* @__PURE__ */ __name((e6) => /Function(?:Expression|Declaration)$|Method$/.test(e6.type), "isFunctionType"), isInDestructureAssignment: /* @__PURE__ */ __name(function(e6, t12) {
      if (e6 && ("ObjectProperty" === e6.type || "ArrayPattern" === e6.type)) {
        let e7 = t12.length;
        for (; e7--; ) {
          const r11 = t12[e7];
          if ("AssignmentExpression" === r11.type) return true;
          if ("ObjectProperty" !== r11.type && !r11.type.endsWith("Pattern")) break;
        }
      }
      return false;
    }, "isInDestructureAssignment"), isInNewExpression: /* @__PURE__ */ __name(function(e6) {
      let t12 = e6.length;
      for (; t12--; ) {
        const r11 = e6[t12];
        if ("NewExpression" === r11.type) return true;
        if ("MemberExpression" !== r11.type) break;
      }
      return false;
    }, "isInNewExpression"), isMemberExpression: us, isMemberExpressionBrowser, isMemberExpressionNode: cs, isReferencedIdentifier: /* @__PURE__ */ __name(function(e6, t12, r11) {
      return false;
    }, "isReferencedIdentifier"), isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey: /* @__PURE__ */ __name((e6, t12) => isStaticProperty(t12) && t12.key === e6, "isStaticPropertyKey"), isTemplateNode, isText: isText$1, isVSlot, locStub: $o, noopDirectiveTransform, parse: /* @__PURE__ */ __name(function(e6, t12 = {}) {
      return baseParse(e6, n({}, rl, t12));
    }, "parse"), parserOptions: rl, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, stringifyExpression: /* @__PURE__ */ __name(function stringifyExpression(e6) {
      return isString2(e6) ? e6 : 4 === e6.type ? e6.content : e6.children.map(stringifyExpression).join("");
    }, "stringifyExpression"), toValidAssetId, trackSlotScopes, trackVForSlotScopes: /* @__PURE__ */ __name((e6, t12) => {
      let r11;
      if (isTemplateNode(e6) && e6.props.some(isVSlot) && (r11 = findDir(e6, "for"))) {
        const e7 = r11.forParseResult;
        if (e7) {
          finalizeForParseResult(e7);
          const { value: r12, key: n5, index: o6 } = e7, { addIdentifiers: i6, removeIdentifiers: a7 } = t12;
          return r12 && i6(r12), n5 && i6(n5), o6 && i6(o6), () => {
            r12 && a7(r12), n5 && a7(n5), o6 && a7(o6);
          };
        }
      }
    }, "trackVForSlotScopes"), transform, transformBind, transformElement, transformExpression: /* @__PURE__ */ __name((e6, t12) => {
      if (5 === e6.type) e6.content = processExpression(e6.content, t12);
      else if (1 === e6.type) {
        const r11 = findDir(e6, "memo");
        for (let n5 = 0; n5 < e6.props.length; n5++) {
          const o6 = e6.props[n5];
          if (7 === o6.type && "for" !== o6.name) {
            const e7 = o6.exp, n6 = o6.arg;
            !e7 || 4 !== e7.type || "on" === o6.name && n6 || r11 && n6 && 4 === n6.type && "key" === n6.content || (o6.exp = processExpression(e7, t12, "slot" === o6.name)), n6 && 4 === n6.type && !n6.isStatic && (o6.arg = processExpression(n6, t12));
          }
        }
      }
    }, "transformExpression"), transformModel: transformModel$1, transformOn: transformOn$1, transformStyle, traverseNode, unwrapTSNode: /* @__PURE__ */ __name(function unwrapTSNode(e6) {
      return es.includes(e6.type) ? unwrapTSNode(e6.expression) : e6;
    }, "unwrapTSNode"), walkBlockDeclarations: /* @__PURE__ */ __name(function(e6, t12) {
      for (const r11 of e6.body) if ("VariableDeclaration" === r11.type) {
        if (r11.declare) continue;
        for (const e7 of r11.declarations) for (const r12 of extractIdentifiers(e7.id)) t12(r12);
      } else if ("FunctionDeclaration" === r11.type || "ClassDeclaration" === r11.type) {
        if (r11.declare || !r11.id) continue;
        t12(r11.id);
      } else isForStatement(r11) && walkForStatement(r11, true, t12);
    }, "walkBlockDeclarations"), walkFunctionParams: /* @__PURE__ */ __name(function(e6, t12) {
      for (const r11 of e6.params) for (const e7 of extractIdentifiers(r11)) t12(e7);
    }, "walkFunctionParams"), walkIdentifiers: /* @__PURE__ */ __name(function(e6, t12, r11 = false, n5 = [], o6 = /* @__PURE__ */ Object.create(null)) {
    }, "walkIdentifiers"), warnDeprecation: /* @__PURE__ */ __name(function(e6, t12, r11, ...n5) {
      if ("suppress-warning" === getCompatValue(e6, t12)) return;
      const { message: o6, link: i6 } = Jo[e6], a7 = `(deprecation ${e6}) ${"function" == typeof o6 ? o6(...n5) : o6}${i6 ? `
  Details: ${i6}` : ""}`, h6 = new SyntaxError(a7);
      h6.code = e6, r11 && (h6.loc = r11), t12.onWarn(h6);
    }, "warnDeprecation") }, Symbol.toStringTag, { value: "Module" }));
    !function(e6) {
      Object.defineProperty(e6, "__esModule", { value: true });
      var t12 = ul, r11 = vr, n5 = j;
      function _interopNamespaceDefault(e7) {
        var t13 = /* @__PURE__ */ Object.create(null);
        if (e7) for (var r12 in e7) t13[r12] = e7[r12];
        return t13.default = e7, Object.freeze(t13);
      }
      __name(_interopNamespaceDefault, "_interopNamespaceDefault");
      var o6 = _interopNamespaceDefault(r11);
      const i6 = /* @__PURE__ */ Object.create(null);
      function compileToFunction(e7, r12) {
        if (!n5.isString(e7)) {
          if (!e7.nodeType) return n5.NOOP;
          e7 = e7.innerHTML;
        }
        const a7 = n5.genCacheKey(e7, r12), h6 = i6[a7];
        if (h6) return h6;
        if ("#" === e7[0]) {
          const t13 = document.querySelector(e7);
          e7 = t13 ? t13.innerHTML : "";
        }
        const m5 = n5.extend({ hoistStatic: true, onError: void 0, onWarn: n5.NOOP }, r12);
        m5.isCustomElement || "undefined" == typeof customElements || (m5.isCustomElement = (e8) => !!customElements.get(e8));
        const { code: _3 } = t12.compile(e7, m5), S3 = new Function("Vue", _3)(o6);
        return S3._rc = true, i6[a7] = S3;
      }
      __name(compileToFunction, "compileToFunction");
      r11.registerRuntimeCompiler(compileToFunction), e6.compile = compileToFunction, Object.keys(r11).forEach(function(t13) {
        "default" === t13 || Object.prototype.hasOwnProperty.call(e6, t13) || (e6[t13] = r11[t13]);
      });
    }(ur), ar2.exports = ur;
    dl = ar2.exports;
    pl = { Agent, request: notImplemented2("https.request") };
    fl = notImplemented2("fs.access");
    hl = notImplemented2("fs.copyFile");
    ml = notImplemented2("fs.cp");
    gl = notImplemented2("fs.open");
    bl = notImplemented2("fs.opendir");
    yl = notImplemented2("fs.rename");
    _l = notImplemented2("fs.truncate");
    Sl = notImplemented2("fs.rm");
    El = notImplemented2("fs.rmdir");
    vl = notImplemented2("fs.mkdir");
    Tl = notImplemented2("fs.readdir");
    Cl = notImplemented2("fs.readlink");
    Rl = notImplemented2("fs.symlink");
    wl = notImplemented2("fs.lstat");
    Ol = notImplemented2("fs.stat");
    Nl = notImplemented2("fs.link");
    Al = notImplemented2("fs.unlink");
    xl = notImplemented2("fs.chmod");
    Pl = notImplemented2("fs.lchmod");
    Il = notImplemented2("fs.lchown");
    kl = notImplemented2("fs.chown");
    Ll = notImplemented2("fs.utimes");
    Ml = notImplemented2("fs.lutimes");
    Dl = notImplemented2("fs.realpath");
    Bl = notImplemented2("fs.mkdtemp");
    Fl = notImplemented2("fs.writeFile");
    jl = notImplemented2("fs.appendFile");
    ql = notImplemented2("fs.readFile");
    Wl = notImplemented2("fs.statfs");
    Ul = { stat: Ol };
    __name(callbackify2, "callbackify");
    callbackify2(fl), callbackify2(jl), callbackify2(kl), callbackify2(xl), callbackify2(hl), callbackify2(ml), callbackify2(Il), callbackify2(Pl), callbackify2(Nl), callbackify2(wl), callbackify2(Ml), callbackify2(vl), callbackify2(Bl), callbackify2(Dl), callbackify2(gl), callbackify2(bl), callbackify2(Tl), callbackify2(ql), callbackify2(Cl), callbackify2(yl), callbackify2(Sl), callbackify2(El), callbackify2(Ol), callbackify2(Rl), callbackify2(_l), callbackify2(Al), callbackify2(Ll), callbackify2(Fl), callbackify2(Wl);
    Vl = notImplementedAsync("fs.createReadStream");
    $l = notImplementedAsync("fs.statSync");
    Hl = "undefined" != typeof document;
    __name(isRouteComponent, "isRouteComponent");
    zl = Object.assign;
    __name(applyToParams, "applyToParams");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    Xl = Array.isArray;
    Gl = /#/g;
    Ql = /&/g;
    Kl = /\//g;
    Jl = /=/g;
    Yl = /\?/g;
    Zl = /\+/g;
    ec = /%5B/g;
    tc = /%5D/g;
    rc = /%5E/g;
    nc = /%60/g;
    oc = /%7B/g;
    sc = /%7C/g;
    ic = /%7D/g;
    ac = /%20/g;
    __name(commonEncode, "commonEncode");
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(encodeParam, "encodeParam");
    __name(decode, "decode");
    lc = /\/$/;
    __name(parseURL, "parseURL");
    __name(isSameRouteRecord, "isSameRouteRecord");
    __name(isSameRouteLocationParams, "isSameRouteLocationParams");
    __name(isSameRouteLocationParamsValue, "isSameRouteLocationParamsValue");
    __name(isEquivalentArray, "isEquivalentArray");
    cc = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
    !function(e6) {
      e6.pop = "pop", e6.push = "push";
    }(uc || (uc = {})), function(e6) {
      e6.back = "back", e6.forward = "forward", e6.unknown = "";
    }(dc || (dc = {}));
    __name(normalizeBase, "normalizeBase");
    pc = /^[^#]+#/;
    __name(createHref, "createHref");
    __name(scrollToPosition, "scrollToPosition");
    __name(getScrollKey, "getScrollKey");
    fc = /* @__PURE__ */ new Map();
    __name(createMemoryHistory, "createMemoryHistory");
    __name(isRouteName, "isRouteName");
    hc = Symbol("");
    __name(createRouterError, "createRouterError");
    __name(isNavigationFailure, "isNavigationFailure");
    !function(e6) {
      e6[e6.aborted = 4] = "aborted", e6[e6.cancelled = 8] = "cancelled", e6[e6.duplicated = 16] = "duplicated";
    }(mc || (mc = {}));
    gc = "[^/]+?";
    bc = { sensitive: false, strict: false, start: true, end: true };
    yc = /[.+*?^${}()[\]/\\]/g;
    __name(compareScoreArray, "compareScoreArray");
    __name(comparePathParserScore, "comparePathParserScore");
    __name(isLastScoreNegative, "isLastScoreNegative");
    _c = { type: 0, value: "" };
    Sc = /[a-zA-Z0-9_]/;
    __name(createRouteRecordMatcher, "createRouteRecordMatcher");
    __name(createRouterMatcher, "createRouterMatcher");
    __name(paramsFromLocation, "paramsFromLocation");
    __name(normalizeRouteRecord, "normalizeRouteRecord");
    __name(normalizeRecordProps, "normalizeRecordProps");
    __name(isAliasRecord, "isAliasRecord");
    __name(mergeMetaFields, "mergeMetaFields");
    __name(mergeOptions, "mergeOptions");
    __name(isMatchable, "isMatchable");
    __name(parseQuery2, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    __name(normalizeQuery, "normalizeQuery");
    Ec = Symbol("");
    vc = Symbol("");
    Tc = Symbol("");
    Cc = Symbol("");
    Rc = Symbol("");
    __name(useCallbacks, "useCallbacks");
    __name(guardToPromiseFn, "guardToPromiseFn");
    __name(extractComponentsGuards, "extractComponentsGuards");
    __name(useLink, "useLink");
    wc = defineComponent({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink, setup(e6, { slots: t12 }) {
      const r11 = reactive(useLink(e6)), { options: n5 } = inject(Tc), o6 = computed(() => ({ [getLinkClass(e6.activeClass, n5.linkActiveClass, "router-link-active")]: r11.isActive, [getLinkClass(e6.exactActiveClass, n5.linkExactActiveClass, "router-link-exact-active")]: r11.isExactActive }));
      return () => {
        const n6 = t12.default && (1 === (i6 = t12.default(r11)).length ? i6[0] : i6);
        var i6;
        return e6.custom ? n6 : h4("a", { "aria-current": r11.isExactActive ? e6.ariaCurrentValue : null, href: r11.href, onClick: r11.navigate, class: o6.value }, n6);
      };
    } });
    Oc = wc;
    __name(getOriginalPath, "getOriginalPath");
    getLinkClass = /* @__PURE__ */ __name((e6, t12, r11) => null != e6 ? e6 : null != t12 ? t12 : r11, "getLinkClass");
    __name(normalizeSlot$1, "normalizeSlot$1");
    Nc = defineComponent({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e6, { attrs: t12, slots: r11 }) {
      const n5 = inject(Rc), o6 = computed(() => e6.route || n5.value), i6 = inject(vc, 0), a7 = computed(() => {
        let e7 = unref(i6);
        const { matched: t13 } = o6.value;
        let r12;
        for (; (r12 = t13[e7]) && !r12.components; ) e7++;
        return e7;
      }), h6 = computed(() => o6.value.matched[a7.value]);
      provide(vc, computed(() => a7.value + 1)), provide(Ec, h6), provide(Rc, o6);
      const m5 = ref();
      return watch(() => [m5.value, h6.value, e6.name], ([e7, t13, r12], [n6, o7, i7]) => {
        t13 && (t13.instances[r12] = e7, o7 && o7 !== t13 && e7 && e7 === n6 && (t13.leaveGuards.size || (t13.leaveGuards = o7.leaveGuards), t13.updateGuards.size || (t13.updateGuards = o7.updateGuards))), !e7 || !t13 || o7 && isSameRouteRecord(t13, o7) && n6 || (t13.enterCallbacks[r12] || []).forEach((t14) => t14(e7));
      }, { flush: "post" }), () => {
        const n6 = o6.value, i7 = e6.name, a8 = h6.value, _3 = a8 && a8.components[i7];
        if (!_3) return normalizeSlot$1(r11.default, { Component: _3, route: n6 });
        const S3 = a8.props[i7], E4 = S3 ? true === S3 ? n6.params : "function" == typeof S3 ? S3(n6) : S3 : null, v6 = h4(_3, zl({}, E4, t12, { onVnodeUnmounted: /* @__PURE__ */ __name((e7) => {
          e7.component.isUnmounted && (a8.instances[i7] = null);
        }, "onVnodeUnmounted"), ref: m5 }));
        return normalizeSlot$1(r11.default, { Component: v6, route: n6 }) || v6;
      };
    } });
    __name(createRouter, "createRouter");
    __name(useRoute$1, "useRoute$1");
    __typeError = /* @__PURE__ */ __name((e6) => {
      throw TypeError(e6);
    }, "__typeError");
    __accessCheck = /* @__PURE__ */ __name((e6, t12, r11) => t12.has(e6) || __typeError("Cannot " + r11), "__accessCheck");
    __privateGet = /* @__PURE__ */ __name((e6, t12, r11) => (__accessCheck(e6, t12, "read from private field"), r11 ? r11.call(e6) : t12.get(e6)), "__privateGet");
    __privateAdd = /* @__PURE__ */ __name((e6, t12, r11) => t12.has(e6) ? __typeError("Cannot add the same private member more than once") : t12 instanceof WeakSet ? t12.add(e6) : t12.set(e6, r11), "__privateAdd");
    __privateSet = /* @__PURE__ */ __name((e6, t12, r11, n5) => (__accessCheck(e6, t12, "write to private field"), t12.set(e6, r11), r11), "__privateSet");
    $c = Object.defineProperty;
    Hc = typeof globalThis < "u" ? globalThis : typeof ar < "u" ? ar : typeof self < "u" ? self : {};
    __name(f3, "f");
    $c(f3, "name", { value: "getDefaultExportFromCjs", configurable: true });
    zc = Object.defineProperty;
    n$1 = /* @__PURE__ */ __name((e6, t12) => zc(e6, "name", { value: t12, configurable: true }), "n$1");
    __name(ts, "ts");
    n$1(ts, "dataUriToBuffer");
    Qc = {};
    Kc = { exports: {} };
    __name(ns, "ns");
    __name(os, "os");
    n$1(ns, "requirePonyfill_es2018"), n$1(os, "requireStreams"), os();
    __name(Qr, "Qr");
    n$1(Qr, "toIterator");
    Jc = (kc = class {
      static {
        __name(this, "kc");
      }
      constructor(e6 = [], t12 = {}) {
        if (__privateAdd(this, Ac, []), __privateAdd(this, xc, ""), __privateAdd(this, Pc, 0), __privateAdd(this, Ic, "transparent"), "object" != typeof e6 || null === e6) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        if ("function" != typeof e6[Symbol.iterator]) throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        if ("object" != typeof t12 && "function" != typeof t12) throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        null === t12 && (t12 = {});
        const r11 = new TextEncoder();
        for (const t13 of e6) {
          let e7;
          e7 = ArrayBuffer.isView(t13) ? new Uint8Array(t13.buffer.slice(t13.byteOffset, t13.byteOffset + t13.byteLength)) : t13 instanceof ArrayBuffer ? new Uint8Array(t13.slice(0)) : t13 instanceof kc ? t13 : r11.encode(`${t13}`), __privateSet(this, Pc, __privateGet(this, Pc) + (ArrayBuffer.isView(e7) ? e7.byteLength : e7.size)), __privateGet(this, Ac).push(e7);
        }
        __privateSet(this, Ic, `${void 0 === t12.endings ? "transparent" : t12.endings}`);
        const n5 = void 0 === t12.type ? "" : String(t12.type);
        __privateSet(this, xc, /^[\x20-\x7E]*$/.test(n5) ? n5 : "");
      }
      get size() {
        return __privateGet(this, Pc);
      }
      get type() {
        return __privateGet(this, xc);
      }
      async text() {
        const e6 = new TextDecoder();
        let t12 = "";
        for await (const r11 of Qr(__privateGet(this, Ac), false)) t12 += e6.decode(r11, { stream: true });
        return t12 += e6.decode(), t12;
      }
      async arrayBuffer() {
        const e6 = new Uint8Array(this.size);
        let t12 = 0;
        for await (const r11 of Qr(__privateGet(this, Ac), false)) e6.set(r11, t12), t12 += r11.length;
        return e6.buffer;
      }
      stream() {
        const e6 = Qr(__privateGet(this, Ac), true);
        return new globalThis.ReadableStream({ type: "bytes", async pull(t12) {
          const r11 = await e6.next();
          r11.done ? t12.close() : t12.enqueue(r11.value);
        }, async cancel() {
          await e6.return();
        } });
      }
      slice(e6 = 0, t12 = this.size, r11 = "") {
        const { size: n5 } = this;
        let o6 = e6 < 0 ? Math.max(n5 + e6, 0) : Math.min(e6, n5), i6 = t12 < 0 ? Math.max(n5 + t12, 0) : Math.min(t12, n5);
        const a7 = Math.max(i6 - o6, 0), h6 = __privateGet(this, Ac), m5 = [];
        let _3 = 0;
        for (const e7 of h6) {
          if (_3 >= a7) break;
          const t13 = ArrayBuffer.isView(e7) ? e7.byteLength : e7.size;
          if (o6 && t13 <= o6) o6 -= t13, i6 -= t13;
          else {
            let r12;
            ArrayBuffer.isView(e7) ? (r12 = e7.subarray(o6, Math.min(t13, i6)), _3 += r12.byteLength) : (r12 = e7.slice(o6, Math.min(t13, i6)), _3 += r12.size), i6 -= t13, m5.push(r12), o6 = 0;
          }
        }
        const S3 = new kc([], { type: String(r11).toLowerCase() });
        return __privateSet(S3, Pc, a7), __privateSet(S3, Ac, m5), S3;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](e6) {
        return e6 && "object" == typeof e6 && "function" == typeof e6.constructor && ("function" == typeof e6.stream || "function" == typeof e6.arrayBuffer) && /^(Blob|File)$/.test(e6[Symbol.toStringTag]);
      }
    }, Ac = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), Ic = /* @__PURE__ */ new WeakMap(), n$1(kc, "Blob"), kc);
    Object.defineProperties(Jc.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
    Yc = Jc;
    Zc = (Dc = class extends Yc {
      static {
        __name(this, "Dc");
      }
      constructor(e6, t12, r11 = {}) {
        if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        super(e6, r11), __privateAdd(this, Lc, 0), __privateAdd(this, Mc, ""), null === r11 && (r11 = {});
        const n5 = void 0 === r11.lastModified ? Date.now() : Number(r11.lastModified);
        Number.isNaN(n5) || __privateSet(this, Lc, n5), __privateSet(this, Mc, String(t12));
      }
      get name() {
        return __privateGet(this, Mc);
      }
      get lastModified() {
        return __privateGet(this, Lc);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](e6) {
        return !!e6 && e6 instanceof Yc && /^(File)$/.test(e6[Symbol.toStringTag]);
      }
    }, Lc = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), n$1(Dc, "File"), Dc);
    eu = Zc;
    ({ toStringTag: tu, iterator: ru, hasInstance: nu } = Symbol);
    ou = Math.random;
    su = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    iu = n$1((e6, t12, r11) => (e6 += "", /^(Blob|File)$/.test(t12 && t12[tu]) ? [(r11 = void 0 !== r11 ? r11 + "" : "File" == t12[tu] ? t12.name : "blob", e6), t12.name !== r11 || "blob" == t12[tu] ? new eu([t12], r11, t12) : t12] : [e6, t12 + ""]), "f");
    au = n$1((e6, t12) => (t12 ? e6 : e6.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1");
    lu = n$1((e6, t12, r11) => {
      if (t12.length < r11) throw new TypeError(`Failed to execute '${e6}' on 'FormData': ${r11} arguments required, but only ${t12.length} present.`);
    }, "x");
    cu = (Fc = class {
      static {
        __name(this, "Fc");
      }
      constructor(...e6) {
        if (__privateAdd(this, Bc, []), e6.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
      }
      get [tu]() {
        return "FormData";
      }
      [ru]() {
        return this.entries();
      }
      static [nu](e6) {
        return e6 && "object" == typeof e6 && "FormData" === e6[tu] && !su.some((t12) => "function" != typeof e6[t12]);
      }
      append(...e6) {
        lu("append", arguments, 2), __privateGet(this, Bc).push(iu(...e6));
      }
      delete(e6) {
        lu("delete", arguments, 1), e6 += "", __privateSet(this, Bc, __privateGet(this, Bc).filter(([t12]) => t12 !== e6));
      }
      get(e6) {
        lu("get", arguments, 1), e6 += "";
        for (var t12 = __privateGet(this, Bc), r11 = t12.length, n5 = 0; n5 < r11; n5++) if (t12[n5][0] === e6) return t12[n5][1];
        return null;
      }
      getAll(e6, t12) {
        return lu("getAll", arguments, 1), t12 = [], e6 += "", __privateGet(this, Bc).forEach((r11) => r11[0] === e6 && t12.push(r11[1])), t12;
      }
      has(e6) {
        return lu("has", arguments, 1), e6 += "", __privateGet(this, Bc).some((t12) => t12[0] === e6);
      }
      forEach(e6, t12) {
        for (var [r11, n5] of (lu("forEach", arguments, 1), this)) e6.call(t12, n5, r11, this);
      }
      set(...e6) {
        lu("set", arguments, 2);
        var t12 = [], r11 = true;
        e6 = iu(...e6), __privateGet(this, Bc).forEach((n5) => {
          n5[0] === e6[0] ? r11 && (r11 = !t12.push(e6)) : t12.push(n5);
        }), r11 && t12.push(e6), __privateSet(this, Bc, t12);
      }
      *entries() {
        yield* __privateGet(this, Bc);
      }
      *keys() {
        for (var [e6] of this) yield e6;
      }
      *values() {
        for (var [, e6] of this) yield e6;
      }
    }, Bc = /* @__PURE__ */ new WeakMap(), n$1(Fc, "FormData"), Fc);
    __name(ls, "ls");
    n$1(ls, "formDataToBlob");
    uu = class extends Error {
      static {
        __name(this, "uu");
      }
      constructor(e6, t12) {
        super(e6), Error.captureStackTrace(this, this.constructor), this.type = t12;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    n$1(uu, "FetchBaseError");
    du = uu;
    pu = class extends du {
      static {
        __name(this, "pu");
      }
      constructor(e6, t12, r11) {
        super(e6, t12), r11 && (this.code = this.errno = r11.code, this.erroredSysCall = r11.syscall);
      }
    };
    n$1(pu, "FetchError");
    fu = pu;
    hu = Symbol.toStringTag;
    mu = n$1((e6) => "object" == typeof e6 && "function" == typeof e6.append && "function" == typeof e6.delete && "function" == typeof e6.get && "function" == typeof e6.getAll && "function" == typeof e6.has && "function" == typeof e6.set && "function" == typeof e6.sort && "URLSearchParams" === e6[hu], "isURLSearchParameters");
    gu = n$1((e6) => e6 && "object" == typeof e6 && "function" == typeof e6.arrayBuffer && "string" == typeof e6.type && "function" == typeof e6.stream && "function" == typeof e6.constructor && /^(Blob|File)$/.test(e6[hu]), "isBlob");
    bu = n$1((e6) => "object" == typeof e6 && ("AbortSignal" === e6[hu] || "EventTarget" === e6[hu]), "isAbortSignal");
    yu = n$1((e6, t12) => {
      const r11 = new URL(t12).hostname, n5 = new URL(e6).hostname;
      return r11 === n5 || r11.endsWith(`.${n5}`);
    }, "isDomainOrSubdomain");
    _u = n$1((e6, t12) => new URL(t12).protocol === new URL(e6).protocol, "isSameProtocol");
    Su = ds(se.pipeline);
    Eu = Symbol("Body internals");
    vu = class {
      static {
        __name(this, "vu");
      }
      constructor(e6, { size: t12 = 0 } = {}) {
        let r11 = null;
        null === e6 ? e6 = null : mu(e6) ? e6 = te.from(e6.toString()) : gu(e6) || te.isBuffer(e6) || (ws.isAnyArrayBuffer(e6) ? e6 = te.from(e6) : ArrayBuffer.isView(e6) ? e6 = te.from(e6.buffer, e6.byteOffset, e6.byteLength) : e6 instanceof se || (e6 instanceof cu ? r11 = (e6 = ls(e6)).type.split("=")[1] : e6 = te.from(String(e6))));
        let n5 = e6;
        te.isBuffer(e6) ? n5 = se.Readable.from(e6) : gu(e6) && (n5 = se.Readable.from(e6.stream())), this[Eu] = { body: e6, stream: n5, boundary: r11, disturbed: false, error: null }, this.size = t12, e6 instanceof se && e6.on("error", (e7) => {
          const t13 = e7 instanceof du ? e7 : new fu(`Invalid response body while trying to fetch ${this.url}: ${e7.message}`, "system", e7);
          this[Eu].error = t13;
        });
      }
      get body() {
        return this[Eu].stream;
      }
      get bodyUsed() {
        return this[Eu].disturbed;
      }
      async arrayBuffer() {
        const { buffer: e6, byteOffset: t12, byteLength: r11 } = await Zr(this);
        return e6.slice(t12, t12 + r11);
      }
      async formData() {
        const e6 = this.headers.get("content-type");
        if (e6.startsWith("application/x-www-form-urlencoded")) {
          const e7 = new cu(), t13 = new URLSearchParams(await this.text());
          for (const [r11, n5] of t13) e7.append(r11, n5);
          return e7;
        }
        const { toFormData: t12 } = await Promise.resolve().then(() => (init_multipart_parser_CZHYZ1tT(), multipart_parser_CZHYZ1tT_exports));
        return t12(this.body, e6);
      }
      async blob() {
        const e6 = this.headers && this.headers.get("content-type") || this[Eu].body && this[Eu].body.type || "", t12 = await this.arrayBuffer();
        return new Yc([t12], { type: e6 });
      }
      async json() {
        const e6 = await this.text();
        return JSON.parse(e6);
      }
      async text() {
        const e6 = await Zr(this);
        return new TextDecoder().decode(e6);
      }
      buffer() {
        return Zr(this);
      }
    };
    n$1(vu, "Body");
    Tu = vu;
    __name(Zr, "Zr");
    Tu.prototype.buffer = ss(Tu.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(Tu.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: ss(() => {
    }, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } }), n$1(Zr, "consumeBody");
    Cu = n$1((e6, t12) => {
      let r11, n5, { body: o6 } = e6[Eu];
      if (e6.bodyUsed) throw new Error("cannot clone body after it is used");
      return o6 instanceof se && "function" != typeof o6.getBoundary && (r11 = new ie({ highWaterMark: t12 }), n5 = new ie({ highWaterMark: t12 }), o6.pipe(r11), o6.pipe(n5), e6[Eu].stream = r11, o6 = n5), o6;
    }, "clone");
    Ru = ss((e6) => e6.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
    wu = n$1((e6, t12) => null === e6 ? null : "string" == typeof e6 ? "text/plain;charset=UTF-8" : mu(e6) ? "application/x-www-form-urlencoded;charset=UTF-8" : gu(e6) ? e6.type || null : te.isBuffer(e6) || ws.isAnyArrayBuffer(e6) || ArrayBuffer.isView(e6) ? null : e6 instanceof cu ? `multipart/form-data; boundary=${t12[Eu].boundary}` : e6 && "function" == typeof e6.getBoundary ? `multipart/form-data;boundary=${Ru(e6)}` : e6 instanceof se ? null : "text/plain;charset=UTF-8", "extractContentType");
    Ou = n$1((e6) => {
      const { body: t12 } = e6[Eu];
      return null === t12 ? 0 : gu(t12) ? t12.size : te.isBuffer(t12) ? t12.length : t12 && "function" == typeof t12.getLengthSync && t12.hasKnownLength && t12.hasKnownLength() ? t12.getLengthSync() : null;
    }, "getTotalBytes");
    Nu = n$1(async (e6, { body: t12 }) => {
      null === t12 ? e6.end() : await Su(t12, e6);
    }, "writeToStream");
    Au = "function" == typeof Fr.validateHeaderName ? Fr.validateHeaderName : (e6) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e6)) {
        const t12 = new TypeError(`Header name must be a valid HTTP token [${e6}]`);
        throw Object.defineProperty(t12, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), t12;
      }
    };
    xu = "function" == typeof Fr.validateHeaderValue ? Fr.validateHeaderValue : (e6, t12) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t12)) {
        const t13 = new TypeError(`Invalid character in header content ["${e6}"]`);
        throw Object.defineProperty(t13, "code", { value: "ERR_INVALID_CHAR" }), t13;
      }
    };
    Pu = class _ae extends URLSearchParams {
      static {
        __name(this, "_ae");
      }
      constructor(e6) {
        let t12 = [];
        if (e6 instanceof _ae) {
          const r11 = e6.raw();
          for (const [e7, n5] of Object.entries(r11)) t12.push(...n5.map((t13) => [e7, t13]));
        } else if (null != e6) {
          if ("object" != typeof e6 || ws.isBoxedPrimitive(e6)) throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
          {
            const r11 = e6[Symbol.iterator];
            if (null == r11) t12.push(...Object.entries(e6));
            else {
              if ("function" != typeof r11) throw new TypeError("Header pairs must be iterable");
              t12 = [...e6].map((e7) => {
                if ("object" != typeof e7 || ws.isBoxedPrimitive(e7)) throw new TypeError("Each header pair must be an iterable object");
                return [...e7];
              }).map((e7) => {
                if (2 !== e7.length) throw new TypeError("Each header pair must be a name/value tuple");
                return [...e7];
              });
            }
          }
        }
        return t12 = t12.length > 0 ? t12.map(([e7, t13]) => (Au(e7), xu(e7, String(t13)), [String(e7).toLowerCase(), String(t13)])) : void 0, super(t12), new Proxy(this, { get(e7, t13, r11) {
          switch (t13) {
            case "append":
            case "set":
              return (r12, n5) => (Au(r12), xu(r12, String(n5)), URLSearchParams.prototype[t13].call(e7, String(r12).toLowerCase(), String(n5)));
            case "delete":
            case "has":
            case "getAll":
              return (r12) => (Au(r12), URLSearchParams.prototype[t13].call(e7, String(r12).toLowerCase()));
            case "keys":
              return () => (e7.sort(), new Set(URLSearchParams.prototype.keys.call(e7)).keys());
            default:
              return Reflect.get(e7, t13, r11);
          }
        } });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(e6) {
        const t12 = this.getAll(e6);
        if (0 === t12.length) return null;
        let r11 = t12.join(", ");
        return /^content-encoding$/i.test(e6) && (r11 = r11.toLowerCase()), r11;
      }
      forEach(e6, t12 = void 0) {
        for (const r11 of this.keys()) Reflect.apply(e6, t12, [this.get(r11), r11, this]);
      }
      *values() {
        for (const e6 of this.keys()) yield this.get(e6);
      }
      *entries() {
        for (const e6 of this.keys()) yield [e6, this.get(e6)];
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((e6, t12) => (e6[t12] = this.getAll(t12), e6), {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((e6, t12) => {
          const r11 = this.getAll(t12);
          return e6[t12] = "host" === t12 ? r11[0] : r11.length > 1 ? r11 : r11[0], e6;
        }, {});
      }
    };
    n$1(Pu, "Headers");
    Iu = Pu;
    __name(ys, "ys");
    Object.defineProperties(Iu.prototype, ["get", "entries", "forEach", "values"].reduce((e6, t12) => (e6[t12] = { enumerable: true }, e6), {})), n$1(ys, "fromRawHeaders");
    ku = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    Lu = n$1((e6) => ku.has(e6), "isRedirect");
    Mu = Symbol("Response internals");
    Du = class _H extends Tu {
      static {
        __name(this, "_H");
      }
      constructor(e6 = null, t12 = {}) {
        super(e6, t12);
        const r11 = null != t12.status ? t12.status : 200, n5 = new Iu(t12.headers);
        if (null !== e6 && !n5.has("Content-Type")) {
          const t13 = wu(e6, this);
          t13 && n5.append("Content-Type", t13);
        }
        this[Mu] = { type: "default", url: t12.url, status: r11, statusText: t12.statusText || "", headers: n5, counter: t12.counter, highWaterMark: t12.highWaterMark };
      }
      get type() {
        return this[Mu].type;
      }
      get url() {
        return this[Mu].url || "";
      }
      get status() {
        return this[Mu].status;
      }
      get ok() {
        return this[Mu].status >= 200 && this[Mu].status < 300;
      }
      get redirected() {
        return this[Mu].counter > 0;
      }
      get statusText() {
        return this[Mu].statusText;
      }
      get headers() {
        return this[Mu].headers;
      }
      get highWaterMark() {
        return this[Mu].highWaterMark;
      }
      clone() {
        return new _H(Cu(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
      }
      static redirect(e6, t12 = 302) {
        if (!Lu(t12)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        return new _H(null, { headers: { location: new URL(e6).toString() }, status: t12 });
      }
      static error() {
        const e6 = new _H(null, { status: 0, statusText: "" });
        return e6[Mu].type = "error", e6;
      }
      static json(e6 = void 0, t12 = {}) {
        const r11 = JSON.stringify(e6);
        if (void 0 === r11) throw new TypeError("data is not JSON serializable");
        const n5 = new Iu(t12 && t12.headers);
        return n5.has("content-type") || n5.set("content-type", "application/json"), new _H(r11, { ...t12, headers: n5 });
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    n$1(Du, "Response");
    Bu = Du;
    Object.defineProperties(Bu.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
    Fu = n$1((e6) => {
      if (e6.search) return e6.search;
      const t12 = e6.href.length - 1, r11 = e6.hash || ("#" === e6.href[t12] ? "#" : "");
      return "?" === e6.href[t12 - r11.length] ? "?" : "";
    }, "getSearch");
    __name(Fo, "Fo");
    n$1(Fo, "stripURLForUseAsAReferrer");
    ju = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]);
    __name(ws2, "ws");
    __name(Rs, "Rs");
    __name(Ke, "Ke");
    __name(Ts, "Ts");
    __name(Cs, "Cs");
    n$1(ws2, "validateReferrerPolicy"), n$1(Rs, "isOriginPotentiallyTrustworthy"), n$1(Ke, "isUrlPotentiallyTrustworthy"), n$1(Ts, "determineRequestsReferrer"), n$1(Cs, "parseReferrerPolicyFromHeader");
    qu = Symbol("Request internals");
    Wu = n$1((e6) => "object" == typeof e6 && "object" == typeof e6[qu], "isRequest");
    Uu = ss(() => {
    }, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
    Vu = class _Xe extends Tu {
      static {
        __name(this, "_Xe");
      }
      constructor(e6, t12 = {}) {
        let r11;
        if (Wu(e6) ? r11 = new URL(e6.url) : (r11 = new URL(e6), e6 = {}), "" !== r11.username || "" !== r11.password) throw new TypeError(`${r11} is an url with embedded credentials.`);
        let n5 = t12.method || e6.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(n5) && (n5 = n5.toUpperCase()), !Wu(t12) && "data" in t12 && Uu(), (null != t12.body || Wu(e6) && null !== e6.body) && ("GET" === n5 || "HEAD" === n5)) throw new TypeError("Request with GET/HEAD method cannot have body");
        const o6 = t12.body ? t12.body : Wu(e6) && null !== e6.body ? Cu(e6) : null;
        super(o6, { size: t12.size || e6.size || 0 });
        const i6 = new Iu(t12.headers || e6.headers || {});
        if (null !== o6 && !i6.has("Content-Type")) {
          const e7 = wu(o6, this);
          e7 && i6.set("Content-Type", e7);
        }
        let a7 = Wu(e6) ? e6.signal : null;
        if ("signal" in t12 && (a7 = t12.signal), null != a7 && !bu(a7)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        let h6 = null == t12.referrer ? e6.referrer : t12.referrer;
        if ("" === h6) h6 = "no-referrer";
        else if (h6) {
          const e7 = new URL(h6);
          h6 = /^about:(\/\/)?client$/.test(e7) ? "client" : e7;
        } else h6 = void 0;
        this[qu] = { method: n5, redirect: t12.redirect || e6.redirect || "follow", headers: i6, parsedURL: r11, signal: a7, referrer: h6 }, this.follow = void 0 === t12.follow ? void 0 === e6.follow ? 20 : e6.follow : t12.follow, this.compress = void 0 === t12.compress ? void 0 === e6.compress || e6.compress : t12.compress, this.counter = t12.counter || e6.counter || 0, this.agent = t12.agent || e6.agent, this.highWaterMark = t12.highWaterMark || e6.highWaterMark || 16384, this.insecureHTTPParser = t12.insecureHTTPParser || e6.insecureHTTPParser || false, this.referrerPolicy = t12.referrerPolicy || e6.referrerPolicy || "";
      }
      get method() {
        return this[qu].method;
      }
      get url() {
        return ce(this[qu].parsedURL);
      }
      get headers() {
        return this[qu].headers;
      }
      get redirect() {
        return this[qu].redirect;
      }
      get signal() {
        return this[qu].signal;
      }
      get referrer() {
        return "no-referrer" === this[qu].referrer ? "" : "client" === this[qu].referrer ? "about:client" : this[qu].referrer ? this[qu].referrer.toString() : void 0;
      }
      get referrerPolicy() {
        return this[qu].referrerPolicy;
      }
      set referrerPolicy(e6) {
        this[qu].referrerPolicy = ws2(e6);
      }
      clone() {
        return new _Xe(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    n$1(Vu, "Request");
    $u = Vu;
    Object.defineProperties($u.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
    Hu = n$1((e6) => {
      const { parsedURL: t12 } = e6[qu], r11 = new Iu(e6[qu].headers);
      r11.has("Accept") || r11.set("Accept", "*/*");
      let n5 = null;
      if (null === e6.body && /^(post|put)$/i.test(e6.method) && (n5 = "0"), null !== e6.body) {
        const t13 = Ou(e6);
        "number" == typeof t13 && !Number.isNaN(t13) && (n5 = String(t13));
      }
      n5 && r11.set("Content-Length", n5), "" === e6.referrerPolicy && (e6.referrerPolicy = "strict-origin-when-cross-origin"), e6.referrer && "no-referrer" !== e6.referrer ? e6[qu].referrer = Ts(e6) : e6[qu].referrer = "no-referrer", e6[qu].referrer instanceof URL && r11.set("Referer", e6.referrer), r11.has("User-Agent") || r11.set("User-Agent", "node-fetch"), e6.compress && !r11.has("Accept-Encoding") && r11.set("Accept-Encoding", "gzip, deflate, br");
      let { agent: o6 } = e6;
      "function" == typeof o6 && (o6 = o6(t12));
      const i6 = Fu(t12);
      return { parsedURL: t12, options: { path: t12.pathname + i6, method: e6.method, headers: r11[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: e6.insecureHTTPParser, agent: o6 } };
    }, "getNodeRequestOptions");
    zu = class extends du {
      static {
        __name(this, "zu");
      }
      constructor(e6, t12 = "aborted") {
        super(e6, t12);
      }
    };
    n$1(zu, "AbortError");
    Xu = zu;
    __name(vs, "vs");
    n$1(vs, "requireNodeDomexception");
    Ku = f3(vs());
    ({ stat: Ju } = Ul);
    n$1((e6, t12) => Yu($l(e6), e6, t12), "blobFromSync"), n$1((e6, t12) => Ju(e6).then((r11) => Yu(r11, e6, t12)), "blobFrom"), n$1((e6, t12) => Ju(e6).then((r11) => Zu(r11, e6, t12)), "fileFrom"), n$1((e6, t12) => Zu($l(e6), e6, t12), "fileFromSync");
    Yu = n$1((e6, t12, r11 = "") => new Yc([new td({ path: t12, size: e6.size, lastModified: e6.mtimeMs, start: 0 })], { type: r11 }), "fromBlob");
    Zu = n$1((e6, t12, r11 = "") => new eu([new td({ path: t12, size: e6.size, lastModified: e6.mtimeMs, start: 0 })], fe(t12), { type: r11, lastModified: e6.mtimeMs }), "fromFile");
    ed = class _ir {
      static {
        __name(this, "_ir");
      }
      constructor(e6) {
        __privateAdd(this, jc), __privateAdd(this, qc), __privateSet(this, jc, e6.path), __privateSet(this, qc, e6.start), this.size = e6.size, this.lastModified = e6.lastModified;
      }
      slice(e6, t12) {
        return new _ir({ path: __privateGet(this, jc), lastModified: this.lastModified, size: t12 - e6, start: __privateGet(this, qc) + e6 });
      }
      async *stream() {
        const { mtimeMs: e6 } = await Ju(__privateGet(this, jc));
        if (e6 > this.lastModified) throw new Ku("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        yield* Vl(__privateGet(this, jc), { start: __privateGet(this, qc), end: __privateGet(this, qc) + this.size - 1 });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
    jc = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakMap(), n$1(ed, "BlobDataItem");
    td = ed;
    rd = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
    __name(Mo, "Mo");
    __name(Fs, "Fs");
    n$1(Mo, "fetch$1"), n$1(Fs, "fixResponseChunkedTransferBadEnding");
    nd = /* @__PURE__ */ new WeakMap();
    od = /* @__PURE__ */ new WeakMap();
    __name(k2, "k");
    __name(xo, "xo");
    __name(Je, "Je");
    __name(No, "No");
    __name(zs, "zs");
    __name(js, "js");
    __name(Ho, "Ho");
    __name(Ls, "Ls");
    __name(Ds, "Ds");
    __name($s, "$s");
    __name(Ms, "Ms");
    __name(Vo, "Vo");
    n$1(k2, "pd"), n$1(xo, "setCancelFlag"), n$1(Je, "Event"), Je.prototype = { get type() {
      return k2(this).event.type;
    }, get target() {
      return k2(this).eventTarget;
    }, get currentTarget() {
      return k2(this).currentTarget;
    }, composedPath() {
      const e6 = k2(this).currentTarget;
      return null == e6 ? [] : [e6];
    }, get NONE() {
      return 0;
    }, get CAPTURING_PHASE() {
      return 1;
    }, get AT_TARGET() {
      return 2;
    }, get BUBBLING_PHASE() {
      return 3;
    }, get eventPhase() {
      return k2(this).eventPhase;
    }, stopPropagation() {
      const e6 = k2(this);
      e6.stopped = true, "function" == typeof e6.event.stopPropagation && e6.event.stopPropagation();
    }, stopImmediatePropagation() {
      const e6 = k2(this);
      e6.stopped = true, e6.immediateStopped = true, "function" == typeof e6.event.stopImmediatePropagation && e6.event.stopImmediatePropagation();
    }, get bubbles() {
      return !!k2(this).event.bubbles;
    }, get cancelable() {
      return !!k2(this).event.cancelable;
    }, preventDefault() {
      xo(k2(this));
    }, get defaultPrevented() {
      return k2(this).canceled;
    }, get composed() {
      return !!k2(this).event.composed;
    }, get timeStamp() {
      return k2(this).timeStamp;
    }, get srcElement() {
      return k2(this).eventTarget;
    }, get cancelBubble() {
      return k2(this).stopped;
    }, set cancelBubble(e6) {
      if (!e6) return;
      const t12 = k2(this);
      t12.stopped = true, "boolean" == typeof t12.event.cancelBubble && (t12.event.cancelBubble = true);
    }, get returnValue() {
      return !k2(this).canceled;
    }, set returnValue(e6) {
      e6 || xo(k2(this));
    }, initEvent() {
    } }, Object.defineProperty(Je.prototype, "constructor", { value: Je, configurable: true, writable: true }), n$1(No, "defineRedirectDescriptor"), n$1(zs, "defineCallDescriptor"), n$1(js, "defineWrapper"), n$1(Ho, "getWrapper"), n$1(Ls, "wrapEvent"), n$1(Ds, "isStopped"), n$1($s, "setEventPhase"), n$1(Ms, "setCurrentTarget"), n$1(Vo, "setPassiveListener");
    sd = /* @__PURE__ */ new WeakMap();
    __name(rr, "rr");
    __name(bt, "bt");
    __name(Us, "Us");
    __name(Zo, "Zo");
    __name(Ko, "Ko");
    __name(pe, "pe");
    n$1(rr, "isObject"), n$1(bt, "getListeners"), n$1(Us, "defineEventAttributeDescriptor"), n$1(Zo, "defineEventAttribute"), n$1(Ko, "defineCustomEventTarget"), n$1(pe, "EventTarget"), pe.prototype = { addEventListener(e6, t12, r11) {
      if (null == t12) return;
      if ("function" != typeof t12 && !rr(t12)) throw new TypeError("'listener' should be a function or an object.");
      const n5 = bt(this), o6 = rr(r11), i6 = (o6 ? r11.capture : r11) ? 1 : 2, a7 = { listener: t12, listenerType: i6, passive: o6 && !!r11.passive, once: o6 && !!r11.once, next: null };
      let h6 = n5.get(e6);
      if (void 0 === h6) return void n5.set(e6, a7);
      let m5 = null;
      for (; null != h6; ) {
        if (h6.listener === t12 && h6.listenerType === i6) return;
        m5 = h6, h6 = h6.next;
      }
      m5.next = a7;
    }, removeEventListener(e6, t12, r11) {
      if (null == t12) return;
      const n5 = bt(this), o6 = (rr(r11) ? r11.capture : r11) ? 1 : 2;
      let i6 = null, a7 = n5.get(e6);
      for (; null != a7; ) {
        if (a7.listener === t12 && a7.listenerType === o6) return void (null !== i6 ? i6.next = a7.next : null !== a7.next ? n5.set(e6, a7.next) : n5.delete(e6));
        i6 = a7, a7 = a7.next;
      }
    }, dispatchEvent(e6) {
      if (null == e6 || "string" != typeof e6.type) throw new TypeError('"event.type" should be a string.');
      const t12 = bt(this), r11 = e6.type;
      let n5 = t12.get(r11);
      if (null == n5) return true;
      const o6 = Ls(this, e6);
      let i6 = null;
      for (; null != n5; ) {
        if (n5.once ? null !== i6 ? i6.next = n5.next : null !== n5.next ? t12.set(r11, n5.next) : t12.delete(r11) : i6 = n5, Vo(o6, n5.passive ? n5.listener : null), "function" == typeof n5.listener) try {
          n5.listener.call(this, o6);
        } catch (e7) {
          typeof console < "u" && "function" == typeof console.error && console.error(e7);
        }
        else 3 !== n5.listenerType && "function" == typeof n5.listener.handleEvent && n5.listener.handleEvent(o6);
        if (Ds(o6)) break;
        n5 = n5.next;
      }
      return Vo(o6, null), $s(o6, 0), Ms(o6, null), !o6.defaultPrevented;
    } }, Object.defineProperty(pe.prototype, "constructor", { value: pe, configurable: true, writable: true });
    id = class extends pe {
      static {
        __name(this, "id");
      }
      constructor() {
        throw super(), new TypeError("AbortSignal cannot be constructed directly");
      }
      get aborted() {
        const e6 = ld.get(this);
        if ("boolean" != typeof e6) throw new TypeError("Expected 'this' to be an 'AbortSignal' object, but got " + (null === this ? "null" : typeof this));
        return e6;
      }
    };
    n$1(id, "AbortSignal");
    ad = id;
    __name(xs, "xs");
    __name(Ns, "Ns");
    Zo(ad.prototype, "abort"), n$1(xs, "createAbortSignal"), n$1(Ns, "abortSignal");
    ld = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(ad.prototype, { aborted: { enumerable: true } }), "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag && Object.defineProperty(ad.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
    cd = (n$1(Wc = class {
      static {
        __name(this, "Wc");
      }
      constructor() {
        ud.set(this, xs());
      }
      get signal() {
        return Xo(this);
      }
      abort() {
        Ns(Xo(this));
      }
    }, "AbortController"), Wc);
    ud = /* @__PURE__ */ new WeakMap();
    __name(Xo, "Xo");
    n$1(Xo, "getSignal"), Object.defineProperties(cd.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag && Object.defineProperty(cd.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
    dd = Object.defineProperty;
    pd = n$1((e6, t12) => dd(e6, "name", { value: t12, configurable: true }), "e");
    fd = Mo;
    __name(ti, "ti");
    ti(), n$1(ti, "s"), pd(ti, "checkNodeEnvironment");
    hd = !!(null == (Vc = null == (Uc = globalThis.process) ? void 0 : Uc.env) ? void 0 : Vc.FORCE_NODE_FETCH);
    md = !hd && globalThis.fetch || fd;
    gd = !hd && globalThis.Headers || Iu;
    bd = !hd && globalThis.AbortController || cd;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e6, t12) {
        super(e6, t12), this.name = "FetchError", (null == t12 ? void 0 : t12.cause) && !this.cause && (this.cause = t12.cause);
      }
    };
    yd = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    _d = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    Sd = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    Ed = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    vd = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    Td = (/* @__PURE__ */ __name(function createFetch(e6 = {}) {
      const { fetch: t12 = globalThis.fetch, Headers: r11 = globalThis.Headers, AbortController: n5 = globalThis.AbortController } = e6;
      async function onError(e7) {
        const t13 = e7.error && "AbortError" === e7.error.name && !e7.options.timeout || false;
        if (false !== e7.options.retry && !t13) {
          let t14;
          t14 = "number" == typeof e7.options.retry ? e7.options.retry : isPayloadMethod(e7.options.method) ? 0 : 1;
          const r13 = e7.response && e7.response.status || 500;
          if (t14 > 0 && (Array.isArray(e7.options.retryStatusCodes) ? e7.options.retryStatusCodes.includes(r13) : Ed.has(r13))) {
            const r14 = "function" == typeof e7.options.retryDelay ? e7.options.retryDelay(e7) : e7.options.retryDelay || 0;
            return r14 > 0 && await new Promise((e8) => setTimeout(e8, r14)), $fetchRaw(e7.request, { ...e7.options, retry: t14 - 1 });
          }
        }
        const r12 = function(e8) {
          var t14, r13, n6, o6, i6;
          const a7 = (null == (t14 = e8.error) ? void 0 : t14.message) || (null == (r13 = e8.error) ? void 0 : r13.toString()) || "", h6 = (null == (n6 = e8.request) ? void 0 : n6.method) || (null == (o6 = e8.options) ? void 0 : o6.method) || "GET", m5 = (null == (i6 = e8.request) ? void 0 : i6.url) || String(e8.request) || "/", _3 = `[${h6}] ${JSON.stringify(m5)}`, S3 = e8.response ? `${e8.response.status} ${e8.response.statusText}` : "<no response>", E4 = new FetchError(`${_3}: ${S3}${a7 ? ` ${a7}` : ""}`, e8.error ? { cause: e8.error } : void 0);
          for (const t15 of ["request", "options", "response"]) Object.defineProperty(E4, t15, { get: /* @__PURE__ */ __name(() => e8[t15], "get") });
          for (const [t15, r14] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(E4, t15, { get: /* @__PURE__ */ __name(() => e8.response && e8.response[r14], "get") });
          return E4;
        }(e7);
        throw Error.captureStackTrace && Error.captureStackTrace(r12, $fetchRaw), r12;
      }
      __name(onError, "onError");
      const $fetchRaw = /* @__PURE__ */ __name(async function(o6, i6 = {}) {
        const a7 = { request: o6, options: resolveFetchOptions(o6, i6, e6.defaults, r11), response: void 0, error: void 0 };
        let m5;
        if (a7.options.method && (a7.options.method = a7.options.method.toUpperCase()), a7.options.onRequest && await callHooks(a7, a7.options.onRequest), "string" == typeof a7.request && (a7.options.baseURL && (a7.request = withBase(a7.request, a7.options.baseURL)), a7.options.query && (a7.request = withQuery(a7.request, a7.options.query), delete a7.options.query), "query" in a7.options && delete a7.options.query, "params" in a7.options && delete a7.options.params), a7.options.body && isPayloadMethod(a7.options.method) && (!function(e7) {
          if (void 0 === e7) return false;
          const t13 = typeof e7;
          return "string" === t13 || "number" === t13 || "boolean" === t13 || null === t13 || "object" === t13 && (!!Array.isArray(e7) || !e7.buffer && (e7.constructor && "Object" === e7.constructor.name || "function" == typeof e7.toJSON));
        }(a7.options.body) ? ("pipeTo" in a7.options.body && "function" == typeof a7.options.body.pipeTo || "function" == typeof a7.options.body.pipe) && ("duplex" in a7.options || (a7.options.duplex = "half")) : (a7.options.body = "string" == typeof a7.options.body ? a7.options.body : JSON.stringify(a7.options.body), a7.options.headers = new r11(a7.options.headers || {}), a7.options.headers.has("content-type") || a7.options.headers.set("content-type", "application/json"), a7.options.headers.has("accept") || a7.options.headers.set("accept", "application/json"))), !a7.options.signal && a7.options.timeout) {
          const e7 = new n5();
          m5 = setTimeout(() => {
            const t13 = new Error("[TimeoutError]: The operation was aborted due to timeout");
            t13.name = "TimeoutError", t13.code = 23, e7.abort(t13);
          }, a7.options.timeout), a7.options.signal = e7.signal;
        }
        try {
          a7.response = await t12(a7.request, a7.options);
        } catch (e7) {
          return a7.error = e7, a7.options.onRequestError && await callHooks(a7, a7.options.onRequestError), await onError(a7);
        } finally {
          m5 && clearTimeout(m5);
        }
        if ((a7.response.body || a7.response._bodyInit) && !vd.has(a7.response.status) && "HEAD" !== a7.options.method) {
          const e7 = (a7.options.parseResponse ? "json" : a7.options.responseType) || function(e8 = "") {
            if (!e8) return "json";
            const t13 = e8.split(";").shift() || "";
            return Sd.test(t13) ? "json" : _d.has(t13) || t13.startsWith("text/") ? "text" : "blob";
          }(a7.response.headers.get("content-type") || "");
          switch (e7) {
            case "json": {
              const e8 = await a7.response.text(), t13 = a7.options.parseResponse || destr;
              a7.response._data = t13(e8);
              break;
            }
            case "stream":
              a7.response._data = a7.response.body || a7.response._bodyInit;
              break;
            default:
              a7.response._data = await a7.response[e7]();
          }
        }
        return a7.options.onResponse && await callHooks(a7, a7.options.onResponse), !a7.options.ignoreResponseError && a7.response.status >= 400 && a7.response.status < 600 ? (a7.options.onResponseError && await callHooks(a7, a7.options.onResponseError), await onError(a7)) : a7.response;
      }, "$fetchRaw"), $fetch2 = /* @__PURE__ */ __name(async function(e7, t13) {
        return (await $fetchRaw(e7, t13))._data;
      }, "$fetch2");
      return $fetch2.raw = $fetchRaw, $fetch2.native = (...e7) => t12(...e7), $fetch2.create = (t13 = {}, r12 = {}) => createFetch({ ...e6, ...r12, defaults: { ...e6.defaults, ...r12.defaults, ...t13 } }), $fetch2;
    }, "createFetch"))({ fetch: globalThis.fetch ? (...e6) => globalThis.fetch(...e6) : function() {
      if (!JSON.parse(m4.env.FETCH_KEEP_ALIVE || "false")) return md;
      const e6 = { keepAlive: true }, t12 = new Fr.Agent(e6), r11 = new pl.Agent(e6), n5 = { agent: /* @__PURE__ */ __name((e7) => "http:" === e7.protocol ? t12 : r11, "agent") };
      return function(e7, t13) {
        return md(e7, { ...n5, ...t13 });
      };
    }(), Headers: globalThis.Headers || gd, AbortController: globalThis.AbortController || bd });
    Cd = Td;
    globalThis.$fetch || (globalThis.$fetch = Cd.create({ baseURL: baseURL() })), "global" in globalThis || (globalThis.global = globalThis);
    Rd = { componentName: "NuxtLink" };
    wd = { value: null, errorValue: null, deep: true };
    Od = "nuxt-app";
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    Nd = "__nuxt_plugin";
    __name(registerPluginHooks, "registerPluginHooks");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    __name(callWithNuxt, "callWithNuxt");
    __name(tryUseNuxtApp, "tryUseNuxtApp");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    Ad = Symbol("layout-meta");
    xd = Symbol("route");
    useRouter = /* @__PURE__ */ __name(() => {
      var e6;
      return null == (e6 = useNuxtApp()) ? void 0 : e6.$router;
    }, "useRouter");
    useRoute = /* @__PURE__ */ __name(() => dl.hasInjectionContext() ? dl.inject(xd, useNuxtApp()._route) : useNuxtApp()._route, "useRoute");
    __name(defineNuxtRouteMiddleware, "defineNuxtRouteMiddleware");
    Pd = /"/g;
    navigateTo = /* @__PURE__ */ __name((e6, t12) => {
      e6 || (e6 = "/");
      const r11 = "string" == typeof e6 ? e6 : "path" in e6 ? resolveRouteObject(e6) : useRouter().resolve(e6).href, n5 = hasProtocol(r11, { acceptRelative: true }), h6 = (null == t12 ? void 0 : t12.external) || n5;
      if (h6) {
        if (!(null == t12 ? void 0 : t12.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e7 } = new URL(r11, "http://localhost");
        if (e7 && isScriptProtocol(e7)) throw new Error(`Cannot navigate to a URL with '${e7}' protocol.`);
      }
      const _3 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware) return true;
        } catch {
          return false;
        }
        return false;
      })(), S3 = useRouter(), E4 = useNuxtApp();
      if (E4.ssrContext) {
        const o6 = "string" == typeof e6 || h6 ? r11 : S3.resolve(e6).fullPath || "/", i6 = h6 ? r11 : joinURL(useRuntimeConfig().app.baseURL, o6), redirect = /* @__PURE__ */ __name(async function(e7) {
          await E4.callHook("app:redirected");
          const r12 = i6.replace(Pd, "%22"), o7 = function(e8, t13 = false) {
            const r13 = new URL(e8, "http://localhost");
            if (!t13) return r13.pathname + r13.search + r13.hash;
            if (e8.startsWith("//")) return r13.toString().replace(r13.protocol, "");
            return r13.toString();
          }(i6, n5);
          return E4.ssrContext._renderResponse = { statusCode: sanitizeStatusCode((null == t12 ? void 0 : t12.redirectCode) || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${r12}"></head></html>`, headers: { location: o7 } }, e7;
        }, "redirect");
        return !h6 && _3 ? (S3.afterEach((e7) => e7.fullPath === o6 ? redirect(false) : void 0), e6) : redirect(!_3 && void 0);
      }
      return h6 ? (E4._scope.stop(), (null == t12 ? void 0 : t12.replace) ? (void 0).replace(r11) : (void 0).href = r11, _3 ? !!E4.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : (null == t12 ? void 0 : t12.replace) ? S3.replace(e6) : S3.push(e6);
    }, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    Id = "__nuxt_error";
    useError = /* @__PURE__ */ __name(() => dl.toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e6) => {
      const t12 = createError(e6);
      try {
        useNuxtApp();
        const e7 = useError();
        0, e7.value || (e7.value = t12);
      } catch {
        throw t12;
      }
      return t12;
    }, "showError");
    isNuxtError = /* @__PURE__ */ __name((e6) => !!e6 && "object" == typeof e6 && Id in e6, "isNuxtError");
    createError = /* @__PURE__ */ __name((e6) => {
      const t12 = createError2(e6);
      return Object.defineProperty(t12, Id, { value: true, configurable: false, writable: false }), t12;
    }, "createError");
    kd = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e6) {
      const t12 = e6.ssrContext.head;
      e6.vueApp.use(t12);
    } });
    __name(toArray, "toArray");
    Ld = [{ name: "index", path: "/", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_CLXCyT47(), index_CLXCyT47_exports)), "component") }, { name: "store-product-id", path: "/store/product/:id()", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_DlOQNe7C(), id_DlOQNe7C_exports)), "component") }, { name: "store-catalog", path: "/store/catalog", component: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_CS5_NQK4(), index_CS5_NQK4_exports)), "component") }];
    Md = /(:\w+)\([^)]+\)/g;
    Dd = /(:\w+)[?+*]/g;
    Bd = /:\w+/g;
    __name(generateRouteKey, "generateRouteKey");
    __name(_getHashElementScrollMarginTop, "_getHashElementScrollMarginTop");
    __name(_calculatePosition, "_calculatePosition");
    Fd = { hashMode: false, scrollBehaviorType: "auto", ...{ scrollBehavior(e6, t12, r11) {
      var n5;
      const o6 = useNuxtApp(), i6 = (null == (n5 = useRouter().options) ? void 0 : n5.scrollBehaviorType) ?? "auto";
      if (e6.path === t12.path) return t12.hash && !e6.hash ? { left: 0, top: 0 } : !!e6.hash && { el: e6.hash, top: _getHashElementScrollMarginTop(e6.hash), behavior: i6 };
      if (false === ("function" == typeof e6.meta.scrollToTop ? e6.meta.scrollToTop(e6, t12) : e6.meta.scrollToTop)) return false;
      let a7 = r11 || void 0;
      !a7 && function(e7, t13) {
        return e7 !== t13 && t13 !== cc && (generateRouteKey(e7) !== generateRouteKey(t13) || !e7.matched.every((e8, r12) => {
          var n6, o7;
          return e8.components && e8.components.default === (null == (o7 = null == (n6 = t13.matched[r12]) ? void 0 : n6.components) ? void 0 : o7.default);
        }));
      }(e6, t12) && (a7 = { left: 0, top: 0 });
      const h6 = o6._runningTransition ? "page:transition:finish" : "page:loading:end";
      return new Promise((r12) => {
        t12 !== cc ? o6.hooks.hookOnce(h6, () => {
          requestAnimationFrame(() => r12(_calculatePosition(e6, "instant", a7)));
        }) : r12(_calculatePosition(e6, "instant", a7));
      });
    } } };
    jd = [defineNuxtRouteMiddleware(async (e6, t12) => {
      var r11;
      let n5, o6;
      if (!(null == (r11 = e6.meta) ? void 0 : r11.validate)) return;
      const i6 = ([n5, o6] = executeAsync(() => Promise.resolve(e6.meta.validate(e6))), n5 = await n5, o6(), n5);
      if (true === i6) return;
      return createError({ fatal: false, statusCode: i6 && i6.statusCode || 404, statusMessage: i6 && i6.statusMessage || `Page Not Found: ${e6.fullPath}`, data: { path: e6.fullPath } });
    }), defineNuxtRouteMiddleware(async (e6) => {
    })];
    qd = {};
    __name(definePayloadReducer, "definePayloadReducer");
    Wd = [["NuxtError", (e6) => isNuxtError(e6) && e6.toJSON()], ["EmptyShallowRef", (e6) => dl.isRef(e6) && dl.isShallow(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_")], ["EmptyRef", (e6) => dl.isRef(e6) && !e6.value && ("bigint" == typeof e6.value ? "0n" : JSON.stringify(e6.value) || "_")], ["ShallowRef", (e6) => dl.isRef(e6) && dl.isShallow(e6) && e6.value], ["ShallowReactive", (e6) => dl.isReactive(e6) && dl.isShallow(e6) && dl.toRaw(e6)], ["Ref", (e6) => dl.isRef(e6) && e6.value], ["Reactive", (e6) => dl.isReactive(e6) && dl.toRaw(e6)]];
    Ud = [kd, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", async setup(e6) {
      var t12, r11, n5;
      let o6, i6, a7 = useRuntimeConfig().app.baseURL;
      const h6 = (null == (t12 = Fd.history) ? void 0 : t12.call(Fd, a7)) ?? createMemoryHistory(a7), m5 = Fd.routes ? ([o6, i6] = executeAsync(() => Fd.routes(Ld)), o6 = await o6, i6(), o6 ?? Ld) : Ld;
      let _3;
      const S3 = createRouter({ ...Fd, scrollBehavior: /* @__PURE__ */ __name((e7, t13, r12) => {
        if (t13 !== cc) {
          if (Fd.scrollBehavior) {
            if (S3.options.scrollBehavior = Fd.scrollBehavior, "scrollRestoration" in (void 0).history) {
              const e8 = S3.beforeEach(() => {
                e8(), (void 0).history.scrollRestoration = "manual";
              });
            }
            return Fd.scrollBehavior(e7, cc, _3 || r12);
          }
        } else _3 = r12;
      }, "scrollBehavior"), history: h6, routes: m5 });
      e6.vueApp.use(S3);
      const E4 = dl.shallowRef(S3.currentRoute.value);
      S3.afterEach((e7, t13) => {
        E4.value = t13;
      }), Object.defineProperty(e6.vueApp.config.globalProperties, "previousRoute", { get: /* @__PURE__ */ __name(() => E4.value, "get") });
      const v6 = e6.ssrContext.url, T3 = dl.shallowRef(S3.currentRoute.value), syncCurrentRoute = /* @__PURE__ */ __name(() => {
        T3.value = S3.currentRoute.value;
      }, "syncCurrentRoute");
      e6.hook("page:finish", syncCurrentRoute), S3.afterEach((e7, t13) => {
        var r12, n6, o7, i7;
        (null == (n6 = null == (r12 = e7.matched[0]) ? void 0 : r12.components) ? void 0 : n6.default) === (null == (i7 = null == (o7 = t13.matched[0]) ? void 0 : o7.components) ? void 0 : i7.default) && syncCurrentRoute();
      });
      const w4 = {};
      for (const e7 in T3.value) Object.defineProperty(w4, e7, { get: /* @__PURE__ */ __name(() => T3.value[e7], "get"), enumerable: true });
      e6._route = dl.shallowReactive(w4), e6._middleware || (e6._middleware = { global: [], named: {} }), useError(), (null == (r11 = e6.ssrContext) ? void 0 : r11.islandContext) || S3.afterEach(async (t13, r12, n6) => {
        delete e6._processingMiddleware, n6 && await e6.callHook("page:loading:end"), 4 !== (null == n6 ? void 0 : n6.type) && t13.redirectedFrom && t13.fullPath !== v6 && await e6.runWithContext(() => navigateTo(t13.fullPath || "/"));
      });
      try {
        [o6, i6] = executeAsync(() => S3.push(v6)), await o6, i6(), [o6, i6] = executeAsync(() => S3.isReady()), await o6, i6();
      } catch (t13) {
        [o6, i6] = executeAsync(() => e6.runWithContext(() => showError(t13))), await o6, i6();
      }
      const N3 = S3.currentRoute.value;
      if (syncCurrentRoute(), null == (n5 = e6.ssrContext) ? void 0 : n5.islandContext) return { provide: { router: S3 } };
      const L3 = e6.payload.state._layout;
      return S3.beforeEach(async (t13, r12) => {
        var n6, o7;
        if (await e6.callHook("page:loading:start"), t13.meta = dl.reactive(t13.meta), e6.isHydrating && L3 && !dl.isReadonly(t13.meta.layout) && (t13.meta.layout = L3), e6._processingMiddleware = true, !(null == (n6 = e6.ssrContext) ? void 0 : n6.islandContext)) {
          const n7 = /* @__PURE__ */ new Set([...jd, ...e6._middleware.global]);
          for (const e7 of t13.matched) {
            const t14 = e7.meta.middleware;
            if (t14) for (const e8 of toArray(t14)) n7.add(e8);
          }
          {
            const r13 = await e6.runWithContext(() => async function(e7) {
              const t14 = "string" == typeof e7 ? e7 : e7.path;
              {
                useNuxtApp().ssrContext._preloadManifest = true;
                const e8 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                return Lt({}, ...e8.matchAll(t14).reverse());
              }
            }({ path: t13.path }));
            if (r13.appMiddleware) for (const e7 in r13.appMiddleware) r13.appMiddleware[e7] ? n7.add(e7) : n7.delete(e7);
          }
          for (const i7 of n7) {
            const n8 = "string" == typeof i7 ? e6._middleware.named[i7] || await (null == (o7 = qd[i7]) ? void 0 : o7.call(qd).then((e7) => e7.default || e7)) : i7;
            if (!n8) throw new Error(`Unknown route middleware: '${i7}'.`);
            try {
              const o8 = await e6.runWithContext(() => n8(t13, r12));
              if (false === o8 || o8 instanceof Error) {
                const t14 = o8 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${v6}` });
                return await e6.runWithContext(() => showError(t14)), false;
              }
              if (true === o8) continue;
              if (false === o8) return o8;
              if (o8) return isNuxtError(o8) && o8.fatal && await e6.runWithContext(() => showError(o8)), o8;
            } catch (t14) {
              const r13 = createError(t14);
              return r13.fatal && await e6.runWithContext(() => showError(r13)), r13;
            }
          }
        }
      }), S3.onError(async () => {
        delete e6._processingMiddleware, await e6.callHook("page:loading:end");
      }), S3.afterEach(async (t13, r12) => {
        0 === t13.matched.length && await e6.runWithContext(() => showError(createError({ statusCode: 404, fatal: false, statusMessage: `Page not found: ${t13.fullPath}`, data: { path: t13.fullPath } })));
      }), e6.hooks.hookOnce("app:created", async () => {
        try {
          "name" in N3 && (N3.name = void 0), await S3.replace({ ...N3, force: true }), S3.options.scrollBehavior = Fd.scrollBehavior;
        } catch (t13) {
          await e6.runWithContext(() => showError(t13));
        }
      }), { provide: { router: S3 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [e6, t12] of Wd) definePayloadReducer(e6, t12);
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    Vd = { default: dl.defineAsyncComponent(() => Promise.resolve().then(() => (init_default_BZyETgmw(), default_BZyETgmw_exports)).then((e6) => e6.default || e6)) };
    $d = dl.defineComponent({ name: "LayoutLoader", inheritAttrs: false, props: { name: String, layoutProps: Object }, setup: /* @__PURE__ */ __name((e6, t12) => () => dl.h(Vd[e6.name], e6.layoutProps, t12.slots), "setup") });
    Hd = { name: { type: [String, Boolean, Object], default: null }, fallback: { type: [String, Object], default: null } };
    zd = dl.defineComponent({ name: "NuxtLayout", inheritAttrs: false, props: Hd, setup(e6, t12) {
      const r11 = useNuxtApp(), n5 = dl.inject(xd), o6 = !n5 || n5 === useRoute() ? useRoute$1() : n5, i6 = dl.computed(() => {
        let t13 = dl.unref(e6.name) ?? (null == o6 ? void 0 : o6.meta.layout) ?? "default";
        return t13 && !(t13 in Vd) && e6.fallback && (t13 = dl.unref(e6.fallback)), t13;
      }), a7 = dl.shallowRef();
      t12.expose({ layoutRef: a7 });
      const h6 = r11.deferHydration();
      let m5;
      return () => {
        i6.value && i6.value;
        const r12 = (null == o6 ? void 0 : o6.meta.layoutTransition) ?? false, n6 = m5;
        return m5 = i6.value, (_3 = { default: /* @__PURE__ */ __name(() => dl.h(dl.Suspense, { suspensible: true, onResolve: /* @__PURE__ */ __name(() => {
          dl.nextTick(h6);
        }, "onResolve") }, { default: /* @__PURE__ */ __name(() => dl.h(Xd, { layoutProps: dl.mergeProps(t12.attrs, { ref: a7 }), key: i6.value || void 0, name: i6.value, shouldProvide: !e6.name, isRenderingNewLayout: /* @__PURE__ */ __name((e7) => e7 !== n6 && e7 === i6.value, "isRenderingNewLayout"), hasTransition: !!r12 }, t12.slots), "default") }), "default") }, { default: /* @__PURE__ */ __name(() => {
          var e7;
          return null == (e7 = _3.default) ? void 0 : e7.call(_3);
        }, "default") }).default();
        var _3;
      };
    } });
    Xd = dl.defineComponent({ name: "NuxtLayoutProvider", inheritAttrs: false, props: { name: { type: [String, Boolean] }, layoutProps: { type: Object }, hasTransition: { type: Boolean }, shouldProvide: { type: Boolean }, isRenderingNewLayout: { type: Function, required: true } }, setup(e6, t12) {
      const r11 = e6.name;
      e6.shouldProvide && dl.provide(Ad, { isCurrent: /* @__PURE__ */ __name((e7) => r11 === (e7.meta.layout ?? "default"), "isCurrent") });
      const n5 = dl.inject(xd);
      if (n5 && n5 === useRoute()) {
        const t13 = useRoute$1(), r12 = {};
        for (const o6 in t13) {
          const i6 = o6;
          Object.defineProperty(r12, i6, { enumerable: true, get: /* @__PURE__ */ __name(() => e6.isRenderingNewLayout(e6.name) ? t13[i6] : n5[i6], "get") });
        }
        dl.provide(xd, dl.shallowReactive(r12));
      }
      return () => {
        var n6, o6;
        return !r11 || "string" == typeof r11 && !(r11 in Vd) ? null == (o6 = (n6 = t12.slots).default) ? void 0 : o6.call(n6) : dl.h($d, { key: r11, layoutProps: e6.layoutProps, name: r11 }, t12.slots);
      };
    } });
    Gd = ((e6 = "RouteProvider") => dl.defineComponent({ name: e6, props: { route: { type: Object, required: true }, vnode: Object, vnodeRef: Object, renderKey: String, trackRootNodes: Boolean }, setup(e7) {
      const t12 = e7.renderKey, r11 = e7.route, n5 = {};
      for (const o6 in e7.route) Object.defineProperty(n5, o6, { get: /* @__PURE__ */ __name(() => t12 === e7.renderKey ? e7.route[o6] : r11[o6], "get"), enumerable: true });
      return dl.provide(xd, dl.shallowReactive(n5)), () => e7.vnode ? dl.h(e7.vnode, { ref: e7.vnodeRef }) : e7.vnode;
    } }))();
    Qd = dl.defineComponent({ name: "NuxtPage", inheritAttrs: false, props: { name: { type: String }, transition: { type: [Boolean, Object], default: void 0 }, keepalive: { type: [Boolean, Object], default: void 0 }, route: { type: Object }, pageKey: { type: [Function, String], default: null } }, setup(e6, { attrs: t12, slots: r11, expose: n5 }) {
      const o6 = useNuxtApp(), i6 = dl.ref();
      return dl.inject(xd, null), n5({ pageRef: i6 }), dl.inject(Ad, null), o6.deferHydration(), () => dl.h(Nc, { name: e6.name, route: e6.route, ...t12 }, { default: /* @__PURE__ */ __name((e7) => dl.h(dl.Suspense, { suspensible: true }, { default: /* @__PURE__ */ __name(() => dl.h(Gd, { vnode: r11.default ? normalizeSlot(r11.default, e7) : e7.Component, route: e7.route, vnodeRef: i6 }), "default") }), "default") });
    } });
    __name(normalizeSlot, "normalizeSlot");
    _export_sfc = /* @__PURE__ */ __name((e6, t12) => {
      const r11 = e6.__vccOpts || e6;
      for (const [e7, n5] of t12) r11[e7] = n5;
      return r11;
    }, "_export_sfc");
    Kd = {};
    Jd = Kd.setup;
    Kd.setup = (e6, t12) => {
      const r11 = dl.useSSRContext();
      return (r11.modules || (r11.modules = /* @__PURE__ */ new Set())).add("app.vue"), Jd ? Jd(e6, t12) : void 0;
    };
    Yd = _export_sfc(Kd, [["ssrRender", function(e6, t12, r11, n5) {
      const o6 = zd, i6 = Qd;
      t12(`<div${ssrRenderAttrs(n5)}>`), t12(ssrRenderComponent(o6, null, { default: dl.withCtx((e7, t13, r12, n6) => {
        if (!t13) return [dl.createVNode(i6)];
        t13(ssrRenderComponent(i6, null, null, r12, n6));
      }), _: 1 }, r11)), t12("</div>");
    }]]);
    Zd = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e6) {
      const t12 = e6.error;
      t12.stack && t12.stack.split("\n").splice(1).map((e7) => ({ text: e7.replace("webpack:/", "").replace(".vue", ".js").trim(), internal: e7.includes("node_modules") && !e7.includes(".cache") || e7.includes("internal") || e7.includes("new Promise") })).map((e7) => `<span class="stack${e7.internal ? " internal" : ""}">${e7.text}</span>`).join("\n");
      const r11 = Number(t12.statusCode || 500), n5 = 404 === r11, o6 = t12.statusMessage ?? (n5 ? "Page Not Found" : "Internal Server Error"), i6 = t12.message || t12.toString(), a7 = dl.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_UWzz7lb3(), error_404_UWzz7lb3_exports))), h6 = dl.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_BSwQ_waQ(), error_500_BSwQ_waQ_exports))), m5 = n5 ? a7 : h6;
      return (e7, t13, n6, a8) => {
        t13(ssrRenderComponent(dl.unref(m5), dl.mergeProps({ statusCode: dl.unref(r11), statusMessage: dl.unref(o6), description: dl.unref(i6), stack: dl.unref(void 0) }, a8), null, n6));
      };
    } };
    ep = Zd.setup;
    Zd.setup = (e6, t12) => {
      const r11 = dl.useSSRContext();
      return (r11.modules || (r11.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), ep ? ep(e6, t12) : void 0;
    };
    tp = { __name: "nuxt-root", __ssrInlineRender: true, setup(e6) {
      const IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer"), t12 = useNuxtApp();
      t12.deferHydration(), t12.ssrContext.url;
      const r11 = false;
      dl.provide(xd, useRoute()), t12.hooks.callHookWith((e7) => e7.map((e8) => e8()), "vue:setup");
      const n5 = useError(), o6 = n5.value && !t12.ssrContext.error;
      dl.onErrorCaptured((e7, r12, n6) => {
        t12.hooks.callHook("vue:error", e7, r12, n6).catch((e8) => console.error("[nuxt] Error in `vue:error` hook", e8));
        {
          const r13 = t12.runWithContext(() => showError(e7));
          return dl.onServerPrefetch(() => r13), false;
        }
      });
      const i6 = t12.ssrContext.islandContext;
      return (e7, t13, a7, h6) => {
        ssrRenderSuspense(t13, { default: /* @__PURE__ */ __name(() => {
          dl.unref(o6) ? t13("<div></div>") : dl.unref(n5) ? t13(ssrRenderComponent(dl.unref(Zd), { error: dl.unref(n5) }, null, a7)) : dl.unref(i6) ? t13(ssrRenderComponent(dl.unref(IslandRenderer), { context: dl.unref(i6) }, null, a7)) : dl.unref(r11) ? renderVNode(t13, dl.createVNode(dl.resolveDynamicComponent(dl.unref(r11)), null, null), a7) : t13(ssrRenderComponent(dl.unref(Yd), null, null, a7));
        }, "default") });
      };
    } };
    rp = tp.setup;
    tp.setup = (e6, t12) => {
      const r11 = dl.useSSRContext();
      return (r11.modules || (r11.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/nuxt-root.vue"), rp ? rp(e6, t12) : void 0;
    }, np = /* @__PURE__ */ __name(async function(e6) {
      var t12;
      const r11 = dl.createApp(tp), n5 = function(e7) {
        var t13;
        let r12 = 0;
        const n6 = { _id: e7.id || Od || "nuxt-app", _scope: dl.effectScope(), provide: void 0, globalName: "nuxt", versions: { get nuxt() {
          return "3.17.5";
        }, get vue() {
          return n6.vueApp.version;
        } }, payload: dl.shallowReactive({ ...(null == (t13 = e7.ssrContext) ? void 0 : t13.payload) || {}, data: dl.shallowReactive({}), state: dl.reactive({}), once: /* @__PURE__ */ new Set(), _errors: dl.shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e8) => n6._scope.active && !dl.getCurrentScope() ? n6._scope.run(() => callWithNuxt(n6, e8)) : callWithNuxt(n6, e8), "runWithContext"), isHydrating: false, deferHydration() {
          if (!n6.isHydrating) return () => {
          };
          r12++;
          let e8 = false;
          return () => {
            if (!e8) return e8 = true, r12--, 0 === r12 ? (n6.isHydrating = false, n6.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: dl.shallowReactive({}), _payloadRevivers: {}, ...e7 };
        n6.payload.serverRendered = true, n6.ssrContext && (n6.payload.path = n6.ssrContext.url, n6.ssrContext.nuxt = n6, n6.ssrContext.payload = n6.payload, n6.ssrContext.config = { public: n6.ssrContext.runtimeConfig.public, app: n6.ssrContext.runtimeConfig.app }), n6.hooks = createHooks(), n6.hook = n6.hooks.hook;
        {
          const contextCaller = /* @__PURE__ */ __name(async function(e8, t14) {
            for (const r13 of e8) await n6.runWithContext(() => r13(...t14));
          }, "contextCaller");
          n6.hooks.callHook = (e8, ...t14) => n6.hooks.callHookWith(contextCaller, e8, ...t14);
        }
        n6.callHook = n6.hooks.callHook, n6.provide = (e8, t14) => {
          const r13 = "$" + e8;
          defineGetter(n6, r13, t14), defineGetter(n6.vueApp.config.globalProperties, r13, t14);
        }, defineGetter(n6.vueApp, "$nuxt", n6), defineGetter(n6.vueApp.config.globalProperties, "$nuxt", n6);
        const o6 = e7.ssrContext.runtimeConfig;
        return n6.provide("config", o6), n6;
      }({ vueApp: r11, ssrContext: e6 });
      try {
        await async function(e7, t13) {
          var r12, n6, o6, i6;
          const a7 = /* @__PURE__ */ new Set(), h6 = [], m5 = [], _3 = [];
          let S3 = 0;
          async function executePlugin(r13) {
            var n7;
            const o7 = (null == (n7 = r13.dependsOn) ? void 0 : n7.filter((e8) => t13.some((t14) => t14._name === e8) && !a7.has(e8))) ?? [];
            if (o7.length > 0) h6.push([new Set(o7), r13]);
            else {
              const t14 = async function(e8, t15) {
                if ("function" == typeof t15) {
                  const { provide: r14 } = await e8.runWithContext(() => t15(e8)) || {};
                  if (r14 && "object" == typeof r14) for (const t16 in r14) e8.provide(t16, r14[t16]);
                }
              }(e7, r13).then(async () => {
                r13._name && (a7.add(r13._name), await Promise.all(h6.map(async ([e8, t15]) => {
                  e8.has(r13._name) && (e8.delete(r13._name), 0 === e8.size && (S3++, await executePlugin(t15)));
                })));
              });
              r13.parallel ? m5.push(t14.catch((e8) => _3.push(e8))) : await t14;
            }
          }
          __name(executePlugin, "executePlugin");
          for (const o7 of t13) (null == (r12 = e7.ssrContext) ? void 0 : r12.islandContext) && false === (null == (n6 = o7.env) ? void 0 : n6.islands) || registerPluginHooks(e7, o7);
          for (const r13 of t13) (null == (o6 = e7.ssrContext) ? void 0 : o6.islandContext) && false === (null == (i6 = r13.env) ? void 0 : i6.islands) || await executePlugin(r13);
          if (await Promise.all(m5), S3) for (let e8 = 0; e8 < S3; e8++) await Promise.all(m5);
          if (_3.length) throw _3[0];
        }(n5, Ud), await n5.hooks.callHook("app:created", r11);
      } catch (e7) {
        await n5.hooks.callHook("app:error", e7), (t12 = n5.payload).error || (t12.error = createError(e7));
      }
      if (null == e6 ? void 0 : e6._renderResponse) throw new Error("skipping render");
      return r11;
    }, "np");
    op = Object.freeze(Object.defineProperty({ __proto__: null, Y: eu, Z: cu, _: _export_sfc, a: useNuxtApp, b: useRuntimeConfig, c: Rd, d: wd, default: /* @__PURE__ */ __name((e6) => np(e6), "default"), e: createError, n: navigateTo, r: resolveRouteObject, t: tryUseNuxtApp, u: useRouter }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o4
});
var o4;
var init_virtual_spa_template = __esm({
  "dist/server/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    o4 = "";
  }
});

// dist/server/chunks/build/entry-styles.D4AgHLVB.mjs
var entry_styles_D4AgHLVB_exports = {};
__export(entry_styles_D4AgHLVB_exports, {
  default: () => r4
});
var r4;
var init_entry_styles_D4AgHLVB = __esm({
  "dist/server/chunks/build/entry-styles.D4AgHLVB.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    r4 = [":root{--primary-color:#646cff;--primary-color-dark:#535bf2;--text-color:#213547;--background-color:#fff;--card-background:#fff;--border-color:#e5e7eb}body{background-color:var(--background-color);color:var(--text-color);font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;margin:0}h1{font-size:3vw;-webkit-text-fill-color:transparent;line-height:1.1;margin:50px 0 20px;text-align:center}h1,h2{background:linear-gradient(90deg,#f0f,#40e0d0);-webkit-background-clip:text;font-weight:700}h2{font-size:2vw;margin-bottom:30px}h2,h3{-webkit-text-fill-color:transparent}h3{background:linear-gradient(90deg,#f0f,#40e0d0);-webkit-background-clip:text;font-size:1.5vw;font-weight:700;margin-bottom:20px}@media (max-width:1024px){h1{font-size:6vw}h2{font-size:4vw}h3{font-size:3vw}}a{text-decoration:none}.container{margin:0 auto;max-width:1280px}.product-card{background:var(--card-background);border:1px solid var(--border-color);border-radius:8px;cursor:pointer;overflow:hidden;padding:1rem;text-align:center;transition:transform .2s}.product-card:hover{transform:translateY(-4px)}.product-card img{border-radius:4px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.product-card h2{font-size:1.25rem;font-weight:600;margin:0 0 1rem}.product-card p{color:#666;display:-webkit-box;margin:0 0 1.5rem;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.product-card .footer{align-items:center;display:flex;flex-direction:column;gap:16px}.product-card .price{font-size:1.25rem;font-weight:700}.button{background-color:#2c3e50;border:none;border-radius:4px;color:#fff;cursor:pointer;font-weight:600;padding:.5rem 1rem;transition:background-color .2s}.button:hover{background-color:#1c98f1;transition:all .3s linear}.error,.loading{font-size:1.2rem;padding:2rem;text-align:center}.error{color:#dc2626}.back-link{color:var(--primary-color);display:inline-block;margin-bottom:1rem;text-decoration:none}.back-link:hover{color:var(--primary-color-dark)}.product-detail{display:grid;gap:2rem;grid-template-columns:1fr 1fr;padding:2rem 0}.product-image img{background:#fff;border-radius:4px;height:auto;-o-object-fit:contain;object-fit:contain;width:100%}"];
  }
});

// dist/server/chunks/build/error-500-styles-1.mjs-DP-pzRBB.mjs
var t4;
var init_error_500_styles_1_mjs_DP_pzRBB = __esm({
  "dist/server/chunks/build/error-500-styles-1.mjs-DP-pzRBB.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t4 = ".spotlight[data-v-3925d347]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}.fixed[data-v-3925d347]{position:fixed}.-bottom-1\\/2[data-v-3925d347]{bottom:-50%}.left-0[data-v-3925d347]{left:0}.right-0[data-v-3925d347]{right:0}.grid[data-v-3925d347]{display:grid}.mb-16[data-v-3925d347]{margin-bottom:4rem}.mb-8[data-v-3925d347]{margin-bottom:2rem}.h-1\\/2[data-v-3925d347]{height:50%}.max-w-520px[data-v-3925d347]{max-width:520px}.min-h-screen[data-v-3925d347]{min-height:100vh}.place-content-center[data-v-3925d347]{place-content:center}.overflow-hidden[data-v-3925d347]{overflow:hidden}.bg-white[data-v-3925d347]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8[data-v-3925d347]{padding-left:2rem;padding-right:2rem}.text-center[data-v-3925d347]{text-align:center}.text-8xl[data-v-3925d347]{font-size:6rem;line-height:1}.text-xl[data-v-3925d347]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-3925d347]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-3925d347]{font-weight:300}.font-medium[data-v-3925d347]{font-weight:500}.leading-tight[data-v-3925d347]{line-height:1.25}.font-sans[data-v-3925d347]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-3925d347]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-3925d347]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-3925d347]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-3925d347]{padding-left:0;padding-right:0}.sm\\:text-4xl[data-v-3925d347]{font-size:2.25rem;line-height:2.5rem}}";
  }
});

// dist/server/chunks/build/error-500-styles.DTdjuo-6.mjs
var error_500_styles_DTdjuo_6_exports = {};
__export(error_500_styles_DTdjuo_6_exports, {
  default: () => r5
});
var r5;
var init_error_500_styles_DTdjuo_6 = __esm({
  "dist/server/chunks/build/error-500-styles.DTdjuo-6.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error_500_styles_1_mjs_DP_pzRBB();
    r5 = [t4, t4];
  }
});

// dist/server/chunks/build/error-404-styles-1.mjs-CsHKj2IJ.mjs
var a4;
var init_error_404_styles_1_mjs_CsHKj2IJ = __esm({
  "dist/server/chunks/build/error-404-styles-1.mjs-CsHKj2IJ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a4 = '.spotlight[data-v-a5e695ad]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-a5e695ad]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-a5e695ad]{background-color:#ffffff4d}.gradient-border[data-v-a5e695ad]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-a5e695ad]{background-color:#1414144d}.gradient-border[data-v-a5e695ad]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82,#36e4da 75%,#0047e1)}}.gradient-border[data-v-a5e695ad]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-a5e695ad]:hover:before{background-position:-50% 0;opacity:1}.fixed[data-v-a5e695ad]{position:fixed}.left-0[data-v-a5e695ad]{left:0}.right-0[data-v-a5e695ad]{right:0}.z-10[data-v-a5e695ad]{z-index:10}.z-20[data-v-a5e695ad]{z-index:20}.grid[data-v-a5e695ad]{display:grid}.mb-16[data-v-a5e695ad]{margin-bottom:4rem}.mb-8[data-v-a5e695ad]{margin-bottom:2rem}.max-w-520px[data-v-a5e695ad]{max-width:520px}.min-h-screen[data-v-a5e695ad]{min-height:100vh}.w-full[data-v-a5e695ad]{width:100%}.flex[data-v-a5e695ad]{display:flex}.cursor-pointer[data-v-a5e695ad]{cursor:pointer}.place-content-center[data-v-a5e695ad]{place-content:center}.items-center[data-v-a5e695ad]{align-items:center}.justify-center[data-v-a5e695ad]{justify-content:center}.overflow-hidden[data-v-a5e695ad]{overflow:hidden}.bg-white[data-v-a5e695ad]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-4[data-v-a5e695ad]{padding-left:1rem;padding-right:1rem}.px-8[data-v-a5e695ad]{padding-left:2rem;padding-right:2rem}.py-2[data-v-a5e695ad]{padding-bottom:.5rem;padding-top:.5rem}.text-center[data-v-a5e695ad]{text-align:center}.text-8xl[data-v-a5e695ad]{font-size:6rem;line-height:1}.text-xl[data-v-a5e695ad]{font-size:1.25rem;line-height:1.75rem}.text-black[data-v-a5e695ad]{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light[data-v-a5e695ad]{font-weight:300}.font-medium[data-v-a5e695ad]{font-weight:500}.leading-tight[data-v-a5e695ad]{line-height:1.25}.font-sans[data-v-a5e695ad]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased[data-v-a5e695ad]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-a5e695ad]{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white[data-v-a5e695ad]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:px-0[data-v-a5e695ad]{padding-left:0;padding-right:0}.sm\\:px-6[data-v-a5e695ad]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3[data-v-a5e695ad]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:text-4xl[data-v-a5e695ad]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-a5e695ad]{font-size:1.25rem;line-height:1.75rem}}';
  }
});

// dist/server/chunks/build/error-404-styles.B3afWBaI.mjs
var error_404_styles_B3afWBaI_exports = {};
__export(error_404_styles_B3afWBaI_exports, {
  default: () => r6
});
var r6;
var init_error_404_styles_B3afWBaI = __esm({
  "dist/server/chunks/build/error-404-styles.B3afWBaI.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error_404_styles_1_mjs_CsHKj2IJ();
    r6 = [a4, a4];
  }
});

// dist/server/chunks/build/error-404-styles.B35uaxcJ.mjs
var error_404_styles_B35uaxcJ_exports = {};
__export(error_404_styles_B35uaxcJ_exports, {
  default: () => r7
});
var r7;
var init_error_404_styles_B35uaxcJ = __esm({
  "dist/server/chunks/build/error-404-styles.B35uaxcJ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error_404_styles_1_mjs_CsHKj2IJ();
    r7 = [a4];
  }
});

// dist/server/chunks/build/error-500-styles.BKy1KQRI.mjs
var error_500_styles_BKy1KQRI_exports = {};
__export(error_500_styles_BKy1KQRI_exports, {
  default: () => r8
});
var r8;
var init_error_500_styles_BKy1KQRI = __esm({
  "dist/server/chunks/build/error-500-styles.BKy1KQRI.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_error_500_styles_1_mjs_DP_pzRBB();
    r8 = [t4];
  }
});

// dist/server/chunks/build/index-styles-1.mjs-DKEFyeN5.mjs
var a5;
var init_index_styles_1_mjs_DKEFyeN5 = __esm({
  "dist/server/chunks/build/index-styles-1.mjs-DKEFyeN5.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a5 = ".grid[data-v-be76bbff]{display:grid;gap:1rem;grid-template-columns:1fr}@media (min-width:512px) and (max-width:1023px){.grid[data-v-be76bbff]{grid-template-columns:repeat(2,1fr)}}@media (min-width:1024px){.grid[data-v-be76bbff]{grid-template-columns:repeat(3,1fr)}}";
  }
});

// dist/server/chunks/build/index-styles.eHJtWCE6.mjs
var index_styles_eHJtWCE6_exports = {};
__export(index_styles_eHJtWCE6_exports, {
  default: () => e2
});
var e2;
var init_index_styles_eHJtWCE6 = __esm({
  "dist/server/chunks/build/index-styles.eHJtWCE6.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_styles_1_mjs_DKEFyeN5();
    e2 = [a5, a5];
  }
});

// dist/server/chunks/build/_id_-styles-1.mjs-9haFLLEU.mjs
var t5;
var init_id_styles_1_mjs_9haFLLEU = __esm({
  "dist/server/chunks/build/_id_-styles-1.mjs-9haFLLEU.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t5 = ".product-info[data-v-009f27c1]{align-items:center;display:flex;flex-direction:column;gap:1rem}.product-info h2[data-v-009f27c1]{font-size:2rem;font-weight:600;margin:0}.product-info .description[data-v-009f27c1]{color:#666;font-size:1.1rem;line-height:1.6}.product-info .price[data-v-009f27c1]{font-size:2rem;font-weight:700}.product-info p[data-v-009f27c1]{margin-block-end:0;margin-block-start:0}";
  }
});

// dist/server/chunks/build/_id_-styles.DyDn7_BQ.mjs
var id_styles_DyDn7_BQ_exports = {};
__export(id_styles_DyDn7_BQ_exports, {
  default: () => t6
});
var t6;
var init_id_styles_DyDn7_BQ = __esm({
  "dist/server/chunks/build/_id_-styles.DyDn7_BQ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_id_styles_1_mjs_9haFLLEU();
    t6 = [t5, t5];
  }
});

// dist/server/chunks/build/index-styles.PW58mq-y.mjs
var index_styles_PW58mq_y_exports = {};
__export(index_styles_PW58mq_y_exports, {
  default: () => e3
});
var e3;
var init_index_styles_PW58mq_y = __esm({
  "dist/server/chunks/build/index-styles.PW58mq-y.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_styles_1_mjs_DKEFyeN5();
    e3 = [a5];
  }
});

// dist/server/chunks/build/_id_-styles.Dns6gUKb.mjs
var id_styles_Dns6gUKb_exports = {};
__export(id_styles_Dns6gUKb_exports, {
  default: () => t7
});
var t7;
var init_id_styles_Dns6gUKb = __esm({
  "dist/server/chunks/build/_id_-styles.Dns6gUKb.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_id_styles_1_mjs_9haFLLEU();
    t7 = [t5];
  }
});

// dist/server/chunks/build/StarRating-styles-1.mjs-CcXg8Hcd.mjs
var d5;
var init_StarRating_styles_1_mjs_CcXg8Hcd = __esm({
  "dist/server/chunks/build/StarRating-styles-1.mjs-CcXg8Hcd.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    d5 = ".stars[data-v-c6de480c]{color:#ddd;font-size:1rem}.star[data-v-c6de480c]{cursor:default}.star.filled[data-v-c6de480c]{color:gold}";
  }
});

// dist/server/chunks/build/StarRating-styles.4wYIsBPC.mjs
var StarRating_styles_4wYIsBPC_exports = {};
__export(StarRating_styles_4wYIsBPC_exports, {
  default: () => t8
});
var t8;
var init_StarRating_styles_4wYIsBPC = __esm({
  "dist/server/chunks/build/StarRating-styles.4wYIsBPC.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_StarRating_styles_1_mjs_CcXg8Hcd();
    t8 = [d5, d5];
  }
});

// dist/server/chunks/build/ProductCard-styles-1.mjs-DIMNxLX_.mjs
var r9;
var init_ProductCard_styles_1_mjs_DIMNxLX = __esm({
  "dist/server/chunks/build/ProductCard-styles-1.mjs-DIMNxLX_.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    r9 = ".product-card[data-v-4f0d6ac2]{background:#fff;border-radius:8px;box-shadow:0 2px 4px #0000001a;cursor:pointer;display:flex;flex-direction:column;gap:32px;padding:1rem;transition:transform .2s}";
  }
});

// dist/server/chunks/build/ProductCard-styles.D76vVX0Q.mjs
var ProductCard_styles_D76vVX0Q_exports = {};
__export(ProductCard_styles_D76vVX0Q_exports, {
  default: () => t9
});
var t9;
var init_ProductCard_styles_D76vVX0Q = __esm({
  "dist/server/chunks/build/ProductCard-styles.D76vVX0Q.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ProductCard_styles_1_mjs_DIMNxLX();
    t9 = [r9, r9];
  }
});

// dist/server/chunks/build/StarRating-styles.BX0nSZ38.mjs
var StarRating_styles_BX0nSZ38_exports = {};
__export(StarRating_styles_BX0nSZ38_exports, {
  default: () => t10
});
var t10;
var init_StarRating_styles_BX0nSZ38 = __esm({
  "dist/server/chunks/build/StarRating-styles.BX0nSZ38.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_StarRating_styles_1_mjs_CcXg8Hcd();
    t10 = [d5];
  }
});

// dist/server/chunks/build/ProductCard-styles.DabalHQS.mjs
var ProductCard_styles_DabalHQS_exports = {};
__export(ProductCard_styles_DabalHQS_exports, {
  default: () => t11
});
var t11;
var init_ProductCard_styles_DabalHQS = __esm({
  "dist/server/chunks/build/ProductCard-styles.DabalHQS.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ProductCard_styles_1_mjs_DIMNxLX();
    t11 = [r9];
  }
});

// dist/server/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e4
});
var interopDefault, e4;
var init_styles = __esm({
  "dist/server/chunks/build/styles.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    interopDefault = /* @__PURE__ */ __name((e6) => e6.default || e6 || [], "interopDefault");
    e4 = { "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_entry_styles_D4AgHLVB(), entry_styles_D4AgHLVB_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/entry.js"), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_DTdjuo_6(), error_500_styles_DTdjuo_6_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue"), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_B3afWBaI(), error_404_styles_B3afWBaI_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue"), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=a5e695ad&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_B35uaxcJ(), error_404_styles_B35uaxcJ_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=a5e695ad&lang.css"), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=3925d347&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_BKy1KQRI(), error_500_styles_BKy1KQRI_exports)).then(interopDefault), "../../../node_modules/.pnpm/nuxt@3.17.5_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_eslint@9.22.0_jiti@2.4.2__io_nrbyak4tcuzevpuqlb62q5ps6q/node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=3925d347&lang.css"), "pages/store/catalog/index.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_eHJtWCE6(), index_styles_eHJtWCE6_exports)).then(interopDefault), "pages/store/catalog/index.vue"), "pages/store/product/[id].vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_styles_DyDn7_BQ(), id_styles_DyDn7_BQ_exports)).then(interopDefault), "pages/store/product/[id].vue"), "pages/store/catalog/index.vue?vue&type=style&index=0&scoped=be76bbff&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_styles_PW58mq_y(), index_styles_PW58mq_y_exports)).then(interopDefault), "pages/store/catalog/index.vue?vue&type=style&index=0&scoped=be76bbff&lang.css"), "pages/store/product/[id].vue?vue&type=style&index=0&scoped=009f27c1&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_styles_Dns6gUKb(), id_styles_Dns6gUKb_exports)).then(interopDefault), "pages/store/product/[id].vue?vue&type=style&index=0&scoped=009f27c1&lang.css"), "components/StarRating.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_StarRating_styles_4wYIsBPC(), StarRating_styles_4wYIsBPC_exports)).then(interopDefault), "components/StarRating.vue"), "components/ProductCard.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ProductCard_styles_D76vVX0Q(), ProductCard_styles_D76vVX0Q_exports)).then(interopDefault), "components/ProductCard.vue"), "components/StarRating.vue?vue&type=style&index=0&scoped=c6de480c&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_StarRating_styles_BX0nSZ38(), StarRating_styles_BX0nSZ38_exports)).then(interopDefault), "components/StarRating.vue?vue&type=style&index=0&scoped=c6de480c&lang.css"), "components/ProductCard.vue?vue&type=style&index=0&scoped=4f0d6ac2&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ProductCard_styles_DabalHQS(), ProductCard_styles_DabalHQS_exports)).then(interopDefault), "components/ProductCard.vue?vue&type=style&index=0&scoped=4f0d6ac2&lang.css") };
  }
});

// dist/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  a: () => shallowReactive,
  b: () => reactive,
  c: () => computed,
  d: () => defineComponent,
  e: () => ref,
  f: () => baseURL,
  g: () => ssrRenderSuspense,
  h: () => h4,
  i: () => inject,
  j: () => ssrRenderComponent,
  k: () => renderVNode,
  l: () => ssrRenderAttrs,
  m: () => ssrInterpolate,
  n: () => nextTick2,
  o: () => ssrRenderAttr,
  p: () => provide,
  q: () => ssrRenderList,
  r: () => vr,
  s: () => shallowRef,
  t: () => ssrRenderClass,
  u: () => unref,
  v: () => ssrRenderSlot,
  w: () => watch,
  x: () => useHead,
  y: () => _r,
  z: () => es2
});
function getModuleDependencies(e6, t12) {
  if (t12._dependencies[e6]) return t12._dependencies[e6];
  const n5 = t12._dependencies[e6] = { scripts: {}, styles: {}, preload: {}, prefetch: {} }, r11 = t12.manifest[e6];
  if (!r11) return n5;
  r11.file && (n5.preload[e6] = r11, (r11.isEntry || r11.sideEffects) && (n5.scripts[e6] = r11));
  for (const e7 of r11.css || []) n5.styles[e7] = n5.preload[e7] = n5.prefetch[e7] = t12.manifest[e7];
  for (const e7 of r11.assets || []) n5.preload[e7] = n5.prefetch[e7] = t12.manifest[e7];
  for (const e7 of r11.imports || []) {
    const r12 = getModuleDependencies(e7, t12);
    Object.assign(n5.styles, r12.styles), Object.assign(n5.preload, r12.preload), Object.assign(n5.prefetch, r12.prefetch);
  }
  const s6 = {};
  for (const e7 in n5.preload) {
    const t13 = n5.preload[e7];
    t13.preload && (s6[e7] = t13);
  }
  return n5.preload = s6, n5;
}
function getRequestDependencies(e6, t12) {
  if (e6._requestDependencies) return e6._requestDependencies;
  const n5 = function(e7, t13) {
    const n6 = Array.from(e7).sort().join(",");
    if (t13._dependencySets[n6]) return t13._dependencySets[n6];
    const r11 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n7 of e7) {
      const e8 = getModuleDependencies(n7, t13);
      Object.assign(r11.scripts, e8.scripts), Object.assign(r11.styles, e8.styles), Object.assign(r11.preload, e8.preload), Object.assign(r11.prefetch, e8.prefetch);
      for (const e9 of t13.manifest[n7]?.dynamicImports || []) {
        const n8 = getModuleDependencies(e9, t13);
        Object.assign(r11.prefetch, n8.scripts), Object.assign(r11.prefetch, n8.styles), Object.assign(r11.prefetch, n8.preload);
      }
    }
    const s6 = {};
    for (const e8 in r11.prefetch) {
      const t14 = r11.prefetch[e8];
      t14.prefetch && (s6[e8] = t14);
    }
    r11.prefetch = s6;
    for (const e8 in r11.preload) delete r11.prefetch[e8];
    for (const e8 in r11.styles) delete r11.preload[e8], delete r11.prefetch[e8];
    return t13._dependencySets[n6] = r11, r11;
  }(new Set(Array.from([...t12._entrypoints, ...e6.modules || e6._registeredComponents || []])), t12);
  return e6._requestDependencies = n5, n5;
}
function renderStyles(e6, t12) {
  const { styles: n5 } = getRequestDependencies(e6, t12);
  return Object.values(n5).map((e7) => renderLinkToString({ rel: "stylesheet", href: t12.buildAssetsURL(e7.file), crossorigin: "" })).join("");
}
function getResources(e6, t12) {
  return [...getPreloadLinks(e6, t12), ...getPrefetchLinks(e6, t12)];
}
function renderResourceHints(e6, t12) {
  return getResources(e6, t12).map(renderLinkToString).join("");
}
function renderResourceHeaders(e6, t12) {
  return { link: getResources(e6, t12).map(renderLinkToHeader).join(", ") };
}
function getPreloadLinks(e6, t12) {
  const { preload: n5 } = getRequestDependencies(e6, t12);
  return Object.values(n5).map((e7) => ({ rel: e7.module ? "modulepreload" : "preload", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "style" === e7.resourceType || "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t12.buildAssetsURL(e7.file) }));
}
function getPrefetchLinks(e6, t12) {
  const { prefetch: n5 } = getRequestDependencies(e6, t12);
  return Object.values(n5).map((e7) => ({ rel: "prefetch", as: e7.resourceType, type: e7.mimeType ?? null, crossorigin: "style" === e7.resourceType || "font" === e7.resourceType || "script" === e7.resourceType || e7.module ? "" : null, href: t12.buildAssetsURL(e7.file) }));
}
function renderScripts(e6, t12) {
  const { scripts: n5 } = getRequestDependencies(e6, t12);
  return Object.values(n5).map((e7) => {
    return n6 = { type: e7.module ? "module" : null, src: t12.buildAssetsURL(e7.file), defer: e7.module ? null : "", crossorigin: "" }, `<script${Object.entries(n6).map(([e8, t13]) => null === t13 ? "" : t13 ? ` ${e8}="${t13}"` : " " + e8).join("")}><\/script>`;
    var n6;
  }).join("");
}
function createRenderer$1(t12, n5) {
  const r11 = function({ manifest: t13, buildAssetsURL: n6 }) {
    const r12 = { buildAssetsURL: n6 || withLeadingSlash, manifest: void 0, updateManifest, _dependencies: void 0, _dependencySets: void 0, _entrypoints: void 0 };
    function updateManifest(e6) {
      const t14 = Object.entries(e6);
      r12.manifest = e6, r12._dependencies = {}, r12._dependencySets = {}, r12._entrypoints = t14.filter((e7) => e7[1].isEntry).map(([e7]) => e7);
    }
    __name(updateManifest, "updateManifest");
    return updateManifest(t13), r12;
  }(n5);
  return { rendererContext: r11, async renderToString(e6) {
    e6._registeredComponents = e6._registeredComponents || /* @__PURE__ */ new Set();
    const s6 = await Promise.resolve(t12).then((e7) => "default" in e7 ? e7.default : e7), o6 = await s6(e6), wrap = /* @__PURE__ */ __name((t13) => () => t13(e6, r11), "wrap");
    return { html: await n5.renderToString(o6, e6), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function renderLinkToString(e6) {
  return `<link${Object.entries(e6).map(([e7, t12]) => null === t12 ? "" : t12 ? ` ${e7}="${t12}"` : " " + e7).join("")}>`;
}
function renderLinkToHeader(e6) {
  return `<${e6.href}>${Object.entries(e6).map(([e7, t12]) => "href" === e7 || null === t12 ? "" : t12 ? `; ${e7}="${t12}"` : `; ${e7}`).join("")}`;
}
function dedupeKey(e6) {
  const { props: t12, tag: n5 } = e6;
  if (fe2.has(n5)) return n5;
  if ("link" === n5 && "canonical" === t12.rel) return "canonical";
  if (t12.charset) return "charset";
  if ("meta" === e6.tag) {
    for (const r11 of ye) if (void 0 !== t12[r11]) {
      const s6 = t12[r11], o6 = s6.includes(":"), i6 = ve.has(s6);
      return `${n5}:${s6}${!(o6 || i6) && e6.key ? `:key:${e6.key}` : ""}`;
    }
  }
  if (e6.key) return `${n5}:key:${e6.key}`;
  if (t12.id) return `${n5}:id:${t12.id}`;
  if (pe2.has(n5)) {
    const t13 = e6.textContent || e6.innerHTML;
    if (t13) return `${n5}:content:${t13}`;
  }
}
function walkResolver(e6, t12, n5) {
  let r11;
  if ("function" === typeof e6 && (n5 && ("titleTemplate" === n5 || "o" === n5[0] && "n" === n5[1]) || (e6 = e6())), t12 && (r11 = t12(n5, e6)), Array.isArray(r11)) return r11.map((e7) => walkResolver(e7, t12));
  if (r11?.constructor === Object) {
    const e7 = {};
    for (const n6 of Object.keys(r11)) e7[n6] = walkResolver(r11[n6], t12, n6);
    return e7;
  }
  return r11;
}
function normalizeProps2(e6, t12) {
  return e6.props = e6.props || {}, t12 ? (Object.entries(t12).forEach(([n5, r11]) => {
    if (null === r11) return void (e6.props[n5] = null);
    if ("class" === n5 || "style" === n5) return void (e6.props[n5] = function(e7, t13) {
      const n6 = "style" === e7 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
      function processValue(t14) {
        const r12 = t14.trim();
        if (r12) if ("style" === e7) {
          const [e8, ...t15] = r12.split(":").map((e9) => e9.trim());
          e8 && t15.length && n6.set(e8, t15.join(":"));
        } else r12.split(" ").filter(Boolean).forEach((e8) => n6.add(e8));
      }
      __name(processValue, "processValue");
      return "string" == typeof t13 ? "style" === e7 ? t13.split(";").forEach(processValue) : processValue(t13) : Array.isArray(t13) ? t13.forEach((e8) => processValue(e8)) : t13 && "object" == typeof t13 && Object.entries(t13).forEach(([t14, r12]) => {
        r12 && "false" !== r12 && ("style" === e7 ? n6.set(t14.trim(), r12) : processValue(t14));
      }), n6;
    }(n5, r11));
    if (he.has(n5)) {
      if (["textContent", "innerHTML"].includes(n5) && "object" == typeof r11) {
        let s7 = t12.type;
        if (t12.type || (s7 = "application/json"), !s7?.endsWith("json") && "speculationrules" !== s7) return;
        t12.type = s7, e6.props.type = s7, e6[n5] = JSON.stringify(r11);
      } else e6[n5] = r11;
      return;
    }
    const s6 = String(r11), o6 = n5.startsWith("data-");
    "true" === s6 || "" === s6 ? e6.props[n5] = !o6 || s6 : !r11 && o6 && "false" === s6 ? e6.props[n5] = "false" : void 0 !== r11 && (e6.props[n5] = r11);
  }), e6) : e6;
}
function normalizeTag(e6, t12) {
  const n5 = normalizeProps2({ tag: e6, props: {} }, "object" == typeof t12 && "function" != typeof t12 ? t12 : { ["script" === e6 || "noscript" === e6 || "style" === e6 ? "innerHTML" : "textContent"]: t12 });
  return n5.key && ue.has(n5.tag) && (n5.props["data-hid"] = n5._h = n5.key), "script" === n5.tag && "object" == typeof n5.innerHTML && (n5.innerHTML = JSON.stringify(n5.innerHTML), n5.props.type = n5.props.type || "application/json"), Array.isArray(n5.props.content) ? n5.props.content.map((e7) => ({ ...n5, props: { ...n5.props, content: e7 } })) : n5;
}
function normalizeEntryToTags(e6, t12) {
  if (!e6) return [];
  "function" == typeof e6 && (e6 = e6());
  const resolvers = /* @__PURE__ */ __name((e7, n6) => {
    for (let r11 = 0; r11 < t12.length; r11++) n6 = t12[r11](e7, n6);
    return n6;
  }, "resolvers");
  e6 = resolvers(void 0, e6);
  const n5 = [];
  return e6 = walkResolver(e6, resolvers), Object.entries(e6 || {}).forEach(([e7, t13]) => {
    if (void 0 !== t13) for (const r11 of Array.isArray(t13) ? t13 : [t13]) n5.push(normalizeTag(e7, r11));
  }), n5.flat();
}
function tagWeight(e6, t12) {
  if ("number" == typeof t12.tagPriority) return t12.tagPriority;
  let n5 = 100;
  const r11 = be[t12.tagPriority] || 0, s6 = e6.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : Ce;
  if (t12.tag in _e) n5 = _e[t12.tag];
  else if ("meta" === t12.tag) {
    const e7 = "content-security-policy" === t12.props["http-equiv"] ? "content-security-policy" : t12.props.charset ? "charset" : "viewport" === t12.props.name ? "viewport" : null;
    e7 && (n5 = Ce.meta[e7]);
  } else "link" === t12.tag && t12.props.rel ? n5 = s6.link[t12.props.rel] : "script" === t12.tag ? isTruthy(t12.props.async) ? n5 = s6.script.async : !t12.props.src || isTruthy(t12.props.defer) || isTruthy(t12.props.async) || "module" === t12.props.type || t12.props.type?.endsWith("json") ? isTruthy(t12.props.defer) && t12.props.src && !isTruthy(t12.props.async) && (n5 = s6.script.defer) : n5 = s6.script.sync : "style" === t12.tag && (n5 = t12.innerHTML && ke.test(t12.innerHTML) ? s6.style.imported : s6.style.sync);
  return (n5 || 100) + r11;
}
function registerPlugin(e6, t12) {
  const n5 = "function" == typeof t12 ? t12(e6) : t12, r11 = n5.key || String(e6.plugins.size + 1);
  e6.plugins.get(r11) || (e6.plugins.set(r11, n5), e6.hooks.addHooks(n5.hooks || {}));
}
function createUnhead(e6 = {}) {
  const n5 = createHooks();
  n5.addHooks(e6.hooks || {});
  const r11 = !e6.document, s6 = /* @__PURE__ */ new Map(), o6 = [], i6 = { _entryCount: 1, plugins: /* @__PURE__ */ new Map(), dirty: false, resolvedOptions: e6, hooks: n5, ssr: r11, entries: s6, headEntries: /* @__PURE__ */ __name(() => [...s6.values()], "headEntries"), use: /* @__PURE__ */ __name((e7) => registerPlugin(i6, e7), "use"), push(e7, t12) {
    const a7 = { ...t12 || {} };
    delete a7.head;
    const l5 = a7._index ?? i6._entryCount++, c4 = { _i: l5, input: e7, options: a7 }, u4 = { _poll(e8 = false) {
      i6.dirty = true, !e8 && o6.push(l5), n5.callHook("entries:updated", i6);
    }, dispose() {
      s6.delete(l5) && u4._poll(true);
    }, patch(e8) {
      (!a7.mode || "server" === a7.mode && r11 || "client" === a7.mode && !r11) && (c4.input = e8, s6.set(l5, c4), u4._poll());
    } };
    return u4.patch(e7), u4;
  }, async resolveTags() {
    const t12 = { tagMap: /* @__PURE__ */ new Map(), tags: [], entries: [...i6.entries.values()] };
    for (await n5.callHook("entries:resolve", t12); o6.length; ) {
      const t13 = o6.shift(), r13 = s6.get(t13);
      if (r13) {
        const t14 = { tags: normalizeEntryToTags(r13.input, e6.propResolvers || []).map((e7) => Object.assign(e7, r13.options)), entry: r13 };
        await n5.callHook("entries:normalize", t14), r13._tags = t14.tags.map((e7, t15) => (e7._w = tagWeight(i6, e7), e7._p = (r13._i << 10) + t15, e7._d = dedupeKey(e7), e7));
      }
    }
    let r12 = false;
    t12.entries.flatMap((e7) => (e7._tags || []).map((e8) => ({ ...e8, props: { ...e8.props } }))).sort(sortTags).reduce((e7, t13) => {
      const n6 = String(t13._d || t13._p);
      if (!e7.has(n6)) return e7.set(n6, t13);
      const s7 = e7.get(n6);
      if ("merge" === (t13?.tagDuplicateStrategy || (ge.has(t13.tag) ? "merge" : null) || (t13.key && t13.key === s7.key ? "merge" : null))) {
        const r13 = { ...s7.props };
        Object.entries(t13.props).forEach(([e8, t14]) => r13[e8] = "style" === e8 ? new Map([...s7.props.style || /* @__PURE__ */ new Map(), ...t14]) : "class" === e8 ? /* @__PURE__ */ new Set([...s7.props.class || /* @__PURE__ */ new Set(), ...t14]) : t14), e7.set(n6, { ...t13, props: r13 });
      } else t13._p >> 10 == s7._p >> 10 && "meta" === t13.tag && function(e8) {
        const t14 = e8.split(":");
        return !!t14.length && me.has(t14[1]);
      }(n6) ? (e7.set(n6, Object.assign([...Array.isArray(s7) ? s7 : [s7], t13], t13)), r12 = true) : (t13._w === s7._w ? t13._p > s7._p : t13?._w < s7?._w) && e7.set(n6, t13);
      return e7;
    }, t12.tagMap);
    const a7 = t12.tagMap.get("title"), l5 = t12.tagMap.get("titleTemplate");
    if (i6._title = a7?.textContent, l5) {
      const e7 = l5?.textContent;
      if (i6._titleTemplate = e7, e7) {
        let n6 = "function" == typeof e7 ? e7(a7?.textContent) : e7;
        "string" != typeof n6 || i6.plugins.has("template-params") || (n6 = n6.replace("%s", a7?.textContent || "")), a7 ? null === n6 ? t12.tagMap.delete("title") : t12.tagMap.set("title", { ...a7, textContent: n6 }) : (l5.tag = "title", l5.textContent = n6);
      }
    }
    t12.tags = Array.from(t12.tagMap.values()), r12 && (t12.tags = t12.tags.flat().sort(sortTags)), await n5.callHook("tags:beforeResolve", t12), await n5.callHook("tags:resolve", t12), await n5.callHook("tags:afterResolve", t12);
    const c4 = [];
    for (const e7 of t12.tags) {
      const { innerHTML: t13, tag: n6, props: r13 } = e7;
      if (de2.has(n6) && ((0 !== Object.keys(r13).length || e7.innerHTML || e7.textContent) && ("meta" !== n6 || r13.content || r13["http-equiv"] || r13.charset))) {
        if ("script" === n6 && t13) {
          if (r13.type?.endsWith("json")) {
            const n7 = "string" == typeof t13 ? t13 : JSON.stringify(t13);
            e7.innerHTML = n7.replace(/</g, "\\u003C");
          } else "string" == typeof t13 && (e7.innerHTML = t13.replace(new RegExp(`</${n6}`, "g"), `<\\/${n6}`));
          e7._d = dedupeKey(e7);
        }
        c4.push(e7);
      }
    }
    return c4;
  } };
  return (e6?.plugins || []).forEach((e7) => registerPlugin(i6, e7)), i6.hooks.callHook("init", i6), e6.init?.forEach((e7) => e7 && i6.push(e7)), i6;
}
function encodeAttribute(e6) {
  return String(e6).replace(/"/g, "&quot;");
}
function propsToString(e6) {
  let t12 = "";
  for (const n5 in e6) {
    if (!Object.hasOwn(e6, n5)) continue;
    let r11 = e6[n5];
    "class" !== n5 && "style" !== n5 || "string" == typeof r11 || (r11 = "class" === n5 ? Array.from(r11).join(" ") : Array.from(r11).map(([e7, t13]) => `${e7}:${t13}`).join(";")), false !== r11 && null !== r11 && (t12 += true === r11 ? ` ${n5}` : ` ${n5}="${encodeAttribute(r11)}"`);
  }
  return t12;
}
function tagToString(e6) {
  const t12 = propsToString(e6.props), n5 = `<${e6.tag}${t12}>`;
  if (!pe2.has(e6.tag)) return ce2.has(e6.tag) ? n5 : `${n5}</${e6.tag}>`;
  let r11 = String(e6.textContent || e6.innerHTML || "");
  return r11 = "title" === e6.tag ? r11.replace(/[&<>"'/]/g, (e7) => {
    switch (e7) {
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
        return e7;
    }
  }) : r11.replace(new RegExp(`</${e6.tag}`, "gi"), `<\\/${e6.tag}`), ce2.has(e6.tag) ? n5 : `${n5}${r11}</${e6.tag}>`;
}
async function renderSSRHead(e6, t12) {
  const n5 = { shouldRender: true };
  if (await e6.hooks.callHook("ssr:beforeRender", n5), !n5.shouldRender) return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r11 = { tags: t12?.resolvedTags || await e6.resolveTags() };
  await e6.hooks.callHook("ssr:render", r11);
  const s6 = function(e7) {
    const t13 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } };
    for (const n6 of e7) {
      if ("htmlAttrs" === n6.tag || "bodyAttrs" === n6.tag) {
        Object.assign(t13[n6.tag], n6.props);
        continue;
      }
      const e8 = tagToString(n6), r12 = n6.tagPosition || "head";
      t13.tags[r12] += t13.tags[r12] ? `
${e8}` : e8;
    }
    return { headTags: t13.tags.head, bodyTags: t13.tags.bodyClose, bodyTagsOpen: t13.tags.bodyOpen, htmlAttrs: propsToString(t13.htmlAttrs), bodyAttrs: propsToString(t13.bodyAttrs) };
  }(r11.tags), o6 = { tags: r11.tags, html: s6 };
  return await e6.hooks.callHook("ssr:rendered", o6), o6.html;
}
function defineHeadPlugin(e6) {
  return e6;
}
function processTemplateParams(e6, t12, n5, r11 = false) {
  if ("string" != typeof e6 || !e6.includes("%")) return e6;
  let s6 = e6;
  try {
    s6 = decodeURI(e6);
  } catch {
  }
  const o6 = s6.match(/%\w+(?:\.\w+)?/g);
  if (!o6) return e6;
  const i6 = e6.includes(Se);
  return e6 = e6.replace(/%\w+(?:\.\w+)?/g, (e7) => {
    if (e7 === Se || !o6.includes(e7)) return e7;
    const n6 = function(e8, t13, n7 = false) {
      let r12;
      if ("s" === t13 || "pageTitle" === t13) r12 = e8.pageTitle;
      else if (t13.includes(".")) {
        const n8 = t13.indexOf(".");
        r12 = e8[t13.substring(0, n8)]?.[t13.substring(n8 + 1)];
      } else r12 = e8[t13];
      if (void 0 !== r12) return n7 ? (r12 || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r12 || "";
    }(t12, e7.slice(1), r11);
    return void 0 !== n6 ? n6 : e7;
  }).trim(), i6 && (e6.endsWith(Se) && (e6 = e6.slice(0, -10)), e6.startsWith(Se) && (e6 = e6.slice(10)), e6 = e6.replace(we, n5 || "").trim()), e6;
}
async function walkPromises(e6) {
  if ("function" === typeof e6) return e6;
  if (e6 instanceof Promise) return await e6;
  if (Array.isArray(e6)) return await Promise.all(e6.map((e7) => walkPromises(e7)));
  if (e6?.constructor === Object) {
    const t12 = {};
    for (const n5 of Object.keys(e6)) t12[n5] = await walkPromises(e6[n5]);
    return t12;
  }
  return e6;
}
function getCurrentScope() {
  return Oe;
}
function batch(e6, t12 = false) {
  if (e6.flags |= 8, t12) return e6.next = Ve, void (Ve = e6);
  e6.next = He, He = e6;
}
function startBatch() {
  Me++;
}
function endBatch() {
  if (--Me > 0) return;
  if (Ve) {
    let e7 = Ve;
    for (Ve = void 0; e7; ) {
      const t12 = e7.next;
      e7.next = void 0, e7.flags &= -9, e7 = t12;
    }
  }
  let e6;
  for (; He; ) {
    let t12 = He;
    for (He = void 0; t12; ) {
      const n5 = t12.next;
      if (t12.next = void 0, t12.flags &= -9, 1 & t12.flags) try {
        t12.trigger();
      } catch (t13) {
        e6 || (e6 = t13);
      }
      t12 = n5;
    }
  }
  if (e6) throw e6;
}
function prepareDeps(e6) {
  for (let t12 = e6.deps; t12; t12 = t12.nextDep) t12.version = -1, t12.prevActiveLink = t12.dep.activeLink, t12.dep.activeLink = t12;
}
function cleanupDeps(e6) {
  let t12, n5 = e6.depsTail, r11 = n5;
  for (; r11; ) {
    const e7 = r11.prevDep;
    -1 === r11.version ? (r11 === n5 && (n5 = e7), removeSub(r11), removeDep(r11)) : t12 = r11, r11.dep.activeLink = r11.prevActiveLink, r11.prevActiveLink = void 0, r11 = e7;
  }
  e6.deps = t12, e6.depsTail = n5;
}
function isDirty(e6) {
  for (let t12 = e6.deps; t12; t12 = t12.nextDep) if (t12.dep.version !== t12.version || t12.dep.computed && (refreshComputed(t12.dep.computed) || t12.dep.version !== t12.version)) return true;
  return !!e6._dirty;
}
function refreshComputed(e6) {
  if (4 & e6.flags && !(16 & e6.flags)) return;
  if (e6.flags &= -17, e6.globalVersion === Le) return;
  if (e6.globalVersion = Le, !e6.isSSR && 128 & e6.flags && (!e6.deps && !e6._dirty || !isDirty(e6))) return;
  e6.flags |= 2;
  const t12 = e6.dep, n5 = Ne, r11 = je;
  Ne = e6, je = true;
  try {
    prepareDeps(e6);
    const n6 = e6.fn(e6._value);
    (0 === t12.version || hasChanged(n6, e6._value)) && (e6.flags |= 128, e6._value = n6, t12.version++);
  } catch (e7) {
    throw t12.version++, e7;
  } finally {
    Ne = n5, je = r11, cleanupDeps(e6), e6.flags &= -3;
  }
}
function removeSub(e6, t12 = false) {
  const { dep: n5, prevSub: r11, nextSub: s6 } = e6;
  if (r11 && (r11.nextSub = s6, e6.prevSub = void 0), s6 && (s6.prevSub = r11, e6.nextSub = void 0), n5.subs === e6 && (n5.subs = r11, !r11 && n5.computed)) {
    n5.computed.flags &= -5;
    for (let e7 = n5.computed.deps; e7; e7 = e7.nextDep) removeSub(e7, true);
  }
  t12 || --n5.sc || !n5.map || n5.map.delete(n5.key);
}
function removeDep(e6) {
  const { prevDep: t12, nextDep: n5 } = e6;
  t12 && (t12.nextDep = n5, e6.prevDep = void 0), n5 && (n5.prevDep = t12, e6.nextDep = void 0);
}
function pauseTracking() {
  Ie.push(je), je = false;
}
function resetTracking() {
  const e6 = Ie.pop();
  je = void 0 === e6 || e6;
}
function cleanupEffect(e6) {
  const { cleanup: t12 } = e6;
  if (e6.cleanup = void 0, t12) {
    const e7 = Ne;
    Ne = void 0;
    try {
      t12();
    } finally {
      Ne = e7;
    }
  }
}
function addSub(e6) {
  if (e6.dep.sc++, 4 & e6.sub.flags) {
    const t12 = e6.dep.computed;
    if (t12 && !e6.dep.subs) {
      t12.flags |= 20;
      for (let e7 = t12.deps; e7; e7 = e7.nextDep) addSub(e7);
    }
    const n5 = e6.dep.subs;
    n5 !== e6 && (e6.prevSub = n5, n5 && (n5.nextSub = e6)), e6.dep.subs = e6;
  }
}
function track(e6, t12, n5) {
  if (je && Ne) {
    let t13 = De.get(e6);
    t13 || De.set(e6, t13 = /* @__PURE__ */ new Map());
    let r11 = t13.get(n5);
    r11 || (t13.set(n5, r11 = new Dep()), r11.map = t13, r11.key = n5), r11.track();
  }
}
function trigger(e6, t12, n5, r11, s6, o6) {
  const i6 = De.get(e6);
  if (!i6) return void Le++;
  const run = /* @__PURE__ */ __name((e7) => {
    e7 && e7.trigger();
  }, "run");
  if (startBatch(), "clear" === t12) i6.forEach(run);
  else {
    const s7 = i(e6), o7 = s7 && isIntegerKey(n5);
    if (s7 && "length" === n5) {
      const e7 = Number(r11);
      i6.forEach((t13, n6) => {
        ("length" === n6 || n6 === Ue || !isSymbol2(n6) && n6 >= e7) && run(t13);
      });
    } else switch ((void 0 !== n5 || i6.has(void 0)) && run(i6.get(n5)), o7 && run(i6.get(Ue)), t12) {
      case "add":
        s7 ? o7 && run(i6.get("length")) : (run(i6.get(Be)), isMap(e6) && run(i6.get(Fe)));
        break;
      case "delete":
        s7 || (run(i6.get(Be)), isMap(e6) && run(i6.get(Fe)));
        break;
      case "set":
        isMap(e6) && run(i6.get(Be));
    }
  }
  endBatch();
}
function reactiveReadArray(e6) {
  const t12 = toRaw(e6);
  return t12 === e6 ? t12 : (track(t12, 0, Ue), isShallow(e6) ? t12 : t12.map(toReactive));
}
function shallowReadArray(e6) {
  return track(e6 = toRaw(e6), 0, Ue), e6;
}
function iterator(e6, t12, n5) {
  const r11 = shallowReadArray(e6), s6 = r11[t12]();
  return r11 === e6 || isShallow(e6) || (s6._next = s6.next, s6.next = () => {
    const e7 = s6._next();
    return e7.value && (e7.value = n5(e7.value)), e7;
  }), s6;
}
function apply(e6, t12, n5, r11, s6, o6) {
  const i6 = shallowReadArray(e6), a7 = i6 !== e6 && !isShallow(e6), l5 = i6[t12];
  if (l5 !== ze[t12]) {
    const t13 = l5.apply(e6, o6);
    return a7 ? toReactive(t13) : t13;
  }
  let c4 = n5;
  i6 !== e6 && (a7 ? c4 = /* @__PURE__ */ __name(function(t13, r12) {
    return n5.call(this, toReactive(t13), r12, e6);
  }, "c") : n5.length > 2 && (c4 = /* @__PURE__ */ __name(function(t13, r12) {
    return n5.call(this, t13, r12, e6);
  }, "c")));
  const u4 = l5.call(i6, c4, r11);
  return a7 && s6 ? s6(u4) : u4;
}
function reduce(e6, t12, n5, r11) {
  const s6 = shallowReadArray(e6);
  let o6 = n5;
  return s6 !== e6 && (isShallow(e6) ? n5.length > 3 && (o6 = /* @__PURE__ */ __name(function(t13, r12, s7) {
    return n5.call(this, t13, r12, s7, e6);
  }, "o")) : o6 = /* @__PURE__ */ __name(function(t13, r12, s7) {
    return n5.call(this, t13, toReactive(r12), s7, e6);
  }, "o")), s6[t12](o6, ...r11);
}
function searchProxy(e6, t12, n5) {
  const r11 = toRaw(e6);
  track(r11, 0, Ue);
  const s6 = r11[t12](...n5);
  return -1 !== s6 && false !== s6 || !isProxy(n5[0]) ? s6 : (n5[0] = toRaw(n5[0]), r11[t12](...n5));
}
function noTracking(e6, t12, n5 = []) {
  pauseTracking(), startBatch();
  const r11 = toRaw(e6)[t12].apply(e6, n5);
  return endBatch(), resetTracking(), r11;
}
function hasOwnProperty(e6) {
  isSymbol2(e6) || (e6 = String(e6));
  const t12 = toRaw(this);
  return track(t12, 0, e6), t12.hasOwnProperty(e6);
}
function createReadonlyMethod(e6) {
  return function(...t12) {
    return "delete" !== e6 && ("clear" === e6 ? void 0 : this);
  };
}
function createInstrumentations(e6, t12) {
  const n5 = { get(n6) {
    const r11 = this.__v_raw, s6 = toRaw(r11), o6 = toRaw(n6);
    e6 || (hasChanged(n6, o6) && track(s6, 0, n6), track(s6, 0, o6));
    const { has: i6 } = getProto(s6), a7 = t12 ? toShallow : e6 ? toReadonly : toReactive;
    return i6.call(s6, n6) ? a7(r11.get(n6)) : i6.call(s6, o6) ? a7(r11.get(o6)) : void (r11 !== s6 && r11.get(n6));
  }, get size() {
    const t13 = this.__v_raw;
    return !e6 && track(toRaw(t13), 0, Be), Reflect.get(t13, "size", t13);
  }, has(t13) {
    const n6 = this.__v_raw, r11 = toRaw(n6), s6 = toRaw(t13);
    return e6 || (hasChanged(t13, s6) && track(r11, 0, t13), track(r11, 0, s6)), t13 === s6 ? n6.has(t13) : n6.has(t13) || n6.has(s6);
  }, forEach(n6, r11) {
    const s6 = this, o6 = s6.__v_raw, i6 = toRaw(o6), a7 = t12 ? toShallow : e6 ? toReadonly : toReactive;
    return !e6 && track(i6, 0, Be), o6.forEach((e7, t13) => n6.call(r11, a7(e7), a7(t13), s6));
  } };
  n(n5, e6 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e7) {
    t12 || isShallow(e7) || isReadonly(e7) || (e7 = toRaw(e7));
    const n6 = toRaw(this);
    return getProto(n6).has.call(n6, e7) || (n6.add(e7), trigger(n6, "add", e7, e7)), this;
  }, set(e7, n6) {
    t12 || isShallow(n6) || isReadonly(n6) || (n6 = toRaw(n6));
    const r11 = toRaw(this), { has: s6, get: o6 } = getProto(r11);
    let i6 = s6.call(r11, e7);
    i6 || (e7 = toRaw(e7), i6 = s6.call(r11, e7));
    const a7 = o6.call(r11, e7);
    return r11.set(e7, n6), i6 ? hasChanged(n6, a7) && trigger(r11, "set", e7, n6) : trigger(r11, "add", e7, n6), this;
  }, delete(e7) {
    const t13 = toRaw(this), { has: n6, get: r11 } = getProto(t13);
    let s6 = n6.call(t13, e7);
    s6 || (e7 = toRaw(e7), s6 = n6.call(t13, e7)), r11 && r11.call(t13, e7);
    const o6 = t13.delete(e7);
    return s6 && trigger(t13, "delete", e7, void 0), o6;
  }, clear() {
    const e7 = toRaw(this), t13 = 0 !== e7.size, n6 = e7.clear();
    return t13 && trigger(e7, "clear", void 0, void 0), n6;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((r11) => {
    n5[r11] = /* @__PURE__ */ function(e7, t13, n6) {
      return function(...r12) {
        const s6 = this.__v_raw, o6 = toRaw(s6), i6 = isMap(o6), a7 = "entries" === e7 || e7 === Symbol.iterator && i6, l5 = "keys" === e7 && i6, c4 = s6[e7](...r12), u4 = n6 ? toShallow : t13 ? toReadonly : toReactive;
        return !t13 && track(o6, 0, l5 ? Fe : Be), { next() {
          const { value: e8, done: t14 } = c4.next();
          return t14 ? { value: e8, done: t14 } : { value: a7 ? [u4(e8[0]), u4(e8[1])] : u4(e8), done: t14 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    }(r11, e6, t12);
  }), n5;
}
function createInstrumentationGetter(e6, t12) {
  const n5 = createInstrumentations(e6, t12);
  return (t13, r11, s6) => "__v_isReactive" === r11 ? !e6 : "__v_isReadonly" === r11 ? e6 : "__v_raw" === r11 ? t13 : Reflect.get(hasOwn(n5, r11) && r11 in t13 ? n5 : t13, r11, s6);
}
function reactive(e6) {
  return isReadonly(e6) ? e6 : createReactiveObject(e6, false, Je2, Ye, nt);
}
function shallowReactive(e6) {
  return createReactiveObject(e6, false, Ze, Qe, rt);
}
function readonly(e6) {
  return createReactiveObject(e6, true, Ge, et, st);
}
function shallowReadonly(e6) {
  return createReactiveObject(e6, true, Xe, tt, ot);
}
function createReactiveObject(e6, t12, n5, r11, s6) {
  if (!isObject2(e6)) return e6;
  if (e6.__v_raw && (!t12 || !e6.__v_isReactive)) return e6;
  const o6 = (i6 = e6).__v_skip || !Object.isExtensible(i6) ? 0 : function(e7) {
    switch (e7) {
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
  }(toRawType(i6));
  var i6;
  if (0 === o6) return e6;
  const a7 = s6.get(e6);
  if (a7) return a7;
  const l5 = new Proxy(e6, 2 === o6 ? r11 : n5);
  return s6.set(e6, l5), l5;
}
function isReactive(e6) {
  return isReadonly(e6) ? isReactive(e6.__v_raw) : !(!e6 || !e6.__v_isReactive);
}
function isReadonly(e6) {
  return !(!e6 || !e6.__v_isReadonly);
}
function isShallow(e6) {
  return !(!e6 || !e6.__v_isShallow);
}
function isProxy(e6) {
  return !!e6 && !!e6.__v_raw;
}
function toRaw(e6) {
  const t12 = e6 && e6.__v_raw;
  return t12 ? toRaw(t12) : e6;
}
function markRaw(e6) {
  return !hasOwn(e6, "__v_skip") && Object.isExtensible(e6) && def(e6, "__v_skip", true), e6;
}
function isRef2(e6) {
  return !!e6 && true === e6.__v_isRef;
}
function ref(e6) {
  return createRef(e6, false);
}
function shallowRef(e6) {
  return createRef(e6, true);
}
function createRef(e6, t12) {
  return isRef2(e6) ? e6 : new RefImpl(e6, t12);
}
function unref(e6) {
  return isRef2(e6) ? e6.value : e6;
}
function toValue(e6) {
  return isFunction2(e6) ? e6() : unref(e6);
}
function proxyRefs(e6) {
  return isReactive(e6) ? e6 : new Proxy(e6, it);
}
function customRef(e6) {
  return new CustomRefImpl(e6);
}
function propertyToRef(e6, t12, n5) {
  const r11 = e6[t12];
  return isRef2(r11) ? r11 : new ObjectRefImpl(e6, t12, n5);
}
function onWatcherCleanup(e6, t12 = false, n5 = ct) {
  if (n5) {
    let t13 = lt.get(n5);
    t13 || lt.set(n5, t13 = []), t13.push(e6);
  }
}
function traverse(e6, t12 = 1 / 0, n5) {
  if (t12 <= 0 || !isObject2(e6) || e6.__v_skip) return e6;
  if ((n5 = n5 || /* @__PURE__ */ new Set()).has(e6)) return e6;
  if (n5.add(e6), t12--, isRef2(e6)) traverse(e6.value, t12, n5);
  else if (i(e6)) for (let r11 = 0; r11 < e6.length; r11++) traverse(e6[r11], t12, n5);
  else if (isSet(e6) || isMap(e6)) e6.forEach((e7) => {
    traverse(e7, t12, n5);
  });
  else if (isPlainObject(e6)) {
    for (const r11 in e6) traverse(e6[r11], t12, n5);
    for (const r11 of Object.getOwnPropertySymbols(e6)) Object.prototype.propertyIsEnumerable.call(e6, r11) && traverse(e6[r11], t12, n5);
  }
  return e6;
}
function callWithErrorHandling(e6, t12, n5, r11) {
  try {
    return r11 ? e6(...r11) : e6();
  } catch (e7) {
    handleError(e7, t12, n5);
  }
}
function callWithAsyncErrorHandling(e6, t12, n5, r11) {
  if (isFunction2(e6)) {
    const s6 = callWithErrorHandling(e6, t12, n5, r11);
    return s6 && isPromise(s6) && s6.catch((e7) => {
      handleError(e7, t12, n5);
    }), s6;
  }
  if (i(e6)) {
    const s6 = [];
    for (let o6 = 0; o6 < e6.length; o6++) s6.push(callWithAsyncErrorHandling(e6[o6], t12, n5, r11));
    return s6;
  }
}
function handleError(e6, t12, n5, r11 = true) {
  t12 && t12.vnode;
  const { errorHandler: s6, throwUnhandledErrorInProduction: o6 } = t12 && t12.appContext.config || t;
  if (t12) {
    let r12 = t12.parent;
    const o7 = t12.proxy, i6 = `https://vuejs.org/error-reference/#runtime-${n5}`;
    for (; r12; ) {
      const t13 = r12.ec;
      if (t13) {
        for (let n6 = 0; n6 < t13.length; n6++) if (false === t13[n6](e6, o7, i6)) return;
      }
      r12 = r12.parent;
    }
    if (s6) return pauseTracking(), callWithErrorHandling(s6, null, 10, [e6, o7, i6]), void resetTracking();
  }
  !function(e7, t13, n6, r12 = true, s7 = false) {
    if (s7) throw e7;
    console.error(e7);
  }(e6, 0, 0, r11, o6);
}
function nextTick2(e6) {
  const t12 = vt || yt;
  return e6 ? t12.then(this ? e6.bind(this) : e6) : t12;
}
function queueJob(e6) {
  if (!(1 & e6.flags)) {
    const t12 = getId(e6), n5 = dt[dt.length - 1];
    !n5 || !(2 & e6.flags) && t12 >= getId(n5) ? dt.push(e6) : dt.splice(function(e7) {
      let t13 = ft + 1, n6 = dt.length;
      for (; t13 < n6; ) {
        const r11 = t13 + n6 >>> 1, s6 = dt[r11], o6 = getId(s6);
        o6 < e7 || o6 === e7 && 2 & s6.flags ? t13 = r11 + 1 : n6 = r11;
      }
      return t13;
    }(t12), 0, e6), e6.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  vt || (vt = yt.then(flushJobs));
}
function queuePostFlushCb(e6) {
  i(e6) ? ht.push(...e6) : gt && -1 === e6.id ? gt.splice(mt + 1, 0, e6) : 1 & e6.flags || (ht.push(e6), e6.flags |= 1), queueFlush();
}
function flushPreFlushCbs(e6, t12, n5 = ft + 1) {
  for (; n5 < dt.length; n5++) {
    const t13 = dt[n5];
    if (t13 && 2 & t13.flags) {
      if (e6 && t13.id !== e6.uid) continue;
      dt.splice(n5, 1), n5--, 4 & t13.flags && (t13.flags &= -2), t13(), 4 & t13.flags || (t13.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e6) {
  if (ht.length) {
    const e7 = [...new Set(ht)].sort((e8, t12) => getId(e8) - getId(t12));
    if (ht.length = 0, gt) return void gt.push(...e7);
    for (gt = e7, mt = 0; mt < gt.length; mt++) {
      const e8 = gt[mt];
      4 & e8.flags && (e8.flags &= -2), 8 & e8.flags || e8(), e8.flags &= -2;
    }
    gt = null, mt = 0;
  }
}
function flushJobs(e6) {
  try {
    for (ft = 0; ft < dt.length; ft++) {
      const e7 = dt[ft];
      !e7 || 8 & e7.flags || (4 & e7.flags && (e7.flags &= -2), callWithErrorHandling(e7, e7.i, e7.i ? 15 : 14), 4 & e7.flags || (e7.flags &= -2));
    }
  } finally {
    for (; ft < dt.length; ft++) {
      const e7 = dt[ft];
      e7 && (e7.flags &= -2);
    }
    ft = -1, dt.length = 0, flushPostFlushCbs(), vt = null, (dt.length || ht.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e6) {
  const t12 = Ct;
  return Ct = e6, kt = e6 && e6.type.__scopeId || null, t12;
}
function withCtx(e6, t12 = Ct, n5) {
  if (!t12) return e6;
  if (e6._n) return e6;
  const renderFnWithContext = /* @__PURE__ */ __name((...n6) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r11 = setCurrentRenderingInstance$1(t12);
    let s6;
    try {
      s6 = e6(...n6);
    } finally {
      setCurrentRenderingInstance$1(r11), renderFnWithContext._d && setBlockTracking(1);
    }
    return s6;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e6, t12, n5, r11) {
  const s6 = e6.dirs, o6 = t12 && t12.dirs;
  for (let i6 = 0; i6 < s6.length; i6++) {
    const a7 = s6[i6];
    o6 && (a7.oldValue = o6[i6].value);
    let l5 = a7.dir[r11];
    l5 && (pauseTracking(), callWithAsyncErrorHandling(l5, n5, 8, [e6.el, a7, e6, t12]), resetTracking());
  }
}
function moveTeleport(e6, t12, n5, { o: { insert: r11 }, m: s6 }, o6 = 2) {
  0 === o6 && r11(e6.targetAnchor, t12, n5);
  const { el: i6, anchor: a7, shapeFlag: l5, children: c4, props: u4 } = e6, p4 = 2 === o6;
  if (p4 && r11(i6, t12, n5), (!p4 || isTeleportDisabled(u4)) && 16 & l5) for (let e7 = 0; e7 < c4.length; e7++) s6(c4[e7], t12, n5, 2);
  p4 && r11(a7, t12, n5);
}
function updateCssVars(e6, t12) {
  const n5 = e6.ctx;
  if (n5 && n5.ut) {
    let r11, s6;
    for (t12 ? (r11 = e6.el, s6 = e6.anchor) : (r11 = e6.targetStart, s6 = e6.targetAnchor); r11 && r11 !== s6; ) 1 === r11.nodeType && r11.setAttribute("data-v-owner", n5.uid), r11 = r11.nextSibling;
    n5.ut();
  }
}
function prepareAnchor(e6, t12, n5, r11) {
  const s6 = t12.targetStart = n5(""), o6 = t12.targetAnchor = n5("");
  return s6[St] = o6, e6 && (r11(s6, e6), r11(o6, e6)), o6;
}
function useTransitionState() {
  const e6 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return It(() => {
    e6.isMounted = true;
  }), Bt(() => {
    e6.isUnmounting = true;
  }), e6;
}
function findNonCommentChild(e6) {
  let t12 = e6[0];
  if (e6.length > 1) {
    for (const n5 of e6) if (n5.type !== un) {
      t12 = n5;
      break;
    }
  }
  return t12;
}
function getLeavingNodesForType(e6, t12) {
  const { leavingVNodes: n5 } = e6;
  let r11 = n5.get(t12.type);
  return r11 || (r11 = /* @__PURE__ */ Object.create(null), n5.set(t12.type, r11)), r11;
}
function resolveTransitionHooks(e6, t12, n5, r11, s6) {
  const { appear: o6, mode: i6, persisted: a7 = false, onBeforeEnter: l5, onEnter: c4, onAfterEnter: u4, onEnterCancelled: p4, onBeforeLeave: d7, onLeave: f5, onAfterLeave: g4, onLeaveCancelled: m5, onBeforeAppear: y4, onAppear: _3, onAfterAppear: b3, onAppearCancelled: C3 } = t12, k4 = String(e6.key), S3 = getLeavingNodesForType(n5, e6), callHook2 = /* @__PURE__ */ __name((e7, t13) => {
    e7 && callWithAsyncErrorHandling(e7, r11, 9, t13);
  }, "callHook"), callAsyncHook = /* @__PURE__ */ __name((e7, t13) => {
    const n6 = t13[1];
    callHook2(e7, t13), i(e7) ? e7.every((e8) => e8.length <= 1) && n6() : e7.length <= 1 && n6();
  }, "callAsyncHook"), w4 = { mode: i6, persisted: a7, beforeEnter(t13) {
    let r12 = l5;
    if (!n5.isMounted) {
      if (!o6) return;
      r12 = y4 || l5;
    }
    t13[Tt] && t13[Tt](true);
    const s7 = S3[k4];
    s7 && isSameVNodeType(e6, s7) && s7.el[Tt] && s7.el[Tt](), callHook2(r12, [t13]);
  }, enter(e7) {
    let t13 = c4, r12 = u4, s7 = p4;
    if (!n5.isMounted) {
      if (!o6) return;
      t13 = _3 || c4, r12 = b3 || u4, s7 = C3 || p4;
    }
    let i7 = false;
    const a8 = e7[At] = (t14) => {
      i7 || (i7 = true, callHook2(t14 ? s7 : r12, [e7]), w4.delayedLeave && w4.delayedLeave(), e7[At] = void 0);
    };
    t13 ? callAsyncHook(t13, [e7, a8]) : a8();
  }, leave(t13, r12) {
    const s7 = String(e6.key);
    if (t13[At] && t13[At](true), n5.isUnmounting) return r12();
    callHook2(d7, [t13]);
    let o7 = false;
    const i7 = t13[Tt] = (n6) => {
      o7 || (o7 = true, r12(), callHook2(n6 ? m5 : g4, [t13]), t13[Tt] = void 0, S3[s7] === e6 && delete S3[s7]);
    };
    S3[s7] = e6, f5 ? callAsyncHook(f5, [t13, i7]) : i7();
  }, clone(e7) {
    const o7 = resolveTransitionHooks(e7, t12, n5, r11, s6);
    return s6 && s6(o7), o7;
  } };
  return w4;
}
function emptyPlaceholder(e6) {
  if (isKeepAlive(e6)) return (e6 = cloneVNode(e6)).children = null, e6;
}
function getInnerChild$1(e6) {
  if (!isKeepAlive(e6)) return isTeleport(e6.type) && e6.children ? findNonCommentChild(e6.children) : e6;
  if (e6.component) return e6.component.subTree;
  const { shapeFlag: t12, children: n5 } = e6;
  if (n5) {
    if (16 & t12) return n5[0];
    if (32 & t12 && isFunction2(n5.default)) return n5.default();
  }
}
function setTransitionHooks(e6, t12) {
  6 & e6.shapeFlag && e6.component ? (e6.transition = t12, setTransitionHooks(e6.component.subTree, t12)) : 128 & e6.shapeFlag ? (e6.ssContent.transition = t12.clone(e6.ssContent), e6.ssFallback.transition = t12.clone(e6.ssFallback)) : e6.transition = t12;
}
function getTransitionRawChildren(e6, t12 = false, n5) {
  let r11 = [], s6 = 0;
  for (let o6 = 0; o6 < e6.length; o6++) {
    let i6 = e6[o6];
    const a7 = null == n5 ? i6.key : String(n5) + String(null != i6.key ? i6.key : o6);
    i6.type === ln ? (128 & i6.patchFlag && s6++, r11 = r11.concat(getTransitionRawChildren(i6.children, t12, a7))) : (t12 || i6.type !== un) && r11.push(null != a7 ? cloneVNode(i6, { key: a7 }) : i6);
  }
  if (s6 > 1) for (let e7 = 0; e7 < r11.length; e7++) r11[e7].patchFlag = -2;
  return r11;
}
function defineComponent(e6, t12) {
  return isFunction2(e6) ? (() => n({ name: e6.name }, t12, { setup: e6 }))() : e6;
}
function markAsyncBoundary(e6) {
  e6.ids = [e6.ids[0] + e6.ids[2]++ + "-", 0, 0];
}
function setRef(e6, t12, n5, r11, s6 = false) {
  if (i(e6)) return void e6.forEach((e7, o7) => setRef(e7, t12 && (i(t12) ? t12[o7] : t12), n5, r11, s6));
  if (isAsyncWrapper(r11) && !s6) return void (512 & r11.shapeFlag && r11.type.__asyncResolved && r11.component.subTree.component && setRef(e6, t12, n5, r11.component.subTree));
  const o6 = 4 & r11.shapeFlag ? getComponentPublicInstance(r11.component) : r11.el, i6 = s6 ? null : o6, { i: a7, r: l5 } = e6, c4 = t12 && t12.r, u4 = a7.refs === t ? a7.refs = {} : a7.refs, d7 = a7.setupState, f5 = toRaw(d7), m5 = d7 === t ? () => false : (e7) => hasOwn(f5, e7);
  if (null != c4 && c4 !== l5 && (isString2(c4) ? (u4[c4] = null, m5(c4) && (d7[c4] = null)) : isRef2(c4) && (c4.value = null)), isFunction2(l5)) callWithErrorHandling(l5, a7, 12, [i6, u4]);
  else {
    const t13 = isString2(l5), r12 = isRef2(l5);
    if (t13 || r12) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e6.f) {
          const n6 = t13 ? m5(l5) ? d7[l5] : u4[l5] : l5.value;
          s6 ? i(n6) && remove(n6, o6) : i(n6) ? n6.includes(o6) || n6.push(o6) : t13 ? (u4[l5] = [o6], m5(l5) && (d7[l5] = u4[l5])) : (l5.value = [o6], e6.k && (u4[e6.k] = l5.value));
        } else t13 ? (u4[l5] = i6, m5(l5) && (d7[l5] = i6)) : r12 && (l5.value = i6, e6.k && (u4[e6.k] = i6));
      }, "doSet");
      i6 ? (doSet.id = -1, rn2(doSet, n5)) : doSet();
    }
  }
}
function createHydrationFunctions(e6) {
  const { mt: t12, p: n5, o: { patchProp: r11, createText: s6, nextSibling: o6, parentNode: i6, remove: a7, insert: l5, createComment: c4 } } = e6, hydrateNode = /* @__PURE__ */ __name((n6, r12, a8, c5, u4, p4 = false) => {
    p4 = p4 || !!r12.dynamicChildren;
    const d7 = isComment$1(n6) && "[" === n6.data, onMismatch = /* @__PURE__ */ __name(() => handleMismatch(n6, r12, a8, c5, u4, d7), "onMismatch"), { type: f5, ref: g4, shapeFlag: m5, patchFlag: y4 } = r12;
    let v6 = n6.nodeType;
    r12.el = n6, -2 === y4 && (p4 = false, r12.dynamicChildren = null);
    let _3 = null;
    switch (f5) {
      case cn:
        3 !== v6 ? "" === r12.children ? (l5(r12.el = s6(""), i6(n6), n6), _3 = n6) : _3 = onMismatch() : (n6.data !== r12.children && (logMismatchError(), n6.data = r12.children), _3 = o6(n6));
        break;
      case un:
        isTemplateNode2(n6) ? (_3 = o6(n6), replaceNode(r12.el = n6.content.firstChild, n6, a8)) : _3 = 8 !== v6 || d7 ? onMismatch() : o6(n6);
        break;
      case pn2:
        if (d7 && (v6 = (n6 = o6(n6)).nodeType), 1 === v6 || 3 === v6) {
          _3 = n6;
          const e7 = !r12.children.length;
          for (let t13 = 0; t13 < r12.staticCount; t13++) e7 && (r12.children += 1 === _3.nodeType ? _3.outerHTML : _3.data), t13 === r12.staticCount - 1 && (r12.anchor = _3), _3 = o6(_3);
          return d7 ? o6(_3) : _3;
        }
        onMismatch();
        break;
      case ln:
        _3 = d7 ? hydrateFragment(n6, r12, a8, c5, u4, p4) : onMismatch();
        break;
      default:
        if (1 & m5) _3 = 1 === v6 && r12.type.toLowerCase() === n6.tagName.toLowerCase() || isTemplateNode2(n6) ? hydrateElement(n6, r12, a8, c5, u4, p4) : onMismatch();
        else if (6 & m5) {
          r12.slotScopeIds = u4;
          const e7 = i6(n6);
          if (_3 = d7 ? locateClosingAnchor(n6) : isComment$1(n6) && "teleport start" === n6.data ? locateClosingAnchor(n6, n6.data, "teleport end") : o6(n6), t12(r12, e7, null, a8, c5, getContainerType(e7), p4), isAsyncWrapper(r12) && !r12.type.__asyncResolved) {
            let t13;
            d7 ? (t13 = createVNode(ln), t13.anchor = _3 ? _3.previousSibling : e7.lastChild) : t13 = 3 === n6.nodeType ? createTextVNode("") : createVNode("div"), t13.el = n6, r12.component.subTree = t13;
          }
        } else 64 & m5 ? _3 = 8 !== v6 ? onMismatch() : r12.type.hydrate(n6, r12, a8, c5, u4, p4, e6, hydrateChildren) : 128 & m5 && (_3 = r12.type.hydrate(n6, r12, a8, c5, getContainerType(i6(n6)), u4, p4, e6, hydrateNode));
    }
    return null != g4 && setRef(g4, null, c5, r12), _3;
  }, "hydrateNode"), hydrateElement = /* @__PURE__ */ __name((e7, t13, n6, s7, o7, i7) => {
    i7 = i7 || !!t13.dynamicChildren;
    const { type: l6, props: c5, patchFlag: u4, shapeFlag: p4, dirs: d7, transition: f5 } = t13, g4 = "input" === l6 || "option" === l6;
    if (g4 || -1 !== u4) {
      d7 && invokeDirectiveHook(t13, null, n6, "created");
      let l7, m5 = false;
      if (isTemplateNode2(e7)) {
        m5 = needTransition(null, f5) && n6 && n6.vnode.props && n6.vnode.props.appear;
        const r12 = e7.content.firstChild;
        if (m5) {
          const e8 = r12.getAttribute("class");
          e8 && (r12.$cls = e8), f5.beforeEnter(r12);
        }
        replaceNode(r12, e7, n6), t13.el = e7 = r12;
      }
      if (16 & p4 && (!c5 || !c5.innerHTML && !c5.textContent)) {
        let r12 = hydrateChildren(e7.firstChild, t13, e7, n6, s7, o7, i7);
        for (; r12; ) {
          isMismatchAllowed(e7, 1) || logMismatchError();
          const t14 = r12;
          r12 = r12.nextSibling, a7(t14);
        }
      } else if (8 & p4) {
        let n7 = t13.children;
        "\n" !== n7[0] || "PRE" !== e7.tagName && "TEXTAREA" !== e7.tagName || (n7 = n7.slice(1)), e7.textContent !== n7 && (isMismatchAllowed(e7, 0) || logMismatchError(), e7.textContent = t13.children);
      }
      if (c5) {
        if (g4 || !i7 || 48 & u4) {
          const t14 = e7.tagName.includes("-");
          for (const s8 in c5) (g4 && (s8.endsWith("value") || "indeterminate" === s8) || isOn(s8) && !s(s8) || "." === s8[0] || t14) && r11(e7, s8, null, c5[s8], void 0, n6);
        } else if (c5.onClick) r11(e7, "onClick", null, c5.onClick, void 0, n6);
        else if (4 & u4 && isReactive(c5.style)) for (const e8 in c5.style) c5.style[e8];
      }
      (l7 = c5 && c5.onVnodeBeforeMount) && invokeVNodeHook(l7, n6, t13), d7 && invokeDirectiveHook(t13, null, n6, "beforeMount"), ((l7 = c5 && c5.onVnodeMounted) || d7 || m5) && queueEffectWithSuspense(() => {
        l7 && invokeVNodeHook(l7, n6, t13), m5 && f5.enter(e7), d7 && invokeDirectiveHook(t13, null, n6, "mounted");
      }, s7);
    }
    return e7.nextSibling;
  }, "hydrateElement"), hydrateChildren = /* @__PURE__ */ __name((e7, t13, r12, i7, a8, c5, u4) => {
    u4 = u4 || !!t13.dynamicChildren;
    const p4 = t13.children, d7 = p4.length;
    for (let t14 = 0; t14 < d7; t14++) {
      const f5 = u4 ? p4[t14] : p4[t14] = normalizeVNode$1(p4[t14]), g4 = f5.type === cn;
      e7 ? (g4 && !u4 && t14 + 1 < d7 && normalizeVNode$1(p4[t14 + 1]).type === cn && (l5(s6(e7.data.slice(f5.children.length)), r12, o6(e7)), e7.data = f5.children), e7 = hydrateNode(e7, f5, i7, a8, c5, u4)) : g4 && !f5.children ? l5(f5.el = s6(""), r12) : (isMismatchAllowed(r12, 1) || logMismatchError(), n5(null, f5, r12, null, i7, a8, getContainerType(r12), c5));
    }
    return e7;
  }, "hydrateChildren"), hydrateFragment = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, a8) => {
    const { slotScopeIds: u4 } = t13;
    u4 && (s7 = s7 ? s7.concat(u4) : u4);
    const p4 = i6(e7), d7 = hydrateChildren(o6(e7), t13, p4, n6, r12, s7, a8);
    return d7 && isComment$1(d7) && "]" === d7.data ? o6(t13.anchor = d7) : (logMismatchError(), l5(t13.anchor = c4("]"), p4, d7), d7);
  }, "hydrateFragment"), handleMismatch = /* @__PURE__ */ __name((e7, t13, r12, s7, l6, c5) => {
    if (isMismatchAllowed(e7.parentElement, 1) || logMismatchError(), t13.el = null, c5) {
      const t14 = locateClosingAnchor(e7);
      for (; ; ) {
        const n6 = o6(e7);
        if (!n6 || n6 === t14) break;
        a7(n6);
      }
    }
    const u4 = o6(e7), p4 = i6(e7);
    return a7(e7), n5(null, t13, p4, u4, r12, s7, getContainerType(p4), l6), r12 && (r12.vnode.el = t13.el, updateHOCHostEl(r12, t13.el)), u4;
  }, "handleMismatch"), locateClosingAnchor = /* @__PURE__ */ __name((e7, t13 = "[", n6 = "]") => {
    let r12 = 0;
    for (; e7; ) if ((e7 = o6(e7)) && isComment$1(e7) && (e7.data === t13 && r12++, e7.data === n6)) {
      if (0 === r12) return o6(e7);
      r12--;
    }
    return e7;
  }, "locateClosingAnchor"), replaceNode = /* @__PURE__ */ __name((e7, t13, n6) => {
    const r12 = t13.parentNode;
    r12 && r12.replaceChild(e7, t13);
    let s7 = n6;
    for (; s7; ) s7.vnode.el === t13 && (s7.vnode.el = s7.subTree.el = e7), s7 = s7.parent;
  }, "replaceNode"), isTemplateNode2 = /* @__PURE__ */ __name((e7) => 1 === e7.nodeType && "TEMPLATE" === e7.tagName, "isTemplateNode");
  return [(e7, t13) => {
    if (!t13.hasChildNodes()) return n5(null, e7, t13), flushPostFlushCbs(), void (t13._vnode = e7);
    hydrateNode(t13.firstChild, e7, null, null, null), flushPostFlushCbs(), t13._vnode = e7;
  }, hydrateNode];
}
function isMismatchAllowed(e6, t12) {
  if (0 === t12 || 1 === t12) for (; e6 && !e6.hasAttribute(Nt); ) e6 = e6.parentElement;
  const n5 = e6 && e6.getAttribute(Nt);
  if (null == n5) return false;
  if ("" === n5) return true;
  {
    const e7 = n5.split(",");
    return !(0 !== t12 || !e7.includes("children")) || e7.includes($t[t12]);
  }
}
function createInnerComp(e6, t12) {
  const { ref: n5, props: r11, children: s6, ce: o6 } = t12.vnode, i6 = createVNode(e6, r11, s6);
  return i6.ref = n5, i6.ce = o6, delete t12.vnode.ce, i6;
}
function matches(e6, t12) {
  return i(e6) ? e6.some((e7) => matches(e7, t12)) : isString2(e6) ? e6.split(",").includes(t12) : !!isRegExp2(e6) && (e6.lastIndex = 0, e6.test(t12));
}
function onActivated(e6, t12) {
  registerKeepAliveHook(e6, "a", t12);
}
function onDeactivated(e6, t12) {
  registerKeepAliveHook(e6, "da", t12);
}
function registerKeepAliveHook(e6, t12, n5 = yn2) {
  const r11 = e6.__wdc || (e6.__wdc = () => {
    let t13 = n5;
    for (; t13; ) {
      if (t13.isDeactivated) return;
      t13 = t13.parent;
    }
    return e6();
  });
  if (injectHook(t12, r11, n5), n5) {
    let e7 = n5.parent;
    for (; e7 && e7.parent; ) isKeepAlive(e7.parent.vnode) && injectToKeepAliveRoot(r11, t12, n5, e7), e7 = e7.parent;
  }
}
function injectToKeepAliveRoot(e6, t12, n5, r11) {
  const s6 = injectHook(t12, e6, r11, true);
  Ft(() => {
    remove(r11[t12], s6);
  }, n5);
}
function resetShapeFlag(e6) {
  e6.shapeFlag &= -257, e6.shapeFlag &= -513;
}
function getInnerChild(e6) {
  return 128 & e6.shapeFlag ? e6.ssContent : e6;
}
function injectHook(e6, t12, n5 = yn2, r11 = false) {
  if (n5) {
    const s6 = n5[e6] || (n5[e6] = []), o6 = t12.__weh || (t12.__weh = (...r12) => {
      pauseTracking();
      const s7 = setCurrentInstance(n5), o7 = callWithAsyncErrorHandling(t12, n5, e6, r12);
      return s7(), resetTracking(), o7;
    });
    return r11 ? s6.unshift(o6) : s6.push(o6), o6;
  }
}
function onErrorCaptured(e6, t12 = yn2) {
  injectHook("ec", e6, t12);
}
function resolveAsset(e6, t12, n5 = true, r11 = false) {
  const s6 = Ct || yn2;
  if (s6) {
    const n6 = s6.type;
    if (e6 === qt) {
      const e7 = getComponentName(n6, false);
      if (e7 && (e7 === t12 || e7 === p(t12) || e7 === f(p(t12)))) return n6;
    }
    const o6 = resolve(s6[e6] || n6[e6], t12) || resolve(s6.appContext[e6], t12);
    return !o6 && r11 ? n6 : o6;
  }
}
function resolve(e6, t12) {
  return e6 && (e6[t12] || e6[p(t12)] || e6[f(p(t12))]);
}
function ensureValidVNode$1(e6) {
  return e6.some((e7) => !isVNode$2(e7) || e7.type !== un && !(e7.type === ln && !ensureValidVNode$1(e7.children))) ? e6 : null;
}
function getContext2() {
  const e6 = getCurrentInstance();
  return e6.setupContext || (e6.setupContext = createSetupContext(e6));
}
function normalizePropsOrEmits(e6) {
  return i(e6) ? e6.reduce((e7, t12) => (e7[t12] = null, e7), {}) : e6;
}
function applyOptions(e6) {
  const t12 = resolveMergedOptions(e6), n5 = e6.proxy, r11 = e6.ctx;
  Xt = false, t12.beforeCreate && callHook$1(t12.beforeCreate, e6, "bc");
  const { data: s6, computed: o6, methods: i6, watch: a7, provide: l5, inject: c4, created: u4, beforeMount: f5, mounted: g4, beforeUpdate: m5, updated: y4, activated: _3, deactivated: b3, beforeDestroy: C3, beforeUnmount: k4, destroyed: S3, unmounted: w4, render: R3, renderTracked: A4, renderTriggered: x3, errorCaptured: E4, serverPrefetch: P3, expose: O3, inheritAttrs: N3, components: $3, directives: H2, filters: V2 } = t12;
  if (c4 && function(e7, t13) {
    i(e7) && (e7 = normalizeInject(e7));
    for (const n6 in e7) {
      const r12 = e7[n6];
      let s7;
      s7 = isObject2(r12) ? "default" in r12 ? inject(r12.from || n6, r12.default, true) : inject(r12.from || n6) : inject(r12), isRef2(s7) ? Object.defineProperty(t13, n6, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => s7.value, "get"), set: /* @__PURE__ */ __name((e8) => s7.value = e8, "set") }) : t13[n6] = s7;
    }
  }(c4, r11, null), i6) for (const e7 in i6) {
    const t13 = i6[e7];
    isFunction2(t13) && (r11[e7] = t13.bind(n5));
  }
  if (s6) {
    const t13 = s6.call(n5, n5);
    isObject2(t13) && (e6.data = reactive(t13));
  }
  if (Xt = true, o6) for (const e7 in o6) {
    const t13 = o6[e7], s7 = isFunction2(t13) ? t13.bind(n5, n5) : isFunction2(t13.get) ? t13.get.bind(n5, n5) : NOOP, i7 = !isFunction2(t13) && isFunction2(t13.set) ? t13.set.bind(n5) : NOOP, a8 = computed({ get: s7, set: i7 });
    Object.defineProperty(r11, e7, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a8.value, "get"), set: /* @__PURE__ */ __name((e8) => a8.value = e8, "set") });
  }
  if (a7) for (const e7 in a7) createWatcher(a7[e7], r11, n5, e7);
  if (l5) {
    const e7 = isFunction2(l5) ? l5.call(n5) : l5;
    Reflect.ownKeys(e7).forEach((t13) => {
      provide(t13, e7[t13]);
    });
  }
  function registerLifecycleHook(e7, t13) {
    i(t13) ? t13.forEach((t14) => e7(t14.bind(n5))) : t13 && e7(t13.bind(n5));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (u4 && callHook$1(u4, e6, "c"), registerLifecycleHook(jt, f5), registerLifecycleHook(It, g4), registerLifecycleHook(Lt2, m5), registerLifecycleHook(Dt, y4), registerLifecycleHook(onActivated, _3), registerLifecycleHook(onDeactivated, b3), registerLifecycleHook(onErrorCaptured, E4), registerLifecycleHook(zt, A4), registerLifecycleHook(Wt, x3), registerLifecycleHook(Bt, k4), registerLifecycleHook(Ft, w4), registerLifecycleHook(Ut, P3), i(O3)) if (O3.length) {
    const t13 = e6.exposed || (e6.exposed = {});
    O3.forEach((e7) => {
      Object.defineProperty(t13, e7, { get: /* @__PURE__ */ __name(() => n5[e7], "get"), set: /* @__PURE__ */ __name((t14) => n5[e7] = t14, "set") });
    });
  } else e6.exposed || (e6.exposed = {});
  R3 && e6.render === NOOP && (e6.render = R3), null != N3 && (e6.inheritAttrs = N3), $3 && (e6.components = $3), H2 && (e6.directives = H2), P3 && markAsyncBoundary(e6);
}
function callHook$1(e6, t12, n5) {
  callWithAsyncErrorHandling(i(e6) ? e6.map((e7) => e7.bind(t12.proxy)) : e6.bind(t12.proxy), t12, n5);
}
function createWatcher(e6, t12, n5, r11) {
  let s6 = r11.includes(".") ? createPathGetter(n5, r11) : () => n5[r11];
  if (isString2(e6)) {
    const n6 = t12[e6];
    isFunction2(n6) && watch(s6, n6);
  } else if (isFunction2(e6)) watch(s6, e6.bind(n5));
  else if (isObject2(e6)) if (i(e6)) e6.forEach((e7) => createWatcher(e7, t12, n5, r11));
  else {
    const r12 = isFunction2(e6.handler) ? e6.handler.bind(n5) : t12[e6.handler];
    isFunction2(r12) && watch(s6, r12, e6);
  }
}
function resolveMergedOptions(e6) {
  const t12 = e6.type, { mixins: n5, extends: r11 } = t12, { mixins: s6, optionsCache: o6, config: { optionMergeStrategies: i6 } } = e6.appContext, a7 = o6.get(t12);
  let l5;
  return a7 ? l5 = a7 : s6.length || n5 || r11 ? (l5 = {}, s6.length && s6.forEach((e7) => mergeOptions2(l5, e7, i6, true)), mergeOptions2(l5, t12, i6)) : l5 = t12, isObject2(t12) && o6.set(t12, l5), l5;
}
function mergeOptions2(e6, t12, n5, r11 = false) {
  const { mixins: s6, extends: o6 } = t12;
  o6 && mergeOptions2(e6, o6, n5, true), s6 && s6.forEach((t13) => mergeOptions2(e6, t13, n5, true));
  for (const s7 in t12) if (r11 && "expose" === s7) ;
  else {
    const r12 = Yt[s7] || n5 && n5[s7];
    e6[s7] = r12 ? r12(e6[s7], t12[s7]) : t12[s7];
  }
  return e6;
}
function mergeDataFn(e6, t12) {
  return t12 ? e6 ? function() {
    return n(isFunction2(e6) ? e6.call(this, this) : e6, isFunction2(t12) ? t12.call(this, this) : t12);
  } : t12 : e6;
}
function normalizeInject(e6) {
  if (i(e6)) {
    const t12 = {};
    for (let n5 = 0; n5 < e6.length; n5++) t12[e6[n5]] = e6[n5];
    return t12;
  }
  return e6;
}
function mergeAsArray2(e6, t12) {
  return e6 ? [...new Set([].concat(e6, t12))] : t12;
}
function mergeObjectOptions(e6, t12) {
  return e6 ? n(/* @__PURE__ */ Object.create(null), e6, t12) : t12;
}
function mergeEmitsOrPropsOptions(e6, t12) {
  return e6 ? i(e6) && i(t12) ? [.../* @__PURE__ */ new Set([...e6, ...t12])] : n(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e6), normalizePropsOrEmits(null != t12 ? t12 : {})) : t12;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e6, t12) {
  return function(n5, r11 = null) {
    isFunction2(n5) || (n5 = n({}, n5)), null == r11 || isObject2(r11) || (r11 = null);
    const s6 = createAppContext(), o6 = /* @__PURE__ */ new WeakSet(), i6 = [];
    let a7 = false;
    const l5 = s6.app = { _uid: Qt++, _component: n5, _props: r11, _container: null, _context: s6, _instance: null, version: wn, get config() {
      return s6.config;
    }, set config(e7) {
    }, use: /* @__PURE__ */ __name((e7, ...t13) => (o6.has(e7) || (e7 && isFunction2(e7.install) ? (o6.add(e7), e7.install(l5, ...t13)) : isFunction2(e7) && (o6.add(e7), e7(l5, ...t13))), l5), "use"), mixin: /* @__PURE__ */ __name((e7) => (s6.mixins.includes(e7) || s6.mixins.push(e7), l5), "mixin"), component: /* @__PURE__ */ __name((e7, t13) => t13 ? (s6.components[e7] = t13, l5) : s6.components[e7], "component"), directive: /* @__PURE__ */ __name((e7, t13) => t13 ? (s6.directives[e7] = t13, l5) : s6.directives[e7], "directive"), mount(o7, i7, c4) {
      if (!a7) {
        const u4 = l5._ceVNode || createVNode(n5, r11);
        return u4.appContext = s6, true === c4 ? c4 = "svg" : false === c4 && (c4 = void 0), i7 && t12 ? t12(u4, o7) : e6(u4, o7, c4), a7 = true, l5._container = o7, o7.__vue_app__ = l5, getComponentPublicInstance(u4.component);
      }
    }, onUnmount(e7) {
      i6.push(e7);
    }, unmount() {
      a7 && (callWithAsyncErrorHandling(i6, l5._instance, 16), e6(null, l5._container), delete l5._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e7, t13) => (s6.provides[e7] = t13, l5), "provide"), runWithContext(e7) {
      const t13 = en2;
      en2 = l5;
      try {
        return e7();
      } finally {
        en2 = t13;
      }
    } };
    return l5;
  };
}
function provide(e6, t12) {
  if (yn2) {
    let n5 = yn2.provides;
    const r11 = yn2.parent && yn2.parent.provides;
    r11 === n5 && (n5 = yn2.provides = Object.create(r11)), n5[e6] = t12;
  } else ;
}
function inject(e6, t12, n5 = false) {
  const r11 = yn2 || Ct;
  if (r11 || en2) {
    let s6 = en2 ? en2._context.provides : r11 ? null == r11.parent || r11.ce ? r11.vnode.appContext && r11.vnode.appContext.provides : r11.parent.provides : void 0;
    if (s6 && e6 in s6) return s6[e6];
    if (arguments.length > 1) return n5 && isFunction2(t12) ? t12.call(r11 && r11.proxy) : t12;
  }
}
function hasInjectionContext() {
  return !!(yn2 || Ct || en2);
}
function setFullProps(e6, t12, n5, r11) {
  const [s6, o6] = e6.propsOptions;
  let i6, a7 = false;
  if (t12) for (let l5 in t12) {
    if (s(l5)) continue;
    const c4 = t12[l5];
    let u4;
    s6 && hasOwn(s6, u4 = p(l5)) ? o6 && o6.includes(u4) ? (i6 || (i6 = {}))[u4] = c4 : n5[u4] = c4 : isEmitListener(e6.emitsOptions, l5) || l5 in r11 && c4 === r11[l5] || (r11[l5] = c4, a7 = true);
  }
  if (o6) {
    const t13 = toRaw(n5), r12 = i6 || t;
    for (let i7 = 0; i7 < o6.length; i7++) {
      const a8 = o6[i7];
      n5[a8] = resolvePropValue(s6, t13, a8, r12[a8], e6, !hasOwn(r12, a8));
    }
  }
  return a7;
}
function resolvePropValue(e6, t12, n5, r11, s6, o6) {
  const i6 = e6[n5];
  if (null != i6) {
    const e7 = hasOwn(i6, "default");
    if (e7 && void 0 === r11) {
      const e8 = i6.default;
      if (i6.type !== Function && !i6.skipFactory && isFunction2(e8)) {
        const { propsDefaults: o7 } = s6;
        if (n5 in o7) r11 = o7[n5];
        else {
          const i7 = setCurrentInstance(s6);
          r11 = o7[n5] = e8.call(null, t12), i7();
        }
      } else r11 = e8;
      s6.ce && s6.ce._setProp(n5, r11);
    }
    i6[0] && (o6 && !e7 ? r11 = false : !i6[1] || "" !== r11 && r11 !== d(n5) || (r11 = true));
  }
  return r11;
}
function normalizePropsOptions(e6, t12, n5 = false) {
  const r11 = n5 ? nn2 : t12.propsCache, s6 = r11.get(e6);
  if (s6) return s6;
  const o6 = e6.props, i6 = {}, a7 = [];
  let l5 = false;
  if (!isFunction2(e6)) {
    const extendProps = /* @__PURE__ */ __name((e7) => {
      l5 = true;
      const [n6, r12] = normalizePropsOptions(e7, t12, true);
      n(i6, n6), r12 && a7.push(...r12);
    }, "extendProps");
    !n5 && t12.mixins.length && t12.mixins.forEach(extendProps), e6.extends && extendProps(e6.extends), e6.mixins && e6.mixins.forEach(extendProps);
  }
  if (!o6 && !l5) return isObject2(e6) && r11.set(e6, a), a;
  if (i(o6)) for (let e7 = 0; e7 < o6.length; e7++) {
    const t13 = p(o6[e7]);
    validatePropName(t13) && (i6[t13] = t);
  }
  else if (o6) for (const e7 in o6) {
    const t13 = p(e7);
    if (validatePropName(t13)) {
      const n6 = o6[e7], r12 = i6[t13] = i(n6) || isFunction2(n6) ? { type: n6 } : n({}, n6), s7 = r12.type;
      let l6 = false, c5 = true;
      if (i(s7)) for (let e8 = 0; e8 < s7.length; ++e8) {
        const t14 = s7[e8], n7 = isFunction2(t14) && t14.name;
        if ("Boolean" === n7) {
          l6 = true;
          break;
        }
        "String" === n7 && (c5 = false);
      }
      else l6 = isFunction2(s7) && "Boolean" === s7.name;
      r12[0] = l6, r12[1] = c5, (l6 || hasOwn(r12, "default")) && a7.push(t13);
    }
  }
  const c4 = [i6, a7];
  return isObject2(e6) && r11.set(e6, c4), c4;
}
function validatePropName(e6) {
  return "$" !== e6[0] && !s(e6);
}
function createRenderer(e6) {
  return baseCreateRenderer(e6);
}
function createHydrationRenderer(e6) {
  return baseCreateRenderer(e6, createHydrationFunctions);
}
function baseCreateRenderer(e6, t12) {
  getGlobalThis().__VUE__ = true;
  const { insert: n5, remove: r11, patchProp: s6, createElement: o6, createText: i6, createComment: a7, setText: l5, setElementText: c4, parentNode: u4, nextSibling: p4, setScopeId: d7 = NOOP, insertStaticContent: f5 } = e6, patch = /* @__PURE__ */ __name((e7, t13, n6, r12 = null, s7 = null, o7 = null, i7 = void 0, a8 = null, l6 = !!t13.dynamicChildren) => {
    if (e7 === t13) return;
    e7 && !isSameVNodeType(e7, t13) && (r12 = getNextHostNode(e7), unmount(e7, s7, o7, true), e7 = null), -2 === t13.patchFlag && (l6 = false, t13.dynamicChildren = null);
    const { type: c5, ref: u5, shapeFlag: p5 } = t13;
    switch (c5) {
      case cn:
        processText(e7, t13, n6, r12);
        break;
      case un:
        processCommentNode(e7, t13, n6, r12);
        break;
      case pn2:
        null == e7 && mountStaticNode(t13, n6, r12, i7);
        break;
      case ln:
        processFragment(e7, t13, n6, r12, s7, o7, i7, a8, l6);
        break;
      default:
        1 & p5 ? processElement(e7, t13, n6, r12, s7, o7, i7, a8, l6) : 6 & p5 ? processComponent(e7, t13, n6, r12, s7, o7, i7, a8, l6) : (64 & p5 || 128 & p5) && c5.process(e7, t13, n6, r12, s7, o7, i7, a8, l6, _3);
    }
    null != u5 && s7 ? setRef(u5, e7 && e7.ref, o7, t13 || e7, !t13) : null == u5 && e7 && null != e7.ref && setRef(e7.ref, null, o7, e7, true);
  }, "patch"), processText = /* @__PURE__ */ __name((e7, t13, r12, s7) => {
    if (null == e7) n5(t13.el = i6(t13.children), r12, s7);
    else {
      const n6 = t13.el = e7.el;
      t13.children !== e7.children && l5(n6, t13.children);
    }
  }, "processText"), processCommentNode = /* @__PURE__ */ __name((e7, t13, r12, s7) => {
    null == e7 ? n5(t13.el = a7(t13.children || ""), r12, s7) : t13.el = e7.el;
  }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e7, t13, n6, r12) => {
    [e7.el, e7.anchor] = f5(e7.children, t13, n6, r12, e7.el, e7.anchor);
  }, "mountStaticNode"), processElement = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6) => {
    "svg" === t13.type ? i7 = "svg" : "math" === t13.type && (i7 = "mathml"), null == e7 ? mountElement(t13, n6, r12, s7, o7, i7, a8, l6) : patchElement(e7, t13, s7, o7, i7, a8, l6);
  }, "processElement"), mountElement = /* @__PURE__ */ __name((e7, t13, r12, i7, a8, l6, u5, p5) => {
    let d8, f6;
    const { props: g4, shapeFlag: m6, transition: y4, dirs: v6 } = e7;
    if (d8 = e7.el = o6(e7.type, l6, g4 && g4.is, g4), 8 & m6 ? c4(d8, e7.children) : 16 & m6 && mountChildren(e7.children, d8, null, i7, a8, resolveChildrenNamespace(e7, l6), u5, p5), v6 && invokeDirectiveHook(e7, null, i7, "created"), setScopeId(d8, e7, e7.scopeId, u5, i7), g4) {
      for (const e8 in g4) "value" === e8 || s(e8) || s6(d8, e8, null, g4[e8], l6, i7);
      "value" in g4 && s6(d8, "value", null, g4.value, l6), (f6 = g4.onVnodeBeforeMount) && invokeVNodeHook(f6, i7, e7);
    }
    v6 && invokeDirectiveHook(e7, null, i7, "beforeMount");
    const _4 = needTransition(a8, y4);
    _4 && y4.beforeEnter(d8), n5(d8, t13, r12), ((f6 = g4 && g4.onVnodeMounted) || _4 || v6) && rn2(() => {
      f6 && invokeVNodeHook(f6, i7, e7), _4 && y4.enter(d8), v6 && invokeDirectiveHook(e7, null, i7, "mounted");
    }, a8);
  }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e7, t13, n6, r12, s7) => {
    if (n6 && d7(e7, n6), r12) for (let t14 = 0; t14 < r12.length; t14++) d7(e7, r12[t14]);
    if (s7) {
      let n7 = s7.subTree;
      if (t13 === n7 || isSuspense(n7.type) && (n7.ssContent === t13 || n7.ssFallback === t13)) {
        const t14 = s7.vnode;
        setScopeId(e7, t14, t14.scopeId, t14.slotScopeIds, s7.parent);
      }
    }
  }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6 = 0) => {
    for (let c5 = l6; c5 < e7.length; c5++) {
      const l7 = e7[c5] = a8 ? cloneIfMounted(e7[c5]) : normalizeVNode$1(e7[c5]);
      patch(null, l7, t13, n6, r12, s7, o7, i7, a8);
    }
  }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e7, t13, n6, r12, o7, i7, a8) => {
    const l6 = t13.el = e7.el;
    let { patchFlag: u5, dynamicChildren: p5, dirs: d8 } = t13;
    u5 |= 16 & e7.patchFlag;
    const f6 = e7.props || t, g4 = t13.props || t;
    let m6;
    if (n6 && toggleRecurse(n6, false), (m6 = g4.onVnodeBeforeUpdate) && invokeVNodeHook(m6, n6, t13, e7), d8 && invokeDirectiveHook(t13, e7, n6, "beforeUpdate"), n6 && toggleRecurse(n6, true), (f6.innerHTML && null == g4.innerHTML || f6.textContent && null == g4.textContent) && c4(l6, ""), p5 ? patchBlockChildren(e7.dynamicChildren, p5, l6, n6, r12, resolveChildrenNamespace(t13, o7), i7) : a8 || patchChildren(e7, t13, l6, null, n6, r12, resolveChildrenNamespace(t13, o7), i7, false), u5 > 0) {
      if (16 & u5) patchProps(l6, f6, g4, n6, o7);
      else if (2 & u5 && f6.class !== g4.class && s6(l6, "class", null, g4.class, o7), 4 & u5 && s6(l6, "style", f6.style, g4.style, o7), 8 & u5) {
        const e8 = t13.dynamicProps;
        for (let t14 = 0; t14 < e8.length; t14++) {
          const r13 = e8[t14], i8 = f6[r13], a9 = g4[r13];
          a9 === i8 && "value" !== r13 || s6(l6, r13, i8, a9, o7, n6);
        }
      }
      1 & u5 && e7.children !== t13.children && c4(l6, t13.children);
    } else a8 || null != p5 || patchProps(l6, f6, g4, n6, o7);
    ((m6 = g4.onVnodeUpdated) || d8) && rn2(() => {
      m6 && invokeVNodeHook(m6, n6, t13, e7), d8 && invokeDirectiveHook(t13, e7, n6, "updated");
    }, r12);
  }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7) => {
    for (let a8 = 0; a8 < t13.length; a8++) {
      const l6 = e7[a8], c5 = t13[a8], p5 = l6.el && (l6.type === ln || !isSameVNodeType(l6, c5) || 198 & l6.shapeFlag) ? u4(l6.el) : n6;
      patch(l6, c5, p5, null, r12, s7, o7, i7, true);
    }
  }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e7, t13, n6, r12, o7) => {
    if (t13 !== n6) {
      if (t13 !== t) for (const i7 in t13) s(i7) || i7 in n6 || s6(e7, i7, t13[i7], null, o7, r12);
      for (const i7 in n6) {
        if (s(i7)) continue;
        const a8 = n6[i7], l6 = t13[i7];
        a8 !== l6 && "value" !== i7 && s6(e7, i7, l6, a8, o7, r12);
      }
      "value" in n6 && s6(e7, "value", t13.value, n6.value, o7);
    }
  }, "patchProps"), processFragment = /* @__PURE__ */ __name((e7, t13, r12, s7, o7, a8, l6, c5, u5) => {
    const p5 = t13.el = e7 ? e7.el : i6(""), d8 = t13.anchor = e7 ? e7.anchor : i6("");
    let { patchFlag: f6, dynamicChildren: g4, slotScopeIds: m6 } = t13;
    m6 && (c5 = c5 ? c5.concat(m6) : m6), null == e7 ? (n5(p5, r12, s7), n5(d8, r12, s7), mountChildren(t13.children || [], r12, d8, o7, a8, l6, c5, u5)) : f6 > 0 && 64 & f6 && g4 && e7.dynamicChildren ? (patchBlockChildren(e7.dynamicChildren, g4, r12, o7, a8, l6, c5), (null != t13.key || o7 && t13 === o7.subTree) && traverseStaticChildren(e7, t13, true)) : patchChildren(e7, t13, r12, d8, o7, a8, l6, c5, u5);
  }, "processFragment"), processComponent = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6) => {
    t13.slotScopeIds = a8, null == e7 ? 512 & t13.shapeFlag ? s7.ctx.activate(t13, n6, r12, i7, l6) : mountComponent(t13, n6, r12, s7, o7, i7, l6) : updateComponent(e7, t13, l6);
  }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7) => {
    const a8 = e7.component = createComponentInstance$1(e7, r12, s7);
    if (isKeepAlive(e7) && (a8.ctx.renderer = _3), setupComponent$1(a8, false, i7), a8.asyncDep) {
      if (s7 && s7.registerDep(a8, setupRenderEffect, i7), !e7.el) {
        const e8 = a8.subTree = createVNode(un);
        processCommentNode(null, e8, t13, n6);
      }
    } else setupRenderEffect(a8, e7, t13, n6, s7, o7, i7);
  }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e7, t13, n6) => {
    const r12 = t13.component = e7.component;
    if (function(e8, t14, n7) {
      const { props: r13, children: s7, component: o7 } = e8, { props: i7, children: a8, patchFlag: l6 } = t14, c5 = o7.emitsOptions;
      if (t14.dirs || t14.transition) return true;
      if (!(n7 && l6 >= 0)) return !(!s7 && !a8 || a8 && a8.$stable) || r13 !== i7 && (r13 ? !i7 || hasPropsChanged(r13, i7, c5) : !!i7);
      if (1024 & l6) return true;
      if (16 & l6) return r13 ? hasPropsChanged(r13, i7, c5) : !!i7;
      if (8 & l6) {
        const e9 = t14.dynamicProps;
        for (let t15 = 0; t15 < e9.length; t15++) {
          const n8 = e9[t15];
          if (i7[n8] !== r13[n8] && !isEmitListener(c5, n8)) return true;
        }
      }
      return false;
    }(e7, t13, n6)) {
      if (r12.asyncDep && !r12.asyncResolved) return void updateComponentPreRender(r12, t13, n6);
      r12.next = t13, r12.update();
    } else t13.el = e7.el, r12.vnode = t13;
  }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7) => {
    const componentUpdateFn = /* @__PURE__ */ __name(() => {
      if (e7.isMounted) {
        let { next: t14, bu: n7, u: r13, parent: a9, vnode: l7 } = e7;
        {
          const n8 = locateNonHydratedAsyncRoot(e7);
          if (n8) return t14 && (t14.el = l7.el, updateComponentPreRender(e7, t14, i7)), void n8.asyncDep.then(() => {
            e7.isUnmounted || componentUpdateFn();
          });
        }
        let c6, p5 = t14;
        toggleRecurse(e7, false), t14 ? (t14.el = l7.el, updateComponentPreRender(e7, t14, i7)) : t14 = l7, n7 && invokeArrayFns(n7), (c6 = t14.props && t14.props.onVnodeBeforeUpdate) && invokeVNodeHook(c6, a9, t14, l7), toggleRecurse(e7, true);
        const d8 = renderComponentRoot$1(e7), f6 = e7.subTree;
        e7.subTree = d8, patch(f6, d8, u4(f6.el), getNextHostNode(f6), e7, s7, o7), t14.el = d8.el, null === p5 && updateHOCHostEl(e7, d8.el), r13 && rn2(r13, s7), (c6 = t14.props && t14.props.onVnodeUpdated) && rn2(() => invokeVNodeHook(c6, a9, t14, l7), s7);
      } else {
        let i8;
        const { el: a9, props: l7 } = t13, { bm: c6, m: u5, parent: p5, root: d8, type: f6 } = e7, g4 = isAsyncWrapper(t13);
        if (toggleRecurse(e7, false), c6 && invokeArrayFns(c6), !g4 && (i8 = l7 && l7.onVnodeBeforeMount) && invokeVNodeHook(i8, p5, t13), toggleRecurse(e7, true), a9 && C3) {
          const hydrateSubTree = /* @__PURE__ */ __name(() => {
            e7.subTree = renderComponentRoot$1(e7), C3(a9, e7.subTree, e7, s7, null);
          }, "hydrateSubTree");
          g4 && f6.__asyncHydrate ? f6.__asyncHydrate(a9, e7, hydrateSubTree) : hydrateSubTree();
        } else {
          d8.ce && false !== d8.ce._def.shadowRoot && d8.ce._injectChildStyle(f6);
          const i9 = e7.subTree = renderComponentRoot$1(e7);
          patch(null, i9, n6, r12, e7, s7, o7), t13.el = i9.el;
        }
        if (u5 && rn2(u5, s7), !g4 && (i8 = l7 && l7.onVnodeMounted)) {
          const e8 = t13;
          rn2(() => invokeVNodeHook(i8, p5, e8), s7);
        }
        (256 & t13.shapeFlag || p5 && isAsyncWrapper(p5.vnode) && 256 & p5.vnode.shapeFlag) && e7.a && rn2(e7.a, s7), e7.isMounted = true, t13 = n6 = r12 = null;
      }
    }, "componentUpdateFn");
    e7.scope.on();
    const a8 = e7.effect = new ReactiveEffect(componentUpdateFn);
    e7.scope.off();
    const l6 = e7.update = a8.run.bind(a8), c5 = e7.job = a8.runIfDirty.bind(a8);
    c5.i = e7, c5.id = e7.uid, a8.scheduler = () => queueJob(c5), toggleRecurse(e7, true), l6();
  }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e7, t13, n6) => {
    t13.component = e7;
    const r12 = e7.vnode.props;
    e7.vnode = t13, e7.next = null, function(e8, t14, n7, r13) {
      const { props: s7, attrs: o7, vnode: { patchFlag: i7 } } = e8, a8 = toRaw(s7), [l6] = e8.propsOptions;
      let c5 = false;
      if (!(r13 || i7 > 0) || 16 & i7) {
        let r14;
        setFullProps(e8, t14, s7, o7) && (c5 = true);
        for (const o8 in a8) t14 && (hasOwn(t14, o8) || (r14 = d(o8)) !== o8 && hasOwn(t14, r14)) || (l6 ? !n7 || void 0 === n7[o8] && void 0 === n7[r14] || (s7[o8] = resolvePropValue(l6, a8, o8, void 0, e8, true)) : delete s7[o8]);
        if (o7 !== a8) for (const e9 in o7) t14 && hasOwn(t14, e9) || (delete o7[e9], c5 = true);
      } else if (8 & i7) {
        const n8 = e8.vnode.dynamicProps;
        for (let r14 = 0; r14 < n8.length; r14++) {
          let i8 = n8[r14];
          if (isEmitListener(e8.emitsOptions, i8)) continue;
          const u5 = t14[i8];
          if (l6) if (hasOwn(o7, i8)) u5 !== o7[i8] && (o7[i8] = u5, c5 = true);
          else {
            const t15 = p(i8);
            s7[t15] = resolvePropValue(l6, a8, t15, u5, e8, false);
          }
          else u5 !== o7[i8] && (o7[i8] = u5, c5 = true);
        }
      }
      c5 && trigger(e8.attrs, "set", "");
    }(e7, t13.props, r12, n6), ((e8, t14, n7) => {
      const { vnode: r13, slots: s7 } = e8;
      let o7 = true, i7 = t;
      if (32 & r13.shapeFlag) {
        const e9 = t14._;
        e9 ? n7 && 1 === e9 ? o7 = false : assignSlots(s7, t14, n7) : (o7 = !t14.$stable, normalizeObjectSlots(t14, s7)), i7 = t14;
      } else t14 && (normalizeVNodeSlots(e8, t14), i7 = { default: 1 });
      if (o7) for (const e9 in s7) isInternalKey(e9) || null != i7[e9] || delete s7[e9];
    })(e7, t13.children, n6), pauseTracking(), flushPreFlushCbs(e7), resetTracking();
  }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6 = false) => {
    const u5 = e7 && e7.children, p5 = e7 ? e7.shapeFlag : 0, d8 = t13.children, { patchFlag: f6, shapeFlag: g4 } = t13;
    if (f6 > 0) {
      if (128 & f6) return void patchKeyedChildren(u5, d8, n6, r12, s7, o7, i7, a8, l6);
      if (256 & f6) return void patchUnkeyedChildren(u5, d8, n6, r12, s7, o7, i7, a8, l6);
    }
    8 & g4 ? (16 & p5 && unmountChildren(u5, s7, o7), d8 !== u5 && c4(n6, d8)) : 16 & p5 ? 16 & g4 ? patchKeyedChildren(u5, d8, n6, r12, s7, o7, i7, a8, l6) : unmountChildren(u5, s7, o7, true) : (8 & p5 && c4(n6, ""), 16 & g4 && mountChildren(d8, n6, r12, s7, o7, i7, a8, l6));
  }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6) => {
    t13 = t13 || a;
    const c5 = (e7 = e7 || a).length, u5 = t13.length, p5 = Math.min(c5, u5);
    let d8;
    for (d8 = 0; d8 < p5; d8++) {
      const r13 = t13[d8] = l6 ? cloneIfMounted(t13[d8]) : normalizeVNode$1(t13[d8]);
      patch(e7[d8], r13, n6, null, s7, o7, i7, a8, l6);
    }
    c5 > u5 ? unmountChildren(e7, s7, o7, true, false, p5) : mountChildren(t13, n6, r12, s7, o7, i7, a8, l6, p5);
  }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e7, t13, n6, r12, s7, o7, i7, a8, l6) => {
    let c5 = 0;
    const u5 = t13.length;
    let p5 = e7.length - 1, d8 = u5 - 1;
    for (; c5 <= p5 && c5 <= d8; ) {
      const r13 = e7[c5], u6 = t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]);
      if (!isSameVNodeType(r13, u6)) break;
      patch(r13, u6, n6, null, s7, o7, i7, a8, l6), c5++;
    }
    for (; c5 <= p5 && c5 <= d8; ) {
      const r13 = e7[p5], c6 = t13[d8] = l6 ? cloneIfMounted(t13[d8]) : normalizeVNode$1(t13[d8]);
      if (!isSameVNodeType(r13, c6)) break;
      patch(r13, c6, n6, null, s7, o7, i7, a8, l6), p5--, d8--;
    }
    if (c5 > p5) {
      if (c5 <= d8) {
        const e8 = d8 + 1, p6 = e8 < u5 ? t13[e8].el : r12;
        for (; c5 <= d8; ) patch(null, t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]), n6, p6, s7, o7, i7, a8, l6), c5++;
      }
    } else if (c5 > d8) for (; c5 <= p5; ) unmount(e7[c5], s7, o7, true), c5++;
    else {
      const f6 = c5, g4 = c5, m6 = /* @__PURE__ */ new Map();
      for (c5 = g4; c5 <= d8; c5++) {
        const e8 = t13[c5] = l6 ? cloneIfMounted(t13[c5]) : normalizeVNode$1(t13[c5]);
        null != e8.key && m6.set(e8.key, c5);
      }
      let y4, v6 = 0;
      const _4 = d8 - g4 + 1;
      let b4 = false, C4 = 0;
      const k4 = new Array(_4);
      for (c5 = 0; c5 < _4; c5++) k4[c5] = 0;
      for (c5 = f6; c5 <= p5; c5++) {
        const r13 = e7[c5];
        if (v6 >= _4) {
          unmount(r13, s7, o7, true);
          continue;
        }
        let u6;
        if (null != r13.key) u6 = m6.get(r13.key);
        else for (y4 = g4; y4 <= d8; y4++) if (0 === k4[y4 - g4] && isSameVNodeType(r13, t13[y4])) {
          u6 = y4;
          break;
        }
        void 0 === u6 ? unmount(r13, s7, o7, true) : (k4[u6 - g4] = c5 + 1, u6 >= C4 ? C4 = u6 : b4 = true, patch(r13, t13[u6], n6, null, s7, o7, i7, a8, l6), v6++);
      }
      const S3 = b4 ? function(e8) {
        const t14 = e8.slice(), n7 = [0];
        let r13, s8, o8, i8, a9;
        const l7 = e8.length;
        for (r13 = 0; r13 < l7; r13++) {
          const l8 = e8[r13];
          if (0 !== l8) {
            if (s8 = n7[n7.length - 1], e8[s8] < l8) {
              t14[r13] = s8, n7.push(r13);
              continue;
            }
            for (o8 = 0, i8 = n7.length - 1; o8 < i8; ) a9 = o8 + i8 >> 1, e8[n7[a9]] < l8 ? o8 = a9 + 1 : i8 = a9;
            l8 < e8[n7[o8]] && (o8 > 0 && (t14[r13] = n7[o8 - 1]), n7[o8] = r13);
          }
        }
        o8 = n7.length, i8 = n7[o8 - 1];
        for (; o8-- > 0; ) n7[o8] = i8, i8 = t14[i8];
        return n7;
      }(k4) : a;
      for (y4 = S3.length - 1, c5 = _4 - 1; c5 >= 0; c5--) {
        const e8 = g4 + c5, p6 = t13[e8], d9 = e8 + 1 < u5 ? t13[e8 + 1].el : r12;
        0 === k4[c5] ? patch(null, p6, n6, d9, s7, o7, i7, a8, l6) : b4 && (y4 < 0 || c5 !== S3[y4] ? move(p6, n6, d9, 2) : y4--);
      }
    }
  }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e7, t13, s7, o7, i7 = null) => {
    const { el: a8, type: l6, transition: c5, children: u5, shapeFlag: d8 } = e7;
    if (6 & d8) return void move(e7.component.subTree, t13, s7, o7);
    if (128 & d8) return void e7.suspense.move(t13, s7, o7);
    if (64 & d8) return void l6.move(e7, t13, s7, _3);
    if (l6 === ln) {
      n5(a8, t13, s7);
      for (let e8 = 0; e8 < u5.length; e8++) move(u5[e8], t13, s7, o7);
      return void n5(e7.anchor, t13, s7);
    }
    if (l6 === pn2) return void (({ el: e8, anchor: t14 }, r12, s8) => {
      let o8;
      for (; e8 && e8 !== t14; ) o8 = p4(e8), n5(e8, r12, s8), e8 = o8;
      n5(t14, r12, s8);
    })(e7, t13, s7);
    if (2 !== o7 && 1 & d8 && c5) if (0 === o7) c5.beforeEnter(a8), n5(a8, t13, s7), rn2(() => c5.enter(a8), i7);
    else {
      const { leave: o8, delayLeave: i8, afterLeave: l7 } = c5, remove22 = /* @__PURE__ */ __name(() => {
        e7.ctx.isUnmounted ? r11(a8) : n5(a8, t13, s7);
      }, "remove2"), performLeave = /* @__PURE__ */ __name(() => {
        o8(a8, () => {
          remove22(), l7 && l7();
        });
      }, "performLeave");
      i8 ? i8(a8, remove22, performLeave) : performLeave();
    }
    else n5(a8, t13, s7);
  }, "move"), unmount = /* @__PURE__ */ __name((e7, t13, n6, r12 = false, s7 = false) => {
    const { type: o7, props: i7, ref: a8, children: l6, dynamicChildren: c5, shapeFlag: u5, patchFlag: p5, dirs: d8, cacheIndex: f6 } = e7;
    if (-2 === p5 && (s7 = false), null != a8 && (pauseTracking(), setRef(a8, null, n6, e7, true), resetTracking()), null != f6 && (t13.renderCache[f6] = void 0), 256 & u5) return void t13.ctx.deactivate(e7);
    const g4 = 1 & u5 && d8, m6 = !isAsyncWrapper(e7);
    let y4;
    if (m6 && (y4 = i7 && i7.onVnodeBeforeUnmount) && invokeVNodeHook(y4, t13, e7), 6 & u5) unmountComponent(e7.component, n6, r12);
    else {
      if (128 & u5) return void e7.suspense.unmount(n6, r12);
      g4 && invokeDirectiveHook(e7, null, t13, "beforeUnmount"), 64 & u5 ? e7.type.remove(e7, t13, n6, _3, r12) : c5 && !c5.hasOnce && (o7 !== ln || p5 > 0 && 64 & p5) ? unmountChildren(c5, t13, n6, false, true) : (o7 === ln && 384 & p5 || !s7 && 16 & u5) && unmountChildren(l6, t13, n6), r12 && remove2(e7);
    }
    (m6 && (y4 = i7 && i7.onVnodeUnmounted) || g4) && rn2(() => {
      y4 && invokeVNodeHook(y4, t13, e7), g4 && invokeDirectiveHook(e7, null, t13, "unmounted");
    }, n6);
  }, "unmount"), remove2 = /* @__PURE__ */ __name((e7) => {
    const { type: t13, el: n6, anchor: s7, transition: o7 } = e7;
    if (t13 === ln) return void removeFragment(n6, s7);
    if (t13 === pn2) return void (({ el: e8, anchor: t14 }) => {
      let n7;
      for (; e8 && e8 !== t14; ) n7 = p4(e8), r11(e8), e8 = n7;
      r11(t14);
    })(e7);
    const performRemove = /* @__PURE__ */ __name(() => {
      r11(n6), o7 && !o7.persisted && o7.afterLeave && o7.afterLeave();
    }, "performRemove");
    if (1 & e7.shapeFlag && o7 && !o7.persisted) {
      const { leave: t14, delayLeave: r12 } = o7, performLeave = /* @__PURE__ */ __name(() => t14(n6, performRemove), "performLeave");
      r12 ? r12(e7.el, performRemove, performLeave) : performLeave();
    } else performRemove();
  }, "remove"), removeFragment = /* @__PURE__ */ __name((e7, t13) => {
    let n6;
    for (; e7 !== t13; ) n6 = p4(e7), r11(e7), e7 = n6;
    r11(t13);
  }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e7, t13, n6) => {
    const { bum: r12, scope: s7, job: o7, subTree: i7, um: a8, m: l6, a: c5, parent: u5, slots: { __: p5 } } = e7;
    invalidateMount(l6), invalidateMount(c5), r12 && invokeArrayFns(r12), u5 && i(p5) && p5.forEach((e8) => {
      u5.renderCache[e8] = void 0;
    }), s7.stop(), o7 && (o7.flags |= 8, unmount(i7, e7, t13, n6)), a8 && rn2(a8, t13), rn2(() => {
      e7.isUnmounted = true;
    }, t13), t13 && t13.pendingBranch && !t13.isUnmounted && e7.asyncDep && !e7.asyncResolved && e7.suspenseId === t13.pendingId && (t13.deps--, 0 === t13.deps && t13.resolve());
  }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e7, t13, n6, r12 = false, s7 = false, o7 = 0) => {
    for (let i7 = o7; i7 < e7.length; i7++) unmount(e7[i7], t13, n6, r12, s7);
  }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e7) => {
    if (6 & e7.shapeFlag) return getNextHostNode(e7.component.subTree);
    if (128 & e7.shapeFlag) return e7.suspense.next();
    const t13 = p4(e7.anchor || e7.el), n6 = t13 && t13[St];
    return n6 ? p4(n6) : t13;
  }, "getNextHostNode");
  let m5 = false;
  const render2 = /* @__PURE__ */ __name((e7, t13, n6) => {
    null == e7 ? t13._vnode && unmount(t13._vnode, null, null, true) : patch(t13._vnode || null, e7, t13, null, null, null, n6), t13._vnode = e7, m5 || (m5 = true, flushPreFlushCbs(), flushPostFlushCbs(), m5 = false);
  }, "render"), _3 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e6 };
  let b3, C3;
  return t12 && ([b3, C3] = t12(_3)), { render: render2, hydrate: b3, createApp: createAppAPI(render2, b3) };
}
function resolveChildrenNamespace({ type: e6, props: t12 }, n5) {
  return "svg" === n5 && "foreignObject" === e6 || "mathml" === n5 && "annotation-xml" === e6 && t12 && t12.encoding && t12.encoding.includes("html") ? void 0 : n5;
}
function toggleRecurse({ effect: e6, job: t12 }, n5) {
  n5 ? (e6.flags |= 32, t12.flags |= 4) : (e6.flags &= -33, t12.flags &= -5);
}
function needTransition(e6, t12) {
  return (!e6 || e6 && !e6.pendingBranch) && t12 && !t12.persisted;
}
function traverseStaticChildren(e6, t12, n5 = false) {
  const r11 = e6.children, s6 = t12.children;
  if (i(r11) && i(s6)) for (let e7 = 0; e7 < r11.length; e7++) {
    const t13 = r11[e7];
    let o6 = s6[e7];
    1 & o6.shapeFlag && !o6.dynamicChildren && ((o6.patchFlag <= 0 || 32 === o6.patchFlag) && (o6 = s6[e7] = cloneIfMounted(s6[e7]), o6.el = t13.el), n5 || -2 === o6.patchFlag || traverseStaticChildren(t13, o6)), o6.type === cn && (o6.el = t13.el), o6.type !== un || o6.el || (o6.el = t13.el);
  }
}
function locateNonHydratedAsyncRoot(e6) {
  const t12 = e6.subTree.component;
  if (t12) return t12.asyncDep && !t12.asyncResolved ? t12 : locateNonHydratedAsyncRoot(t12);
}
function invalidateMount(e6) {
  if (e6) for (let t12 = 0; t12 < e6.length; t12++) e6[t12].flags |= 8;
}
function watchEffect(e6, t12) {
  return doWatch(e6, null, t12);
}
function watchSyncEffect(e6, t12) {
  return doWatch(e6, null, { flush: "sync" });
}
function watch(e6, t12, n5) {
  return doWatch(e6, t12, n5);
}
function doWatch(e6, t12, n5 = t) {
  const { immediate: r11, deep: s6, flush: o6, once: i6 } = n5, a7 = n({}, n5), l5 = t12 && r11 || !t12 && "post" !== o6;
  let c4;
  if (kn) {
    if ("sync" === o6) {
      const e7 = useSSRContext();
      c4 = e7.__watcherHandles || (e7.__watcherHandles = []);
    } else if (!l5) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const u4 = yn2;
  a7.call = (e7, t13, n6) => callWithAsyncErrorHandling(e7, u4, t13, n6);
  let d7 = false;
  "post" === o6 ? a7.scheduler = (e7) => {
    rn2(e7, u4 && u4.suspense);
  } : "sync" !== o6 && (d7 = true, a7.scheduler = (e7, t13) => {
    t13 ? e7() : queueJob(e7);
  }), a7.augmentJob = (e7) => {
    t12 && (e7.flags |= 4), d7 && (e7.flags |= 2, u4 && (e7.id = u4.uid, e7.i = u4));
  };
  const f5 = function(e7, t13, n6 = t) {
    const { immediate: r12, deep: s7, once: o7, scheduler: i7, augmentJob: a8, call: l6 } = n6, reactiveGetter = /* @__PURE__ */ __name((e8) => s7 ? e8 : isShallow(e8) || false === s7 || 0 === s7 ? traverse(e8, 1) : traverse(e8), "reactiveGetter");
    let c5, u5, d8, f6, g4 = false, m5 = false;
    if (isRef2(e7) ? (u5 = /* @__PURE__ */ __name(() => e7.value, "u"), g4 = isShallow(e7)) : isReactive(e7) ? (u5 = /* @__PURE__ */ __name(() => reactiveGetter(e7), "u"), g4 = true) : i(e7) ? (m5 = true, g4 = e7.some((e8) => isReactive(e8) || isShallow(e8)), u5 = /* @__PURE__ */ __name(() => e7.map((e8) => isRef2(e8) ? e8.value : isReactive(e8) ? reactiveGetter(e8) : isFunction2(e8) ? l6 ? l6(e8, 2) : e8() : void 0), "u")) : u5 = isFunction2(e7) ? t13 ? l6 ? () => l6(e7, 2) : e7 : () => {
      if (d8) {
        pauseTracking();
        try {
          d8();
        } finally {
          resetTracking();
        }
      }
      const t14 = ct;
      ct = c5;
      try {
        return l6 ? l6(e7, 3, [f6]) : e7(f6);
      } finally {
        ct = t14;
      }
    } : NOOP, t13 && s7) {
      const e8 = u5, t14 = true === s7 ? 1 / 0 : s7;
      u5 = /* @__PURE__ */ __name(() => traverse(e8(), t14), "u");
    }
    const _3 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
      c5.stop(), _3 && _3.active && remove(_3.effects, c5);
    }, "watchHandle");
    if (o7 && t13) {
      const e8 = t13;
      t13 = /* @__PURE__ */ __name((...t14) => {
        e8(...t14), watchHandle();
      }, "t");
    }
    let C3 = m5 ? new Array(e7.length).fill(at) : at;
    const job = /* @__PURE__ */ __name((e8) => {
      if (1 & c5.flags && (c5.dirty || e8)) if (t13) {
        const e9 = c5.run();
        if (s7 || g4 || (m5 ? e9.some((e10, t14) => hasChanged(e10, C3[t14])) : hasChanged(e9, C3))) {
          d8 && d8();
          const n7 = ct;
          ct = c5;
          try {
            const n8 = [e9, C3 === at ? void 0 : m5 && C3[0] === at ? [] : C3, f6];
            C3 = e9, l6 ? l6(t13, 3, n8) : t13(...n8);
          } finally {
            ct = n7;
          }
        }
      } else c5.run();
    }, "job");
    return a8 && a8(job), c5 = new ReactiveEffect(u5), c5.scheduler = i7 ? () => i7(job, false) : job, f6 = /* @__PURE__ */ __name((e8) => onWatcherCleanup(e8, false, c5), "f"), d8 = c5.onStop = () => {
      const e8 = lt.get(c5);
      if (e8) {
        if (l6) l6(e8, 4);
        else for (const t14 of e8) t14();
        lt.delete(c5);
      }
    }, t13 ? r12 ? job(true) : C3 = c5.run() : i7 ? i7(job.bind(null, true), true) : c5.run(), watchHandle.pause = c5.pause.bind(c5), watchHandle.resume = c5.resume.bind(c5), watchHandle.stop = watchHandle, watchHandle;
  }(e6, t12, a7);
  return kn && (c4 ? c4.push(f5) : l5 && f5()), f5;
}
function instanceWatch(e6, t12, n5) {
  const r11 = this.proxy, s6 = isString2(e6) ? e6.includes(".") ? createPathGetter(r11, e6) : () => r11[e6] : e6.bind(r11, r11);
  let o6;
  isFunction2(t12) ? o6 = t12 : (o6 = t12.handler, n5 = t12);
  const i6 = setCurrentInstance(this), a7 = doWatch(s6, o6.bind(r11), n5);
  return i6(), a7;
}
function createPathGetter(e6, t12) {
  const n5 = t12.split(".");
  return () => {
    let t13 = e6;
    for (let e7 = 0; e7 < n5.length && t13; e7++) t13 = t13[n5[e7]];
    return t13;
  };
}
function emit2(e6, t12, ...n5) {
  if (e6.isUnmounted) return;
  const r11 = e6.vnode.props || t;
  let s6 = n5;
  const o6 = t12.startsWith("update:"), i6 = o6 && getModelModifiers(r11, t12.slice(7));
  let a7;
  i6 && (i6.trim && (s6 = n5.map((e7) => isString2(e7) ? e7.trim() : e7)), i6.number && (s6 = n5.map(looseToNumber)));
  let l5 = r11[a7 = u(t12)] || r11[a7 = u(p(t12))];
  !l5 && o6 && (l5 = r11[a7 = u(d(t12))]), l5 && callWithAsyncErrorHandling(l5, e6, 6, s6);
  const c4 = r11[a7 + "Once"];
  if (c4) {
    if (e6.emitted) {
      if (e6.emitted[a7]) return;
    } else e6.emitted = {};
    e6.emitted[a7] = true, callWithAsyncErrorHandling(c4, e6, 6, s6);
  }
}
function normalizeEmitsOptions(e6, t12, n5 = false) {
  const r11 = t12.emitsCache, s6 = r11.get(e6);
  if (void 0 !== s6) return s6;
  const o6 = e6.emits;
  let i6 = {}, a7 = false;
  if (!isFunction2(e6)) {
    const extendEmits = /* @__PURE__ */ __name((e7) => {
      const n6 = normalizeEmitsOptions(e7, t12, true);
      n6 && (a7 = true, n(i6, n6));
    }, "extendEmits");
    !n5 && t12.mixins.length && t12.mixins.forEach(extendEmits), e6.extends && extendEmits(e6.extends), e6.mixins && e6.mixins.forEach(extendEmits);
  }
  return o6 || a7 ? (i(o6) ? o6.forEach((e7) => i6[e7] = null) : n(i6, o6), isObject2(e6) && r11.set(e6, i6), i6) : (isObject2(e6) && r11.set(e6, null), null);
}
function isEmitListener(e6, t12) {
  return !(!e6 || !isOn(t12)) && (t12 = t12.slice(2).replace(/Once$/, ""), hasOwn(e6, t12[0].toLowerCase() + t12.slice(1)) || hasOwn(e6, d(t12)) || hasOwn(e6, t12));
}
function renderComponentRoot$1(e6) {
  const { type: t12, vnode: n5, proxy: r11, withProxy: s6, propsOptions: [o6], slots: i6, attrs: a7, emit: l5, render: c4, renderCache: u4, props: p4, data: d7, setupState: f5, ctx: g4, inheritAttrs: m5 } = e6, y4 = setCurrentRenderingInstance$1(e6);
  let v6, _3;
  try {
    if (4 & n5.shapeFlag) {
      const e7 = s6 || r11, t13 = e7;
      v6 = normalizeVNode$1(c4.call(t13, e7, u4, p4, f5, d7, g4)), _3 = a7;
    } else {
      const e7 = t12;
      0, v6 = normalizeVNode$1(e7.length > 1 ? e7(p4, { attrs: a7, slots: i6, emit: l5 }) : e7(p4, null)), _3 = t12.props ? a7 : getFunctionalFallthrough(a7);
    }
  } catch (t13) {
    dn.length = 0, handleError(t13, e6, 1), v6 = createVNode(un);
  }
  let b3 = v6;
  if (_3 && false !== m5) {
    const e7 = Object.keys(_3), { shapeFlag: t13 } = b3;
    e7.length && 7 & t13 && (o6 && e7.some(isModelListener) && (_3 = filterModelListeners(_3, o6)), b3 = cloneVNode(b3, _3, false, true));
  }
  return n5.dirs && (b3 = cloneVNode(b3, null, false, true), b3.dirs = b3.dirs ? b3.dirs.concat(n5.dirs) : n5.dirs), n5.transition && setTransitionHooks(b3, n5.transition), v6 = b3, setCurrentRenderingInstance$1(y4), v6;
}
function hasPropsChanged(e6, t12, n5) {
  const r11 = Object.keys(t12);
  if (r11.length !== Object.keys(e6).length) return true;
  for (let s6 = 0; s6 < r11.length; s6++) {
    const o6 = r11[s6];
    if (t12[o6] !== e6[o6] && !isEmitListener(n5, o6)) return true;
  }
  return false;
}
function updateHOCHostEl({ vnode: e6, parent: t12 }, n5) {
  for (; t12; ) {
    const r11 = t12.subTree;
    if (r11.suspense && r11.suspense.activeBranch === e6 && (r11.el = e6.el), r11 !== e6) break;
    (e6 = t12.vnode).el = n5, t12 = t12.parent;
  }
}
function triggerEvent(e6, t12) {
  const n5 = e6.props && e6.props[t12];
  isFunction2(n5) && n5();
}
function createSuspenseBoundary(e6, t12, n5, r11, s6, o6, i6, a7, l5, c4, u4 = false) {
  const { p: p4, m: d7, um: f5, n: g4, o: { parentNode: m5, remove: y4 } } = c4;
  let v6;
  const _3 = function(e7) {
    const t13 = e7.props && e7.props.suspensible;
    return null != t13 && false !== t13;
  }(e6);
  _3 && t12 && t12.pendingBranch && (v6 = t12.pendingId, t12.deps++);
  const b3 = e6.props ? toNumber(e6.props.timeout) : void 0, C3 = o6, k4 = { vnode: e6, parent: t12, parentComponent: n5, namespace: i6, container: r11, hiddenContainer: s6, deps: 0, pendingId: on3++, timeout: "number" == typeof b3 ? b3 : -1, activeBranch: null, pendingBranch: null, isInFallback: !u4, isHydrating: u4, isUnmounted: false, effects: [], resolve(e7 = false, n6 = false) {
    const { vnode: r12, activeBranch: s7, pendingBranch: i7, pendingId: a8, effects: l6, parentComponent: c5, container: u5 } = k4;
    let p5 = false;
    k4.isHydrating ? k4.isHydrating = false : e7 || (p5 = s7 && i7.transition && "out-in" === i7.transition.mode, p5 && (s7.transition.afterLeave = () => {
      a8 === k4.pendingId && (d7(i7, u5, o6 === C3 ? g4(s7) : o6, 0), queuePostFlushCb(l6));
    }), s7 && (m5(s7.el) === u5 && (o6 = g4(s7)), f5(s7, c5, k4, true)), p5 || d7(i7, u5, o6, 0)), setActiveBranch(k4, i7), k4.pendingBranch = null, k4.isInFallback = false;
    let y5 = k4.parent, b4 = false;
    for (; y5; ) {
      if (y5.pendingBranch) {
        y5.effects.push(...l6), b4 = true;
        break;
      }
      y5 = y5.parent;
    }
    b4 || p5 || queuePostFlushCb(l6), k4.effects = [], _3 && t12 && t12.pendingBranch && v6 === t12.pendingId && (t12.deps--, 0 !== t12.deps || n6 || t12.resolve()), triggerEvent(r12, "onResolve");
  }, fallback(e7) {
    if (!k4.pendingBranch) return;
    const { vnode: t13, activeBranch: n6, parentComponent: r12, container: s7, namespace: o7 } = k4;
    triggerEvent(t13, "onFallback");
    const i7 = g4(n6), mountFallback = /* @__PURE__ */ __name(() => {
      k4.isInFallback && (p4(null, e7, s7, i7, r12, null, o7, a7, l5), setActiveBranch(k4, e7));
    }, "mountFallback"), c5 = e7.transition && "out-in" === e7.transition.mode;
    c5 && (n6.transition.afterLeave = mountFallback), k4.isInFallback = true, f5(n6, r12, null, true), c5 || mountFallback();
  }, move(e7, t13, n6) {
    k4.activeBranch && d7(k4.activeBranch, e7, t13, n6), k4.container = e7;
  }, next: /* @__PURE__ */ __name(() => k4.activeBranch && g4(k4.activeBranch), "next"), registerDep(e7, t13, n6) {
    const r12 = !!k4.pendingBranch;
    r12 && k4.deps++;
    const s7 = e7.vnode.el;
    e7.asyncDep.catch((t14) => {
      handleError(t14, e7, 0);
    }).then((o7) => {
      if (e7.isUnmounted || k4.isUnmounted || k4.pendingId !== e7.suspenseId) return;
      e7.asyncResolved = true;
      const { vnode: a8 } = e7;
      handleSetupResult(e7, o7, false), s7 && (a8.el = s7);
      const l6 = !s7 && e7.subTree.el;
      t13(e7, a8, m5(s7 || e7.subTree.el), s7 ? null : g4(e7.subTree), k4, i6, n6), l6 && y4(l6), updateHOCHostEl(e7, a8.el), r12 && 0 === --k4.deps && k4.resolve();
    });
  }, unmount(e7, t13) {
    k4.isUnmounted = true, k4.activeBranch && f5(k4.activeBranch, n5, e7, t13), k4.pendingBranch && f5(k4.pendingBranch, n5, e7, t13);
  } };
  return k4;
}
function normalizeSuspenseSlot(e6) {
  let t12;
  if (isFunction2(e6)) {
    const n5 = hn && e6._c;
    n5 && (e6._d = false, openBlock()), e6 = e6(), n5 && (e6._d = true, t12 = fn, closeBlock());
  }
  if (i(e6)) {
    const t13 = function(e7) {
      let t14;
      for (let n5 = 0; n5 < e7.length; n5++) {
        const r11 = e7[n5];
        if (!isVNode$2(r11)) return;
        if (r11.type !== un || "v-if" === r11.children) {
          if (t14) return;
          t14 = r11;
        }
      }
      return t14;
    }(e6);
    e6 = t13;
  }
  return e6 = normalizeVNode$1(e6), t12 && !e6.dynamicChildren && (e6.dynamicChildren = t12.filter((t13) => t13 !== e6)), e6;
}
function queueEffectWithSuspense(e6, t12) {
  t12 && t12.pendingBranch ? i(e6) ? t12.effects.push(...e6) : t12.effects.push(e6) : queuePostFlushCb(e6);
}
function setActiveBranch(e6, t12) {
  e6.activeBranch = t12;
  const { vnode: n5, parentComponent: r11 } = e6;
  let s6 = t12.el;
  for (; !s6 && t12.component; ) s6 = (t12 = t12.component.subTree).el;
  n5.el = s6, r11 && r11.subTree === n5 && (r11.vnode.el = s6, updateHOCHostEl(r11, s6));
}
function openBlock(e6 = false) {
  dn.push(fn = e6 ? null : []);
}
function closeBlock() {
  dn.pop(), fn = dn[dn.length - 1] || null;
}
function setBlockTracking(e6, t12 = false) {
  hn += e6, e6 < 0 && fn && t12 && (fn.hasOnce = true);
}
function setupBlock(e6) {
  return e6.dynamicChildren = hn > 0 ? fn || a : null, closeBlock(), hn > 0 && fn && fn.push(e6), e6;
}
function createBlock(e6, t12, n5, r11, s6) {
  return setupBlock(createVNode(e6, t12, n5, r11, s6, true));
}
function isVNode$2(e6) {
  return !!e6 && true === e6.__v_isVNode;
}
function isSameVNodeType(e6, t12) {
  return e6.type === t12.type && e6.key === t12.key;
}
function createBaseVNode(e6, t12 = null, n5 = null, r11 = 0, s6 = null, o6 = e6 === ln ? 0 : 1, i6 = false, a7 = false) {
  const l5 = { __v_isVNode: true, __v_skip: true, type: e6, props: t12, key: t12 && normalizeKey(t12), ref: t12 && normalizeRef(t12), scopeId: kt, slotScopeIds: null, children: n5, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o6, patchFlag: r11, dynamicProps: s6, dynamicChildren: null, appContext: null, ctx: Ct };
  return a7 ? (normalizeChildren(l5, n5), 128 & o6 && e6.normalize(l5)) : n5 && (l5.shapeFlag |= isString2(n5) ? 8 : 16), hn > 0 && !i6 && fn && (l5.patchFlag > 0 || 6 & o6) && 32 !== l5.patchFlag && fn.push(l5), l5;
}
function guardReactiveProps(e6) {
  return e6 ? isProxy(e6) || isInternalObject(e6) ? n({}, e6) : e6 : null;
}
function cloneVNode(e6, t12, n5 = false, r11 = false) {
  const { props: s6, ref: o6, patchFlag: i6, children: a7, transition: l5 } = e6, c4 = t12 ? mergeProps(s6 || {}, t12) : s6, u4 = { __v_isVNode: true, __v_skip: true, type: e6.type, props: c4, key: c4 && normalizeKey(c4), ref: t12 && t12.ref ? n5 && o6 ? i(o6) ? o6.concat(normalizeRef(t12)) : [o6, normalizeRef(t12)] : normalizeRef(t12) : o6, scopeId: e6.scopeId, slotScopeIds: e6.slotScopeIds, children: a7, target: e6.target, targetStart: e6.targetStart, targetAnchor: e6.targetAnchor, staticCount: e6.staticCount, shapeFlag: e6.shapeFlag, patchFlag: t12 && e6.type !== ln ? -1 === i6 ? 16 : 16 | i6 : i6, dynamicProps: e6.dynamicProps, dynamicChildren: e6.dynamicChildren, appContext: e6.appContext, dirs: e6.dirs, transition: l5, component: e6.component, suspense: e6.suspense, ssContent: e6.ssContent && cloneVNode(e6.ssContent), ssFallback: e6.ssFallback && cloneVNode(e6.ssFallback), el: e6.el, anchor: e6.anchor, ctx: e6.ctx, ce: e6.ce };
  return l5 && r11 && setTransitionHooks(u4, l5.clone(u4)), u4;
}
function createTextVNode(e6 = " ", t12 = 0) {
  return createVNode(cn, null, e6, t12);
}
function normalizeVNode$1(e6) {
  return null == e6 || "boolean" == typeof e6 ? createVNode(un) : i(e6) ? createVNode(ln, null, e6.slice()) : isVNode$2(e6) ? cloneIfMounted(e6) : createVNode(cn, null, String(e6));
}
function cloneIfMounted(e6) {
  return null === e6.el && -1 !== e6.patchFlag || e6.memo ? e6 : cloneVNode(e6);
}
function normalizeChildren(e6, t12) {
  let n5 = 0;
  const { shapeFlag: r11 } = e6;
  if (null == t12) t12 = null;
  else if (i(t12)) n5 = 16;
  else if ("object" == typeof t12) {
    if (65 & r11) {
      const n6 = t12.default;
      return void (n6 && (n6._c && (n6._d = false), normalizeChildren(e6, n6()), n6._c && (n6._d = true)));
    }
    {
      n5 = 32;
      const r12 = t12._;
      r12 || isInternalObject(t12) ? 3 === r12 && Ct && (1 === Ct.slots._ ? t12._ = 1 : (t12._ = 2, e6.patchFlag |= 1024)) : t12._ctx = Ct;
    }
  } else isFunction2(t12) ? (t12 = { default: t12, _ctx: Ct }, n5 = 32) : (t12 = String(t12), 64 & r11 ? (n5 = 16, t12 = [createTextVNode(t12)]) : n5 = 8);
  e6.children = t12, e6.shapeFlag |= n5;
}
function mergeProps(...e6) {
  const t12 = {};
  for (let n5 = 0; n5 < e6.length; n5++) {
    const r11 = e6[n5];
    for (const e7 in r11) if ("class" === e7) t12.class !== r11.class && (t12.class = normalizeClass([t12.class, r11.class]));
    else if ("style" === e7) t12.style = normalizeStyle([t12.style, r11.style]);
    else if (isOn(e7)) {
      const n6 = t12[e7], s6 = r11[e7];
      !s6 || n6 === s6 || i(n6) && n6.includes(s6) || (t12[e7] = n6 ? [].concat(n6, s6) : s6);
    } else "" !== e7 && (t12[e7] = r11[e7]);
  }
  return t12;
}
function invokeVNodeHook(e6, t12, n5, r11 = null) {
  callWithAsyncErrorHandling(e6, t12, 7, [n5, r11]);
}
function createComponentInstance$1(e6, t12, n5) {
  const r11 = e6.type, s6 = (t12 ? t12.appContext : e6.appContext) || gn, o6 = { uid: mn++, vnode: e6, type: r11, parent: t12, appContext: s6, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t12 ? t12.provides : Object.create(s6.provides), ids: t12 ? t12.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r11, s6), emitsOptions: normalizeEmitsOptions(r11, s6), emit: null, emitted: null, propsDefaults: t, inheritAttrs: r11.inheritAttrs, ctx: t, data: t, props: t, attrs: t, slots: t, refs: t, setupState: t, setupContext: null, suspense: n5, suspenseId: n5 ? n5.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o6.ctx = { _: o6 }, o6.root = t12 ? t12.root : o6, o6.emit = emit2.bind(null, o6), e6.ce && e6.ce(o6), o6;
}
function isStatefulComponent(e6) {
  return 4 & e6.vnode.shapeFlag;
}
function setupComponent$1(e6, t12 = false, n5 = false) {
  t12 && _n2(t12);
  const { props: r11, children: s6 } = e6.vnode, o6 = isStatefulComponent(e6);
  !function(e7, t13, n6, r12 = false) {
    const s7 = {}, o7 = createInternalObject();
    e7.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e7, t13, s7, o7);
    for (const t14 in e7.propsOptions[0]) t14 in s7 || (s7[t14] = void 0);
    n6 ? e7.props = r12 ? s7 : shallowReactive(s7) : e7.type.props ? e7.props = s7 : e7.props = o7, e7.attrs = o7;
  }(e6, r11, o6, t12), ((e7, t13, n6) => {
    const r12 = e7.slots = createInternalObject();
    if (32 & e7.vnode.shapeFlag) {
      const e8 = t13.__;
      e8 && def(r12, "__", e8, true);
      const s7 = t13._;
      s7 ? (assignSlots(r12, t13, n6), n6 && def(r12, "_", s7, true)) : normalizeObjectSlots(t13, r12);
    } else t13 && normalizeVNodeSlots(e7, t13);
  })(e6, s6, n5 || t12);
  const i6 = o6 ? function(e7, t13) {
    const n6 = e7.type;
    e7.accessCache = /* @__PURE__ */ Object.create(null), e7.proxy = new Proxy(e7.ctx, Gt);
    const { setup: r12 } = n6;
    if (r12) {
      pauseTracking();
      const n7 = e7.setupContext = r12.length > 1 ? createSetupContext(e7) : null, s7 = setCurrentInstance(e7), o7 = callWithErrorHandling(r12, e7, 0, [e7.props, n7]), i7 = isPromise(o7);
      if (resetTracking(), s7(), !i7 && !e7.sp || isAsyncWrapper(e7) || markAsyncBoundary(e7), i7) {
        if (o7.then(unsetCurrentInstance, unsetCurrentInstance), t13) return o7.then((n8) => {
          handleSetupResult(e7, n8, t13);
        }).catch((t14) => {
          handleError(t14, e7, 0);
        });
        e7.asyncDep = o7;
      } else handleSetupResult(e7, o7, t13);
    } else finishComponentSetup(e7, t13);
  }(e6, t12) : void 0;
  return t12 && _n2(false), i6;
}
function handleSetupResult(e6, t12, n5) {
  isFunction2(t12) ? e6.type.__ssrInlineRender ? e6.ssrRender = t12 : e6.render = t12 : isObject2(t12) && (e6.setupState = proxyRefs(t12)), finishComponentSetup(e6, n5);
}
function finishComponentSetup(e6, t12, n5) {
  const r11 = e6.type;
  if (!e6.render) {
    if (!t12 && bn && !r11.render) {
      const t13 = r11.template || resolveMergedOptions(e6).template;
      if (t13) {
        const { isCustomElement: n6, compilerOptions: s6 } = e6.appContext.config, { delimiters: o6, compilerOptions: i6 } = r11, a7 = n(n({ isCustomElement: n6, delimiters: o6 }, s6), i6);
        r11.render = bn(t13, a7);
      }
    }
    e6.render = r11.render || NOOP, Cn && Cn(e6);
  }
  {
    const t13 = setCurrentInstance(e6);
    pauseTracking();
    try {
      applyOptions(e6);
    } finally {
      resetTracking(), t13();
    }
  }
}
function createSetupContext(e6) {
  const expose = /* @__PURE__ */ __name((t12) => {
    e6.exposed = t12 || {};
  }, "expose");
  return { attrs: new Proxy(e6.attrs, Sn2), slots: e6.slots, emit: e6.emit, expose };
}
function getComponentPublicInstance(e6) {
  return e6.exposed ? e6.exposeProxy || (e6.exposeProxy = new Proxy(proxyRefs(markRaw(e6.exposed)), { get: /* @__PURE__ */ __name((t12, n5) => n5 in t12 ? t12[n5] : n5 in Jt ? Jt[n5](e6) : void 0, "get"), has: /* @__PURE__ */ __name((e7, t12) => t12 in e7 || t12 in Jt, "has") })) : e6.proxy;
}
function getComponentName(e6, t12 = true) {
  return isFunction2(e6) ? e6.displayName || e6.name : e6.name || t12 && e6.__name;
}
function h4(e6, t12, n5) {
  const r11 = arguments.length;
  return 2 === r11 ? isObject2(t12) && !i(t12) ? isVNode$2(t12) ? createVNode(e6, null, [t12]) : createVNode(e6, t12) : createVNode(e6, null, t12) : (r11 > 3 ? n5 = Array.prototype.slice.call(arguments, 2) : 3 === r11 && isVNode$2(n5) && (n5 = [n5]), createVNode(e6, t12, n5));
}
function isMemoSame(e6, t12) {
  const n5 = e6.memo;
  if (n5.length != t12.length) return false;
  for (let e7 = 0; e7 < n5.length; e7++) if (hasChanged(n5[e7], t12[e7])) return false;
  return hn > 0 && fn && fn.push(e6), true;
}
function resolveTransitionProps(e6) {
  const t12 = {};
  for (const n6 in e6) n6 in Vn || (t12[n6] = e6[n6]);
  if (false === e6.css) return t12;
  const { name: n5 = "v", type: r11, duration: s6, enterFromClass: o6 = `${n5}-enter-from`, enterActiveClass: i6 = `${n5}-enter-active`, enterToClass: a7 = `${n5}-enter-to`, appearFromClass: l5 = o6, appearActiveClass: c4 = i6, appearToClass: u4 = a7, leaveFromClass: p4 = `${n5}-leave-from`, leaveActiveClass: f5 = `${n5}-leave-active`, leaveToClass: g4 = `${n5}-leave-to` } = e6, m5 = function(e7) {
    if (null == e7) return null;
    if (isObject2(e7)) return [NumberOf(e7.enter), NumberOf(e7.leave)];
    {
      const t13 = NumberOf(e7);
      return [t13, t13];
    }
  }(s6), y4 = m5 && m5[0], v6 = m5 && m5[1], { onBeforeEnter: _3, onEnter: b3, onEnterCancelled: C3, onLeave: S3, onLeaveCancelled: w4, onBeforeAppear: R3 = _3, onAppear: T3 = b3, onAppearCancelled: A4 = C3 } = t12, finishEnter = /* @__PURE__ */ __name((e7, t13, n6, r12) => {
    e7._enterCancelled = r12, removeTransitionClass(e7, t13 ? u4 : a7), removeTransitionClass(e7, t13 ? c4 : i6), n6 && n6();
  }, "finishEnter"), finishLeave = /* @__PURE__ */ __name((e7, t13) => {
    e7._isLeaving = false, removeTransitionClass(e7, p4), removeTransitionClass(e7, g4), removeTransitionClass(e7, f5), t13 && t13();
  }, "finishLeave"), makeEnterHook = /* @__PURE__ */ __name((e7) => (t13, n6) => {
    const s7 = e7 ? T3 : b3, resolve2 = /* @__PURE__ */ __name(() => finishEnter(t13, e7, n6), "resolve");
    callHook(s7, [t13, resolve2]), nextFrame(() => {
      removeTransitionClass(t13, e7 ? l5 : o6), addTransitionClass(t13, e7 ? u4 : a7), hasExplicitCallback(s7) || whenTransitionEnds(t13, r11, y4, resolve2);
    });
  }, "makeEnterHook");
  return n(t12, { onBeforeEnter(e7) {
    callHook(_3, [e7]), addTransitionClass(e7, o6), addTransitionClass(e7, i6);
  }, onBeforeAppear(e7) {
    callHook(R3, [e7]), addTransitionClass(e7, l5), addTransitionClass(e7, c4);
  }, onEnter: makeEnterHook(false), onAppear: makeEnterHook(true), onLeave(e7, t13) {
    e7._isLeaving = true;
    const resolve2 = /* @__PURE__ */ __name(() => finishLeave(e7, t13), "resolve");
    addTransitionClass(e7, p4), e7._enterCancelled ? (addTransitionClass(e7, f5), forceReflow()) : (forceReflow(), addTransitionClass(e7, f5)), nextFrame(() => {
      e7._isLeaving && (removeTransitionClass(e7, p4), addTransitionClass(e7, g4), hasExplicitCallback(S3) || whenTransitionEnds(e7, r11, v6, resolve2));
    }), callHook(S3, [e7, resolve2]);
  }, onEnterCancelled(e7) {
    finishEnter(e7, false, void 0, true), callHook(C3, [e7]);
  }, onAppearCancelled(e7) {
    finishEnter(e7, true, void 0, true), callHook(A4, [e7]);
  }, onLeaveCancelled(e7) {
    finishLeave(e7), callHook(w4, [e7]);
  } });
}
function NumberOf(e6) {
  return toNumber(e6);
}
function addTransitionClass(e6, t12) {
  t12.split(/\s+/).forEach((t13) => t13 && e6.classList.add(t13)), (e6[Hn] || (e6[Hn] = /* @__PURE__ */ new Set())).add(t12);
}
function removeTransitionClass(e6, t12) {
  t12.split(/\s+/).forEach((t13) => t13 && e6.classList.remove(t13));
  const n5 = e6[Hn];
  n5 && (n5.delete(t12), n5.size || (e6[Hn] = void 0));
}
function nextFrame(e6) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e6);
  });
}
function whenTransitionEnds(e6, t12, n5, r11) {
  const s6 = e6._endId = ++In, resolveIfNotStale = /* @__PURE__ */ __name(() => {
    s6 === e6._endId && r11();
  }, "resolveIfNotStale");
  if (null != n5) return setTimeout(resolveIfNotStale, n5);
  const { type: o6, timeout: i6, propCount: a7 } = getTransitionInfo(e6, t12);
  if (!o6) return r11();
  const l5 = o6 + "end";
  let c4 = 0;
  const end = /* @__PURE__ */ __name(() => {
    e6.removeEventListener(l5, onEnd), resolveIfNotStale();
  }, "end"), onEnd = /* @__PURE__ */ __name((t13) => {
    t13.target === e6 && ++c4 >= a7 && end();
  }, "onEnd");
  setTimeout(() => {
    c4 < a7 && end();
  }, i6 + 1), e6.addEventListener(l5, onEnd);
}
function getTransitionInfo(e6, t12) {
  const n5 = window.getComputedStyle(e6), getStyleProperties = /* @__PURE__ */ __name((e7) => (n5[e7] || "").split(", "), "getStyleProperties"), r11 = getStyleProperties(`${Nn}Delay`), s6 = getStyleProperties(`${Nn}Duration`), o6 = getTimeout(r11, s6), i6 = getStyleProperties(`${$n}Delay`), a7 = getStyleProperties(`${$n}Duration`), l5 = getTimeout(i6, a7);
  let c4 = null, u4 = 0, p4 = 0;
  t12 === Nn ? o6 > 0 && (c4 = Nn, u4 = o6, p4 = s6.length) : t12 === $n ? l5 > 0 && (c4 = $n, u4 = l5, p4 = a7.length) : (u4 = Math.max(o6, l5), c4 = u4 > 0 ? o6 > l5 ? Nn : $n : null, p4 = c4 ? c4 === Nn ? s6.length : a7.length : 0);
  return { type: c4, timeout: u4, propCount: p4, hasTransform: c4 === Nn && /\b(transform|all)(,|$)/.test(getStyleProperties(`${Nn}Property`).toString()) };
}
function getTimeout(e6, t12) {
  for (; e6.length < t12.length; ) e6 = e6.concat(e6);
  return Math.max(...t12.map((t13, n5) => toMs(t13) + toMs(e6[n5])));
}
function toMs(e6) {
  return "auto" === e6 ? 0 : 1e3 * Number(e6.slice(0, -1).replace(",", "."));
}
function forceReflow() {
  return document.body.offsetHeight;
}
function setDisplay(e6, t12) {
  e6.style.display = t12 ? e6[Ln] : "none", e6[Dn] = !t12;
}
function setVarsOnVNode(e6, t12) {
  if (128 & e6.shapeFlag) {
    const n5 = e6.suspense;
    e6 = n5.activeBranch, n5.pendingBranch && !n5.isHydrating && n5.effects.push(() => {
      setVarsOnVNode(n5.activeBranch, t12);
    });
  }
  for (; e6.component; ) e6 = e6.component.subTree;
  if (1 & e6.shapeFlag && e6.el) setVarsOnNode(e6.el, t12);
  else if (e6.type === ln) e6.children.forEach((e7) => setVarsOnVNode(e7, t12));
  else if (e6.type === pn2) {
    let { el: n5, anchor: r11 } = e6;
    for (; n5 && (setVarsOnNode(n5, t12), n5 !== r11); ) n5 = n5.nextSibling;
  }
}
function setVarsOnNode(e6, t12) {
  if (1 === e6.nodeType) {
    const n5 = e6.style;
    let r11 = "";
    for (const e7 in t12) n5.setProperty(`--${e7}`, t12[e7]), r11 += `--${e7}: ${t12[e7]};`;
    n5[Fn] = r11;
  }
}
function setStyle(e6, t12, n5) {
  if (i(n5)) n5.forEach((n6) => setStyle(e6, t12, n6));
  else if (null == n5 && (n5 = ""), t12.startsWith("--")) e6.setProperty(t12, n5);
  else {
    const r11 = function(e7, t13) {
      const n6 = qn[t13];
      if (n6) return n6;
      let r12 = p(t13);
      if ("filter" !== r12 && r12 in e7) return qn[t13] = r12;
      r12 = f(r12);
      for (let n7 = 0; n7 < zn.length; n7++) {
        const s6 = zn[n7] + r12;
        if (s6 in e7) return qn[t13] = s6;
      }
      return t13;
    }(e6, t12);
    Wn.test(n5) ? e6.setProperty(d(r11), n5.replace(Wn, ""), "important") : e6[r11] = n5;
  }
}
function patchAttr(e6, t12, n5, r11, s6, o6 = v(t12)) {
  r11 && t12.startsWith("xlink:") ? null == n5 ? e6.removeAttributeNS(Kn, t12.slice(6, t12.length)) : e6.setAttributeNS(Kn, t12, n5) : null == n5 || o6 && !includeBooleanAttr(n5) ? e6.removeAttribute(t12) : e6.setAttribute(t12, o6 ? "" : isSymbol2(n5) ? String(n5) : n5);
}
function patchDOMProp(e6, t12, n5, r11, s6) {
  if ("innerHTML" === t12 || "textContent" === t12) return void (null != n5 && (e6[t12] = n5));
  const o6 = e6.tagName;
  if ("value" === t12 && "PROGRESS" !== o6 && !o6.includes("-")) {
    const r12 = "OPTION" === o6 ? e6.getAttribute("value") || "" : e6.value, s7 = null == n5 ? "checkbox" === e6.type ? "on" : "" : String(n5);
    return r12 === s7 && "_value" in e6 || (e6.value = s7), null == n5 && e6.removeAttribute(t12), void (e6._value = n5);
  }
  let i6 = false;
  if ("" === n5 || null == n5) {
    const r12 = typeof e6[t12];
    "boolean" === r12 ? n5 = includeBooleanAttr(n5) : null == n5 && "string" === r12 ? (n5 = "", i6 = true) : "number" === r12 && (n5 = 0, i6 = true);
  }
  try {
    e6[t12] = n5;
  } catch (e7) {
  }
  i6 && e6.removeAttribute(s6 || t12);
}
function addEventListener(e6, t12, n5, r11) {
  e6.addEventListener(t12, n5, r11);
}
function patchEvent(e6, t12, n5, r11, s6 = null) {
  const o6 = e6[Jn] || (e6[Jn] = {}), i6 = o6[t12];
  if (r11 && i6) i6.value = r11;
  else {
    const [n6, a7] = function(e7) {
      let t13;
      if (Gn.test(e7)) {
        let n8;
        for (t13 = {}; n8 = e7.match(Gn); ) e7 = e7.slice(0, e7.length - n8[0].length), t13[n8[0].toLowerCase()] = true;
      }
      const n7 = ":" === e7[2] ? e7.slice(3) : d(e7.slice(2));
      return [n7, t13];
    }(t12);
    if (r11) {
      const i7 = o6[t12] = function(e7, t13) {
        const invoker = /* @__PURE__ */ __name((e8) => {
          if (e8._vts) {
            if (e8._vts <= invoker.attached) return;
          } else e8._vts = Date.now();
          callWithAsyncErrorHandling(function(e9, t14) {
            if (i(t14)) {
              const n7 = e9.stopImmediatePropagation;
              return e9.stopImmediatePropagation = () => {
                n7.call(e9), e9._stopped = true;
              }, t14.map((e10) => (t15) => !t15._stopped && e10 && e10(t15));
            }
            return t14;
          }(e8, invoker.value), t13, 5, [e8]);
        }, "invoker");
        return invoker.value = e7, invoker.attached = getNow(), invoker;
      }(r11, s6);
      addEventListener(e6, n6, i7, a7);
    } else i6 && (!function(e7, t13, n7, r12) {
      e7.removeEventListener(t13, n7, r12);
    }(e6, n6, i6, a7), o6[t12] = void 0);
  }
}
function defineCustomElement(e6, t12, n5) {
  const r11 = defineComponent(e6, t12);
  isPlainObject(r11) && n(r11, t12);
  class VueCustomElement extends VueElement {
    static {
      __name(this, "VueCustomElement");
    }
    constructor(e7) {
      super(r11, e7, n5);
    }
  }
  return VueCustomElement.def = r11, VueCustomElement;
}
function useHost(e6) {
  const t12 = getCurrentInstance(), n5 = t12 && t12.ce;
  return n5 || null;
}
function callPendingCbs(e6) {
  const t12 = e6.el;
  t12[nr] && t12[nr](), t12[rr2] && t12[rr2]();
}
function recordPosition(e6) {
  tr.set(e6, e6.el.getBoundingClientRect());
}
function applyTranslation(e6) {
  const t12 = er.get(e6), n5 = tr.get(e6), r11 = t12.left - n5.left, s6 = t12.top - n5.top;
  if (r11 || s6) {
    const t13 = e6.el.style;
    return t13.transform = t13.webkitTransform = `translate(${r11}px,${s6}px)`, t13.transitionDuration = "0s", e6;
  }
}
function onCompositionStart(e6) {
  e6.target.composing = true;
}
function onCompositionEnd(e6) {
  const t12 = e6.target;
  t12.composing && (t12.composing = false, t12.dispatchEvent(new Event("input")));
}
function setChecked(e6, { value: t12, oldValue: n5 }, r11) {
  let s6;
  if (e6._modelValue = t12, i(t12)) s6 = looseIndexOf(t12, r11.props.value) > -1;
  else if (isSet(t12)) s6 = t12.has(r11.props.value);
  else {
    if (t12 === n5) return;
    s6 = looseEqual(t12, getCheckboxValue(e6, true));
  }
  e6.checked !== s6 && (e6.checked = s6);
}
function setSelected(e6, t12) {
  const n5 = e6.multiple, r11 = i(t12);
  if (!n5 || r11 || isSet(t12)) {
    for (let s6 = 0, o6 = e6.options.length; s6 < o6; s6++) {
      const o7 = e6.options[s6], i6 = getValue(o7);
      if (n5) if (r11) {
        const e7 = typeof i6;
        o7.selected = "string" === e7 || "number" === e7 ? t12.some((e8) => String(e8) === String(i6)) : looseIndexOf(t12, i6) > -1;
      } else o7.selected = t12.has(i6);
      else if (looseEqual(getValue(o7), t12)) return void (e6.selectedIndex !== s6 && (e6.selectedIndex = s6));
    }
    n5 || -1 === e6.selectedIndex || (e6.selectedIndex = -1);
  }
}
function getValue(e6) {
  return "_value" in e6 ? e6._value : e6.value;
}
function getCheckboxValue(e6, t12) {
  const n5 = t12 ? "_trueValue" : "_falseValue";
  return n5 in e6 ? e6[n5] : t12;
}
function resolveDynamicModel(e6, t12) {
  switch (e6) {
    case "SELECT":
      return cr;
    case "TEXTAREA":
      return ir;
    default:
      switch (t12) {
        case "checkbox":
          return ar3;
        case "radio":
          return lr;
        default:
          return ir;
      }
  }
}
function callModelHook(e6, t12, n5, r11, s6) {
  const o6 = resolveDynamicModel(e6.tagName, n5.props && n5.props.type)[s6];
  o6 && o6(e6, t12, n5, r11);
}
function ensureRenderer() {
  return gr2 || (gr2 = createRenderer(hr));
}
function ensureHydrationRenderer() {
  return gr2 = mr ? gr2 : createHydrationRenderer(hr), mr = true, gr2;
}
function resolveRootNamespace(e6) {
  return e6 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e6 instanceof MathMLElement ? "mathml" : void 0;
}
function normalizeContainer(e6) {
  if (isString2(e6)) {
    return document.querySelector(e6);
  }
  return e6;
}
function useHead(e6, t12 = {}) {
  const n5 = t12.head || function() {
    if (hasInjectionContext()) {
      const e7 = inject(_r);
      if (!e7) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e7;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }();
  return n5.ssr ? n5.push(e6 || {}, t12) : function(e7, t13, n6 = {}) {
    const r11 = ref(false);
    let s6;
    watchEffect(() => {
      const o6 = r11.value ? {} : walkResolver(t13, VueResolver);
      s6 ? s6.patch(o6) : s6 = e7.push(o6, n6);
    });
    getCurrentInstance() && (Bt(() => {
      s6.dispose();
    }), onDeactivated(() => {
      r11.value = true;
    }), onActivated(() => {
      r11.value = false;
    }));
    return s6;
  }(n5, e6, t12);
}
function createHead(e6 = {}) {
  const t12 = function(e7 = {}) {
    const t13 = createUnhead({ ...e7, document: false, propResolvers: [...e7.propResolvers || [], (e8, t14) => e8 && e8.startsWith("on") && "function" == typeof t14 ? `this.dataset.${e8}fired = true` : t14], init: [e7.disableDefaults ? void 0 : { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] }, ...e7.init || []] });
    return t13._ssrPayload = {}, t13.use({ key: "server", hooks: { "tags:resolve": /* @__PURE__ */ __name(function(e8) {
      const n5 = e8.tagMap.get("title"), r11 = e8.tagMap.get("titleTemplate");
      let s6 = { title: "server" === n5?.mode ? t13._title : void 0, titleTemplate: "server" === r11?.mode ? t13._titleTemplate : void 0 };
      Object.keys(t13._ssrPayload || {}).length > 0 && (s6 = { ...t13._ssrPayload, ...s6 }), Object.values(s6).some(Boolean) && e8.tags.push({ tag: "script", innerHTML: JSON.stringify(s6), props: { id: "unhead:payload", type: "application/json" } });
    }, "tags:resolve") } }), t13;
  }({ ...e6, propResolvers: [VueResolver] });
  return t12.install = function(e7) {
    return { install(t13) {
      t13.config.globalProperties.$unhead = e7, t13.config.globalProperties.$head = e7, t13.provide(_r, e7);
    } }.install;
  }(t12), t12;
}
function ssrRenderAttrs(e6, t12) {
  let n5 = "";
  for (const r11 in e6) {
    if (br(r11) || isOn(r11) || "textarea" === t12 && "value" === r11) continue;
    const s6 = e6[r11];
    n5 += "class" === r11 ? ` class="${ssrRenderClass(s6)}"` : "style" === r11 ? ` style="${ssrRenderStyle(s6)}"` : "className" === r11 ? ` class="${String(s6)}"` : ssrRenderDynamicAttr(r11, s6, t12);
  }
  return n5;
}
function ssrRenderDynamicAttr(e6, t12, n5) {
  if (!isRenderableAttrValue(t12)) return "";
  const r11 = n5 && (n5.indexOf("-") > 0 || O(n5)) ? e6 : P[e6] || e6.toLowerCase();
  return R(r11) ? includeBooleanAttr(t12) ? ` ${r11}` : "" : isSSRSafeAttrName(r11) ? "" === t12 ? ` ${r11}` : ` ${r11}="${escapeHtml(t12)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r11}`), "");
}
function ssrRenderAttr(e6, t12) {
  return isRenderableAttrValue(t12) ? ` ${e6}="${escapeHtml(t12)}"` : "";
}
function ssrRenderClass(e6) {
  return escapeHtml(normalizeClass(e6));
}
function ssrRenderStyle(e6) {
  if (!e6) return "";
  if (isString2(e6)) return escapeHtml(e6);
  const t12 = normalizeStyle(e6);
  return escapeHtml(stringifyStyle(t12));
}
function ssrRenderComponent(e6, t12 = null, n5 = null, r11 = null, s6) {
  return renderComponentVNode(createVNode(e6, t12, n5), r11, s6);
}
function ssrRenderSlot(e6, t12, n5, r11, s6, o6, i6) {
  s6("<!--[-->"), function(e7, t13, n6, r12, s7, o7, i7) {
    const a7 = e7[t13];
    if (a7) {
      const e8 = [], t14 = a7(n6, (t15) => {
        e8.push(t15);
      }, o7, "");
      if (i(t14)) {
        const e9 = Cr(t14);
        e9 && renderVNodeChildren(s7, e9, o7, i7);
      } else {
        let t15 = true;
        for (let n7 = 0; n7 < e8.length; n7++) if (!isComment(e8[n7])) {
          t15 = false;
          break;
        }
        if (t15) ;
        else {
          let t16 = 0, n7 = e8.length;
          for (let r13 = t16; r13 < n7; r13++) s7(e8[r13]);
        }
      }
    }
  }(e6, t12, n5, 0, s6, o6, i6), s6("<!--]-->");
}
function isComment(e6) {
  return !("string" != typeof e6 || !kr.test(e6)) && (e6.length <= 8 || !e6.replace(Sr2, "").trim());
}
function ssrInterpolate(e6) {
  return escapeHtml(toDisplayString(e6));
}
function ssrRenderList(e6, t12) {
  if (i(e6) || isString2(e6)) for (let n5 = 0, r11 = e6.length; n5 < r11; n5++) t12(e6[n5], n5);
  else if ("number" == typeof e6) for (let n5 = 0; n5 < e6; n5++) t12(n5 + 1, n5);
  else if (isObject2(e6)) if (e6[Symbol.iterator]) {
    const n5 = Array.from(e6);
    for (let e7 = 0, r11 = n5.length; e7 < r11; e7++) t12(n5[e7], e7);
  } else {
    const n5 = Object.keys(e6);
    for (let r11 = 0, s6 = n5.length; r11 < s6; r11++) {
      const s7 = n5[r11];
      t12(e6[s7], s7, r11);
    }
  }
}
async function ssrRenderSuspense(e6, { default: t12 }) {
  t12 ? t12() : e6("<!---->");
}
function createBuffer() {
  let e6 = false;
  const t12 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t12, "getBuffer"), push(n5) {
    const r11 = isString2(n5);
    e6 && r11 ? t12[t12.length - 1] += n5 : (t12.push(n5), e6 = r11, (isPromise(n5) || i(n5) && n5.hasAsync) && (t12.hasAsync = true));
  } };
}
function renderComponentVNode(e6, t12 = null, n5) {
  const r11 = e6.component = wr(e6, t12, null), s6 = Tr(r11, true), o6 = isPromise(s6);
  let i6 = r11.sp;
  if (o6 || i6) {
    return Promise.resolve(s6).then(() => {
      if (o6 && (i6 = r11.sp), i6) return Promise.all(i6.map((e7) => e7.call(r11.proxy)));
    }).catch(NOOP).then(() => renderComponentSubTree(r11, n5));
  }
  return renderComponentSubTree(r11, n5);
}
function renderComponentSubTree(e6, t12) {
  const n5 = e6.type, { getBuffer: r11, push: s6 } = createBuffer();
  if (isFunction2(n5)) {
    let r12 = Ar(e6);
    if (!n5.props) for (const t13 in e6.attrs) t13.startsWith("data-v-") && ((r12.props || (r12.props = {}))[t13] = "");
    renderVNode(s6, e6.subTree = r12, e6, t12);
  } else {
    e6.render && e6.render !== NOOP || e6.ssrRender || n5.ssrRender || !isString2(n5.template) || (n5.ssrRender = function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    }(n5.template));
    const r12 = e6.ssrRender || n5.ssrRender;
    if (r12) {
      let n6 = false !== e6.inheritAttrs ? e6.attrs : void 0, o6 = false, i6 = e6;
      for (; ; ) {
        const e7 = i6.vnode.scopeId;
        e7 && (o6 || (n6 = { ...n6 }, o6 = true), n6[e7] = "");
        const t13 = i6.parent;
        if (!t13 || !t13.subTree || t13.subTree !== i6.vnode) break;
        i6 = t13;
      }
      if (t12) {
        o6 || (n6 = { ...n6 });
        const e7 = t12.trim().split(" ");
        for (let t13 = 0; t13 < e7.length; t13++) n6[e7[t13]] = "";
      }
      const a7 = Rr(e6);
      try {
        r12(e6.proxy, s6, e6, n6, e6.props, e6.setupState, e6.data, e6.ctx);
      } finally {
        Rr(a7);
      }
    } else e6.render && e6.render !== NOOP ? renderVNode(s6, e6.subTree = Ar(e6), e6, t12) : (n5.name || n5.__file, s6("<!---->"));
  }
  return r11();
}
function renderVNode(e6, t12, n5, r11) {
  const { type: s6, shapeFlag: o6, children: i6, dirs: a7, props: l5 } = t12;
  switch (a7 && (t12.props = function(e7, t13, n6) {
    const r12 = [];
    for (let t14 = 0; t14 < n6.length; t14++) {
      const s7 = n6[t14], { dir: { getSSRProps: o7 } } = s7;
      if (o7) {
        const t15 = o7(s7, e7);
        t15 && r12.push(t15);
      }
    }
    return mergeProps(t13 || {}, ...r12);
  }(t12, l5, a7)), s6) {
    case cn:
      e6(escapeHtml(i6));
      break;
    case un:
      e6(i6 ? `<!--${escapeHtmlComment(i6)}-->` : "<!---->");
      break;
    case pn2:
      e6(i6);
      break;
    case ln:
      t12.slotScopeIds && (r11 = (r11 ? r11 + " " : "") + t12.slotScopeIds.join(" ")), e6("<!--[-->"), renderVNodeChildren(e6, i6, n5, r11), e6("<!--]-->");
      break;
    default:
      1 & o6 ? function(e7, t13, n6, r12) {
        const s7 = t13.type;
        let { props: o7, children: i7, shapeFlag: a8, scopeId: l6 } = t13, c4 = `<${s7}`;
        o7 && (c4 += ssrRenderAttrs(o7, s7));
        l6 && (c4 += ` ${l6}`);
        let u4 = n6, p4 = t13;
        for (; u4 && p4 === u4.subTree; ) p4 = u4.vnode, p4.scopeId && (c4 += ` ${p4.scopeId}`), u4 = u4.parent;
        r12 && (c4 += ` ${r12}`);
        if (e7(c4 + ">"), !x(s7)) {
          let t14 = false;
          o7 && (o7.innerHTML ? (t14 = true, e7(o7.innerHTML)) : o7.textContent ? (t14 = true, e7(escapeHtml(o7.textContent))) : "textarea" === s7 && o7.value && (t14 = true, e7(escapeHtml(o7.value)))), t14 || (8 & a8 ? e7(escapeHtml(i7)) : 16 & a8 && renderVNodeChildren(e7, i7, n6, r12)), e7(`</${s7}>`);
        }
      }(e6, t12, n5, r11) : 6 & o6 ? e6(renderComponentVNode(t12, n5, r11)) : 64 & o6 ? function(e7, t13, n6, r12) {
        const s7 = t13.props && t13.props.to, o7 = t13.props && t13.props.disabled;
        if (!s7) return [];
        if (!isString2(s7)) return [];
        !function(e8, t14, n7, r13, s8) {
          e8("<!--teleport start-->");
          const o8 = s8.appContext.provides[sn], i7 = o8.__teleportBuffers || (o8.__teleportBuffers = {}), a8 = i7[n7] || (i7[n7] = []), l6 = a8.length;
          let c4;
          if (r13) t14(e8), c4 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e9, push: n8 } = createBuffer();
            n8("<!--teleport start anchor-->"), t14(n8), n8("<!--teleport anchor-->"), c4 = e9();
          }
          a8.splice(l6, 0, c4), e8("<!--teleport end-->");
        }(e7, (e8) => {
          renderVNodeChildren(e8, t13.children, n6, r12);
        }, s7, o7 || "" === o7, n6);
      }(e6, t12, n5, r11) : 128 & o6 && renderVNode(e6, t12.ssContent, n5, r11);
  }
}
function renderVNodeChildren(e6, t12, n5, r11) {
  for (let s6 = 0; s6 < t12.length; s6++) renderVNode(e6, xr(t12[s6]), n5, r11);
}
function nestedUnrollBuffer(e6, t12, n5) {
  if (!e6.hasAsync) return t12 + unrollBufferSync$1(e6);
  let r11 = t12;
  for (let t13 = n5; t13 < e6.length; t13 += 1) {
    const n6 = e6[t13];
    if (isString2(n6)) {
      r11 += n6;
      continue;
    }
    if (isPromise(n6)) return n6.then((n7) => (e6[t13] = n7, nestedUnrollBuffer(e6, r11, t13)));
    const s6 = nestedUnrollBuffer(n6, r11, 0);
    if (isPromise(s6)) return s6.then((n7) => (e6[t13] = n7, nestedUnrollBuffer(e6, "", t13)));
    r11 = s6;
  }
  return r11;
}
function unrollBuffer$1(e6) {
  return nestedUnrollBuffer(e6, "", 0);
}
function unrollBufferSync$1(e6) {
  let t12 = "";
  for (let n5 = 0; n5 < e6.length; n5++) {
    let r11 = e6[n5];
    isString2(r11) ? t12 += r11 : t12 += unrollBufferSync$1(r11);
  }
  return t12;
}
async function renderToString(e6, t12 = {}) {
  if (Or(e6)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e6, "render") }), t12);
  const n5 = createVNode(e6._component, e6._props);
  n5.appContext = e6._context, e6.provide(sn, t12);
  const r11 = await renderComponentVNode(n5), s6 = await unrollBuffer$1(r11);
  if (await async function(e7) {
    if (e7.__teleportBuffers) {
      e7.teleports = e7.teleports || {};
      for (const t13 in e7.__teleportBuffers) e7.teleports[t13] = await unrollBuffer$1(await Promise.all([e7.__teleportBuffers[t13]]));
    }
  }(t12), t12.__watcherHandles) for (const e7 of t12.__watcherHandles) e7();
  return s6;
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...e6) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e6);
}
function publicAssetsURL(...e6) {
  const t12 = useRuntimeConfig2().app, s6 = t12.cdnURL || t12.baseURL;
  return e6.length ? joinRelativeURL(s6, ...e6) : s6;
}
function lazyCachedFunction(e6) {
  let t12 = null;
  return () => (null === t12 && (t12 = e6().catch((e7) => {
    throw t12 = null, e7;
  })), t12);
}
function is_primitive(e6) {
  return Object(e6) !== e6;
}
function is_plain_object(e6) {
  const t12 = Object.getPrototypeOf(e6);
  return t12 === Object.prototype || null === t12 || Object.getOwnPropertyNames(t12).sort().join("\0") === Br;
}
function get_type(e6) {
  return Object.prototype.toString.call(e6).slice(8, -1);
}
function get_escaped_char(e6) {
  switch (e6) {
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
      return e6 < " " ? `\\u${e6.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e6) {
  let t12 = "", n5 = 0;
  const r11 = e6.length;
  for (let s6 = 0; s6 < r11; s6 += 1) {
    const r12 = get_escaped_char(e6[s6]);
    r12 && (t12 += e6.slice(n5, s6) + r12, n5 = s6 + 1);
  }
  return `"${0 === n5 ? e6 : t12 + e6.slice(n5)}"`;
}
function enumerable_symbols(e6) {
  return Object.getOwnPropertySymbols(e6).filter((t12) => Object.getOwnPropertyDescriptor(e6, t12).enumerable);
}
function stringify_key(e6) {
  return Fr2.test(e6) ? "." + e6 : "[" + JSON.stringify(e6) + "]";
}
function uneval(e6, t12) {
  const n5 = /* @__PURE__ */ new Map(), r11 = [], s6 = /* @__PURE__ */ new Map();
  !(/* @__PURE__ */ __name(function walk2(e7) {
    if ("function" == typeof e7) throw new DevalueError("Cannot stringify a function", r11);
    if (!is_primitive(e7)) {
      if (n5.has(e7)) return void n5.set(e7, n5.get(e7) + 1);
      n5.set(e7, 1);
      switch (get_type(e7)) {
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
          e7.forEach((e8, t13) => {
            r11.push(`[${t13}]`), walk2(e8), r11.pop();
          });
          break;
        case "Set":
          Array.from(e7).forEach(walk2);
          break;
        case "Map":
          for (const [t13, n6] of e7) r11.push(`.get(${is_primitive(t13) ? stringify_primitive$1(t13) : "..."})`), walk2(n6), r11.pop();
          break;
        default:
          if (!is_plain_object(e7)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", r11);
          if (enumerable_symbols(e7).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", r11);
          for (const t13 in e7) r11.push(stringify_key(t13)), walk2(e7[t13]), r11.pop();
      }
    }
  }, "walk"))(e6);
  const o6 = /* @__PURE__ */ new Map();
  function stringify3(e7) {
    if (o6.has(e7)) return o6.get(e7);
    if (is_primitive(e7)) return stringify_primitive$1(e7);
    if (s6.has(e7)) return s6.get(e7);
    const t13 = get_type(e7);
    switch (t13) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e7.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e7.source)}, "${e7.flags}")`;
      case "Date":
        return `new Date(${e7.getTime()})`;
      case "Array":
        const n6 = e7.map((t14, n7) => n7 in e7 ? stringify3(t14) : ""), r12 = 0 === e7.length || e7.length - 1 in e7 ? "" : ",";
        return `[${n6.join(",")}${r12}]`;
      case "Set":
      case "Map":
        return `new ${t13}([${Array.from(e7).map(stringify3).join(",")}])`;
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
        return `new ${t13}([${e7.toString()}])`;
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e7).toString()}]).buffer`;
      default:
        const s7 = `{${Object.keys(e7).map((t14) => `${function(e8) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? e8 : escape_unsafe_chars(JSON.stringify(e8));
        }(t14)}:${stringify3(e7[t14])}`).join(",")}}`;
        return null === Object.getPrototypeOf(e7) ? Object.keys(e7).length > 0 ? `Object.assign(Object.create(null),${s7})` : "Object.create(null)" : s7;
    }
  }
  __name(stringify3, "stringify");
  Array.from(n5).filter((e7) => e7[1] > 1).sort((e7, t13) => t13[1] - e7[1]).forEach((e7, t13) => {
    o6.set(e7[0], function(e8) {
      let t14 = "";
      do {
        t14 = Ur[e8 % 54] + t14, e8 = ~~(e8 / 54) - 1;
      } while (e8 >= 0);
      return zr.test(t14) ? `${t14}0` : t14;
    }(t13));
  });
  const i6 = stringify3(e6);
  if (o6.size) {
    const e7 = [], t13 = [], n6 = [];
    return o6.forEach((r12, o7) => {
      if (e7.push(r12), s6.has(o7)) return void n6.push(s6.get(o7));
      if (is_primitive(o7)) return void n6.push(stringify_primitive$1(o7));
      switch (get_type(o7)) {
        case "Number":
        case "String":
        case "Boolean":
          n6.push(`Object(${stringify3(o7.valueOf())})`);
          break;
        case "RegExp":
          n6.push(o7.toString());
          break;
        case "Date":
          n6.push(`new Date(${o7.getTime()})`);
          break;
        case "Array":
          n6.push(`Array(${o7.length})`), o7.forEach((e8, n7) => {
            t13.push(`${r12}[${n7}]=${stringify3(e8)}`);
          });
          break;
        case "Set":
          n6.push("new Set"), t13.push(`${r12}.${Array.from(o7).map((e8) => `add(${stringify3(e8)})`).join(".")}`);
          break;
        case "Map":
          n6.push("new Map"), t13.push(`${r12}.${Array.from(o7).map(([e8, t14]) => `set(${stringify3(e8)}, ${stringify3(t14)})`).join(".")}`);
          break;
        default:
          n6.push(null === Object.getPrototypeOf(o7) ? "Object.create(null)" : "{}"), Object.keys(o7).forEach((e8) => {
            t13.push(`${r12}${function(e9) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e9) ? `.${e9}` : `[${escape_unsafe_chars(JSON.stringify(e9))}]`;
            }(e8)}=${stringify3(o7[e8])}`);
          });
      }
    }), t13.push(`return ${i6}`), `(function(${e7.join(",")}){${t13.join(";")}}(${n6.join(",")}))`;
  }
  return i6;
}
function escape_unsafe_char(e6) {
  return Dr[e6] || e6;
}
function escape_unsafe_chars(e6) {
  return e6.replace(Wr, escape_unsafe_char);
}
function stringify_primitive$1(e6) {
  if ("string" == typeof e6) return stringify_string(e6);
  if (void 0 === e6) return "void 0";
  if (0 === e6 && 1 / e6 < 0) return "-0";
  const t12 = String(e6);
  return "number" == typeof e6 ? t12.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e6 ? e6 + "n" : t12;
}
function encode64(e6) {
  const t12 = new DataView(e6);
  let n5 = "";
  for (let r11 = 0; r11 < e6.byteLength; r11++) n5 += String.fromCharCode(t12.getUint8(r11));
  return function(e7) {
    let t13 = "";
    for (let n6 = 0; n6 < e7.length; n6 += 3) {
      const r11 = [void 0, void 0, void 0, void 0];
      r11[0] = e7.charCodeAt(n6) >> 2, r11[1] = (3 & e7.charCodeAt(n6)) << 4, e7.length > n6 + 1 && (r11[1] |= e7.charCodeAt(n6 + 1) >> 4, r11[2] = (15 & e7.charCodeAt(n6 + 1)) << 2), e7.length > n6 + 2 && (r11[2] |= e7.charCodeAt(n6 + 2) >> 6, r11[3] = 63 & e7.charCodeAt(n6 + 2));
      for (let e8 = 0; e8 < r11.length; e8++) void 0 === r11[e8] ? t13 += "=" : t13 += qr[r11[e8]];
    }
    return t13;
  }(n5);
}
function stringify(e6, t12) {
  const n5 = [], r11 = /* @__PURE__ */ new Map(), s6 = [];
  if (t12) for (const e7 of Object.getOwnPropertyNames(t12)) s6.push({ key: e7, fn: t12[e7] });
  const o6 = [];
  let i6 = 0;
  const a7 = (/* @__PURE__ */ __name(function flatten(e7) {
    if ("function" == typeof e7) throw new DevalueError("Cannot stringify a function", o6);
    if (r11.has(e7)) return r11.get(e7);
    if (void 0 === e7) return -1;
    if (Number.isNaN(e7)) return -3;
    if (e7 === 1 / 0) return -4;
    if (e7 === -1 / 0) return -5;
    if (0 === e7 && 1 / e7 < 0) return -6;
    const t13 = i6++;
    r11.set(e7, t13);
    for (const { key: r12, fn: o7 } of s6) {
      const s7 = o7(e7);
      if (s7) return n5[t13] = `["${r12}",${flatten(s7)}]`, t13;
    }
    let a8 = "";
    if (is_primitive(e7)) a8 = stringify_primitive(e7);
    else {
      const t14 = get_type(e7);
      switch (t14) {
        case "Number":
        case "String":
        case "Boolean":
          a8 = `["Object",${stringify_primitive(e7)}]`;
          break;
        case "BigInt":
          a8 = `["BigInt",${e7}]`;
          break;
        case "Date":
          a8 = `["Date","${!isNaN(e7.getDate()) ? e7.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source: n6, flags: r12 } = e7;
          a8 = r12 ? `["RegExp",${stringify_string(n6)},"${r12}"]` : `["RegExp",${stringify_string(n6)}]`;
          break;
        case "Array":
          a8 = "[";
          for (let t15 = 0; t15 < e7.length; t15 += 1) t15 > 0 && (a8 += ","), t15 in e7 ? (o6.push(`[${t15}]`), a8 += flatten(e7[t15]), o6.pop()) : a8 += -2;
          a8 += "]";
          break;
        case "Set":
          a8 = '["Set"';
          for (const t15 of e7) a8 += `,${flatten(t15)}`;
          a8 += "]";
          break;
        case "Map":
          a8 = '["Map"';
          for (const [t15, n7] of e7) o6.push(`.get(${is_primitive(t15) ? stringify_primitive(t15) : "..."})`), a8 += `,${flatten(t15)},${flatten(n7)}`, o6.pop();
          a8 += "]";
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
          a8 = '["' + t14 + '","' + encode64(e7.buffer) + '"]';
          break;
        case "ArrayBuffer":
          a8 = `["ArrayBuffer","${encode64(e7)}"]`;
          break;
        default:
          if (!is_plain_object(e7)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", o6);
          if (enumerable_symbols(e7).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", o6);
          if (null === Object.getPrototypeOf(e7)) {
            a8 = '["null"';
            for (const t15 in e7) o6.push(stringify_key(t15)), a8 += `,${stringify_string(t15)},${flatten(e7[t15])}`, o6.pop();
            a8 += "]";
          } else {
            a8 = "{";
            let t15 = false;
            for (const n7 in e7) t15 && (a8 += ","), t15 = true, o6.push(stringify_key(n7)), a8 += `${stringify_string(n7)}:${flatten(e7[n7])}`, o6.pop();
            a8 += "}";
          }
      }
    }
    return n5[t13] = a8, t13;
  }, "flatten"))(e6);
  return a7 < 0 ? `${a7}` : `[${n5.join(",")}]`;
}
function stringify_primitive(e6) {
  const t12 = typeof e6;
  return "string" === t12 ? stringify_string(e6) : e6 instanceof String ? stringify_string(e6.toString()) : void 0 === e6 ? (-1).toString() : 0 === e6 && 1 / e6 < 0 ? (-6).toString() : "bigint" === t12 ? `["BigInt","${e6}"]` : String(e6);
}
function renderPayloadJsonScript(e6) {
  const t12 = { type: "application/json", innerHTML: e6.data ? stringify(e6.data, e6.ssrContext._payloadReducers) : "", "data-nuxt-data": "nuxt-app", "data-ssr": !e6.ssrContext.noSSR, id: "__NUXT_DATA__" };
  e6.src && (t12["data-src"] = e6.src);
  return [t12, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e6.ssrContext.config)}` }];
}
function splitPayload(e6) {
  const { data: t12, prerenderedAt: n5, ...r11 } = e6.payload;
  return { initial: { ...r11, prerenderedAt: n5 }, payload: { data: t12, prerenderedAt: n5 } };
}
function normalizeChunks(e6) {
  return e6.filter(Boolean).map((e7) => e7.trim());
}
function joinTags(e6) {
  return e6.join("");
}
function joinAttrs(e6) {
  return 0 === e6.length ? "" : " " + e6.join(" ");
}
var ce2, ue, pe2, de2, fe2, he, ge, me, ye, ve, sortTags, _e, be, Ce, ke, isTruthy, Se, we, formatKey, Re, Te, Ae, xe, Ee, Pe, Oe, Ne, EffectScope, $e, ReactiveEffect, He, Ve, Me, je, Ie, Le, Link, Dep, De, Be, Fe, Ue, We, ze, qe, Ke2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, Je2, Ge, Ze, Xe, toShallow, getProto, Ye, Qe, et, tt, nt, rt, st, ot, toReactive, toReadonly, RefImpl, it, CustomRefImpl, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, at, lt, ct, ut, pt, dt, ft, ht, gt, mt, yt, vt, getId, _t, bt2, Ct, kt, St, isTeleport, isTeleportDisabled, isTeleportDeferred, isTargetSVG, isTargetMathML, resolveTarget, wt, Rt, Tt, At, xt, Et, recursiveGetSubtree, Pt, Ot, logMismatchError, getContainerType, isComment$1, Nt, $t, Ht, Vt, isAsyncWrapper, isKeepAlive, Mt, createHook, jt, It, Lt2, Dt, Bt, Ft, Ut, Wt, zt, qt, Kt, getPublicInstance, Jt, hasSetupBinding, Gt, Zt, Xt, Yt, Qt, en2, tn2, createInternalObject, isInternalObject, nn2, isInternalKey, normalizeSlotValue, normalizeSlot2, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, rn2, sn, useSSRContext, getModelModifiers, getFunctionalFallthrough, filterModelListeners, isSuspense, on3, an2, ln, cn, un, pn2, dn, fn, hn, normalizeKey, normalizeRef, createVNode, gn, mn, yn2, getCurrentInstance, vn, _n2, setCurrentInstance, unsetCurrentInstance, bn, Cn, kn, Sn2, computed, wn, Rn, Tn, An, setDevtoolsHook, xn, En, Pn, On, Nn, $n, Hn, Vn, Mn, jn, callHook, hasExplicitCallback, In, Ln, Dn, Bn, Fn, Un, Wn, zn, qn, Kn, Jn, Gn, Zn2, Xn, getNow, isNativeOn, Yn, Qn, VueElement, er, tr, nr, rr2, sr, getModelAssigner, or, ir, ar3, lr, cr, ur2, pr, dr, fr, hr, gr2, mr, render, createApp, createSSRApp, yr2, initDirectivesForSSR, vr, VueResolver, _r, br, Cr, kr, Sr2, wr, Rr, Tr, Ar, xr, Er, Pr, Or, Nr, $r2, Hr, Vr2, Mr, getClientManifest, jr, Ir, Lr, Dr, DevalueError, Br, Fr2, Ur, Wr, zr, qr, Kr2, Jr2, Gr2, Zr2, Xr2, Yr2, Qr2, es2;
var init_renderer = __esm({
  "dist/server/chunks/routes/renderer.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_shared_esm_bundler();
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
    ce2 = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    ue = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    pe2 = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    de2 = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    fe2 = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    he = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    ge = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    me = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);
    ye = ["name", "property", "http-equiv"];
    ve = /* @__PURE__ */ new Set(["viewport", "description", "keywords", "robots"]);
    __name(dedupeKey, "dedupeKey");
    __name(walkResolver, "walkResolver");
    __name(normalizeProps2, "normalizeProps");
    __name(normalizeTag, "normalizeTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    sortTags = /* @__PURE__ */ __name((e6, t12) => e6._w === t12._w ? e6._p - t12._p : e6._w - t12._w, "sortTags");
    _e = { base: -10, title: 10 };
    be = { critical: -8, high: -1, low: 2 };
    Ce = { meta: { "content-security-policy": -30, charset: -20, viewport: -15 }, link: { preconnect: 20, stylesheet: 60, preload: 70, modulepreload: 70, prefetch: 90, "dns-prefetch": 90, prerender: 90 }, script: { async: 30, defer: 80, sync: 50 }, style: { imported: 40, sync: 60 } };
    ke = /@import/;
    isTruthy = /* @__PURE__ */ __name((e6) => "" === e6 || true === e6, "isTruthy");
    __name(tagWeight, "tagWeight");
    __name(registerPlugin, "registerPlugin");
    __name(createUnhead, "createUnhead");
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    __name(tagToString, "tagToString");
    __name(renderSSRHead, "renderSSRHead");
    __name(defineHeadPlugin, "defineHeadPlugin");
    Se = "%separator";
    we = new RegExp(`${Se}(?:\\s*${Se})*`, "g");
    __name(processTemplateParams, "processTemplateParams");
    formatKey = /* @__PURE__ */ __name((e6) => e6.includes(":key") ? e6 : e6.split(":").join(":key:"), "formatKey");
    Re = { key: "aliasSorting", hooks: { "tags:resolve": /* @__PURE__ */ __name((e6) => {
      let t12 = false;
      for (const n5 of e6.tags) {
        const r11 = n5.tagPriority;
        if (!r11) continue;
        const s6 = String(r11);
        if (s6.startsWith("before:")) {
          const r12 = formatKey(s6.slice(7)), o6 = e6.tagMap.get(r12);
          o6 && ("number" == typeof o6.tagPriority && (n5.tagPriority = o6.tagPriority), n5._p = o6._p - 1, t12 = true);
        } else if (s6.startsWith("after:")) {
          const r12 = formatKey(s6.slice(6)), o6 = e6.tagMap.get(r12);
          o6 && ("number" == typeof o6.tagPriority && (n5.tagPriority = o6.tagPriority), n5._p = o6._p + 1, t12 = true);
        }
      }
      t12 && (e6.tags = e6.tags.sort(sortTags));
    }, "tags:resolve") } };
    Te = defineHeadPlugin({ key: "deprecations", hooks: { "entries:normalize": /* @__PURE__ */ __name(({ tags: e6 }) => {
      for (const t12 of e6) t12.props.children && (t12.innerHTML = t12.props.children, delete t12.props.children), t12.props.hid && (t12.key = t12.props.hid, delete t12.props.hid), t12.props.vmid && (t12.key = t12.props.vmid, delete t12.props.vmid), t12.props.body && (t12.tagPosition = "bodyClose", delete t12.props.body);
    }, "entries:normalize") } });
    __name(walkPromises, "walkPromises");
    Ae = defineHeadPlugin({ key: "promises", hooks: { "entries:resolve": /* @__PURE__ */ __name(async (e6) => {
      const t12 = [];
      for (const n5 in e6.entries) e6.entries[n5]._promisesProcessed || t12.push(walkPromises(e6.entries[n5].input).then((t13) => {
        e6.entries[n5].input = t13, e6.entries[n5]._promisesProcessed = true;
      }));
      await Promise.all(t12);
    }, "entries:resolve") } });
    xe = { meta: "content", link: "href", htmlAttrs: "lang" };
    Ee = ["innerHTML", "textContent"];
    Pe = defineHeadPlugin((e6) => ({ key: "template-params", hooks: { "entries:normalize": /* @__PURE__ */ __name((t12) => {
      const n5 = t12.tags.filter((e7) => "templateParams" === e7.tag && "server" === e7.mode)?.[0]?.props || {};
      Object.keys(n5).length && (e6._ssrPayload = { templateParams: { ...e6._ssrPayload?.templateParams || {}, ...n5 } });
    }, "entries:normalize"), "tags:resolve": /* @__PURE__ */ __name(({ tagMap: t12, tags: n5 }) => {
      const r11 = t12.get("templateParams")?.props || {}, s6 = r11.separator || "|";
      delete r11.separator, r11.pageTitle = processTemplateParams(r11.pageTitle || e6._title || "", r11, s6);
      for (const e7 of n5) {
        if (false === e7.processTemplateParams) continue;
        const t13 = xe[e7.tag];
        if (t13 && "string" == typeof e7.props[t13]) e7.props[t13] = processTemplateParams(e7.props[t13], r11, s6);
        else if (e7.processTemplateParams || "titleTemplate" === e7.tag || "title" === e7.tag) for (const t14 of Ee) "string" == typeof e7[t14] && (e7[t14] = processTemplateParams(e7[t14], r11, s6, "script" === e7.tag && e7.props.type.endsWith("json")));
      }
      e6._templateParams = r11, e6._separator = s6;
    }, "tags:resolve"), "tags:afterResolve": /* @__PURE__ */ __name(({ tagMap: t12 }) => {
      const n5 = t12.get("title");
      n5?.textContent && false !== n5.processTemplateParams && (n5.textContent = processTemplateParams(n5.textContent, e6._templateParams, e6._separator));
    }, "tags:afterResolve") } }));
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e6 = false) {
        this.detached = e6, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Oe, !e6 && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e6, t12;
          if (this._isPaused = true, this.scopes) for (e6 = 0, t12 = this.scopes.length; e6 < t12; e6++) this.scopes[e6].pause();
          for (e6 = 0, t12 = this.effects.length; e6 < t12; e6++) this.effects[e6].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e6, t12;
          if (this._isPaused = false, this.scopes) for (e6 = 0, t12 = this.scopes.length; e6 < t12; e6++) this.scopes[e6].resume();
          for (e6 = 0, t12 = this.effects.length; e6 < t12; e6++) this.effects[e6].resume();
        }
      }
      run(e6) {
        if (this._active) {
          const t12 = Oe;
          try {
            return Oe = this, e6();
          } finally {
            Oe = t12;
          }
        }
      }
      on() {
        1 === ++this._on && (this.prevScope = Oe, Oe = this);
      }
      off() {
        this._on > 0 && 0 === --this._on && (Oe = this.prevScope, this.prevScope = void 0);
      }
      stop(e6) {
        if (this._active) {
          let t12, n5;
          for (this._active = false, t12 = 0, n5 = this.effects.length; t12 < n5; t12++) this.effects[t12].stop();
          for (this.effects.length = 0, t12 = 0, n5 = this.cleanups.length; t12 < n5; t12++) this.cleanups[t12]();
          if (this.cleanups.length = 0, this.scopes) {
            for (t12 = 0, n5 = this.scopes.length; t12 < n5; t12++) this.scopes[t12].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e6) {
            const e7 = this.parent.scopes.pop();
            e7 && e7 !== this && (this.parent.scopes[this.index] = e7, e7.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(getCurrentScope, "getCurrentScope");
    $e = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e6) {
        this.fn = e6, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && Oe.active && Oe.effects.push(this);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, $e.has(this) && ($e.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e6 = Ne, t12 = je;
        Ne = this, je = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), Ne = e6, je = t12, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e6 = this.deps; e6; e6 = e6.nextDep) removeSub(e6);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? $e.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    Me = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    je = true;
    Ie = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    Le = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e6, t12) {
        this.sub = e6, this.dep = t12, this.version = t12.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e6) {
        this.computed = e6, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
      }
      track(e6) {
        if (!Ne || !je || Ne === this.computed) return;
        let t12 = this.activeLink;
        if (void 0 === t12 || t12.sub !== Ne) t12 = this.activeLink = new Link(Ne, this), Ne.deps ? (t12.prevDep = Ne.depsTail, Ne.depsTail.nextDep = t12, Ne.depsTail = t12) : Ne.deps = Ne.depsTail = t12, addSub(t12);
        else if (-1 === t12.version && (t12.version = this.version, t12.nextDep)) {
          const e7 = t12.nextDep;
          e7.prevDep = t12.prevDep, t12.prevDep && (t12.prevDep.nextDep = e7), t12.prevDep = Ne.depsTail, t12.nextDep = void 0, Ne.depsTail.nextDep = t12, Ne.depsTail = t12, Ne.deps === t12 && (Ne.deps = e7);
        }
        return t12;
      }
      trigger(e6) {
        this.version++, Le++, this.notify(e6);
      }
      notify(e6) {
        startBatch();
        try {
          0;
          for (let e7 = this.subs; e7; e7 = e7.prevSub) e7.sub.notify() && e7.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    De = /* @__PURE__ */ new WeakMap();
    Be = Symbol("");
    Fe = Symbol("");
    Ue = Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    We = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, toReactive);
    }, concat(...e6) {
      return reactiveReadArray(this).concat(...e6.map((e7) => i(e7) ? reactiveReadArray(e7) : e7));
    }, entries() {
      return iterator(this, "entries", (e6) => (e6[1] = toReactive(e6[1]), e6));
    }, every(e6, t12) {
      return apply(this, "every", e6, t12, void 0, arguments);
    }, filter(e6, t12) {
      return apply(this, "filter", e6, t12, (e7) => e7.map(toReactive), arguments);
    }, find(e6, t12) {
      return apply(this, "find", e6, t12, toReactive, arguments);
    }, findIndex(e6, t12) {
      return apply(this, "findIndex", e6, t12, void 0, arguments);
    }, findLast(e6, t12) {
      return apply(this, "findLast", e6, t12, toReactive, arguments);
    }, findLastIndex(e6, t12) {
      return apply(this, "findLastIndex", e6, t12, void 0, arguments);
    }, forEach(e6, t12) {
      return apply(this, "forEach", e6, t12, void 0, arguments);
    }, includes(...e6) {
      return searchProxy(this, "includes", e6);
    }, indexOf(...e6) {
      return searchProxy(this, "indexOf", e6);
    }, join(e6) {
      return reactiveReadArray(this).join(e6);
    }, lastIndexOf(...e6) {
      return searchProxy(this, "lastIndexOf", e6);
    }, map(e6, t12) {
      return apply(this, "map", e6, t12, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e6) {
      return noTracking(this, "push", e6);
    }, reduce(e6, ...t12) {
      return reduce(this, "reduce", e6, t12);
    }, reduceRight(e6, ...t12) {
      return reduce(this, "reduceRight", e6, t12);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e6, t12) {
      return apply(this, "some", e6, t12, void 0, arguments);
    }, splice(...e6) {
      return noTracking(this, "splice", e6);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e6) {
      return reactiveReadArray(this).toSorted(e6);
    }, toSpliced(...e6) {
      return reactiveReadArray(this).toSpliced(...e6);
    }, unshift(...e6) {
      return noTracking(this, "unshift", e6);
    }, values() {
      return iterator(this, "values", toReactive);
    } };
    __name(iterator, "iterator");
    ze = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    qe = makeMap("__proto__,__v_isRef,__isVue");
    Ke2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e6) => "arguments" !== e6 && "caller" !== e6).map((e6) => Symbol[e6]).filter(isSymbol2));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e6 = false, t12 = false) {
        this._isReadonly = e6, this._isShallow = t12;
      }
      get(e6, t12, n5) {
        if ("__v_skip" === t12) return e6.__v_skip;
        const r11 = this._isReadonly, s6 = this._isShallow;
        if ("__v_isReactive" === t12) return !r11;
        if ("__v_isReadonly" === t12) return r11;
        if ("__v_isShallow" === t12) return s6;
        if ("__v_raw" === t12) return n5 === (r11 ? s6 ? ot : st : s6 ? rt : nt).get(e6) || Object.getPrototypeOf(e6) === Object.getPrototypeOf(n5) ? e6 : void 0;
        const o6 = i(e6);
        if (!r11) {
          let e7;
          if (o6 && (e7 = We[t12])) return e7;
          if ("hasOwnProperty" === t12) return hasOwnProperty;
        }
        const i6 = Reflect.get(e6, t12, isRef2(e6) ? e6 : n5);
        return (isSymbol2(t12) ? Ke2.has(t12) : qe(t12)) ? i6 : (r11 || track(e6, 0, t12), s6 ? i6 : isRef2(i6) ? o6 && isIntegerKey(t12) ? i6 : i6.value : isObject2(i6) ? r11 ? readonly(i6) : reactive(i6) : i6);
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e6 = false) {
        super(false, e6);
      }
      set(e6, t12, n5, r11) {
        let s6 = e6[t12];
        if (!this._isShallow) {
          const t13 = isReadonly(s6);
          if (isShallow(n5) || isReadonly(n5) || (s6 = toRaw(s6), n5 = toRaw(n5)), !i(e6) && isRef2(s6) && !isRef2(n5)) return !t13 && (s6.value = n5, true);
        }
        const o6 = i(e6) && isIntegerKey(t12) ? Number(t12) < e6.length : hasOwn(e6, t12), i6 = Reflect.set(e6, t12, n5, isRef2(e6) ? e6 : r11);
        return e6 === toRaw(r11) && (o6 ? hasChanged(n5, s6) && trigger(e6, "set", t12, n5) : trigger(e6, "add", t12, n5)), i6;
      }
      deleteProperty(e6, t12) {
        const n5 = hasOwn(e6, t12);
        e6[t12];
        const r11 = Reflect.deleteProperty(e6, t12);
        return r11 && n5 && trigger(e6, "delete", t12, void 0), r11;
      }
      has(e6, t12) {
        const n5 = Reflect.has(e6, t12);
        return isSymbol2(t12) && Ke2.has(t12) || track(e6, 0, t12), n5;
      }
      ownKeys(e6) {
        return track(e6, 0, i(e6) ? "length" : Be), Reflect.ownKeys(e6);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e6 = false) {
        super(true, e6);
      }
      set(e6, t12) {
        return true;
      }
      deleteProperty(e6, t12) {
        return true;
      }
    };
    Je2 = new MutableReactiveHandler();
    Ge = new ReadonlyReactiveHandler();
    Ze = new MutableReactiveHandler(true);
    Xe = new ReadonlyReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e6) => e6, "toShallow");
    getProto = /* @__PURE__ */ __name((e6) => Reflect.getPrototypeOf(e6), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    Ye = { get: createInstrumentationGetter(false, false) };
    Qe = { get: createInstrumentationGetter(false, true) };
    et = { get: createInstrumentationGetter(true, false) };
    tt = { get: createInstrumentationGetter(true, true) };
    nt = /* @__PURE__ */ new WeakMap();
    rt = /* @__PURE__ */ new WeakMap();
    st = /* @__PURE__ */ new WeakMap();
    ot = /* @__PURE__ */ new WeakMap();
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(shallowReadonly, "shallowReadonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    __name(markRaw, "markRaw");
    toReactive = /* @__PURE__ */ __name((e6) => isObject2(e6) ? reactive(e6) : e6, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e6) => isObject2(e6) ? readonly(e6) : e6, "toReadonly");
    __name(isRef2, "isRef");
    __name(ref, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e6, t12) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t12 ? e6 : toRaw(e6), this._value = t12 ? e6 : toReactive(e6), this.__v_isShallow = t12;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e6) {
        const t12 = this._rawValue, n5 = this.__v_isShallow || isShallow(e6) || isReadonly(e6);
        e6 = n5 ? e6 : toRaw(e6), hasChanged(e6, t12) && (this._rawValue = e6, this._value = n5 ? e6 : toReactive(e6), this.dep.trigger());
      }
    };
    __name(unref, "unref");
    __name(toValue, "toValue");
    it = { get: /* @__PURE__ */ __name((e6, t12, n5) => "__v_raw" === t12 ? e6 : unref(Reflect.get(e6, t12, n5)), "get"), set: /* @__PURE__ */ __name((e6, t12, n5, r11) => {
      const s6 = e6[t12];
      return isRef2(s6) && !isRef2(n5) ? (s6.value = n5, true) : Reflect.set(e6, t12, n5, r11);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    CustomRefImpl = class {
      static {
        __name(this, "CustomRefImpl");
      }
      constructor(e6) {
        this.__v_isRef = true, this._value = void 0;
        const t12 = this.dep = new Dep(), { get: n5, set: r11 } = e6(t12.track.bind(t12), t12.trigger.bind(t12));
        this._get = n5, this._set = r11;
      }
      get value() {
        return this._value = this._get();
      }
      set value(e6) {
        this._set(e6);
      }
    };
    __name(customRef, "customRef");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e6, t12, n5) {
        this._object = e6, this._key = t12, this._defaultValue = n5, this.__v_isRef = true, this._value = void 0;
      }
      get value() {
        const e6 = this._object[this._key];
        return this._value = void 0 === e6 ? this._defaultValue : e6;
      }
      set value(e6) {
        this._object[this._key] = e6;
      }
      get dep() {
        return function(e6, t12) {
          const n5 = De.get(e6);
          return n5 && n5.get(t12);
        }(toRaw(this._object), this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e6) {
        this._getter = e6, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(propertyToRef, "propertyToRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e6, t12, n5) {
        this.fn = e6, this.setter = t12, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Le - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t12, this.isSSR = n5;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && Ne !== this) return batch(this, true), true;
      }
      get value() {
        const e6 = this.dep.track();
        return refreshComputed(this), e6 && (e6.version = this.dep.version), this._value;
      }
      set value(e6) {
        this.setter && this.setter(e6);
      }
    };
    at = {};
    lt = /* @__PURE__ */ new WeakMap();
    __name(onWatcherCleanup, "onWatcherCleanup");
    __name(traverse, "traverse");
    ut = [];
    pt = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush", 15: "component update", 16: "app unmount cleanup function" };
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    dt = [];
    ft = -1;
    ht = [];
    gt = null;
    mt = 0;
    yt = Promise.resolve();
    vt = null;
    __name(nextTick2, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    getId = /* @__PURE__ */ __name((e6) => null == e6.id ? 2 & e6.flags ? -1 : 1 / 0 : e6.id, "getId");
    __name(flushJobs, "flushJobs");
    bt2 = [];
    Ct = null;
    kt = null;
    __name(setCurrentRenderingInstance$1, "setCurrentRenderingInstance$1");
    __name(withCtx, "withCtx");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    St = Symbol("_vte");
    isTeleport = /* @__PURE__ */ __name((e6) => e6.__isTeleport, "isTeleport");
    isTeleportDisabled = /* @__PURE__ */ __name((e6) => e6 && (e6.disabled || "" === e6.disabled), "isTeleportDisabled");
    isTeleportDeferred = /* @__PURE__ */ __name((e6) => e6 && (e6.defer || "" === e6.defer), "isTeleportDeferred");
    isTargetSVG = /* @__PURE__ */ __name((e6) => "undefined" != typeof SVGElement && e6 instanceof SVGElement, "isTargetSVG");
    isTargetMathML = /* @__PURE__ */ __name((e6) => "function" == typeof MathMLElement && e6 instanceof MathMLElement, "isTargetMathML");
    resolveTarget = /* @__PURE__ */ __name((e6, t12) => {
      const n5 = e6 && e6.to;
      if (isString2(n5)) {
        if (t12) {
          return t12(n5);
        }
        return null;
      }
      return n5;
    }, "resolveTarget");
    wt = { name: "Teleport", __isTeleport: true, process(e6, t12, n5, r11, s6, o6, i6, a7, l5, c4) {
      const { mc: u4, pc: p4, pbc: d7, o: { insert: f5, querySelector: g4, createText: m5, createComment: y4 } } = c4, v6 = isTeleportDisabled(t12.props);
      let { shapeFlag: _3, children: b3, dynamicChildren: C3 } = t12;
      if (null == e6) {
        const e7 = t12.el = m5(""), c5 = t12.anchor = m5("");
        f5(e7, n5, r11), f5(c5, n5, r11);
        const mount = /* @__PURE__ */ __name((e8, t13) => {
          16 & _3 && (s6 && s6.isCE && (s6.ce._teleportTarget = e8), u4(b3, e8, t13, s6, o6, i6, a7, l5));
        }, "mount"), mountToTarget = /* @__PURE__ */ __name(() => {
          const e8 = t12.target = resolveTarget(t12.props, g4), n6 = prepareAnchor(e8, t12, m5, f5);
          e8 && ("svg" !== i6 && isTargetSVG(e8) ? i6 = "svg" : "mathml" !== i6 && isTargetMathML(e8) && (i6 = "mathml"), v6 || (mount(e8, n6), updateCssVars(t12, false)));
        }, "mountToTarget");
        v6 && (mount(n5, c5), updateCssVars(t12, true)), isTeleportDeferred(t12.props) ? (t12.el.__isMounted = false, rn2(() => {
          mountToTarget(), delete t12.el.__isMounted;
        }, o6)) : mountToTarget();
      } else {
        if (isTeleportDeferred(t12.props) && false === e6.el.__isMounted) return void rn2(() => {
          wt.process(e6, t12, n5, r11, s6, o6, i6, a7, l5, c4);
        }, o6);
        t12.el = e6.el, t12.targetStart = e6.targetStart;
        const u5 = t12.anchor = e6.anchor, f6 = t12.target = e6.target, m6 = t12.targetAnchor = e6.targetAnchor, y5 = isTeleportDisabled(e6.props), _4 = y5 ? n5 : f6, b4 = y5 ? u5 : m6;
        if ("svg" === i6 || isTargetSVG(f6) ? i6 = "svg" : ("mathml" === i6 || isTargetMathML(f6)) && (i6 = "mathml"), C3 ? (d7(e6.dynamicChildren, C3, _4, s6, o6, i6, a7), traverseStaticChildren(e6, t12, true)) : l5 || p4(e6, t12, _4, b4, s6, o6, i6, a7, false), v6) y5 ? t12.props && e6.props && t12.props.to !== e6.props.to && (t12.props.to = e6.props.to) : moveTeleport(t12, n5, u5, c4, 1);
        else if ((t12.props && t12.props.to) !== (e6.props && e6.props.to)) {
          const e7 = t12.target = resolveTarget(t12.props, g4);
          e7 && moveTeleport(t12, e7, null, c4, 0);
        } else y5 && moveTeleport(t12, f6, m6, c4, 1);
        updateCssVars(t12, v6);
      }
    }, remove(e6, t12, n5, { um: r11, o: { remove: s6 } }, o6) {
      const { shapeFlag: i6, children: a7, anchor: l5, targetStart: c4, targetAnchor: u4, target: p4, props: d7 } = e6;
      if (p4 && (s6(c4), s6(u4)), o6 && s6(l5), 16 & i6) {
        const e7 = o6 || !isTeleportDisabled(d7);
        for (let s7 = 0; s7 < a7.length; s7++) {
          const o7 = a7[s7];
          r11(o7, t12, n5, e7, !!o7.dynamicChildren);
        }
      }
    }, move: moveTeleport, hydrate: /* @__PURE__ */ __name(function(e6, t12, n5, r11, s6, o6, { o: { nextSibling: i6, parentNode: a7, querySelector: l5, insert: c4, createText: u4 } }, p4) {
      const d7 = t12.target = resolveTarget(t12.props, l5);
      if (d7) {
        const l6 = isTeleportDisabled(t12.props), f5 = d7._lpa || d7.firstChild;
        if (16 & t12.shapeFlag) if (l6) t12.anchor = p4(i6(e6), t12, a7(e6), n5, r11, s6, o6), t12.targetStart = f5, t12.targetAnchor = f5 && i6(f5);
        else {
          t12.anchor = i6(e6);
          let a8 = f5;
          for (; a8; ) {
            if (a8 && 8 === a8.nodeType) {
              if ("teleport start anchor" === a8.data) t12.targetStart = a8;
              else if ("teleport anchor" === a8.data) {
                t12.targetAnchor = a8, d7._lpa = t12.targetAnchor && i6(t12.targetAnchor);
                break;
              }
            }
            a8 = i6(a8);
          }
          t12.targetAnchor || prepareAnchor(d7, t12, u4, c4), p4(f5 && i6(f5), t12, d7, n5, r11, s6, o6);
        }
        updateCssVars(t12, l6);
      }
      return t12.anchor && i6(t12.anchor);
    }, "hydrate") };
    __name(moveTeleport, "moveTeleport");
    Rt = wt;
    __name(updateCssVars, "updateCssVars");
    __name(prepareAnchor, "prepareAnchor");
    Tt = Symbol("_leaveCb");
    At = Symbol("_enterCb");
    __name(useTransitionState, "useTransitionState");
    xt = [Function, Array];
    Et = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: xt, onEnter: xt, onAfterEnter: xt, onEnterCancelled: xt, onBeforeLeave: xt, onLeave: xt, onAfterLeave: xt, onLeaveCancelled: xt, onBeforeAppear: xt, onAppear: xt, onAfterAppear: xt, onAppearCancelled: xt };
    recursiveGetSubtree = /* @__PURE__ */ __name((e6) => {
      const t12 = e6.subTree;
      return t12.component ? recursiveGetSubtree(t12.component) : t12;
    }, "recursiveGetSubtree");
    __name(findNonCommentChild, "findNonCommentChild");
    Pt = { name: "BaseTransition", props: Et, setup(e6, { slots: t12 }) {
      const n5 = getCurrentInstance(), r11 = useTransitionState();
      return () => {
        const s6 = t12.default && getTransitionRawChildren(t12.default(), true);
        if (!s6 || !s6.length) return;
        const o6 = findNonCommentChild(s6), i6 = toRaw(e6), { mode: a7 } = i6;
        if (r11.isLeaving) return emptyPlaceholder(o6);
        const l5 = getInnerChild$1(o6);
        if (!l5) return emptyPlaceholder(o6);
        let c4 = resolveTransitionHooks(l5, i6, r11, n5, (e7) => c4 = e7);
        l5.type !== un && setTransitionHooks(l5, c4);
        let u4 = n5.subTree && getInnerChild$1(n5.subTree);
        if (u4 && u4.type !== un && !isSameVNodeType(l5, u4) && recursiveGetSubtree(n5).type !== un) {
          let e7 = resolveTransitionHooks(u4, i6, r11, n5);
          if (setTransitionHooks(u4, e7), "out-in" === a7 && l5.type !== un) return r11.isLeaving = true, e7.afterLeave = () => {
            r11.isLeaving = false, 8 & n5.job.flags || n5.update(), delete e7.afterLeave, u4 = void 0;
          }, emptyPlaceholder(o6);
          "in-out" === a7 && l5.type !== un ? e7.delayLeave = (e8, t13, n6) => {
            getLeavingNodesForType(r11, u4)[String(u4.key)] = u4, e8[Tt] = () => {
              t13(), e8[Tt] = void 0, delete c4.delayedLeave, u4 = void 0;
            }, c4.delayedLeave = () => {
              n6(), delete c4.delayedLeave, u4 = void 0;
            };
          } : u4 = void 0;
        } else u4 && (u4 = void 0);
        return o6;
      };
    } };
    __name(getLeavingNodesForType, "getLeavingNodesForType");
    __name(resolveTransitionHooks, "resolveTransitionHooks");
    __name(emptyPlaceholder, "emptyPlaceholder");
    __name(getInnerChild$1, "getInnerChild$1");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(getTransitionRawChildren, "getTransitionRawChildren");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    __name(setRef, "setRef");
    Ot = false;
    logMismatchError = /* @__PURE__ */ __name(() => {
      Ot || (console.error("Hydration completed but contains mismatches."), Ot = true);
    }, "logMismatchError");
    getContainerType = /* @__PURE__ */ __name((e6) => {
      if (1 === e6.nodeType) return ((e7) => e7.namespaceURI.includes("svg") && "foreignObject" !== e7.tagName)(e6) ? "svg" : ((e7) => e7.namespaceURI.includes("MathML"))(e6) ? "mathml" : void 0;
    }, "getContainerType");
    isComment$1 = /* @__PURE__ */ __name((e6) => 8 === e6.nodeType, "isComment$1");
    __name(createHydrationFunctions, "createHydrationFunctions");
    Nt = "data-allow-mismatch";
    $t = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
    __name(isMismatchAllowed, "isMismatchAllowed");
    Ht = getGlobalThis().requestIdleCallback || ((e6) => setTimeout(e6, 1));
    Vt = getGlobalThis().cancelIdleCallback || ((e6) => clearTimeout(e6));
    isAsyncWrapper = /* @__PURE__ */ __name((e6) => !!e6.type.__asyncLoader, "isAsyncWrapper");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e6) => e6.type.__isKeepAlive, "isKeepAlive");
    Mt = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e6, { slots: t12 }) {
      const n5 = getCurrentInstance(), r11 = n5.ctx;
      if (!r11.renderer) return () => {
        const e7 = t12.default && t12.default();
        return e7 && 1 === e7.length ? e7[0] : e7;
      };
      const s6 = /* @__PURE__ */ new Map(), o6 = /* @__PURE__ */ new Set();
      let i6 = null;
      const a7 = n5.suspense, { renderer: { p: l5, m: c4, um: u4, o: { createElement: p4 } } } = r11, d7 = p4("div");
      function unmount(e7) {
        resetShapeFlag(e7), u4(e7, n5, a7, true);
      }
      __name(unmount, "unmount");
      function pruneCache(e7) {
        s6.forEach((t13, n6) => {
          const r12 = getComponentName(t13.type);
          r12 && !e7(r12) && pruneCacheEntry(n6);
        });
      }
      __name(pruneCache, "pruneCache");
      function pruneCacheEntry(e7) {
        const t13 = s6.get(e7);
        !t13 || i6 && isSameVNodeType(t13, i6) ? i6 && resetShapeFlag(i6) : unmount(t13), s6.delete(e7), o6.delete(e7);
      }
      __name(pruneCacheEntry, "pruneCacheEntry");
      r11.activate = (e7, t13, n6, r12, s7) => {
        const o7 = e7.component;
        c4(e7, t13, n6, 0, a7), l5(o7.vnode, e7, t13, n6, o7, a7, r12, e7.slotScopeIds, s7), rn2(() => {
          o7.isDeactivated = false, o7.a && invokeArrayFns(o7.a);
          const t14 = e7.props && e7.props.onVnodeMounted;
          t14 && invokeVNodeHook(t14, o7.parent, e7);
        }, a7);
      }, r11.deactivate = (e7) => {
        const t13 = e7.component;
        invalidateMount(t13.m), invalidateMount(t13.a), c4(e7, d7, null, 1, a7), rn2(() => {
          t13.da && invokeArrayFns(t13.da);
          const n6 = e7.props && e7.props.onVnodeUnmounted;
          n6 && invokeVNodeHook(n6, t13.parent, e7), t13.isDeactivated = true;
        }, a7);
      }, watch(() => [e6.include, e6.exclude], ([e7, t13]) => {
        e7 && pruneCache((t14) => matches(e7, t14)), t13 && pruneCache((e8) => !matches(t13, e8));
      }, { flush: "post", deep: true });
      let f5 = null;
      const cacheSubtree = /* @__PURE__ */ __name(() => {
        null != f5 && (isSuspense(n5.subTree.type) ? rn2(() => {
          s6.set(f5, getInnerChild(n5.subTree));
        }, n5.subTree.suspense) : s6.set(f5, getInnerChild(n5.subTree)));
      }, "cacheSubtree");
      return It(cacheSubtree), Dt(cacheSubtree), Bt(() => {
        s6.forEach((e7) => {
          const { subTree: t13, suspense: r12 } = n5, s7 = getInnerChild(t13);
          if (e7.type === s7.type && e7.key === s7.key) {
            resetShapeFlag(s7);
            const e8 = s7.component.da;
            return void (e8 && rn2(e8, r12));
          }
          unmount(e7);
        });
      }), () => {
        if (f5 = null, !t12.default) return i6 = null;
        const n6 = t12.default(), r12 = n6[0];
        if (n6.length > 1) return i6 = null, n6;
        if (!(isVNode$2(r12) && (4 & r12.shapeFlag || 128 & r12.shapeFlag))) return i6 = null, r12;
        let a8 = getInnerChild(r12);
        if (a8.type === un) return i6 = null, a8;
        const l6 = a8.type, c5 = getComponentName(isAsyncWrapper(a8) ? a8.type.__asyncResolved || {} : l6), { include: u5, exclude: p5, max: d8 } = e6;
        if (u5 && (!c5 || !matches(u5, c5)) || p5 && c5 && matches(p5, c5)) return a8.shapeFlag &= -257, i6 = a8, r12;
        const g4 = null == a8.key ? l6 : a8.key, m5 = s6.get(g4);
        return a8.el && (a8 = cloneVNode(a8), 128 & r12.shapeFlag && (r12.ssContent = a8)), f5 = g4, m5 ? (a8.el = m5.el, a8.component = m5.component, a8.transition && setTransitionHooks(a8, a8.transition), a8.shapeFlag |= 512, o6.delete(g4), o6.add(g4)) : (o6.add(g4), d8 && o6.size > parseInt(d8, 10) && pruneCacheEntry(o6.values().next().value)), a8.shapeFlag |= 256, i6 = a8, isSuspense(r12.type) ? r12 : a8;
      };
    } };
    __name(matches, "matches");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(resetShapeFlag, "resetShapeFlag");
    __name(getInnerChild, "getInnerChild");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e6) => (t12, n5 = yn2) => {
      kn && "sp" !== e6 || injectHook(e6, (...e7) => t12(...e7), n5);
    }, "createHook");
    jt = createHook("bm");
    It = createHook("m");
    Lt2 = createHook("bu");
    Dt = createHook("u");
    Bt = createHook("bum");
    Ft = createHook("um");
    Ut = createHook("sp");
    Wt = createHook("rtg");
    zt = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    qt = "components";
    Kt = Symbol.for("v-ndc");
    __name(resolveAsset, "resolveAsset");
    __name(resolve, "resolve");
    __name(ensureValidVNode$1, "ensureValidVNode$1");
    getPublicInstance = /* @__PURE__ */ __name((e6) => e6 ? isStatefulComponent(e6) ? getComponentPublicInstance(e6) : getPublicInstance(e6.parent) : null, "getPublicInstance");
    Jt = n(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e6) => e6, "$"), $el: /* @__PURE__ */ __name((e6) => e6.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e6) => e6.data, "$data"), $props: /* @__PURE__ */ __name((e6) => e6.props, "$props"), $attrs: /* @__PURE__ */ __name((e6) => e6.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e6) => e6.slots, "$slots"), $refs: /* @__PURE__ */ __name((e6) => e6.refs, "$refs"), $parent: /* @__PURE__ */ __name((e6) => getPublicInstance(e6.parent), "$parent"), $root: /* @__PURE__ */ __name((e6) => getPublicInstance(e6.root), "$root"), $host: /* @__PURE__ */ __name((e6) => e6.ce, "$host"), $emit: /* @__PURE__ */ __name((e6) => e6.emit, "$emit"), $options: /* @__PURE__ */ __name((e6) => resolveMergedOptions(e6), "$options"), $forceUpdate: /* @__PURE__ */ __name((e6) => e6.f || (e6.f = () => {
      queueJob(e6.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e6) => e6.n || (e6.n = nextTick2.bind(e6.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e6) => instanceWatch.bind(e6), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e6, t12) => e6 !== t && !e6.__isScriptSetup && hasOwn(e6, t12), "hasSetupBinding");
    Gt = { get({ _: e6 }, t12) {
      if ("__v_skip" === t12) return true;
      const { ctx: n5, setupState: r11, data: s6, props: o6, accessCache: i6, type: a7, appContext: l5 } = e6;
      let c4;
      if ("$" !== t12[0]) {
        const a8 = i6[t12];
        if (void 0 !== a8) switch (a8) {
          case 1:
            return r11[t12];
          case 2:
            return s6[t12];
          case 4:
            return n5[t12];
          case 3:
            return o6[t12];
        }
        else {
          if (hasSetupBinding(r11, t12)) return i6[t12] = 1, r11[t12];
          if (s6 !== t && hasOwn(s6, t12)) return i6[t12] = 2, s6[t12];
          if ((c4 = e6.propsOptions[0]) && hasOwn(c4, t12)) return i6[t12] = 3, o6[t12];
          if (n5 !== t && hasOwn(n5, t12)) return i6[t12] = 4, n5[t12];
          Xt && (i6[t12] = 0);
        }
      }
      const u4 = Jt[t12];
      let p4, d7;
      return u4 ? ("$attrs" === t12 && track(e6.attrs, 0, ""), u4(e6)) : (p4 = a7.__cssModules) && (p4 = p4[t12]) ? p4 : n5 !== t && hasOwn(n5, t12) ? (i6[t12] = 4, n5[t12]) : (d7 = l5.config.globalProperties, hasOwn(d7, t12) ? d7[t12] : void 0);
    }, set({ _: e6 }, t12, n5) {
      const { data: r11, setupState: s6, ctx: o6 } = e6;
      return hasSetupBinding(s6, t12) ? (s6[t12] = n5, true) : r11 !== t && hasOwn(r11, t12) ? (r11[t12] = n5, true) : !hasOwn(e6.props, t12) && (("$" !== t12[0] || !(t12.slice(1) in e6)) && (o6[t12] = n5, true));
    }, has({ _: { data: e6, setupState: t12, accessCache: n5, ctx: r11, appContext: s6, propsOptions: o6 } }, i6) {
      let a7;
      return !!n5[i6] || e6 !== t && hasOwn(e6, i6) || hasSetupBinding(t12, i6) || (a7 = o6[0]) && hasOwn(a7, i6) || hasOwn(r11, i6) || hasOwn(Jt, i6) || hasOwn(s6.config.globalProperties, i6);
    }, defineProperty(e6, t12, n5) {
      return null != n5.get ? e6._.accessCache[t12] = 0 : hasOwn(n5, "value") && this.set(e6, t12, n5.value, null), Reflect.defineProperty(e6, t12, n5);
    } };
    Zt = n({}, Gt, { get(e6, t12) {
      if (t12 !== Symbol.unscopables) return Gt.get(e6, t12, e6);
    }, has: /* @__PURE__ */ __name((e6, t12) => "_" !== t12[0] && !E(t12), "has") });
    __name(getContext2, "getContext");
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    Xt = true;
    __name(applyOptions, "applyOptions");
    __name(callHook$1, "callHook$1");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions2, "mergeOptions");
    Yt = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray2, created: mergeAsArray2, beforeMount: mergeAsArray2, mounted: mergeAsArray2, beforeUpdate: mergeAsArray2, updated: mergeAsArray2, beforeDestroy: mergeAsArray2, beforeUnmount: mergeAsArray2, destroyed: mergeAsArray2, unmounted: mergeAsArray2, activated: mergeAsArray2, deactivated: mergeAsArray2, errorCaptured: mergeAsArray2, serverPrefetch: mergeAsArray2, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e6, t12) {
      if (!e6) return t12;
      if (!t12) return e6;
      const n5 = n(/* @__PURE__ */ Object.create(null), e6);
      for (const r11 in t12) n5[r11] = mergeAsArray2(e6[r11], t12[r11]);
      return n5;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e6, t12) {
      return mergeObjectOptions(normalizeInject(e6), normalizeInject(t12));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray2, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    Qt = 0;
    __name(createAppAPI, "createAppAPI");
    en2 = null;
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    tn2 = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(tn2), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e6) => Object.getPrototypeOf(e6) === tn2, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    nn2 = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e6) => "_" === e6[0] || "$stable" === e6, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e6) => i(e6) ? e6.map(normalizeVNode$1) : [normalizeVNode$1(e6)], "normalizeSlotValue");
    normalizeSlot2 = /* @__PURE__ */ __name((e6, t12, n5) => {
      if (t12._n) return t12;
      const r11 = withCtx((...e7) => normalizeSlotValue(t12(...e7)), n5);
      return r11._c = false, r11;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e6, t12, n5) => {
      const r11 = e6._ctx;
      for (const n6 in e6) {
        if (isInternalKey(n6)) continue;
        const s6 = e6[n6];
        if (isFunction2(s6)) t12[n6] = normalizeSlot2(0, s6, r11);
        else if (null != s6) {
          const e7 = normalizeSlotValue(s6);
          t12[n6] = () => e7;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e6, t12) => {
      const n5 = normalizeSlotValue(t12);
      e6.slots.default = () => n5;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e6, t12, n5) => {
      for (const r11 in t12) !n5 && isInternalKey(r11) || (e6[r11] = t12[r11]);
    }, "assignSlots");
    rn2 = queueEffectWithSuspense;
    __name(createRenderer, "createRenderer");
    __name(createHydrationRenderer, "createHydrationRenderer");
    __name(baseCreateRenderer, "baseCreateRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(needTransition, "needTransition");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    sn = Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(sn), "useSSRContext");
    __name(watchEffect, "watchEffect");
    __name(watchSyncEffect, "watchSyncEffect");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    getModelModifiers = /* @__PURE__ */ __name((e6, t12) => "modelValue" === t12 || "model-value" === t12 ? e6.modelModifiers : e6[`${t12}Modifiers`] || e6[`${p(t12)}Modifiers`] || e6[`${d(t12)}Modifiers`], "getModelModifiers");
    __name(emit2, "emit");
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot$1, "renderComponentRoot$1");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e6) => {
      let t12;
      for (const n5 in e6) ("class" === n5 || "style" === n5 || isOn(n5)) && ((t12 || (t12 = {}))[n5] = e6[n5]);
      return t12;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e6, t12) => {
      const n5 = {};
      for (const r11 in e6) isModelListener(r11) && r11.slice(9) in t12 || (n5[r11] = e6[r11]);
      return n5;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    isSuspense = /* @__PURE__ */ __name((e6) => e6.__isSuspense, "isSuspense");
    on3 = 0;
    an2 = { name: "Suspense", __isSuspense: true, process(e6, t12, n5, r11, s6, o6, i6, a7, l5, c4) {
      if (null == e6) !function(e7, t13, n6, r12, s7, o7, i7, a8, l6) {
        const { p: c5, o: { createElement: u4 } } = l6, p4 = u4("div"), d7 = e7.suspense = createSuspenseBoundary(e7, s7, r12, t13, p4, n6, o7, i7, a8, l6);
        c5(null, d7.pendingBranch = e7.ssContent, p4, null, r12, d7, o7, i7), d7.deps > 0 ? (triggerEvent(e7, "onPending"), triggerEvent(e7, "onFallback"), c5(null, e7.ssFallback, t13, n6, r12, null, o7, i7), setActiveBranch(d7, e7.ssFallback)) : d7.resolve(false, true);
      }(t12, n5, r11, s6, o6, i6, a7, l5, c4);
      else {
        if (o6 && o6.deps > 0 && !e6.suspense.isInFallback) return t12.suspense = e6.suspense, t12.suspense.vnode = t12, void (t12.el = e6.el);
        !function(e7, t13, n6, r12, s7, o7, i7, a8, { p: l6, um: c5, o: { createElement: u4 } }) {
          const p4 = t13.suspense = e7.suspense;
          p4.vnode = t13, t13.el = e7.el;
          const d7 = t13.ssContent, f5 = t13.ssFallback, { activeBranch: g4, pendingBranch: m5, isInFallback: y4, isHydrating: v6 } = p4;
          if (m5) p4.pendingBranch = d7, isSameVNodeType(d7, m5) ? (l6(m5, d7, p4.hiddenContainer, null, s7, p4, o7, i7, a8), p4.deps <= 0 ? p4.resolve() : y4 && (v6 || (l6(g4, f5, n6, r12, s7, null, o7, i7, a8), setActiveBranch(p4, f5)))) : (p4.pendingId = on3++, v6 ? (p4.isHydrating = false, p4.activeBranch = m5) : c5(m5, s7, p4), p4.deps = 0, p4.effects.length = 0, p4.hiddenContainer = u4("div"), y4 ? (l6(null, d7, p4.hiddenContainer, null, s7, p4, o7, i7, a8), p4.deps <= 0 ? p4.resolve() : (l6(g4, f5, n6, r12, s7, null, o7, i7, a8), setActiveBranch(p4, f5))) : g4 && isSameVNodeType(d7, g4) ? (l6(g4, d7, n6, r12, s7, p4, o7, i7, a8), p4.resolve(true)) : (l6(null, d7, p4.hiddenContainer, null, s7, p4, o7, i7, a8), p4.deps <= 0 && p4.resolve()));
          else if (g4 && isSameVNodeType(d7, g4)) l6(g4, d7, n6, r12, s7, p4, o7, i7, a8), setActiveBranch(p4, d7);
          else if (triggerEvent(t13, "onPending"), p4.pendingBranch = d7, 512 & d7.shapeFlag ? p4.pendingId = d7.component.suspenseId : p4.pendingId = on3++, l6(null, d7, p4.hiddenContainer, null, s7, p4, o7, i7, a8), p4.deps <= 0) p4.resolve();
          else {
            const { timeout: e8, pendingId: t14 } = p4;
            e8 > 0 ? setTimeout(() => {
              p4.pendingId === t14 && p4.fallback(f5);
            }, e8) : 0 === e8 && p4.fallback(f5);
          }
        }(e6, t12, n5, r11, s6, i6, a7, l5, c4);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e6, t12, n5, r11, s6, o6, i6, a7, l5) {
      const c4 = t12.suspense = createSuspenseBoundary(t12, r11, n5, e6.parentNode, document.createElement("div"), null, s6, o6, i6, a7, true), u4 = l5(e6, c4.pendingBranch = t12.ssContent, n5, c4, o6, i6);
      0 === c4.deps && c4.resolve(false, true);
      return u4;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e6) {
      const { shapeFlag: t12, children: n5 } = e6, r11 = 32 & t12;
      e6.ssContent = normalizeSuspenseSlot(r11 ? n5.default : n5), e6.ssFallback = r11 ? normalizeSuspenseSlot(n5.fallback) : createVNode(un);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(queueEffectWithSuspense, "queueEffectWithSuspense");
    __name(setActiveBranch, "setActiveBranch");
    ln = Symbol.for("v-fgt");
    cn = Symbol.for("v-txt");
    un = Symbol.for("v-cmt");
    pn2 = Symbol.for("v-stc");
    dn = [];
    fn = null;
    __name(openBlock, "openBlock");
    __name(closeBlock, "closeBlock");
    hn = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(setupBlock, "setupBlock");
    __name(createBlock, "createBlock");
    __name(isVNode$2, "isVNode$2");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e6 }) => null != e6 ? e6 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e6, ref_key: t12, ref_for: n5 }) => ("number" == typeof e6 && (e6 = "" + e6), null != e6 ? isString2(e6) || isRef2(e6) || isFunction2(e6) ? { i: Ct, r: e6, k: t12, f: !!n5 } : e6 : null), "normalizeRef");
    __name(createBaseVNode, "createBaseVNode");
    createVNode = /* @__PURE__ */ __name(function(e6, t12 = null, n5 = null, r11 = 0, s6 = null, o6 = false) {
      e6 && e6 !== Kt || (e6 = un);
      if (isVNode$2(e6)) {
        const r12 = cloneVNode(e6, t12, true);
        return n5 && normalizeChildren(r12, n5), hn > 0 && !o6 && fn && (6 & r12.shapeFlag ? fn[fn.indexOf(e6)] = r12 : fn.push(r12)), r12.patchFlag = -2, r12;
      }
      i6 = e6, isFunction2(i6) && "__vccOpts" in i6 && (e6 = e6.__vccOpts);
      var i6;
      if (t12) {
        t12 = guardReactiveProps(t12);
        let { class: e7, style: n6 } = t12;
        e7 && !isString2(e7) && (t12.class = normalizeClass(e7)), isObject2(n6) && (isProxy(n6) && !i(n6) && (n6 = n({}, n6)), t12.style = normalizeStyle(n6));
      }
      const a7 = isString2(e6) ? 1 : isSuspense(e6) ? 128 : isTeleport(e6) ? 64 : isObject2(e6) ? 4 : isFunction2(e6) ? 2 : 0;
      return createBaseVNode(e6, t12, n5, r11, s6, a7, o6, true);
    }, "createVNode");
    __name(guardReactiveProps, "guardReactiveProps");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(normalizeVNode$1, "normalizeVNode$1");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    gn = createAppContext();
    mn = 0;
    __name(createComponentInstance$1, "createComponentInstance$1");
    yn2 = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => yn2 || Ct, "getCurrentInstance");
    {
      const e6 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t12, n5) => {
        let r11;
        return (r11 = e6[t12]) || (r11 = e6[t12] = []), r11.push(n5), (e7) => {
          r11.length > 1 ? r11.forEach((t13) => t13(e7)) : r11[0](e7);
        };
      }, "registerGlobalSetter");
      vn = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => yn2 = e7), _n2 = registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => kn = e7);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e6) => {
      const t12 = yn2;
      return vn(e6), e6.scope.on(), () => {
        e6.scope.off(), vn(t12);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      yn2 && yn2.scope.off(), vn(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    kn = false;
    __name(setupComponent$1, "setupComponent$1");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    Sn2 = { get: /* @__PURE__ */ __name((e6, t12) => (track(e6, 0, ""), e6[t12]), "get") };
    __name(createSetupContext, "createSetupContext");
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e6, t12) => {
      const n5 = function(e7, t13, n6 = false) {
        let r11, s6;
        return isFunction2(e7) ? r11 = e7 : (r11 = e7.get, s6 = e7.set), new ComputedRefImpl(r11, s6, n6);
      }(e6, 0, kn);
      return n5;
    }, "computed");
    __name(h4, "h");
    __name(isMemoSame, "isMemoSame");
    wn = "3.5.17";
    Rn = NOOP;
    Tn = pt;
    An = _t;
    setDevtoolsHook = /* @__PURE__ */ __name(function(e6, t12) {
      _t = e6, _t ? (_t.enabled = true, bt2.forEach(({ event: e7, args: t13 }) => _t.emit(e7, ...t13)), bt2 = []) : bt2 = [];
    }, "setDevtoolsHook");
    xn = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode: isVNode$2, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: ensureValidVNode$1, pushWarningContext: /* @__PURE__ */ __name(function(e6) {
      ut.push(e6);
    }, "pushWarningContext"), popWarningContext: /* @__PURE__ */ __name(function() {
      ut.pop();
    }, "popWarningContext") };
    En = "undefined" != typeof document ? document : null;
    Pn = En && En.createElement("template");
    On = { insert: /* @__PURE__ */ __name((e6, t12, n5) => {
      t12.insertBefore(e6, n5 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e6) => {
      const t12 = e6.parentNode;
      t12 && t12.removeChild(e6);
    }, "remove"), createElement: /* @__PURE__ */ __name((e6, t12, n5, r11) => {
      const s6 = "svg" === t12 ? En.createElementNS("http://www.w3.org/2000/svg", e6) : "mathml" === t12 ? En.createElementNS("http://www.w3.org/1998/Math/MathML", e6) : n5 ? En.createElement(e6, { is: n5 }) : En.createElement(e6);
      return "select" === e6 && r11 && null != r11.multiple && s6.setAttribute("multiple", r11.multiple), s6;
    }, "createElement"), createText: /* @__PURE__ */ __name((e6) => En.createTextNode(e6), "createText"), createComment: /* @__PURE__ */ __name((e6) => En.createComment(e6), "createComment"), setText: /* @__PURE__ */ __name((e6, t12) => {
      e6.nodeValue = t12;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e6, t12) => {
      e6.textContent = t12;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e6) => e6.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e6) => e6.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e6) => En.querySelector(e6), "querySelector"), setScopeId(e6, t12) {
      e6.setAttribute(t12, "");
    }, insertStaticContent(e6, t12, n5, r11, s6, o6) {
      const i6 = n5 ? n5.previousSibling : t12.lastChild;
      if (s6 && (s6 === o6 || s6.nextSibling)) for (; t12.insertBefore(s6.cloneNode(true), n5), s6 !== o6 && (s6 = s6.nextSibling); ) ;
      else {
        Pn.innerHTML = "svg" === r11 ? `<svg>${e6}</svg>` : "mathml" === r11 ? `<math>${e6}</math>` : e6;
        const s7 = Pn.content;
        if ("svg" === r11 || "mathml" === r11) {
          const e7 = s7.firstChild;
          for (; e7.firstChild; ) s7.appendChild(e7.firstChild);
          s7.removeChild(e7);
        }
        t12.insertBefore(s7, n5);
      }
      return [i6 ? i6.nextSibling : t12.firstChild, n5 ? n5.previousSibling : t12.lastChild];
    } };
    Nn = "transition";
    $n = "animation";
    Hn = Symbol("_vtc");
    Vn = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    Mn = n({}, Et, Vn);
    jn = ((e6) => (e6.displayName = "Transition", e6.props = Mn, e6))((e6, { slots: t12 }) => h4(Pt, resolveTransitionProps(e6), t12));
    callHook = /* @__PURE__ */ __name((e6, t12 = []) => {
      i(e6) ? e6.forEach((e7) => e7(...t12)) : e6 && e6(...t12);
    }, "callHook");
    hasExplicitCallback = /* @__PURE__ */ __name((e6) => !!e6 && (i(e6) ? e6.some((e7) => e7.length > 1) : e6.length > 1), "hasExplicitCallback");
    __name(resolveTransitionProps, "resolveTransitionProps");
    __name(NumberOf, "NumberOf");
    __name(addTransitionClass, "addTransitionClass");
    __name(removeTransitionClass, "removeTransitionClass");
    __name(nextFrame, "nextFrame");
    In = 0;
    __name(whenTransitionEnds, "whenTransitionEnds");
    __name(getTransitionInfo, "getTransitionInfo");
    __name(getTimeout, "getTimeout");
    __name(toMs, "toMs");
    __name(forceReflow, "forceReflow");
    Ln = Symbol("_vod");
    Dn = Symbol("_vsh");
    Bn = { beforeMount(e6, { value: t12 }, { transition: n5 }) {
      e6[Ln] = "none" === e6.style.display ? "" : e6.style.display, n5 && t12 ? n5.beforeEnter(e6) : setDisplay(e6, t12);
    }, mounted(e6, { value: t12 }, { transition: n5 }) {
      n5 && t12 && n5.enter(e6);
    }, updated(e6, { value: t12, oldValue: n5 }, { transition: r11 }) {
      !t12 != !n5 && (r11 ? t12 ? (r11.beforeEnter(e6), setDisplay(e6, true), r11.enter(e6)) : r11.leave(e6, () => {
        setDisplay(e6, false);
      }) : setDisplay(e6, t12));
    }, beforeUnmount(e6, { value: t12 }) {
      setDisplay(e6, t12);
    } };
    __name(setDisplay, "setDisplay");
    Fn = Symbol("");
    __name(setVarsOnVNode, "setVarsOnVNode");
    __name(setVarsOnNode, "setVarsOnNode");
    Un = /(^|;)\s*display\s*:/;
    Wn = /\s*!important$/;
    __name(setStyle, "setStyle");
    zn = ["Webkit", "Moz", "ms"];
    qn = {};
    Kn = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    __name(addEventListener, "addEventListener");
    Jn = Symbol("_vei");
    __name(patchEvent, "patchEvent");
    Gn = /(?:Once|Passive|Capture)$/;
    Zn2 = 0;
    Xn = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => Zn2 || (Xn.then(() => Zn2 = 0), Zn2 = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e6) => 111 === e6.charCodeAt(0) && 110 === e6.charCodeAt(1) && e6.charCodeAt(2) > 96 && e6.charCodeAt(2) < 123, "isNativeOn");
    Yn = {};
    __name(defineCustomElement, "defineCustomElement");
    Qn = "undefined" != typeof HTMLElement ? HTMLElement : class {
    };
    VueElement = class _VueElement extends Qn {
      static {
        __name(this, "VueElement");
      }
      constructor(e6, t12 = {}, n5 = createApp) {
        super(), this._def = e6, this._props = t12, this._createApp = n5, this._isVueCE = true, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = false, this._resolved = false, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n5 !== createApp ? this._root = this.shadowRoot : false !== e6.shadowRoot ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
      }
      connectedCallback() {
        if (!this.isConnected) return;
        this.shadowRoot || this._resolved || this._parseSlots(), this._connected = true;
        let e6 = this;
        for (; e6 = e6 && (e6.parentNode || e6.host); ) if (e6 instanceof _VueElement) {
          this._parent = e6;
          break;
        }
        this._instance || (this._resolved ? this._mount(this._def) : e6 && e6._pendingResolve ? this._pendingResolve = e6._pendingResolve.then(() => {
          this._pendingResolve = void 0, this._resolveDef();
        }) : this._resolveDef());
      }
      _setParent(e6 = this._parent) {
        e6 && (this._instance.parent = e6._instance, this._inheritParentContext(e6));
      }
      _inheritParentContext(e6 = this._parent) {
        e6 && this._app && Object.setPrototypeOf(this._app._context.provides, e6._instance.provides);
      }
      disconnectedCallback() {
        this._connected = false, nextTick2(() => {
          this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
        });
      }
      _resolveDef() {
        if (this._pendingResolve) return;
        for (let e7 = 0; e7 < this.attributes.length; e7++) this._setAttr(this.attributes[e7].name);
        this._ob = new MutationObserver((e7) => {
          for (const t12 of e7) this._setAttr(t12.attributeName);
        }), this._ob.observe(this, { attributes: true });
        const resolve2 = /* @__PURE__ */ __name((e7, t12 = false) => {
          this._resolved = true, this._pendingResolve = void 0;
          const { props: n5, styles: r11 } = e7;
          let s6;
          if (n5 && !i(n5)) for (const e8 in n5) {
            const t13 = n5[e8];
            (t13 === Number || t13 && t13.type === Number) && (e8 in this._props && (this._props[e8] = toNumber(this._props[e8])), (s6 || (s6 = /* @__PURE__ */ Object.create(null)))[p(e8)] = true);
          }
          this._numberProps = s6, this._resolveProps(e7), this.shadowRoot && this._applyStyles(r11), this._mount(e7);
        }, "resolve"), e6 = this._def.__asyncLoader;
        e6 ? this._pendingResolve = e6().then((e7) => {
          e7.configureApp = this._def.configureApp, resolve2(this._def = e7, true);
        }) : resolve2(this._def);
      }
      _mount(e6) {
        this._app = this._createApp(e6), this._inheritParentContext(), e6.configureApp && e6.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
        const t12 = this._instance && this._instance.exposed;
        if (t12) for (const e7 in t12) hasOwn(this, e7) || Object.defineProperty(this, e7, { get: /* @__PURE__ */ __name(() => unref(t12[e7]), "get") });
      }
      _resolveProps(e6) {
        const { props: t12 } = e6, n5 = i(t12) ? t12 : Object.keys(t12 || {});
        for (const e7 of Object.keys(this)) "_" !== e7[0] && n5.includes(e7) && this._setProp(e7, this[e7]);
        for (const e7 of n5.map(p)) Object.defineProperty(this, e7, { get() {
          return this._getProp(e7);
        }, set(t13) {
          this._setProp(e7, t13, true, true);
        } });
      }
      _setAttr(e6) {
        if (e6.startsWith("data-v-")) return;
        const t12 = this.hasAttribute(e6);
        let n5 = t12 ? this.getAttribute(e6) : Yn;
        const r11 = p(e6);
        t12 && this._numberProps && this._numberProps[r11] && (n5 = toNumber(n5)), this._setProp(r11, n5, false, true);
      }
      _getProp(e6) {
        return this._props[e6];
      }
      _setProp(e6, t12, n5 = true, r11 = false) {
        if (t12 !== this._props[e6] && (t12 === Yn ? delete this._props[e6] : (this._props[e6] = t12, "key" === e6 && this._app && (this._app._ceVNode.key = t12)), r11 && this._instance && this._update(), n5)) {
          const n6 = this._ob;
          n6 && n6.disconnect(), true === t12 ? this.setAttribute(d(e6), "") : "string" == typeof t12 || "number" == typeof t12 ? this.setAttribute(d(e6), t12 + "") : t12 || this.removeAttribute(d(e6)), n6 && n6.observe(this, { attributes: true });
        }
      }
      _update() {
        const e6 = this._createVNode();
        this._app && (e6.appContext = this._app._context), render(e6, this._root);
      }
      _createVNode() {
        const e6 = {};
        this.shadowRoot || (e6.onVnodeMounted = e6.onVnodeUpdated = this._renderSlots.bind(this));
        const t12 = createVNode(this._def, n(e6, this._props));
        return this._instance || (t12.ce = (e7) => {
          this._instance = e7, e7.ce = this, e7.isCE = true;
          const dispatch = /* @__PURE__ */ __name((e8, t13) => {
            this.dispatchEvent(new CustomEvent(e8, isPlainObject(t13[0]) ? n({ detail: t13 }, t13[0]) : { detail: t13 }));
          }, "dispatch");
          e7.emit = (e8, ...t13) => {
            dispatch(e8, t13), d(e8) !== e8 && dispatch(d(e8), t13);
          }, this._setParent();
        }), t12;
      }
      _applyStyles(e6, t12) {
        if (!e6) return;
        if (t12) {
          if (t12 === this._def || this._styleChildren.has(t12)) return;
          this._styleChildren.add(t12);
        }
        const n5 = this._nonce;
        for (let t13 = e6.length - 1; t13 >= 0; t13--) {
          const r11 = document.createElement("style");
          n5 && r11.setAttribute("nonce", n5), r11.textContent = e6[t13], this.shadowRoot.prepend(r11);
        }
      }
      _parseSlots() {
        const e6 = this._slots = {};
        let t12;
        for (; t12 = this.firstChild; ) {
          const n5 = 1 === t12.nodeType && t12.getAttribute("slot") || "default";
          (e6[n5] || (e6[n5] = [])).push(t12), this.removeChild(t12);
        }
      }
      _renderSlots() {
        const e6 = (this._teleportTarget || this).querySelectorAll("slot"), t12 = this._instance.type.__scopeId;
        for (let n5 = 0; n5 < e6.length; n5++) {
          const r11 = e6[n5], s6 = r11.getAttribute("name") || "default", o6 = this._slots[s6], i6 = r11.parentNode;
          if (o6) for (const e7 of o6) {
            if (t12 && 1 === e7.nodeType) {
              const n6 = t12 + "-s", r12 = document.createTreeWalker(e7, 1);
              let s7;
              for (e7.setAttribute(n6, ""); s7 = r12.nextNode(); ) s7.setAttribute(n6, "");
            }
            i6.insertBefore(e7, r11);
          }
          else for (; r11.firstChild; ) i6.insertBefore(r11.firstChild, r11);
          i6.removeChild(r11);
        }
      }
      _injectChildStyle(e6) {
        this._applyStyles(e6.styles, e6);
      }
      _removeChildStyle(e6) {
      }
    };
    __name(useHost, "useHost");
    er = /* @__PURE__ */ new WeakMap();
    tr = /* @__PURE__ */ new WeakMap();
    nr = Symbol("_moveCb");
    rr2 = Symbol("_enterCb");
    sr = ((e6) => (delete e6.props.mode, e6))({ name: "TransitionGroup", props: n({}, Mn, { tag: String, moveClass: String }), setup(e6, { slots: t12 }) {
      const n5 = getCurrentInstance(), r11 = useTransitionState();
      let s6, o6;
      return Dt(() => {
        if (!s6.length) return;
        const t13 = e6.moveClass || `${e6.name || "v"}-move`;
        if (!function(e7, t14, n6) {
          const r13 = e7.cloneNode(), s7 = e7[Hn];
          s7 && s7.forEach((e8) => {
            e8.split(/\s+/).forEach((e9) => e9 && r13.classList.remove(e9));
          });
          n6.split(/\s+/).forEach((e8) => e8 && r13.classList.add(e8)), r13.style.display = "none";
          const o7 = 1 === t14.nodeType ? t14 : t14.parentNode;
          o7.appendChild(r13);
          const { hasTransform: i6 } = getTransitionInfo(r13);
          return o7.removeChild(r13), i6;
        }(s6[0].el, n5.vnode.el, t13)) return void (s6 = []);
        s6.forEach(callPendingCbs), s6.forEach(recordPosition);
        const r12 = s6.filter(applyTranslation);
        forceReflow(), r12.forEach((e7) => {
          const n6 = e7.el, r13 = n6.style;
          addTransitionClass(n6, t13), r13.transform = r13.webkitTransform = r13.transitionDuration = "";
          const s7 = n6[nr] = (e8) => {
            e8 && e8.target !== n6 || e8 && !/transform$/.test(e8.propertyName) || (n6.removeEventListener("transitionend", s7), n6[nr] = null, removeTransitionClass(n6, t13));
          };
          n6.addEventListener("transitionend", s7);
        }), s6 = [];
      }), () => {
        const i6 = toRaw(e6), a7 = resolveTransitionProps(i6);
        let l5 = i6.tag || ln;
        if (s6 = [], o6) for (let e7 = 0; e7 < o6.length; e7++) {
          const t13 = o6[e7];
          t13.el && t13.el instanceof Element && (s6.push(t13), setTransitionHooks(t13, resolveTransitionHooks(t13, a7, r11, n5)), er.set(t13, t13.el.getBoundingClientRect()));
        }
        o6 = t12.default ? getTransitionRawChildren(t12.default()) : [];
        for (let e7 = 0; e7 < o6.length; e7++) {
          const t13 = o6[e7];
          null != t13.key && setTransitionHooks(t13, resolveTransitionHooks(t13, a7, r11, n5));
        }
        return createVNode(l5, null, o6);
      };
    } });
    __name(callPendingCbs, "callPendingCbs");
    __name(recordPosition, "recordPosition");
    __name(applyTranslation, "applyTranslation");
    getModelAssigner = /* @__PURE__ */ __name((e6) => {
      const t12 = e6.props["onUpdate:modelValue"] || false;
      return i(t12) ? (e7) => invokeArrayFns(t12, e7) : t12;
    }, "getModelAssigner");
    __name(onCompositionStart, "onCompositionStart");
    __name(onCompositionEnd, "onCompositionEnd");
    or = Symbol("_assign");
    ir = { created(e6, { modifiers: { lazy: t12, trim: n5, number: r11 } }, s6) {
      e6[or] = getModelAssigner(s6);
      const o6 = r11 || s6.props && "number" === s6.props.type;
      addEventListener(e6, t12 ? "change" : "input", (t13) => {
        if (t13.target.composing) return;
        let r12 = e6.value;
        n5 && (r12 = r12.trim()), o6 && (r12 = looseToNumber(r12)), e6[or](r12);
      }), n5 && addEventListener(e6, "change", () => {
        e6.value = e6.value.trim();
      }), t12 || (addEventListener(e6, "compositionstart", onCompositionStart), addEventListener(e6, "compositionend", onCompositionEnd), addEventListener(e6, "change", onCompositionEnd));
    }, mounted(e6, { value: t12 }) {
      e6.value = null == t12 ? "" : t12;
    }, beforeUpdate(e6, { value: t12, oldValue: n5, modifiers: { lazy: r11, trim: s6, number: o6 } }, i6) {
      if (e6[or] = getModelAssigner(i6), e6.composing) return;
      const a7 = null == t12 ? "" : t12;
      if ((!o6 && "number" !== e6.type || /^0\d/.test(e6.value) ? e6.value : looseToNumber(e6.value)) !== a7) {
        if (document.activeElement === e6 && "range" !== e6.type) {
          if (r11 && t12 === n5) return;
          if (s6 && e6.value.trim() === a7) return;
        }
        e6.value = a7;
      }
    } };
    ar3 = { deep: true, created(e6, t12, n5) {
      e6[or] = getModelAssigner(n5), addEventListener(e6, "change", () => {
        const t13 = e6._modelValue, n6 = getValue(e6), r11 = e6.checked, s6 = e6[or];
        if (i(t13)) {
          const e7 = looseIndexOf(t13, n6), o6 = -1 !== e7;
          if (r11 && !o6) s6(t13.concat(n6));
          else if (!r11 && o6) {
            const n7 = [...t13];
            n7.splice(e7, 1), s6(n7);
          }
        } else if (isSet(t13)) {
          const e7 = new Set(t13);
          r11 ? e7.add(n6) : e7.delete(n6), s6(e7);
        } else s6(getCheckboxValue(e6, r11));
      });
    }, mounted: setChecked, beforeUpdate(e6, t12, n5) {
      e6[or] = getModelAssigner(n5), setChecked(e6, t12, n5);
    } };
    __name(setChecked, "setChecked");
    lr = { created(e6, { value: t12 }, n5) {
      e6.checked = looseEqual(t12, n5.props.value), e6[or] = getModelAssigner(n5), addEventListener(e6, "change", () => {
        e6[or](getValue(e6));
      });
    }, beforeUpdate(e6, { value: t12, oldValue: n5 }, r11) {
      e6[or] = getModelAssigner(r11), t12 !== n5 && (e6.checked = looseEqual(t12, r11.props.value));
    } };
    cr = { deep: true, created(e6, { value: t12, modifiers: { number: n5 } }, r11) {
      const s6 = isSet(t12);
      addEventListener(e6, "change", () => {
        const t13 = Array.prototype.filter.call(e6.options, (e7) => e7.selected).map((e7) => n5 ? looseToNumber(getValue(e7)) : getValue(e7));
        e6[or](e6.multiple ? s6 ? new Set(t13) : t13 : t13[0]), e6._assigning = true, nextTick2(() => {
          e6._assigning = false;
        });
      }), e6[or] = getModelAssigner(r11);
    }, mounted(e6, { value: t12 }) {
      setSelected(e6, t12);
    }, beforeUpdate(e6, t12, n5) {
      e6[or] = getModelAssigner(n5);
    }, updated(e6, { value: t12 }) {
      e6._assigning || setSelected(e6, t12);
    } };
    __name(setSelected, "setSelected");
    __name(getValue, "getValue");
    __name(getCheckboxValue, "getCheckboxValue");
    ur2 = { created(e6, t12, n5) {
      callModelHook(e6, t12, n5, null, "created");
    }, mounted(e6, t12, n5) {
      callModelHook(e6, t12, n5, null, "mounted");
    }, beforeUpdate(e6, t12, n5, r11) {
      callModelHook(e6, t12, n5, r11, "beforeUpdate");
    }, updated(e6, t12, n5, r11) {
      callModelHook(e6, t12, n5, r11, "updated");
    } };
    __name(resolveDynamicModel, "resolveDynamicModel");
    __name(callModelHook, "callModelHook");
    pr = ["ctrl", "shift", "alt", "meta"];
    dr = { stop: /* @__PURE__ */ __name((e6) => e6.stopPropagation(), "stop"), prevent: /* @__PURE__ */ __name((e6) => e6.preventDefault(), "prevent"), self: /* @__PURE__ */ __name((e6) => e6.target !== e6.currentTarget, "self"), ctrl: /* @__PURE__ */ __name((e6) => !e6.ctrlKey, "ctrl"), shift: /* @__PURE__ */ __name((e6) => !e6.shiftKey, "shift"), alt: /* @__PURE__ */ __name((e6) => !e6.altKey, "alt"), meta: /* @__PURE__ */ __name((e6) => !e6.metaKey, "meta"), left: /* @__PURE__ */ __name((e6) => "button" in e6 && 0 !== e6.button, "left"), middle: /* @__PURE__ */ __name((e6) => "button" in e6 && 1 !== e6.button, "middle"), right: /* @__PURE__ */ __name((e6) => "button" in e6 && 2 !== e6.button, "right"), exact: /* @__PURE__ */ __name((e6, t12) => pr.some((n5) => e6[`${n5}Key`] && !t12.includes(n5)), "exact") };
    fr = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
    hr = n({ patchProp: /* @__PURE__ */ __name((e6, t12, n5, r11, s6, o6) => {
      const i6 = "svg" === s6;
      "class" === t12 ? function(e7, t13, n6) {
        const r12 = e7[Hn];
        r12 && (t13 = (t13 ? [t13, ...r12] : [...r12]).join(" ")), null == t13 ? e7.removeAttribute("class") : n6 ? e7.setAttribute("class", t13) : e7.className = t13;
      }(e6, r11, i6) : "style" === t12 ? function(e7, t13, n6) {
        const r12 = e7.style, s7 = isString2(n6);
        let o7 = false;
        if (n6 && !s7) {
          if (t13) if (isString2(t13)) for (const e8 of t13.split(";")) {
            const t14 = e8.slice(0, e8.indexOf(":")).trim();
            null == n6[t14] && setStyle(r12, t14, "");
          }
          else for (const e8 in t13) null == n6[e8] && setStyle(r12, e8, "");
          for (const e8 in n6) "display" === e8 && (o7 = true), setStyle(r12, e8, n6[e8]);
        } else if (s7) {
          if (t13 !== n6) {
            const e8 = r12[Fn];
            e8 && (n6 += ";" + e8), r12.cssText = n6, o7 = Un.test(n6);
          }
        } else t13 && e7.removeAttribute("style");
        Ln in e7 && (e7[Ln] = o7 ? r12.display : "", e7[Dn] && (r12.display = "none"));
      }(e6, n5, r11) : isOn(t12) ? isModelListener(t12) || patchEvent(e6, t12, 0, r11, o6) : ("." === t12[0] ? (t12 = t12.slice(1), 1) : "^" === t12[0] ? (t12 = t12.slice(1), 0) : function(e7, t13, n6, r12) {
        if (r12) return "innerHTML" === t13 || "textContent" === t13 || !!(t13 in e7 && isNativeOn(t13) && isFunction2(n6));
        if ("spellcheck" === t13 || "draggable" === t13 || "translate" === t13 || "autocorrect" === t13) return false;
        if ("form" === t13) return false;
        if ("list" === t13 && "INPUT" === e7.tagName) return false;
        if ("type" === t13 && "TEXTAREA" === e7.tagName) return false;
        if ("width" === t13 || "height" === t13) {
          const t14 = e7.tagName;
          if ("IMG" === t14 || "VIDEO" === t14 || "CANVAS" === t14 || "SOURCE" === t14) return false;
        }
        if (isNativeOn(t13) && isString2(n6)) return false;
        return t13 in e7;
      }(e6, t12, r11, i6)) ? (patchDOMProp(e6, t12, r11), e6.tagName.includes("-") || "value" !== t12 && "checked" !== t12 && "selected" !== t12 || patchAttr(e6, t12, r11, i6, 0, "value" !== t12)) : !e6._isVueCE || !/[A-Z]/.test(t12) && isString2(r11) ? ("true-value" === t12 ? e6._trueValue = r11 : "false-value" === t12 && (e6._falseValue = r11), patchAttr(e6, t12, r11, i6)) : patchDOMProp(e6, p(t12), r11, 0, t12);
    }, "patchProp") }, On);
    mr = false;
    __name(ensureRenderer, "ensureRenderer");
    __name(ensureHydrationRenderer, "ensureHydrationRenderer");
    render = /* @__PURE__ */ __name((...e6) => {
      ensureRenderer().render(...e6);
    }, "render");
    createApp = /* @__PURE__ */ __name((...e6) => {
      const t12 = ensureRenderer().createApp(...e6), { mount: n5 } = t12;
      return t12.mount = (e7) => {
        const r11 = normalizeContainer(e7);
        if (!r11) return;
        const s6 = t12._component;
        isFunction2(s6) || s6.render || s6.template || (s6.template = r11.innerHTML), 1 === r11.nodeType && (r11.textContent = "");
        const o6 = n5(r11, false, resolveRootNamespace(r11));
        return r11 instanceof Element && (r11.removeAttribute("v-cloak"), r11.setAttribute("data-v-app", "")), o6;
      }, t12;
    }, "createApp");
    createSSRApp = /* @__PURE__ */ __name((...e6) => {
      const t12 = ensureHydrationRenderer().createApp(...e6), { mount: n5 } = t12;
      return t12.mount = (e7) => {
        const t13 = normalizeContainer(e7);
        if (t13) return n5(t13, true, resolveRootNamespace(t13));
      }, t12;
    }, "createSSRApp");
    __name(resolveRootNamespace, "resolveRootNamespace");
    __name(normalizeContainer, "normalizeContainer");
    yr2 = false;
    initDirectivesForSSR = /* @__PURE__ */ __name(() => {
      yr2 || (yr2 = true, ir.getSSRProps = ({ value: e6 }) => ({ value: e6 }), lr.getSSRProps = ({ value: e6 }, t12) => {
        if (t12.props && looseEqual(t12.props.value, e6)) return { checked: true };
      }, ar3.getSSRProps = ({ value: e6 }, t12) => {
        if (i(e6)) {
          if (t12.props && looseIndexOf(e6, t12.props.value) > -1) return { checked: true };
        } else if (isSet(e6)) {
          if (t12.props && e6.has(t12.props.value)) return { checked: true };
        } else if (e6) return { checked: true };
      }, ur2.getSSRProps = (e6, t12) => {
        if ("string" != typeof t12.type) return;
        const n5 = resolveDynamicModel(t12.type.toUpperCase(), t12.props && t12.props.type);
        return n5.getSSRProps ? n5.getSSRProps(e6, t12) : void 0;
      }, Bn.getSSRProps = ({ value: e6 }) => {
        if (!e6) return { style: { display: "none" } };
      });
    }, "initDirectivesForSSR");
    vr = Object.freeze(Object.defineProperty({ __proto__: null, BaseTransition: Pt, BaseTransitionPropsValidators: Et, Comment: un, DeprecationTypes: null, EffectScope, ErrorCodes: { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER", COMPONENT_UPDATE: 15, 15: "COMPONENT_UPDATE", APP_UNMOUNT_CLEANUP: 16, 16: "APP_UNMOUNT_CLEANUP" }, ErrorTypeStrings: Tn, Fragment: ln, KeepAlive: Mt, ReactiveEffect, Static: pn2, Suspense: an2, Teleport: Rt, Text: cn, TrackOpTypes: { GET: "get", HAS: "has", ITERATE: "iterate" }, Transition: jn, TransitionGroup: sr, TriggerOpTypes: { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" }, VueElement, assertNumber: /* @__PURE__ */ __name(function(e6, t12) {
    }, "assertNumber"), callWithAsyncErrorHandling, callWithErrorHandling, camelize: p, capitalize: f, cloneVNode, compatUtils: null, computed, createApp, createBlock, createCommentVNode: /* @__PURE__ */ __name(function(e6 = "", t12 = false) {
      return t12 ? (openBlock(), createBlock(un, null, e6)) : createVNode(un, null, e6);
    }, "createCommentVNode"), createElementBlock: /* @__PURE__ */ __name(function(e6, t12, n5, r11, s6, o6) {
      return setupBlock(createBaseVNode(e6, t12, n5, r11, s6, o6, true));
    }, "createElementBlock"), createElementVNode: createBaseVNode, createHydrationRenderer, createPropsRestProxy: /* @__PURE__ */ __name(function(e6, t12) {
      const n5 = {};
      for (const r11 in e6) t12.includes(r11) || Object.defineProperty(n5, r11, { enumerable: true, get: /* @__PURE__ */ __name(() => e6[r11], "get") });
      return n5;
    }, "createPropsRestProxy"), createRenderer, createSSRApp, createSlots: /* @__PURE__ */ __name(function(e6, t12) {
      for (let n5 = 0; n5 < t12.length; n5++) {
        const r11 = t12[n5];
        if (i(r11)) for (let t13 = 0; t13 < r11.length; t13++) e6[r11[t13].name] = r11[t13].fn;
        else r11 && (e6[r11.name] = r11.key ? (...e7) => {
          const t13 = r11.fn(...e7);
          return t13 && (t13.key = r11.key), t13;
        } : r11.fn);
      }
      return e6;
    }, "createSlots"), createStaticVNode: /* @__PURE__ */ __name(function(e6, t12) {
      const n5 = createVNode(pn2, null, e6);
      return n5.staticCount = t12, n5;
    }, "createStaticVNode"), createTextVNode, createVNode, customRef, defineAsyncComponent: /* @__PURE__ */ __name(function(e6) {
      isFunction2(e6) && (e6 = { loader: e6 });
      const { loader: t12, loadingComponent: n5, errorComponent: r11, delay: s6 = 200, hydrate: o6, timeout: i6, suspensible: a7 = true, onError: l5 } = e6;
      let c4, u4 = null, d7 = 0;
      const load = /* @__PURE__ */ __name(() => {
        let e7;
        return u4 || (e7 = u4 = t12().catch((e8) => {
          if (e8 = e8 instanceof Error ? e8 : new Error(String(e8)), l5) return new Promise((t13, n6) => {
            l5(e8, () => t13((d7++, u4 = null, load())), () => n6(e8), d7 + 1);
          });
          throw e8;
        }).then((t13) => e7 !== u4 && u4 ? u4 : (t13 && (t13.__esModule || "Module" === t13[Symbol.toStringTag]) && (t13 = t13.default), c4 = t13, t13)));
      }, "load");
      return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e7, t13, n6) {
        const r12 = o6 ? () => {
          const r13 = o6(() => {
            n6();
          }, (t14) => function(e8, t15) {
            if (isComment$1(e8) && "[" === e8.data) {
              let n7 = 1, r14 = e8.nextSibling;
              for (; r14; ) {
                if (1 === r14.nodeType) {
                  if (false === t15(r14)) break;
                } else if (isComment$1(r14)) if ("]" === r14.data) {
                  if (0 === --n7) break;
                } else "[" === r14.data && n7++;
                r14 = r14.nextSibling;
              }
            } else t15(e8);
          }(e7, t14));
          r13 && (t13.bum || (t13.bum = [])).push(r13), (t13.u || (t13.u = [])).push(() => true);
        } : n6;
        c4 ? r12() : load().then(() => !t13.isUnmounted && r12());
      }, get __asyncResolved() {
        return c4;
      }, setup() {
        const e7 = yn2;
        if (markAsyncBoundary(e7), c4) return () => createInnerComp(c4, e7);
        const onError = /* @__PURE__ */ __name((t14) => {
          u4 = null, handleError(t14, e7, 13, !r11);
        }, "onError");
        if (a7 && e7.suspense || kn) return load().then((t14) => () => createInnerComp(t14, e7)).catch((e8) => (onError(e8), () => r11 ? createVNode(r11, { error: e8 }) : null));
        const t13 = ref(false), o7 = ref(), l6 = ref(!!s6);
        return s6 && setTimeout(() => {
          l6.value = false;
        }, s6), null != i6 && setTimeout(() => {
          if (!t13.value && !o7.value) {
            const e8 = new Error(`Async component timed out after ${i6}ms.`);
            onError(e8), o7.value = e8;
          }
        }, i6), load().then(() => {
          t13.value = true, e7.parent && isKeepAlive(e7.parent.vnode) && e7.parent.update();
        }).catch((e8) => {
          onError(e8), o7.value = e8;
        }), () => t13.value && c4 ? createInnerComp(c4, e7) : o7.value && r11 ? createVNode(r11, { error: o7.value }) : n5 && !l6.value ? createVNode(n5) : void 0;
      } });
    }, "defineAsyncComponent"), defineComponent, defineCustomElement, defineEmits: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineEmits"), defineExpose: /* @__PURE__ */ __name(function(e6) {
    }, "defineExpose"), defineModel: /* @__PURE__ */ __name(function() {
    }, "defineModel"), defineOptions: /* @__PURE__ */ __name(function(e6) {
    }, "defineOptions"), defineProps: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineProps"), defineSSRCustomElement: /* @__PURE__ */ __name((e6, t12) => defineCustomElement(e6, t12, createSSRApp), "defineSSRCustomElement"), defineSlots: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineSlots"), devtools: An, effect: /* @__PURE__ */ __name(function(e6, t12) {
      e6.effect instanceof ReactiveEffect && (e6 = e6.effect.fn);
      const n5 = new ReactiveEffect(e6);
      t12 && n(n5, t12);
      try {
        n5.run();
      } catch (e7) {
        throw n5.stop(), e7;
      }
      const r11 = n5.run.bind(n5);
      return r11.effect = n5, r11;
    }, "effect"), effectScope: /* @__PURE__ */ __name(function(e6) {
      return new EffectScope(e6);
    }, "effectScope"), getCurrentInstance, getCurrentScope, getCurrentWatcher: /* @__PURE__ */ __name(function() {
      return ct;
    }, "getCurrentWatcher"), getTransitionRawChildren, guardReactiveProps, h: h4, handleError, hasInjectionContext, hydrate: /* @__PURE__ */ __name((...e6) => {
      ensureHydrationRenderer().hydrate(...e6);
    }, "hydrate"), hydrateOnIdle: /* @__PURE__ */ __name((e6 = 1e4) => (t12) => {
      const n5 = Ht(t12, { timeout: e6 });
      return () => Vt(n5);
    }, "hydrateOnIdle"), hydrateOnInteraction: /* @__PURE__ */ __name((e6 = []) => (t12, n5) => {
      isString2(e6) && (e6 = [e6]);
      let r11 = false;
      const doHydrate = /* @__PURE__ */ __name((e7) => {
        r11 || (r11 = true, teardown(), t12(), e7.target.dispatchEvent(new e7.constructor(e7.type, e7)));
      }, "doHydrate"), teardown = /* @__PURE__ */ __name(() => {
        n5((t13) => {
          for (const n6 of e6) t13.removeEventListener(n6, doHydrate);
        });
      }, "teardown");
      return n5((t13) => {
        for (const n6 of e6) t13.addEventListener(n6, doHydrate, { once: true });
      }), teardown;
    }, "hydrateOnInteraction"), hydrateOnMediaQuery: /* @__PURE__ */ __name((e6) => (t12) => {
      if (e6) {
        const n5 = matchMedia(e6);
        if (!n5.matches) return n5.addEventListener("change", t12, { once: true }), () => n5.removeEventListener("change", t12);
        t12();
      }
    }, "hydrateOnMediaQuery"), hydrateOnVisible: /* @__PURE__ */ __name((e6) => (t12, n5) => {
      const r11 = new IntersectionObserver((e7) => {
        for (const n6 of e7) if (n6.isIntersecting) {
          r11.disconnect(), t12();
          break;
        }
      }, e6);
      return n5((e7) => {
        if (e7 instanceof Element) return function(e8) {
          const { top: t13, left: n6, bottom: r12, right: s6 } = e8.getBoundingClientRect(), { innerHeight: o6, innerWidth: i6 } = window;
          return (t13 > 0 && t13 < o6 || r12 > 0 && r12 < o6) && (n6 > 0 && n6 < i6 || s6 > 0 && s6 < i6);
        }(e7) ? (t12(), r11.disconnect(), false) : void r11.observe(e7);
      }), () => r11.disconnect();
    }, "hydrateOnVisible"), initCustomFormatter: /* @__PURE__ */ __name(function() {
    }, "initCustomFormatter"), initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef: isRef2, isRuntimeOnly: /* @__PURE__ */ __name(() => !bn, "isRuntimeOnly"), isShallow, isVNode: isVNode$2, markRaw, mergeDefaults: /* @__PURE__ */ __name(function(e6, t12) {
      const n5 = normalizePropsOrEmits(e6);
      for (const e7 in t12) {
        if (e7.startsWith("__skip")) continue;
        let r11 = n5[e7];
        r11 ? i(r11) || isFunction2(r11) ? r11 = n5[e7] = { type: r11, default: t12[e7] } : r11.default = t12[e7] : null === r11 && (r11 = n5[e7] = { default: t12[e7] }), r11 && t12[`__skip_${e7}`] && (r11.skipFactory = true);
      }
      return n5;
    }, "mergeDefaults"), mergeModels: /* @__PURE__ */ __name(function(e6, t12) {
      return e6 && t12 ? i(e6) && i(t12) ? e6.concat(t12) : n({}, normalizePropsOrEmits(e6), normalizePropsOrEmits(t12)) : e6 || t12;
    }, "mergeModels"), mergeProps, nextTick: nextTick2, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount: jt, onBeforeUnmount: Bt, onBeforeUpdate: Lt2, onDeactivated, onErrorCaptured, onMounted: It, onRenderTracked: zt, onRenderTriggered: Wt, onScopeDispose: /* @__PURE__ */ __name(function(e6, t12 = false) {
      Oe && Oe.cleanups.push(e6);
    }, "onScopeDispose"), onServerPrefetch: Ut, onUnmounted: Ft, onUpdated: Dt, onWatcherCleanup, openBlock, popScopeId: /* @__PURE__ */ __name(function() {
      kt = null;
    }, "popScopeId"), provide, proxyRefs, pushScopeId: /* @__PURE__ */ __name(function(e6) {
      kt = e6;
    }, "pushScopeId"), queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler: /* @__PURE__ */ __name(function(e6) {
      bn = e6, Cn = /* @__PURE__ */ __name((e7) => {
        e7.render._rc && (e7.withProxy = new Proxy(e7.ctx, Zt));
      }, "Cn");
    }, "registerRuntimeCompiler"), render, renderList: /* @__PURE__ */ __name(function(e6, t12, n5, r11) {
      let s6;
      const o6 = n5 && n5[r11], i6 = i(e6);
      if (i6 || isString2(e6)) {
        let n6 = false, r12 = false;
        i6 && isReactive(e6) && (n6 = !isShallow(e6), r12 = isReadonly(e6), e6 = shallowReadArray(e6)), s6 = new Array(e6.length);
        for (let i7 = 0, a7 = e6.length; i7 < a7; i7++) s6[i7] = t12(n6 ? r12 ? toReadonly(toReactive(e6[i7])) : toReactive(e6[i7]) : e6[i7], i7, void 0, o6 && o6[i7]);
      } else if ("number" == typeof e6) {
        s6 = new Array(e6);
        for (let n6 = 0; n6 < e6; n6++) s6[n6] = t12(n6 + 1, n6, void 0, o6 && o6[n6]);
      } else if (isObject2(e6)) if (e6[Symbol.iterator]) s6 = Array.from(e6, (e7, n6) => t12(e7, n6, void 0, o6 && o6[n6]));
      else {
        const n6 = Object.keys(e6);
        s6 = new Array(n6.length);
        for (let r12 = 0, i7 = n6.length; r12 < i7; r12++) {
          const i8 = n6[r12];
          s6[r12] = t12(e6[i8], i8, r12, o6 && o6[r12]);
        }
      }
      else s6 = [];
      return n5 && (n5[r11] = s6), s6;
    }, "renderList"), renderSlot: /* @__PURE__ */ __name(function(e6, t12, n5 = {}, r11, s6) {
      if (Ct.ce || Ct.parent && isAsyncWrapper(Ct.parent) && Ct.parent.ce) return "default" !== t12 && (n5.name = t12), openBlock(), createBlock(ln, null, [createVNode("slot", n5, r11 && r11())], 64);
      let o6 = e6[t12];
      o6 && o6._c && (o6._d = false), openBlock();
      const i6 = o6 && ensureValidVNode$1(o6(n5)), a7 = n5.key || i6 && i6.key, l5 = createBlock(ln, { key: (a7 && !isSymbol2(a7) ? a7 : `_${t12}`) + (!i6 && r11 ? "_fb" : "") }, i6 || (r11 ? r11() : []), i6 && 1 === e6._ ? 64 : -2);
      return !s6 && l5.scopeId && (l5.slotScopeIds = [l5.scopeId + "-s"]), o6 && o6._c && (o6._d = true), l5;
    }, "renderSlot"), resolveComponent: /* @__PURE__ */ __name(function(e6, t12) {
      return resolveAsset(qt, e6, true, t12) || e6;
    }, "resolveComponent"), resolveDirective: /* @__PURE__ */ __name(function(e6) {
      return resolveAsset("directives", e6);
    }, "resolveDirective"), resolveDynamicComponent: /* @__PURE__ */ __name(function(e6) {
      return isString2(e6) ? resolveAsset(qt, e6, false) || e6 : e6 || Kt;
    }, "resolveDynamicComponent"), resolveFilter: null, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey: sn, ssrUtils: xn, stop: /* @__PURE__ */ __name(function(e6) {
      e6.effect.stop();
    }, "stop"), toDisplayString, toHandlerKey: u, toHandlers: /* @__PURE__ */ __name(function(e6, t12) {
      const n5 = {};
      for (const r11 in e6) n5[t12 && /[A-Z]/.test(r11) ? `on:${r11}` : u(r11)] = e6[r11];
      return n5;
    }, "toHandlers"), toRaw, toRef: /* @__PURE__ */ __name(function(e6, t12, n5) {
      return isRef2(e6) ? e6 : isFunction2(e6) ? new GetterRefImpl(e6) : isObject2(e6) && arguments.length > 1 ? propertyToRef(e6, t12, n5) : ref(e6);
    }, "toRef"), toRefs: /* @__PURE__ */ __name(function(e6) {
      const t12 = i(e6) ? new Array(e6.length) : {};
      for (const n5 in e6) t12[n5] = propertyToRef(e6, n5);
      return t12;
    }, "toRefs"), toValue, transformVNodeArgs: /* @__PURE__ */ __name(function(e6) {
    }, "transformVNodeArgs"), triggerRef: /* @__PURE__ */ __name(function(e6) {
      e6.dep && e6.dep.trigger();
    }, "triggerRef"), unref, useAttrs: /* @__PURE__ */ __name(function() {
      return getContext2().attrs;
    }, "useAttrs"), useCssModule: /* @__PURE__ */ __name(function(e6 = "$style") {
      {
        const t12 = getCurrentInstance();
        if (!t12) return t;
        const n5 = t12.type.__cssModules;
        if (!n5) return t;
        const r11 = n5[e6];
        return r11 || t;
      }
    }, "useCssModule"), useCssVars: /* @__PURE__ */ __name(function(e6) {
      const t12 = getCurrentInstance();
      if (!t12) return;
      const n5 = t12.ut = (n6 = e6(t12.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t12.uid}"]`)).forEach((e7) => setVarsOnNode(e7, n6));
      }, setVars = /* @__PURE__ */ __name(() => {
        const r11 = e6(t12.proxy);
        t12.ce ? setVarsOnNode(t12.ce, r11) : setVarsOnVNode(t12.subTree, r11), n5(r11);
      }, "setVars");
      Lt2(() => {
        queuePostFlushCb(setVars);
      }), It(() => {
        watch(setVars, NOOP, { flush: "post" });
        const e7 = new MutationObserver(setVars);
        e7.observe(t12.subTree.el.parentNode, { childList: true }), Ft(() => e7.disconnect());
      });
    }, "useCssVars"), useHost, useId: /* @__PURE__ */ __name(function() {
      const e6 = getCurrentInstance();
      return e6 ? (e6.appContext.config.idPrefix || "v") + "-" + e6.ids[0] + e6.ids[1]++ : "";
    }, "useId"), useModel: /* @__PURE__ */ __name(function(e6, t12, n5 = t) {
      const r11 = getCurrentInstance(), s6 = p(t12), o6 = d(t12), i6 = getModelModifiers(e6, s6), a7 = customRef((i7, a8) => {
        let l5, c4, u4 = t;
        return watchSyncEffect(() => {
          const t13 = e6[s6];
          hasChanged(l5, t13) && (l5 = t13, a8());
        }), { get: /* @__PURE__ */ __name(() => (i7(), n5.get ? n5.get(l5) : l5), "get"), set(e7) {
          const i8 = n5.set ? n5.set(e7) : e7;
          if (!(hasChanged(i8, l5) || u4 !== t && hasChanged(e7, u4))) return;
          const p4 = r11.vnode.props;
          p4 && (t12 in p4 || s6 in p4 || o6 in p4) && (`onUpdate:${t12}` in p4 || `onUpdate:${s6}` in p4 || `onUpdate:${o6}` in p4) || (l5 = e7, a8()), r11.emit(`update:${t12}`, i8), hasChanged(e7, i8) && hasChanged(e7, u4) && !hasChanged(i8, c4) && a8(), u4 = e7, c4 = i8;
        } };
      });
      return a7[Symbol.iterator] = () => {
        let e7 = 0;
        return { next: /* @__PURE__ */ __name(() => e7 < 2 ? { value: e7++ ? i6 || t : a7, done: false } : { done: true }, "next") };
      }, a7;
    }, "useModel"), useSSRContext, useShadowRoot: /* @__PURE__ */ __name(function() {
      const e6 = useHost();
      return e6 && e6.shadowRoot;
    }, "useShadowRoot"), useSlots: /* @__PURE__ */ __name(function() {
      return getContext2().slots;
    }, "useSlots"), useTemplateRef: /* @__PURE__ */ __name(function(e6) {
      const t12 = getCurrentInstance(), n5 = shallowRef(null);
      if (t12) {
        const r11 = t12.refs === t ? t12.refs = {} : t12.refs;
        Object.defineProperty(r11, e6, { enumerable: true, get: /* @__PURE__ */ __name(() => n5.value, "get"), set: /* @__PURE__ */ __name((e7) => n5.value = e7, "set") });
      }
      return n5;
    }, "useTemplateRef"), useTransitionState, vModelCheckbox: ar3, vModelDynamic: ur2, vModelRadio: lr, vModelSelect: cr, vModelText: ir, vShow: Bn, version: wn, warn: Rn, watch, watchEffect, watchPostEffect: /* @__PURE__ */ __name(function(e6, t12) {
      return doWatch(e6, null, { flush: "post" });
    }, "watchPostEffect"), watchSyncEffect, withAsyncContext: /* @__PURE__ */ __name(function(e6) {
      const t12 = getCurrentInstance();
      let n5 = e6();
      return unsetCurrentInstance(), isPromise(n5) && (n5 = n5.catch((e7) => {
        throw setCurrentInstance(t12), e7;
      })), [n5, () => setCurrentInstance(t12)];
    }, "withAsyncContext"), withCtx, withDefaults: /* @__PURE__ */ __name(function(e6, t12) {
      return null;
    }, "withDefaults"), withDirectives: /* @__PURE__ */ __name(function(e6, t12) {
      if (null === Ct) return e6;
      const n5 = getComponentPublicInstance(Ct), r11 = e6.dirs || (e6.dirs = []);
      for (let e7 = 0; e7 < t12.length; e7++) {
        let [s6, o6, i6, a7 = t] = t12[e7];
        s6 && (isFunction2(s6) && (s6 = { mounted: s6, updated: s6 }), s6.deep && traverse(o6), r11.push({ dir: s6, instance: n5, value: o6, oldValue: void 0, arg: i6, modifiers: a7 }));
      }
      return e6;
    }, "withDirectives"), withKeys: /* @__PURE__ */ __name((e6, t12) => {
      const n5 = e6._withKeys || (e6._withKeys = {}), r11 = t12.join(".");
      return n5[r11] || (n5[r11] = (n6) => {
        if (!("key" in n6)) return;
        const r12 = d(n6.key);
        return t12.some((e7) => e7 === r12 || fr[e7] === r12) ? e6(n6) : void 0;
      });
    }, "withKeys"), withMemo: /* @__PURE__ */ __name(function(e6, t12, n5, r11) {
      const s6 = n5[r11];
      if (s6 && isMemoSame(s6, e6)) return s6;
      const o6 = t12();
      return o6.memo = e6.slice(), o6.cacheIndex = r11, n5[r11] = o6;
    }, "withMemo"), withModifiers: /* @__PURE__ */ __name((e6, t12) => {
      const n5 = e6._withMods || (e6._withMods = {}), r11 = t12.join(".");
      return n5[r11] || (n5[r11] = (n6, ...r12) => {
        for (let e7 = 0; e7 < t12.length; e7++) {
          const r13 = dr[t12[e7]];
          if (r13 && r13(n6, t12)) return;
        }
        return e6(n6, ...r12);
      });
    }, "withModifiers"), withScopeId: /* @__PURE__ */ __name((e6) => withCtx, "withScopeId") }, Symbol.toStringTag, { value: "Module" }));
    VueResolver = /* @__PURE__ */ __name((e6, t12) => isRef2(t12) ? toValue(t12) : t12, "VueResolver");
    _r = "usehead";
    __name(useHead, "useHead");
    __name(createHead, "createHead");
    br = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderAttr, "ssrRenderAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: Cr } = xn);
    __name(ssrRenderSlot, "ssrRenderSlot");
    kr = /^<!--[\s\S]*-->$/;
    Sr2 = /<!--[^]*?-->/gm;
    __name(isComment, "isComment");
    __name(ssrInterpolate, "ssrInterpolate");
    {
      const e6 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t12, n5) => {
        let r11;
        return (r11 = e6[t12]) || (r11 = e6[t12] = []), r11.push(n5), (e7) => {
          r11.length > 1 ? r11.forEach((t13) => t13(e7)) : r11[0](e7);
        };
      }, "registerGlobalSetter");
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e7) => e7), registerGlobalSetter("__VUE_SSR_SETTERS__", (e7) => e7);
    }
    __name(ssrRenderList, "ssrRenderList");
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    ({ createComponentInstance: wr, setCurrentRenderingInstance: Rr, setupComponent: Tr, renderComponentRoot: Ar, normalizeVNode: xr, pushWarningContext: Er, popWarningContext: Pr } = xn);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: Or } = xn);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    ({ isVNode: Nr } = xn);
    initDirectivesForSSR();
    $r2 = { meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }], link: [], style: [], script: [], noscript: [], title: "Nuxt Product Catalog" };
    Hr = { id: "teleports" };
    __name(baseURL, "baseURL");
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    Vr2 = `<div${propsToString({ id: "__nuxt" })}>`;
    Mr = "</div>";
    getClientManifest = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_client_manifest(), client_manifest_exports)).then((e6) => e6.default || e6).then((e6) => "function" == typeof e6 ? e6() : e6), "getClientManifest");
    jr = lazyCachedFunction(async () => {
      const e6 = await getClientManifest();
      if (!e6) throw new Error("client.manifest is not available");
      const t12 = await Promise.resolve().then(() => (init_server(), server_exports)).then(function(e7) {
        return e7.s;
      }).then((e7) => e7.default || e7);
      if (!t12) throw new Error("Server bundle is not available");
      return createRenderer$1(t12, { manifest: e6, renderToString: /* @__PURE__ */ __name(async function(e7, t13) {
        const n5 = await renderToString(e7, t13);
        return Vr2 + n5 + Mr;
      }, "renderToString"), buildAssetsURL });
    });
    Ir = lazyCachedFunction(async () => {
      const e6 = await getClientManifest(), t12 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e7) => e7.template).catch(() => "").then((e7) => Vr2 + e7 + Mr), n5 = createRenderer$1(() => () => {
      }, { manifest: e6, renderToString: /* @__PURE__ */ __name(() => t12, "renderToString"), buildAssetsURL }), s6 = await n5.renderToString({});
      return { rendererContext: n5.rendererContext, renderToString: /* @__PURE__ */ __name((e7) => {
        const t13 = useRuntimeConfig2(e7.event);
        return e7.modules ||= /* @__PURE__ */ new Set(), e7.payload.serverRendered = false, e7.config = { public: t13.public, app: t13.app }, Promise.resolve(s6);
      }, "renderToString") };
    });
    __name(lazyCachedFunction, "lazyCachedFunction");
    Lr = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e6) => e6.default || e6));
    Dr = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e6, t12) {
        super(e6), this.name = "DevalueError", this.path = t12.join("");
      }
    };
    __name(is_primitive, "is_primitive");
    Br = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    Fr2 = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    Ur = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    Wr = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    zr = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    __name(encode64, "encode64");
    qr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    __name(splitPayload, "splitPayload");
    Kr2 = { disableDefaults: true, disableCapoSorting: false, plugins: [Te, Ae, Pe, Re] };
    Jr2 = {};
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    Gr2 = !!Hr.id;
    Zr2 = Gr2 ? `<div${propsToString(Hr)}>` : "";
    Xr2 = Gr2 ? "</div>" : "";
    Yr2 = /^[^?]*\/_payload.json(?:\?.*)?$/;
    Qr2 = defineRenderHandler(async (e6) => {
      const t12 = useNitroApp(), n5 = e6.path.startsWith("/__nuxt_error") ? getQuery(e6) : null;
      if (n5 && !("__unenv__" in e6.node.req)) throw createError2({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const i6 = function(e7) {
        return { url: e7.path, event: e7, runtimeConfig: useRuntimeConfig2(e7), noSSR: e7.context.nuxt?.noSSR || false, head: createHead(Kr2), error: false, nuxt: void 0, payload: {}, _payloadReducers: /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set() };
      }(e6), p4 = { mode: "server" };
      i6.head.push($r2, p4), n5 && (n5.statusCode &&= Number.parseInt(n5.statusCode), function(e7, t13) {
        e7.error = true, e7.payload = { error: t13 }, e7.url = t13.url;
      }(i6, n5));
      const d7 = Yr2.test(i6.url);
      if (d7) {
        const t13 = i6.url.substring(0, i6.url.lastIndexOf("/")) || "/";
        i6.url = t13, e6._path = e6.node.req.url = t13;
      }
      const f5 = getRouteRules(e6);
      false === f5.ssr && (i6.noSSR = true);
      const g4 = await function(e7) {
        return e7.noSSR ? Ir() : jr();
      }(i6);
      for (const e7 of await getClientManifest().then((e8) => Object.values(e8).filter((e9) => e9._globalCSS).map((e9) => e9.src))) i6.modules.add(e7);
      const m5 = await g4.renderToString(i6).catch(async (e7) => {
        if (i6._renderResponse && "skipping render" === e7.message) return {};
        const t13 = !n5 && i6.payload?.error || e7;
        throw await i6.nuxt?.hooks.callHook("app:error", t13), t13;
      }), y4 = i6._renderResponse || d7 ? [] : await async function(e7) {
        const t13 = await Lr(), n6 = /* @__PURE__ */ new Set();
        for (const r11 of e7) if (r11 in t13 && t13[r11]) for (const e8 of await t13[r11]()) n6.add(e8);
        return Array.from(n6).map((e8) => ({ innerHTML: e8 }));
      }(i6.modules ?? []);
      if (await i6.nuxt?.hooks.callHook("app:rendered", { ssrContext: i6, renderResult: m5 }), i6._renderResponse) return i6._renderResponse;
      if (i6.payload?.error && !n5) throw i6.payload.error;
      if (d7) {
        const e7 = function(e8) {
          return { body: stringify(splitPayload(e8).payload, e8._payloadReducers), statusCode: getResponseStatus(e8.event), statusMessage: getResponseStatusText(e8.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        }(i6);
        return e7;
      }
      const v6 = f5.noScripts, { styles: _3, scripts: b3 } = getRequestDependencies(i6, g4.rendererContext);
      i6._preloadManifest && !v6 && i6.head.push({ link: [{ rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${i6.runtimeConfig.app.buildId}.json`) }] }, { ...p4, tagPriority: "low" }), y4.length && i6.head.push({ style: y4 });
      const C3 = [];
      for (const e7 of Object.values(_3)) C3.push({ rel: "stylesheet", href: g4.rendererContext.buildAssetsURL(e7.file), crossorigin: "" });
      C3.length && i6.head.push({ link: C3 }, p4), v6 || (i6.head.push({ link: getPreloadLinks(i6, g4.rendererContext) }, p4), i6.head.push({ link: getPrefetchLinks(i6, g4.rendererContext) }, p4), i6.head.push({ script: renderPayloadJsonScript({ ssrContext: i6, data: i6.payload }) }, { ...p4, tagPosition: "bodyClose", tagPriority: "high" })), f5.noScripts || i6.head.push({ script: Object.values(b3).map((e7) => ({ type: e7.module ? "module" : null, src: g4.rendererContext.buildAssetsURL(e7.file), defer: !e7.module || null, tagPosition: "head", crossorigin: "" })) }, p4);
      const { headTags: k4, bodyTags: S3, bodyTagsOpen: w4, htmlAttrs: R3, bodyAttrs: T3 } = await renderSSRHead(i6.head, Jr2), A4 = { htmlAttrs: R3 ? [R3] : [], head: normalizeChunks([k4]), bodyAttrs: T3 ? [T3] : [], bodyPrepend: normalizeChunks([w4, i6.teleports?.body]), body: [m5.html, Zr2 + (Gr2 ? joinTags([i6.teleports?.[`#${Hr.id}`]]) : "") + Xr2], bodyAppend: [S3] };
      return await t12.hooks.callHook("render:html", A4, { event: e6 }), { body: (x3 = A4, `<!DOCTYPE html><html${joinAttrs(x3.htmlAttrs)}><head>${joinTags(x3.head)}</head><body${joinAttrs(x3.bodyAttrs)}>${joinTags(x3.bodyPrepend)}${joinTags(x3.body)}${joinTags(x3.bodyAppend)}</body></html>`), statusCode: getResponseStatus(e6), statusMessage: getResponseStatusText(e6), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
      var x3;
    });
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    es2 = Object.freeze(Object.defineProperty({ __proto__: null, default: Qr2 }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/server/chunks/nitro/nitro.mjs
import { EventEmitter as e5 } from "node:events";
import { Buffer as r10 } from "node:buffer";
import { setImmediate as s5, clearImmediate as a6 } from "node:timers";
function createNotImplementedError2(e6) {
  return new Error(`[unenv] ${e6} is not implemented yet!`);
}
function notImplemented2(e6) {
  return Object.assign(() => {
    throw createNotImplementedError2(e6);
  }, { __unenv__: true });
}
function notImplementedAsync(e6) {
  const t12 = notImplemented2(e6);
  return t12.__promisify__ = () => notImplemented2(e6 + ".__promisify__"), t12.native = t12, t12;
}
function jsonParseTransform(e6, t12) {
  if (!("__proto__" === e6 || "constructor" === e6 && t12 && "object" == typeof t12 && "prototype" in t12)) return t12;
  !function(e7) {
    console.warn(`[destr] Dropping "${e7}" key to prevent prototype pollution.`);
  }(e6);
}
function destr(e6, t12 = {}) {
  if ("string" != typeof e6) return e6;
  if ('"' === e6[0] && '"' === e6[e6.length - 1] && -1 === e6.indexOf("\\")) return e6.slice(1, -1);
  const r11 = e6.trim();
  if (r11.length <= 9) switch (r11.toLowerCase()) {
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
  if (!vt2.test(e6)) {
    if (t12.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e6;
  }
  try {
    if (bt3.test(e6) || _t2.test(e6)) {
      if (t12.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e6, jsonParseTransform);
    }
    return JSON.parse(e6);
  } catch (r12) {
    if (t12.strict) throw r12;
    return e6;
  }
}
function encodeQueryValue2(e6) {
  return (t12 = "string" == typeof e6 ? e6 : JSON.stringify(e6), encodeURI("" + t12).replace(St2, "|")).replace(Ct2, "%2B").replace(jt2, "+").replace(xt2, "%23").replace(Rt2, "%26").replace(Tt2, "`").replace(At2, "^").replace(Et2, "%2F");
  var t12;
}
function encodeQueryKey2(e6) {
  return encodeQueryValue2(e6).replace(kt2, "%3D");
}
function decode2(e6 = "") {
  try {
    return decodeURIComponent("" + e6);
  } catch {
    return "" + e6;
  }
}
function decodeQueryKey(e6) {
  return decode2(e6.replace(Ct2, " "));
}
function decodeQueryValue(e6) {
  return decode2(e6.replace(Ct2, " "));
}
function parseQuery(e6 = "") {
  const t12 = /* @__PURE__ */ Object.create(null);
  "?" === e6[0] && (e6 = e6.slice(1));
  for (const r11 of e6.split("&")) {
    const e7 = r11.match(/([^=]+)=?(.*)/) || [];
    if (e7.length < 2) continue;
    const s6 = decodeQueryKey(e7[1]);
    if ("__proto__" === s6 || "constructor" === s6) continue;
    const a7 = decodeQueryValue(e7[2] || "");
    void 0 === t12[s6] ? t12[s6] = a7 : Array.isArray(t12[s6]) ? t12[s6].push(a7) : t12[s6] = [t12[s6], a7];
  }
  return t12;
}
function stringifyQuery2(e6) {
  return Object.keys(e6).filter((t12) => void 0 !== e6[t12]).map((t12) => {
    return r11 = t12, "number" != typeof (s6 = e6[t12]) && "boolean" != typeof s6 || (s6 = String(s6)), s6 ? Array.isArray(s6) ? s6.map((e7) => `${encodeQueryKey2(r11)}=${encodeQueryValue2(e7)}`).join("&") : `${encodeQueryKey2(r11)}=${encodeQueryValue2(s6)}` : encodeQueryKey2(r11);
    var r11, s6;
  }).filter(Boolean).join("&");
}
function hasProtocol(e6, t12 = {}) {
  return "boolean" == typeof t12 && (t12 = { acceptRelative: t12 }), t12.strict ? Ht2.test(e6) : It2.test(e6) || !!t12.acceptRelative && Mt2.test(e6);
}
function isScriptProtocol(e6) {
  return !!e6 && Pt2.test(e6);
}
function hasTrailingSlash(e6 = "", t12) {
  return t12 ? Ot2.test(e6) : e6.endsWith("/");
}
function withoutTrailingSlash(e6 = "", t12) {
  if (!t12) return (hasTrailingSlash(e6) ? e6.slice(0, -1) : e6) || "/";
  if (!hasTrailingSlash(e6, true)) return e6 || "/";
  let r11 = e6, s6 = "";
  const a7 = e6.indexOf("#");
  -1 !== a7 && (r11 = e6.slice(0, a7), s6 = e6.slice(a7));
  const [c4, ...u4] = r11.split("?");
  return ((c4.endsWith("/") ? c4.slice(0, -1) : c4) || "/") + (u4.length > 0 ? `?${u4.join("?")}` : "") + s6;
}
function withTrailingSlash(e6 = "", t12) {
  if (!t12) return e6.endsWith("/") ? e6 : e6 + "/";
  if (hasTrailingSlash(e6, true)) return e6 || "/";
  let r11 = e6, s6 = "";
  const a7 = e6.indexOf("#");
  if (-1 !== a7 && (r11 = e6.slice(0, a7), s6 = e6.slice(a7), !r11)) return s6;
  const [c4, ...u4] = r11.split("?");
  return c4 + "/" + (u4.length > 0 ? `?${u4.join("?")}` : "") + s6;
}
function withLeadingSlash(e6 = "") {
  return function(e7 = "") {
    return e7.startsWith("/");
  }(e6) ? e6 : "/" + e6;
}
function withBase(e6, t12) {
  if (isEmptyURL(t12) || hasProtocol(e6)) return e6;
  const r11 = withoutTrailingSlash(t12);
  return e6.startsWith(r11) ? e6 : joinURL(r11, e6);
}
function withoutBase(e6, t12) {
  if (isEmptyURL(t12)) return e6;
  const r11 = withoutTrailingSlash(t12);
  if (!e6.startsWith(r11)) return e6;
  const s6 = e6.slice(r11.length);
  return "/" === s6[0] ? s6 : "/" + s6;
}
function withQuery(e6, t12) {
  const r11 = parseURL2(e6), s6 = { ...parseQuery(r11.search), ...t12 };
  return r11.search = stringifyQuery2(s6), function(e7) {
    const t13 = e7.pathname || "", r12 = e7.search ? (e7.search.startsWith("?") ? "" : "?") + e7.search : "", s7 = e7.hash || "", a7 = e7.auth ? e7.auth + "@" : "", c4 = e7.host || "", u4 = e7.protocol || e7[Bt2] ? (e7.protocol || "") + "//" : "";
    return u4 + a7 + c4 + t13 + r12 + s7;
  }(r11);
}
function getQuery$1(e6) {
  return parseQuery(parseURL2(e6).search);
}
function isEmptyURL(e6) {
  return !e6 || "/" === e6;
}
function joinURL(e6, ...t12) {
  let r11 = e6 || "";
  for (const e7 of t12.filter((e8) => /* @__PURE__ */ function(e9) {
    return e9 && "/" !== e9;
  }(e8))) if (r11) {
    const t13 = e7.replace(Nt2, "");
    r11 = withTrailingSlash(r11) + t13;
  } else r11 = e7;
  return r11;
}
function joinRelativeURL(...e6) {
  const t12 = /\/(?!\/)/, r11 = e6.filter(Boolean), s6 = [];
  let a7 = 0;
  for (const e7 of r11) if (e7 && "/" !== e7) {
    for (const [r12, c5] of e7.split(t12).entries()) if (c5 && "." !== c5) if (".." !== c5) 1 === r12 && s6[s6.length - 1]?.endsWith(":/") ? s6[s6.length - 1] += "/" + c5 : (s6.push(c5), a7++);
    else {
      if (1 === s6.length && hasProtocol(s6[0])) continue;
      s6.pop(), a7--;
    }
  }
  let c4 = s6.join("/");
  return a7 >= 0 ? r11[0]?.startsWith("/") && !c4.startsWith("/") ? c4 = "/" + c4 : r11[0]?.startsWith("./") && !c4.startsWith("./") && (c4 = "./" + c4) : c4 = "../".repeat(-1 * a7) + c4, r11[r11.length - 1]?.endsWith("/") && !c4.endsWith("/") && (c4 += "/"), c4;
}
function parseURL2(e6 = "", t12) {
  const r11 = e6.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r11) {
    const [, e7, t13 = ""] = r11;
    return { protocol: e7.toLowerCase(), pathname: t13, href: e7 + t13, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e6, { acceptRelative: true })) return parsePath(e6);
  const [, s6 = "", a7, c4 = ""] = e6.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u4 = "", d7 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s6 && (d7 = d7.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h6, search: f5, hash: m5 } = parsePath(d7);
  return { protocol: s6.toLowerCase(), auth: a7 ? a7.slice(0, Math.max(0, a7.length - 1)) : "", host: u4, pathname: h6, search: f5, hash: m5, [Bt2]: !s6 };
}
function parsePath(e6 = "") {
  const [t12 = "", r11 = "", s6 = ""] = (e6.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t12, search: r11, hash: s6 };
}
function createRouter$1(e6 = {}) {
  const t12 = { options: e6, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t13) => e6.strictTrailingSlash ? t13 : t13.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e6.routes) for (const r11 in e6.routes) insert(t12, normalizeTrailingSlash(r11), e6.routes[r11]);
  return { ctx: t12, lookup: /* @__PURE__ */ __name((e7) => function(e8, t13) {
    const r11 = e8.staticRoutesMap[t13];
    if (r11) return r11.data;
    const s6 = t13.split("/"), a7 = {};
    let c4 = false, u4 = null, d7 = e8.rootNode, h6 = null;
    for (let e9 = 0; e9 < s6.length; e9++) {
      const t14 = s6[e9];
      null !== d7.wildcardChildNode && (u4 = d7.wildcardChildNode, h6 = s6.slice(e9).join("/"));
      const r12 = d7.children.get(t14);
      if (void 0 === r12) {
        if (d7 && d7.placeholderChildren.length > 1) {
          const t15 = s6.length - e9;
          d7 = d7.placeholderChildren.find((e10) => e10.maxDepth === t15) || null;
        } else d7 = d7.placeholderChildren[0] || null;
        if (!d7) break;
        d7.paramName && (a7[d7.paramName] = t14), c4 = true;
      } else d7 = r12;
    }
    null !== d7 && null !== d7.data || null === u4 || (d7 = u4, a7[d7.paramName || "_"] = h6, c4 = true);
    if (!d7) return null;
    if (c4) return { ...d7.data, params: c4 ? a7 : void 0 };
    return d7.data;
  }(t12, normalizeTrailingSlash(e7)), "lookup"), insert: /* @__PURE__ */ __name((e7, r11) => insert(t12, normalizeTrailingSlash(e7), r11), "insert"), remove: /* @__PURE__ */ __name((e7) => function(e8, t13) {
    let r11 = false;
    const s6 = t13.split("/");
    let a7 = e8.rootNode;
    for (const e9 of s6) if (a7 = a7.children.get(e9), !a7) return r11;
    if (a7.data) {
      const e9 = s6.at(-1) || "";
      a7.data = null, 0 === Object.keys(a7.children).length && a7.parent && (a7.parent.children.delete(e9), a7.parent.wildcardChildNode = null, a7.parent.placeholderChildren = []), r11 = true;
    }
    return r11;
  }(t12, normalizeTrailingSlash(e7)), "remove") };
}
function insert(e6, t12, r11) {
  let s6 = true;
  const a7 = t12.split("/");
  let c4 = e6.rootNode, u4 = 0;
  const d7 = [c4];
  for (const e7 of a7) {
    let t13;
    if (t13 = c4.children.get(e7)) c4 = t13;
    else {
      const r12 = getNodeType(e7);
      t13 = createRadixNode({ type: r12, parent: c4 }), c4.children.set(e7, t13), r12 === Ut2 ? (t13.paramName = "*" === e7 ? "_" + u4++ : e7.slice(1), c4.placeholderChildren.push(t13), s6 = false) : r12 === zt2 && (c4.wildcardChildNode = t13, t13.paramName = e7.slice(3) || "_", s6 = false), d7.push(t13), c4 = t13;
    }
  }
  for (const [e7, t13] of d7.entries()) t13.maxDepth = Math.max(d7.length - e7, t13.maxDepth || 0);
  return c4.data = r11, true === s6 && (e6.staticRoutesMap[t12] = c4), c4;
}
function createRadixNode(e6 = {}) {
  return { type: e6.type || qt2, maxDepth: 0, parent: e6.parent || null, children: /* @__PURE__ */ new Map(), data: e6.data || null, paramName: e6.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e6) {
  return e6.startsWith("**") ? zt2 : ":" === e6[0] || "*" === e6 ? Ut2 : qt2;
}
function toRouteMatcher(e6) {
  return /* @__PURE__ */ function(e7, t12) {
    return { ctx: { table: e7 }, matchAll: /* @__PURE__ */ __name((r11) => _matchRoutes(r11, e7, t12), "matchAll") };
  }(_routerNodeToTable("", e6.ctx.rootNode), e6.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e6, t12, r11) {
  true !== r11 && e6.endsWith("/") && (e6 = e6.slice(0, -1) || "/");
  const s6 = [];
  for (const [r12, a8] of _sortRoutesMap(t12.wildcard)) (e6 === r12 || e6.startsWith(r12 + "/")) && s6.push(a8);
  for (const [r12, a8] of _sortRoutesMap(t12.dynamic)) if (e6.startsWith(r12 + "/")) {
    const t13 = "/" + e6.slice(r12.length).split("/").splice(2).join("/");
    s6.push(..._matchRoutes(t13, a8));
  }
  const a7 = t12.static.get(e6);
  return a7 && s6.push(a7), s6.filter(Boolean);
}
function _sortRoutesMap(e6) {
  return [...e6.entries()].sort((e7, t12) => e7[0].length - t12[0].length);
}
function _routerNodeToTable(e6, t12) {
  const r11 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e7, t13) {
    if (e7) if (t13.type !== qt2 || e7.includes("*") || e7.includes(":")) {
      if (t13.type === zt2) r11.wildcard.set(e7.replace("/**", ""), t13.data);
      else if (t13.type === Ut2) {
        const s6 = _routerNodeToTable("", t13);
        return t13.data && s6.static.set("/", t13.data), void r11.dynamic.set(e7.replace(/\/\*|\/:\w+/, ""), s6);
      }
    } else t13.data && r11.static.set(e7, t13.data);
    for (const [r12, s6] of t13.children.entries()) _addNode(`${e7}/${r12}`.replace("//", "/"), s6);
  }, "_addNode"))(e6, t12), r11;
}
function isPlainObject2(e6) {
  if (null === e6 || "object" != typeof e6) return false;
  const t12 = Object.getPrototypeOf(e6);
  return (null === t12 || t12 === Object.prototype || null === Object.getPrototypeOf(t12)) && (!(Symbol.iterator in e6) && (!(Symbol.toStringTag in e6) || "[object Module]" === Object.prototype.toString.call(e6)));
}
function _defu(e6, t12, r11 = ".", s6) {
  if (!isPlainObject2(t12)) return _defu(e6, {}, r11, s6);
  const a7 = Object.assign({}, t12);
  for (const t13 in e6) {
    if ("__proto__" === t13 || "constructor" === t13) continue;
    const c4 = e6[t13];
    null != c4 && (s6 && s6(a7, t13, c4, r11) || (Array.isArray(c4) && Array.isArray(a7[t13]) ? a7[t13] = [...c4, ...a7[t13]] : isPlainObject2(c4) && isPlainObject2(a7[t13]) ? a7[t13] = _defu(c4, a7[t13], (r11 ? `${r11}.` : "") + t13.toString(), s6) : a7[t13] = c4));
  }
  return a7;
}
function createDefu(e6) {
  return (...t12) => t12.reduce((t13, r11) => _defu(t13, r11, "", e6), {});
}
function o5(e6) {
  throw new Error(`${e6} is not implemented yet!`);
}
function p3(e6) {
  const t12 = {};
  for (const [r11, s6] of Object.entries(e6)) r11 && (t12[r11] = (Array.isArray(s6) ? s6 : [s6]).filter(Boolean));
  return t12;
}
function S$1(e6 = {}) {
  if (e6 instanceof Headers) return e6;
  const t12 = new Headers();
  for (const [r11, s6] of Object.entries(e6)) if (void 0 !== s6) {
    if (Array.isArray(s6)) {
      for (const e7 of s6) t12.append(r11, String(e7));
      continue;
    }
    t12.set(r11, String(s6));
  }
  return t12;
}
async function b2(e6, t12) {
  const r11 = new y3(), s6 = new w3(r11);
  let a7;
  if (r11.url = t12.url?.toString() || "/", !r11.url.startsWith("/")) {
    const e7 = new URL(r11.url);
    a7 = e7.host, r11.url = e7.pathname + e7.search + e7.hash;
  }
  r11.method = t12.method || "GET", r11.headers = function(e7 = {}) {
    const t13 = new Ft2(), r12 = Array.isArray(e7) || function(e8) {
      return "function" == typeof e8?.entries;
    }(e7) ? e7 : Object.entries(e7);
    for (const [e8, s7] of r12) if (s7) {
      if (void 0 === t13[e8]) {
        t13[e8] = s7;
        continue;
      }
      t13[e8] = [...Array.isArray(t13[e8]) ? t13[e8] : [t13[e8]], ...Array.isArray(s7) ? s7 : [s7]];
    }
    return t13;
  }(t12.headers || {}), r11.headers.host || (r11.headers.host = t12.host || a7 || "localhost"), r11.connection.encrypted = r11.connection.encrypted || "https" === t12.protocol, r11.body = t12.body || null, r11.__unenv__ = t12.context, await e6(r11, s6);
  let c4 = s6._data;
  (Zt2.has(s6.statusCode) || "HEAD" === r11.method.toUpperCase()) && (c4 = null, delete s6._headers["content-length"]);
  const u4 = { status: s6.statusCode, statusText: s6.statusMessage, headers: s6._headers, body: c4 };
  return r11.destroy(), s6.destroy(), u4;
}
function hasProp2(e6, t12) {
  try {
    return t12 in e6;
  } catch {
    return false;
  }
}
function createError2(e6) {
  if ("string" == typeof e6) return new H3Error(e6);
  if (isError2(e6)) return e6;
  const t12 = new H3Error(e6.message ?? e6.statusMessage ?? "", { cause: e6.cause || e6 });
  if (hasProp2(e6, "stack")) try {
    Object.defineProperty(t12, "stack", { get: /* @__PURE__ */ __name(() => e6.stack, "get") });
  } catch {
    try {
      t12.stack = e6.stack;
    } catch {
    }
  }
  if (e6.data && (t12.data = e6.data), e6.statusCode ? t12.statusCode = sanitizeStatusCode(e6.statusCode, t12.statusCode) : e6.status && (t12.statusCode = sanitizeStatusCode(e6.status, t12.statusCode)), e6.statusMessage ? t12.statusMessage = e6.statusMessage : e6.statusText && (t12.statusMessage = e6.statusText), t12.statusMessage) {
    const e7 = t12.statusMessage;
    sanitizeStatusMessage(t12.statusMessage) !== e7 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e6.fatal && (t12.fatal = e6.fatal), void 0 !== e6.unhandled && (t12.unhandled = e6.unhandled), t12;
}
function isError2(e6) {
  return true === e6?.constructor?.__h3_error__;
}
function getQuery(e6) {
  return getQuery$1(e6.path || "");
}
function getRequestHeaders(e6) {
  const t12 = {};
  for (const r11 in e6.node.req.headers) {
    const s6 = e6.node.req.headers[r11];
    t12[r11] = Array.isArray(s6) ? s6.filter(Boolean).join(", ") : s6;
  }
  return t12;
}
function readRawBody(e6, t12 = "utf8") {
  !function(e7, t13) {
    if (!function(e8, t14) {
      if ("string" == typeof t14) {
        if (e8.method === t14) return true;
      } else if (t14.includes(e8.method)) return true;
      return false;
    }(e7, t13)) throw createError2({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e6, Jt2);
  const s6 = e6._requestBody || e6.web?.request?.body || e6.node.req[Qt2] || e6.node.req.rawBody || e6.node.req.body;
  if (s6) {
    const e7 = Promise.resolve(s6).then((e8) => r10.isBuffer(e8) ? e8 : "function" == typeof e8.pipeTo ? new Promise((t13, s7) => {
      const a8 = [];
      e8.pipeTo(new WritableStream({ write(e9) {
        a8.push(e9);
      }, close() {
        t13(r10.concat(a8));
      }, abort(e9) {
        s7(e9);
      } })).catch(s7);
    }) : "function" == typeof e8.pipe ? new Promise((t13, s7) => {
      const a8 = [];
      e8.on("data", (e9) => {
        a8.push(e9);
      }).on("end", () => {
        t13(r10.concat(a8));
      }).on("error", s7);
    }) : e8.constructor === Object ? r10.from(JSON.stringify(e8)) : e8 instanceof URLSearchParams ? r10.from(e8.toString()) : e8 instanceof FormData ? new Response(e8).bytes().then((e9) => r10.from(e9)) : r10.from(e8));
    return t12 ? e7.then((e8) => e8.toString(t12)) : e7;
  }
  if (!Number.parseInt(e6.node.req.headers["content-length"] || "") && !String(e6.node.req.headers["transfer-encoding"] ?? "").split(",").map((e7) => e7.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
  const a7 = e6.node.req[Qt2] = new Promise((t13, s7) => {
    const a8 = [];
    e6.node.req.on("error", (e7) => {
      s7(e7);
    }).on("data", (e7) => {
      a8.push(e7);
    }).on("end", () => {
      t13(r10.concat(a8));
    });
  });
  return t12 ? a7.then((e7) => e7.toString(t12)) : a7;
}
function handleCacheHeaders(e6, t12) {
  const r11 = ["public", ...t12.cacheControls || []];
  let s6 = false;
  if (void 0 !== t12.maxAge && r11.push("max-age=" + +t12.maxAge, "s-maxage=" + +t12.maxAge), t12.modifiedTime) {
    const r12 = new Date(t12.modifiedTime), a7 = e6.node.req.headers["if-modified-since"];
    e6.node.res.setHeader("last-modified", r12.toUTCString()), a7 && new Date(a7) >= r12 && (s6 = true);
  }
  if (t12.etag) {
    e6.node.res.setHeader("etag", t12.etag);
    e6.node.req.headers["if-none-match"] === t12.etag && (s6 = true);
  }
  return e6.node.res.setHeader("cache-control", r11.join(", ")), !!s6 && (e6.node.res.statusCode = 304, e6.handled || e6.node.res.end(), true);
}
function sanitizeStatusMessage(e6 = "") {
  return e6.replace(Yt2, "");
}
function sanitizeStatusCode(e6, t12 = 200) {
  return e6 ? ("string" == typeof e6 && (e6 = Number.parseInt(e6, 10)), e6 < 100 || e6 > 999 ? t12 : e6) : t12;
}
function splitCookiesString(e6) {
  if (Array.isArray(e6)) return e6.flatMap((e7) => splitCookiesString(e7));
  if ("string" != typeof e6) return [];
  const t12 = [];
  let r11, s6, a7, c4, u4, d7 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d7 < e6.length && /\s/.test(e6.charAt(d7)); ) d7 += 1;
    return d7 < e6.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s6 = e6.charAt(d7), "=" !== s6 && ";" !== s6 && "," !== s6), "notSpecialChar");
  for (; d7 < e6.length; ) {
    for (r11 = d7, u4 = false; skipWhitespace(); ) if (s6 = e6.charAt(d7), "," === s6) {
      for (a7 = d7, d7 += 1, skipWhitespace(), c4 = d7; d7 < e6.length && notSpecialChar(); ) d7 += 1;
      d7 < e6.length && "=" === e6.charAt(d7) ? (u4 = true, d7 = c4, t12.push(e6.slice(r11, a7)), r11 = d7) : d7 = a7 + 1;
    } else d7 += 1;
    (!u4 || d7 >= e6.length) && t12.push(e6.slice(r11));
  }
  return t12;
}
function send2(e6, t12, r11) {
  return r11 && function(e7, t13) {
    t13 && 304 !== e7.node.res.statusCode && !e7.node.res.getHeader("content-type") && e7.node.res.setHeader("content-type", t13);
  }(e6, r11), new Promise((r12) => {
    Gt2(() => {
      e6.handled || e6.node.res.end(t12), r12();
    });
  });
}
function setResponseStatus(e6, t12, r11) {
  t12 && (e6.node.res.statusCode = sanitizeStatusCode(t12, e6.node.res.statusCode)), r11 && (e6.node.res.statusMessage = sanitizeStatusMessage(r11));
}
function getResponseStatus(e6) {
  return e6.node.res.statusCode;
}
function getResponseStatusText(e6) {
  return e6.node.res.statusMessage;
}
function setResponseHeaders(e6, t12) {
  for (const [r11, s6] of Object.entries(t12)) e6.node.res.setHeader(r11, s6);
}
function setResponseHeader(e6, t12, r11) {
  e6.node.res.setHeader(t12, r11);
}
function sendStream(e6, t12) {
  if (!t12 || "object" != typeof t12) throw new Error("[h3] Invalid stream provided.");
  if (e6.node.res._data = t12, !e6.node.res.socket) return e6._handled = true, Promise.resolve();
  if (hasProp2(t12, "pipeTo") && "function" == typeof t12.pipeTo) return t12.pipeTo(new WritableStream({ write(t13) {
    e6.node.res.write(t13);
  } })).then(() => {
    e6.node.res.end();
  });
  if (hasProp2(t12, "pipe") && "function" == typeof t12.pipe) return new Promise((r11, s6) => {
    t12.pipe(e6.node.res), t12.on && (t12.on("end", () => {
      e6.node.res.end(), r11();
    }), t12.on("error", (e7) => {
      s6(e7);
    })), e6.node.res.on("close", () => {
      t12.abort && t12.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e6, t12) {
  for (const [r11, s6] of t12.headers) "set-cookie" === r11 ? e6.node.res.appendHeader(r11, splitCookiesString(s6)) : e6.node.res.setHeader(r11, s6);
  if (t12.status && (e6.node.res.statusCode = sanitizeStatusCode(t12.status, e6.node.res.statusCode)), t12.statusText && (e6.node.res.statusMessage = sanitizeStatusMessage(t12.statusText)), t12.redirected && e6.node.res.setHeader("location", t12.url), t12.body) return sendStream(e6, t12.body);
  e6.node.res.end();
}
async function proxyRequest(e6, t12, r11 = {}) {
  let s6, a7;
  er2.has(e6.method) && (r11.streamRequest ? (s6 = function(e7) {
    if (!Jt2.includes(e7.method)) return;
    const t13 = e7.web?.request?.body || e7._requestBody;
    return t13 || (Qt2 in e7.node.req || "rawBody" in e7.node.req || "body" in e7.node.req || "__unenv__" in e7.node.req ? new ReadableStream({ async start(t14) {
      const r12 = await readRawBody(e7, false);
      r12 && t14.enqueue(r12), t14.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t14) => {
      e7.node.req.on("data", (e8) => {
        t14.enqueue(e8);
      }), e7.node.req.on("end", () => {
        t14.close();
      }), e7.node.req.on("error", (e8) => {
        t14.error(e8);
      });
    }, "start") }));
  }(e6), a7 = "half") : s6 = await readRawBody(e6, false).catch(() => {
  }));
  const c4 = r11.fetchOptions?.method || e6.method, u4 = function(e7, ...t13) {
    const r12 = t13.filter(Boolean);
    if (0 === r12.length) return e7;
    const s7 = new Headers(e7);
    for (const e8 of r12) {
      const t14 = Array.isArray(e8) ? e8 : "function" == typeof e8.entries ? e8.entries() : Object.entries(e8);
      for (const [e9, r13] of t14) void 0 !== r13 && s7.set(e9, r13);
    }
    return s7;
  }(getProxyRequestHeaders(e6, { host: t12.startsWith("/") }), r11.fetchOptions?.headers, r11.headers);
  return async function(e7, t13, r12 = {}) {
    let s7;
    try {
      s7 = await _getFetch(r12.fetch)(t13, { headers: r12.headers, ignoreResponseError: true, ...r12.fetchOptions });
    } catch (e8) {
      throw createError2({ status: 502, statusMessage: "Bad Gateway", cause: e8 });
    }
    e7.node.res.statusCode = sanitizeStatusCode(s7.status, e7.node.res.statusCode), e7.node.res.statusMessage = sanitizeStatusMessage(s7.statusText);
    const a8 = [];
    for (const [t14, r13] of s7.headers.entries()) "content-encoding" !== t14 && "content-length" !== t14 && ("set-cookie" !== t14 ? e7.node.res.setHeader(t14, r13) : a8.push(...splitCookiesString(r13)));
    a8.length > 0 && e7.node.res.setHeader("set-cookie", a8.map((e8) => (r12.cookieDomainRewrite && (e8 = rewriteCookieProperty(e8, r12.cookieDomainRewrite, "domain")), r12.cookiePathRewrite && (e8 = rewriteCookieProperty(e8, r12.cookiePathRewrite, "path")), e8)));
    r12.onResponse && await r12.onResponse(e7, s7);
    if (void 0 !== s7._data) return s7._data;
    if (e7.handled) return;
    if (false === r12.sendStream) {
      const t14 = new Uint8Array(await s7.arrayBuffer());
      return e7.node.res.end(t14);
    }
    if (s7.body) for await (const t14 of s7.body) e7.node.res.write(t14);
    return e7.node.res.end();
  }(e6, t12, { ...r11, fetchOptions: { method: c4, body: s6, duplex: a7, ...r11.fetchOptions, headers: u4 } });
}
function getProxyRequestHeaders(e6, t12) {
  const r11 = /* @__PURE__ */ Object.create(null), s6 = getRequestHeaders(e6);
  for (const e7 in s6) (!tr2.has(e7) || "host" === e7 && t12?.host) && (r11[e7] = s6[e7]);
  return r11;
}
function fetchWithEvent(e6, t12, r11, s6) {
  return _getFetch(s6?.fetch)(t12, { ...r11, context: r11?.context || e6.context, headers: { ...getProxyRequestHeaders(e6, { host: "string" == typeof t12 && t12.startsWith("/") }), ...r11?.headers } });
}
function _getFetch(e6) {
  if (e6) return e6;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e6, t12, r11) {
  const s6 = "string" == typeof t12 ? { "*": t12 } : t12;
  return e6.replace(new RegExp(`(;\\s*${r11}=)([^;]+)`, "gi"), (e7, t13, r12) => {
    let a7;
    if (r12 in s6) a7 = s6[r12];
    else {
      if (!("*" in s6)) return e7;
      a7 = s6["*"];
    }
    return a7 ? t13 + a7 : "";
  });
}
function isEvent(e6) {
  return hasProp2(e6, "__is_event__");
}
function createEvent(e6, t12) {
  return new H3Event(e6, t12);
}
function defineEventHandler(e6) {
  if ("function" == typeof e6) return e6.__is_handler__ = true, e6;
  const t12 = { onRequest: _normalizeArray(e6.onRequest), onBeforeResponse: _normalizeArray(e6.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r11) => async function(e7, t13, r12) {
    if (r12.onRequest) {
      for (const t14 of r12.onRequest) if (await t14(e7), e7.handled) return;
    }
    const s6 = await t13(e7), a7 = { body: s6 };
    if (r12.onBeforeResponse) for (const t14 of r12.onBeforeResponse) await t14(e7, a7);
    return a7.body;
  }(r11, e6.handler, t12), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e6.handler.__resolve__, _handler.__websocket__ = e6.websocket, _handler;
}
function _normalizeArray(e6) {
  return e6 ? Array.isArray(e6) ? e6 : [e6] : void 0;
}
function isEventHandler(e6) {
  return hasProp2(e6, "__is_handler__");
}
function toEventHandler(e6, t12, r11) {
  return isEventHandler(e6) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r11 && "/" !== r11 ? `
     Route: ${r11}` : "", `
     Handler: ${e6}`), e6;
}
function createApp2(e6 = {}) {
  const t12 = [], r11 = function(e7, t13) {
    const r12 = t13.debug ? 2 : void 0;
    return rr3(async (s7) => {
      s7.node.req.originalUrl = s7.node.req.originalUrl || s7.node.req.url || "/";
      const a8 = s7._path || s7.node.req.url || "/";
      let c5;
      t13.onRequest && await t13.onRequest(s7);
      for (const u4 of e7) {
        if (u4.route.length > 1) {
          if (!a8.startsWith(u4.route)) continue;
          c5 = a8.slice(u4.route.length) || "/";
        } else c5 = a8;
        if (u4.match && !u4.match(c5, s7)) continue;
        s7._path = c5, s7.node.req.url = c5;
        const e8 = await u4.handler(s7), d7 = void 0 === e8 ? void 0 : await e8;
        if (void 0 !== d7) {
          const e9 = { body: d7 };
          return t13.onBeforeResponse && (s7._onBeforeResponseCalled = true, await t13.onBeforeResponse(s7, e9)), await handleHandlerResponse(s7, e9.body, r12), void (t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, e9)));
        }
        if (s7.handled) return void (t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, void 0)));
      }
      if (!s7.handled) throw createError2({ statusCode: 404, statusMessage: `Cannot find any path matching ${s7.path || "/"}.` });
      t13.onAfterResponse && (s7._onAfterResponseCalled = true, await t13.onAfterResponse(s7, void 0));
    });
  }(t12, e6), s6 = /* @__PURE__ */ function(e7) {
    return async (t13) => {
      let r12;
      for (const s7 of e7) {
        if ("/" === s7.route && !s7.handler.__resolve__) continue;
        if (!t13.startsWith(s7.route)) continue;
        if (r12 = t13.slice(s7.route.length) || "/", s7.match && !s7.match(r12, void 0)) continue;
        let e8 = { route: s7.route, handler: s7.handler };
        if (e8.handler.__resolve__) {
          const t14 = await e8.handler.__resolve__(r12);
          if (!t14) continue;
          e8 = { ...e8, ...t14, route: joinURL(e8.route || "/", t14.route || "/") };
        }
        return e8;
      }
    };
  }(t12);
  r11.__resolve__ = s6;
  const a7 = /* @__PURE__ */ function(e7) {
    let t13;
    return () => (t13 || (t13 = e7()), t13);
  }(() => {
    return t13 = s6, { ...e6.websocket, async resolve(e7) {
      const r12 = e7.request?.url || e7.url || "/", { pathname: s7 } = "string" == typeof r12 ? parseURL2(r12) : r12, a8 = await t13(s7);
      return a8?.handler?.__websocket__ || {};
    } };
    var t13;
  }), c4 = { use: /* @__PURE__ */ __name((e7, t13, r12) => use(c4, e7, t13, r12), "use"), resolve: s6, handler: r11, stack: t12, options: e6, get websocket() {
    return a7();
  } };
  return c4;
}
function use(e6, t12, r11, s6) {
  if (Array.isArray(t12)) for (const a7 of t12) use(e6, a7, r11, s6);
  else if (Array.isArray(r11)) for (const a7 of r11) use(e6, t12, a7, s6);
  else "string" == typeof t12 ? e6.stack.push(normalizeLayer({ ...s6, route: t12, handler: r11 })) : "function" == typeof t12 ? e6.stack.push(normalizeLayer({ ...r11, handler: t12 })) : e6.stack.push(normalizeLayer({ ...t12 }));
  return e6;
}
function normalizeLayer(e6) {
  let t12 = e6.handler;
  return t12.handler && (t12 = t12.handler), e6.lazy ? t12 = lazyEventHandler(t12) : isEventHandler(t12) || (t12 = toEventHandler(t12, 0, e6.route)), { route: withoutTrailingSlash(e6.route), match: e6.match, handler: t12 };
}
function handleHandlerResponse(e6, t12, s6) {
  if (null === t12) return function(e7, t13) {
    if (e7.handled) return;
    t13 || 200 === e7.node.res.statusCode || (t13 = e7.node.res.statusCode);
    const r11 = sanitizeStatusCode(t13, 204);
    204 === r11 && e7.node.res.removeHeader("content-length"), e7.node.res.writeHead(r11), e7.node.res.end();
  }(e6);
  if (t12) {
    if (a7 = t12, "undefined" != typeof Response && a7 instanceof Response) return sendWebResponse(e6, t12);
    if (function(e7) {
      if (!e7 || "object" != typeof e7) return false;
      if ("function" == typeof e7.pipe) {
        if ("function" == typeof e7._read) return true;
        if ("function" == typeof e7.abort) return true;
      }
      return "function" == typeof e7.pipeTo;
    }(t12)) return sendStream(e6, t12);
    if (t12.buffer) return send2(e6, t12);
    if (t12.arrayBuffer && "function" == typeof t12.arrayBuffer) return t12.arrayBuffer().then((s7) => send2(e6, r10.from(s7), t12.type));
    if (t12 instanceof Error) throw createError2(t12);
    if ("function" == typeof t12.end) return true;
  }
  var a7;
  const c4 = typeof t12;
  if ("string" === c4) return send2(e6, t12, Vt2.html);
  if ("object" === c4 || "boolean" === c4 || "number" === c4) return send2(e6, JSON.stringify(t12, void 0, s6), Vt2.json);
  if ("bigint" === c4) return send2(e6, t12.toString(), Vt2.json);
  throw createError2({ statusCode: 500, statusMessage: `[h3] Cannot send ${c4} as response.` });
}
function toNodeListener(e6) {
  return async function(t12, r11) {
    const s6 = createEvent(t12, r11);
    try {
      await e6.handler(s6);
    } catch (t13) {
      const r12 = createError2(t13);
      if (isError2(t13) || (r12.unhandled = true), setResponseStatus(s6, r12.statusCode, r12.statusMessage), e6.options.onError && await e6.options.onError(r12, s6), s6.handled) return;
      (r12.unhandled || r12.fatal) && console.error("[h3]", r12.fatal ? "[fatal]" : "[unhandled]", r12), e6.options.onBeforeResponse && !s6._onBeforeResponseCalled && await e6.options.onBeforeResponse(s6, { body: r12 }), await function(e7, t14, r13) {
        if (e7.handled) return;
        const s7 = isError2(t14) ? t14 : createError2(t14), a7 = { statusCode: s7.statusCode, statusMessage: s7.statusMessage, stack: [], data: s7.data };
        if (r13 && (a7.stack = (s7.stack || "").split("\n").map((e8) => e8.trim())), e7.handled) return;
        setResponseStatus(e7, Number.parseInt(s7.statusCode), s7.statusMessage), e7.node.res.setHeader("content-type", Vt2.json), e7.node.res.end(JSON.stringify(a7, void 0, 2));
      }(s6, r12, !!e6.options.debug), e6.options.onAfterResponse && !s6._onAfterResponseCalled && await e6.options.onAfterResponse(s6, { body: r12 });
    }
  };
}
function flatHooks(e6, t12 = {}, r11) {
  for (const s6 in e6) {
    const a7 = e6[s6], c4 = r11 ? `${r11}:${s6}` : s6;
    "object" == typeof a7 && null !== a7 ? flatHooks(a7, t12, c4) : "function" == typeof a7 && (t12[c4] = a7);
  }
  return t12;
}
function serialTaskCaller(e6, t12) {
  const r11 = t12.shift(), s6 = or2(r11);
  return e6.reduce((e7, r12) => e7.then(() => s6.run(() => r12(...t12))), Promise.resolve());
}
function parallelTaskCaller(e6, t12) {
  const r11 = t12.shift(), s6 = or2(r11);
  return Promise.all(e6.map((e7) => s6.run(() => e7(...t12))));
}
function callEachWith(e6, t12) {
  for (const r11 of [...e6]) r11(t12);
}
function createHooks() {
  return new Hookable();
}
function isPayloadMethod2(e6 = "GET") {
  return ir2.has(e6.toUpperCase());
}
function resolveFetchOptions2(e6, t12, r11, s6) {
  const a7 = function(e7, t13, r12) {
    if (!t13) return new r12(e7);
    const s7 = new r12(t13);
    if (e7) for (const [t14, a8] of Symbol.iterator in e7 || Array.isArray(e7) ? e7 : new r12(e7)) s7.set(t14, a8);
    return s7;
  }(t12?.headers ?? e6?.headers, r11?.headers, s6);
  let c4;
  return (r11?.query || r11?.params || t12?.params || t12?.query) && (c4 = { ...r11?.params, ...r11?.query, ...t12?.params, ...t12?.query }), { ...r11, ...t12, query: c4, params: c4, headers: a7 };
}
async function callHooks2(e6, t12) {
  if (t12) if (Array.isArray(t12)) for (const r11 of t12) await r11(e6);
  else await t12(e6);
}
function createFetch2(e6 = {}) {
  const { fetch: t12 = globalThis.fetch, Headers: r11 = globalThis.Headers, AbortController: s6 = globalThis.AbortController } = e6;
  async function onError(e7) {
    const t13 = e7.error && "AbortError" === e7.error.name && !e7.options.timeout || false;
    if (false !== e7.options.retry && !t13) {
      let t14;
      t14 = "number" == typeof e7.options.retry ? e7.options.retry : isPayloadMethod2(e7.options.method) ? 0 : 1;
      const r13 = e7.response && e7.response.status || 500;
      if (t14 > 0 && (Array.isArray(e7.options.retryStatusCodes) ? e7.options.retryStatusCodes.includes(r13) : lr2.has(r13))) {
        const r14 = "function" == typeof e7.options.retryDelay ? e7.options.retryDelay(e7) : e7.options.retryDelay || 0;
        return r14 > 0 && await new Promise((e8) => setTimeout(e8, r14)), $fetchRaw(e7.request, { ...e7.options, retry: t14 - 1 });
      }
    }
    const r12 = function(e8) {
      const t14 = e8.error?.message || e8.error?.toString() || "", r13 = e8.request?.method || e8.options?.method || "GET", s7 = e8.request?.url || String(e8.request) || "/", a7 = `[${r13}] ${JSON.stringify(s7)}`, c4 = e8.response ? `${e8.response.status} ${e8.response.statusText}` : "<no response>", u4 = new FetchError2(`${a7}: ${c4}${t14 ? ` ${t14}` : ""}`, e8.error ? { cause: e8.error } : void 0);
      for (const t15 of ["request", "options", "response"]) Object.defineProperty(u4, t15, { get: /* @__PURE__ */ __name(() => e8[t15], "get") });
      for (const [t15, r14] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u4, t15, { get: /* @__PURE__ */ __name(() => e8.response && e8.response[r14], "get") });
      return u4;
    }(e7);
    throw Error.captureStackTrace && Error.captureStackTrace(r12, $fetchRaw), r12;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a7, c4 = {}) {
    const u4 = { request: a7, options: resolveFetchOptions2(a7, c4, e6.defaults, r11), response: void 0, error: void 0 };
    let d7;
    if (u4.options.method && (u4.options.method = u4.options.method.toUpperCase()), u4.options.onRequest && await callHooks2(u4, u4.options.onRequest), "string" == typeof u4.request && (u4.options.baseURL && (u4.request = withBase(u4.request, u4.options.baseURL)), u4.options.query && (u4.request = withQuery(u4.request, u4.options.query), delete u4.options.query), "query" in u4.options && delete u4.options.query, "params" in u4.options && delete u4.options.params), u4.options.body && isPayloadMethod2(u4.options.method) && (!function(e7) {
      if (void 0 === e7) return false;
      const t13 = typeof e7;
      return "string" === t13 || "number" === t13 || "boolean" === t13 || null === t13 || "object" === t13 && (!!Array.isArray(e7) || !e7.buffer && (e7.constructor && "Object" === e7.constructor.name || "function" == typeof e7.toJSON));
    }(u4.options.body) ? ("pipeTo" in u4.options.body && "function" == typeof u4.options.body.pipeTo || "function" == typeof u4.options.body.pipe) && ("duplex" in u4.options || (u4.options.duplex = "half")) : (u4.options.body = "string" == typeof u4.options.body ? u4.options.body : JSON.stringify(u4.options.body), u4.options.headers = new r11(u4.options.headers || {}), u4.options.headers.has("content-type") || u4.options.headers.set("content-type", "application/json"), u4.options.headers.has("accept") || u4.options.headers.set("accept", "application/json"))), !u4.options.signal && u4.options.timeout) {
      const e7 = new s6();
      d7 = setTimeout(() => {
        const t13 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t13.name = "TimeoutError", t13.code = 23, e7.abort(t13);
      }, u4.options.timeout), u4.options.signal = e7.signal;
    }
    try {
      u4.response = await t12(u4.request, u4.options);
    } catch (e7) {
      return u4.error = e7, u4.options.onRequestError && await callHooks2(u4, u4.options.onRequestError), await onError(u4);
    } finally {
      d7 && clearTimeout(d7);
    }
    if ((u4.response.body || u4.response._bodyInit) && !dr2.has(u4.response.status) && "HEAD" !== u4.options.method) {
      const e7 = (u4.options.parseResponse ? "json" : u4.options.responseType) || function(e8 = "") {
        if (!e8) return "json";
        const t13 = e8.split(";").shift() || "";
        return ur3.test(t13) ? "json" : cr2.has(t13) || t13.startsWith("text/") ? "text" : "blob";
      }(u4.response.headers.get("content-type") || "");
      switch (e7) {
        case "json": {
          const e8 = await u4.response.text(), t13 = u4.options.parseResponse || destr;
          u4.response._data = t13(e8);
          break;
        }
        case "stream":
          u4.response._data = u4.response.body || u4.response._bodyInit;
          break;
        default:
          u4.response._data = await u4.response[e7]();
      }
    }
    return u4.options.onResponse && await callHooks2(u4, u4.options.onResponse), !u4.options.ignoreResponseError && u4.response.status >= 400 && u4.response.status < 600 ? (u4.options.onResponseError && await callHooks2(u4, u4.options.onResponseError), await onError(u4)) : u4.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e7, t13) {
    return (await $fetchRaw(e7, t13))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e7) => t12(...e7), $fetch.create = (t13 = {}, r12 = {}) => createFetch2({ ...e6, ...r12, defaults: { ...e6.defaults, ...r12.defaults, ...t13 } }), $fetch;
}
function asyncCall(e6, ...t12) {
  try {
    return (r11 = e6(...t12)) && "function" == typeof r11.then ? r11 : Promise.resolve(r11);
  } catch (e7) {
    return Promise.reject(e7);
  }
  var r11;
}
function stringify2(e6) {
  if (/* @__PURE__ */ function(e7) {
    const t12 = typeof e7;
    return null === e7 || "object" !== t12 && "function" !== t12;
  }(e6)) return String(e6);
  if (function(e7) {
    const t12 = Object.getPrototypeOf(e7);
    return !t12 || t12.isPrototypeOf(Object);
  }(e6) || Array.isArray(e6)) return JSON.stringify(e6);
  if ("function" == typeof e6.toJSON) return stringify2(e6.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e6) {
  return "string" == typeof e6 ? e6 : gr3 + function(e7) {
    if (globalThis.Buffer) return r10.from(e7).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e7));
  }(e6);
}
function deserializeRaw(e6) {
  return "string" != typeof e6 ? e6 : e6.startsWith(gr3) ? function(e7) {
    if (globalThis.Buffer) return r10.from(e7, "base64");
    return Uint8Array.from(globalThis.atob(e7), (e8) => e8.codePointAt(0));
  }(e6.slice(7)) : e6;
}
function normalizeKey$1(e6) {
  return e6 && e6.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e6) {
  return normalizeKey$1(e6.join(":"));
}
function normalizeBaseKey(e6) {
  return (e6 = normalizeKey$1(e6)) ? e6 + ":" : "";
}
function watch2(e6, t12, r11) {
  return e6.watch ? e6.watch((e7, s6) => t12(e7, r11 + s6)) : () => {
  };
}
async function dispose(e6) {
  "function" == typeof e6.dispose && await asyncCall(e6.dispose);
}
function useStorage(e6 = "") {
  return e6 ? function(e7, t12) {
    if (!(t12 = normalizeBaseKey(t12))) return e7;
    const r11 = { ...e7 };
    for (const s6 of yr3) r11[s6] = (r12 = "", ...a7) => e7[s6](t12 + r12, ...a7);
    return r11.getKeys = (r12 = "", ...s6) => e7.getKeys(t12 + r12, ...s6).then((e8) => e8.map((e9) => e9.slice(t12.length))), r11.getItems = async (r12, s6) => {
      const a7 = r12.map((e8) => "string" == typeof e8 ? t12 + e8 : { ...e8, key: t12 + e8.key });
      return (await e7.getItems(a7, s6)).map((e8) => ({ key: e8.key.slice(t12.length), value: e8.value }));
    }, r11.setItems = async (r12, s6) => {
      const a7 = r12.map((e8) => ({ key: t12 + e8.key, value: e8.value, options: e8.options }));
      return e7.setItems(a7, s6);
    }, r11;
  }(_r3, e6) : _r3;
}
function hash(e6) {
  return function(e7) {
    return new k3().finalize(e7).toBase64();
  }("string" == typeof e6 ? e6 : function(e7) {
    const t12 = new Er2();
    return t12.dispatch(e7), t12.buff;
  }(e6)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e6, t12 = {}) {
  t12 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t12 };
  const r11 = {}, s6 = t12.group || "nitro/functions", a7 = t12.name || e6.name || "_", c4 = t12.integrity || hash([e6, t12]), u4 = t12.validate || ((e7) => void 0 !== e7.value);
  return async (...d7) => {
    if (await t12.shouldBypassCache?.(...d7)) return e6(...d7);
    const h6 = await (t12.getKey || getKey)(...d7), f5 = await t12.shouldInvalidateCache?.(...d7), m5 = await async function(e7, d8, h7, f6) {
      const m6 = [t12.base, s6, a7, e7 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g5 = await useStorage().getItem(m6).catch((e8) => {
        console.error("[cache] Cache read error.", e8), useNitroApp().captureError(e8, { event: f6, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g5) {
        g5 = {};
        const e8 = new Error("Malformed data read from cache.");
        console.error("[cache]", e8), useNitroApp().captureError(e8, { event: f6, tags: ["cache"] });
      }
      const _3 = 1e3 * (t12.maxAge ?? 0);
      _3 && (g5.expires = Date.now() + _3);
      const v6 = h7 || g5.integrity !== c4 || _3 && Date.now() - (g5.mtime || 0) > _3 || false === u4(g5), x3 = v6 ? (async () => {
        const s7 = r11[e7];
        s7 || (void 0 !== g5.value && (t12.staleMaxAge || 0) >= 0 && false === t12.swr && (g5.value = void 0, g5.integrity = void 0, g5.mtime = void 0, g5.expires = void 0), r11[e7] = Promise.resolve(d8()));
        try {
          g5.value = await r11[e7];
        } catch (t13) {
          throw s7 || delete r11[e7], t13;
        }
        if (!s7 && (g5.mtime = Date.now(), g5.integrity = c4, delete r11[e7], false !== u4(g5))) {
          let e8;
          t12.maxAge && !t12.swr && (e8 = { ttl: t12.maxAge });
          const r12 = useStorage().setItem(m6, g5, e8).catch((e9) => {
            console.error("[cache] Cache write error.", e9), useNitroApp().captureError(e9, { event: f6, tags: ["cache"] });
          });
          f6?.waitUntil && f6.waitUntil(r12);
        }
      })() : Promise.resolve();
      return void 0 === g5.value ? await x3 : v6 && f6 && f6.waitUntil && f6.waitUntil(x3), t12.swr && false !== u4(g5) ? (x3.catch((e8) => {
        console.error("[cache] SWR handler error.", e8), useNitroApp().captureError(e8, { event: f6, tags: ["cache"] });
      }), g5) : x3.then(() => g5);
    }(h6, () => e6(...d7), f5, d7[0] && isEvent(d7[0]) ? d7[0] : void 0);
    let g4 = m5.value;
    return t12.transform && (g4 = await t12.transform(m5, ...d7) || g4), g4;
  };
}
function getKey(...e6) {
  return e6.length > 0 ? hash(e6) : "";
}
function escapeKey(e6) {
  return String(e6).replace(/\W/g, "");
}
function cloneWithProxy(e6, t12) {
  return new Proxy(e6, { get: /* @__PURE__ */ __name((e7, r11, s6) => r11 in t12 ? t12[r11] : Reflect.get(e7, r11, s6), "get"), set: /* @__PURE__ */ __name((e7, r11, s6, a7) => r11 in t12 ? (t12[r11] = s6, true) : Reflect.set(e7, r11, s6, a7), "set") });
}
function klona(e6) {
  if ("object" != typeof e6) return e6;
  var t12, r11, s6 = Object.prototype.toString.call(e6);
  if ("[object Object]" === s6) {
    if (e6.constructor !== Object && "function" == typeof e6.constructor) for (t12 in r11 = new e6.constructor(), e6) e6.hasOwnProperty(t12) && r11[t12] !== e6[t12] && (r11[t12] = klona(e6[t12]));
    else for (t12 in r11 = {}, e6) "__proto__" === t12 ? Object.defineProperty(r11, t12, { value: klona(e6[t12]), configurable: true, enumerable: true, writable: true }) : r11[t12] = klona(e6[t12]);
    return r11;
  }
  if ("[object Array]" === s6) {
    for (t12 = e6.length, r11 = Array(t12); t12--; ) r11[t12] = klona(e6[t12]);
    return r11;
  }
  return "[object Set]" === s6 ? (r11 = /* @__PURE__ */ new Set(), e6.forEach(function(e7) {
    r11.add(klona(e7));
  }), r11) : "[object Map]" === s6 ? (r11 = /* @__PURE__ */ new Map(), e6.forEach(function(e7, t13) {
    r11.set(klona(t13), klona(e7));
  }), r11) : "[object Date]" === s6 ? /* @__PURE__ */ new Date(+e6) : "[object RegExp]" === s6 ? ((r11 = new RegExp(e6.source, e6.flags)).lastIndex = e6.lastIndex, r11) : "[object DataView]" === s6 ? new e6.constructor(klona(e6.buffer)) : "[object ArrayBuffer]" === s6 ? e6.slice(0) : "Array]" === s6.slice(-6) ? new e6.constructor(e6) : e6;
}
function isUppercase(e6 = "") {
  if (!Cr2.test(e6)) return e6 !== e6.toLowerCase();
}
function kebabCase(e6, t12) {
  return e6 ? (Array.isArray(e6) ? e6 : function(e7) {
    const t13 = Ar2, r11 = [];
    if (!e7 || "string" != typeof e7) return r11;
    let s6, a7, c4 = "";
    for (const u4 of e7) {
      const e8 = t13.includes(u4);
      if (true === e8) {
        r11.push(c4), c4 = "", s6 = void 0;
        continue;
      }
      const d7 = isUppercase(u4);
      if (false === a7) {
        if (false === s6 && true === d7) {
          r11.push(c4), c4 = u4, s6 = d7;
          continue;
        }
        if (true === s6 && false === d7 && c4.length > 1) {
          const e9 = c4.at(-1);
          r11.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e9 + u4, s6 = d7;
          continue;
        }
      }
      c4 += u4, s6 = d7, a7 = e8;
    }
    return r11.push(c4), r11;
  }(e6)).map((e7) => e7.toLowerCase()).join(t12) : "";
}
function getEnv(e6, t12) {
  const r11 = (s6 = e6, kebabCase(s6 || "", "_")).toUpperCase();
  var s6;
  return destr(m4.env[t12.prefix + r11] ?? m4.env[t12.altPrefix + r11]);
}
function _isObject(e6) {
  return "object" == typeof e6 && !Array.isArray(e6);
}
function applyEnv(e6, t12, r11 = "") {
  for (const s6 in e6) {
    const a7 = r11 ? `${r11}_${s6}` : s6, c4 = getEnv(a7, t12);
    _isObject(e6[s6]) ? _isObject(c4) ? (e6[s6] = { ...e6[s6], ...c4 }, applyEnv(e6[s6], t12, a7)) : void 0 === c4 ? applyEnv(e6[s6], t12, a7) : e6[s6] = c4 ?? e6[s6] : e6[s6] = c4 ?? e6[s6], t12.envExpansion && "string" == typeof e6[s6] && (e6[s6] = _expandFromEnv(e6[s6]));
  }
  return e6;
}
function _expandFromEnv(e6) {
  return e6.replace(Tr2, (e7, t12) => m4.env[t12] || e7);
}
function useRuntimeConfig2(e6) {
  if (!e6) return Hr2;
  if (e6.context.nitro.runtimeConfig) return e6.context.nitro.runtimeConfig;
  const t12 = klona(Sr3);
  return applyEnv(t12, jr2), e6.context.nitro.runtimeConfig = t12, t12;
}
function _deepFreeze(e6) {
  const t12 = Object.getOwnPropertyNames(e6);
  for (const r11 of t12) {
    const t13 = e6[r11];
    t13 && "object" == typeof t13 && _deepFreeze(t13);
  }
  return Object.freeze(e6);
}
function executeAsync(e6) {
  const t12 = [];
  for (const e7 of Nr2) {
    const r12 = e7();
    r12 && t12.push(r12);
  }
  const restore = /* @__PURE__ */ __name(() => {
    for (const e7 of t12) e7();
  }, "restore");
  let r11 = e6();
  return r11 && "object" == typeof r11 && "catch" in r11 && (r11 = r11.catch((e7) => {
    throw restore(), e7;
  })), [r11, restore];
}
function createRouteRulesHandler(e6) {
  return rr3((t12) => {
    const r11 = getRouteRules(t12);
    if (r11.headers && Xt2(t12, r11.headers), r11.redirect) {
      let e7 = r11.redirect.to;
      if (e7.endsWith("/**")) {
        let s6 = t12.path;
        const a7 = r11.redirect._redirectStripBase;
        a7 && (s6 = withoutBase(s6, a7)), e7 = joinURL(e7.slice(0, -3), s6);
      } else if (t12.path.includes("?")) {
        e7 = withQuery(e7, getQuery$1(t12.path));
      }
      return function(e8, t13, r12 = 302) {
        return e8.node.res.statusCode = sanitizeStatusCode(r12, e8.node.res.statusCode), e8.node.res.setHeader("location", t13), send2(e8, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t13.replace(/"/g, "%22")}"></head></html>`, Vt2.html);
      }(t12, e7, r11.redirect.statusCode);
    }
    if (r11.proxy) {
      let s6 = r11.proxy.to;
      if (s6.endsWith("/**")) {
        let e7 = t12.path;
        const a7 = r11.proxy._proxyStripBase;
        a7 && (e7 = withoutBase(e7, a7)), s6 = joinURL(s6.slice(0, -3), e7);
      } else if (t12.path.includes("?")) {
        s6 = withQuery(s6, getQuery$1(t12.path));
      }
      return proxyRequest(t12, s6, { fetch: e6.localFetch, ...r11.proxy });
    }
  });
}
function getRouteRules(e6) {
  return e6.context._nitro = e6.context._nitro || {}, e6.context._nitro.routeRules || (e6.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e6.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e6.context._nitro.routeRules;
}
function getRouteRulesForPath(e6) {
  return Lt({}, ...Br2.matchAll(e6).reverse());
}
function joinHeaders(e6) {
  return Array.isArray(e6) ? e6.join(", ") : String(e6);
}
function normalizeCookieHeader(e6 = "") {
  return splitCookiesString(joinHeaders(e6));
}
function normalizeCookieHeaders(e6) {
  const t12 = new Headers();
  for (const [r11, s6] of e6) if ("set-cookie" === r11) for (const e7 of normalizeCookieHeader(s6)) t12.append("set-cookie", e7);
  else t12.set(r11, joinHeaders(s6));
  return t12;
}
function hasReqHeader(e6, t12, r11) {
  const s6 = function(e7, t13) {
    return getRequestHeaders(e7)[t13.toLowerCase()];
  }(e6, t12);
  return s6 && "string" == typeof s6 && s6.toLowerCase().includes(r11);
}
function defaultHandler(e6, t12, r11) {
  const s6 = e6.unhandled || e6.fatal, a7 = e6.statusCode || 500, c4 = e6.statusMessage || "Server Error", u4 = function(e7, t13 = {}) {
    const r12 = function(e8, t14 = {}) {
      if (t14.xForwardedHost) {
        const t15 = e8.node.req.headers["x-forwarded-host"];
        if (t15) return t15;
      }
      return e8.node.req.headers.host || "localhost";
    }(e7, t13), s7 = function(e8, t14 = {}) {
      return false !== t14.xForwardedProto && "https" === e8.node.req.headers["x-forwarded-proto"] || e8.node.req.connection?.encrypted ? "https" : "http";
    }(e7, t13), a8 = (e7.node.req.originalUrl || e7.path).replace(/^[/\\]+/g, "/");
    return new URL(a8, `${s7}://${r12}`);
  }(t12, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a7) {
    const e7 = "/";
    if (/^\/[^/]/.test(e7) && !u4.pathname.startsWith(e7)) {
      return { status: 302, statusText: "Found", headers: { location: `${e7}${u4.pathname.slice(1)}${u4.search}` }, body: "Redirecting..." };
    }
  }
  if (s6 && !r11?.silent) {
    const r12 = [e6.unhandled && "[unhandled]", e6.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r12} [${t12.method}] ${u4}
`, e6);
  }
  const d7 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t12, a7, c4), 404 !== a7 && function(e7, t13) {
    return e7.node.res.getHeader(t13);
  }(t12, "cache-control") || (d7["cache-control"] = "no-cache");
  return { status: a7, statusText: c4, headers: d7, body: { error: true, url: u4.href, statusCode: a7, statusMessage: c4, message: s6 ? "Server Error" : e6.message, data: s6 ? void 0 : e6.data } };
}
function useNitroApp() {
  return $r3;
}
function defineRenderHandler(e6) {
  const t12 = useRuntimeConfig2();
  return rr3(async (r11) => {
    const s6 = useNitroApp(), a7 = { event: r11, render: e6, response: void 0 };
    if (await s6.hooks.callHook("render:before", a7), !a7.response) {
      if (r11.path === `${t12.app.baseURL}favicon.ico`) return setResponseHeader(r11, "Content-Type", "image/x-icon"), send2(r11, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a7.response = await a7.render(r11), !a7.response) {
        const e7 = getResponseStatus(r11);
        return setResponseStatus(r11, 200 === e7 ? 500 : e7), send2(r11, "No response returned from render handler: " + r11.path);
      }
    }
    return await s6.hooks.callHook("render:response", a7.response, a7), a7.response.headers && setResponseHeaders(r11, a7.response.headers), (a7.response.statusCode || a7.response.statusMessage) && setResponseStatus(r11, a7.response.statusCode, a7.response.statusMessage), a7.response.body;
  });
}
var WriteStream2, ReadStream2, u3, Process2, d6, h5, _getEnv, f4, m4, g3, _2, v5, x2, R2, E3, C2, T2, S2, j2, H, I2, M2, P2, O2, N2, B, q, z2, U2, L2, $2, D2, W, K, F2, Z, Q, J, V, Y, G, X, ee, te2, re2, se2, ne, oe, ae2, ie2, ce3, ue2, le, de3, he2, pe3, fe3, me2, ge2, ye2, we2, be2, _e2, ve2, xe2, Re2, Ee2, ke2, Ce2, Ae2, Te2, Se2, je2, He2, Ie2, Me2, Pe2, Oe2, Ne2, Be2, qe2, ze2, Ue2, Le2, $e2, De2, We2, Ke3, Fe2, Ze2, Qe2, Je3, Ve2, Ye2, Ge2, Xe2, et2, tt2, rt2, st2, nt2, ot2, at2, it2, ct2, ut2, lt2, dt2, ht2, pt2, ft2, mt2, gt2, yt2, wt2, bt3, _t2, vt2, xt2, Rt2, Et2, kt2, Ct2, At2, Tt2, St2, jt2, Ht2, It2, Mt2, Pt2, Ot2, Nt2, Bt2, qt2, zt2, Ut2, Lt, $t2, i5, Dt2, Wt2, Kt2, A3, y3, w3, Ft2, Zt2, H3Error, Qt2, Jt2, Vt2, Yt2, Gt2, Xt2, er2, tr2, H3Event, rr3, lazyEventHandler, sr2, nr2, or2, Hookable, ar, FetchError2, ir2, cr2, ur3, lr2, dr2, hr2, pr2, fr2, mr2, gr3, yr3, memory, wr2, normalizeKey2, br2, _r3, vr2, xr2, Rr2, k3, l4, Er2, cachedEventHandler, kr2, Cr2, Ar2, Tr2, Sr3, jr2, Hr2, Ir2, Mr2, Pr2, getContext, Or2, Nr2, Br2, qr2, zr2, Ur2, _lazy_M0ZyF8, Lr2, $r3, Dr2, Wr2, Agent, Kr3, Fr, Zr3, Qr3, Jr3, Vr3, Yr3, Gr3, Xr3, es3, ts2, rs2, ss, ns2, os2, as2, is2, cs2, us2, ls2, ds, hs2, ps2, fs2, ms2, gs2, ys2, ws;
var init_nitro = __esm({
  "dist/server/chunks/nitro/nitro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    init_util2();
    "global" in globalThis || (globalThis.global = globalThis);
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e6) {
        this.fd = e6;
      }
      clearLine(e6, t12) {
        return t12 && t12(), false;
      }
      clearScreenDown(e6) {
        return e6 && e6(), false;
      }
      cursorTo(e6, t12, r11) {
        return r11 && "function" == typeof r11 && r11(), false;
      }
      moveCursor(e6, t12, r11) {
        return r11 && r11(), false;
      }
      getColorDepth(e6) {
        return 1;
      }
      hasColors(e6, t12) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e6, t12, r11) {
        e6 instanceof Uint8Array && (e6 = new TextDecoder().decode(e6));
        try {
          console.log(e6);
        } catch {
        }
        return r11 && "function" == typeof r11 && r11(), false;
      }
    };
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e6) {
        this.fd = e6;
      }
      setRawMode(e6) {
        return this.isRaw = e6, this;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    u3 = "22.14.0";
    Process2 = class _Process extends e5 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(t12) {
        super(), this.env = t12.env, this.hrtime = t12.hrtime, this.nextTick = t12.nextTick;
        for (const t13 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(e5.prototype)]) {
          const e6 = this[t13];
          "function" == typeof e6 && (this[t13] = e6.bind(this));
        }
      }
      emitWarning(e6, t12, r11) {
        console.warn(`${r11 ? `[${r11}] ` : ""}${t12 ? `${t12}: ` : ""}${e6}`);
      }
      emit(...e6) {
        return super.emit(...e6);
      }
      listeners(e6) {
        return super.listeners(e6);
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
      chdir(e6) {
        this.#s = e6;
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
        return `v${u3}`;
      }
      get versions() {
        return { node: u3 };
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
    d6 = /* @__PURE__ */ Object.create(null);
    h5 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e6) => globalThis.__env__ || h5?.env || (e6 ? d6 : globalThis), "_getEnv");
    f4 = new Proxy(d6, { get: /* @__PURE__ */ __name((e6, t12) => _getEnv()[t12] ?? d6[t12], "get"), has: /* @__PURE__ */ __name((e6, t12) => t12 in _getEnv() || t12 in d6, "has"), set: /* @__PURE__ */ __name((e6, t12, r11) => (_getEnv(true)[t12] = r11, true), "set"), deleteProperty: /* @__PURE__ */ __name((e6, t12) => (delete _getEnv(true)[t12], true), "deleteProperty"), ownKeys() {
      const e6 = _getEnv();
      return Object.keys(e6);
    }, getOwnPropertyDescriptor(e6, t12) {
      const r11 = _getEnv();
      if (t12 in r11) return { value: r11[t12], writable: true, enumerable: true, configurable: true };
    } });
    m4 = new Process2({ env: f4, hrtime: Object.assign(function(e6) {
      const t12 = Date.now(), r11 = Math.trunc(t12 / 1e3), s6 = t12 % 1e3 * 1e6;
      if (e6) {
        let t13 = r11 - e6[0], a7 = s6 - e6[0];
        return a7 < 0 && (t13 -= 1, a7 = 1e9 + a7), [t13, a7];
      }
      return [r11, s6];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") }), nextTick: process_default.nextTick });
    for (const e6 of ["exit", "getBuiltinModule", "platform"]) e6 in process_default && (m4[e6] = process_default[e6]);
    process_default.features && Object.defineProperty(m4, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: g3, addListener: _2, allowedNodeEnvironmentFlags: v5, hasUncaughtExceptionCaptureCallback: x2, setUncaughtExceptionCaptureCallback: R2, loadEnvFile: E3, sourceMapsEnabled: C2, arch: T2, argv: S2, argv0: j2, chdir: H, config: I2, connected: M2, constrainedMemory: P2, availableMemory: O2, cpuUsage: N2, cwd: B, debugPort: q, dlopen: z2, disconnect: U2, emit: L2, emitWarning: $2, env: D2, eventNames: W, execArgv: K, execPath: F2, exit: Z, finalization: Q, features: J, getBuiltinModule: V, getActiveResourcesInfo: Y, getMaxListeners: G, hrtime: X, kill: ee, listeners: te2, listenerCount: re2, memoryUsage: se2, nextTick: ne, on: oe, off: ae2, once: ie2, pid: ce3, platform: ue2, ppid: le, prependListener: de3, prependOnceListener: he2, rawListeners: pe3, release: fe3, removeAllListeners: me2, removeListener: ge2, report: ye2, resourceUsage: we2, setMaxListeners: be2, setSourceMapsEnabled: _e2, stderr: ve2, stdin: xe2, stdout: Re2, title: Ee2, umask: ke2, uptime: Ce2, version: Ae2, versions: Te2, domain: Se2, initgroups: je2, moduleLoadList: He2, reallyExit: Ie2, openStdin: Me2, assert: Pe2, binding: Oe2, send: Ne2, exitCode: Be2, channel: qe2, getegid: ze2, geteuid: Ue2, getgid: Le2, getgroups: $e2, getuid: De2, setegid: We2, seteuid: Ke3, setgid: Fe2, setgroups: Ze2, setuid: Qe2, permission: Je3, mainModule: Ve2, _events: Ye2, _eventsCount: Ge2, _exiting: Xe2, _maxListeners: et2, _debugEnd: tt2, _debugProcess: rt2, _fatalException: st2, _getActiveHandles: nt2, _getActiveRequests: ot2, _kill: at2, _preload_modules: it2, _rawDebug: ct2, _startProfilerIdleNotifier: ut2, _stopProfilerIdleNotifier: lt2, _tickCallback: dt2, _disconnect: ht2, _handleQueue: pt2, _pendingMessage: ft2, _channel: mt2, _send: gt2, _linkedBinding: yt2 } = m4);
    wt2 = globalThis.process;
    globalThis.process = wt2 ? new Proxy(wt2, { get: /* @__PURE__ */ __name((e6, t12, r11) => Reflect.has(e6, t12) ? Reflect.get(e6, t12, r11) : Reflect.get(m4, t12, r11), "get") }) : m4, globalThis.Buffer || (globalThis.Buffer = r10), globalThis.setImmediate || (globalThis.setImmediate = s5), globalThis.clearImmediate || (globalThis.clearImmediate = a6);
    bt3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    _t2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    vt2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    xt2 = /#/g;
    Rt2 = /&/g;
    Et2 = /\//g;
    kt2 = /=/g;
    Ct2 = /\+/g;
    At2 = /%5e/gi;
    Tt2 = /%60/gi;
    St2 = /%7c/gi;
    jt2 = /%20/gi;
    __name(encodeQueryValue2, "encodeQueryValue");
    __name(encodeQueryKey2, "encodeQueryKey");
    __name(decode2, "decode");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery2, "stringifyQuery");
    Ht2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    It2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Mt2 = /^([/\\]\s*){2,}[^/\\]/;
    Pt2 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    Ot2 = /\/$|\/\?|\/#/;
    Nt2 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(isScriptProtocol, "isScriptProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withBase, "withBase");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery$1, "getQuery$1");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    __name(joinRelativeURL, "joinRelativeURL");
    Bt2 = Symbol.for("ufo:protocolRelative");
    __name(parseURL2, "parseURL");
    __name(parsePath, "parsePath");
    qt2 = 0;
    zt2 = 1;
    Ut2 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Lt = createDefu();
    $t2 = createDefu((e6, t12, r11) => {
      if (void 0 !== e6[t12] && "function" == typeof r11) return e6[t12] = r11(e6[t12]), true;
    });
    __name(o5, "o");
    i5 = class _i extends e5 {
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
      static from(e6, t12) {
        return new _i(t12);
      }
      constructor(e6) {
        super();
      }
      _read(e6) {
      }
      read(e6) {
      }
      setEncoding(e6) {
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
      unpipe(e6) {
        return this;
      }
      unshift(e6, t12) {
      }
      wrap(e6) {
        return this;
      }
      push(e6, t12) {
        return false;
      }
      _destroy(e6, t12) {
        this.removeAllListeners();
      }
      destroy(e6) {
        return this.destroyed = true, this._destroy(e6), this;
      }
      pipe(e6, t12) {
        return {};
      }
      compose(e6, t12) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o5("Readable.asyncIterator");
      }
      iterator(e6) {
        throw o5("Readable.iterator");
      }
      map(e6, t12) {
        throw o5("Readable.map");
      }
      filter(e6, t12) {
        throw o5("Readable.filter");
      }
      forEach(e6, t12) {
        throw o5("Readable.forEach");
      }
      reduce(e6, t12, r11) {
        throw o5("Readable.reduce");
      }
      find(e6, t12) {
        throw o5("Readable.find");
      }
      findIndex(e6, t12) {
        throw o5("Readable.findIndex");
      }
      some(e6, t12) {
        throw o5("Readable.some");
      }
      toArray(e6) {
        throw o5("Readable.toArray");
      }
      every(e6, t12) {
        throw o5("Readable.every");
      }
      flatMap(e6, t12) {
        throw o5("Readable.flatMap");
      }
      drop(e6, t12) {
        throw o5("Readable.drop");
      }
      take(e6, t12) {
        throw o5("Readable.take");
      }
      asIndexedPairs(e6) {
        throw o5("Readable.asIndexedPairs");
      }
    };
    Dt2 = class extends e5 {
      static {
        __name(this, "Dt");
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
      constructor(e6) {
        super();
      }
      pipe(e6, t12) {
        return {};
      }
      _write(e6, t12, s6) {
        if (this.writableEnded) s6 && s6();
        else {
          if (void 0 === this._data) this._data = e6;
          else {
            const s7 = "string" == typeof this._data ? r10.from(this._data, this._encoding || t12 || "utf8") : this._data, a7 = "string" == typeof e6 ? r10.from(e6, t12 || this._encoding || "utf8") : e6;
            this._data = r10.concat([s7, a7]);
          }
          this._encoding = t12, s6 && s6();
        }
      }
      _writev(e6, t12) {
      }
      _destroy(e6, t12) {
      }
      _final(e6) {
      }
      write(e6, t12, r11) {
        const s6 = "string" == typeof t12 ? this._encoding : "utf8", a7 = "function" == typeof t12 ? t12 : "function" == typeof r11 ? r11 : void 0;
        return this._write(e6, s6, a7), true;
      }
      setDefaultEncoding(e6) {
        return this;
      }
      end(e6, t12, r11) {
        const s6 = "function" == typeof e6 ? e6 : "function" == typeof t12 ? t12 : "function" == typeof r11 ? r11 : void 0;
        if (this.writableEnded) return s6 && s6(), this;
        const a7 = e6 === s6 ? void 0 : e6;
        if (a7) {
          const e7 = t12 === s6 ? void 0 : t12;
          this.write(a7, e7, s6);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e6) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e6, t12) {
        throw new Error("Method not implemented.");
      }
    };
    Wt2 = class {
      static {
        __name(this, "Wt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e6 = new i5(), t12 = new Dt2()) {
        Object.assign(this, e6), Object.assign(this, t12), this._destroy = /* @__PURE__ */ function(...e7) {
          return function(...t13) {
            for (const r11 of e7) r11(...t13);
          };
        }(e6._destroy, t12._destroy);
      }
    };
    Kt2 = (Object.assign(Wt2.prototype, i5.prototype), Object.assign(Wt2.prototype, Dt2.prototype), Wt2);
    A3 = class extends Kt2 {
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
      constructor(e6) {
        super();
      }
      write(e6, t12, r11) {
        return false;
      }
      connect(e6, t12, r11) {
        return this;
      }
      end(e6, t12, r11) {
        return this;
      }
      setEncoding(e6) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e6, t12) {
        return this;
      }
      setNoDelay(e6) {
        return this;
      }
      setKeepAlive(e6, t12) {
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
        const e6 = new Error("ERR_SOCKET_CLOSED");
        return e6.code = "ERR_SOCKET_CLOSED", this.destroy(e6), this;
      }
    };
    y3 = class extends i5 {
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
      constructor(e6) {
        super(), this.socket = this.connection = e6 || new A3();
      }
      get rawHeaders() {
        const e6 = this.headers, t12 = [];
        for (const r11 in e6) if (Array.isArray(e6[r11])) for (const s6 of e6[r11]) t12.push(r11, s6);
        else t12.push(r11, e6[r11]);
        return t12;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e6, t12) {
        return this;
      }
      get headersDistinct() {
        return p3(this.headers);
      }
      get trailersDistinct() {
        return p3(this.trailers);
      }
    };
    __name(p3, "p");
    w3 = class extends Dt2 {
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
      constructor(e6) {
        super(), this.req = e6;
      }
      assignSocket(e6) {
        e6._httpMessage = this, this.socket = e6, this.connection = e6, this.emit("socket", e6), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e6) {
      }
      writeContinue(e6) {
      }
      writeHead(e6, t12, r11) {
        e6 && (this.statusCode = e6), "string" == typeof t12 && (this.statusMessage = t12, t12 = void 0);
        const s6 = r11 || t12;
        if (s6 && !Array.isArray(s6)) for (const e7 in s6) this.setHeader(e7, s6[e7]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e6, t12) {
        return this;
      }
      appendHeader(e6, t12) {
        e6 = e6.toLowerCase();
        const r11 = this._headers[e6], s6 = [...Array.isArray(r11) ? r11 : [r11], ...Array.isArray(t12) ? t12 : [t12]].filter(Boolean);
        return this._headers[e6] = s6.length > 1 ? s6 : s6[0], this;
      }
      setHeader(e6, t12) {
        return this._headers[e6.toLowerCase()] = t12, this;
      }
      setHeaders(e6) {
        for (const [t12, r11] of Object.entries(e6)) this.setHeader(t12, r11);
        return this;
      }
      getHeader(e6) {
        return this._headers[e6.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e6) {
        return e6.toLowerCase() in this._headers;
      }
      removeHeader(e6) {
        delete this._headers[e6.toLowerCase()];
      }
      addTrailers(e6) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e6, t12) {
        "function" == typeof t12 && t12();
      }
    };
    Ft2 = (() => {
      const n5 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n5.prototype = /* @__PURE__ */ Object.create(null), n5;
    })();
    __name(S$1, "S$1");
    Zt2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b2, "b");
    __name(hasProp2, "hasProp");
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
      constructor(e6, t12 = {}) {
        super(e6, t12), t12.cause && !this.cause && (this.cause = t12.cause);
      }
      toJSON() {
        const e6 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e6.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e6.data = this.data), e6;
      }
    };
    __name(createError2, "createError");
    __name(isError2, "isError");
    __name(getQuery, "getQuery");
    __name(getRequestHeaders, "getRequestHeaders");
    Qt2 = Symbol.for("h3RawBody");
    Jt2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Vt2 = { html: "text/html", json: "application/json" };
    Yt2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    Gt2 = void 0 === s5 ? (e6) => e6() : s5;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseStatus, "getResponseStatus");
    __name(getResponseStatusText, "getResponseStatusText");
    __name(setResponseHeaders, "setResponseHeaders");
    Xt2 = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    er2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    tr2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
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
      constructor(e6, t12) {
        this.node = { req: e6, res: t12 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e6) {
          const t12 = new Headers();
          for (const [r11, s6] of Object.entries(e6)) if (Array.isArray(s6)) for (const e7 of s6) t12.append(r11, e7);
          else s6 && t12.set(r11, s6);
          return t12;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e6) {
        return Promise.resolve(e6).then((e7) => sendWebResponse(this, e7));
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
    rr3 = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e6) {
      let t12, r11;
      const resolveHandler = /* @__PURE__ */ __name(() => r11 ? Promise.resolve(r11) : (t12 || (t12 = Promise.resolve(e6()).then((e7) => {
        const t13 = e7.default || e7;
        if ("function" != typeof t13) throw new TypeError("Invalid lazy handler result. It should be a function:", t13);
        return r11 = { handler: toEventHandler(e7.default || e7) }, r11;
      })), t12), "resolveHandler"), s6 = rr3((e7) => r11 ? r11.handler(e7) : resolveHandler().then((t13) => t13.handler(e7)));
      return s6.__resolve__ = resolveHandler, s6;
    }, "lazyEventHandler");
    __name(createApp2, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    sr2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks, "flatHooks");
    nr2 = { run: /* @__PURE__ */ __name((e6) => e6(), "run") };
    or2 = void 0 !== console.createTask ? console.createTask : () => nr2;
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
      hook(e6, t12, r11 = {}) {
        if (!e6 || "function" != typeof t12) return () => {
        };
        const s6 = e6;
        let a7;
        for (; this._deprecatedHooks[e6]; ) a7 = this._deprecatedHooks[e6], e6 = a7.to;
        if (a7 && !r11.allowDeprecated) {
          let e7 = a7.message;
          e7 || (e7 = `${s6} hook has been deprecated` + (a7.to ? `, please use ${a7.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e7) || (console.warn(e7), this._deprecatedMessages.add(e7));
        }
        if (!t12.name) try {
          Object.defineProperty(t12, "name", { get: /* @__PURE__ */ __name(() => "_" + e6.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e6] = this._hooks[e6] || [], this._hooks[e6].push(t12), () => {
          t12 && (this.removeHook(e6, t12), t12 = void 0);
        };
      }
      hookOnce(e6, t12) {
        let r11, _function = /* @__PURE__ */ __name((...e7) => ("function" == typeof r11 && r11(), r11 = void 0, _function = void 0, t12(...e7)), "_function");
        return r11 = this.hook(e6, _function), r11;
      }
      removeHook(e6, t12) {
        if (this._hooks[e6]) {
          const r11 = this._hooks[e6].indexOf(t12);
          -1 !== r11 && this._hooks[e6].splice(r11, 1), 0 === this._hooks[e6].length && delete this._hooks[e6];
        }
      }
      deprecateHook(e6, t12) {
        this._deprecatedHooks[e6] = "string" == typeof t12 ? { to: t12 } : t12;
        const r11 = this._hooks[e6] || [];
        delete this._hooks[e6];
        for (const t13 of r11) this.hook(e6, t13);
      }
      deprecateHooks(e6) {
        Object.assign(this._deprecatedHooks, e6);
        for (const t12 in e6) this.deprecateHook(t12, e6[t12]);
      }
      addHooks(e6) {
        const t12 = flatHooks(e6), r11 = Object.keys(t12).map((e7) => this.hook(e7, t12[e7]));
        return () => {
          for (const e7 of r11.splice(0, r11.length)) e7();
        };
      }
      removeHooks(e6) {
        const t12 = flatHooks(e6);
        for (const e7 in t12) this.removeHook(e7, t12[e7]);
      }
      removeAllHooks() {
        for (const e6 in this._hooks) delete this._hooks[e6];
      }
      callHook(e6, ...t12) {
        return t12.unshift(e6), this.callHookWith(serialTaskCaller, e6, ...t12);
      }
      callHookParallel(e6, ...t12) {
        return t12.unshift(e6), this.callHookWith(parallelTaskCaller, e6, ...t12);
      }
      callHookWith(e6, t12, ...r11) {
        const s6 = this._before || this._after ? { name: t12, args: r11, context: {} } : void 0;
        this._before && callEachWith(this._before, s6);
        const a7 = e6(t12 in this._hooks ? [...this._hooks[t12]] : [], r11);
        return a7 instanceof Promise ? a7.finally(() => {
          this._after && s6 && callEachWith(this._after, s6);
        }) : (this._after && s6 && callEachWith(this._after, s6), a7);
      }
      beforeEach(e6) {
        return this._before = this._before || [], this._before.push(e6), () => {
          if (void 0 !== this._before) {
            const t12 = this._before.indexOf(e6);
            -1 !== t12 && this._before.splice(t12, 1);
          }
        };
      }
      afterEach(e6) {
        return this._after = this._after || [], this._after.push(e6), () => {
          if (void 0 !== this._after) {
            const t12 = this._after.indexOf(e6);
            -1 !== t12 && this._after.splice(t12, 1);
          }
        };
      }
    };
    __name(createHooks, "createHooks");
    ar = globalThis;
    FetchError2 = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e6, t12) {
        super(e6, t12), this.name = "FetchError", t12?.cause && !this.cause && (this.cause = t12.cause);
      }
    };
    ir2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod2, "isPayloadMethod");
    cr2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ur3 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions2, "resolveFetchOptions");
    __name(callHooks2, "callHooks");
    lr2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    dr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch2, "createFetch");
    hr2 = function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== ar) return ar;
      throw new Error("unable to locate global object");
    }();
    pr2 = hr2.fetch ? (...e6) => hr2.fetch(...e6) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    fr2 = hr2.Headers;
    mr2 = hr2.AbortController;
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    createFetch2({ fetch: pr2, Headers: fr2, AbortController: mr2 });
    gr3 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    yr3 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e6 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e6, "getInstance"), hasItem: /* @__PURE__ */ __name((t12) => e6.has(t12), "hasItem"), getItem: /* @__PURE__ */ __name((t12) => e6.get(t12) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t12) => e6.get(t12) ?? null, "getItemRaw"), setItem(t12, r11) {
        e6.set(t12, r11);
      }, setItemRaw(t12, r11) {
        e6.set(t12, r11);
      }, removeItem(t12) {
        e6.delete(t12);
      }, getKeys: /* @__PURE__ */ __name(() => [...e6.keys()], "getKeys"), clear() {
        e6.clear();
      }, dispose() {
        e6.clear();
      } };
    }, "memory");
    __name(watch2, "watch");
    __name(dispose, "dispose");
    wr2 = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e6) {
      return e6 && e6.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    br2 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(wr2)), "getKeys"), hasItem: /* @__PURE__ */ __name((e6) => (e6 = normalizeKey2(e6), Promise.resolve(e6 in wr2)), "hasItem"), getItem: /* @__PURE__ */ __name((e6) => (e6 = normalizeKey2(e6), Promise.resolve(wr2[e6] ? wr2[e6].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e6) => (e6 = normalizeKey2(e6), Promise.resolve(wr2[e6] ? wr2[e6].meta : {})), "getMeta") };
    _r3 = function(e6 = {}) {
      const t12 = { mounts: { "": e6.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e7) => {
        for (const r12 of t12.mountpoints) if (e7.startsWith(r12)) return { base: r12, relativeKey: e7.slice(r12.length), driver: t12.mounts[r12] };
        return { base: "", relativeKey: e7, driver: t12.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e7, r12) => t12.mountpoints.filter((t13) => t13.startsWith(e7) || r12 && e7.startsWith(t13)).map((r13) => ({ relativeBase: e7.length > r13.length ? e7.slice(r13.length) : void 0, mountpoint: r13, driver: t12.mounts[r13] })), "getMounts"), onChange = /* @__PURE__ */ __name((e7, r12) => {
        if (t12.watching) {
          r12 = normalizeKey$1(r12);
          for (const s6 of t12.watchListeners) s6(e7, r12);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t12.watching) {
          for (const e7 in t12.unwatch) await t12.unwatch[e7]();
          t12.unwatch = {}, t12.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e7, t13, r12) => {
        const s6 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e8) => {
          let t14 = s6.get(e8.base);
          return t14 || (t14 = { driver: e8.driver, base: e8.base, items: [] }, s6.set(e8.base, t14)), t14;
        }, "getBatch");
        for (const r13 of e7) {
          const e8 = "string" == typeof r13, s7 = normalizeKey$1(e8 ? r13 : r13.key), a7 = e8 ? void 0 : r13.value, c4 = e8 || !r13.options ? t13 : { ...t13, ...r13.options }, u4 = getMount(s7);
          getBatch(u4).items.push({ key: s7, value: a7, relativeKey: u4.relativeKey, options: c4 });
        }
        return Promise.all([...s6.values()].map((e8) => r12(e8))).then((e8) => e8.flat());
      }, "runBatch"), r11 = { hasItem(e7, t13 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r12, driver: s6 } = getMount(e7);
        return asyncCall(s6.hasItem, r12, t13);
      }, getItem(e7, t13 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r12, driver: s6 } = getMount(e7);
        return asyncCall(s6.getItem, r12, t13).then((e8) => destr(e8));
      }, getItems: /* @__PURE__ */ __name((e7, t13 = {}) => runBatch(e7, t13, (e8) => e8.driver.getItems ? asyncCall(e8.driver.getItems, e8.items.map((e9) => ({ key: e9.relativeKey, options: e9.options })), t13).then((t14) => t14.map((t15) => ({ key: joinKeys(e8.base, t15.key), value: destr(t15.value) }))) : Promise.all(e8.items.map((t14) => asyncCall(e8.driver.getItem, t14.relativeKey, t14.options).then((e9) => ({ key: t14.key, value: destr(e9) }))))), "getItems"), getItemRaw(e7, t13 = {}) {
        e7 = normalizeKey$1(e7);
        const { relativeKey: r12, driver: s6 } = getMount(e7);
        return s6.getItemRaw ? asyncCall(s6.getItemRaw, r12, t13) : asyncCall(s6.getItem, r12, t13).then((e8) => deserializeRaw(e8));
      }, async setItem(e7, t13, s6 = {}) {
        if (void 0 === t13) return r11.removeItem(e7);
        e7 = normalizeKey$1(e7);
        const { relativeKey: a7, driver: c4 } = getMount(e7);
        c4.setItem && (await asyncCall(c4.setItem, a7, stringify2(t13), s6), c4.watch || onChange("update", e7));
      }, async setItems(e7, t13) {
        await runBatch(e7, t13, async (e8) => {
          if (e8.driver.setItems) return asyncCall(e8.driver.setItems, e8.items.map((e9) => ({ key: e9.relativeKey, value: stringify2(e9.value), options: e9.options })), t13);
          e8.driver.setItem && await Promise.all(e8.items.map((t14) => asyncCall(e8.driver.setItem, t14.relativeKey, stringify2(t14.value), t14.options)));
        });
      }, async setItemRaw(e7, t13, s6 = {}) {
        if (void 0 === t13) return r11.removeItem(e7, s6);
        e7 = normalizeKey$1(e7);
        const { relativeKey: a7, driver: c4 } = getMount(e7);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a7, t13, s6);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a7, serializeRaw(t13), s6);
        }
        c4.watch || onChange("update", e7);
      }, async removeItem(e7, t13 = {}) {
        "boolean" == typeof t13 && (t13 = { removeMeta: t13 }), e7 = normalizeKey$1(e7);
        const { relativeKey: r12, driver: s6 } = getMount(e7);
        s6.removeItem && (await asyncCall(s6.removeItem, r12, t13), (t13.removeMeta || t13.removeMata) && await asyncCall(s6.removeItem, r12 + "$", t13), s6.watch || onChange("remove", e7));
      }, async getMeta(e7, t13 = {}) {
        "boolean" == typeof t13 && (t13 = { nativeOnly: t13 }), e7 = normalizeKey$1(e7);
        const { relativeKey: r12, driver: s6 } = getMount(e7), a7 = /* @__PURE__ */ Object.create(null);
        if (s6.getMeta && Object.assign(a7, await asyncCall(s6.getMeta, r12, t13)), !t13.nativeOnly) {
          const e8 = await asyncCall(s6.getItem, r12 + "$", t13).then((e9) => destr(e9));
          e8 && "object" == typeof e8 && ("string" == typeof e8.atime && (e8.atime = new Date(e8.atime)), "string" == typeof e8.mtime && (e8.mtime = new Date(e8.mtime)), Object.assign(a7, e8));
        }
        return a7;
      }, setMeta(e7, t13, r12 = {}) {
        return this.setItem(e7 + "$", t13, r12);
      }, removeMeta(e7, t13 = {}) {
        return this.removeItem(e7 + "$", t13);
      }, async getKeys(e7, t13 = {}) {
        e7 = normalizeBaseKey(e7);
        const r12 = getMounts(e7, true);
        let s6 = [];
        const a7 = [];
        let c4 = true;
        for (const e8 of r12) {
          e8.driver.flags?.maxDepth || (c4 = false);
          const r13 = await asyncCall(e8.driver.getKeys, e8.relativeBase, t13);
          for (const t14 of r13) {
            const r14 = e8.mountpoint + normalizeKey$1(t14);
            s6.some((e9) => r14.startsWith(e9)) || a7.push(r14);
          }
          s6 = [e8.mountpoint, ...s6.filter((t14) => !t14.startsWith(e8.mountpoint))];
        }
        const u4 = void 0 !== t13.maxDepth && !c4;
        return a7.filter((r13) => (!u4 || function(e8, t14) {
          if (void 0 === t14) return true;
          let r14 = 0, s7 = e8.indexOf(":");
          for (; s7 > -1; ) r14++, s7 = e8.indexOf(":", s7 + 1);
          return r14 <= t14;
        }(r13, t13.maxDepth)) && function(e8, t14) {
          return t14 ? e8.startsWith(t14) && "$" !== e8[e8.length - 1] : "$" !== e8[e8.length - 1];
        }(r13, e7));
      }, async clear(e7, t13 = {}) {
        e7 = normalizeBaseKey(e7), await Promise.all(getMounts(e7, false).map(async (e8) => {
          if (e8.driver.clear) return asyncCall(e8.driver.clear, e8.relativeBase, t13);
          if (e8.driver.removeItem) {
            const r12 = await e8.driver.getKeys(e8.relativeBase || "", t13);
            return Promise.all(r12.map((r13) => e8.driver.removeItem(r13, t13)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t12.mounts).map((e7) => dispose(e7)));
      }, watch: /* @__PURE__ */ __name(async (e7) => (await (async () => {
        if (!t12.watching) {
          t12.watching = true;
          for (const e8 in t12.mounts) t12.unwatch[e8] = await watch2(t12.mounts[e8], onChange, e8);
        }
      })(), t12.watchListeners.push(e7), async () => {
        t12.watchListeners = t12.watchListeners.filter((t13) => t13 !== e7), 0 === t12.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t12.watchListeners = [], await stopWatch();
      }, mount(e7, s6) {
        if ((e7 = normalizeBaseKey(e7)) && t12.mounts[e7]) throw new Error(`already mounted at ${e7}`);
        return e7 && (t12.mountpoints.push(e7), t12.mountpoints.sort((e8, t13) => t13.length - e8.length)), t12.mounts[e7] = s6, t12.watching && Promise.resolve(watch2(s6, onChange, e7)).then((r12) => {
          t12.unwatch[e7] = r12;
        }).catch(console.error), r11;
      }, async unmount(e7, r12 = true) {
        (e7 = normalizeBaseKey(e7)) && t12.mounts[e7] && (t12.watching && e7 in t12.unwatch && (t12.unwatch[e7]?.(), delete t12.unwatch[e7]), r12 && await dispose(t12.mounts[e7]), t12.mountpoints = t12.mountpoints.filter((t13) => t13 !== e7), delete t12.mounts[e7]);
      }, getMount(e7 = "") {
        e7 = normalizeKey$1(e7) + ":";
        const t13 = getMount(e7);
        return { driver: t13.driver, base: t13.base };
      }, getMounts(e7 = "", t13 = {}) {
        e7 = normalizeKey$1(e7);
        return getMounts(e7, t13.parents).map((e8) => ({ driver: e8.driver, base: e8.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e7, t13 = {}) => r11.getKeys(e7, t13), "keys"), get: /* @__PURE__ */ __name((e7, t13 = {}) => r11.getItem(e7, t13), "get"), set: /* @__PURE__ */ __name((e7, t13, s6 = {}) => r11.setItem(e7, t13, s6), "set"), has: /* @__PURE__ */ __name((e7, t13 = {}) => r11.hasItem(e7, t13), "has"), del: /* @__PURE__ */ __name((e7, t13 = {}) => r11.removeItem(e7, t13), "del"), remove: /* @__PURE__ */ __name((e7, t13 = {}) => r11.removeItem(e7, t13), "remove") };
      return r11;
    }({});
    __name(useStorage, "useStorage");
    _r3.mount("/assets", br2);
    vr2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    xr2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Rr2 = [];
    k3 = class {
      static {
        __name(this, "k");
      }
      _data = new l4();
      _hash = new l4([...vr2]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e6) {
        e6 && this._append(e6);
        const t12 = 8 * this._nDataBytes, r11 = 8 * this._data.sigBytes;
        return this._data.words[r11 >>> 5] |= 128 << 24 - r11 % 32, this._data.words[14 + (r11 + 64 >>> 9 << 4)] = Math.floor(t12 / 4294967296), this._data.words[15 + (r11 + 64 >>> 9 << 4)] = t12, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e6, t12) {
        const r11 = this._hash.words;
        let s6 = r11[0], a7 = r11[1], c4 = r11[2], u4 = r11[3], d7 = r11[4], h6 = r11[5], f5 = r11[6], m5 = r11[7];
        for (let r12 = 0; r12 < 64; r12++) {
          if (r12 < 16) Rr2[r12] = 0 | e6[t12 + r12];
          else {
            const e7 = Rr2[r12 - 15], t13 = (e7 << 25 | e7 >>> 7) ^ (e7 << 14 | e7 >>> 18) ^ e7 >>> 3, s7 = Rr2[r12 - 2], a8 = (s7 << 15 | s7 >>> 17) ^ (s7 << 13 | s7 >>> 19) ^ s7 >>> 10;
            Rr2[r12] = t13 + Rr2[r12 - 7] + a8 + Rr2[r12 - 16];
          }
          const g4 = s6 & a7 ^ s6 & c4 ^ a7 & c4, _3 = (s6 << 30 | s6 >>> 2) ^ (s6 << 19 | s6 >>> 13) ^ (s6 << 10 | s6 >>> 22), v6 = m5 + ((d7 << 26 | d7 >>> 6) ^ (d7 << 21 | d7 >>> 11) ^ (d7 << 7 | d7 >>> 25)) + (d7 & h6 ^ ~d7 & f5) + xr2[r12] + Rr2[r12];
          m5 = f5, f5 = h6, h6 = d7, d7 = u4 + v6 | 0, u4 = c4, c4 = a7, a7 = s6, s6 = v6 + (_3 + g4) | 0;
        }
        r11[0] = r11[0] + s6 | 0, r11[1] = r11[1] + a7 | 0, r11[2] = r11[2] + c4 | 0, r11[3] = r11[3] + u4 | 0, r11[4] = r11[4] + d7 | 0, r11[5] = r11[5] + h6 | 0, r11[6] = r11[6] + f5 | 0, r11[7] = r11[7] + m5 | 0;
      }
      _append(e6) {
        "string" == typeof e6 && (e6 = l4.fromUtf8(e6)), this._data.concat(e6), this._nDataBytes += e6.sigBytes;
      }
      _process(e6) {
        let t12, r11 = this._data.sigBytes / 64;
        r11 = e6 ? Math.ceil(r11) : Math.max((0 | r11) - this._minBufferSize, 0);
        const s6 = 16 * r11, a7 = Math.min(4 * s6, this._data.sigBytes);
        if (s6) {
          for (let e7 = 0; e7 < s6; e7 += 16) this._doProcessBlock(this._data.words, e7);
          t12 = this._data.words.splice(0, s6), this._data.sigBytes -= a7;
        }
        return new l4(t12, a7);
      }
    };
    l4 = class _l2 {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e6, t12) {
        e6 = this.words = e6 || [], this.sigBytes = void 0 === t12 ? 4 * e6.length : t12;
      }
      static fromUtf8(e6) {
        const t12 = unescape(encodeURIComponent(e6)), r11 = t12.length, s6 = [];
        for (let e7 = 0; e7 < r11; e7++) s6[e7 >>> 2] |= (255 & t12.charCodeAt(e7)) << 24 - e7 % 4 * 8;
        return new _l2(s6, r11);
      }
      toBase64() {
        const e6 = [];
        for (let t12 = 0; t12 < this.sigBytes; t12 += 3) {
          const r11 = (this.words[t12 >>> 2] >>> 24 - t12 % 4 * 8 & 255) << 16 | (this.words[t12 + 1 >>> 2] >>> 24 - (t12 + 1) % 4 * 8 & 255) << 8 | this.words[t12 + 2 >>> 2] >>> 24 - (t12 + 2) % 4 * 8 & 255;
          for (let s6 = 0; s6 < 4 && 8 * t12 + 6 * s6 < 8 * this.sigBytes; s6++) e6.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r11 >>> 6 * (3 - s6) & 63));
        }
        return e6.join("");
      }
      concat(e6) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t12 = 0; t12 < e6.sigBytes; t12++) {
          const r11 = e6.words[t12 >>> 2] >>> 24 - t12 % 4 * 8 & 255;
          this.words[this.sigBytes + t12 >>> 2] |= r11 << 24 - (this.sigBytes + t12) % 4 * 8;
        }
        else for (let t12 = 0; t12 < e6.sigBytes; t12 += 4) this.words[this.sigBytes + t12 >>> 2] = e6.words[t12 >>> 2];
        this.sigBytes += e6.sigBytes;
      }
    };
    Er2 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #n = /* @__PURE__ */ new Map();
        write(e6) {
          this.buff += e6;
        }
        dispatch(e6) {
          return this[null === e6 ? "null" : typeof e6](e6);
        }
        object(e6) {
          if (e6 && "function" == typeof e6.toJSON) return this.object(e6.toJSON());
          const t12 = Object.prototype.toString.call(e6);
          let s6 = "";
          const a7 = t12.length;
          s6 = a7 < 10 ? "unknown:[" + t12 + "]" : t12.slice(8, a7 - 1), s6 = s6.toLowerCase();
          let c4 = null;
          if (void 0 !== (c4 = this.#n.get(e6))) return this.dispatch("[CIRCULAR:" + c4 + "]");
          if (this.#n.set(e6, this.#n.size), void 0 !== r10 && r10.isBuffer && r10.isBuffer(e6)) return this.write("buffer:"), this.write(e6.toString("utf8"));
          if ("object" !== s6 && "function" !== s6 && "asyncfunction" !== s6) this[s6] ? this[s6](e6) : this.unknown(e6, s6);
          else {
            const t13 = Object.keys(e6).sort(), r11 = [];
            this.write("object:" + (t13.length + r11.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t14) => {
              this.dispatch(t14), this.write(":"), this.dispatch(e6[t14]), this.write(",");
            }, "dispatchForKey");
            for (const e7 of t13) dispatchForKey(e7);
            for (const e7 of r11) dispatchForKey(e7);
          }
        }
        array(e6, t12) {
          if (t12 = void 0 !== t12 && t12, this.write("array:" + e6.length + ":"), !t12 || e6.length <= 1) {
            for (const t13 of e6) this.dispatch(t13);
            return;
          }
          const r11 = /* @__PURE__ */ new Map(), s6 = e6.map((e7) => {
            const t13 = new Hasher2();
            t13.dispatch(e7);
            for (const [e8, s7] of t13.#n) r11.set(e8, s7);
            return t13.toString();
          });
          return this.#n = r11, s6.sort(), this.array(s6, false);
        }
        date(e6) {
          return this.write("date:" + e6.toJSON());
        }
        symbol(e6) {
          return this.write("symbol:" + e6.toString());
        }
        unknown(e6, t12) {
          if (this.write(t12), e6) return this.write(":"), e6 && "function" == typeof e6.entries ? this.array([...e6.entries()], true) : void 0;
        }
        error(e6) {
          return this.write("error:" + e6.toString());
        }
        boolean(e6) {
          return this.write("bool:" + e6);
        }
        string(e6) {
          this.write("string:" + e6.length + ":"), this.write(e6);
        }
        function(e6) {
          this.write("fn:"), !function(e7) {
            if ("function" != typeof e7) return false;
            return "[native code] }" === Function.prototype.toString.call(e7).slice(-15);
          }(e6) ? this.dispatch(e6.toString()) : this.dispatch("[native]");
        }
        number(e6) {
          return this.write("number:" + e6);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e6) {
          return this.write("regex:" + e6.toString());
        }
        arraybuffer(e6) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e6));
        }
        url(e6) {
          return this.write("url:" + e6.toString());
        }
        map(e6) {
          this.write("map:");
          const t12 = [...e6];
          return this.array(t12, false);
        }
        set(e6) {
          this.write("set:");
          const t12 = [...e6];
          return this.array(t12, false);
        }
        bigint(e6) {
          return this.write("bigint:" + e6.toString());
        }
      }
      for (const e6 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e6] = function(t12) {
        return this.write(e6 + ":"), this.array([...t12], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e6, t12 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r11 = (t12.varies || []).filter(Boolean).map((e7) => e7.toLowerCase()).sort(), s6 = { ...t12, getKey: /* @__PURE__ */ __name(async (e7) => {
        const s7 = await t12.getKey?.(e7);
        if (s7) return escapeKey(s7);
        const a8 = e7.node.req.originalUrl || e7.node.req.url || e7.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL2(a8).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash(a8)}`, ...r11.map((t13) => [t13, e7.node.req.headers[t13]]).map(([e8, t13]) => `${escapeKey(e8)}.${hash(t13)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e7) => !!e7.value && (!(e7.value.code >= 400) && (void 0 !== e7.value.body && ("undefined" !== e7.value.headers.etag && "undefined" !== e7.value.headers["last-modified"]))), "validate"), group: t12.group || "nitro/handlers", integrity: t12.integrity || hash([e6, t12]) }, a7 = function(e7, t13 = {}) {
        return defineCachedFunction(e7, t13);
      }(async (a8) => {
        const c4 = {};
        for (const e7 of r11) {
          const t13 = a8.node.req.headers[e7];
          void 0 !== t13 && (c4[e7] = t13);
        }
        const u4 = cloneWithProxy(a8.node.req, { headers: c4 }), d7 = {};
        let h6;
        const f5 = createEvent(u4, cloneWithProxy(a8.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e7) => d7[e7], "getHeader"), setHeader(e7, t13) {
          return d7[e7] = t13, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d7), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e7) => e7 in d7, "hasHeader"), removeHeader(e7) {
          delete d7[e7];
        }, getHeaders: /* @__PURE__ */ __name(() => d7, "getHeaders"), end(e7, t13, r12) {
          return "string" == typeof e7 && (h6 = e7), "function" == typeof t13 && t13(), "function" == typeof r12 && r12(), this;
        }, write: /* @__PURE__ */ __name((e7, t13, r12) => ("string" == typeof e7 && (h6 = e7), "function" == typeof t13 && t13(void 0), "function" == typeof r12 && r12(), true), "write"), writeHead(e7, t13) {
          if (this.statusCode = e7, t13) {
            if (Array.isArray(t13) || "string" == typeof t13) throw new TypeError("Raw headers  is not supported.");
            for (const e8 in t13) {
              const r12 = t13[e8];
              void 0 !== r12 && this.setHeader(e8, r12);
            }
          }
          return this;
        } }));
        f5.fetch = (e7, t13) => fetchWithEvent(f5, e7, t13, { fetch: useNitroApp().localFetch }), f5.$fetch = (e7, t13) => fetchWithEvent(f5, e7, t13, { fetch: globalThis.$fetch }), f5.waitUntil = a8.waitUntil, f5.context = a8.context, f5.context.cache = { options: s6 };
        const m5 = await e6(f5) || h6, g4 = f5.node.res.getHeaders();
        g4.etag = String(g4.Etag || g4.etag || `W/"${hash(m5)}"`), g4["last-modified"] = String(g4["Last-Modified"] || g4["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _3 = [];
        t12.swr ? (t12.maxAge && _3.push(`s-maxage=${t12.maxAge}`), t12.staleMaxAge ? _3.push(`stale-while-revalidate=${t12.staleMaxAge}`) : _3.push("stale-while-revalidate")) : t12.maxAge && _3.push(`max-age=${t12.maxAge}`), _3.length > 0 && (g4["cache-control"] = _3.join(", "));
        return { code: f5.node.res.statusCode, headers: g4, body: m5 };
      }, s6);
      return defineEventHandler(async (r12) => {
        if (t12.headersOnly) {
          if (handleCacheHeaders(r12, { maxAge: t12.maxAge })) return;
          return e6(r12);
        }
        const s7 = await a7(r12);
        if (r12.node.res.headersSent || r12.node.res.writableEnded) return s7.body;
        if (!handleCacheHeaders(r12, { modifiedTime: new Date(s7.headers["last-modified"]), etag: s7.headers.etag, maxAge: t12.maxAge })) {
          r12.node.res.statusCode = s7.code;
          for (const e7 in s7.headers) {
            const t13 = s7.headers[e7];
            "set-cookie" === e7 ? r12.node.res.appendHeader(e7, splitCookiesString(t13)) : void 0 !== t13 && r12.node.res.setHeader(e7, t13);
          }
          return s7.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    kr2 = $t2({ nuxt: {} });
    Cr2 = /\d/;
    Ar2 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    Tr2 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    Sr3 = { app: { baseURL: "/", buildId: "84dc9f8e-2ef9-45f2-ade8-60dd29f7a2e6", buildAssetsDir: "/_fragment/nuxt/assets/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/": { redirect: { to: "/store/catalog", statusCode: 307 } }, "/_fragment/nuxt/assets/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_fragment/nuxt/assets/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_fragment/nuxt/assets/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    jr2 = { prefix: "NITRO_", altPrefix: Sr3.nitro.envPrefix ?? m4.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Sr3.nitro.envExpansion ?? m4.env.NITRO_ENV_EXPANSION ?? false };
    Hr2 = _deepFreeze(applyEnv(klona(Sr3), jr2));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(kr2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e6, t12) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r11 = useRuntimeConfig2();
      if (t12 in r11) return r11[t12];
    }, "get") });
    Ir2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ar ? ar : {};
    Mr2 = "__unctx__";
    Pr2 = Ir2[Mr2] || (Ir2[Mr2] = /* @__PURE__ */ function(e6 = {}) {
      const t12 = {};
      return { get: /* @__PURE__ */ __name((r11, s6 = {}) => (t12[r11] || (t12[r11] = function(e7 = {}) {
        let t13, r12 = false;
        const checkConflict = /* @__PURE__ */ __name((e8) => {
          if (t13 && t13 !== e8) throw new Error("Context conflict");
        }, "checkConflict");
        let s7;
        if (e7.asyncContext) {
          const t14 = e7.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t14 ? s7 = new t14() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s7) {
            const e8 = s7.getStore();
            if (void 0 !== e8) return e8;
          }
          return t13;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e8 = _getCurrentInstance();
          if (void 0 === e8) throw new Error("Context is not available");
          return e8;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e8, s8) => {
          s8 || checkConflict(e8), t13 = e8, r12 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t13 = void 0, r12 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e8, a7) => {
          checkConflict(e8), t13 = e8;
          try {
            return s7 ? s7.run(e8, a7) : a7();
          } finally {
            r12 || (t13 = void 0);
          }
        }, "call"), async callAsync(e8, a7) {
          t13 = e8;
          const onRestore = /* @__PURE__ */ __name(() => {
            t13 = e8;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t13 === e8 ? onRestore : void 0, "onLeave");
          Nr2.add(onLeave);
          try {
            const c4 = s7 ? s7.run(e8, a7) : a7();
            return r12 || (t13 = void 0), await c4;
          } finally {
            Nr2.delete(onLeave);
          }
        } };
      }({ ...e6, ...s6 })), t12[r11]), "get") };
    }());
    getContext = /* @__PURE__ */ __name((e6, t12 = {}) => Pr2.get(e6, t12), "getContext");
    Or2 = "__unctx_async_handlers__";
    Nr2 = Ir2[Or2] || (Ir2[Or2] = /* @__PURE__ */ new Set());
    __name(executeAsync, "executeAsync");
    getContext("nitro-app", { asyncContext: false, AsyncLocalStorage: void 0 });
    Br2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRules, "getRouteRules");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    qr2 = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(hasReqHeader, "hasReqHeader");
    __name(defaultHandler, "defaultHandler");
    zr2 = [async function(e6, t12, { defaultHandler: r11 }) {
      if (t12.handled || function(e7) {
        return !hasReqHeader(e7, "accept", "text/html") && (hasReqHeader(e7, "accept", "application/json") || hasReqHeader(e7, "user-agent", "curl/") || hasReqHeader(e7, "user-agent", "httpie/") || hasReqHeader(e7, "sec-fetch-mode", "cors") || e7.path.startsWith("/api/") || e7.path.endsWith(".json"));
      }(t12)) return;
      const s6 = await r11(e6, t12, { json: true });
      if (404 === (e6.statusCode || 500) && 302 === s6.status) return setResponseHeaders(t12, s6.headers), setResponseStatus(t12, s6.status, s6.statusText), send2(t12, JSON.stringify(s6.body, null, 2));
      const a7 = s6.body, c4 = new URL(a7.url);
      a7.url = withoutBase(c4.pathname, useRuntimeConfig2(t12).app.baseURL) + c4.search + c4.hash, a7.message ||= "Server Error", a7.data ||= e6.data, a7.statusMessage ||= e6.statusMessage, delete s6.headers["content-type"], delete s6.headers["content-security-policy"], setResponseHeaders(t12, s6.headers);
      const u4 = getRequestHeaders(t12), d7 = t12.path.startsWith("/__nuxt_error") || !!u4["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t12).app.baseURL, "/__nuxt_error"), a7), { headers: { ...u4, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (t12.handled) return;
      if (!d7) {
        const { template: e7 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        return setResponseHeader(t12, "Content-Type", "text/html;charset=UTF-8"), send2(t12, e7(a7));
      }
      const h6 = await d7.text();
      for (const [e7, r12] of d7.headers.entries()) setResponseHeader(t12, e7, r12);
      return setResponseStatus(t12, d7.status && 200 !== d7.status ? d7.status : s6.status, d7.statusText || s6.statusText), send2(t12, h6);
    }, function(e6, t12) {
      const r11 = defaultHandler(e6, t12);
      return setResponseHeaders(t12, r11.headers), setResponseStatus(t12, r11.status, r11.statusText), send2(t12, JSON.stringify(r11.body, null, 2));
    }];
    Ur2 = [];
    _lazy_M0ZyF8 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e6) {
      return e6.z;
    }), "_lazy_M0ZyF8");
    Lr2 = [{ route: "/__nuxt_error", handler: _lazy_M0ZyF8, lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_island/**", handler: defineEventHandler(() => {
    }), lazy: false, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_M0ZyF8, lazy: true, middleware: false, method: void 0 }];
    $r3 = function() {
      const e6 = useRuntimeConfig2(), t12 = createHooks(), captureError = /* @__PURE__ */ __name((e7, r12 = {}) => {
        const s7 = t12.callHookParallel("error", e7, r12).catch((e8) => {
          console.error("Error while capturing another error", e8);
        });
        if (r12.event && isEvent(r12.event)) {
          const t13 = r12.event.context.nitro?.errors;
          t13 && t13.push({ error: e7, context: r12 }), r12.event.waitUntil && r12.event.waitUntil(s7);
        }
      }, "captureError"), r11 = createApp2({ debug: destr(false), onError: /* @__PURE__ */ __name((e7, t13) => (captureError(e7, { event: t13, tags: ["request"] }), async function(e8, t14) {
        for (const r12 of zr2) try {
          if (await r12(e8, t14, { defaultHandler }), t14.handled) return;
        } catch (e9) {
          console.error(e9);
        }
      }(e7, t13)), "onError"), onRequest: /* @__PURE__ */ __name(async (e7) => {
        e7.context.nitro = e7.context.nitro || { errors: [] };
        const t13 = e7.node.req?.__unenv__;
        t13?._platform && (e7.context = { _platform: t13?._platform, ...t13._platform, ...e7.context }), !e7.context.waitUntil && t13?.waitUntil && (e7.context.waitUntil = t13.waitUntil), e7.fetch = (t14, r12) => fetchWithEvent(e7, t14, r12, { fetch: localFetch }), e7.$fetch = (t14, r12) => fetchWithEvent(e7, t14, r12, { fetch: c4 }), e7.waitUntil = (t14) => {
          e7.context.nitro._waitUntilPromises || (e7.context.nitro._waitUntilPromises = []), e7.context.nitro._waitUntilPromises.push(t14), e7.context.waitUntil && e7.context.waitUntil(t14);
        }, e7.captureError = (t14, r12) => {
          captureError(t14, { event: e7, ...r12 });
        }, await $r3.hooks.callHook("request", e7).catch((t14) => {
          captureError(t14, { event: e7, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e7, t13) => {
        await $r3.hooks.callHook("beforeResponse", e7, t13).catch((t14) => {
          captureError(t14, { event: e7, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e7, t13) => {
        await $r3.hooks.callHook("afterResponse", e7, t13).catch((t14) => {
          captureError(t14, { event: e7, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s6 = function(e7 = {}) {
        const t13 = createRouter$1({}), r12 = {};
        let s7;
        const a8 = {}, addRoute = /* @__PURE__ */ __name((e8, s8, c6) => {
          let u4 = r12[e8];
          if (u4 || (r12[e8] = u4 = { path: e8, handlers: {} }, t13.insert(e8, u4)), Array.isArray(c6)) for (const t14 of c6) addRoute(e8, s8, t14);
          else u4.handlers[c6] = toEventHandler(s8, 0, e8);
          return a8;
        }, "addRoute");
        a8.use = a8.add = (e8, t14, r13) => addRoute(e8, t14, r13 || "all");
        for (const e8 of sr2) a8[e8] = (t14, r13) => a8.add(t14, r13, e8);
        const matchHandler = /* @__PURE__ */ __name((e8 = "/", r13 = "get") => {
          const a9 = e8.indexOf("?");
          -1 !== a9 && (e8 = e8.slice(0, Math.max(0, a9)));
          const c6 = t13.lookup(e8);
          if (!c6 || !c6.handlers) return { error: createError2({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e8 || "/"}.` }) };
          let u4 = c6.handlers[r13] || c6.handlers.all;
          if (!u4) {
            s7 || (s7 = toRouteMatcher(t13));
            const a10 = s7.matchAll(e8).reverse();
            for (const e9 of a10) {
              if (e9.handlers[r13]) {
                u4 = e9.handlers[r13], c6.handlers[r13] = c6.handlers[r13] || u4;
                break;
              }
              if (e9.handlers.all) {
                u4 = e9.handlers.all, c6.handlers.all = c6.handlers.all || u4;
                break;
              }
            }
          }
          return u4 ? { matched: c6, handler: u4 } : { error: createError2({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r13} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e7.preemptive || e7.preemtive;
        return a8.handler = rr3((e8) => {
          const t14 = matchHandler(e8.path, e8.method.toLowerCase());
          if ("error" in t14) {
            if (c5) throw t14.error;
            return;
          }
          e8.context.matchedRoute = t14.matched;
          const r13 = t14.matched.params || {};
          return e8.context.params = r13, Promise.resolve(t14.handler(e8)).then((e9) => void 0 === e9 && c5 ? null : e9);
        }), a8.handler.__resolve__ = async (e8) => {
          e8 = withLeadingSlash(e8);
          const t14 = matchHandler(e8);
          if ("error" in t14) return;
          let r13 = { route: t14.matched.path, handler: t14.handler };
          if (t14.handler.__resolve__) {
            const s8 = await t14.handler.__resolve__(e8);
            if (!s8) return;
            r13 = { ...r13, ...s8 };
          }
          return r13;
        }, a8;
      }({ preemptive: true }), a7 = toNodeListener(r11), localFetch = /* @__PURE__ */ __name((e7, t13) => e7.toString().startsWith("/") ? async function(e8, t14, r12 = {}) {
        try {
          const s7 = await b2(e8, { url: t14, ...r12 });
          return new Response(s7.body, { status: s7.status, statusText: s7.statusText, headers: S$1(s7.headers) });
        } catch (e9) {
          return new Response(e9.toString(), { status: Number.parseInt(e9.statusCode || e9.code) || 500, statusText: e9.statusText });
        }
      }(a7, e7, t13).then((e8) => function(e9) {
        return e9.headers.has("set-cookie") ? new Response(e9.body, { status: e9.status, statusText: e9.statusText, headers: normalizeCookieHeaders(e9.headers) }) : e9;
      }(e8)) : globalThis.fetch(e7, t13), "localFetch"), c4 = createFetch2({ fetch: localFetch, Headers: fr2, defaults: { baseURL: e6.app.baseURL } });
      globalThis.$fetch = c4, r11.use(createRouteRulesHandler({ localFetch }));
      for (const t13 of Lr2) {
        let a8 = t13.lazy ? lazyEventHandler(t13.handler) : t13.handler;
        if (t13.middleware || !t13.route) {
          const s7 = (e6.app.baseURL + (t13.route || "/")).replace(/\/+/g, "/");
          r11.use(s7, a8);
        } else {
          const e7 = getRouteRulesForPath(t13.route.replace(/:\w+|\*\*/g, "_"));
          e7.cache && (a8 = cachedEventHandler(a8, { group: "nitro/routes", ...e7.cache })), s6.use(t13.route, a8, t13.method);
        }
      }
      return r11.use(e6.app.baseURL, s6.handler), { hooks: t12, h3App: r11, router: s6, localCall: /* @__PURE__ */ __name((e7) => b2(a7, e7), "localCall"), localFetch, captureError };
    }();
    __name(useNitroApp, "useNitroApp");
    __name(defineRenderHandler, "defineRenderHandler");
    !function(e6) {
      for (const t12 of Ur2) try {
        t12(e6);
      } catch (t13) {
        throw e6.captureError(t13, { tags: ["plugin"] }), t13;
      }
    }($r3);
    Dr2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2025-06-25T19:32:02.945Z", size: 4286, path: "../public/favicon.ico" }, "/_fragment/nuxt/assets/BSEQr37T.js": { type: "text/javascript; charset=utf-8", etag: '"1cbd-8pRXzrJs3hu5CsT974AB+3q/z74"', mtime: "2025-06-25T19:32:02.939Z", size: 7357, path: "../public/_fragment/nuxt/assets/BSEQr37T.js" }, "/_fragment/nuxt/assets/BiANmn3m.js": { type: "text/javascript; charset=utf-8", etag: '"1492-Wi6QkJoKnpDCbBQO+pQfz/PZa+8"', mtime: "2025-06-25T19:32:02.939Z", size: 5266, path: "../public/_fragment/nuxt/assets/BiANmn3m.js" }, "/_fragment/nuxt/assets/CRM5rju_.js": { type: "text/javascript; charset=utf-8", etag: '"b6-KUMcwCECGV+y8vCfbVcnuOocrZY"', mtime: "2025-06-25T19:32:02.939Z", size: 182, path: "../public/_fragment/nuxt/assets/CRM5rju_.js" }, "/_fragment/nuxt/assets/CorraNfA.js": { type: "text/javascript; charset=utf-8", etag: '"19dc-5f2Xix29zOFFCxc0ewq9iudV+nI"', mtime: "2025-06-25T19:32:02.939Z", size: 6620, path: "../public/_fragment/nuxt/assets/CorraNfA.js" }, "/_fragment/nuxt/assets/D-urxdlr.js": { type: "text/javascript; charset=utf-8", etag: '"d54-rP4wDh56uWGRn1lIdAg7VlRaxKc"', mtime: "2025-06-25T19:32:02.939Z", size: 3412, path: "../public/_fragment/nuxt/assets/D-urxdlr.js" }, "/_fragment/nuxt/assets/D2gImkYK.js": { type: "text/javascript; charset=utf-8", etag: '"608-HuNyR9VWE/d6xooLYNAGqQNH6Bo"', mtime: "2025-06-25T19:32:02.939Z", size: 1544, path: "../public/_fragment/nuxt/assets/D2gImkYK.js" }, "/_fragment/nuxt/assets/DTLjtXbn.js": { type: "text/javascript; charset=utf-8", etag: '"8a-/u6hYtXH1SgSFyWiKlDPo2WI5Eo"', mtime: "2025-06-25T19:32:02.939Z", size: 138, path: "../public/_fragment/nuxt/assets/DTLjtXbn.js" }, "/_fragment/nuxt/assets/DUrJz1Zx.js": { type: "text/javascript; charset=utf-8", etag: '"ecb-7T76E2ZcoDJFNta8TF13YuYSqT4"', mtime: "2025-06-25T19:32:02.939Z", size: 3787, path: "../public/_fragment/nuxt/assets/DUrJz1Zx.js" }, "/_fragment/nuxt/assets/DWypVVWZ.js": { type: "text/javascript; charset=utf-8", etag: '"2937d-r5ikYri5iO5K0KA/mgnfhGNRfzw"', mtime: "2025-06-25T19:32:02.940Z", size: 168829, path: "../public/_fragment/nuxt/assets/DWypVVWZ.js" }, "/_fragment/nuxt/assets/_id_.OLrNJgxX.css": { type: "text/css; charset=utf-8", etag: '"18f-xnodR6t7nfhaaw+nXR5qPOA1LnY"', mtime: "2025-06-25T19:32:02.940Z", size: 399, path: "../public/_fragment/nuxt/assets/_id_.OLrNJgxX.css" }, "/_fragment/nuxt/assets/cartService.BFUL3bBD.css": { type: "text/css; charset=utf-8", etag: '"82-CH9Zt7EtZQFHpmahWfA252taYTA"', mtime: "2025-06-25T19:32:02.940Z", size: 130, path: "../public/_fragment/nuxt/assets/cartService.BFUL3bBD.css" }, "/_fragment/nuxt/assets/error-404.DmTBnK63.css": { type: "text/css; charset=utf-8", etag: '"de4-qQ5xb25nq0DPAjNLnEwQPw6TlIQ"', mtime: "2025-06-25T19:32:02.940Z", size: 3556, path: "../public/_fragment/nuxt/assets/error-404.DmTBnK63.css" }, "/_fragment/nuxt/assets/error-500.BhIjmUiw.css": { type: "text/css; charset=utf-8", etag: '"75c-0ijQEyGx4/DqoCy5O4l7d1LBlZ8"', mtime: "2025-06-25T19:32:02.940Z", size: 1884, path: "../public/_fragment/nuxt/assets/error-500.BhIjmUiw.css" }, "/_fragment/nuxt/assets/g7Zpg31N.js": { type: "text/javascript; charset=utf-8", etag: '"12e-6N7/FehSxTuAg2IGTqyWwVXLMD4"', mtime: "2025-06-25T19:32:02.940Z", size: 302, path: "../public/_fragment/nuxt/assets/g7Zpg31N.js" }, "/_fragment/nuxt/assets/index.BYQ6AtVR.css": { type: "text/css; charset=utf-8", etag: '"1cb-CZB8KZmEp1nW74L6XmMPcLBohzE"', mtime: "2025-06-25T19:32:02.940Z", size: 459, path: "../public/_fragment/nuxt/assets/index.BYQ6AtVR.css" }, "/_fragment/nuxt/assets/builds/latest.json": { type: "application/json", etag: '"47-C/vJbOAY8rf/QhtGrn+WKlHui44"', mtime: "2025-06-25T19:32:02.935Z", size: 71, path: "../public/_fragment/nuxt/assets/builds/latest.json" }, "/_fragment/nuxt/assets/images/product1.webp": { type: "image/webp", etag: '"c54e-C9RuXZrZkCAf/LoVuMl+8nEmJtI"', mtime: "2025-06-25T19:32:02.943Z", size: 50510, path: "../public/_fragment/nuxt/assets/images/product1.webp" }, "/_fragment/nuxt/assets/images/product10.webp": { type: "image/webp", etag: '"fb08-NEkkzcRFjpVFTHfw4TsjTDH6G5E"', mtime: "2025-06-25T19:32:02.943Z", size: 64264, path: "../public/_fragment/nuxt/assets/images/product10.webp" }, "/_fragment/nuxt/assets/images/product11.webp": { type: "image/webp", etag: '"c0e8-5vDqJhriJT9d/VK1Q1KnoLr7Eso"', mtime: "2025-06-25T19:32:02.943Z", size: 49384, path: "../public/_fragment/nuxt/assets/images/product11.webp" }, "/_fragment/nuxt/assets/images/product12.webp": { type: "image/webp", etag: '"c284-6/8s0LzF0MPB9Xjevmn02lwbwIM"', mtime: "2025-06-25T19:32:02.944Z", size: 49796, path: "../public/_fragment/nuxt/assets/images/product12.webp" }, "/_fragment/nuxt/assets/images/product13.webp": { type: "image/webp", etag: '"b0b4-n0N7z5/2eyxcEhd2ga6Wel5JUjo"', mtime: "2025-06-25T19:32:02.944Z", size: 45236, path: "../public/_fragment/nuxt/assets/images/product13.webp" }, "/_fragment/nuxt/assets/images/product14.webp": { type: "image/webp", etag: '"cbba-4Iy6cNrHsQ8T/gwDolg8RVMMpIY"', mtime: "2025-06-25T19:32:02.944Z", size: 52154, path: "../public/_fragment/nuxt/assets/images/product14.webp" }, "/_fragment/nuxt/assets/images/product15.webp": { type: "image/webp", etag: '"9ab4-5nDoROyUvq4MYlHfUnguBk2j0j4"', mtime: "2025-06-25T19:32:02.943Z", size: 39604, path: "../public/_fragment/nuxt/assets/images/product15.webp" }, "/_fragment/nuxt/assets/images/product2.webp": { type: "image/webp", etag: '"edbc-vVYEy6uCQSvnPfxT2z51GwfC/2Q"', mtime: "2025-06-25T19:32:02.944Z", size: 60860, path: "../public/_fragment/nuxt/assets/images/product2.webp" }, "/_fragment/nuxt/assets/images/product3.webp": { type: "image/webp", etag: '"c2fc-IQWOyiMO5E5G+gBF+uZT7yJ06pM"', mtime: "2025-06-25T19:32:02.944Z", size: 49916, path: "../public/_fragment/nuxt/assets/images/product3.webp" }, "/_fragment/nuxt/assets/images/product4.webp": { type: "image/webp", etag: '"eee2-dJbutGS09PvmnHj3jJkYKx1LSPw"', mtime: "2025-06-25T19:32:02.944Z", size: 61154, path: "../public/_fragment/nuxt/assets/images/product4.webp" }, "/_fragment/nuxt/assets/images/product5.webp": { type: "image/webp", etag: '"9bea-kd4bBXl94yX/ZedwXTBju7S8zNc"', mtime: "2025-06-25T19:32:02.944Z", size: 39914, path: "../public/_fragment/nuxt/assets/images/product5.webp" }, "/_fragment/nuxt/assets/images/product6.webp": { type: "image/webp", etag: '"c318-lcXk1zc1uLnLbwdP5CD4LIrqmJM"', mtime: "2025-06-25T19:32:02.945Z", size: 49944, path: "../public/_fragment/nuxt/assets/images/product6.webp" }, "/_fragment/nuxt/assets/images/product7.webp": { type: "image/webp", etag: '"d252-KhTC07oH8T4pUpXT9MMTCnM/Gew"', mtime: "2025-06-25T19:32:02.945Z", size: 53842, path: "../public/_fragment/nuxt/assets/images/product7.webp" }, "/_fragment/nuxt/assets/images/product8.webp": { type: "image/webp", etag: '"fbd2-zWL9ruYZ4x01fmauR/gE7VhhME0"', mtime: "2025-06-25T19:32:02.945Z", size: 64466, path: "../public/_fragment/nuxt/assets/images/product8.webp" }, "/_fragment/nuxt/assets/images/product9.webp": { type: "image/webp", etag: '"e490-qhvZLaNvhmWucJruVCME2XoIn0A"', mtime: "2025-06-25T19:32:02.945Z", size: 58512, path: "../public/_fragment/nuxt/assets/images/product9.webp" }, "/_fragment/nuxt/assets/builds/meta/84dc9f8e-2ef9-45f2-ade8-60dd29f7a2e6.json": { type: "application/json", etag: '"ac-NA72cX0F856mRICdTwCUGNm4ZcE"', mtime: "2025-06-25T19:32:02.931Z", size: 172, path: "../public/_fragment/nuxt/assets/builds/meta/84dc9f8e-2ef9-45f2-ade8-60dd29f7a2e6.json" } };
    Wr2 = { "/_fragment/nuxt/assets/builds/meta/": { maxAge: 31536e3 }, "/_fragment/nuxt/assets/builds/": { maxAge: 1 }, "/_fragment/nuxt/assets/": { maxAge: 31536e3 } };
    Agent = class extends e5 {
      static {
        __name(this, "Agent");
      }
      __unenv__ = {};
      maxFreeSockets = 256;
      maxSockets = 1 / 0;
      maxTotalSockets = 1 / 0;
      freeSockets = {};
      sockets = {};
      requests = {};
      options;
      constructor(e6 = {}) {
        super(), this.options = e6;
      }
      destroy() {
      }
    };
    Kr3 = notImplemented2("http.request");
    new Agent();
    Fr = { request: Kr3, Agent, validateHeaderName: notImplemented2("http.validateHeaderName"), validateHeaderValue: notImplemented2("http.validateHeaderValue") };
    Zr3 = function(e6) {
      const t12 = useNitroApp();
      return { async fetch(s6, a7, c4) {
        const u4 = {}, d7 = new URL(s6.url);
        if (e6.fetch) {
          const t13 = await e6.fetch(s6, a7, c4, d7, u4);
          if (t13) return t13;
        }
        return async function(e7, t13, s7, a8 = new URL(e7.url), c5 = useNitroApp(), u5) {
          let d8;
          (function(e8) {
            return qr2.test(e8.method);
          })(e7) && (d8 = r10.from(await e7.arrayBuffer()));
          return globalThis.__env__ = t13, c5.localFetch(a8.pathname + a8.search, { context: { waitUntil: /* @__PURE__ */ __name((e8) => s7.waitUntil(e8), "waitUntil"), _platform: { cf: e7.cf, cloudflare: { request: e7, env: t13, context: s7, url: a8, ...u5 } } }, host: a8.hostname, protocol: a8.protocol, method: e7.method, headers: e7.headers, body: d8 });
        }(s6, a7, c4, d7, t12, u4);
      }, scheduled(e7, r11, s6) {
        globalThis.__env__ = r11, s6.waitUntil(t12.hooks.callHook("cloudflare:scheduled", { controller: e7, env: r11, context: s6 }));
      }, email(e7, r11, s6) {
        globalThis.__env__ = r11, s6.waitUntil(t12.hooks.callHook("cloudflare:email", { message: e7, event: e7, env: r11, context: s6 }));
      }, queue(e7, r11, s6) {
        globalThis.__env__ = r11, s6.waitUntil(t12.hooks.callHook("cloudflare:queue", { batch: e7, event: e7, env: r11, context: s6 }));
      }, tail(e7, r11, s6) {
        globalThis.__env__ = r11, s6.waitUntil(t12.hooks.callHook("cloudflare:tail", { traces: e7, env: r11, context: s6 }));
      }, trace(e7, r11, s6) {
        globalThis.__env__ = r11, s6.waitUntil(t12.hooks.callHook("cloudflare:trace", { traces: e7, env: r11, context: s6 }));
      } };
    }({ fetch(e6, t12, r11, s6) {
      if (t12.ASSETS && function(e7 = "") {
        if (Dr2[e7]) return true;
        for (const t13 in Wr2) if (e7.startsWith(t13)) return true;
        return false;
      }(s6.pathname)) return t12.ASSETS.fetch(e6);
    } });
    ({ MIMEParams: Qr3, MIMEType: Jr3, TextDecoder: Vr3, TextEncoder: Yr3, _extend: Gr3, aborted: Xr3, callbackify: es3, debug: ts2, debuglog: rs2, deprecate: ss, format: ns2, formatWithOptions: os2, getCallSite: as2, inherits: is2, inspect: cs2, log: us2, parseArgs: ls2, promisify: ds, stripVTControlCharacters: hs2, toUSVString: ps2, transferableAbortController: fs2, transferableAbortSignal: ms2, isArray: gs2, isDeepStrictEqual: ys2 } = util_default);
    ws = util_default.types;
  }
});

// .wrangler/tmp/bundle-V6d74g/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-V6d74g/middleware-insertion-facade.js
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
init_util2();
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
    } catch (e6) {
      console.error("Failed to drain the unused request body.", e6);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../node_modules/.pnpm/wrangler@4.21.2_@cloudflare+workers-types@4.20250620.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e6) {
  return {
    name: e6?.name,
    message: e6?.message ?? String(e6),
    stack: e6?.stack,
    cause: e6?.cause === void 0 ? void 0 : reduceError(e6.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e6) {
    const error3 = reduceError(e6);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-V6d74g/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Zr3;

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

// .wrangler/tmp/bundle-V6d74g/middleware-loader.entry.ts
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
