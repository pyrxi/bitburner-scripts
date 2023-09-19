/** @param {NS} ns */
export async function main(ns) {
    const scriptName = ns.args[0];
    const serversPort0 = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "nectar-net", "harakiri-sushi"];
    const serversPort1 = ["zer0", "neo-net", "CSEC", "max-hardware", "iron-gym"];
    const serversPort2 = ["crush-fitness", "silver-helix", "johnson-ortho", "omega-net", "avmnite-02h", "phantasy", "the-hub"];
    const serversPort3 = ["summit-uni", "rothman-uni", "millenium-fitness", "rho-construction", "I.I.I.I", "netlink", "catalyst", "computek"];
    const serversPort4 = ["aevum-police", "global-pharm", "alpha-ent", "snap-fitness", "unitalife", "zb-def", "univ-energy", "nova-med", "applied-energetics", "run4therh111z", ".", "lexo-corp", "syscore"];
  
    for (let i = 0; i < serversPort0.length; i++) {
      let hostname = serversPort0[i];
  
      let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
      await ns.nuke(hostname);
      await ns.scp(scriptName, hostname);
      await ns.exec(scriptName, hostname, threads);
    }
  
    if (ns.fileExists("BruteSSH.exe")) {
      for (let i = 0; i < serversPort1.length; i++) {
        let hostname = serversPort1[i];
  
        let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
        ns.brutessh(hostname);
        ns.nuke(hostname);
        await ns.scp(scriptName, hostname);
        await ns.exec(scriptName, hostname, threads);
      }
    }
  
    if (ns.fileExists("FTPCrack.exe")) {
      for (let i = 0; i < serversPort2.length; i++) {
        let hostname = serversPort2[i];
  
        let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
        ns.ftpcrack(hostname);
        ns.brutessh(hostname);
        ns.nuke(hostname);
        await ns.scp(scriptName, hostname);
        if (threads > 0) {
          await ns.exec(scriptName, hostname, threads);
        }
      }
    }
  
    if (ns.fileExists("relaySMTP.exe")) {
      for (let i = 0; i < serversPort3.length; i++) {
        let hostname = serversPort3[i];
  
        let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
        ns.relaysmtp(hostname);
        ns.ftpcrack(hostname);
        ns.brutessh(hostname);
        ns.nuke(hostname);
  
        if (ns.getServerRequiredHackingLevel(hostname) < ns.getHackingLevel()) {
          await ns.scp(scriptName, hostname);
          if (threads > 0) {
            await ns.exec(scriptName, hostname, threads);
          }
        }
      }
    }
  
    if (ns.fileExists("HTTPWorm.exe")) {
      for (let i = 0; i < serversPort4.length; i++) {
        let hostname = serversPort4[i];
  
        let threads = Math.trunc(ns.getServerMaxRam(hostname) / ns.getScriptRam(scriptName));
        ns.relaysmtp(hostname);
        ns.ftpcrack(hostname);
        ns.brutessh(hostname);
        ns.nuke(hostname);
  
        if (ns.getServerRequiredHackingLevel(hostname) < ns.getHackingLevel()) {
          await ns.scp(scriptName, hostname);
          if (threads > 0) {
            await ns.exec(scriptName, hostname, threads);
          }
        }
      }
    }
  }