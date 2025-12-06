import { Button } from '@/app/components/button';
import { Card, CardBody, CardHeader } from '@/app/components/card';
import { FormInput, FormItem, FormTextarea } from '@/app/components/form';
import { Label } from '@/app/components/label';
import { Title } from '@/app/components/title';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-noto dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black items-start">
        <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <Title>Sample-api-project</Title>
          <form className="flex flex-col w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <FormItem>
                <Label>제목</Label>
                <FormInput placeholder="제목을 입력해주세요." />
              </FormItem>
              <FormItem>
                <Label>내용</Label>
                <FormTextarea placeholder="내용을 입력해주세요." />
              </FormItem>
              <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <Button type="button" className="md:ml-auto">
                  저장
                </Button>
              </div>
            </div>
          </form>
          <div className="flex flex-col w-full">
            <Label>리스트 확인</Label>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <ul>
                <li className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
                  <Card>
                    <CardHeader>제목</CardHeader>
                    <CardBody>내용</CardBody>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
