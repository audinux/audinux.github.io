![Audinux](../images/AudinuxBanner.png)

## VCV Rack

To get all the available rack plugins:
```
$ dnf search --repoid=copr:copr.fedorainfracloud.org:ycollet:linuxmao rack | grep ^rack- | grep -v "\.src" | cut -d":" -f1
```


To install Rack and all the rack plugins:
```
$ dnf install Rack
$ dnf install `dnf search --repoid=copr:copr.fedorainfracloud.org:ycollet:linuxmao rack | grep ^rack- | grep -v "\.src" | cut -d":" -f1`
```

To avoid a crash when using the jack audio interface of rack, don't put "unlimited" in /etc/security/limits.d/95-jack.conf.

For example, in my settings:
```
@jackuser - rtprio 90
@jackuser - memlock 4194304
```
You must leave some unlocked memory otherwise, Rack will not be able to allocate memory for graphics.

The article "[Playing with modular synthesizers and VCV Rack](https://fedoramagazine.org/vcv-rack-modular-synthesizers/)" talk a little bit more on this topic.
