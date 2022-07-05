![Audinux](../images/AudinuxBanner.png)

## VCV Rack

To get all the available Rack 2 plugins:
```
$ dnf repoquery --repoid=copr:copr.fedorainfracloud.org:ycollet:audinux --arch=x86_64 --exclude='*debug*' 'rack-v2-*'
```


To install Rack 2 and all the rack plugins:
```
$ dnf install Rack-v2
$ dnf install $(dnf repoquery --repoid=copr:copr.fedorainfracloud.org:ycollet:audinux --arch=x86_64 --exclude='*debug*' 'rack-v2-*')
```

To avoid a crash when using the jack audio interface of rack, don't put "unlimited" in /etc/security/limits.d/95-jack.conf.

For example, in my settings:
```
@jackuser - rtprio 90
@jackuser - memlock 4194304
```
You must leave some unlocked memory otherwise, Rack will not be able to allocate memory for graphics.

The article "[Playing with modular synthesizers and VCV Rack](https://fedoramagazine.org/vcv-rack-modular-synthesizers/)" talks a little bit more on this topic.
