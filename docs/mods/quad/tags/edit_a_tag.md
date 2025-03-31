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

#### TL;DR

If you are too lazy to read, heres a video you can watch about the steps on creating a datapack.

<iframe width="100%" style="aspect-ratio: 16 / 9; border-radius: 8px" src="https://www.youtube.com/embed/E0BLq5Ll37c" title="Making a Datapack" frameborder="0" allowfullscreen />

::: warning
Note that if you do watch the video, you will _probably_ do more than whats needed. So please only go up to them making the `data` folder, which is about 3:10 into the video. After that point, go to [Structuring a Datapack](#structuring-a-datapack).
:::

#### My tutorial

So, we need to make a datapack. Every datapack starts as a folder, with another folder and 2 files contained within. This main folder can be named anything you want, usually the name of the datapack itself in kebab-case. (`this-would-be-your-datapack-name`).

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

Now we have the start of the datapack done, we need to talk about how were are going to structure this datapack to edit tags.

We will start with that last item in the main folder, a folder called `data/`, which will be placed with the `pack.mcmeta` and the `pack.png` (if you have one). So you should have these files and a data folder.

```
📂 <datapack-name>
├─ 📄 pack.mcmeta
├─ 📄 pack.png
└─ 📁 data
```

This `data` folder is where all the data of your datapack will be placed. Now in this `data` folder, you can make as many folders as you want, called whatever you want. These new folders is what will be the data's namespace, and is used at the base location for all the data related to a certain project (`<namespace>:<data>`). For example, all the Minecraft base datapack data is in the namespace of `minecraft`, so you could edit and override this data by making a folder `<datapack-name>/data/minecraft/`.

Normally, you would create a folder with your own unique namespace, however, with editing a Quad tags, you need to use the `quad` namespace (a tag would look like `quad:<tag-name>`), so create a folder called `quad` so you get `<datapack-name>/data/quad/`.

```
📂 <datapack-name>
├─ 📄 pack.mcmeta
├─ 📄 pack.png
└─ 📂 data
    ├─ 📁 quad
    └─ 📁 <your-namespace>
```

If you want to add your own namespace (we wont use this for tags, but it will be used for other data like `block_replacements`), then make another folder in `data`, and call it what you want.

::: tip
Keep the name of the namespace short, you need it to be rememberable and easy to type, as it will be used for referencing other data (such as with a tag, `<your-namespace>:<tag-name>`).
:::

#### Big Shock

Tags are placed in the `tags` folder 😱 under a namespace. And here is where it becomes different for newer versions. With 1.20.6, Minecraft changed how some of their folder names were, mostly making plural names singular (`tags/items` went to `tags/item`).

::: warning
The next folders and files we will be creating will be in the `data/quad` folder, if it is not in the folder, so if the features don't work, did you create the files in the `quad` namespace?
:::

So, the files in the `tags` folder, Quad adds 4 different types:

- Items
- Blocks
- Enchantments (removed from Minecraft versions 1.21+)
- Structures

::: code-group

```[~1.20.4]
📂 quad
└─ 📂 tags
    ├─ 📁 items
    ├─ 📁 blocks
    ├─ 📁 enchantments
    └─ 📂 worldgen
        └─ 📁 structures
```

```[1.20.6+]
📂 quad
└─ 📂 tags
    ├─ 📁 item
    ├─ 📁 block
    ├─ 📁 enchantment
    └─ 📂 worldgen
        └─ 📁 structure
```

:::

::: danger
Please make sure you used the correct Minecraft version for the names.

With Quad for Minecraft 1.21, `enchantment(s)` tags are no longer available.
:::

## Finding a Tag

### Creating the File

```json [quad/tags/item/tag_name.json]
{
  "replace": false,
  "values": []
}
```

## Tag Values

### Understanding JSON

### NON-Required Values

## Testing the Datapack

## Extra Information
