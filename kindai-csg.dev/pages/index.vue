<template>
  <v-layout column justify-center align-center>
    <v-img fluid :src="header_image_src" width="100vw" height="auto"></v-img>
    <br />
    <br />
    <v-flex xs12 sm12>
      <v-container witdh="800px">
        <v-row>
          <v-flex xs12 sm8>
            <v-col>
              <v-card>
                <v-card-title>電子計算機研究会とは</v-card-title>
                <!-- prettier-ignore -->
                <v-card-text>
                  近畿大学理工学部理工会学生部会に属している電子計算機研究会(Computer Study Group)です.
                  (通称:電算研)
                  VR制作, 映像制作, システム開発, ゲーム制作, モデリング, イラストなどの幅広いジャンルの制作活動
                  を行っています. 近畿大学理工学部生なら誰でも入部できます. 電算研であなたの好きなものを作ってみませんか. 
                </v-card-text>
              </v-card>
              <br />
              <br />
              <v-card>
                <v-card-title>お知らせ</v-card-title>
                <v-card-text>調整中です</v-card-text>
              </v-card>
              <br />
              <br />
              <v-card>
                <v-card-title>プロジェクト活動</v-card-title>
                <v-card-text>調整中です</v-card-text>
              </v-card>
              <br />
              <br />
              <v-card>
                <v-card-title>最新記事</v-card-title>
                <v-card-text>調整中です</v-card-text>
              </v-card>
            </v-col>
          </v-flex>
          <v-flex xs12 sm4 style="height: 100%">
            <v-col>
              <video width="100%" loop muted autoplay playsinline controls>
                <source
                  src="https://www.kindai-csg.dev/videos/2020%E5%B9%B4%E5%BA%A6%E9%83%A8%E6%B4%BB%E7%B4%B9%E4%BB%8B.mp4"
                  type="video/mp4"
                />
              </video>
              <!-- prettier-ignore -->
              <a class="twitter-timeline" href="https://twitter.com/Kindai_csg?ref_src=twsrc%5Etfw" height="800px">Tweets by Kindai_csg</a>
              <!-- prettier-ignore -->
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </v-col>
          </v-flex>
        </v-row>
      </v-container>
    </v-flex>
    <!-- <v-window v-model="onboarding" reverse>
      <v-window-item>
        <v-card>
          <v-card-title>VR制作</v-card-title>
          <v-card-text>
            <v-container xs1>
              <v-row>
                <v-col>
                  VRゴーグルのHTC-VIVEを用いたVRゲームの開発をしています.
                  <br />
                  <br />
                  制作にはUnityやUnreal Engine 4を使用しています.
                </v-col>
                <v-col>
                  <v-img :src="vr_image_src" width="100%"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card>
          <v-card-title>システム開発</v-card-title>
          <v-card-text>
            <v-container xs1>
              <v-row>
                <v-col>
                  様々なプログラミング言語を用いWebアプリケーションなどのシステムの開発をしています.
                  <br />
                  <br />
                </v-col>
                <v-col>
                  <v-img :src="vr_image_src" width="100%"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item>
        <h1>slide3</h1>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="n in 3"
          :key="`btn-${n}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions> -->
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      header_image_src: require('@/assets/images/header.png'),
      vr_image_src: require('@/assets/images/vr.png'),
      onboarding: 0
    }
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    }
  }
}
</script>
