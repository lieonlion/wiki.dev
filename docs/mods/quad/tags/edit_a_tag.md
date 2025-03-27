---
title: Edit a Tag
---

# {{ $frontmatter.title }}

## Getting Started

The base functionality Quad supplys are controlled by item and block Tags. So, now the question is, "how do you edit a tag?" All of Quad's APIs are controlled with a datapack, which can be loaded by any vanilla or modded Minecraft world.

::: tip VERSIONS
Some Minecraft versions have different functionality defined in datapacks, and file or folder names can be different. So if something doesn't work, check you followed the correct structure for your selected Minecraft version.
:::

### Making a Datapack

If you are too lazy to read, heres a video you can watch about the steps on creating a datapack.

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/E0BLq5Ll37c" title="Making a Datapack" frameborder="0" allowfullscreen />

::: warning
Note that if you do watch the video, you will _probably_ do more than whats needed. So please only go up to them making the `data` folder, which is about 3:10 into the video. After that point, go to [Structuring a Datapack](#structuring-a-datapack)
:::

#### My tutorial

So, we need to make a datapack. Every datapack starts as a folder, with another folder and 2 files contained within. This main folder can be named anything you want, usually the name of the datapack itself in kebab-case. (`this-would-be-your-datapack-name`).

```
./<datapack-name>
├─ pack.mcmeta
├─ pack.png
└─ data
```

The first file you will make is probably the most important file in a datapack, this is the file that will let minecraft find and load your datapack. If for some reason you do **_not_** see your datapack in the Minecraft menu, check there isn't a mistake with this file (like spelling mistakes, the file named wrong, or missing data). The file `pack.mcmeta` contains very little information, with it using JSON formating, here you can put a description for your datapack, as well as defining the pack's "pack_format" version.

The latest version of Minecraft (as of writitng this) is 1.21.5, which uses the "pack_format" of 71. For other Minecraft versions and what "pack_format" number they use, please check the [Minecraft wiki](https://minecraft.wiki/w/Data_pack#Pack_format), it also includes any extra information like what each new "pack_format" added/changed.

```json [pack.mcmeta]
// COPY ME (and delete this line).
{
  "pack": {
    "description": "Some cool Datapack description, wow",
    "pack_format": 71
  }
}
```

The next file is an optional file, the `pack.png` which will act as a display image in the Minecraft menu. This image _needs_ to be a square to work properly in Minecraft, but its purely visual and Minecraft doesn't care if it doesn't exist or what the image is.

### Structuring a Datapack

## Finding a Tag

### Creating the File

## Tag Values

### Understanding JSON

### NON-Required Values

## Testing the Datapack

## Extra Information
