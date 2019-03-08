import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Example extends React.Component {
  state = {
    messages: [],
  };
  //ComponentがDOMツリーに追加される前に一度だけ呼ばれる
  //初期化処理に適している
  //この中でsetStateするとrender時にまとめて行われる
  componentWillMount() {
    this.setState({
      //messages配列に色々追加する
      messages: [
        //相手のメッセージの情報?
        {
          _id: 1,
          //テキスト内容
          text: 'Hello developer これはなに',
          //時間
          createdAt: new Date(),
          //ユーザー情報
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          //メッセージの中の画像
          image: 'https://placeimg.com/140/140/any',
          video: '',
        },
      ],
    });
  }
  //引数を配列で受け取る
  onSend(messages = []) {
    //引数がpreviousState
    this.setState(previousState => ({
      //配列に追加
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        //表示されるメッセージ  Array
        messages={this.state.messages}
        //メッセージが送信された後に実行される  Function
        onSend={messages => this.onSend(messages)}
        //ユーザーの設定?なくても良さそう Object
        user={{
          _id: 1,
        }}
        //キーボードを押したときのアニメーションの設定 デフォルト true  Bool
        isAnimated={true}
        //過去のメッセージをロードする? デフォルト false Bool
        loadEarlier={true}
        
      />
    );
  }
}
