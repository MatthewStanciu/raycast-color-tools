import { Color, List, Icon, Detail, ImageMask, Form, ActionPanel, render } from '@raycast/api'
import { useState } from 'react'

export default function main() {
  const [text, setText] = useState<string>('33fd8f')
  return (
    <Form
      actions={
        <ActionPanel>
          <ActionPanel.Item
            title="See Color"
            onAction={() => {
              render(
                <List>
                  <List.Item
                    title={text.replace('#', '')}
                    icon={{
                      source: `https://singlecolorimage.com/get/${text.replace('#', '')}/100x100`,
                      mask: ImageMask.Circle,
                    }}
                  />
                </List>
              )
            }}
          />
        </ActionPanel>
      }
    >
      <Form.TextField id="color" value={text} defaultValue="33fd8f" onChange={setText} />
    </Form>
  )
}
