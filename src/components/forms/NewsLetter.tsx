import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const NewsLetterForm = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Input
        type="email"
        placeholder="Email address"
        className="rounded-none border-0 border-b-[1px] border-white font-normal text-white placeholder:font-normal placeholder:text-white focus-visible:ring-0"
      />
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="border-white data-[state=checked]:bg-white data-[state=checked]:text-brown"
          />
          <label htmlFor="terms" className="leading-none text-white">
            I agree with the{' '}
            <Link href="#" className="underline">
              Privacy Statement
            </Link>
          </label>
        </div>
        <Button variant="secondary" type="submit">
          Subscribe Now
        </Button>
      </div>
    </div>
  )
}

export default NewsLetterForm
