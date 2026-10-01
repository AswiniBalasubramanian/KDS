import { Bell, Check } from "lucide-react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-6 py-10">
      <header className="space-y-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Kaar Design System</h1>
          <p className="text-sm text-muted-foreground">shadcn/ui foundations. Only the accent changes per product.</p>
        </div>
        <ThemeSwitcher />
      </header>
      <Separator />

      <Section title="Buttons">
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
          <Button size="icon" aria-label="Notifications"><Bell /></Button>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge><Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge><Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one click.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" placeholder="Project name" /></div>
            <div className="space-y-2"><Label htmlFor="notes">Notes</Label><Textarea id="notes" placeholder="Optional notes" /></div>
            <div className="flex items-center gap-2"><Checkbox id="terms" defaultChecked /><Label htmlFor="terms">Accept terms</Label></div>
            <div className="flex items-center gap-2"><Switch id="alerts" defaultChecked /><Label htmlFor="alerts">Email alerts</Label></div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <Dialog>
              <DialogTrigger asChild><Button>Deploy</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Deploy project?</DialogTitle>
                  <DialogDescription>This will publish to production.</DialogDescription>
                </DialogHeader>
                <DialogFooter><Button variant="outline">Cancel</Button><Button>Confirm</Button></DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Alert><Check /><AlertTitle>Saved</AlertTitle><AlertDescription>Your changes were saved.</AlertDescription></Alert>
          <Alert variant="destructive"><Bell /><AlertTitle>Something went wrong</AlertTitle><AlertDescription>Check your connection and retry.</AlertDescription></Alert>
          <Tabs defaultValue="a">
            <TabsList><TabsTrigger value="a">Overview</TabsTrigger><TabsTrigger value="b">Activity</TabsTrigger></TabsList>
            <TabsContent value="a" className="space-y-3 pt-2">
              <Progress value={62} />
              <div className="flex items-center gap-3">
                <Avatar><AvatarFallback>KD</AvatarFallback></Avatar>
                <div className="space-y-2"><Skeleton className="h-3 w-40" /><Skeleton className="h-3 w-24" /></div>
              </div>
            </TabsContent>
            <TabsContent value="b" className="pt-2 text-sm text-muted-foreground">No recent activity.</TabsContent>
          </Tabs>
          <Tooltip><TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger><TooltipContent>Tooltip</TooltipContent></Tooltip>
        </div>
      </div>

      <Section title="Table">
        <Card className="py-2">
          <Table>
            <TableHeader><TableRow><TableHead>Product</TableHead><TableHead>Accent</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {[["Kturn.ai","Maroon"],["Katon","Orange"],["Kiors","Crimson"],["Wingman","Violet"],["Guardian","Blue"]].map(([n,c]) => (
                <TableRow key={n}><TableCell className="font-medium">{n}</TableCell><TableCell>{c}</TableCell><TableCell><Badge variant="secondary">Active</Badge></TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Section>

      <Section title="Nested theme (data-theme + data-mode on a subtree)">
        <div data-theme="wingman" data-mode="dark" className="rounded-xl border bg-background p-6 text-foreground">
          <div className="flex items-center justify-between">
            <div><div className="font-medium">Wingman panel</div><div className="text-sm text-muted-foreground">Dark violet embedded in the page.</div></div>
            <Button>Ask Wingman</Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
