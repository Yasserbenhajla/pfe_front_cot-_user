import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Msg { sender: 'You'|'Bot'; text: string; }

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  opened = false;
  draft = '';
  messages: Msg[] = [{ sender: 'Bot', text: 'Comment puis-je vous aider ?' }];

  @ViewChild('scrollBox') scrollBox!: ElementRef<HTMLDivElement>;

  // Remplace par ta clé API Gemini
  private readonly geminiKey = 'AIzaSyDiv-bvWaWsnDMLQclMpd0exgvJ8gqY270';

  constructor(private http: HttpClient) {}

  open() { this.opened = true; }
  close() { this.opened = false; }

  async send() {
    const text = this.draft.trim();
    if (!text) return;
    this.messages.push({ sender: 'You', text });
    this.draft = '';
    this.scrollDown();

    try {
      const reply = await this.askGemini(text);
      this.messages.push({ sender: 'Bot', text: reply });
    } catch (error) {
      console.error(error);
      this.messages.push({ sender: 'Bot', text: '⚠️ Sorry—there was a problem.' });
    }
    this.scrollDown();
  }

  private scrollDown() {
    setTimeout(() => {
      const el = this.scrollBox?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  private async askGemini(prompt: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.geminiKey}`;

    const body = {
      contents: [
        { parts: [{ text: prompt }] }
      ]
    };

    const res: any = await this.http.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise();

    // Le résultat attendu (à vérifier sur ta doc API)
    return res?.candidates?.[0]?.content?.parts?.[0]?.text ?? '(no answer)';
  }
}
