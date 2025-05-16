# Kernel boot parameters for real-time

Check this web page for a complete list: https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html

## Example

A common example to boot a standard Fedora kernel in real time:
```
preempt=full threadirqs nopti
```

A more complete kernel boot parameters for real time:
```
preempt=full threadirqs nohz_full=2-7 rcu_nocbs=2-7 irqaffinity=0 pcie_aspm=off intel_idle.max_cstate=1 processor.max_cstate=1 amd_pstate=passive audit=0 rcupdate.rcu_expedited=1 idle=nomwait
```

## Explanations

preempt=full
```
preempt=[KNL]
        Select preemption mode if you have CONFIG_PREEMPT_DYNAMIC
        none - Limited to cond_resched() calls
        voluntary - Limited to cond_resched() and might_sleep() calls
        full - Any section that isn't explicitly preempt disabled can be preempted anytime. Tasks will also yield contended spinlocks (if the critical section isn't explicitly preempt disabled beyond the lock itself).
        lazy - Scheduler controlled. Similar to full but instead of preempting the task immediately, the task gets one HZ tick time to yield itself before the preemption will be forced. One preemption is when the task returns to user space.
```

threadirqs
```
threadirqs [KNL,EARLY]
Force threading of all interrupt handlers except those marked explicitly IRQF_NO_THREAD.
```

nohz_full=2-7
```
nohz_full=[KNL,BOOT,SMP,ISOL]
The argument is a cpu list, as described above. In kernels built with CONFIG_NO_HZ_FULL=y, set the specified list of CPUs whose tick will be stopped whenever possible. The boot CPU will be forced outside the range to maintain the timekeeping. Any CPUs in this list will have their RCU callbacks offloaded, just as if they had also been called out in the rcu_nocbs= boot parameter.
```

rcu_nocbs=2-7
```
rcu_nocbs[=cpu-list]
[KNL] The optional argument is a cpu list, as described above.
In kernels built with CONFIG_RCU_NOCB_CPU=y, enable the no-callback CPU mode, which prevents such CPUs' callbacks from being invoked in softirq context. Invocation of such CPUs' RCU callbacks will instead be offloaded to "rcuox/N" kthreads created for that purpose, where "x" is "p" for RCU-preempt, "s" for RCU-sched, and "g" for the kthreads that mediate grace periods; and "N" is the CPU number. This reduces OS jitter on the offloaded CPUs, which can be useful for HPC and real-time workloads. It can also improve energy efficiency for asymmetric multiprocessors.
If a cpulist is passed as an argument, the specified list of CPUs is set to no-callback mode from boot.
Otherwise, if the '=' sign and the cpulist arguments are omitted, no CPU will be set to no-callback mode from boot but the mode may be toggled at runtime via cpusets.
Note that this argument takes precedence over the CONFIG_RCU_NOCB_CPU_DEFAULT_ALL option.
```

irqaffinity=0
```
irqaffinity=[SMP]
Set the default irq affinity mask. The argument is a cpu list, as described above.
```

pcie_aspm=off
```
pcie_aspm=[PCIE] Forcibly enable or ignore PCIe Active State Power Management.
          off    Don't touch ASPM configuration at all. Leave any configuration done by firmware unchanged.
          force  Enable ASPM even on devices that claim not to support it. WARNING: Forcing ASPM on may cause system lockups.
```

intel_idle.max_cstate=1
```
intel_idle.max_cstate=[KNL,HW,ACPI,X86]
          0      disables intel_idle and fall back on acpi_idle.
          1 to 9 specify maximum depth of C-state.
```

processor.max_cstate=1
```
processor.max_cstate=[HW,ACPI]
Limit processor to maximum C-state max_cstate=9 overrides any DMI blacklist limit.
```

amd_pstate=passive
```
amd_pstate=[X86,EARLY]
          disable  Do not enable amd_pstate as the default scaling driver for the supported processors
          passive  Use amd_pstate with passive mode as a scaling driver. In this mode autonomous selection is disabled. Driver requests a desired performance level and platform tries to match the same performance level if it is satisfied by guaranteed performance level.
          active   Use amd_pstate_epp driver instance as the scaling driver, driver provides a hint to the hardware if software wants to bias toward performance (0x0) or energy efficiency (0xff) to the CPPC firmware. then CPPC power algorithm will calculate the runtime workload and adjust the realtime cores frequency.
          guided   Activate guided autonomous mode. Driver requests minimum and maximum performance level and the platform autonomously selects a performance level in this range and appropriate to the current workload.
```

audit=0
```
audit=[KNL] Enable the audit sub-system
          Format: { "0" | "1" | "off" | "on" }
          0 | off - kernel audit is disabled and can not be enabled until the next reboot
          unset - kernel audit is initialized but disabled and will be fully enabled by the userspace auditd.
          1 | on - kernel audit is initialized and partially enabled, storing at most audit_backlog_limit messages in RAM until it is fully enabled by the userspace auditd.
Default: unset
```

rcupdate.rcu_expedited=1
```
rcupdate.rcu_expedited=[KNL]
          Use expedited grace-period primitives, for example, synchronize_rcu_expedited() instead of synchronize_rcu(). This reduces latency, but can increase CPU utilization, degrade real-time latency, and degrade energy efficiency. No effect on CONFIG_TINY_RCU kernels.
```

idle=nomwait
```
idle=[X86,EARLY]
          Format: idle=poll, idle=halt, idle=nomwait
          idle=poll:  Don't do power saving in the idle loop using HLT, but poll for rescheduling event. This will make the CPUs eat a lot more power, but may be useful to get slightly better performance in multiprocessor benchmarks. It also makes some profiling using performance counters more accurate. Please note that on systems with MONITOR/MWAIT support (like Intel EM64T CPUs) this option has no performance advantage over the normal idle loop. It may also interact badly with hyperthreading.
          idle=halt: Halt is forced to be used for CPU idle. In such case C2/C3 won't be used again.
          idle=nomwait: Disable mwait for CPU C-states
```

## Some important definitions

What is RCU (https://www.kernel.org/doc/html/latest/RCU/whatisRCU.html):

RCU is a synchronization mechanism that was added to the Linux kernel during the 2.5 development effort that is optimized for read-mostly situations. Although RCU is actually quite simple, making effective use of it requires you to think differently about your code. Another part of the problem is the mistaken assumption that there is “one true way” to describe and to use RCU. Instead, the experience has been that different people must take different paths to arrive at an understanding of RCU, depending on their experiences and use cases. This document provides several different paths, as follows:

What is C-state (https://www.golinuxhub.com/2018/06/what-cpu-c-states-check-cpu-core-linux/):

There are various power modes of the CPU which are determined on the basis of their current usage and are collectively called “C-states” or “C-modes.”

## Some boot paremeters with positive impact one real time

```
rcupdate.rcu_normal=[KNL]
Use only normal grace-period primitives, for example, synchronize_rcu() instead of synchronize_rcu_expedited(). This improves real-time latency, CPU utilization, and energy efficiency, but can expose users to increased grace-period latency. This parameter overrides rcupdate.rcu_expedited. No effect on CONFIG_TINY_RCU kernels.
```


```
rcutree.kthread_prio=[KNL,BOOT]
Set the SCHED_FIFO priority of the RCU per-CPU kthreads (rcuc/N). This value is also used for the priority of the RCU boost threads (rcub/N) and for the RCU grace-period kthreads (rcu_bh, rcu_preempt, and rcu_sched). If RCU_BOOST is set, valid values are 1-99 and the default is 1 (the least-favored priority). Otherwise, when RCU_BOOST is not set, valid values are 0-99 and the default is zero (non-realtime operation). When RCU_NOCB_CPU is set, also adjust the priority of NOCB callback kthreads.
```

```
nopti [X86-64,EARLY]
Equivalent to pti=off
```

```
pti=[X86-64]
Control Page Table Isolation of user and kernel address spaces. Disabling this feature removes hardening, but improves performance of system calls and interrupts.
          on   - unconditionally enable
          off  - unconditionally disable
          auto - kernel detects whether your CPU model is vulnerable to issues that PTI mitigates
Not specifying this option is equivalent to pti=auto.
```

## Links

### Links in french

A presentation about real time: https://doc.fedora-fr.org/wiki/Fedora_et_le_Temps_R%C3%A9el

A tutorial on how to build a kernel for real time: https://doc.fedora-fr.org/wiki/Mise_en_%C5%93uvre_de_PREEMPT-RT_pour_cr%C3%A9er_un_noyau_Temps_R%C3%A9el_mou

A tutorial on how to build a Xenomai real time kernel: https://doc.fedora-fr.org/wiki/Mise_en_%C5%93uvre_de_Xenomai_pour_cr%C3%A9er_un_noyau_Temps_R%C3%A9el_dur
